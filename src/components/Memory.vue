<template>
  <div class="content">

    <div class="block" v-for="eventArr, key in dateData" :key="key">

      <mu-card-title :title="key" />

      <div class="box">
        <div v-for="event, index in eventArr" :key="event.id" class="card" >
          <mu-paper :class="getPaperSize(eventArr.length)" :zDepth="2">
            <mu-badge v-if="showBadge" :content="getDayDistince" class="badge" circle primary />
            <h3>{{ event.date }}</h3>
            <span>{{ event.content }}</span>
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
            content: 'Vim'
          },
          {
            id: 1,
            date: '02月21日',
            content: 'Vim'
          },
          {
            id: 2,
            date: '02月21日',
            content: 'Vim'
          },
          {
            id: 4,
            date: '02月21日',
            content: 'Vim'
          }
        ],
        'birthday': [
          {
            id: 5,
            date: '02月21日',
            content: 'Vim'
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
    getPaperSize (length) {
      if (length >= 3) {
        return 'paper'
      } else {
        return 'paper paper-big'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    display: flex;
    flex-flow: row wrap;
    justify-content: center; 
  }
  .card {
    margin: .6rem;
  }
  .card-special {
    margin: .6rem;
    flex-grow: 1;
  }
  .paper {
    position: relative;
    height: 5.4rem;
    width: 5.4rem;
    text-align: center;
  }
  .paper-big {
    height: 7.4rem;
    width: 7.4rem;
  }
  .badge {
    position: absolute;
    top: -.6rem;
    right: -.6rem;
  }
  .paper h3 {
    padding-top: .8rem;
  }
  .paper span {
    margin: 0 .2rem;
  }
</style>
