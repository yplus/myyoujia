app.LoginView = app.Backend.View.extend({
    events: {
      "submit form.login-form": "logIn"
    },

    el: "#app",
    
    initialize: function() {
      _.bindAll(this, "logIn");
      this.render();
    },

    continue: function(){
        var route = "";
        if(app.router.lastRoute) route = app.router.lastRoute;
        app.router.navigate(route, {trigger:true});
    },

    logIn: function(e) {
      var self = this;
      //self.app = app;
      var username = this.$("#login-username").val();
      var password = this.$("#login-password").val();
      
      app.Backend.User.logIn(username, password, {
        success: function(user) {

            self.continue();
            self.undelegateEvents();
            delete self;
        },

        error: function(user, error) {
          self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
          self.$(".login-form button").removeAttr("disabled");
        }
      });

      this.$(".login-form button").attr("disabled", "disabled");

      return false;
    },

    render: function() {
      this.$el.html(_.template($("#login-template").html()));
      this.delegateEvents();
    }
  });
