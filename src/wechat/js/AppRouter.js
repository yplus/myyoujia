app.AppRouter = app.Backend.Router.extend({
    routes: {
        "my": "my",
        "meal": "meal",
        "repair": "repair",
        "clean": "clean"
    },

    initialize: function(options) {
        app.Backend.history.start({pushState:false});
    },

    my: function() {
        var v = new app.MyView;
        document.title = v.title;
    },

    meal: function() {
        var v = new app.MealView;
        document.title = v.title;
    },

    repair: function() {
    },

    clean: function() {
        var v = new app.CleanView;
        document.title = v.title;
    }
});