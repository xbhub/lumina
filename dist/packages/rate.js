"use strict";layui.define("jquery",function(e){function t(e){var a=this;a.index=++l.index,a.config=r.extend({},a.config,l.config,e),a.render()}var r=layui.jquery,l={config:{},index:layui.rate?layui.rate.index+1e4:0,set:function(e){var a=this;return a.config=r.extend({},a.config,e),a},on:function(e,a){return layui.onevent.call(this,n,e,a)}},n="rate",f="fa-rate",u="fa-rate-solid",o="fa-rate-half",s="fa-rate-solid fa-rate-half",c="fa-rate fa-rate-half";t.prototype.config={length:5,text:!1,readonly:!1,half:!1,value:0,theme:""},t.prototype.render=function(){var e=this,a=e.config,t=a.theme?'style="color: '+a.theme+';"':"";a.elem=r(a.elem),parseInt(a.value)!==a.value&&(a.half||(a.value=Math.ceil(a.value)-a.value<.5?Math.ceil(a.value):Math.floor(a.value)));for(var l='<ul class="layui-rate" '+(a.readonly?"readonly":"")+">",n=1;n<=a.length;n++){var i='<li class="layui-inline"><i class="fa '+(n>Math.floor(a.value)?f:u)+'" '+t+"></i></li>";a.half&&parseInt(a.value)!==a.value&&n==Math.ceil(a.value)?l=l+'<li><i class="fa fa-rate-half" '+t+"></i></li>":l+=i}l+="</ul>"+(a.text?'<span class="layui-inline">'+a.value+"星":"")+"</span>";var o=a.elem,s=o.next(".layui-rate");s[0]&&s.remove(),e.elemTemp=r(l),a.span=e.elemTemp.next("span"),a.setText&&a.setText(a.value),o.html(e.elemTemp),o.addClass("layui-inline"),a.readonly||e.action()},t.prototype.setvalue=function(e){this.config.value=e,this.render()},t.prototype.action=function(){var l=this.config,n=this.elemTemp,i=n.find("i").width();n.children("li").each(function(e){var a=e+1,t=r(this);t.on("click",function(e){l.value=a,!l.half||e.pageX-r(this).offset().left<=i/2&&(l.value=l.value-.5);l.text&&n.next("span").text(l.value+"星"),l.choose&&l.choose(l.value),l.setText&&l.setText(l.value)}),t.on("mousemove",function(e){n.find("i").each(function(){r(this).addClass(f).removeClass(s)}),n.find("i:lt("+a+")").each(function(){r(this).addClass(u).removeClass(c)}),!l.half||e.pageX-r(this).offset().left<=i/2&&t.children("i").addClass(o).removeClass(u)}),t.on("mouseleave",function(){n.find("i").each(function(){r(this).addClass(f).removeClass(s)}),n.find("i:lt("+Math.floor(l.value)+")").each(function(){r(this).addClass(u).removeClass(c)}),l.half&&parseInt(l.value)!==l.value&&n.children("li:eq("+Math.floor(l.value)+")").children("i").addClass(o).removeClass("fa-rate-solid fa-rate")})})},t.prototype.events=function(){this.config},l.render=function(e){var a=new t(e);return function(){var a=this;return{setvalue:function(e){a.setvalue.call(a,e)},config:a.config}}.call(a)},e(n,l)});