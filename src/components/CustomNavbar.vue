<template>
  <div>
    <div>
      <b-navbar class="navbar py-4" type="dark" variant="dark">
        <b-navbar-nav>
          <RouterLink class="me-2" to="/">PunchBag</RouterLink>
          <RouterLink class="me-2" to="/calculator">Calculator</RouterLink>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: "CustomNavbar",
};
</script>

<style scoped>
a{
  color: white;
  text-decoration: none;
}
a:hover{
  color: gray;
}
</style>
