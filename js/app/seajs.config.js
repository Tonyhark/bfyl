/**
 * Created by ZhaoYue on 2015/10/31.
 */
seajs.config({
    alias: {
        $: 'jquery/jquery/1.7.2/jquery',
        'underscore': 'gallery/underscore/underscore',
        'backbone': 'gallery/backbone/backbone',
        'product': 'app/product',
        'player':'app/flowplayer-3.2.6.min.js'
    },
    preload:['player']
});
