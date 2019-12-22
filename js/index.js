/* 二级菜单栏 */
$('#logo ul>li').on('mouseenter',function(){
    let index=$(this).index();
    $('#logo .subMenu').eq(index).show();
})
$('#logo ul>li').on('mouseleave',function(){
    $('#logo .subMenu').hide();
})
// 轮播
$("#demo3").slideBox({
    duration: 0.3, //滚动持续时间，单位：秒

    easing: "linear", //swing,linear//滚动特效

    delay: 5, //滚动延迟时间，单位：秒

    hideClickBar: false, //不自动隐藏点选按键

    clickBarRadius: 10
  });
/* 楼层的滚动 */
// 1.找到滚动到图书的距离，出现楼层条
// 获取book距离窗口的距离

//获取楼层距离相对顶端下移动的距离
console.log($('#floorLi').offset().top);
$(window).scroll(function(){
    // console.log($('html,body').scrollTop())
    let scroll=$('html,body').scrollTop(); 
    if(scroll>=500){
        $('#floorLi').show();
        $('#floorLi').offset().top-20+'px';
    }else{
        $('#floorLi').hide();
    }
})
// 2.点击相应的位置就滚动到相应的楼层
