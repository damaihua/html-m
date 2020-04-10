$(function(){


//banner
var bannerSwiper=new Swiper('.banner-swiper',{
  loop:true,
  autoplay:{
    delay:2000,
    disableOnInteraction: false
  },
  pagination:{
    el:'.custom-pagination',
    type:'custom',
    renderCustom:function(swiper,current,total){
      return current+'/'+total
    }
  }
  
})
//subject-swiper
var subjectSwiper=new Swiper('.subject-swiper',{
  //autoHeight: true
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar'
  },
})
subjectSwiper.scrollbar.$dragEl.css('background','#cbdefc');

//option-course
var optionSwiper = new Swiper('.option-swiper',{
        slidesPerView: 'auto',
      freeMode: true,
  
    });
//live-swiper
// var liveSwiper = new Swiper('.live-swiper',{
//         slidesPerView: 'auto',
//       freeMode: true,
   
//     });


    //coupon-entrance  领券中心
var entranceSwiper=new Swiper('.entrance-swiper',{
  loop:true,
  autoplay:{
    delay:2000,
    disableOnInteraction: false
  }
})
// bottom-click
$('.close-ind-bot').click(function(){
  $('.bottom-menu').animate({'right':'-100%'},300);
  $('.open-ind-bot').show();
  $('footer').removeClass('footer-pad')
})
$('.open-ind-bot').click(function(){
  $(this).hide();
  $('.bottom-menu').animate({'right':'0'},300);
  $('footer').addClass('footer-pad')
})


// hot-event
// var hotEventSwiper=new Swiper('.hotevent-swiper',{
//   loop:true,
//   autoplay:{
//     delay:2000,
//     disableOnInteraction: false
//   },
//   pagination:{
//     el:'.custom-pagination',
//     type:'custom',
//     renderCustom:function(swiper,current,total){
//       return current+'/'+total
//     }
//   }
// })

})

