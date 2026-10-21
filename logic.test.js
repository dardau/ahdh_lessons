import test from 'node:test';
import assert from 'node:assert/strict';
import {topics,days,readings} from './data.js';
import {isCorrect,score,remainingSeconds,deadlineDays,sanitizeState} from './logic.js';
test('all fourteen topics occur exactly once in the seven-day curriculum',()=>{
 assert.equal(topics.length,14);assert.equal(readings.length,7);
 assert.deepEqual(days.flatMap(d=>d.topics).sort((a,b)=>a-b),topics.map(t=>t.id));
 for(const t of topics){assert.equal(t.questions.length,12);assert.ok(t.chapter.meaning.length>100);assert.equal(t.chapter.forms.length,4);assert.equal(t.chapter.examples.length,2);for(const q of t.questions){if(q.type!=='text'){assert.equal(new Set(q.options).size,3);assert.ok(q.options.includes(q.answer));}assert.ok(q.why.length>10)}}
 assert.equal(new Set(topics.flatMap(t=>t.questions.map(q=>q.id))).size,168);
});
test('scoring distinguishes missing and incorrect answers',()=>{
 const qs=topics[0].questions;assert.equal(score({},qs),0);
 assert.equal(score({[qs[0].id]:qs[0].answer,[qs[1].id]:'wrong'},qs),1);
});
test('typed answers normalize case, punctuation and curly apostrophes without accepting wrong grammar',()=>{
 const q=topics[1].questions[7];
 assert.ok(isCorrect("  DOESN'T   WORK. ",q));
 assert.ok(isCorrect("doesn’t work",q));
 assert.ok(isCorrect("does not work",q));
 assert.equal(isCorrect("doesn't works",q),false);
 assert.equal(isCorrect(undefined,q),false);
 assert.equal(isCorrect('',q),false);
});
test('all canonical answers and allowed variants score, including newly added IDs after import',()=>{
 const answers=Object.fromEntries(topics.flatMap(t=>t.questions.map(q=>[q.id,q.answer])));
 const restored=sanitizeState({answers}).answers;
 assert.equal(score(restored,topics.flatMap(t=>t.questions)),168);
 for(const q of topics.flatMap(t=>t.questions))for(const variant of q.accept||[])assert.ok(isCorrect(variant,q));
 assert.equal(score(answers,topics.flatMap(t=>t.questions.slice(2,4))),28);
});
test('timer uses elapsed wall time and cannot go negative',()=>{
 assert.equal(remainingSeconds(26000,1000),25);
 assert.equal(remainingSeconds(26000,26700),0);
});
test('deadline counts seven days and never locks into negative days',()=>{
 assert.equal(deadlineDays(1000,1000),7);
 assert.equal(deadlineDays(1000,1000+8*86400000),0);
});
test('imports strip markup in numeric statistics and unsafe keys',()=>{
 const s=sanitizeState({selected:99,minutes:'<img>',baseline:{score:'<svg>',total:14},answers:{'0-0':'am',constructor:'bad'}});
 assert.equal(s.selected,0);assert.equal(s.minutes,0);assert.equal(s.baseline,undefined);
 assert.deepEqual(s.answers,{'0-0':'am'});
 assert.throws(()=>sanitizeState({writing:[]}));
});
test('progress and active timer survive valid round trip',()=>{
 const raw={start:1,selected:2,answers:{'0-0':'am'},writing:{'0':'My draft'},checks:{'0':true},timer:{duration:10,left:600,running:true,end:900000}};
 const s=sanitizeState(JSON.parse(JSON.stringify(raw)));
 assert.equal(s.writing[0],'My draft');assert.equal(s.timer.end,900000);assert.equal(s.checks[0],true);
});
