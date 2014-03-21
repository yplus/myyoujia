app.AppRouter = app.Backend.Router.extend({
    routes: {
        "members":"listMembers",
        "members/add":"addMember",
        "login": "login",
        "*path": "default"
    },

    initialize: function(options) {
    
    },

    login: function() {
        if (app.Backend.User.current()) {
            var route = "";
            if(app.router.lastRoute) route = app.router.lastRoute;
            app.router.navigate(route, {trigger:true});
        } else {
            new app.LoginView;
        }
    },

    default: function(path) {
        if (app.Backend.User.current()) {
            new app.AppView;
        } else {
            this.navigate("login", {trigger:true});
        }
    },

    listMembers: function() {
        if (app.Backend.User.current()) {
            new app.ListMembersView;
        } else {
            this.lastRoute = app.Backend.history.fragment;
            this.navigate("login", {trigger:true});
        }
    },

    addMember: function() {
        if (app.Backend.User.current()) {
            new app.AddMemberView;
        } else {
            this.lastRoute = app.Backend.history.fragment;
            this.navigate("login", {trigger:true});
        }
    }
});