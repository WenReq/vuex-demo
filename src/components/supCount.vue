<template>
  <div>
      <!-- <div>
          当前的count为：{{count}}
      </div> -->
      <h3>{{showNum}}</h3>
      <div>
          <button @click="sup1">-1</button>
          <button @click="supNum">-N</button>
          <button @click="supAsync()">延迟-1</button>
          <button @click="supNAsync(5)">延迟-N</button>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  name: 'sup',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sup', 'supN']),
    ...mapActions(['supAsync', 'supNAsync']),
    sup1 () {
      this.sup()
    },
    supNum () {
      this.supN(2)
    }
  }
}
</script>

<style>

</style>
