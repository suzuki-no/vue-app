<template>
  <div class="list">
    <p>{{ bookCount }}件の読書情報が記録されています。</p>
    <BookInfo v-for="(b, i) of books" :linkable="true" :book="b" :index="i + 1" :key="b.id"></BookInfo>
    <div>
      <el-pagination background layout="prev, pager, next" :total="bookCount" :page-size="3" @current-change="onchange"></el-pagination>
    </div>
    <img alt="Vue logo" src="../assets/logo.png"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import BookInfo from '@/components/BookInfo.vue';

export default {
  name: 'home',
  data(){
    return{
      books: []
    }
  },
  components: {
    BookInfo
  },
  computed: mapGetters(['bookCount', 'getRangeByPage']),
  methods: {
    onchange(page){
      this.books = this.getRangeByPage(page);
      console.log("Home![1]",page)
    }
  },
  mounted(){
    this.books = this.getRangeByPage(1);
    console.log("Home![1]",this.books)
  }
}
</script>
