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


//course-swiper
var subjectSwiper=new Swiper('.course-tabNav',{
  slidesPerView: 'auto',
  freeMode: true,
  noSwiping : true,
  
})
$('.public-course-mod .course-tabNav .swiper-slide').click(function(){
  var ind=$(this).index();
  console.log(ind)
  $(this).addClass('current').siblings().removeClass('current');
  $(this).parents('.public-course-mod').find('.course-tabContent .course-tabItem').eq(ind).show().siblings().hide();
})
    //coupon-entrance
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

