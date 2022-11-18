<template>
  <div>
    <CustomNavbar />
    <div class="wrapper">
    </div>

  <RouterView />
  </div>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import CustomNavbar from './components/CustomNavbar.vue'

export default{
  components:{
    CustomNavbar
  }
}

</script>

<style scoped>

</style>
