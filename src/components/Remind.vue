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
      todoListData: []
    }
  },
  methods: {
    getDate (timestamp) {
      let date = new Date(timestamp)
      return (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    }
  },
  mounted () {
    this.todoListData = JSON.parse(localStorage.getItem('todoListData'))

    this.todoListData = this.todoListData.sort((x, y) => {
      if (x.createdAt < y.createdAt) {
        return 1
      }
      if (x.createdAt > y.createdAt) {
        return -1
      }
      return 0
    })
    this.todoListData.map((todoItem) => {
      console.log(todoItem.createdAt)
    })
  }
}
</script>

<style scoped>
  .finish-list {
    width: 80%;
    margin: 5rem auto 0;
  }
  .finish-list .timeline {
    padding: 0 1rem;
  }
</style>
