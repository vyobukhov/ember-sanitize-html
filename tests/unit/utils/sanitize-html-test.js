import sanitizeHtml from 'dummy/utils/sanitize-html';
import { module, test } from 'qunit';

module('Unit | Utility | sanitize html');

test('it returns html with allowed tags', function(assert) {
  const value = '<h3 class="test">Test</h3>';
  const sanitizedValue = sanitizeHtml(value);

  assert.equal(sanitizedValue, '<h3>Test</h3>');

});

test('it returns sanitizes dissalowed tags', function(assert) {
  const value = '<h1 class="test">Test</h1>';
  const sanitizedValue = sanitizeHtml(value);

  assert.equal(sanitizedValue, 'Test');

});