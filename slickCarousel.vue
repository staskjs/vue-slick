<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue';
import $ from 'jquery';

// Check if request comes from browser and is not server rendered
if (typeof window !== 'undefined') {
  const slick = require('slick-carousel')
}

export default {
  data () { return { slickEl: null } },

  props: {
    options: { type: Object, default () { return {} } },
    destroyable: { type: Boolean, default: true }
  },

  mounted() {
    this.create();
  },

  destroyed() {
    if (this.destroyable) this.slickEl.slick('unslick');
  },

  methods: {
    create() {
      this.slickEl = $(this.$el);

      this.slickEl.on('afterChange', this.onAfterChange);
      this.slickEl.on('beforeChange', this.onBeforeChange);
      this.slickEl.on('breakpoint', this.onBreakpoint);
      this.slickEl.on('destroy', this.onDestroy);
      this.slickEl.on('edge', this.onEdge);
      this.slickEl.on('init', this.onInit);
      this.slickEl.on('reInit', this.onReInit);
      this.slickEl.on('setPosition', this.onSetPosition);
      this.slickEl.on('swipe', this.onSwipe);
      this.slickEl.on('lazyLoaded', this.onLazyLoaded);
      this.slickEl.on('lazyLoadError', this.onLazyLoadError);

      this.slickEl.slick(this.options);
    },

    destroy() {
      this.slickEl.off('afterChange', this.onAfterChange);
      this.slickEl.off('beforeChange', this.onBeforeChange);
      this.slickEl.off('breakpoint', this.onBreakpoint);
      this.slickEl.off('destroy', this.onDestroy);
      this.slickEl.off('edge', this.onEdge);
      this.slickEl.off('init', this.onInit);
      this.slickEl.off('reInit', this.onReInit);
      this.slickEl.off('setPosition', this.onSetPosition);
      this.slickEl.off('swipe', this.onSwipe);
      this.slickEl.off('lazyLoaded', this.onLazyLoaded);
      this.slickEl.off('lazyLoadError', this.onLazyLoadError);
      this.slickEl.slick('unslick');
    },

    reSlick() {
      this.destroy();
      this.create();
    },

    next() {
      this.slickEl.slick('slickNext');
    },

    prev() {
      this.slickEl.slick('slickPrev');
    },

    pause() {
      this.slickEl.slick('slickPause');
    },

    play() {
      this.slickEl.slick('slickPlay');
    },

    goTo(index, dontAnimate) {
      this.slickEl.slick('slickGoTo', index, dontAnimate);
    },

    currentSlide() {
      return this.slickEl.slick('slickCurrentSlide');
    },

    add(element, index, addBefore) {
      this.slickEl.slick('slickAdd', element, index, addBefore);
    },

    remove(index, removeBefore) {
      this.slickEl.slick('slickRemove', index, removeBefore);
    },

    filter(filterData) {
      this.slickEl.slick('slickFilter', filterData);
    },

    unfilter() {
      this.slickEl.slick('slickUnfilter');
    },

    getOption(option) {
      this.slickEl.slick('slickGetOption', option);
    },

    setOption(option, value, refresh) {
      this.slickEl.slick('slickSetOption', option, value, refresh);
    },

    setPosition() {
      this.slickEl.slick('setPosition');
    },

    // Events
    onAfterChange(event, slick, currentSlide) {
      this.$emit('afterChange', event, slick, currentSlide);
    },

    onBeforeChange(event, slick, currentSlide, nextSlide) {
      this.$emit('beforeChange', event, slick, currentSlide, nextSlide);
    },

    onBreakpoint(event, slick, breakpoint) {
      this.$emit('breakpoint', event, slick, breakpoint);
    },

    onDestroy(event, slick) {
      this.$emit('destroy', event, slick);
    },

    onEdge(event, slick, direction) {
      this.$emit('edge', event, slick, direction);
    },

    onInit(event, slick) {
      this.$emit('init', event, slick);
    },

    onReInit(event, slick) {
      this.$emit('reInit', event, slick);
    },

    onSetPosition(event, slick) {
      this.$emit('setPosition', event, slick);
    },

    onSwipe(event, slick, direction) {
      this.$emit('swipe', event, slick, direction);
    },

    onLazyLoaded(event, slick, image, imageSource) {
      this.$emit('lazyLoaded', event, slick, image, imageSource);
    },

    onLazyLoadError(event, slick, image, imageSource) {
      this.$emit('lazyLoadError', event, slick, image, imageSource);
    },
  },

};
</script>
