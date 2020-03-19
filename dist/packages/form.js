"use strict";layui.define(["laydate","upload","admin"],function(e){function t(){this.config={verify:{required:[/[\S]+/,"必填项不能为空"],phone:[/^1\d{10}$/,"请输入正确的手机号"],email:[/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,"邮箱格式不正确"],url:[/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/,"链接格式不正确"],number:function(e){if(!e||isNaN(e))return"只能填写数字"},date:[/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/,"日期格式不正确"],identity:[/(^\d{15}$)|(^\d{17}(x|X|\d)$)/,"请输入正确的身份证号"]}}}var _=layui.$,n=layui.laydate,a=layui.upload,h=layui.layer,v=layui.admin,l=layui.hint(),y=layui.device(),b="form",p=".layui-form",C="layui-this",w="layui-hide",L="layui-disabled",o=".J_form_wrap",d=".J_form_val",r=[{type:"ide",elem:".J_form_ide"},{type:"img",elem:"#j_uploader_box"},{type:"date",elem:".J_form_date"},{type:"datetime",elem:".J_form_datetime"},{type:"time",elem:".J_form_time"}];t.prototype.set=function(e){return _.extend(!0,this.config,e),this},t.prototype.verify=function(e){return _.extend(!0,this.config.verify,e),this},t.prototype.on=function(e,t){return layui.onevent.call(this,b,e,t)},t.prototype.val=function(e,a){_(p+'[lay-filter="'+e+'"]').each(function(e,t){var n=_(this);layui.each(a,function(e,t){var a,i=n.find('[name="'+e+'"]');i[0]&&("checkbox"===(a=i[0].type)?i[0].checked=t:"radio"===a?i.each(function(){this.value===t&&(this.checked=!0)}):i.val(t))})}),m.render(null,e)},t.prototype.render=function(e,t){var a=_(p+(t?'[lay-filter="'+t+'"]':"")),i={select:function(){function v(e,t){_(e.target).parent().hasClass(g)&&!t||(_("."+m).removeClass(m+"ed "+m+"up"),y&&x&&y.val(x)),y=null}function h(i,e,t){var s,n=_(this),a=i.find("."+g),l=a.find("input"),o=i.find("dl"),r=o.children("dd"),d=this.selectedIndex;if(!e){var c=function(){var e=i.offset().top+i.outerHeight()+5-j.scrollTop(),t=o.outerHeight();d=n[0].selectedIndex,i.addClass(m+"ed"),r.removeClass(w),s=null,r.eq(d).addClass(C).siblings().removeClass(C),e+t>j.height()&&t<=e&&i.addClass(m+"up"),f()},u=function(e){i.removeClass(m+"ed "+m+"up"),l.blur(),s=null,e||h(l.val(),function(e){var t=n[0].selectedIndex;e&&(x=_(n[0].options[t]).html(),0===t&&x===l.attr("placeholder")&&(x=""),l.val(x||""))})},f=function(){var e=o.children("dd."+C);if(e[0]){var t=e.position().top,a=o.height(),i=e.height();a<t&&o.scrollTop(t+o.scrollTop()-a+i-5),t<0&&o.scrollTop(t+o.scrollTop()-5)}};a.on("click",function(e){i.hasClass(m+"ed")?u():(v(e,!0),c()),o.find("."+k).remove()}),a.find(".layui-edge").on("click",function(){l.focus()}),l.on("keyup",function(e){9===e.keyCode&&c()}).on("keydown",function(l){var e=l.keyCode;9===e&&u();function r(i,n){var e,t;l.preventDefault();var a=function(){var e=o.children("dd."+C);if(o.children("dd."+w)[0]&&"next"===i){var t=o.children("dd:not(."+w+",."+L+")"),a=t.eq(0).index();if(0<=a&&a<e.index()&&!t.hasClass(C))return t.eq(0).prev()[0]?t.eq(0).prev():o.children(":last")}return n&&n[0]?n:s&&s[0]?s:e}();return t=a[i](),e=a[i]("dd:not(."+w+")"),t[0]?(s=a[i](),e[0]&&!e.hasClass(L)||!s[0]?(e.addClass(C).siblings().removeClass(C),void f()):r(i,s)):s=null}38===e&&r("prev"),40===e&&r("next"),13===e&&(l.preventDefault(),o.children("dd."+C).trigger("click"))});var h=function(i,e,n){var l=0;layui.each(r,function(){var e=_(this),t=e.text(),a=-1===t.indexOf(i);(""===i||"blur"===n?i!==t:a)&&l++,"keyup"===n&&e[a?"addClass":"removeClass"](w)});var t=l===r.length;return e(t),t};t&&l.on("keyup",function(e){var t=this.value,a=e.keyCode;if(9===a||13===a||37===a||38===a||39===a||40===a)return!1;h(t,function(e){e?o.find("."+k)[0]||o.append('<p class="'+k+'">无匹配项</p>'):o.find("."+k).remove()},"keyup"),""===t&&o.find("."+k).remove(),f()}).on("blur",function(e){var t=n[0].selectedIndex;y=l,x=_(n[0].options[t]).html(),0===t&&x===l.attr("placeholder")&&(x=""),setTimeout(function(){h(l.val(),function(e){x||l.val("")},"blur")},200)}),r.on("click",function(){var e=_(this),t=e.attr("lay-value"),a=n.attr("lay-filter");return e.hasClass(L)||(e.hasClass("layui-select-tips")?l.val(""):(l.val(e.text()),e.addClass(C)),e.siblings().removeClass(C),n.val(t).removeClass("layui-form-danger"),layui.event.call(this,b,"select("+a+")",{elem:n[0],value:t,othis:i}),u(!0)),!1}),i.find("dl>dt").on("click",function(e){return!1}),_(document).off("click",v).on("click",v)}}var y,p="请选择",m="layui-form-select",g="layui-select-title",k="layui-select-none",x="",e=a.find("select");e.each(function(e,t){var a=_(this),i=a.next("."+m),n=this.disabled,l=t.value,r=_(t.options[t.selectedIndex]),s=t.options[0];if("string"==typeof a.attr("lay-ignore"))return a.show();var o,d,c="string"==typeof a.attr("lay-search"),u=s&&!s.value&&s.innerHTML||p,f=_(['<div class="'+(c?"":"layui-unselect ")+m,(n?" layui-select-disabled":"")+'">','<div class="'+g+'">','<input type="text" placeholder="'+u+'" value="'+(l?r.html():"")+'"'+(c?"":" readonly")+' class="layui-input'+(c?"":" layui-unselect")+(n?" "+L:"")+'">','<i class="layui-edge"></i></div>','<dl class="layui-anim layui-anim-upbit'+(a.find("optgroup")[0]?" layui-select-group":"")+'">',(o=a.find("*"),d=[],layui.each(o,function(e,t){0!==e||t.value?"optgroup"===t.tagName.toLowerCase()?d.push("<dt>"+t.label+"</dt>"):d.push('<dd lay-value="'+t.value+'" class="'+(l===t.value?C:"")+(t.disabled?" "+L:"")+'">'+t.innerHTML+"</dd>"):d.push('<dd lay-value="" class="layui-select-tips">'+(t.innerHTML||p)+"</dd>")}),0===d.length&&d.push('<dd lay-value="" class="'+L+'">没有选项</dd>'),d.join("")+"</dl>"),"</div>"].join(""));i[0]&&i.remove(),a.after(f),h.call(this,f,n,c)})},checkbox:function(){var c={checkbox:["layui-form-checkbox","layui-form-checked","checkbox"],_switch:["layui-form-switch","layui-form-onswitch","switch"]},e=a.find("input[type=checkbox]");e.each(function(e,t){var a=_(this),i=a.attr("lay-skin"),n=(a.attr("lay-text")||"").split("|"),l=this.disabled;"switch"===i&&(i="_"+i);var r=c[i]||c.checkbox;if("string"==typeof a.attr("lay-ignore"))return a.show();var s,o=a.next("."+r[0]),d=_(['<div class="layui-unselect '+r[0],t.checked?" "+r[1]:"",l?" layui-checkbox-disbaled "+L:"",'"',i?' lay-skin="'+i+'"':"",">",(s={checkbox:[t.title.replace(/\s/g,"")?"<span>"+t.title+"</span>":"",'<i class="fa fa-check"></i>'].join(""),_switch:"<em>"+((t.checked?n[0]:n[1])||"")+"</em><i></i>"})[i]||s.checkbox,"</div>"].join(""));o[0]&&o.remove(),a.after(d),function(a,i){var n=_(this);a.on("click",function(){var e=n.attr("lay-filter"),t=(n.attr("lay-text")||"").split("|");n[0].disabled||(n[0].checked?(n[0].checked=!1,a.removeClass(i[1]).find("em").text(t[1])):(n[0].checked=!0,a.addClass(i[1]).find("em").text(t[0])),layui.event.call(n[0],b,i[2]+"("+e+")",{elem:n[0],value:n[0].value,othis:a}))})}.call(this,d,r)})},radio:function(){var s="layui-form-radio",o=["&#xe643;","&#xe63f;"],e=a.find("input[type=radio]");e.each(function(e,t){var a=_(this),i=a.next("."+s),n=this.disabled;if("string"==typeof a.attr("lay-ignore"))return a.show();i[0]&&i.remove();var l,r=_(['<div class="layui-unselect '+s,t.checked?" "+s+"ed":"",(n?" layui-radio-disbaled "+L:"")+'">','<i class="layui-anim fa">'+o[t.checked?0:1]+"</i>","<div>"+(l=t.title||"","string"==typeof a.next().attr("lay-radio")&&(l=a.next().html(),a.next().remove()),l)+"</div>","</div>"].join(""));a.after(r),function(n){var l=_(this),r="layui-anim-scaleSpring";n.on("click",function(){var e=l[0].name,t=l.parents(p),a=l.attr("lay-filter"),i=t.find("input[name="+e.replace(/(\.|#|\[|\])/g,"\\$1")+"]");l[0].disabled||(layui.each(i,function(){var e=_(this).next("."+s);this.checked=!1,e.removeClass(s+"ed"),e.find(".fa").removeClass(r).html(o[1])}),l[0].checked=!0,n.addClass(s+"ed"),n.find(".fa").addClass(r).html(o[0]),layui.event.call(l[0],b,"radio("+a+")",{elem:l[0],value:l[0].value,othis:n}))})}.call(this,r)})}};return e?i[e]?i[e]():l.error("不支持的"+e+"表单渲染"):layui.each(i,function(e,t){t()}),this},t.prototype.bindDatePicker=function(){_(document)};function i(){var e=_(this),d=m.config.verify,c=null,u="layui-form-danger",i={},t=e.parents(p),a=t.find("*[lay-verify]"),n=e.parents("form")[0],l=t.find("input,select,textarea"),r=e.attr("lay-filter"),s=e.attr("lay-ajax");if(layui.each(a,function(e,l){var r=_(this),t=r.attr("lay-verify").split("|"),s=r.attr("lay-verType"),o=r.val();if(r.removeClass(u),layui.each(t,function(e,t){var a="",i="function"==typeof d[t];if(d[t]){var n=i?a=d[t](o,l):!d[t][0].test(o);if(a=a||d[t][1],n)return"tips"===s?h.tips(a,"string"==typeof r.attr("lay-ignore")||"select"!==l.tagName.toLowerCase()&&!/^checkbox|radio$/.test(l.type)?r:r.next(),{tips:1}):"alert"===s?h.alert(a,{title:"提示",shadeClose:!0}):h.msg(a,{icon:5,shift:6}),y.android||y.ios||l.focus(),r.addClass(u),c=!0}}),c)return c}),c)return!1;var o={};if(layui.each(l,function(e,t){if(t.name=(t.name||"").replace(/^\s*|\s*&/,""),t.name){if(/^.*\[\]$/.test(t.name)){var a=t.name.match(/^(.*)\[\]$/g)[0];o[a]=0|o[a],t.name=t.name.replace(/^(.*)\[\]$/,"$1["+o[a]+++"]")}/^checkbox|radio$/.test(t.type)&&!t.checked||(i[t.name]=t.value)}}),!s)return layui.event.call(this,b,"submit("+r+")",{elem:this,form:n,field:i});var f=e.parents("form");return v.request.ajax({type:f.attr("method"),url:f.attr("action"),data:i,success:function(e){if(0==e.errcode)return h.msg(e.msg),parent.layer&&setTimeout(function(){parent.layer.close(parent.layer.getFrameIndex(window.name))},1500),layui.event.call(this,b,"submit("+r+")",{elem:this,form:n,field:i});h.alert(e.msg,{title:"提示",shadeClose:!0})}}),!1}var m=new t,s=_("body"),j=_(window);m.render(),m.bindDatePicker(),s.on("reset",p,function(){var e=_(this).attr("lay-filter");setTimeout(function(){m.render(null,e)},50)}),s.on("submit",p,i).on("click","*[lay-submit]",i),s.on("click","*[lay-submit-cancel]",function(){parent.layer.close(parent.layer.getFrameIndex(window.name))});var c=function(){var i='<li class="uploader__file" style="background-image: url(UPLOADEDFILE)"><div class="uploader__mask" style="display: none"><div class="mask__delete"><a href="javascript:;" class="j_delete" data-id="UPLOADEDFILE"><i class="fa fa-close"></i></a></div></div></li>',e=_(this),t=_(this).parents(o),n=t.find(".J_form_box"),l=t.find(d),r=t.find(".img__picker"),s=e.data("limit")||1;a.render({elem:"#"+e.data("id"),url:"/interface/core/upload",fileNumLimit:s,done:function(e){if(1==s)n.append(i.replace("UPLOADEDFILE",e[0])),l.val(e[0]),r.hide();else{var a=l.val();if((a=1<a.length?a.split(","):[]).length>=s)return;_.each(e,function(e,t){a.push(t),a.length>=s&&r.hide(),n.append(i.replace(new RegExp(/(UPLOADEDFILE)/g),t))}),l.val(a.join(","))}}})},u=function(){var i={img:function(){var e=s.find(o),i=e.find("#j_uploader_box").data("limit"),n=e.find(d),l=e.find(".img__picker");e.on("mouseenter",".uploader__file",function(){_(this).find(".uploader__mask").show()}).on("mouseleave",".uploader__file",function(){_(this).find(".uploader__mask").hide()}),e.on("click",".j_delete",function(){if(1==i)_(this).parents(".uploader__file").remove(),l.show(),n.val("");else{_(this).parents(".uploader__file").remove();var e=_(this).attr("data-id"),t=n.val(),a=(t=1<t.length?t.split(","):[]).indexOf(e);-1<a&&t.splice(a,1),l.show(),n.val(t)}})},date:function(e){s.find(e.elem).each(function(e,t){var a=_(t);n.render({elem:"#"+a.attr("id"),type:"date",format:"yyyy-MM-dd"})})},datetime:function(e){s.find(e.elem).each(function(e,t){var a=_(t);n.render({elem:"#"+a.attr("id"),type:"datetime",format:"yyyy-MM-dd HH:mm:ss"})})},time:function(e){s.find(e.elem).each(function(e,t){var a=_(t);n.render({elem:"#"+a.attr("id"),type:"time",format:"HH:mm:ss"})})}};_.each(r,function(e,t){var a=t.type;i[a]&&i[t.type].call(this,t)})};s.on("click",".J_form_img",c),u(),e(b,m)});