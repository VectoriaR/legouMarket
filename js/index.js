/* 二级菜单栏 */
$('#logo ul>li').on('mouseenter',function(){
    let index=$(this).index();
    $('#logo .subMenu').eq(index).show();
})
$('#logo ul>li').on('mouseleave',function(){
    $('#logo .subMenu').hide();
})
// 轮播
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
/* 楼层的滚动 */
$('#floorLi a').click(function(){
    //获取索引
    let index=$(this).index();
    //获取对应楼层盒子距离窗口的偏移,注意offset()有两个属性；left,top
    let fTop=$('.floor').eq(index).offset().top;
    //设置滚动的距离,动态animated()
    $('html,body').animate({scrollTop:fTop},500)
})
// 置顶
$('#toTop').on('click',function(){
    $('html,body').animate({scrollTop:0},500);
}) 