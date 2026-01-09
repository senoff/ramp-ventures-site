var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
jQuery(document).ready(function(jQuery) {
	
	// //  menu

  jQuery(".menu-lines").click(function() {
    jQuery(this).toggleClass('menu-toggle1');
    jQuery(".hide-menu").stop(true).slideToggle(250);
    console.log("dsad");
    return false;
  });

  // Form validation

  // jQuery('form').submit(function(){
  //   return validateForm();
  // });

  //  function validateForm(){

  //      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?jQuery/;
  //      var success = false;

  //      jQuery(".req").each(function(i, field) {
  //        if(jQuery(field).val() != '') {
  //          jQuery(field).removeClass("error-form");
  //          if(jQuery(field).hasClass('req-mail') && emailReg.test(jQuery(field).val())) {
  //            jQuery(field).removeClass("error-form");
  //            success = true;
  //          }
  //          else if(jQuery(field).hasClass('req-mail')) {
  //            jQuery(field).addClass( "error-form" );
  //            success = false;
  //          }
  //        }
  //        else {
  //          jQuery(field).addClass( "error-form" );
  //          success = false;
  //        }
  //      });

  //      return success; 
  //  }

   // scroll

	smoothScrolling(".move");

  jQuery(window).scroll(function() {
  });

  // scrolling images 

	jQuery(window).scroll(function () {
	    var scrollTop = jQuery(window).scrollTop();
	    var height = jQuery(".opasicty-bg").height()-100;
	    jQuery('.opasicty-bg').css({
	        'opacity': ((height - scrollTop) / height)
	    });
	});

	// jQuery(window).scroll(function () {
 //    var scrollTop = jQuery(window).scrollTop();
 //    var height = jQuery(".opasicty-bg").height()-100;
 //    var percent = ((height - scrollTop) / height) ;
 //    percent = 1 - percent ; 
	//     jQuery('.opasicty-bg').css({
 //        'opacity': percent
 //    });
 //    console.log(percent);
	// });
	
});

// Smooth Scrolling
// ---------------------
function smoothScrolling(selector) {
  jQuery(selector + '[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = jQuery(this.hash),
        targetCount = this.hash.slice(1) - 1;
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        if(jQuery(".hide-menu").length) {
          console.log("dsa");
          jQuery('html,body').animate({
            scrollTop: target.offset().top - 0
          }, 700);
        }
        else {
          jQuery('html,body').animate({
            scrollTop: target.offset().top
          }, 700);
        }
        return false;
      }
    }
  });
}
}
/*
     FILE ARCHIVED ON 06:48:32 Dec 25, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:20:31 Jan 09, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.6
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.056
  esindex: 0.009
  cdx.remote: 7.636
  LoadShardBlock: 88.556 (3)
  PetaboxLoader3.datanode: 127.031 (5)
  load_resource: 71.584
  PetaboxLoader3.resolve: 24.242
  loaddict: 28.358
*/