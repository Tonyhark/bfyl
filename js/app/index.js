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
});