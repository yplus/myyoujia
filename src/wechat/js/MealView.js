app.MealView = app.Backend.View.extend({

    el: '#app',

    template: _.template($('#meal-view-template').html()),
    title: "搭伙饭预订",

    events: {
        'click .submit-button': 'submit',
        'click .cancel-button': 'cancel',
        'change input[name=options]': 'changeCount'
    },

    initialize: function(){
        this.render();
        this.$('.btn').first().button('toggle'); // select first option
        this.meal_count = $('input[name=options]:checked').val();
    },

    render: function(){
        this.$el.html(this.template({meal_count:this.meal_count, title:this.title}));
        return this;
    },

    changeCount: function(e){
        this.meal_count = $('input[name=options]:checked').val();
    },

    submit: function(){
        this.render();
        this.$(".meal-reserve").toggleClass('hidden', true);
        this.$(".meal-confirm").toggleClass('hidden', false);
    },

    cancel: function(){
        this.render();
        this.meal_count = $('input[name=options]:checked').val();
        this.$(".meal-reserve").toggleClass('hidden', false);
        this.$(".meal-confirm").toggleClass('hidden', true);  
    }
})