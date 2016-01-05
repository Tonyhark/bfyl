/**
 * Created by ZhaoYue on 2015/11/4.
 */
seajs.use(['$', 'jquery/cycle/2.8.8/cycle'], function ($, cycle) {

    cycle($);

    $(function () {
        $('#J_Slide').cycle({
            next: '.slide-aow-r',
            prev: '.slide-aow-l'
        });
    });

    var $topBn = $('#top-banner');
    var $topClose = $('.tb-close');
    var topImg = $('<img src="img/index/top-banner.jpg"/>').on('load',function(e){

        $topBn.slideDown();

        setTimeout(function(){
            $topBn.slideUp();
        },10000);
    });

    $topClose.click(function(e){
        $topBn.slideUp();
    });


});