app.AddMemberView = app.Backend.View.extend({

    el: "#app",
    template: _.template($('#add-member-template').html()),
    events: {
        'click #inputStartDate': 'pickStartDate',
        'submit form#formAddMember': 'addMember'
    },

    initialize: function(){
        this.model = new app.Member;
        this.render();
        this.$("#inputService").val(this.model.get("service"));
    },

    render: function(){
        this.$el.html(this.template());
        this.$start = this.$('#inputStartDate');
    },

    pickStartDate: function(e){
        this.$start.pickadate();
    },

    addMember: function(e){
        e.preventDefault(); 
        var self = this;
        
        this.model.save({
            "name":this.$("#inputName").val(),
            "room":this.$("#inputRoom").val(),
            "service":this.$("#inputService").val(),
            "guarantte":this.$("#inputGuarantee").val(),
            "payBy":this.$("#selectPayBy").val(),
            "startDate":this.$("#inputStartDate").val(),
            "length":this.$("#inputLength").val()
        }, {
            success: function(object) {
                app.router.navigate("members", {trigger: true});
            },
            error: function(obj, error) {
                console.log(error);
            }
                // self.$("#msg").removeClass('hidden');
                //     self.$("#msg").empty();
                //     self.$("#msg").html(error);
                //     window.scrollTo(0,0);
                // }
        });
        //return false;
    }
});