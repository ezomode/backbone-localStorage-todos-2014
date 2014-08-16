/*global Yoyo, Backbone, JST*/

Yoyo.Views.TodoView = Backbone.View.extend({

    tagName: 'li',

    template: JST['app/scripts/templates/todo.ejs'],

    events: {
        'click input[type="checkbox"]': 'toggle',
        'click div[class="x"]': 'remove',
        'dblclick span': 'toggleEdit',
        'submit form': 'toggleEdit'
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    toggle: function () {
        this.model.toggle();
    },

    remove: function () {
        var input = this.$('form input');
        var title = input.val().trim();

        if (title) {
            this.model.destroy();
            // this.model.save();
        }

        Backbone.trigger('todo-removed-event');
    },

    toggleEdit: function () {
        var input = this.$('form input');
        var title = input.val().trim();

        if (!title) {
            this.model.destroy();
            this.remove();
            return;
        }

        this.$el.toggleClass('editing');

        if (title === this.model.get('title')) {
            // Edit mode.
            input.val(title);
            input.focus();
        } else {
            // Done editing.
            this.model.set('title', title);
            this.model.save();

            this.render();
        }
    }

});