import Vue from 'vue';
import Styleable from './Styleable';

export default Vue.extend({
  /**
   * The name of the block.
   */
  name: 'Blockable',

  /**
   * The mixins that this mixin will extend from.
   */
  mixins: [
    Styleable,
  ],

  /**
   * The computed properties that this mixin will add.
   */
  computed: {
    /**
     * The correct CSS block classes.
     *
     * @returns {String[]} The correct CSS classes.
     */
    classes() {
      return this.$css.getBlockClassNames(this.$options.block, this.getVariants)
        .map(className => this.getClassName(className));
    },
  },
});
