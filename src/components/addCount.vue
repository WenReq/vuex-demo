<template>
  <div>
      <!-- <div>
          当前的count为：{{$store.state.count}}
      </div> -->
      <h3>{{$store.getters.showNum}}</h3>
      <div>
          <button @click="addCount">+1</button>
          <button @click="addNumCount">+N</button>
          <button @click="addAsyncCount">延迟+</button>
          <button @click="addAsyncNumCount">延迟+N</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
    }
  },
  methods: {
    addCount () {
      this.$store.commit('add')
    },
    addNumCount () {
      // commit的作用，就是调用某个mutations函数
      this.$store.commit('addN', 3)
    },
    addAsyncCount () {
      this.$store.dispatch('addAsync')
    },
    addAsyncNumCount () {
      this.$store.dispatch('addAsyncNum', 1)
    }
  }
}
</script>

<style>

</style>
