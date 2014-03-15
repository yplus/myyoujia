app.AppRouter = app.Backend.Router.extend({
    routes: {
        "my": "my",
        "meal": "meal",
        "repair": "repair",
        "clean": "clean",
        "reserve": "reserve"
    },

    initialize: function(options) {
        app.Backend.history.start({pushState:false});
    },

    my: function() {
        var v = new app.MyView;
        document.title = v.title;
    },

    reserve: function() {
        var v = new app.ReserveView;
        document.title = v.title;
    },

    meal: function() {
        var v = new app.MealView;
        document.title = v.title;
    },

    repair: function() {
        var v = new app.RepairView;
        document.title = v.title;
    },

    clean: function() {
        var v = new app.CleanView;
        document.title = v.title;
    }
});