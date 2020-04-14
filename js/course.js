$(function(){
  var multipleSwiper = new Swiper('.multiple-swiper',{
    slidesPerView: 'auto',
    freeMode: true,
  });

  //detail-tab-con
  $('.detail-coursetab-inner span').click(function(e){
    var tabInd=$(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $('.detail-tab-con .swiper-slide').eq(tabInd).show().siblings().hide();
    if($(window).scrollTop()>contTop){
      $(window).scrollTop(contTop)
    }
  })

  //tab切换 滚动吸顶
  var contTop=$('.content-module').offset().top;
  $(window).scroll(function(){
    var windowH=$(window).scrollTop();
    if(windowH>contTop){
      if (/android/i.test(navigator.userAgent)) {
        $('.detail-course-tab').addClass('detail-tab-fixed');
      }
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        $('.detail-course-tab').addClass('detail-tab-sticky');
      }
    }else{
      $('.detail-course-tab').removeClass('detail-tab-sticky detail-tab-fixed')
    }
  });

  //课程层级展开收起
  $('.course-menu').click(function(){
    $(this).toggleClass('open-state')
    $(this).siblings('ul').slideToggle();
  });
  $('.course-section').click(function(){
    $(this).toggleClass('open-state')
    $(this).siblings('ul').slideToggle();
  })

  //讲义
  // $('.view-notes').click(function(){
  //   $('.check-handouts').animate({'bottom':0},300);
  // });
  // $('.check-handouts').click(function(){
  //   $('.check-handouts').animate({'bottom':'-100%'},300);
  // });
  // $('.handouts-inner,.slide-coupon-inner').click(function(e){
  //   e.stopPropagation();
  // })
  $('.match-dataTit span').click(function(){
    $(this).addClass('current').siblings().removeClass('current');
    $('.matchData-content .handouts-list').eq($(this).index()).show().siblings().hide();
  })
  
  //弹出优惠券
  $('.det-course-coupon').click(function(e){
    $('.slide-coupon').animate({'bottom':0},200);
  });
  $('.slide-close-btn,.slide-coupon').click(function(e){
    $('.slide-coupon').animate({'bottom':'-100%'},200);
  })
})