<template>
  <div>
      <!-- <div>
          当前的count为：{{$store.state.count}}
      </div> -->
      <div>
          当前的count为：{{count}}
      </div>
      <div>
          <button @click="sup1">-1</button>
          <button @click="supNum">-N</button>
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    name:'sup',
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['count'])
    },
    methods:{
        ...mapMutations(['sup','supN']),
        sup1(){
            // this.$store.commit('sup');
            this.sup()
        },
        supNum(){
            // this.$store.commit('supN',2)
            this.supN(2)
        },
    }
}
</script>

<style>

</style>