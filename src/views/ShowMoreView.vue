<template>
  <div class="flex-start-center t-w-screen t-h-full home">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-dark text-white t-py-2">
        <q-toolbar>
          <q-toolbar-title>
            <router-link
                to="/"
                class="t-px-2 t-text-sm t-text-yell special-text">
              Rick And Morty Example App
            </router-link>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <div class="t-flex t-justify-center t-items-center t-flex-col t-w-full t-pt-10">
          <p class="t-text-xl t-text-white t-tracking-wider">
            Lista wszystkich postaci z Rick and Morty
          </p>
          <button-group></button-group>
          <div class="t-w-9/12 t-flex t-flex-wrap t-m-auto t-items-center t-justify-center">
            <characters-list/>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>

import ButtonGroup from "@/components/showMoreComponents/ButtonGroup";
import CharactersList from "@/components/showMoreComponents/CharactersList";

export default {
  components: {CharactersList, ButtonGroup},
  setup() {
    return {};
  },
};
</script>
<style scoped>
.special-text {
  text-shadow: 0px 0px 6px rgba(220, 235, 81, 1);
}
</style>
