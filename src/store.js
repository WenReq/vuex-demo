import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // state提供数据源，所有的共享数据都要放到store的state中进行存储。
    state:{
        count:0
    },
    /**mutations用于变更store中的数据。
     * 1）只能通过mutations变更store中的数据，不可以直接操作store中的数据。
     * 2）通过这个方式操作操作起来稍微有点繁琐，但是可以集中监控所有数据的变化。
     * */ 
    mutations:{
        add(state){
            // 变更状态
            state.count ++;
        },
        sup(state){
            state.count --;
        },
        addN(state,step){
            state.count += step;
        },
        supN(state,step){
            state.count -= step;
        }
    },
    /**
     * Action用于处理异步任务
     * 如果通过异步操作数据必须使用Action,不能使用mutations，但是在Action中还是通过出发Mutation的方式间接变更数据。
    */
    actions:{
        addAsync(content){
            setTimeout(()=>{
                content.commit('add')
            },1000)
        }
    },

})

export default store