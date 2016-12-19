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
    const $slick = $(this.$el);

    $slick.on('afterChange', this.afterChange);
    $slick.on('beforeChange', this.beforeChange);
    $slick.on('breakpoint', this.breakpoint);
    $slick.on('destroy', this.destroy);
    $slick.on('edge', this.edge);
    $slick.on('init', this.init);
    $slick.on('reInit', this.reInit);
    $slick.on('setPosition', this.setPosition);
    $slick.on('swipe', this.swipe);
    $slick.on('lazyLoaded', this.lazyLoaded);
    $slick.on('lazyLoadError', this.lazyLoadError);

    $slick.slick(this.options);
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

    // Events
    afterChange(event, slick, currentSlide) {
      this.$emit('afterChange', event, slick, currentSlide);
    },

    beforeChange(event, slick, currentSlide, nextSlide) {
      this.$emit('beforeChange', event, slick, currentSlide, nextSlide);
    },

    breakpoint(event, slick, breakpoint) {
      this.$emit('breakpoint', event, slick, breakpoint);
    },

    destroy(event, slick) {
      this.$emit('destroy', event, slick);
    },

    edge(event, slick, direction) {
      this.$emit('edge', event, slick, direction);
    },

    init(event, slick) {
      this.$emit('init', event, slick);
    },

    reInit(event, slick) {
      this.$emit('reInit', event, slick);
    },

    setPosition(event, slick) {
      this.$emit('setPosition', event, slick);
    },

    swipe(event, slick, direction) {
      this.$emit('swipe', event, slick, direction);
    },

    lazyLoaded(event, slick, image, imageSource) {
      this.$emit('lazyLoaded', event, slick, image, imageSource);
    },

    lazyLoadError(event, slick, image, imageSource) {
      this.$emit('lazyLoadError', event, slick, image, imageSource);
    },
  },

});
</script>
