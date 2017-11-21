<template>
  <div class="content">

    <div class="block" v-for="eventArr, key in eventData" :key="key">

      <div class="header">
        <h2>{{ key }}</h2>
        <mu-checkbox v-model="showBadge" uncheckIcon="visibility_off" checkedIcon="visibility"/>
      </div>

      <div class="box">
        <div v-for="event in eventArr" :key="event.id" class="card" >
          <mu-paper class="paper" :zDepth="2">
            <transition name="fade">
              <mu-badge v-show="showBadge" :content="getDayDistince" class="badge" circle primary />
            </transition>
            <h3>{{ event.date }}</h3>
            <p>{{ event.content }}</p>
          </mu-paper>
        </div>
      </div>

    </div>

    <mu-float-button icon="add" class="btn-add-event" @click="formDialogOpened = true" />

    <mu-dialog :open="formDialogOpened" @close="formDialogOpened = false" title="添加倒数日事件" scrollable>
      <mu-text-field label="倒数日内容" hintText="添加倒数日内容" :errorText="inputContentError" @focus="inputContentError = ''" @change="setValue(CONTENT, $event)" labelFloat/>
      <mu-auto-complete hintText="事件所属类别" :errorText="inputCatError" :maxHeight="180" :dataSource="getAllCat" filter="noFilter" @focus="inputCatError = ''" @change="setValue(CAT, $event)" openOnFocus />
      <mu-date-picker hintText="选择日期" :errorText="inputDateError" format="MM月DD日" @focus="inputDateError = ''" @change="setValue(DATE, $event)" />
      <mu-raised-button label="添加" @click="addEvent"></mu-raised-button>
    </mu-dialog>

  </div>
</template>

<script>
const CAT = 0
const DATE = 1
const CONTENT = 2
export default {
  name: 'Memory',
  data () {
    return {
      CAT,
      DATE,
      CONTENT,
      showBadge: false,
      formDialogOpened: false,
      newEventCat: '',
      newEventDate: '',
      newEventContent: '',
      inputCatError: '',
      inputDateError: '',
      inputContentError: '',
      eventData: {
        '学习': [
          {
            id: 0,
            date: '02月21日',
            content: '高考30天倒计时'
          },
          {
            id: 1,
            date: '06月29日',
            content: '拿身份证'
          },
          {
            id: 2,
            date: '07月26日',
            content: '工程项目管理考试'
          }
        ],
        '生日': [
          {
            id: 0,
            date: '02月21日',
            content: '小明生日'
          }
        ]
      }
    }
  },
  computed: {
    getDayDistince () {
      return '140'
    },
    getAllCat () {
      let result = []
      for (var i in this.eventData) {
        result.push(i)
      }
      return result
    }
  },
  methods: {
    setValue (field, event) {
      switch (field) {
        case this.CAT:
          this.newEventCat = event
          break
        case this.DATE:
          this.newEventDate = event
          break
        case this.CONTENT:
          this.newEventContent = event.target.value
          break
      }
    },
    addEvent () {
      if (this.newEventCat !== '' && this.newEventDate !== '' && this.newEventContent !== '') {
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
      } else {
        if (this.newEventCat === '') {
          this.inputCatError = '这是必填项.'
        }
        if (this.newEventDate === '') {
          this.inputDateError = '这是必填项.'
        }
        if (this.newEventContent === '') {
          this.inputContentError = '这是必填项.'
        }
      }
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
  .block .header {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  .block .header h2 {
    flex: 1;
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
  .fade-enter-to , .fade-leave-to {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
