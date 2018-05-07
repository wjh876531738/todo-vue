<template>
  <div>
    <div class="banner">
      <mu-card-title :title="title" :subTitle="getCurrentDate" class="card" />
    </div>
    <div class="list-wrapper">
      <mu-list class="todo-list">
        <transition-group name="list">
          <div v-for="todo in todoListData" :key="todo.id" v-if="!todo.isCompleted">
              <mu-list-item disableRipple @click="editTodo(todo.content)" :title="todo.content" titleClass="list-item-title">
                <mu-checkbox uncheckIcon="favorite_border" checkedIcon="favorite" slot="left" v-model="todo.isCompleted" @input="completeTodo(todo)" />
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
      todoListData: JSON.parse(localStorage.getItem('todoListData')) || []
    }
  },
  computed: {
    getCurrentDate () {
      let date = new Date()

      let weekList = ['日', '一', '二', '三', '四', '五', '六']

      return (date.getMonth() + 1) + '月' + date.getDate() + '日 星期' + weekList[date.getDay()]
    }
  },
  methods: {
    completeTodo (todo) {
      todo.finishedAt = new Date().getTime()
      localStorage.setItem('todoListData', JSON.stringify(this.todoListData))
    },
    editTodo (todo) {
    },
    addTodo () {
      this.todoListData.unshift({
        id: this.todoListData.length,
        content: this.newTodo,
        isCompleted: false,
        createdAt: new Date().getTime()
      })
      localStorage.setItem('todoListData', JSON.stringify(this.todoListData))
      this.newTodo = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner {
    position: fixed;
    left: 0;
    right: 0;
    top: 55px;
    z-index: 999;
  }
  .card {
    background: #2196f3;
    padding: 3rem 1.6rem 1.2rem;
  }
  .list-wrapper {
    margin-top: 180px;
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
    height: 50px;
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
