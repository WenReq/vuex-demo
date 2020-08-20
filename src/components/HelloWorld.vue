<template>
  <div>
    <add-count></add-count>
    <div>
      --------------------------------------------------
    </div>
    <sup-count></sup-count>
  </div>
</template>

<script>
import addCount from './addCount.vue'
import supCount from './supCount.vue'
export default {

  components: {addCount, supCount},
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
