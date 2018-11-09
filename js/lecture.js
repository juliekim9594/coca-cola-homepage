$(function(){

			var myslider = $('.slider').bxSlider({
				auto:true,
				controls:false,
				autoHover:true
			});

			$('.prevBtn').click(function(){
				myslider.goToPrevSlide();
				// return false; a링크 사용했을때 상단으로 가는걸 막아줌;
			});		
			$('.nextBtn').click(function(){
				myslider.goToNextSlide();
			});	
			
			$("ul.sub").hide();
			$(".menu>ul>li:nth-child(2)").hover(function(){
				$("ul.sub").eq(0).stop().slideDown();
			},function(){
				$("ul.sub").hide();
			});

			$(".menu>ul>li:nth-child(3)").hover(function(){
				$("ul.sub").eq(1).stop().slideDown();
			},function(){
				$("ul.sub").hide();
			});

			window.onscroll = function() {myFunction()};

			var header = document.getElementById("header_wrap");
			var sticky = header.offsetTop;
			var scrollY = window.pageYOffset;


			function myFunction() {
			  if (window.pageYOffset -100 > sticky) {
			    header.classList.add("sticky");
			  } else {
			    header.classList.remove("sticky");
			  }

			}

			var $sec = $(".section1");
			var secPos = $sec.offset().top;

			$sec.css("opacity",0);
			$(window).on("scroll",function(){
				var scrollY = window.pageYOffset;
				if(scrollY > secPos - 800){
					$sec.stop().animate({left:100,opacity:1});
				}else{
					$sec.stop().animate({left:0});
				}

			});

			$(".modal").colorbox({rel:'modal', width:"50%",fixed:true, opacity:0.7, slideshow:true});

		});