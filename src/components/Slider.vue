<template>
  <splide>
    <splide-slide>
      <img width="1000" height="400" src="http://placehold.it/1000x400/5f5/000?text=Image+1" />
    </splide-slide>
    <splide-slide>
      <img width="1000" height="400" src="http://placehold.it/1000x400/f55/000?text=Image+2" />
    </splide-slide>
    <splide-slide>
      <img width="1000" height="400" src="http://placehold.it/1000x400/55f/000?text=Image+3" />
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        perPage: 1,
        gap: '1rem',
      },
    };
  },
};
</script>

<style>

</style>
