function _0x46db(_0x3f88a6,_0x22806d){const _0x1aecc6=_0x1aec();return _0x46db=function(_0x46db2c,_0x5b92d0){_0x46db2c=_0x46db2c-0x1b6;let _0x1a9dbc=_0x1aecc6[_0x46db2c];return _0x1a9dbc;},_0x46db(_0x3f88a6,_0x22806d);}const _0x581eef=_0x46db;(function(_0x212de4,_0x3c6239){const _0x57a05f=_0x46db,_0x552b3e=_0x212de4();while(!![]){try{const _0x3c3467=-parseInt(_0x57a05f(0x1c1))/0x1+-parseInt(_0x57a05f(0x1dd))/0x2+parseInt(_0x57a05f(0x1fd))/0x3*(parseInt(_0x57a05f(0x1c6))/0x4)+-parseInt(_0x57a05f(0x1ea))/0x5+-parseInt(_0x57a05f(0x1ec))/0x6*(-parseInt(_0x57a05f(0x202))/0x7)+parseInt(_0x57a05f(0x1ca))/0x8*(parseInt(_0x57a05f(0x1d3))/0x9)+-parseInt(_0x57a05f(0x209))/0xa*(-parseInt(_0x57a05f(0x1f5))/0xb);if(_0x3c3467===_0x3c6239)break;else _0x552b3e['push'](_0x552b3e['shift']());}catch(_0x3a794d){_0x552b3e['push'](_0x552b3e['shift']());}}}(_0x1aec,0x4a670));const cluster=require('cluster'),{spawn}=require(_0x581eef(0x1fe)),path=require(_0x581eef(0x1bb)),fs=require('fs'),os=require('os'),express=require('express'),app=express(),port=process[_0x581eef(0x200)][_0x581eef(0x1b7)]||0xbb8;console[_0x581eef(0x1c7)](_0x581eef(0x1d2),_0x581eef(0x203)+port+_0x581eef(0x1de)),app[_0x581eef(0x207)]('/',(_0x2f5b14,_0x4014ad)=>{const _0x126d49=_0x581eef;_0x4014ad['setHeader'](_0x126d49(0x1f9),_0x126d49(0x1d1));const _0x44a75e={'status':_0x126d49(0x1c5),'message':_0x126d49(0x1ee),'author':'WenBotz'},_0x3609cb={'response':_0x44a75e};_0x4014ad[_0x126d49(0x1e6)](JSON[_0x126d49(0x1c3)](_0x3609cb,null,0x2));});function listenOnPort(_0x4b7e3c){const _0x161971=_0x581eef;app[_0x161971(0x1ce)](_0x4b7e3c,()=>{const _0x427c11=_0x161971;console[_0x427c11(0x1c7)](_0x427c11(0x1e9)+_0x4b7e3c);}),app['on'](_0x161971(0x1f7),_0x514dcd=>{const _0x258248=_0x161971;_0x514dcd[_0x258248(0x1c0)]==='EADDRINUSE'?(console[_0x258248(0x1c7)](_0x258248(0x1f1)+_0x4b7e3c+_0x258248(0x1fc)),listenOnPort(_0x4b7e3c+0x1)):console['error'](_0x514dcd);});}listenOnPort(port);let isRunning=![];function start(_0x351c53){const _0x395b2c=_0x581eef;if(isRunning)return;isRunning=!![];const _0x29bede=[path[_0x395b2c(0x1ba)](__dirname,_0x351c53),...process[_0x395b2c(0x1ff)][_0x395b2c(0x1c8)](0x2)],_0x59272b=spawn(process[_0x395b2c(0x1ff)][0x0],_0x29bede,{'stdio':[_0x395b2c(0x1c2),_0x395b2c(0x1c2),_0x395b2c(0x1c2),_0x395b2c(0x1d8)]});_0x59272b['on'](_0x395b2c(0x1f8),_0x221be7=>{const _0x6f8be3=_0x395b2c;console['log'](_0x6f8be3(0x206),'🟢\x20RECEIVED\x20'+_0x221be7);switch(_0x221be7){case _0x6f8be3(0x1eb):_0x59272b['kill'](),isRunning=![],start[_0x6f8be3(0x1d6)](this,arguments);break;case _0x6f8be3(0x1da):_0x59272b[_0x6f8be3(0x1e6)](process['uptime']());break;}}),_0x59272b['on'](_0x395b2c(0x1db),_0x14cef4=>{const _0x41429c=_0x395b2c;isRunning=![],console[_0x41429c(0x1f7)](_0x41429c(0x1cf),_0x41429c(0x1fa)+_0x14cef4),start(_0x41429c(0x1e2));if(_0x14cef4===0x0)return;fs[_0x41429c(0x1f3)](_0x29bede[0x0],()=>{const _0x34281f=_0x41429c;fs[_0x34281f(0x1e3)](_0x29bede[0x0]),console[_0x34281f(0x1f7)](_0x34281f(0x1cf),_0x34281f(0x1ed)+_0x29bede[0x0]+_0x34281f(0x1f0)),start(_0x34281f(0x1e2));});}),_0x59272b['on'](_0x395b2c(0x1f7),_0x20daac=>{const _0x7c78fe=_0x395b2c;console[_0x7c78fe(0x1f7)]('\x1b[31m%s\x1b[0m',_0x7c78fe(0x1cc)+_0x20daac),_0x59272b[_0x7c78fe(0x1b8)](),isRunning=![],console[_0x7c78fe(0x1f7)](_0x7c78fe(0x1cf),_0x7c78fe(0x201)),start(_0x7c78fe(0x1e2));});const _0x2319e1=path[_0x395b2c(0x1ba)](__dirname,_0x395b2c(0x1d9));fs[_0x395b2c(0x1df)](_0x2319e1,(_0x3bbbfd,_0x5114f5)=>{const _0x43e588=_0x395b2c;if(_0x3bbbfd){console[_0x43e588(0x1f7)](_0x43e588(0x1cf),_0x43e588(0x1c9)+_0x3bbbfd);return;}console[_0x43e588(0x1c7)](_0x43e588(0x1d2),_0x43e588(0x1f6)+_0x5114f5[_0x43e588(0x1e5)]+_0x43e588(0x1e8)+_0x2319e1);try{require[_0x43e588(0x1e0)](_0x43e588(0x1f2)),console['log'](_0x43e588(0x1d2),_0x43e588(0x204)+require(_0x43e588(0x1d4))[_0x43e588(0x1bd)]+_0x43e588(0x1d0));}catch(_0x4fa00b){console[_0x43e588(0x1f7)](_0x43e588(0x1cf),_0x43e588(0x1dc));}}),console[_0x395b2c(0x1c7)](_0x395b2c(0x1e1)+os[_0x395b2c(0x208)]()+'\x1b[0m,\x20\x1b[33m'+os[_0x395b2c(0x205)]()+_0x395b2c(0x1b6)+os['arch']()+_0x395b2c(0x1c4));const _0x2c1147=os[_0x395b2c(0x1d7)]()/(0x400*0x400*0x400);console[_0x395b2c(0x1c7)](_0x395b2c(0x1b9)+_0x2c1147[_0x395b2c(0x1f4)](0x2)+_0x395b2c(0x1bf));const _0x461b1e=os[_0x395b2c(0x1be)]()/(0x400*0x400*0x400);console['log'](_0x395b2c(0x1fb)+_0x461b1e[_0x395b2c(0x1f4)](0x2)+_0x395b2c(0x1bf)),console[_0x395b2c(0x1c7)](_0x395b2c(0x1d2),_0x395b2c(0x1cd)),setInterval(()=>{},0x3e8);}start(_0x581eef(0x1e2));const tmpDir='./tmp';!fs[_0x581eef(0x1d5)](tmpDir)&&(fs[_0x581eef(0x1ef)](tmpDir),console['log']('\x1b[33m%s\x1b[0m',_0x581eef(0x1e4)+tmpDir));process['on'](_0x581eef(0x1bc),_0x56c8eb=>{const _0x43ed65=_0x581eef;console[_0x43ed65(0x1f7)]('\x1b[31m%s\x1b[0m',_0x43ed65(0x1e7)+_0x56c8eb),console[_0x43ed65(0x1f7)](_0x43ed65(0x1cf),_0x43ed65(0x1cb)),start('main.js');}),process['on'](_0x581eef(0x1db),_0x37e411=>{const _0x98b39=_0x581eef;console[_0x98b39(0x1f7)]('Exited\x20with\x20code:\x20'+_0x37e411),console[_0x98b39(0x1f7)]('Script\x20will\x20restart...'),start(_0x98b39(0x1e2));});function _0x1aec(){const _0x1d80f8=['child_process','argv','env','Error\x20occurred.\x20Script\x20will\x20restart...','15379XxLjrr','🌐\x20Port\x20','🟡\x20Baileys\x20library\x20version\x20','release','\x1b[36m%s\x1b[0m','get','type','221710jUWGur','\x1b[0m\x20-\x20\x1b[33m','PORT','kill','💾\x20\x1b[33mTotal\x20RAM:\x20','join','path','unhandledRejection','version','freemem','\x20GB\x1b[0m','code','528730ESZKcs','inherit','stringify','\x1b[0m','true','5780nExuwG','log','slice','Error\x20reading\x20plugins\x20folder:\x20','8RoiHtz','Unhandled\x20promise\x20rejection.\x20Script\x20will\x20restart...','Error:\x20','📃\x20Script\x20by\x20WenBotz','listen','\x1b[31m%s\x1b[0m','\x20is\x20installed','application/json','\x1b[33m%s\x1b[0m','3213585GRTytc','@adiwajshing/baileys/package.json','existsSync','apply','totalmem','ipc','plugins','uptime','exit','❌\x20Baileys\x20library\x20is\x20not\x20installed','420376LcEuwx','\x20is\x20open','readdir','resolve','🖥️\x20\x1b[33m','main.js','unwatchFile','📁\x20Created\x20directory\x20','length','send','Unhandled\x20promise\x20rejection:\x20','\x20plugins\x20in\x20folder\x20','Server\x20is\x20running\x20on\x20port\x20','383785cayYpU','reset','606ZYWMAp','File\x20','Bot\x20Successfully\x20Activated!','mkdirSync','\x20has\x20been\x20modified.\x20Script\x20will\x20restart...','Port\x20','@adiwajshing/baileys','watchFile','toFixed','55DjFEAP','🟡\x20Found\x20','error','message','Content-Type','Exited\x20with\x20code:\x20','💽\x20\x1b[33mFree\x20RAM:\x20','\x20is\x20already\x20in\x20use.\x20Trying\x20another\x20port...','894KfxPmI'];_0x1aec=function(){return _0x1d80f8;};return _0x1aec();}