'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var $ = _interopDefault(require('jquery'));

//

// Check if the request came from the browser and is not server rendered
if (typeof window !== 'undefined') {
  Promise.resolve(require('slick-carousel'));
}

var script = {
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
    var this$1 = this;

    var manualDestroy = function () {
      $(this$1.$el).slick('unslick');
      console.log('unslicked');
      this$1.$el.removeEventListener(manualDestroy);
    };
    this.$el.addEventListener('transitionend', manualDestroy);
  },

  methods: {
    create: function() {
      var $slick = $(this.$el);

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
      var $slick = $(this.$el);

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

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._t("default")], 2)
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "E:\\CODE\\vue-slick\\src\\slickCarousel.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var slickCarousel = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

module.exports = slickCarousel;
