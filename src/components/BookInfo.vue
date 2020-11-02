<template>
  <div class="clearfix" :class="{ linkable }" @click="onclick">
    <div class="image"><img :src="book.image"/></div>
    <div class="details">
      <div class="details_index" v-if="index"><span>{{ index }}.</span></div>
      <ul>
        <li>{{ book.title }}({{ book.price }}円)</li>
        <li>{{ book.author }}著</li>
        <li>{{ book.publisher }}/刊</li>
        <li>{{ book.published }}/発売</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { UPDATE_CURRENT } from '@/store/mutation-types';

export default {
  name: 'book-info',
  props: {
    index: { type : Number },
    linkable: { type: Boolean, default: false },
    book: { type: Object },
  },
  methods: {
    ...mapActions([UPDATE_CURRENT]),
    onclick(){
      if(this.linkable){
        this[UPDATE_CURRENT](this.book);
        this.$router.push('/form');
      }
      console.log("BookInfo![]",this.book)
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.linkable:hover{
  cursor: pointer;
  background-color: #ff9;
}
.clearfix{
  display: flex;
  margin: 10px 0;
  padding-bottom: 5px;
  border-bottom: solid 2px #545c64;
}
ul{
  list-style: none;
}
ul > li:first-child{
  font-weight: bold;
}
.image{
}
.details{
  text-align: left;
}
.details_index{
  position: relative;
  display: inline-block;
  padding: 5px;
  text-align: center;
  pointer-events: none;
}
.details_index::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 55px 55px 0 0;
  border-color: #637d1e transparent transparent transparent;
}
.details_index > span{
  position: relative;
  font-size: 14px;
  font-weight: bold;
  color: #eee;
  letter-spacing: -.06em;
  z-index: 1;
}
img{
  background-color: #637d1e;
  padding: .5rem;
}
</style>
