<template>
  <div class="flex-start-center t-w-screen t-h-screen home">
    <div class="t-flex t-flex-col">
      <img src="../assets/1.png" alt="Logo name 'Rick and Morty'" />
      <img
          class="t-mt-[-150px]"
          src="../assets/photo.png"
          alt="Rick and Morty"
      />
      <div class="flex-center-between t-m-auto t-w-3/5">
        <router-link
            to="/information"
            class="special-class-two home-button t-bg-semi-green hover:t-border-semi-green"
        >
          <span class="home-button-text">Info</span>
        </router-link>
        <router-link
            to="/showmore"
            class="special-class home-button t-bg-turq hover:t-border-turq"
        >
          <span class="home-button-text">Show More</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
.home {
  background-color: rgba(0, 0, 0, 0.8);
}
.special-class,
.special-class-two {
  -webkit-box-shadow: 0px 0px 27px 0px rgba(220, 235, 81, 1);
  -moz-box-shadow: 0px 0px 27px 0px rgba(220, 235, 81, 1);
  box-shadow: 0px 0px 27px 0px rgba(220, 235, 81, 1);
}
.special-class:hover {
  -webkit-box-shadow: 0px 0px 27px 0px rgba(0, 176, 200, 1);
  -moz-box-shadow: 0px 0px 27px 0px rgba(0, 176, 200, 1);
  box-shadow: 0px 0px 27px 0px rgba(0, 176, 200, 1);
}
.special-class-two:hover {
  -webkit-box-shadow: 0px 0px 27px 0px rgba(60, 182, 74, 1);
  -moz-box-shadow: 0px 0px 27px 0px rgba(60, 182, 74, 1);
  box-shadow: 0px 0px 27px 0px rgba(60, 182, 74, 1);
}
</style>
