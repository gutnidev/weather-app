import INFOInstance from '../plugins/axios/user';

export default {
  namespaced: true,
  state: {
    user_INFO: null,
  },
  getters: {
    userLocationInfo(state) {
      return state.user_INFO;
    },
  },
  mutations: {
    SET_INFO(state, INFO) {
      state.user_INFO = INFO;
    },
  },
  actions: {
    fetchUserLocationInfo: {
      root: true,
      async handler({ commit }) {
        /*
     answer like:
     {
       "ip": "188.163.99.8",
       "country_code": "UA",
       "country_name": "Ukraine",
       "region_code": "23",
       "region_name": "Zaporizhia",
       "city": "Zaporizhia",
       "zip_code": "70459",
       "time_zone": "Europe/Zaporozhye",
       "latitude": 47.8555,
       "longitude": 35.2916,
       "metro_code": 0
     }
     */
        try {
          const response = await INFOInstance.get();
          commit('SET_INFO', response.data);
          console.log(response.data);
          return response.data;
        } catch (error) {
          return false;
        }
      },
    },
  },
};
