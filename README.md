# Slick for Vue.js

## Vue support

Supports only Vue >= 2

## Installation and usage

See official documentation [here](http://kenwheeler.github.io/slick).

    $ npm install vue-slick

***NOTE***: `slick-carousel` official package appears to use `jquery` as a dependency in package.json,
despite it would be more appropriate to use it as a peer dependency to avoid possibility of using multiple
versions of jquery. Be aware of that. When using `webpack` you can solve this problem with aliases.

```javascript
import Slick from 'vue-slick';

new Vue({

    components: { Slick },

    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation
            },
        };
    },

    // All slick methods can be used too, example here
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    },
});
```

```html
<slick ref="slick" :options="slickOptions">
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
</slick>
```

If you need, you can import slick styles too:

```javascript
import `node_modules/slick-carousel/slick/slick.css`;
```
