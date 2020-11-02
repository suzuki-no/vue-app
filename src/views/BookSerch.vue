<template>
  <div class="book_serch">
    <Serch msg="Welcome to BookSerch"/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Serch from '@/components/Serch.vue'

export default {
  name: 'BookSerch',
  components: {
    Serch
  }
}
</script>
