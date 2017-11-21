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
          date: '02月21日',
          content: '宝宝生日'
        },
        {
          id: 1,
          date: '06月29日',
          content: '高考30天倒计时'
        },
        {
          id: 2,
          date: '07月23日',
          content: '拿身份证'
        },
        {
          id: 2,
          date: '07月26日',
          content: '工程项目管理考试'
        },
        {
          id: 2,
          date: '08月02日',
          content: '新公司的面试'
        },
        {
          id: 2,
          date: '08月21日',
          content: 'bat校招'
        },
        {
          id: 4,
          date: '09月21日',
          content: '去长隆旅游'
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
