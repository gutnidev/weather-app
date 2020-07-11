<template>
  <div>
  <div class="wrap" v-if="degree">
      <div class="location">
        <div class="img-wrap">
          <img :src="computedImg" alt="lala" class="icon">
        </div>
        <h1 class="location__timezone">{{ city }}</h1>
      </div>
      <div class="temperature">
        <div class="temperature__degree__section">
          <h2 class="temperature__degree">{{ degree }}</h2>
          <span class="celsium">&#8451;</span>
        </div>
        <div class="temperature__description">{{ weatherDescription }}</div>
      </div>
  </div>
      <ContentFakeContent v-if="!degree"></ContentFakeContent>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ContentFakeContent from './ContentFakeContent.vue';

export default {
  name: 'AppContent',
  components: {
    ContentFakeContent,
  },
  methods: {},
  computed: {
    ...mapGetters('weather', ['image', 'degree', 'description', 'city']),
    computedImg() {
      // eslint-disable-next-line global-require
      return this.weatherImage ? this.weatherImage : require('../assets/test-icon.png');
    },
    weatherDescription() {
      let desc = this.description;
      desc = desc.split('');
      desc[0] = desc[0].toUpperCase();
      desc = desc.join('');
      return desc;
    },
  },
};
</script>

<style scoped>
  .wrap{
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgb(47, 150, 163), rgb(46, 62, 143));
    color: white;
  }
  .location{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -7rem;
    margin-bottom: 5rem;
  }
  .img-wrap{
    height: 10rem;
    width: 10rem;
  }
  .icon{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .location__timezone{
    font-size: 1.8rem;
  }
  .temperature{
    height: 30vh;
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .temperature__degree__section{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .temperature__degree__section span{
    font-size: 30px;
  }
  .temperature__degree__section h2{
    font-size: 48px;
    padding: 3rem 0;
  }
  @media all and (max-height: 567px) {
    .location{
      margin: 0;
      flex-direction: row;
      justify-content: center;
    }
    .temperature{
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
  .celsium{
    transform: translateY(20%);
  }
</style>
