<template>
  <header class="header">
    <nav class="nav">
      <div class="lang-wrap">
        <select
          name="langSelect"
          class="langSelect"
          v-model="weatherLang"
        >
          <option
            v-for="(lang, name) in langSelect"
            :value="name"
            :key="name"
          >
            {{ lang }}
          </option>
        </select>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  data: () => ({
    langSelect: {
      ru: 'Русский',
      ua: 'Українська',
      en: 'English',
    },
  }),
  methods: {
    ...mapActions('weather', ['setWeatherLang']),
  },
  computed: {
    ...mapGetters('weather', ['lang']),
    weatherLang: {
      get() {
        return this.lang;
      },
      set(value) {
        this.setWeatherLang(value);
      },
    },
  },
};
</script>

<style scoped>
  .header{
    width: 100%;
    height: 3rem;
    background: linear-gradient(rgb(47, 150, 163), rgb(46, 62, 143));
    position: fixed;
  }
  .nav{
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .langSelect{
    display: inline-block;
    padding: 0.2rem;
    border-radius: 10px;
  }
  .lang-wrap{
    display: inline-block;
    margin-left: auto;
  }
</style>
