import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import weather from './weather';
import Local from '../plugins/localStorage';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    InitError: {
      errorStatus: false,
      errorMessage: 'Не удалось получить информацию о местоположении.',
    },
    dialogError: {
      dialogStatus: false,
      dialogMessage: 'Нужны точные данные? Включи местоположение!',
    },
  },
  mutations: {
    ACTIVATE_INIT_ERROR(state) {
      state.InitError.errorStatus = true;
    },
    ACTIVATE_DIALOG_ERROR(state) {
      state.dialogError.errorStatus = true;
    },
    SET_DIALOG_STATUS(state, status) {
      state.dialogError.dialogStatus = status;
    },
  },
  actions: {
    activateInitError({ commit }) {
      commit('ACTIVATE_INIT_ERROR');
    },
    activateDialogError({ commit }) {
      commit('ACTIVATE_DIALOG_ERROR');
    },
    setDialogStatus({ commit }, status) {
      if (status) {
        window.setTimeout(() => {
          commit('SET_DIALOG_STATUS', false);
        }, 5000);
      }
      commit('SET_DIALOG_STATUS', status);
    },
  },
  getters: {
    isError(state) {
      return state.InitError;
    },
    isDialog(state) {
      return state.dialogError;
    },
  },
  modules: {
    user,
    weather,
  },
});

function formWeatherParams(locationInfo, language = null) {
  if (!locationInfo) return false;
  let params = null;

  params = locationInfo.lat && locationInfo.lon
    ? { lat: locationInfo.lat, lon: locationInfo.lon }
    : null;

  if (!params) params = locationInfo.city ? { q: locationInfo.city } : null;
  if (params && language) {
    params.lang = language;
  }

  return params;
}

async function getNavigatorInfo() {
  if (!window.navigator.geolocation) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('NO_NAVIGATOR');
  }
  let position = false;
  position = await new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      (location) => {
        resolve({
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        });
      },
      (error) => {
        reject(error);
        return false;
      },
    );
  }, {
    timeout: 1000,
  });
  return position;
}

async function appInit() {
  let language = Local.getLocalLang();
  if (!language) {
    // ? Ищу язык браузера
    language = window.navigator ? (window.navigator.language
      || window.navigator.systemLanguage
      || window.navigator.userLanguage) : 'ru';
    language = language.substr(0, 2).toLowerCase();
  }

  // ? USER INIT
  let userLocationInfo = false;

  try {
    userLocationInfo = await getNavigatorInfo();
  } catch (error) {
    console.log(error);
    if (error !== 'NO_NAVIGATOR' && error.code !== 1) {
      Store.dispatch('setDialogStatus', true);
    }
  }

  if (!userLocationInfo) {
    userLocationInfo = await Store.dispatch('fetchUserLocationInfo');
    if (!userLocationInfo) {
      console.log(new Error('ВСё пропало,Шеф. Гипс снимают, клиент уезжает, погоды не будет!'));
      Store.dispatch('activateInitError');
      return false;
    }
  }

  // ? create params for weather fetch
  const params = formWeatherParams(userLocationInfo, language);
  if (!params) {
    Store.dispatch('activateInitError');
    return false;
  }

  // ? WEATHER INIT
  const isWeather = await Store.dispatch('weatherInit', params);
  if (!isWeather) {
    Store.dispatch('activateInitError');
  }
  navigator.vibrate(200);
  return true;
}

appInit();

export default Store;
