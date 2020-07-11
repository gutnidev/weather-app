import weatherInstance from '../plugins/axios/weather';
import Local from '../plugins/localStorage';

export default {
  namespaced: true,
  state: {
    weather_info: {},
    weather_image: {},
    weather_language: Local.getLocalLang(),
    weather_params: null,
  },
  mutations: {
    SET_WEATHER_INFO(state, info) {
      state.weather_info = info;
    },
    SET_WEATHER_LANGUAGE(state, language) {
      state.weather_language = language;
      if (state.weather_params) {
        state.weather_params.lang = language;
      }
      Local.setLocalLang(language);
    },
    SET_WEATHER_PARAMS(state, params) {
      state.weather_params = params;
    },
  },
  getters: {
    image(state) {
      if (state.weather_info.weather) {
        return `http://openweathermap.org/img/wn/${state.weather_info.weather[0].icon}.png`;
      }
      return false;
    },
    degree(state) {
      if (state.weather_info.main) {
        return `${state.weather_info.main.temp}`;
      }
      return false;
    },
    description(state) {
      if (state.weather_info.weather) {
        if (state.weather_info.weather[0]) {
          return state.weather_info.weather[0].description;
        }
      }
      return 'Смотрим в окно...';
    },
    city(state) {
      if (state.weather_info.name) {
        return state.weather_info.name;
      }
      return 'Ищем тебя...';
    },
    // eslint-disable-next-line camelcase
    lang({ weather_language }) {
      // eslint-disable-next-line camelcase
      return weather_language;
    },
  },
  actions: {
    setWeatherLang({ commit, dispatch }, language) {
      commit('SET_WEATHER_LANGUAGE', language);
      dispatch('fetchWeather');
    },
    async fetchWeather({ commit, state }) {
      const params = state.weather_params;
      try {
        const response = await weatherInstance.get('', {
          params,
        });
        commit('SET_WEATHER_INFO', response.data);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    weatherInit: {
      root: true,
      async handler({ dispatch, commit }, params) {
        if (!params.lang) {
          commit('SET_WEATHER_LANGUAGE', 'en');
        }
        commit('SET_WEATHER_LANGUAGE', params.lang);
        commit('SET_WEATHER_PARAMS', params);
        return dispatch('fetchWeather');
      },
    },
  },
};
