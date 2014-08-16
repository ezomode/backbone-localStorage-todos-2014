/*global Backtodo, Backbone*/

Yoyo.Models = Yoyo.Models || {};

(function () {
    'use strict';

    Yoyo.Models.Todo = Backbone.Model.extend({

        defaults: {
        title: '',
        completed: false,
        },

        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        }
    });

})();
