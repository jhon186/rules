/* 
keep解锁会员
软件版本：7.17.0
更新时间：2021.12.26
使用方法：不要点击课程预览，往下滑直接点击课程阶段

********************************
Quantumult X:

[rewrite_local]
^https://(.+).gotokeep.com(/athena/v5/people/my|/nuocha/plans) url script-response-body https://raw.githubusercontent.com/jhon186/rules/master/js/keep.js

[mitm] 
hostname = *.gotokeep.com

********************************/
 
;var encode_version = 'jsjiami.com.v5', yqdvf = '__0xd582b',  __0xd582b=['wr5Hw4DDvyDCmFxl','wox2FMKOwog=','UDk9w41o','wptiw7TDn8K1wrPDkg==','w5RuFiZ8','w4t7FCh8wq4=','QMKZKsO7DMKRfw==','w7AxN8KSJQts','DADCgg==','w7x1w4/Ds8KVRTHDi14=','DcKWw40MVMOXU07Djndmw5ZXWw==','54iv5p+J5Y2Q772pX8OJ5Lyg5a+65p6y5byh56qc77+06L+56K6Z5pa85o2F5oij5Lu655iH5beC5L6f','wo1ow5bDocKb','wqswwoMrw4s=','wqvDqWnCsxw=','ITs2wo/Cug==','w5JsFg==','wq/DpH9EwolLw6M=','w4/Dtip/JRY6G3LCnsOew5LDoRnDhcOPQsKLU8KE','P8OubCJ6FmfDncOKSUYFw7bDlQ3DqMOzBWVCwrEcdTQ1w4xje8OKbgLDiMKWCA==','wpx1w6g=','w7vDu8KhZHDDvsKt','w5DDsn7CqiXCqQcjI1fDhcK7woM=','woZww4g/w5XCmnnCtSXDvkLCvsKlwoVqPydAw5TDsmAGX8OOIw==','wp/DnWk=','UMKTPsOu'];(function(_0x34d220,_0x28b510){var _0x3cef15=function(_0x4b4bc8){while(--_0x4b4bc8){_0x34d220['push'](_0x34d220['shift']());}};_0x3cef15(++_0x28b510);}(__0xd582b,0x162));var _0x9da1=function(_0x4e4852,_0x31cac4){_0x4e4852=_0x4e4852-0x0;var _0x556898=__0xd582b[_0x4e4852];if(_0x9da1['initialized']===undefined){(function(){var _0x4cb107=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3ccc28='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4cb107['atob']||(_0x4cb107['atob']=function(_0x53f3cf){var _0x33a0e9=String(_0x53f3cf)['replace'](/=+$/,'');for(var _0x573c69=0x0,_0x4b6826,_0x390611,_0x3f828f=0x0,_0x3db531='';_0x390611=_0x33a0e9['charAt'](_0x3f828f++);~_0x390611&&(_0x4b6826=_0x573c69%0x4?_0x4b6826*0x40+_0x390611:_0x390611,_0x573c69++%0x4)?_0x3db531+=String['fromCharCode'](0xff&_0x4b6826>>(-0x2*_0x573c69&0x6)):0x0){_0x390611=_0x3ccc28['indexOf'](_0x390611);}return _0x3db531;});}());var _0x1788aa=function(_0x240b96,_0x69a34a){var _0xbc81c=[],_0x25bb11=0x0,_0x1cf863,_0x3066f1='',_0x3d7642='';_0x240b96=atob(_0x240b96);for(var _0x364e7f=0x0,_0xf0b06a=_0x240b96['length'];_0x364e7f<_0xf0b06a;_0x364e7f++){_0x3d7642+='%'+('00'+_0x240b96['charCodeAt'](_0x364e7f)['toString'](0x10))['slice'](-0x2);}_0x240b96=decodeURIComponent(_0x3d7642);for(var _0x4b6a1e=0x0;_0x4b6a1e<0x100;_0x4b6a1e++){_0xbc81c[_0x4b6a1e]=_0x4b6a1e;}for(_0x4b6a1e=0x0;_0x4b6a1e<0x100;_0x4b6a1e++){_0x25bb11=(_0x25bb11+_0xbc81c[_0x4b6a1e]+_0x69a34a['charCodeAt'](_0x4b6a1e%_0x69a34a['length']))%0x100;_0x1cf863=_0xbc81c[_0x4b6a1e];_0xbc81c[_0x4b6a1e]=_0xbc81c[_0x25bb11];_0xbc81c[_0x25bb11]=_0x1cf863;}_0x4b6a1e=0x0;_0x25bb11=0x0;for(var _0x22df57=0x0;_0x22df57<_0x240b96['length'];_0x22df57++){_0x4b6a1e=(_0x4b6a1e+0x1)%0x100;_0x25bb11=(_0x25bb11+_0xbc81c[_0x4b6a1e])%0x100;_0x1cf863=_0xbc81c[_0x4b6a1e];_0xbc81c[_0x4b6a1e]=_0xbc81c[_0x25bb11];_0xbc81c[_0x25bb11]=_0x1cf863;_0x3066f1+=String['fromCharCode'](_0x240b96['charCodeAt'](_0x22df57)^_0xbc81c[(_0xbc81c[_0x4b6a1e]+_0xbc81c[_0x25bb11])%0x100]);}return _0x3066f1;};_0x9da1['rc4']=_0x1788aa;_0x9da1['data']={};_0x9da1['initialized']=!![];}var _0x3f7480=_0x9da1['data'][_0x4e4852];if(_0x3f7480===undefined){if(_0x9da1['once']===undefined){_0x9da1['once']=!![];}_0x556898=_0x9da1['rc4'](_0x556898,_0x31cac4);_0x9da1['data'][_0x4e4852]=_0x556898;}else{_0x556898=_0x3f7480;}return _0x556898;};if($request[_0x9da1('0x0','BXZ@')][_0x9da1('0x1','kb4v')](_0x9da1('0x2','vjp&'))!=-0x1){re(_0x9da1('0x3','pf6#'),'memberStatus\x22:1@username\x22:\x22king');}if($request[_0x9da1('0x4','X@25')][_0x9da1('0x5',']lMu')](_0x9da1('0x6','aVYh'))!=-0x1){re('errorCode\x22:\x5cd+@status\x22:\x5cw+',_0x9da1('0x7','@ZZ0'));}function re(){var _0x596efb={'BKyhi':_0x9da1('0x8','kb4v')};var _0x36e6c2=$response[_0x9da1('0x9','%$Z@')];if(arguments[0x0][_0x9da1('0xa','GzdL')]('@')){if(_0x596efb[_0x9da1('0xb','2lhW')]!==_0x596efb[_0x9da1('0xc','7Oc3')]){var _0xcadfa1=new RegExp(_0x74a1c2[i],'g');_0x36e6c2=_0x36e6c2[_0x9da1('0xd','X@25')](_0xcadfa1,_0x1d5f3e[i]);}else{var _0x74a1c2=arguments[0x0]['split']('@');var _0x1d5f3e=arguments[0x1][_0x9da1('0xe','BXZ@')]('@');for(i=0x0;i<_0x74a1c2[_0x9da1('0xf','BXZ@')];i++){var _0xfd0b87=new RegExp(_0x74a1c2[i],'g');_0x36e6c2=_0x36e6c2[_0x9da1('0x10','%$Z@')](_0xfd0b87,_0x1d5f3e[i]);}}}else{var _0x2ebd1d=new RegExp(arguments[0x0],'g');_0x36e6c2=_0x36e6c2[_0x9da1('0x11','X*5W')](_0x2ebd1d,arguments[0x1]);}$done(_0x36e6c2);};(function(_0x2d9bfe,_0x2a2891,_0x1a112e){var _0x2f7542={'doRRO':_0x9da1('0x12','BlH2'),'bfiTs':function _0x23bbc1(_0x192d55,_0x12f237){return _0x192d55!==_0x12f237;},'zqVjb':_0x9da1('0x13','i82z'),'TubvZ':_0x9da1('0x14','oM7k'),'FLPJl':function _0x2f75a1(_0x45323b,_0x5211f8){return _0x45323b+_0x5211f8;},'CRNvS':_0x9da1('0x15','oM7k'),'aVNHX':'删除版本号，js会定期弹窗'};_0x1a112e='al';try{_0x1a112e+=_0x2f7542[_0x9da1('0x16','X@25')];_0x2a2891=encode_version;if(!(_0x2f7542['bfiTs'](typeof _0x2a2891,_0x2f7542[_0x9da1('0x17','79wf')])&&_0x2a2891===_0x2f7542[_0x9da1('0x18','aVYh')])){_0x2d9bfe[_0x1a112e](_0x2f7542[_0x9da1('0x19','8&[3')]('删除',_0x2f7542['CRNvS']));}}catch(_0x38fc33){_0x2d9bfe[_0x1a112e](_0x2f7542['aVNHX']);}}(window));;encode_version = 'jsjiami.com.v5';
