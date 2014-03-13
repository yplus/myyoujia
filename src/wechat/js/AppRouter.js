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
        new app.MyView();
        this.navigate("my");
    },

    meal: function() {
    },

    repair: function() {
    },

    clean: function() {

    }
});