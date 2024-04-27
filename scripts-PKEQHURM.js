var _self=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var Prism=function(o){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,y=0,F={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof m?new m(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++y}),a.__id},clone:function a(e,t){t=t||{};var n,r;switch(i.util.type(e)){case"Object":if(r=i.util.objId(e),t[r])return t[r];n={},t[r]=n;for(var u in e)e.hasOwnProperty(u)&&(n[u]=a(e[u],t));return n;case"Array":return r=i.util.objId(e),t[r]?t[r]:(n=[],t[r]=n,e.forEach(function(l,s){n[s]=a(l,t)}),n);default:return e}},getLanguage:function(a){for(;a;){var e=p.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(p,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var n="no-"+e;a;){var r=a.classList;if(r.contains(e))return!0;if(r.contains(n))return!1;a=a.parentElement}return!!t}},languages:{plain:F,plaintext:F,text:F,txt:F,extend:function(a,e){var t=i.util.clone(i.languages[a]);for(var n in e)t[n]=e[n];return t},insertBefore:function(a,e,t,n){n=n||i.languages;var r=n[a],u={};for(var l in r)if(r.hasOwnProperty(l)){if(l==e)for(var s in t)t.hasOwnProperty(s)&&(u[s]=t[s]);t.hasOwnProperty(l)||(u[l]=r[l])}var c=n[a];return n[a]=u,i.languages.DFS(i.languages,function(h,A){A===c&&h!=a&&(this[h]=u)}),u},DFS:function a(e,t,n,r){r=r||{};var u=i.util.objId;for(var l in e)if(e.hasOwnProperty(l)){t.call(e,l,e[l],n||l);var s=e[l],c=i.util.type(s);c==="Object"&&!r[u(s)]?(r[u(s)]=!0,a(s,t,null,r)):c==="Array"&&!r[u(s)]&&(r[u(s)]=!0,a(s,t,l,r))}}},plugins:{},highlightAll:function(a,e){i.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var n={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),i.hooks.run("before-all-elements-highlight",n);for(var r=0,u;u=n.elements[r++];)i.highlightElement(u,e===!0,n.callback)},highlightElement:function(a,e,t){var n=i.util.getLanguage(a),r=i.languages[n];i.util.setLanguage(a,n);var u=a.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(u,n);var l=a.textContent,s={element:a,language:n,grammar:r,code:l};function c(A){s.highlightedCode=A,i.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i.hooks.run("after-highlight",s),i.hooks.run("complete",s),t&&t.call(s.element)}if(i.hooks.run("before-sanity-check",s),u=s.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!s.code){i.hooks.run("complete",s),t&&t.call(s.element);return}if(i.hooks.run("before-highlight",s),!s.grammar){c(i.util.encode(s.code));return}if(e&&o.Worker){var h=new Worker(i.filename);h.onmessage=function(A){c(A.data)},h.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else c(i.highlight(s.code,s.grammar,s.language))},highlight:function(a,e,t){var n={code:a,grammar:e,language:t};if(i.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=i.tokenize(n.code,n.grammar),i.hooks.run("after-tokenize",n),m.stringify(i.util.encode(n.tokens),n.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var n in t)e[n]=t[n];delete e.rest}var r=new $;return k(r,r.head,a),T(a,r,e,r.head,0),C(r)},hooks:{all:{},add:function(a,e){var t=i.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=i.hooks.all[a];if(!(!t||!t.length))for(var n=0,r;r=t[n++];)r(e)}},Token:m};o.Prism=i;function m(a,e,t,n){this.type=a,this.content=e,this.alias=t,this.length=(n||"").length|0}m.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(c){n+=a(c,t)}),n}var r={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(r.classes,u):r.classes.push(u)),i.hooks.run("wrap",r);var l="";for(var s in r.attributes)l+=" "+s+'="'+(r.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+l+">"+r.content+"</"+r.tag+">"};function E(a,e,t,n){a.lastIndex=e;var r=a.exec(t);if(r&&n&&r[1]){var u=r[1].length;r.index+=u,r[0]=r[0].slice(u)}return r}function T(a,e,t,n,r,u){for(var l in t)if(!(!t.hasOwnProperty(l)||!t[l])){var s=t[l];s=Array.isArray(s)?s:[s];for(var c=0;c<s.length;++c){if(u&&u.cause==l+","+c)return;var h=s[c],A=h.inside,j=!!h.lookbehind,H=!!h.greedy,U=h.alias;if(H&&!h.pattern.global){var Z=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,Z+"g")}for(var G=h.pattern||h,v=n.next,x=r;v!==e.tail&&!(u&&x>=u.reach);x+=v.value.length,v=v.next){var S=v.value;if(e.length>a.length)return;if(!(S instanceof m)){var L=1,b;if(H){if(b=E(G,x,a,j),!b||b.index>=a.length)break;var z=b.index,B=b.index+b[0].length,w=x;for(w+=v.value.length;z>=w;)v=v.next,w+=v.value.length;if(w-=v.value.length,x=w,v.value instanceof m)continue;for(var _=v;_!==e.tail&&(w<B||typeof _.value=="string");_=_.next)L++,w+=_.value.length;L--,S=a.slice(x,w),b.index-=x}else if(b=E(G,0,S,j),!b)continue;var z=b.index,I=b[0],M=S.slice(0,z),q=S.slice(z+I.length),O=x+S.length;u&&O>u.reach&&(u.reach=O);var P=v.prev;M&&(P=k(e,P,M),x+=M.length),D(e,P,L);var W=new m(l,A?i.tokenize(I,A):I,U,I);if(v=k(e,P,W),q&&k(e,v,q),L>1){var R={cause:l+","+c,reach:O};T(a,e,t,v.prev,x,R),u&&R.reach>u.reach&&(u.reach=R.reach)}}}}}}function $(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function k(a,e,t){var n=e.next,r={value:t,prev:e,next:n};return e.next=r,n.prev=r,a.length++,r}function D(a,e,t){for(var n=e.next,r=0;r<t&&n!==a.tail;r++)n=n.next;e.next=n,n.prev=e,a.length-=r}function C(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,n=e.code,r=e.immediateClose;o.postMessage(i.highlight(n,i.languages[t],t)),r&&o.close()},!1)),i;var d=i.util.currentScript();d&&(i.filename=d.src,d.hasAttribute("data-manual")&&(i.manual=!0));function g(){i.manual||i.highlightAll()}if(!i.manual){var f=document.readyState;f==="loading"||f==="interactive"&&d&&d.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return i}(_self);typeof module<"u"&&module.exports&&(module.exports=Prism),typeof global<"u"&&(global.Prism=Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(p,y){var F={};F["language-"+y]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[y]},F.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:F}};i["language-"+y]={pattern:/[\s\S]+/,inside:Prism.languages[y]};var m={};m[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:i},Prism.languages.insertBefore("markup","cdata",m)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(o,p){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:Prism.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(o){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+p.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var y=o.languages.markup;y&&(y.tag.addInlined("style","css"),y.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,function(){if(typeof Prism>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading\u2026",p=function(d,g){return"\u2716 Error "+d+" while fetching file: "+g},y="\u2716 Error: File does not exist or is empty",F={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",m="loading",E="loaded",T="failed",$="pre[data-src]:not(["+i+'="'+E+'"]):not(['+i+'="'+m+'"])';function k(d,g,f){var a=new XMLHttpRequest;a.open("GET",d,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?g(a.responseText):a.status>=400?f(p(a.status,a.statusText)):f(y))},a.send(null)}function D(d){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(d||"");if(g){var f=Number(g[1]),a=g[2],e=g[3];return a?e?[f,Number(e)]:[f,void 0]:[f,f]}}Prism.hooks.add("before-highlightall",function(d){d.selector+=", "+$}),Prism.hooks.add("before-sanity-check",function(d){var g=d.element;if(g.matches($)){d.code="",g.setAttribute(i,m);var f=g.appendChild(document.createElement("CODE"));f.textContent=o;var a=g.getAttribute("data-src"),e=d.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=F[t]||t}Prism.util.setLanguage(f,e),Prism.util.setLanguage(g,e);var n=Prism.plugins.autoloader;n&&n.loadLanguages(e),k(a,function(r){g.setAttribute(i,E);var u=D(g.getAttribute("data-range"));if(u){var l=r.split(/\r\n?|\n/g),s=u[0],c=u[1]==null?l.length:u[1];s<0&&(s+=l.length),s=Math.max(0,Math.min(s-1,l.length)),c<0&&(c+=l.length),c=Math.max(0,Math.min(c,l.length)),r=l.slice(s,c).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(s+1))}f.textContent=r,Prism.highlightElement(f)},function(r){g.setAttribute(i,T),f.textContent=r})}}),Prism.plugins.fileHighlight={highlight:function(g){for(var f=(g||document).querySelectorAll($),a=0,e;e=f[a++];)Prism.highlightElement(e)}};var C=!1;Prism.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),Prism.plugins.fileHighlight.highlight.apply(this,arguments)}}();
