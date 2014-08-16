/*global Yoyo, Backbone*/

// Yoyo.Collections = Yoyo.Collections || {};
//
// (function () {
//
//     localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
//
//     Yoyo.Collections.Todos = Backbone.Collection.extend({
//
//         model: Yoyo.Models.Todos
//
//     });
//
// })();

Yoyo.Collections.TodosCollection = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage('backbone-generator-todos'),

    initialize: function () {
        this.model = Yoyo.Models.Todo;
    }

});
