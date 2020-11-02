<template>
  <div id="serch">
    <el-form :inline="true">
      <el-form-item label="キーワード">
        <el-input type="text" size="large" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onclick">検索</el-button>
      </el-form-item>
    </el-form>
    <hr>
    <bookInfo v-for="(b, i) of books" :linkable="true" :book="b" :index="i + 1" :key="b.isbn"></bookInfo>
  </div>
</template>

<script>
import BookInfo from '@/components/BookInfo.vue';

export default {
  name: 'book-search',
  components: {
    BookInfo
  },
  data(){
    return {
      keyword: 'vuejs',
      books: []
    }
  },
  methods: {
    onclick: function(){
      this.$http(`https://www.googleapis.com/books/v1/volumes?q= + this.keyword`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Serch![]",data)
        this.books = [];
        for(let b of data.items){
          let authors = b.volumeInfo.authors,
              price = b.saleInfo.listPrice,
              img = b.volumeInfo.imageLinks;
          this.books.push({
            id: b.id,
            title: b.volumeInfo.title,
            author: authors ? authors.join(',') : '',
            price: price ? price.amount : '-',
            publisher: b.volumeInfo.publisher,
            published: b.volumeInfo.publishedDate,
            image: img ? img.smallThumbnail : '',
          })
        }
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search from{
  margin-top: 15px;
}
</style>
