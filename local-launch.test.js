import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {execFileSync} from 'node:child_process';

test('direct-file entry uses a classic script and renders without fetch', () => {
  execFileSync(process.execPath, ['build.mjs'], {cwd:import.meta.dirname});
  const html = fs.readFileSync(new URL('index.html', import.meta.url), 'utf8');
  assert.match(html, /<script defer src="app\.bundle\.js">/);
  assert.doesNotMatch(html, /type="module"/);
  const target = {innerHTML:''};
  const listeners = {};
  const document = {
    querySelector(selector) { assert.equal(selector, '#app'); return target; },
    body: {classList:{toggle(){}}},
    addEventListener(name, handler) { listeners[name] = handler; }
  };
  const storage = new Map();
  const context = vm.createContext({
    document, window:{scrollTo(){}},
    localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)},
    setInterval(){}, setTimeout(){}, console
  });
  const script = new vm.Script(fs.readFileSync(new URL('app.bundle.js', import.meta.url),'utf8'));
  script.runInContext(context);
  assert.match(target.innerHTML, /Начать мой спринт/);
  assert.match(target.innerHTML, /56/);
  // Exercise start action to prove the classic-script handler is registered.
  listeners.click({target:{closest:()=>({dataset:{action:'start'}})}});
  assert.match(target.innerHTML, /Твой ответ на английском/);
  assert.ok(JSON.parse(storage.get('dariya-english-v1')).start);
  // Some browsers deny storage on file URLs. The app must still render.
  context.localStorage.getItem=()=>{throw new Error('Storage denied')};
  script.runInContext(context);
  assert.match(target.innerHTML, /Хранилище недоступно/);
  assert.match(target.innerHTML, /Начать мой спринт/);
});
