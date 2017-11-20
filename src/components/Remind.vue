<template>
  <div style="margin: 4rem 0; text-align: center;">
    <mu-circular-progress :size="60" />
      <p>还没有做好啦</p>
  </div>
</template>

<script>
export default {
  name: 'Remind',
  data () {
    return {
    }
  },
  methods: {
    onNavChange (val) {
      console.log(val)
      this.choosedNav = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
