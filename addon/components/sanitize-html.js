import Ember from 'ember';
import layout from '../templates/components/sanitize-html';
import sanitize from '../utils/sanitize-html';

export default Ember.Component.extend({

  layout,

  classNames: ['sanitized-value'],
  value:      null,
  options:    null,

  sanitizedValue: Ember.computed('value', function () {
    const value   = this.get('value');
    const options = this.get('options');
    return sanitize(value, options);
  })

});
