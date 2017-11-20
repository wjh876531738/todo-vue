<template>
  <div>
    <div class="banner">
      <mu-card-title :title="title" :subTitle="getCurrentDate" class="card" />
    </div>
    <div class="todo-list">
      <mu-list>
        <transition-group name="list">
          <div v-for="todo in todoListData" :key="todo.id" v-if="!todo.isCompleted">
              <mu-list-item disableRipple @click="test(todo.content)" :title="todo.content">
                <mu-checkbox v-model="todo.isCompleted" slot="left" @click="complete(todo)" />
              </mu-list-item>
              <mu-divider/>
          </div>
        </transition-group>
      </mu-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      choosedNav: 'todo',
      title: '我的一天',
      todoListData: [
        {
          id: 0,
          content: '回家',
          isCompleted: false
        },
        {
          id: 1,
          content: '学习Vim',
          isCompleted: false
        },
        {
          id: 2,
          content: 'Java',
          isCompleted: false
        },
        {
          id: 3,
          content: 'Java',
          isCompleted: false
        },
        {
          id: 4,
          content: 'Java',
          isCompleted: false
        },
        {
          id: 5,
          content: 'Java',
          isCompleted: false
        },
        {
          id: 6,
          content: 'Java',
          isCompleted: false
        }
      ]
    }
  },
  computed: {
    getCurrentDate () {
      let date = new Date()
      switch (date.getDay()) {
        case 0:
          return (date.getMonth() + 1) + '月' + date.getDate() + '日 星期日'
        case 1:
          return (date.getMonth() + 1) + '月' + date.getDate() + '日 星期一'
        case 2:
          return (date.getMonth() + 1) + '月' + date.getDate() + '日 星期二'
        case 3:
          return (date.getMonth() + 1) + '月' + date.getDate() + '日 星期三'
        case 4:
          return (date.getMonth() + 1) + '月' + date.getDate() + '日 星期四'
        case 5:
          return (date.getMonth() + 1) + '月' + date.getDate() + '日 星期五'
        case 6:
          return (date.getMonth() + 1) + '月' + date.getDate() + '日 星期六'
      }
    }
  },
  methods: {
    complete (todo) {
      todo.isCompleted = true
    },
    test (todo) {
      console.log(todo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    background: #2196f3;
    padding: 3rem 1.6rem 1.2rem;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to{
    opacity: 0;
    transform: translateX(60px);
  }
</style>
