/**
 * Created by ZhaoYue on 2015/10/31.
 */
define('app/product', function (require, exports,module) {
    var $ = require('$');

    $(document).on('click','.movie-btn',handleClickBtn);
    $(document).on('click','.movie-close',handleClickClose);

    function handleClickBtn (e){
        var $btn = $(this);
        var $btnBar = $btn.parent();
        var $playerCntr = $btnBar.next();
        var videoName = $btn.attr('name');
        var videoUrl = 'http://www.youlitech.com/new/video/'+ videoName +'.mp4';
        var title = $btn.attr('title');
        $btnBar.hide();
        playMovie(videoName,videoUrl,$playerCntr,title)
    }

    function playMovie (videoName,videoUrl,cntr,title){
        var $a = $('<a>',{
            id: videoName,
            style: 'display:block;width:480px;height:340px',
            href: videoUrl
        });
        cntr.find('.movie-title').html(title);
        cntr.find('.movie-player').append($a);
        flowplayer(videoName, "../swf/flowplayer-3.2.7.swf",{
            clip: {
                //url: "flowplayer.flv",
                scaling: 'fit',
                autoPlay: true,
                autoBuffering: true
            }
        });
        cntr.show();
    }

    function handleClickClose (e){
        var $this = $(this);
        var $playerCntr = $this.closest('.movie-ctnr');
        var $btnBar = $playerCntr.siblings('.movie-btns');
        closePlayer($btnBar,$playerCntr);

    }
    function closePlayer (btnBar,cntr){
        cntr.find('.movie-player').empty();
        cntr.hide();
        btnBar.show()
    }

});