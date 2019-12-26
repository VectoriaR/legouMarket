$('#swiperRight li').on('mouseover',function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
})