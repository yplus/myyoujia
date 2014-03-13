app.MyView = app.Backend.View.extend({

    el: '#app',

    template: _.template($('#my-view-template').html()),

    initialize: function(){

        var vars = {
            welcome : new Date().getHours()<18 ? (Date.now().getHours()<12?"早上好！":"下午好!"):"晚上好！",
            name : "张三"
        }

        this.$el.html(this.template(vars));
    },

    render: function(){
        
    }
})