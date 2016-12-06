jQuery(document).ready(function(e){var d=e(".hero").outerHeight();e(window).scroll(function(){e(window).scrollTop()>d?e("#header-wrapper-bg").addClass("fixed-nav").css("top","0").next().css("padding-top","43px"):e("#header-wrapper-bg").removeClass("fixed-nav").next().css("padding-top","0")})});

(function($) {
//replace widget title 
  $('.title,.widget-title')
        .each(function() {
        var me = jQuery(this);
        me.html(me.html()
            .replace(/^(\w+)/, '<span>$1</span>'));
    });

$('h1.title').each(function(){
    var text = $(this).text().split(' ');
    if(text.length < 2)
        return;
    text[0] = '<span class="secondbc"><span class="secondWord">'+text[0]+'</span></span>';
    $(this).html( text.join(' ') );
});
})(jQuery);

$(document).ready(function() { 
  $('.menu-secondary-container .fa-bars').click(function(){ 
  $('.menus.menu-secondary').toggleClass('active');
  $('.menu-secondary li.current').removeClass('current');
});
});

$('.menu-secondary li').on('click', function(){
    $('.menu-secondary li.current').removeClass('current');
    $(this).addClass('current');
});

$(function(){
$('.searchbutton').click(function(){
  $(this).toggleClass('active');
  $('.search-form.ds').slideToggle('normal');
});
});

$(function() {
    $('a.youtube-link').each(function() {
        var yt_url   = this.href,
            yt_id    = yt_url.split('?v=')[1],
            yt_title = $(this).text();
        $(this).replaceWith('<div class="youtube-box"><img class="youtube-img" src="http://img.youtube.com/vi/' + yt_id + '/0.jpg" alt="youtube" ></img><span class="gradient"></span><span class="youtube-title">' + yt_title + '</span><span class="youtube-play"></span></div>');
        $('div.youtube-box').click(function() {
            $(this).replaceWith('<div class="youtube-frame"><div class="videoWrapper"><iframe src="http://www.youtube.com/embed/' + yt_id + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>');
        });
    });
});

$(function(){$(window).scroll(function(){$(this).scrollTop()>600?$("#easy-top").fadeIn(100):$("#easy-top").fadeOut(0)}),$("#easy-top").click(function(){$("html, body").animate({scrollTop:0},{duration:2e3,easing:"easeOutQuint"})})});

// jQuery Easing
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});

 jQuery(document).ready(function($){
                $(".tabs-widget-content-widget-themater_tabs-1432447472-id").hide();
                $("ul.tabs-widget-widget-themater_tabs-1432447472-id li:first a").addClass("tabs-widget-current").show();
                $(".tabs-widget-content-widget-themater_tabs-1432447472-id:first").show();
      
                $("ul.tabs-widget-widget-themater_tabs-1432447472-id li a").click(function() {
                    $("ul.tabs-widget-widget-themater_tabs-1432447472-id li a").removeClass("tabs-widget-current a");
                    $(this).addClass("tabs-widget-current");
                    $(".tabs-widget-content-widget-themater_tabs-1432447472-id").hide();
                    var activeTab = $(this).attr("href");
                    $(activeTab).fadeIn();
                    return false;
                });
            }); 

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-567cc9fc12a84127';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();