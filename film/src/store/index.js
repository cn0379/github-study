import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import cinema from './modules/cinema'



Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        cinema
    }
})