// 表单验证
var obj={username:false, pwd:false, pwd2:false, mobile:false};
// 用户名验证--长度小于2为flase
$('#username').on('input', function(){
    if( $(this).val().length<2 ){
        obj.username=false;
        $(this).parent().css('border', '1px solid #f00');
    }else{
        obj.username=true;
        $(this).parent().css('border', '1px solid #0a0');
    }
});
    //验证密码
    $('#pwd').on('input', function(){
        console.log(222)
        if( $(this).val().length<6 ){
            obj.pwd=false;
            $(this).parent().css('border', '1px solid #f00');
        }else{
            obj.pwd=true;
            $(this).parent().css('border', '1px solid #0a0');
        }
    });
    
    //确认密码，验证两次输入的密码是否一致
    $('#pwd2').on('input', function(){
        if( $(this).val() != $('#pwd').val() || $(this).val().length<6){
            obj.pwd2=false;
            $(this).parent().css('border', '1px solid #f00');
        }else{
            obj.pwd2=true;
            $(this).parent().css('border', '1px solid #0a0');
        }
    });
    
    //验证手机号：11位数字，必须1开头，第二位必须是356789
    $('#mobile').on('input', function(){
        var reg=/^1[356789]\d{9}$/;
        if( !reg.test( $(this).val() )){
            obj.mobile=false;
            $(this).parent().css('border', '1px solid #f00');
        }else{
            obj.mobile=true;
            $(this).parent().css('border', '1px solid #0a0');
        }
    });
    
    //点击提交按钮时再次进行验证
    $('.regform form').on('submit', function(){
        //遍历全局对象进行二次验证
        for(var i in obj){
            if(obj[i]==false){
                console.log(333);
                $('#'+i).parent().css('border', '1px solid #f00');
                return false;
            }
        }
    });
