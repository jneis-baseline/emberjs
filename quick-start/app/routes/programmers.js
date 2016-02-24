import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Bob Martin', 'Michael Feathers', 'Kent Beck']
    }
});
