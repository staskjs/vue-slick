<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import $ from 'jquery';

// Check if the request came from the browser and is not server rendered
if (typeof window !== 'undefined') {
    Promise.resolve(require('slick-carousel'));
}

export default {
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },

  mounted: function() {
    this.create();
  },

  destroyed: function() {
    $(this.$el).slick('unslick');
  },

  methods: {
    create: function() {
      const $slick = $(this.$el);

      $slick.on('afterChange', this.onAfterChange);
      $slick.on('beforeChange', this.onBeforeChange);
      $slick.on('breakpoint', this.onBreakpoint);
      $slick.on('destroy', this.onDestroy);
      $slick.on('edge', this.onEdge);
      $slick.on('init', this.onInit);
      $slick.on('reInit', this.onReInit);
      $slick.on('setPosition', this.onSetPosition);
      $slick.on('swipe', this.onSwipe);
      $slick.on('lazyLoaded', this.onLazyLoaded);
      $slick.on('lazyLoadError', this.onLazyLoadError);

      $slick.slick(this.options);
    },

    destroy: function() {
      const $slick = $(this.$el);

      $slick.off('afterChange', this.onAfterChange);
      $slick.off('beforeChange', this.onBeforeChange);
      $slick.off('breakpoint', this.onBreakpoint);
      $slick.off('destroy', this.onDestroy);
      $slick.off('edge', this.onEdge);
      $slick.off('init', this.onInit);
      $slick.off('reInit', this.onReInit);
      $slick.off('setPosition', this.onSetPosition);
      $slick.off('swipe', this.onSwipe);
      $slick.off('lazyLoaded', this.onLazyLoaded);
      $slick.off('lazyLoadError', this.onLazyLoadError);
      $(this.$el).slick('unslick');
    },

    reSlick: function() {
      this.destroy();
      this.create();
    },

    next: function() {
      $(this.$el).slick('slickNext');
    },

    prev: function() {
      $(this.$el).slick('slickPrev');
    },

    pause: function() {
      $(this.$el).slick('slickPause');
    },

    play: function() {
      $(this.$el).slick('slickPlay');
    },

    goTo: function(index, dontAnimate) {
      $(this.$el).slick('slickGoTo', index, dontAnimate);
    },

    currentSlide: function() {
      return $(this.$el).slick('slickCurrentSlide');
    },

    add: function(element, index, addBefore) {
      $(this.$el).slick('slickAdd', element, index, addBefore);
    },

    remove: function(index, removeBefore) {
      $(this.$el).slick('slickRemove', index, removeBefore);
    },

    filter: function(filterData) {
      $(this.$el).slick('slickFilter', filterData);
    },

    unfilter: function() {
      $(this.$el).slick('slickUnfilter');
    },

    getOption: function(option) {
      $(this.$el).slick('slickGetOption', option);
    },

    setOption: function(option, value, refresh) {
      $(this.$el).slick('slickSetOption', option, value, refresh);
    },

    setPosition: function() {
      $(this.$el).slick('setPosition');
    },

    // Events
    onAfterChange: function(event, slick, currentSlide) {
      this.$emit('afterChange', event, slick, currentSlide);
    },

    onBeforeChange: function(event, slick, currentSlide, nextSlide) {
      this.$emit('beforeChange', event, slick, currentSlide, nextSlide);
    },

    onBreakpoint: function(event, slick, breakpoint) {
      this.$emit('breakpoint', event, slick, breakpoint);
    },

    onDestroy: function(event, slick) {
      this.$emit('destroy', event, slick);
    },

    onEdge: function(event, slick, direction) {
      this.$emit('edge', event, slick, direction);
    },

    onInit: function(event, slick) {
      this.$emit('init', event, slick);
    },

    onReInit: function(event, slick) {
      this.$emit('reInit', event, slick);
    },

    onSetPosition: function(event, slick) {
      this.$emit('setPosition', event, slick);
    },

    onSwipe: function(event, slick, direction) {
      this.$emit('swipe', event, slick, direction);
    },

    onLazyLoaded: function(event, slick, image, imageSource) {
      this.$emit('lazyLoaded', event, slick, image, imageSource);
    },

    onLazyLoadError: function(event, slick, image, imageSource) {
      this.$emit('lazyLoadError', event, slick, image, imageSource);
    },
  },

};
</script>
