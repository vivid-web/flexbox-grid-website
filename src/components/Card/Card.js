import Blockable from '@/mixins/Blockable';
import Slotable from '@/mixins/Slotable';

// Component styling
import '@/assets/stylus/components/_card.styl';

/* @vue/component */
export default {
  /**
   * The name of the component.
   */
  name: 'UICard',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'card',

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
      <div class={this.classes}>
        {this.children}
      </div>
    );
  },
};

