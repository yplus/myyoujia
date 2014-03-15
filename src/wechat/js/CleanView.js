app.CleanView = app.Backend.View.extend({
    el: '#app',
    template: _.template($('#clean-view-template').html()),
    title: "保洁预约",
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
        this.$el.html(this.template({day:this.day, time:this.time, title:this.title}));
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

        console.log(this.day);
        console.log(this.time);
        
        this.render();
        this.$(".clean-reserve").toggleClass('hidden', true);
        this.$(".clean-confirm").toggleClass('hidden', false);
    },

    cancel: function(){
        this.render();
        this.day = "";
        this.time = "";
        this.$(".clean-reserve").toggleClass('hidden', false);
        this.$(".clean-confirm").toggleClass('hidden', true);  
    }
})