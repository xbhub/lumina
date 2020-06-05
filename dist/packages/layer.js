"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(u){u.layui&&layui.define;function t(e){var t=this;t.index=++p.index,t.config=d.extend({},t.config,y.config,e),document.body?t.creat():setTimeout(function(){t.creat()},30)}var d,c,e,i,y={getPath:(e=document.currentScript?document.currentScript.src:function(){for(var e,t=document.scripts,i=t.length-1,n=i;0<n;n--)if("interactive"===t[n].readyState){e=t[n].src;break}return e||t[i].src}()).substring(0,e.lastIndexOf("/")+1),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(e,t){var i=e.currentStyle?e.currentStyle:u.getComputedStyle(e,null);return i[i.getPropertyValue?"getPropertyValue":"getAttribute"](t)},link:function(e,t,i){var n,a,o;p.path&&(n=document.getElementsByTagName("head")[0],a=document.createElement("link"),"string"==typeof t&&(i=t),o="layuicss-"+(i||e).replace(/\.|\//g,""),a.rel="stylesheet",a.href=p.path+e,a.id=o,document.getElementById(o)||n.appendChild(a))}},p={v:"3.1.1",ie:(i=navigator.userAgent.toLowerCase(),!!(u.ActiveXObject||"ActiveXObject"in u)&&((i.match(/msie\s(\d+)/)||[])[1]||"11")),index:u.layer&&u.layer.v?1e5:0,path:y.getPath,config:function(e){return e=e||{},p.cache=y.config=d.extend({},y.config,e),p.path=y.config.path||p.path,"string"==typeof e.extend&&(e.extend=[e.extend]),y.config.path&&p.ready(),e.extend,this},ready:function(){return this},alert:function(e,t,i){var n="function"==typeof t;return n&&(i=t),p.open(d.extend({content:e,yes:i},n?{}:t))},confirm:function(e,t,i,n){var a="function"==typeof t;return a&&(n=i,i=t),p.open(d.extend({content:e,btn:y.btn,yes:i,btn2:n},a?{}:t))},msg:function(e,t,i){var n="function"==typeof t,a=y.config.skin,o=(a?a+" "+a+"-msg":"")||"layui-layer-msg",r=f.anim.length-1;return n&&(i=t),p.open(d.extend({content:e,time:3e3,shade:!1,skin:o,title:!1,closeBtn:!1,btn:!1,resize:!1,end:i},n&&!y.config.skin?{skin:o+" layui-layer-hui",anim:r}:(-1!==(t=t||{}).icon&&(void 0!==t.icon||y.config.skin)||(t.skin=o+" "+(t.skin||"layui-layer-hui")),t)))},load:function(e,t){return p.open(d.extend({type:3,icon:e||1,resize:!1,shade:.01},t))},tips:function(e,t,i){return p.open(d.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},i))}};t.pt=t.prototype;var f=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];f.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],t.pt.config={type:0,shade:.3,fixed:!0,move:f[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},t.pt.vessel=function(e,t){var i,n=this.index,a=this.config,o=a.zIndex+n,r="object"===_typeof(a.title),s=a.maxmin&&(1===a.type||2===a.type),l=a.title?'<div class="layui-layer-title" style="'+(r?a.title[1]:"")+'">'+(r?a.title[0]:a.title)+"</div>":"";return a.zIndex=o,t([a.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+n+'" times="'+n+'" style="z-index:'+(o-1)+'; "></div>':"",'<div class="'+f[0]+" layui-layer-"+y.type[a.type]+(0!=a.type&&2!=a.type||a.shade?"":" layui-layer-border")+" "+(a.skin||"")+'" id="'+f[0]+n+'" type="'+y.type[a.type]+'" times="'+n+'" showtime="'+a.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+o+"; width:"+a.area[0]+";height:"+a.area[1]+(a.fixed?"":";position:absolute;")+'">'+(e&&2!=a.type?"":l)+'<div id="'+(a.id||"")+'" class="layui-layer-content'+(0==a.type&&-1!==a.icon?" layui-layer-padding":"")+(3==a.type?" layui-layer-loading"+a.icon:"")+'">'+(0==a.type&&-1!==a.icon?'<i class="layui-layer-ico layui-layer-ico'+a.icon+'"></i>':"")+((1!=a.type||!e)&&a.content||"")+'</div><span class="layui-layer-setwin">'+(i=s?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"",a.closeBtn&&(i+='<a class="layui-layer-ico '+f[7]+" "+f[7]+(a.title?a.closeBtn:4==a.type?"1":"2")+'" href="javascript:;"></a>'),i)+"</span>"+(a.btn?function(){var e="";"string"==typeof a.btn&&(a.btn=[a.btn]);for(var t=0,i=a.btn.length;t<i;t++)e+='<a class="'+f[6]+t+'">'+a.btn[t]+"</a>";return'<div class="'+f[6]+" layui-layer-btn-"+(a.btnAlign||"")+'">'+e+"</div>"}():"")+(a.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],l,d('<div class="layui-layer-move"></div>')),this},t.pt.creat=function(){var e,n=this,a=n.config,o=n.index,r="object"===_typeof(l=a.content),s=d("body");if(!a.id||!d("#"+a.id)[0]){switch("string"==typeof a.area&&(a.area="auto"===a.area?["",""]:[a.area,""]),a.shift&&(a.anim=a.shift),6==p.ie&&(a.fixed=!1),a.type){case 0:a.btn="btn"in a?a.btn:y.btn[0],p.closeAll("dialog");break;case 2:var l=a.content=r?a.content:[a.content||"","auto"];a.content='<iframe scrolling="'+(a.content[1]||"auto")+'" allowtransparency="true" id="'+f[4]+o+'" name="'+f[4]+o+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+a.content[0]+'"></iframe>';break;case 3:delete a.title,delete a.closeBtn,-1===a.icon&&a.icon,p.closeAll("loading");break;case 4:r||(a.content=[a.content,"body"]),a.follow=a.content[1],a.content=a.content[0]+'<i class="layui-layer-TipsG"></i>',delete a.title,a.tips="object"===_typeof(a.tips)?a.tips:[a.tips,!0],a.tipsMore||p.closeAll("tips")}n.vessel(r,function(e,t,i){s.append(e[0]),r?2==a.type||4==a.type?d("body").append(e[1]):l.parents("."+f[0])[0]||(l.data("display",l.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]),d("#"+f[0]+o).find("."+f[5]).before(t)):s.append(e[1]),d(".layui-layer-move")[0]||s.append(y.moveElem=i),n.layero=d("#"+f[0]+o),a.scrollbar||f.html.css("overflow","hidden").attr("layer-full",o)}).auto(o),d("#layui-layer-shade"+n.index).css({"background-color":a.shade[1]||"#000",opacity:a.shade[0]||a.shade}),2==a.type&&6==p.ie&&n.layero.find("iframe").attr("src",l[0]),4==a.type?n.tips():n.offset(),a.fixed&&c.on("resize",function(){n.offset(),(/^\d+%$/.test(a.area[0])||/^\d+%$/.test(a.area[1]))&&n.auto(o),4==a.type&&n.tips()}),a.time<=0||setTimeout(function(){p.close(n.index)},a.time),n.move().callback(),f.anim[a.anim]&&(e="layer-anim "+f.anim[a.anim],n.layero.addClass(e).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d(this).removeClass(e)})),a.isOutAnim&&n.layero.data("isOutAnim",!0)}},t.pt.auto=function(e){var t=this.config,i=d("#"+f[0]+e);""===t.area[0]&&0<t.maxWidth&&(p.ie&&p.ie<8&&t.btn&&i.width(i.innerWidth()),i.outerWidth()>t.maxWidth&&i.width(t.maxWidth));function n(e){(e=i.find(e)).height(a[1]-o-r-2*(0|parseFloat(e.css("padding-top"))))}var a=[i.innerWidth(),i.innerHeight()],o=i.find(f[1]).outerHeight()||0,r=i.find("."+f[6]).outerHeight()||0;switch(t.type){case 2:n("iframe");break;default:""===t.area[1]?0<t.maxHeight&&i.outerHeight()>t.maxHeight?(a[1]=t.maxHeight,n("."+f[5])):t.fixed&&a[1]>=c.height()&&(a[1]=c.height(),n("."+f[5])):n("."+f[5])}return this},t.pt.offset=function(){var e=this,t=e.config,i=e.layero,n=[i.outerWidth(),i.outerHeight()],a="object"===_typeof(t.offset);e.offsetTop=(c.height()-n[1])/2,e.offsetLeft=(c.width()-n[0])/2,a?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=c.width()-n[0]:"b"===t.offset?e.offsetTop=c.height()-n[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=c.height()-n[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=c.width()-n[0]):"rb"===t.offset?(e.offsetTop=c.height()-n[1],e.offsetLeft=c.width()-n[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?c.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?c.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=c.scrollTop(),e.offsetLeft+=c.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=c.height()-(i.find(f[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},t.pt.tips=function(){var e=this.config,t=this.layero,i=[t.outerWidth(),t.outerHeight()],n=d(e.follow);n[0]||(n=d("body"));var a={width:n.outerWidth(),height:n.outerHeight(),top:n.offset().top,left:n.offset().left},o=t.find(".layui-layer-TipsG"),r=e.tips[0];e.tips[1]||o.remove(),a.autoLeft=function(){0<a.left+i[0]-c.width()?(a.tipLeft=a.left+a.width-i[0],o.css({right:12,left:"auto"})):a.tipLeft=a.left},a.where=[function(){a.autoLeft(),a.tipTop=a.top-i[1]-10,o.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",e.tips[1])},function(){a.tipLeft=a.left+a.width+10,a.tipTop=a.top,o.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",e.tips[1])},function(){a.autoLeft(),a.tipTop=a.top+a.height+10,o.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",e.tips[1])},function(){a.tipLeft=a.left-i[0]-10,a.tipTop=a.top,o.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",e.tips[1])}],a.where[r-1](),1===r?a.top-(c.scrollTop()+i[1]+16)<0&&a.where[2]():2===r?0<c.width()-(a.left+a.width+i[0]+16)||a.where[3]():3===r?0<a.top-c.scrollTop()+a.height+i[1]+16-c.height()&&a.where[0]():4===r&&0<i[0]+16-a.left&&a.where[1](),t.find("."+f[5]).css({"background-color":e.tips[1],"padding-right":e.closeBtn?"30px":""}),t.css({left:a.tipLeft-(e.fixed?c.scrollLeft():0),top:a.tipTop-(e.fixed?c.scrollTop():0)})},t.pt.move=function(){var r=this,s=r.config,e=d(document),l=r.layero,t=l.find(s.move),i=l.find(".layui-layer-resize"),f={};return s.move&&t.css("cursor","move"),t.on("mousedown",function(e){e.preventDefault(),s.move&&(f.moveStart=!0,f.offset=[e.clientX-parseFloat(l.css("left")),e.clientY-parseFloat(l.css("top"))],y.moveElem.css("cursor","move").show())}),i.on("mousedown",function(e){e.preventDefault(),f.resizeStart=!0,f.offset=[e.clientX,e.clientY],f.area=[l.outerWidth(),l.outerHeight()],y.moveElem.css("cursor","se-resize").show()}),e.on("mousemove",function(e){var t,i,n,a,o;f.moveStart&&(a=e.clientX-f.offset[0],o=e.clientY-f.offset[1],t="fixed"===l.css("position"),e.preventDefault(),f.stX=t?0:c.scrollLeft(),f.stY=t?0:c.scrollTop(),s.moveOut||(i=c.width()-l.outerWidth()+f.stX,n=c.height()-l.outerHeight()+f.stY,a<f.stX&&(a=f.stX),i<a&&(a=i),o<f.stY&&(o=f.stY),n<o&&(o=n)),l.css({left:a,top:o})),s.resize&&f.resizeStart&&(a=e.clientX-f.offset[0],o=e.clientY-f.offset[1],e.preventDefault(),p.style(r.index,{width:f.area[0]+a,height:f.area[1]+o}),f.isResize=!0,s.resizing&&s.resizing(l))}).on("mouseup",function(e){f.moveStart&&(delete f.moveStart,y.moveElem.hide(),s.moveEnd&&s.moveEnd(l)),f.resizeStart&&(delete f.resizeStart,y.moveElem.hide())}),r},t.pt.callback=function(){var t=this,i=t.layero,n=t.config;t.openLayer(),n.success&&(2==n.type?i.find("iframe").on("load",function(){n.success(i,t.index)}):n.success(i,t.index)),6==p.ie&&t.IE6(i),i.find("."+f[6]).children("a").on("click",function(){var e=d(this).index();0===e?n.yes?n.yes(t.index,i):n.btn1?n.btn1(t.index,i):p.close(t.index):!1===(n["btn"+(e+1)]&&n["btn"+(e+1)](t.index,i))||p.close(t.index)}),i.find("."+f[7]).on("click",function(){!1===(n.cancel&&n.cancel(t.index,i))||p.close(t.index)}),n.shadeClose&&d("#layui-layer-shade"+t.index).on("click",function(){p.close(t.index)}),i.find(".layui-layer-min").on("click",function(){!1===(n.min&&n.min(i))||p.min(t.index,n)}),i.find(".layui-layer-max").on("click",function(){d(this).hasClass("layui-layer-maxmin")?(p.restore(t.index),n.restore&&n.restore(i)):(p.full(t.index,n),setTimeout(function(){n.full&&n.full(i)},100))}),n.end&&(y.end[t.index]=n.end)},y.reselect=function(){d.each(d("select"),function(e,t){var i=d(this);i.parents("."+f[0])[0]||1==i.attr("layer")&&d("."+f[0]).length<1&&i.removeAttr("layer").show(),i=null})},t.pt.IE6=function(e){d("select").each(function(e,t){var i=d(this);i.parents("."+f[0])[0]||"none"===i.css("display")||i.attr({layer:"1"}).hide(),i=null})},t.pt.openLayer=function(){p.zIndex=this.config.zIndex,p.setTop=function(e){return p.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",function(){p.zIndex++,e.css("z-index",p.zIndex+1)}),p.zIndex}},y.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},y.rescollbar=function(e){f.html.attr("layer-full")==e&&(f.html[0].style.removeProperty?f.html[0].style.removeProperty("overflow"):f.html[0].style.removeAttribute("overflow"),f.html.removeAttr("layer-full"))},(u.layer=p).getChildFrame=function(e,t){return t=t||d("."+f[4]).attr("times"),d("#"+f[0]+t).find("iframe").contents().find(e)},p.getFrameIndex=function(e){return d("#"+e).parents("."+f[4]).attr("times")},p.iframeAuto=function(e){var t,i,n,a;e&&(t=p.getChildFrame("html",e).outerHeight(),n=(i=d("#"+f[0]+e)).find(f[1]).outerHeight()||0,a=i.find("."+f[6]).outerHeight()||0,i.css({height:t+n+a}),i.find("iframe").css({height:t}))},p.iframeSrc=function(e,t){d("#"+f[0]+e).find("iframe").attr("src",t)},p.style=function(e,t,i){var n=d("#"+f[0]+e),a=n.find(".layui-layer-content"),o=n.attr("type"),r=n.find(f[1]).outerHeight()||0,s=n.find("."+f[6]).outerHeight()||0;n.attr("minLeft");o!==y.type[3]&&o!==y.type[4]&&(i||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-r-s<=64&&(t.height=64+r+s)),n.css(t),s=n.find("."+f[6]).outerHeight(),o===y.type[2]?n.find("iframe").css({height:parseFloat(t.height)-r-s}):a.css({height:parseFloat(t.height)-r-s-parseFloat(a.css("padding-top"))-parseFloat(a.css("padding-bottom"))}))},p.min=function(e,t){var i=d("#"+f[0]+e),n=i.find(f[1]).outerHeight()||0,a=i.attr("minLeft")||181*y.minIndex+"px",o=i.css("position");y.record(i),y.minLeft[0]&&(a=y.minLeft[0],y.minLeft.shift()),i.attr("position",o),p.style(e,{width:180,height:n,left:a,top:c.height()-n,position:"fixed",overflow:"hidden"},!0),i.find(".layui-layer-min").hide(),"page"===i.attr("type")&&i.find(f[4]).hide(),y.rescollbar(e),i.attr("minLeft")||y.minIndex++,i.attr("minLeft",a)},p.restore=function(e){var t=d("#"+f[0]+e),i=t.attr("area").split(",");t.attr("type");p.style(e,{width:parseFloat(i[0]),height:parseFloat(i[1]),top:parseFloat(i[2]),left:parseFloat(i[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(f[4]).show(),y.rescollbar(e)},p.full=function(t){var i=d("#"+f[0]+t),n=d("#layui-layer-iframe"+t);timer,y.record(i),f.html.attr("layer-full")||f.html.css("overflow","hidden").attr("layer-full",t),clearTimeout(timer),timer=setTimeout(function(){var e="fixed"===i.css("position");p.style(t,{top:e?0:c.scrollTop(),left:e?0:c.scrollLeft(),width:c.width(),height:c.height()},!0),n.css("height",c.height()),i.find(".layui-layer-min").hide()},100)},p.title=function(e,t){d("#"+f[0]+(t||p.index)).find(f[1]).html(e)},p.close=function(n){var a,e,o=d("#"+f[0]+n),r=o.attr("type");o[0]&&(a="layui-layer-wrap",e=function(){if(r===y.type[1]&&"object"===o.attr("conType")){o.children(":not(."+f[5]+")").remove();for(var e=o.find("."+a),t=0;t<2;t++)e.unwrap();e.css("display",e.data("display")).removeClass(a)}else{if(r===y.type[2])try{var i=d("#"+f[4]+n)[0];i.contentWindow.document.write(""),i.contentWindow.close(),o.find("."+f[5])[0].removeChild(i)}catch(e){}o[0].innerHTML="",o.remove()}"function"==typeof y.end[n]&&y.end[n](),delete y.end[n]},o.data("isOutAnim")&&o.addClass("layer-anim layer-anim-close"),d("#layui-layer-moves, #layui-layer-shade"+n).remove(),6==p.ie&&y.reselect(),y.rescollbar(n),o.attr("minLeft")&&(y.minIndex--,y.minLeft.push(o.attr("minLeft"))),p.ie&&p.ie<10||!o.data("isOutAnim")?e():setTimeout(function(){e()},200))},p.closeAll=function(t){d.each(d("."+f[0]),function(){var e=d(this);(t?e.attr("type")===t:1)&&p.close(e.attr("times"))})};function h(e){return n.skin?" "+n.skin+" "+n.skin+"-"+e:""}var n=p.cache||{};p.prompt=function(i,n){var e,t="";"function"==typeof(i=i||{})&&(n=i),i.area&&(t='style="width: '+(e=i.area)[0]+"; height: "+e[1]+';"',delete i.area);var a,o=2==i.formType?'<textarea class="layui-layer-input"'+t+"></textarea>":'<input type="'+(1==i.formType?"password":"text")+'" class="layui-layer-input">',r=i.success;return delete i.success,p.open(d.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:o,skin:"layui-layer-prompt"+h("prompt"),maxWidth:c.width(),success:function(e){(a=e.find(".layui-layer-input")).val(i.value||"").focus(),"function"==typeof r&&r(e)},resize:!1,yes:function(e){var t=a.val();""===t?a.focus():t.length>(i.maxlength||500)?p.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(i.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",a,{tips:1}):n&&n(t,e,a)}},i))},p.tab=function(a){var n=(a=a||{}).tab||{},o="layui-this",i=a.success;return delete a.success,p.open(d.extend({type:1,skin:"layui-layer-tab"+h("tab"),resize:!1,title:function(){var e=n.length,t=1,i="";if(0<e)for(i='<span class="'+o+'">'+n[0].title+"</span>";t<e;t++)i+="<span>"+n[t].title+"</span>";return i}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=n.length,t=1,i="";if(0<e)for(i='<li class="layui-layer-tabli '+o+'">'+(n[0].content||"no content")+"</li>";t<e;t++)i+='<li class="layui-layer-tabli">'+(n[t].content||"no  content")+"</li>";return i}()+"</ul>",success:function(e){var t=e.find(".layui-layer-title").children(),n=e.find(".layui-layer-tabmain").children();t.on("mousedown",function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;var t=d(this),i=t.index();t.addClass(o).siblings().removeClass(o),n.eq(i).show().siblings().hide(),"function"==typeof a.change&&a.change(i)}),"function"==typeof i&&i(e)}},a))},p.photos=function(a,e,o){var r={};if((a=a||{}).photos){var t=a.photos.constructor===Object,i=t?a.photos:{},s=i.data||[],l=i.start||0;r.imgIndex=1+(0|l),a.img=a.img||"img";var f=a.success;if(delete a.success,t){if(0===s.length)return p.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var n=d(a.photos),c=function(){s=[],n.find(a.img).each(function(e){var t=d(this);t.attr("layer-index",e),s.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(c(),0===s.length)return;if(e||n.on("click",a.img,function(){var e=d(this).attr("layer-index");p.photos(d.extend(a,{photos:{start:e,data:s,tab:a.tab},full:a.full}),!0),c()}),!e)return}r.imgprev=function(e){r.imgIndex--,r.imgIndex<1&&(r.imgIndex=s.length),r.tabimg(e)},r.imgnext=function(e,t){r.imgIndex++,r.imgIndex>s.length&&(r.imgIndex=1,t)||r.tabimg(e)},r.keyup=function(e){var t;r.end||(t=e.keyCode,e.preventDefault(),37===t?r.imgprev(!0):39===t?r.imgnext(!0):27===t&&p.close(r.index))},r.tabimg=function(e){if(!(s.length<=1))return i.start=r.imgIndex-1,p.close(r.index),p.photos(a,!0,e)},r.event=function(){r.bigimg.hover(function(){r.imgsee.show()},function(){r.imgsee.hide()}),r.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),r.imgprev()}),r.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),r.imgnext()}),d(document).on("keyup",r.keyup)},r.loadi=p.load(1,{shade:!("shade"in a)&&.9,scrollbar:!1}),function(e,t,i){var n=new Image;if(n.src=e,n.complete)return t(n);n.onload=function(){n.onload=null,t(n)},n.onerror=function(e){n.onerror=null,i(e)}}(s[l].src,function(e){var t,i,n;p.close(r.loadi),r.index=p.open(d.extend({type:1,id:"layui-layer-photos",area:(i=[e.width,e.height],n=[d(u).width()-100,d(u).height()-100],!a.full&&(i[0]>n[0]||i[1]>n[1])&&((t=[i[0]/n[0],i[1]/n[1]])[1]<t[0]?(i[0]=i[0]/t[0],i[1]=i[1]/t[0]):t[0]<t[1]&&(i[0]=i[0]/t[1],i[1]=i[1]/t[1])),[i[0]+"px",i[1]+"px"]),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+h("photos"),content:'<div class="layui-layer-phimg"><img src="'+s[l].src+'" alt="'+(s[l].alt||"")+'" layer-pid="'+s[l].pid+'"><div class="layui-layer-imgsee">'+(1<s.length?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(o?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(s[l].alt||"")+"</a><em>"+r.imgIndex+"/"+s.length+"</em></span></div></div></div>",success:function(e){r.bigimg=e.find(".layui-layer-phimg"),r.imgsee=e.find(".layui-layer-imguide,.layui-layer-imgbar"),r.event(e),a.tab&&a.tab(s[l],e),"function"==typeof f&&f(e)},end:function(){r.end=!0,d(document).off("keyup",r.keyup)}},a))},function(){p.close(r.loadi),p.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){1<s.length&&r.imgnext(!0,!0)}})})}},y.run=function(e){c=(d=e)(u),f.html=d("html"),p.open=function(e){return new t(e).index}},u.layui&&layui.define?(p.ready(),layui.define("jquery",function(e){p.path=layui.cache.dir,y.run(layui.$),e("layer",u.layer=p)})):"function"==typeof define&&define.amd?define([],function(){return y.run(u.jQuery),p}):(y.run(u.jQuery),p.ready())}(window);