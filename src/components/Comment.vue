<template>
  <div class="comment">
    <div class="comment-title">
      <div @click="openGitHub()">
        <!--<img src="https://avatars3.githubusercontent.com/u/33147078?v=4">-->
        <img :src="comment.user.avatar_url">
        <!--<span>GJxing</span>-->
        <span>{{comment.user.login}}</span>
      </div>
      <span class="time">{{$moment(comment.created_at).format('YYYY-MM-DD HH:mm')}}</span>
    </div>
    <article class="comment-body markdown-body" v-html="renderedMarkdown"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        renderedMarkdown: ''
      }
    },
    props: ['comment'],
    methods: {
      renderMarkdown () {
        this.renderedMarkdown = ''
        if (this.comment.body_html) {
          this.renderedMarkdown = this.comment.body_html
        } else if (this.comment.body) {
          this.renderedMarkdown = this.$marked(this.comment.body)
        }
      },
      openGitHub () {
        window.open('https://github.com/GjXing')
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.renderMarkdown()
      })
    }
  }
</script>
