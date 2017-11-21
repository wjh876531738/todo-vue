<template>
  <div class="layout">
    <div class="header">
      <mu-paper>
        <mu-bottom-nav :value="choosedNav" shift @change="onNavChange">
          <mu-bottom-nav-item value="remind" to="/remind" title="已完成" icon="notifications" />
          <mu-bottom-nav-item value="todo" to="/" title="Todo" icon="call_split" />
          <mu-bottom-nav-item value="clock" to="memory" title="倒数日" icon="event_note" />
        </mu-bottom-nav>
      </mu-paper>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      choosedNav: 'todo'
    }
  },
  methods: {
    onNavChange (val) {
      this.choosedNav = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fb{
  width: 100%;
}
</style>
