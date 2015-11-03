/**
 * Created by ZhaoYue on 2015/11/4.
 */
seajs.use(['$', 'jquery/tools/1.2.7/tools'], function ($, tools) {

    tools($);

    $(function () {
        $('.sub-cate-tabs').tabs('.authen-panel');
    });
});