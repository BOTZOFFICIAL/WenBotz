const _0x1c03a2=_0xfd78;(function(_0x35e996,_0x3b653f){const _0x1abe47=_0xfd78,_0x3ac8be=_0x35e996();while(!![]){try{const _0x5a8de7=-parseInt(_0x1abe47(0x1d1))/0x1+parseInt(_0x1abe47(0x1e1))/0x2+-parseInt(_0x1abe47(0x1d7))/0x3+parseInt(_0x1abe47(0x1ec))/0x4+parseInt(_0x1abe47(0x1e9))/0x5*(parseInt(_0x1abe47(0x1e5))/0x6)+parseInt(_0x1abe47(0x1d9))/0x7*(-parseInt(_0x1abe47(0x1d6))/0x8)+parseInt(_0x1abe47(0x1d0))/0x9;if(_0x5a8de7===_0x3b653f)break;else _0x3ac8be['push'](_0x3ac8be['shift']());}catch(_0x496b7e){_0x3ac8be['push'](_0x3ac8be['shift']());}}}(_0x5608,0xc19ba));function _0x5608(){const _0xef3ae8=['creds.json','5407140fynaTv','Skipping\x20directory:\x20','./sessions','Deleted\x20files:','5LTfPsx','reply','join','1173072TbiLWv','chat','length','3465117wYedql','276901LDXQxS','Success!','path','forEach','tidak\x20ada\x20file\x20yang\x20tersisa\x20di\x20folder\x20sessions','80pTmDfN','3124752rHRFcB','push','533540KqiXhB','log','tags','rowner','Deleted\x20files:\x0a','owner','command','clearsession','2588464gqXgrL','exports','isDirectory'];_0x5608=function(){return _0xef3ae8;};return _0x5608();}function _0xfd78(_0x5d3a4e,_0x429e19){const _0x5608e3=_0x5608();return _0xfd78=function(_0xfd7833,_0x3ceb5a){_0xfd7833=_0xfd7833-0x1cf;let _0x4a2107=_0x5608e3[_0xfd7833];return _0x4a2107;},_0xfd78(_0x5d3a4e,_0x429e19);}const {readdirSync,statSync,unlinkSync}=require('fs'),{join}=require(_0x1c03a2(0x1d3));let handler=async(_0x5be4b3,{conn:_0x1f6959,usedPrefix:_0x1ff43a,args:_0x248bb6})=>{const _0x2c2eab=_0x1c03a2,_0x50c018=[_0x2c2eab(0x1e7)],_0x3e9ba7=[];_0x50c018[_0x2c2eab(0x1d4)](_0x208b87=>{const _0x136f4a=_0x2c2eab;readdirSync(_0x208b87)[_0x136f4a(0x1d4)](_0xba8a1a=>{const _0x16ff6a=_0x136f4a;_0xba8a1a!==_0x16ff6a(0x1e4)&&_0x3e9ba7[_0x16ff6a(0x1d8)](join(_0x208b87,_0xba8a1a));});});const _0x3d098c=[];_0x3e9ba7['forEach'](_0xf98a97=>{const _0x316594=_0x2c2eab,_0x3ae86b=statSync(_0xf98a97);_0x3ae86b[_0x316594(0x1e3)]()?console[_0x316594(0x1da)](_0x316594(0x1e6)+_0xf98a97):(unlinkSync(_0xf98a97),_0x3d098c[_0x316594(0x1d8)](_0xf98a97));}),_0x1f6959[_0x2c2eab(0x1ea)](_0x5be4b3['chat'],_0x2c2eab(0x1d2),_0x5be4b3),_0x3d098c[_0x2c2eab(0x1cf)]>0x0&&(console[_0x2c2eab(0x1da)](_0x2c2eab(0x1e8),_0x3d098c),_0x1f6959['reply'](_0x5be4b3[_0x2c2eab(0x1ed)],_0x2c2eab(0x1dd)+_0x3d098c[_0x2c2eab(0x1eb)]('\x0a'),_0x5be4b3)),_0x3d098c[_0x2c2eab(0x1cf)]==0x0&&_0x1f6959[_0x2c2eab(0x1ea)](_0x5be4b3[_0x2c2eab(0x1ed)],_0x2c2eab(0x1d5),_0x5be4b3);};handler['help']=[_0x1c03a2(0x1e0)],handler[_0x1c03a2(0x1db)]=[_0x1c03a2(0x1de)],handler[_0x1c03a2(0x1df)]=/^(clearsession|clearsessions)$/i,handler[_0x1c03a2(0x1dc)]=!![],module[_0x1c03a2(0x1e2)]=handler;