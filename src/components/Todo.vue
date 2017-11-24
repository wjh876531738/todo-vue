<template>
  <div>
    <div class="banner">
      <mu-card-title :title="title" :subTitle="getCurrentDate" class="card" />
    </div>
    <div>
      <mu-list class="todo-list">
        <transition-group name="list">
          <div v-for="todo in todoListData" :key="todo.id" v-if="!todo.isCompleted">
              <mu-list-item disableRipple @click="editTodo(todo.content)" :title="todo.content" titleClass="list-item-title">
                <mu-checkbox uncheckIcon="favorite_border" checkedIcon="favorite" slot="left" v-model="todo.isCompleted" @input="completeTodo" />
              </mu-list-item>
              <mu-divider/>
          </div>
        </transition-group>
      </mu-list>
    </div>

    <div class="add-todo">
      <mu-text-field icon="add" hintText="添加待办事项" hintTextClass="hint-text" :underlineShow="true" :fullWidth="true" v-model="newTodo" @change="addTodo" />
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
      newTodo: '',
      todoListData: JSON.parse(localStorage.getItem('todoListData')) || [
        {
          id: 0,
          content: '可以点击左方按钮完成事项',
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
    completeTodo () {
      localStorage.setItem('todoListData', JSON.stringify(this.todoListData))
    },
    editTodo (todo) {
      console.log(todo)
    },
    addTodo () {
      let localTodoListData = JSON.parse(localStorage.getItem('todoListData')) || []
      localTodoListData.unshift({
        id: localTodoListData.length,
        content: this.newTodo,
        isCompleted: false
      })
      this.todoListData = localTodoListData
      localStorage.setItem('todoListData', JSON.stringify(localTodoListData))
      this.newTodo = ''
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
  .todo-list {
    min-height: calc(100vh);
    padding-top: 0;
  }
  .add-todo {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 3.2rem;
    background: #fff;
    border-top: 1px solid #bcbcbc;
  }
  .mu-text-field-hint.show.hint-text {
    word-break: break-all;
  }
  .list-enter-to, .list-leave-to {
    transition: all 1s;
  }
  .list-enter, .list-leave-to{
    opacity: 0;
    transform: translateX(60px);
  }
</style>
