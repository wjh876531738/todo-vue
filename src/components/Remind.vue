<template>
  <div class="finish-list">
    <h2>已完成</h2>
    <mu-timeline class="timeline">
      <mu-timeline-item v-for="finished in finishData" :key="finished.id" >
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
      finishData: [
        {
          id: 0,
          date: '09月21日 15:30',
          content: '高考30天倒计时'
        },
        {
          id: 1,
          date: '12月21日 11:30',
          content: '拿身份证'
        },
        {
          id: 2,
          date: '09月21日 21:30',
          content: '工程项目管理考试'
        },
        {
          id: 3,
          date: '09月25日 01:30',
          content: '小明生日'
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
