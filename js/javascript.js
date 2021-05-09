$(function(){
    const $form = $('header>.container>form');
    const $langlist = $('header>.container>form>fieldset>.langlist');
    const $lang = $('header>.container>form>fieldset>.langlist>li>a');

    $form.on('click', function(){
        console.log('언어선택 클릭');
        $langlist.toggle();
    });

    $form.on('mouseleave', function(){
        $langlist.hide();
    });

    $lang.on('click', function(evt){
        
        const selectedLang = $(this).text();
        
        $("#lang").val(selectedLang);

        evt.preventDefault();
    });


});


//슬라이드 코드구현
$(function(){

    const $indicators = $('section>.line-visual>.line-visual-pagination>li>a');
    const $container = $('section>.line-visual>.line-visual-container');

    $indicators.on('click', function(evt){
        evt.preventDefault();

        const nowIdx = $indicators.index(this);

        $container.stop().animate({
            left : -(100 * nowIdx) + '%'
        });

        $(this).parent().addClass('on').siblings().removeClass('on');
        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    });

   
});

// 원페이지 슬라이드 구현
$(function(){
    let $mnu = $('header>.container>nav>.gnb>li>a');
    let nowIdx = 0;

    let arrArticleTop = [];

    for(let i=0;i<6;i++){
        arrArticleTop[i] = $('.srv').eq(i).offset().top;
    }

    $mnu.on('click',function(evt){
        evt.preventDefault();

        nowIdx = $mnu.index(this);

        $('html, body').stop().animate({
            scrollTop : arrArticleTop[nowIdx]-69
        });
    });

    $(window).on('scroll',function(){
        let scrollTop = $(window).scrollTop();

        for(let k=0;k<6;k++){
            if(scrollTop>=arrArticleTop[k]-69-100){
                $mnu.eq(k).parent().addClass('on').siblings().removeClass('on');
            }else if(scrollTop<arrArticleTop[0]-69){
                $mnu.eq(0).parent().removeClass('on');
            }
        }
    });

    $('.container>h1').on('click',function(){
        $('html, body').stop().animate({
            scrollTop : 0
        });
    });

    $(window).on('load',function(){
        $('.container>h1').trigger('click')
    })
});