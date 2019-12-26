// 轮播
$("#demo3").slideBox({
    duration: 0.3, //滚动持续时间，单位：秒

    easing: "linear", //swing,linear//滚动特效

    delay: 5, //滚动延迟时间，单位：秒

    hideClickBar: false, //不自动隐藏点选按键

    clickBarRadius: 10
  });

  //滑块切换
  $(".sub li").on('click',function(){
    //获取索引
    let index=$(this).index();
    //点击相应的li改变样式,其他的兄弟元素去掉样式
    $(this).addClass('orange').siblings().removeClass('orange');
    // 显示对应的二级菜单---先干掉所有，再救活一个
    $('#hot .subMenu').hide();
    $('#hot .subMenu').eq(index).show();
    
})
// 加减
let count=0;
$('.btn1').on('click',function(){
  count++;
  let val=$(this).siblings('.value').text();
  let price=$(this).closest('.fourtd').siblings('.threetd').text();
  val=parseInt(val)+1;
  $(this).siblings('.value').html(val);
  $(this).closest('.fourtd').siblings('.threetd').html(`${parseFloat(price)+41.00}.00`);
  
})
// 减法
$('.btn2').on('click',function(){
  let price=$(this).closest('.fourtd').siblings('.threetd').text();
  let val=$(this).siblings('.value').text();
  val=parseInt(val)-1;
  if(val<=1){
    $(this).siblings('.value').html(1);
    $(this).closest('.fourtd').siblings('.threetd').html(`${41}.00`);
  }else{
    $(this).siblings('.value').html(val);
    $(this).closest('.fourtd').siblings('.threetd').html(`${parseFloat(price)+41.00}.00`);
  }
})