app.RepairView = app.Backend.View.extend({
    el: '#app',
    template: _.template($('#repair-view-template').html()),
    title: "维修预约",
    events: {
        'click .datepicker': 'pickDate',
        'change input[name=timeslots]': 'changeTime',
        'click .submit-button': 'submit',
        'click .cancel-button': 'cancel'
    },

    initialize: function(){
        this.day = "";
        this.time = "";
        this.render();
    },

    render: function(){
        this.$el.html(this.template({day:this.day, time:this.time}));
        this.$day = this.$('.datepicker');
        return this;
    },

    pickDate: function(e){
        this.$day.pickadate({
            min: moment().toDate(),
            max: moment().add('days',10).toDate(),
        });
    },

    changeTime: function(e){
        this.time = $('input[name=timeslots]:checked').val();
    },

    submit: function(){
        
        this.day = $('.datepicker').val();
        if(this.day) this.day = moment(this.day).format("LL");    

        this.problem = $('#problem').val();
        this.description = $('#description').val();

        console.log(this.day);
        console.log(this.time);
        console.log(this.problem);
        console.log(this.description);
        
        this.render();
        this.$(".reserve").toggleClass('hidden', true);
        this.$(".confirm").toggleClass('hidden', false);
    },

    cancel: function(){
        this.render();
        this.day = "";
        this.time = "";
        this.$(".reserve").toggleClass('hidden', false);
        this.$(".confirm").toggleClass('hidden', true);  
    }
})