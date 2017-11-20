<template>
  <div class="content">

    <div class="block" v-for="eventArr, key in dateData" :key="key">

      <mu-card-title :title="key" />

      <div class="box">
        <div v-for="event in eventArr" :key="event.id" class="card" >
          <mu-paper class="paper" :zDepth="2">
            <mu-badge v-if="showBadge" :content="getDayDistince" class="badge" circle primary />
            <h3>{{ event.date }}</h3>
            <p>{{ event.content }}</p>
          </mu-paper>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Memory',
  data () {
    return {
      showBadge: true,
      dateData: {
        'study': [
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
        ],
        'birthday': [
          {
            id: 5,
            date: '02月21日',
            content: '我生日'
          }
        ]
      }
    }
  },
  computed: {
    getDayDistince () {
      return '140'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .block {
    width: 90%;
    margin: 0 auto;
  }
  .box {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start; 
  }
  .box .card {
    flex-grow: 1;
    height: 7rem;
    margin: .8rem;
  }
  .box .card .paper {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .box .card .paper .badge {
    position: absolute;
    top: -.6rem;
    right: -.6rem;
  }
  .box .card .paper h3 {
    margin: 0;
    padding: 1rem;
  }
  .box .card .paper p {
    margin: 0;
    padding: 0 .8rem .8rem;
  }
</style>
