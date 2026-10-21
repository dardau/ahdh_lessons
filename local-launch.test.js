import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {execFileSync} from 'node:child_process';
import {topics} from './data.js';

test('direct-file entry uses a classic script and renders without fetch', () => {
  execFileSync(process.execPath, ['build.mjs'], {cwd:import.meta.dirname});
  const html = fs.readFileSync(new URL('index.html', import.meta.url), 'utf8');
  assert.match(html, /<script defer src="app\.bundle\.js">/);
  assert.doesNotMatch(html, /type="module"/);
  const target = {innerHTML:''};
  const listeners = {};
  const document = {
    querySelector(selector) { if(selector==='#quizError')return error;assert.equal(selector, '#app'); return target; },
    body: {classList:{toggle(){}}},
    addEventListener(name, handler) { listeners[name] = handler; }
  };
  const storage = new Map();
  const error={textContent:''};
  const context = vm.createContext({
    document, window:{scrollTo(){}},
    localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)},
    setInterval(){}, setTimeout(){}, console
  });
  const script = new vm.Script(fs.readFileSync(new URL('app.bundle.js', import.meta.url),'utf8'));
  script.runInContext(context);
  assert.match(target.innerHTML, /Начать мой спринт/);
  assert.match(target.innerHTML, /168/);
  // Exercise start action to prove the classic-script handler is registered.
  listeners.click({target:{closest:()=>({dataset:{action:'start'}})}});
  assert.match(target.innerHTML, /Твой ответ на английском/);
  assert.ok(JSON.parse(storage.get('dariya-english-v1')).start);
  const click=dataset=>listeners.click({target:{closest:()=>({dataset})},preventDefault(){}});
  for(const t of topics){
    click({study:String(t.id)});
    assert.ok(target.innerHTML.includes(t.chapter.meaning));
    assert.match(target.innerHTML,/Как построить предложение/);
    assert.match(target.innerHTML,/Написать самостоятельно/);
    click({topic:String(t.id),block:'1'});
    assert.equal((target.innerHTML.match(/data-quiz-answer/g)||[]).length,4);
    for(const q of t.questions.slice(4,8)){
      listeners.input({target:{id:'answer-'+q.id,name:q.id,type:'text',dataset:{quizAnswer:''},value:q.answer.toUpperCase()+'.'}});
    }
    listeners.submit({target:{id:'quizForm'},preventDefault(){}});
    assert.match(target.innerHTML,/<h2>4 \/ 4<\/h2>/);
    assert.match(target.innerHTML,/✓ Верно/);
  }
  // A wrong answer receives an explanation and becomes reviewable.
  click({topic:'0',block:'2'});
  topics[0].questions.slice(8,12).forEach(q=>listeners.input({target:{id:'answer-'+q.id,name:q.id,type:'text',dataset:{quizAnswer:''},value:'wrong'}}));
  listeners.submit({target:{id:'quizForm'},preventDefault(){}});
  assert.match(target.innerHTML,/<h2>0 \/ 4<\/h2>/);
  assert.match(target.innerHTML,/Правильный ответ/);
  click({action:'mistakes'});
  assert.match(target.innerHTML,/Разберём ошибки/);
  assert.equal((target.innerHTML.match(/data-quiz-answer/g)||[]).length,4);
  click({view:'review'});
  assert.match(target.innerHTML,/12 верных ответов/);
  click({action:'final'});
  assert.match(target.innerHTML,/\/ 28/);
  // Some browsers deny storage on file URLs. The app must still render.
  context.localStorage.getItem=()=>{throw new Error('Storage denied')};
  script.runInContext(context);
  assert.match(target.innerHTML, /Хранилище недоступно/);
  assert.match(target.innerHTML, /Начать мой спринт/);
});
