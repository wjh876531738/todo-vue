<template>
  <div class="content">

    <div class="block" v-for="eventArr, key in dateData" :key="key">

      <mu-card-title :title="key" />

      <mu-flexbox justify="flex-start" wrap="wrap" >
        <mu-flexbox-item v-for="event in eventArr" :key="event.id" class="flex-item">
          <mu-paper :class="getPaperSize(eventArr.length)" :zDepth="2">
            <mu-badge v-if="showBadge" :content="getDayDistince" class="badge" circle primary />
            <h3>{{ event.date }}</h3>
            <span>{{ event.content }}</span>
          </mu-paper>
        </mu-flexbox-item>
      </mu-flexbox>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Memory',
  data () {
    return {
      showBadge: false,
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
            id: 3,
            date: '02月21日',
            content: 'Vim'
          }
        ],
        'birthday': [
          {
            id: 4,
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
        return 'paper-big'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .badge {
    position: absolute;
    top: -.6rem;
    right: -.6rem;
  }
  .flex-item {
    text-align: center;
  }
  .paper {
    position: relative;
    display: inline-block;
    height: 5.4rem;
    width: 5.4rem;
    margin: 1rem 0;
    text-align: center;
  }
  .paper-big {
    position: relative;
    display: inline-block;
    height: 7.4rem;
    width: 7.4rem;
    margin: 1rem 0;
    text-align: center;
  }
  .paper-big span {
    margin: 0 .3rem;
  }
  .paper h3 {
    margin: .8rem 0 0;
  }
  .paper span {
    margin: 0 .2rem;
  }
</style>
