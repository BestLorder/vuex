import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
    count:1
};
const mutations={
    add(state,n){
        state.count+=n;
    }
};
const getters={
  count:function(state){
      return state.count+=100;
  }
};
const actions={
    addAction(context){
        context.commit('add',20);
        setTimeout(()=>{
            context.commit('add',3)
        },3000)
    }
};
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})