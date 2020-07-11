<template>
  <div class="wrap">
    <div class="location">
      <div class="img-wrap">
        <img src="../assets/loader.gif" alt="lala" class="icon">
      </div>
      <div class="timezone-wrap">
        <h1 class="location__timezone">Ищу тебя на карте</h1>
        <span class="dots">.</span>
      </div>
    </div>
    <div class="temperature">
      <div class="temperature__degree__section">
        <h2 class="temperature__degree">Замеряю температуру</h2>
        <span class="dots">.</span>
      </div>
      <div class="temperature__description">
        <p class="temperature__description-article">Смотрю в окно</p>
        <span class="dots">.</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentFakeContent',
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
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .temperature__degree__section, .timezone-wrap, .temperature__description{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .temperature__degree {
    font-size: 2.3rem;
    padding: 3rem 0;
  }
  .temperature__description-article{
    font-size: 1.5rem;
  }

  .dots{
    position: relative;
    font-size: 2.3rem;
    visibility: visible;
    animation-name: dots-anim;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
  .dots::before{
    content: '.';
    display: inline-block;
    font-size: 2.3rem;
    position: absolute;
    bottom: 0;
    right: 0;
    visibility: visible;
    animation-name: before-anim;
  }
  .dots::after{
    content: '.';
    display: inline-block;
    font-size: 2.3rem;
    position: absolute;
    bottom: 0;
    right: 0;
    visibility: visible;
    animation-name: after-anim;
  }
  .dots::before, .dots::after{
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  @keyframes before-anim {
    0%{
      transform: translateX(0);
    }
    20%{
      transform: translateX(100%);
    }
    40%{
      transform: translateX(100%);
    }
    60%{
      transform: translateX(100%);
    }
    80%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(0);
    }
  }
  @keyframes after-anim {
    0%{
      transform: translateX(0);
    }
    20%{
      transform: translateX(100%);
    }
    40%{
      transform: translateX(200%);
    }
    60%{
      transform: translateX(100%);
    }
    80%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(0);
    }
  }
  @media all and (max-width: 400px) {
    .temperature__degree{
      font-size: 1.8rem;
    }
  }
  @media all and (max-width: 320px) {
    .temperature__degree{
      font-size: 1.6rem;
    }
  }
  @media all and (max-width: 320px) {
    .temperature__degree{
      font-size: 1.6rem;
    }
  }
  @media all and (max-height: 567px) {
    .location{
      margin-top: -3rem;
      margin-bottom: 3rem;
    }
    .img-wrap{
      max-width: 100px;
      max-height: 100px;
      margin: 2rem 0;
    }
    .icon{}
  }
  @media all and (max-height: 430px) {
    .location{
      margin-bottom: 0;
    }
    .temperature__degree{
      font-size: 1.6rem;
    }
  }
  @media all and (max-height: 430px) {
    .location__timezone{
      font-size: 1.4rem;
    }
    .temperature__degree{
      font-size: 1.4rem;
    }
    .temperature__description-article{
      font-size: 1.4rem;
    }
    .timezone-wrap{
      margin-top: -1rem;
    }
  }
</style>
