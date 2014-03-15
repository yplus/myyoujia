app.ReserveView = app.Backend.View.extend({
    el: '#app',
    template: _.template($('#reserve-view-template').html()),
    title: "预约",
    events: {
        'click #meal-button': 'gotoMeal',
        'click #clean-button': 'gotoClean',
        'click #repair-button': 'gotoRepair'
    },

    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.html(this.template());
        return this;
    },

    gotoMeal: function(e) {
        app.router.navigate("meal", {trigger:true});
    },

    gotoClean: function(e) {
        app.router.navigate("clean", {trigger:true});
    },

    gotoRepair: function(e) {
        app.router.navigate("repair", {trigger:true});
    }
})