/**
 * Created by ZhaoYue on 2015/10/31.
 */
define(['$', 'backbone'], function ($, Backbone) {

    //����·��
    var autoRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'at/:module/:action(/*condition)': 'loadmodule'
        },
        home: function() {
            this.loadmodule('home', 'index');
        },
        //����at/module/action(/conditions)��ʽ��Ո���ԄӼ��dģ�K
        loadmodule: function(md, ac, con) {
            //�������ַ���'a:123/b:456'ת��Ϊjson����{a:123, b:456}
            var cj = {};
            if(con && con.indexOf(':') > -1) {
                con.replace(/(\w+)\s*:\s*([\w-]+)/g, function(a, b, c) {
                    b && (cj[b] = c);
                });
            } else {
                cj = con;
            }
            //����moduleĿ¼�¶�Ӧ��ģ��
            require.async(['module', md, ac].join('/'), function(cb) {
                if(cb) {
                    cb(cj);
                } else {
                    alert('ģ�K���dʧ����');
                }
            })
        }
    });

});