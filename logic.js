export function normalize(s){return String(s??'').toLowerCase().trim().replace(/[’‘]/g,"'").replace(/[.!?]+$/,'').replace(/\s+/g,' ')}
export function isCorrect(answer,q){return typeof answer==='string'&&[q.answer,...(q.accept||[])].some(a=>normalize(a)===normalize(answer))}
export function score(answers,questions){return questions.filter(q=>isCorrect(answers[q.id],q)).length}
export function remainingSeconds(end,now=Date.now()){return Math.max(0,Math.ceil((end-now)/1000))}
export function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
export function deadlineDays(start,now=Date.now()){return Math.max(0,Math.ceil((start+7*86400000-now)/86400000))}
export function sanitizeState(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))throw new Error('Invalid state');
 const s={start:null,selected:0,answers:{},writing:{},checks:{},reading:{},listening:{},sessions:0,minutes:0,timer:null};
 const n=x=>typeof x==='number'&&Number.isFinite(x)&&x>=0;
 if(n(raw.start)&&raw.start>0)s.start=raw.start;
 if(Number.isInteger(raw.selected)&&raw.selected>=0&&raw.selected<7)s.selected=raw.selected;
 for(const key of ['answers','writing','checks','reading','listening']){
   const map=raw[key];if(map===undefined)continue;
   if(!map||typeof map!=='object'||Array.isArray(map))throw new Error('Invalid map');
   for(const [id,value] of Object.entries(map)){
     if(!/^(?:[0-9]|1[0-3])(?:-(?:[0-9]|1[01]))?$/.test(id))continue;
     if(['answers','writing'].includes(key)){if(typeof value==='string')s[key][id]=value.slice(0,50000)}
     else if(typeof value==='boolean')s[key][id]=value;
   }
 }
 for(const key of ['sessions','minutes'])if(n(raw[key]))s[key]=Math.min(raw[key],1000000);
 for(const key of ['baseline','final'])if(raw[key]&&n(raw[key].score)&&n(raw[key].total)&&raw[key].score<=raw[key].total)s[key]={score:raw[key].score,total:raw[key].total,date:n(raw[key].date)?raw[key].date:0};
 for(const key of ['bookNotes',...Array.from({length:7},(_,i)=>'reflection'+i)])if(typeof raw[key]==='string')s[key]=raw[key].slice(0,50000);
 const t=raw.timer;
 if(t&&[10,25,45].includes(t.duration)&&n(t.left)&&t.left<=t.duration*60&&typeof t.running==='boolean'&&(!t.running||n(t.end)))s.timer={duration:t.duration,left:t.left,running:t.running,end:t.end};
 return s;
}

