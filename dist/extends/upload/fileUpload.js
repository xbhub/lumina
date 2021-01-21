"use strict";layui.extend({webuploader:"lib/upload/webuploader/webuploader"}).define(["util","webuploader"],function(e){function i(e){var i=this;i.uploadObj={},i.uploadFiles=[],i.config=d.extend({},i.config,l.config,e),i.render()}var d=layui.jquery,o=layui.layer,t=layui.util,n=layui.webuploader,a="fileUpload",l={config:{},set:function(e){var i=this;return i.config=d.extend({},i.config,e),i},on:function(e,i){return layui.onevent.call(this,a,e,i)}};i.prototype.config={modelId:"",fileIcon:{document:layui.cache.base+"/lib/upload/imgs/documents.png",doc:layui.cache.base+"/lib/upload/imgs/doc.png",pdf:layui.cache.base+"/lib/upload/imgs/pdf.png"}},i.prototype.render=function(){var e=this.config;layui.link(layui.cache.base+"lib/upload/upload.css"),this.uploadObj=n.create({pick:e.elem,auto:!0,swf:layui.cache.base+"/lib/upload/webuploader/Uploader.swf",server:e.url,headers:d.extend({"X-CSRF-TOKEN":d('meta[name="csrf-token"]').attr("content"),"X-Requested-With":"XMLHttpRequest"},e.headers),fileNumLimit:1,accept:{title:"File",extensions:"zip,doc,docx,jpg,gif,png,jpeg,pdf"}}),this.events()},i.prototype.events=function(e){var i=this.uploadObj,a=this.config,l=d("#"+a.modelId).find(".uploader__files");i.on("fileQueued",function(e){}),i.on("uploadProgress",function(e,i){var o=d("#"+e.id),e=o.find(".progress span");(e=!e.length?d('<p class="progress"><span></span></p>').appendTo(o).find("span"):e).css("width",100*i+"%")}),i.on("uploadSuccess",function(e,i){d("#"+e.id).addClass("upload-state-done");e.type;var o=t.getExtension(e.name),n=void 0!==a.fileIcon[o]?a.fileIcon[o]:a.fileIcon.document;0==i.errcode&&(e='<li class="uploader__file" data-id="'+e.id+'" data-url="'+i.url+'"><div class="thumb" style="background-image: url('+n+')"></div><div class="fileinfo"><p class="name">'+e.name+'</p><p class="size">'+t.formatSize(e.size)+'</p></div><a href="javascript:;" class="j_delete"><i class="fa fa-delete"></i></a></div></div></li>',l.append(e))}),i.on("uploadError",function(e){var i=d("#"+e.id),e=i.find("div.error");(e=!e.length?d('<div class="error"></div>').appendTo(i):e).text("上传失败")}),i.on("uploadComplete",function(e){d("#"+e.id).find(".progress").remove()})},i.prototype.done=function(e){var i=this;i.uploadFiles.length<1?o.msg("请选择图片",{icon:5}):(o.close(e),"function"==typeof i.config.done&&i.config.done(i.uploadFiles))},l.render=function(e){return new i(e)},e(a,l)});