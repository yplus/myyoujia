app.MyView = app.Backend.View.extend({

    el: '#app',

    template: _.template($('#my-view-template').html()),
    title: "我的YOU+",
    events: {
        'click .checkout-button': 'checkout'
    },

    initialize: function(){
        var vars = {
            title:this.title,
            welcome: moment().hour()<18 ? (moment().hour()<12?"早上好！":"下午好!"):"晚上好！",
            name: "张三",
            room: "401",
            rent: 2300.0,
            payByStr: "年付",  // 12-年付， 1-月付
            service: 95.0,
            utility: 300.0,
            totalDue: 2695.0,
            dateDue: moment().add('months', 1).format("LL"),
            firstDay: moment().format("LL"),
            lastDay: moment().add('months', 12).subtract('days', 1).format("LL"),
            karma: 5
        }

        this.$el.html(this.template(vars));
    },

    render: function(){
        
    },

    checkout: function(){
        this.$(".checkout-confirm").toggleClass('hidden', false);
        this.$(".checkout-button").toggleClass('hidden', true);
    }
})