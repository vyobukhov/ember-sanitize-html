import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sanitize-html', 'Integration | Component | sanitize html', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{sanitize-html value="<h3>Test</h3>"}}`);

  assert.equal(this.$().text().trim(), 'Test');

  // Template block usage:
  this.render(hbs`
    {{#sanitize-html}}
      template block text
    {{/sanitize-html}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
