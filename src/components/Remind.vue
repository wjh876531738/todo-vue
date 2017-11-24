<template>
  <div class="finish-list">
    <h2>已完成</h2>
    <mu-timeline class="timeline">
      <mu-timeline-item v-for="finished in todoListData" :key="finished.id" v-if="finished.isCompleted">
        <span slot="time">{{ finished.date }}</span>
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
      todoListData: JSON.parse(localStorage.getItem('todoListData')) || [
        {
          id: 0,
          date: newDate().getMonth()+1 + '月' + new Date().getDate + '日 ' + new Date().getHours() + ':' + new Date().getMinutes(),
          content: '还没有完成的事情哦。'
        }
      ]
    }
  },
  methods: {
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
