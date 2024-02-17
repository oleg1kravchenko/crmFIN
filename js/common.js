$(document).ready(function() {

	$("#modal-recovery .modal-bottom .fancybox, #modal-authorization .modal-bottom .fancybox").click(function() {
		$.fancybox.close(true);
	});

  $("#modal-registration .btn-main").click(function(e) {
	e.preventDefault();
	$.fancybox.close(true);
	$.fancybox.open({
		src: '#modal-success',
		type: 'inline'
	});
});



var properties = {
	duration: 8000,     // Длительность движения в миллисекундах, чем больше тем медленнее.
	direction: 'left',  // Направление, может быть 'left' или 'right'.
	delayBeforeStart: 0 // Задержка в миллисекундах перед началом движения.
};
$('.logo-slider-wrap').marquee(properties);


	$(".item-question__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	  });


	$(".input-phone").mask("+7 (999) 999-99-99");


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false
	});

	



	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


  
/*run string*/
!function(t){t.fn.marquee=function(e){return this.each(function(){var a,i,r,n,s,o,u=t.extend({},t.fn.marquee.defaults,e),d=t(this),$=3,l="animation-play-state",p=!1,f=function(t,e,a){for(var i=["webkit","moz","MS","o",""],r=0;r<i.length;r++)i[r]||(e=e.toLowerCase()),t.addEventListener(i[r]+e,a,!1)},c=function(t){var e=[];for(var a in t)t.hasOwnProperty(a)&&e.push(a+":"+t[a]);return e.push(),"{"+e.join(",")+"}"},m=function(){d.timer=setTimeout(A,u.delayBeforeStart)},g={pause:function(){p&&u.allowCss3Support?i.css(l,"paused"):t.fn.pause&&i.pause(),d.data("runningStatus","paused"),d.trigger("paused")},resume:function(){p&&u.allowCss3Support?i.css(l,"running"):t.fn.resume&&i.resume(),d.data("runningStatus","resumed"),d.trigger("resumed")},toggle:function(){g["resumed"==d.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(d.timer),d.find("*").addBack().unbind(),d.html(d.find(".js-marquee:first").html())}};if("string"==typeof e){t.isFunction(g[e])&&(i||(i=d.find(".js-marquee-wrapper")),!0===d.data("css3AnimationIsSupported")&&(p=!0),g[e]());return}t.each(u,function(t,e){if(void 0!==(a=d.attr("data-"+t))){switch(a){case"true":a=!0;break;case"false":a=!1}u[t]=a}}),u.speed&&(u.duration=parseInt(d.width(),10)/u.speed*1e3),s="up"==u.direction||"down"==u.direction,u.gap=u.duplicated?parseInt(u.gap):0,d.wrapInner('<div class="js-marquee"></div>');var _=d.find(".js-marquee").css({"margin-right":u.gap,float:"left"});if(u.duplicated&&_.clone(!0).appendTo(d),d.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),i=d.find(".js-marquee-wrapper"),s){var h=d.height();i.removeAttr("style"),d.height(h),d.find(".js-marquee").css({float:"none","margin-bottom":u.gap,"margin-right":0}),u.duplicated&&d.find(".js-marquee:last").css({"margin-bottom":0});var v=d.find(".js-marquee:first").height()+u.gap;u.startVisible&&!u.duplicated?(u._completeDuration=(parseInt(v,10)+parseInt(h,10))/parseInt(h,10)*u.duration,u.duration=parseInt(v,10)/parseInt(h,10)*u.duration):u.duration=(parseInt(v,10)+parseInt(h,10))/parseInt(h,10)*u.duration}else o=d.find(".js-marquee:first").width()+u.gap,r=d.width(),u.startVisible&&!u.duplicated?(u._completeDuration=(parseInt(o,10)+parseInt(r,10))/parseInt(r,10)*u.duration,u.duration=parseInt(o,10)/parseInt(r,10)*u.duration):u.duration=(parseInt(o,10)+parseInt(r,10))/parseInt(r,10)*u.duration;if(u.duplicated&&(u.duration=u.duration/2),u.allowCss3Support){var b=document.body||document.createElement("div"),x="marqueeAnimation-"+Math.floor(1e7*Math.random()),y="Webkit Moz O ms Khtml".split(" "),w="animation",S="",q="";if(void 0!==b.style.animation&&(q="@keyframes "+x+" ",p=!0),!1===p){for(var j=0;j<y.length;j++)if(void 0!==b.style[y[j]+"AnimationName"]){var C="-"+y[j].toLowerCase()+"-";w=C+w,l=C+l,q="@"+C+"keyframes "+x+" ",p=!0;break}}p&&(S=x+" "+u.duration/1e3+"s "+u.delayBeforeStart/1e3+"s infinite "+u.css3easing,d.data("css3AnimationIsSupported",!0))}var V=function(){i.css("transform","translateY("+("up"==u.direction?h+"px":"-"+v+"px")+")")},k=function(){i.css("transform","translateX("+("left"==u.direction?r+"px":"-"+o+"px")+")")};u.duplicated?(s?u.startVisible?i.css("transform","translateY(0)"):i.css("transform","translateY("+("up"==u.direction?h+"px":"-"+(2*v-u.gap)+"px")+")"):u.startVisible?i.css("transform","translateX(0)"):i.css("transform","translateX("+("left"==u.direction?r+"px":"-"+(2*o-u.gap)+"px")+")"),u.startVisible||($=1)):u.startVisible?$=2:s?V():k();var A=function(){if(u.duplicated&&(1===$?(u._originalDuration=u.duration,s?u.duration="up"==u.direction?u.duration+h/(v/u.duration):2*u.duration:u.duration="left"==u.direction?u.duration+r/(o/u.duration):2*u.duration,S&&(S=x+" "+u.duration/1e3+"s "+u.delayBeforeStart/1e3+"s "+u.css3easing),$++):2===$&&(u.duration=u._originalDuration,S&&(x+="0",q=t.trim(q)+"0 ",S=x+" "+u.duration/1e3+"s 0s infinite "+u.css3easing),$++)),s?u.duplicated?($>2&&i.css("transform","translateY("+("up"==u.direction?0:"-"+v+"px")+")"),n={transform:"translateY("+("up"==u.direction?"-"+v+"px":0)+")"}):u.startVisible?2===$?(S&&(S=x+" "+u.duration/1e3+"s "+u.delayBeforeStart/1e3+"s "+u.css3easing),n={transform:"translateY("+("up"==u.direction?"-"+v+"px":h+"px")+")"},$++):3===$&&(u.duration=u._completeDuration,S&&(x+="0",q=t.trim(q)+"0 ",S=x+" "+u.duration/1e3+"s 0s infinite "+u.css3easing),V()):(V(),n={transform:"translateY("+("up"==u.direction?"-"+i.height()+"px":h+"px")+")"}):u.duplicated?($>2&&i.css("transform","translateX("+("left"==u.direction?0:"-"+o+"px")+")"),n={transform:"translateX("+("left"==u.direction?"-"+o+"px":0)+")"}):u.startVisible?2===$?(S&&(S=x+" "+u.duration/1e3+"s "+u.delayBeforeStart/1e3+"s "+u.css3easing),n={transform:"translateX("+("left"==u.direction?"-"+o+"px":r+"px")+")"},$++):3===$&&(u.duration=u._completeDuration,S&&(x+="0",q=t.trim(q)+"0 ",S=x+" "+u.duration/1e3+"s 0s infinite "+u.css3easing),k()):(k(),n={transform:"translateX("+("left"==u.direction?"-"+o+"px":r+"px")+")"}),d.trigger("beforeStarting"),p){i.css(w,S);var e=q+" { 100%  "+c(n)+"}",a=i.find("style");0!==a.length?a.filter(":last").html(e):t("head").append("<style>"+e+"</style>"),f(i[0],"AnimationIteration",function(){d.trigger("finished")}),f(i[0],"AnimationEnd",function(){A(),d.trigger("finished")})}else i.animate(n,u.duration,u.easing,function(){d.trigger("finished"),u.pauseOnCycle?m():A()});d.data("runningStatus","resumed")};d.bind("pause",g.pause),d.bind("resume",g.resume),u.pauseOnHover&&(d.bind("mouseenter",g.pause),d.bind("mouseleave",g.resume)),p&&u.allowCss3Support?A():m()})},t.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,gap:20,pauseOnCycle:!1,pauseOnHover:!1,startVisible:!1}}(jQuery);