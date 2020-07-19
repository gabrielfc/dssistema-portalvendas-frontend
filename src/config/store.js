import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        basicAuth: null,
        plano: {}
    },
    mutations: {
        setBasicAuth(state, basicAuth) {
            state.basicAuth = basicAuth
            if (basicAuth) {
                axios.defaults.headers.common['Authorization'] = `Basic ${basicAuth}`

            } else {
                delete axios.defaults.headers.common['Authorization']

            }
        },
        setPlano(state, plano) {
            state.plano = plano;
        }
    }
})