<template>
  <div class="popup" :class="{'opened': isError.errorStatus}">
    <div class="popup-body">
      <h2 class="title">Произошла ошибка</h2>
      <div class="content">
        {{ isError.errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ErrorConponent',
  // eslint-disable-next-line func-names
  data() {
    return {
      opened: this.isError,
    };
  },
  computed: {
    ...mapGetters(['isError']),
  },
};
</script>
<style lang="scss" scoped>
  .popup{
    position: fixed;
    background: linear-gradient(rgb(47, 150, 163), rgb(46, 62, 143));
    background-color: red;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    clip-path: circle(0px at 50% 50%);
    transition: all 1s;
  }
  .popup-body{
    background-color: white;
    min-width: 50%;
  }
  .title{
    text-align: center;
    border-bottom: 1px solid darkgray;
    font-size: 2rem;
    padding: 0.2rem;
  }
  .content{
    padding: 1rem;
  }
  .opened{
    clip-path: circle(150vh at 50% 50%);
  }
</style>
