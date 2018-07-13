import Blockable from '@/mixins/Blockable';
import Slotable from '@/mixins/Slotable';

// Component styling
import '@/assets/stylus/components/_button.styl';

/* @vue/component */
export default {
  /**
   * The name of the component.
   */
  name: 'UIButton',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'button',

  /**
   * The mixins injected into this component.
   */
  mixins: [
    Blockable,
    Slotable,
  ],

  /**
   * Renders the component.
   *
   * @param {Function} h Will create the DOM element.
   *
   * @returns {VNode} The virtual DOM tree.
   */
  /* eslint-disable-next-line no-unused-vars */
  render(h) {
    return (
      <a class={this.classes}>
        {this.children}
      </a>
    );
  },
};
