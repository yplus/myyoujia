app.AppView = app.Backend.View.extend({
    el: 'body',

    events: {
        'click #btnLogout': 'logout'
    },

    logout: function(e) {
        app.Backend.User.logOut();
        app.router.navigate('login', {trigger:true});
        //this.undelegateEvents();
        delete this;
    }
})