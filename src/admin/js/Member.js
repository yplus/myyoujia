app.Member = app.Backend.Object.extend("Member", {
    defaults: {
        'name': '',
        'room': '',
        'rent': '0',
        'service': '95',
        'guarantte': '0',
        'payBy': '1',
        'startDate': '',
        'length': '0'
    },

    initialize: function(){},

    validate: function(attrs, options){

        return false;
    }
});