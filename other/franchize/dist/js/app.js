$(document).ready(function(){function t(){for(var t=0;t<s.length;t++)i=parseInt($(s[t]).css("top")),$(s[t]).css({top:i+2});setTimeout(function(){for(var t=0;t<s.length;t++)i=parseInt($(s[t]).css("top")),$(s[t]).css({top:i-2})},500)}function e(){for(var t=0;t<c.length;t++)i=parseInt($(c[t]).css("top")),$(c[t]).css({top:i-5});setTimeout(function(){for(var t=0;t<c.length;t++)i=parseInt($(c[t]).css("top")),$(c[t]).css({top:i+5})},500)}function n(){$(".root-icon").css({top:43}),$(".share-icon").css({top:0}),$(".degree-icon").css({top:0}),$(".plus-icon").css({top:43}),$(".minus-icon").css({top:0}),$(".multiply-icon").css({top:43}),setTimeout(function(){$(".root-icon").css({top:0}),$(".share-icon").css({top:43}),$(".degree-icon").css({top:43}),$(".plus-icon").css({top:0}),$(".minus-icon").css({top:43}),$(".multiply-icon").css({top:0})},600)}var i,s=$(".check"),c=$(".what_get-count");$(window).width()>1200&&(setInterval(t,1e3),setInterval(e,1250),n(),setInterval(n,1200),$(window).scroll(function(){var t=$(this).scrollTop();t=Math.round(t/100),$(this).scrollTop()>0&&(t%2==0?($(".mental-img img").addClass("anim"),$(".programs-img img").addClass("animate-img")):($(".mental-img img").removeClass("anim"),$(".programs-img img").removeClass("animate-img")))})),$(".img-click").click(function(){var t=$(".img-large").attr("src");$(".img-large").attr("src",$(this).attr("src")),$(this).attr("src",t)}),$(".history-img.small .before").click(function(){var t=$(".img-large").attr("src"),e=$(this).parent(".history-img").find(".img-click").attr("src");$(".img-large").attr("src",e),$(this).parent(".history-img").find(".img-click").attr("src",t)}),$(".methods").click(function(){$(".type_hidden").val("Хочу методику"),$("#text-btn").text("Хочу методику")}),$(".business").click(function(){$(".type_hidden").val("Хочу бизнес-план"),$("#text-btn").text("Хочу бизнес-план")}),$(".experience").click(function(){$(".type_hidden").val("Перенять опыт"),$("#text-btn").text("Перенять опыт")}),$(".answers").click(function(){$(".type_hidden").val("Получить ответы"),$("#text-btn").text("Получить ответы")}),$(".cell").click(function(){$(".type_hidden").val("Связаться"),$("#text-btn").text("Связаться")}),$(".registr-form").on("submit",function(t){t.preventDefault();var e=$(t.currentTarget),n=$(this),i={name:e.find('input[name="name"]').val(),email:e.find('input[name="email"]').val(),phone:e.find('input[name="phone"]').val(),city:e.find('input[name="city"]').val(),type:e.find('input[name="type"]').val()},s=document.createElement("script");s.src="https://script.google.com/macros/s/AKfycbw3OpS8yNkvRzz_tgwbnVChR7V4jf-zNeMOAwPHjG5AUYkl9tM/exec?name="+i.name+"&p2="+i.email+"&p3="+i.phone+"&p4="+i.city+"&p5="+i.type,s.type="text/javascript",$("body").append(s),setTimeout(function(){$("#myModal").modal("toggle"),n.trigger("reset"),$("#modal").modal()},2e3)})});