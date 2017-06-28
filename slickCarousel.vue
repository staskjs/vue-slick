<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import $ from 'jquery'

  if (process.BROWSER_BUILD || process.BROWSER_BUILD === null) {
    const slick = require('slick-carousel') //eslint-disable-line
  }

  const slickEvents = [
    'afterChange',
    'beforeChange',
    'breakpoint',
    'destroy',
    'edge',
    'init',
    'reInit',
    'setPosition',
    'swipe',
    'lazyLoaded',
    'lazyLoadError'
  ]
  const slickMethods = [
    'slickCurrentSlide',
    'slickGoTo',
    'slickNext',
    'slickPrev',
    'slickPause',
    'slickPlay',
    'slickAdd',
    'slickRemove',
    'slickFilter',
    'slickUnfilter',
    'slickGetOption',
    'slickSetOption',
    'unslick',
    'getSlick'
  ]

  function makeMethods () {
    return slickMethods.reduce(function (acc, method) {
      acc[ method ] = function () {
        const $slick = $(this.$el)
        const args = [ method, ...arguments ]
        return $slick.slick.apply($slick, args)
      }
      return acc
    }, {})
  }

  function registerEvents (ctx) {
    slickEvents.forEach(event => {
      $(ctx.$el).on(event, function () {
        const args = [ event, ...arguments ]
        const currentSlide = ctx.slickCurrentSlide()
        ctx.$emit.apply(ctx, args)
        ctx.$emit('input', currentSlide)
      })
    })
  }

  export default {
    props: {
      options: {
        type: Object,
        default: () => ({})
      },
      value: {
        type: Number
      }
    },
    mounted () {
      this.create()
    },
    beforeDestroy () {
      this.destroy()
    },
    methods: {
      create () {
        $(this.$el).slick(this.options)
        registerEvents(this)
      },
      destroy () {
        $(this.$el).slick('unslick')
      },
      reSlick () {
        this.destroy()
        this.create()
      },
      ...makeMethods()
    }
  }
</script>