
// My Javascript file edited by Sumon Sarkar


//=========== Clock js Start============
/*
function renderTime() {
	var currentTime = new Date();
	var diem = "AM";
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	setTimeout('renderTime()',1000);

if (h == 0) 
{
	h = 12;
} 
else if (h > 12) 
{
	h = h - 12;
	diem="PM";
}

if (h < 10) 
{
	h = "0" + h;
}
if (m < 10) 
{
	m = "0" + m;
}
if (s < 10) 
{
	s = "0" + s;
}

var myClock = document.getElementById('clockDisplay');
myClock.textContent = h + ":" + m + ":" + s + " " + diem;
myClock.innerText = h + ":" + m + ":" + s + " " + diem;
}
renderTime(); 
*/
//=========== Clock JS End============


// ======= Menu Stick run JS Start ===========


$(document).ready(function() {
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});

/*
	var s = $("#sticker2");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top) {
			s.addClass("stick2");
		} else {
			s.removeClass("stick2");	
		}
	});

*/
// ======= Menu Stick run JS END ===========


//=============== Slider control panel =======

$('.bxslider').bxSlider({
			auto: true,
			autoControls: false,
			pager:true,
			// useCSS: true,
			// easing: 'easeOutElastic',
			// captions: true,
			pause: 3000,
            speed: 500

			});
            
$('.bxsliderTicker').bxSlider({
			auto: false,
			autoControls: false,
			pager:false,
            controls:false,
            ticker:true,
            tickerHover:true,
			useCSS: false,
            // slideMargin:10,
            // minSlides:3,
            // maxSlides:6,
            speed: 80000
			});


$('.slider2').bxSlider({
			auto: true,
			autoControls: true,
			pager:true,
			// useCSS: true,
			// easing: 'easeOutElastic',
			// captions: true,
			pause: 3000,
            speed: 500

			});
			
//=================== End Slider js ========================

// ========== Lazy Load Image function ==============
  
  $("img.lazy").show().lazyload();
				
	$("img.lazy").lazyload({
		effect : "fadeIn",
		// threshold : 200, // it's means image will be ready before 200px 
		//event : "click",
	}); 
	

// ============== End Lagy Load ==============


    
    $(".mMenu").click(function(){
        
        $(".menu").slideToggle(600);
        
    });
    
    
    
    
    
});