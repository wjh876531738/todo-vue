<template>
  <div class="finish-list">
    <h2>已完成</h2>
    <mu-timeline class="timeline">
      <mu-timeline-item v-for="finished in todoListData" :key="finished.id" v-if="finished.isCompleted">
        <span slot="time">{{ getDate(finished.finishedAt) }}</span>
        <span slot="des">{{ finished.content }}</span>
      </mu-timeline-item>
    </mu-timeline>
  </div>
</template>

<script>
export default {
  name: 'Remind',
  data () {
    return {
      todoListData: JSON.parse(localStorage.getItem('todoListData')) || []
    }
  },
  methods: {
    getDate (timestamp) {
      let date = new Date(timestamp)
      return date.getMonth() + '月' + date.getDate() + '日 ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    }
  }
}
</script>

<style scoped>
  .finish-list {
    width: 80%;
    margin: 2rem auto 0;
  }
  .finish-list .timeline {
    padding: 0 1rem;
  }
</style>
