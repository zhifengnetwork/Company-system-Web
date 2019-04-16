$(function(){
    $('.lb_headWrap_text').click(function(){shopping_cart
        var acd = $(this)
       console.log(333) 
        if(acd.hasClass('active')){
            acd.html('编辑').removeClass('active')
        }else{
            acd.html('完成').addClass('active')
        }
    })
})