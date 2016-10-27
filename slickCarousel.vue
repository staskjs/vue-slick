<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue';
import $ from 'jquery';
import 'slick-carousel';

export default Vue.extend({

  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  mounted() {
    $(this.$el).slick(this.options);
  },

  beforeDestroy() {
    $(this.$el).slick('unslick');
  },

  methods: {
    next() {
      $(this.$el).slick('slickNext');
    },

    prev() {
      $(this.$el).slick('slickPrev');
    },

    pause() {
      $(this.$el).slick('slickPause');
    },

    play() {
      $(this.$el).slick('slickPlay');
    },

    goTo(index, dontAnimate) {
      $(this.$el).slick('slickGoTo', index, dontAnimate);
    },

    currentSlide() {
      $(this.$el).slick('slickCurrentSlide');
    },

    add(element, index, addBefore) {
      $(this.$el).slick('slickAdd', element, index, addBefore);
    },

    remove(index, removeBefore) {
      $(this.$el).slick('slickRemove', index, removeBefore);
    },

    filter(filter) {
      $(this.$el).slick('slickFilter', filter);
    },

    unfilter() {
      $(this.$el).slick('slickUnfilter');
    },

    getOption(option) {
      $(this.$el).slick('slickGetOption', option);
    },

    setOption(option, value, refresh) {
      $(this.$el).slick('slickSetOption', option, value, refresh);
    },
  },

});
</script>
