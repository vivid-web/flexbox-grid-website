<script>
import * as FlexboxgridVue from '@vivid-web/flexboxgrid-vue';
import SectionLayout from '@/sections/_Layout/Layout.vue';
import {
  Block as UIBlock,
  BlockContent as UIBlockContent,
} from '@/components';

import codeExampleHtml from './examples/example.html';
import codeExampleVue from './examples/example.vue';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionGridAlignBottom',

  /**
   * The components that this section can use.
   */
  components: {
    ...FlexboxgridVue,
    SectionLayout,
    UIBlock,
    UIBlockContent,
  },

  /**
   * The data that this section can use.
   *
   * @returns {Object} The view-model.
   */
  data() {
    return {
      theme: 'dark',
      title: 'Bottom Alignment',
      subtitle: 'It is possible to align the columns at the bottom',
      codeExamples: {
        html: codeExampleHtml,
        vue: codeExampleVue,
      },
    };
  },
};
</script>

<template>
  <SectionLayout
    :theme="theme"
    :title="title"
    :subtitle="subtitle"
    :code-examples="codeExamples"
  >

    <VGrid variant="container">
      <VRow variant="sm-bottom">
        <VCol variant="sm-4">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ea eligendi illo impedit placeat provident quod ut.
                Atque distinctio illo quisquam.
                Ab cupiditate distinctio, doloremque itaque laudantium maiores
                quibusdam reiciendis veritatis.
              </p>
              <p>
                A ad aliquid asperiores aut culpa dicta eaque expedita hic ipsa
                ipsam libero maiores minima nisi nobis perferendis quasi quis
                repudiandae, sint totam voluptatibus. Blanditiis iure natus perferendis
                voluptatem voluptatum?
              </p>
            </UIBlockContent>
          </UIBlock>
        </VCol>
        <VCol variant="sm-3">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ea eligendi illo impedit placeat provident quod ut.
                Atque distinctio illo quisquam.
                Ab cupiditate distinctio, doloremque itaque laudantium maiores
                quibusdam reiciendis veritatis.
              </p>
              <p>
                A ad aliquid asperiores aut culpa dicta eaque expedita hic ipsa
                ipsam libero maiores minima nisi nobis perferendis quasi quis
                repudiandae, sint totam voluptatibus. Blanditiis iure natus perferendis
                voluptatem voluptatum?
              </p>
            </UIBlockContent>
          </UIBlock>
        </VCol>
        <VCol variant="sm-5">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ea eligendi illo impedit placeat provident quod ut.
                Atque distinctio illo quisquam.
                Ab cupiditate distinctio, doloremque itaque laudantium maiores
                quibusdam reiciendis veritatis.
              </p>
              <p>
                A ad aliquid asperiores aut culpa dicta eaque expedita hic ipsa
                ipsam libero maiores minima nisi nobis perferendis quasi quis
                repudiandae, sint totam voluptatibus. Blanditiis iure natus perferendis
                voluptatem voluptatum?
              </p>
            </UIBlockContent>
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
