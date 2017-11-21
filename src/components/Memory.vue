<template>
  <div class="content">

    <div class="block" v-for="eventArr, key in eventData" :key="key">

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

    <mu-float-button icon="add" class="btn-add-event" @click="formDialogOpened = true" />

    <mu-dialog :open="formDialogOpened" @close="formDialogOpened = false" title="添加倒数日事件" scrollable>
      <mu-text-field label="倒数日内容" hintText="添加倒数日内容" v-model="newEventContent" labelFloat/>
      <mu-text-field hintText="事件所属类别" v-model="newEventCat" />
      <mu-date-picker v-model="newEventDate" format="MM月DD日" hintText="选择日期"/>
      <mu-raised-button label="添加" @click="addEvent"></mu-raised-button>
    </mu-dialog>

  </div>
</template>

<script>
export default {
  name: 'Memory',
  data () {
    return {
      showBadge: false,
      formDialogOpened: false,
      newEventCat: '',
      newEventDate: '',
      newEventContent: '',
      eventData: {
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
            id: 3,
            date: '07月26日',
            content: '工程项目管理考试'
          },
          {
            id: 4,
            date: '08月02日',
            content: '新公司的面试'
          },
          {
            id: 5,
            date: '08月21日',
            content: 'bat校招'
          },
          {
            id: 6,
            date: '09月21日',
            content: '去长隆旅游'
          }
        ],
        'birthday': [
          {
            id: 0,
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
    },
    getTodayDate () {
      return '2017-11-20'
    }
  },
  methods: {
    addEvent () {
      if (this.newEventCat in this.eventData) {
        this.eventData[this.newEventCat].push({
          id: this.eventData[this.newEventCat].length,
          date: this.newEventDate,
          content: this.newEventContent
        })
      } else {
        this.eventData[this.newEventCat] = [{
          id: 0,
          date: this.newEventDate,
          content: this.newEventContent
        }]
      }
      this.newEventCat = ''
      this.newEventDate = ''
      this.newEventContent = ''
      this.formDialogOpened = false
    }
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
    flex: 1 0 auto;
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
  .btn-add-event {
    position: fixed;
    right: 5%;
    bottom: 10%;
  }
</style>
