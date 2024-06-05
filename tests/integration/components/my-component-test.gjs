import MyComponent from 'embroider-engine/components/my-component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';

module('Integration | Component | my-component', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
      await render(<template><MyComponent @truthHelpersLoad={{true}} @truthHelpersLoad2={{true}}/></template>);
    assert.dom(this.element.querySelector('p')).hasText('Truth Helpers Load');
  });
});
