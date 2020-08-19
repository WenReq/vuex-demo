<template>
  <div>
      <!-- 1-1访问store中的第一种方式 -->
      <!-- <div>
          当前的count为：{{$store.state.count}}
      </div> -->
      <div>
          当前的count为：{{count}}
      </div>
      <div>
          <button @click="addCount">+1</button>
          <button @click="addNumCount">+N</button>
          <button @click="addAsyncCount">延迟+</button>
      </div>
  </div>
</template>

<script>
// 2-1、从vuex中按需导入mapState函数
import {mapState,mapMutations} from 'vuex'
export default {
    name:'add',
    // 2-2、将全局数据，映射为当前组件的计算属性。
    computed: {
        ...mapState(['count'])
    },
    data() {
        return {
        }
    },
    methods:{
        ...mapMutations(['add','addN']),
        addCount(){
            // 触发mutations的第一种方式
            // this.$store.commit('add');
            // 出发mutations的第二种方式
            this.add()
        },
        addNumCount(){
            // 触发mutations的第一种方式
            // this.$store.commit('addN',3);
            // 触发mutations的第二种方式
            this.addN(3)
        },
        addAsyncCount(){
            this.$store.dispatch('addAsync');
        },
    }
}
</script>

<style>

</style>