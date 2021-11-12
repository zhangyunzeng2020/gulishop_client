import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/user";
import home from "@/store/home";

Vue.use(Vuex)

const actions={

}
const state = {

}

const mutations = {

}
const getters = {

}


export default new Vuex.Store({
   actions,
    state,
    mutations,
    getters,
    modules:{
       user,
        home,
    }
})