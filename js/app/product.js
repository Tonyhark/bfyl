/**
 * Created by ZhaoYue on 2015/10/31.
 */
define(['$', 'backbone'], function ($, Backbone) {

    //配置路由
    var autoRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'at/:module/:action(/*condition)': 'loadmodule'
        },
        home: function() {
            this.loadmodule('home', 'index');
        },
        //按照at/module/action(/conditions)格式的請求自動加載模塊
        loadmodule: function(md, ac, con) {
            //将参数字符串'a:123/b:456'转换为json对象{a:123, b:456}
            var cj = {};
            if(con && con.indexOf(':') > -1) {
                con.replace(/(\w+)\s*:\s*([\w-]+)/g, function(a, b, c) {
                    b && (cj[b] = c);
                });
            } else {
                cj = con;
            }
            //加载module目录下对应的模块
            require.async(['module', md, ac].join('/'), function(cb) {
                if(cb) {
                    cb(cj);
                } else {
                    alert('模塊加載失敗！');
                }
            })
        }
    });

});