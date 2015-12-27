/**
 * Created by ZhaoYue on 2015/11/4.
 */
seajs.use(['$', 'jquery/tools/1.2.7/tools', 'arale/dialog/1.3.0/dialog.js'], function ($, tools, Dialog) {

    tools($);

    $(function () {
        $('.sub-cate-tabs').tabs('.authen-panel');
        var $imgs = $('.aut-pic img');
        new Dialog({
            trigger: $imgs,
            height: '630px',
            width:'500px',
            effect:'fade',
            content: '<div>Мгдижа</div>'
        }).before('show', function () {
                var src = this.activeTrigger.attr('src');
                var idx = src.lastIndexOf('/');
                var heroImgName =  src.substring(idx+1) ;
                var img = '<img src="../img/authen/hero-' + heroImgName + '" />';
                this.set('content', img);
            })
    });
});