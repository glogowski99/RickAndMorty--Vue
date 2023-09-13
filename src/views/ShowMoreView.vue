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
          <button-group @start-game="openDialog">Zagraj w grę</button-group>
          <div class="t-w-9/12 t-flex t-flex-wrap t-m-auto t-items-center t-justify-center">
            <characters-list/>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
  <q-dialog v-model="isGameStarted">
    <q-card style="width:1200px;max-width:1200px; height:700px; background-color: rgba(44,44,44,1);">
      <div class="t-px-10 t-py-6 t-text-white t-h-full">
        <div class="t-flex t-items-center t-justify-start t-flex-col" v-if="!isHeroChosen">
          <p class="t-text-lg">Wybierz swojego bohatera</p>
          <div class="t-flex">
            <characters-list :isSelectable="true" @heroSelected="onHeroClicked" @updateHeroList="updateHeroList" />

          </div>
        </div>
        <div class="t-flex t-justify-between t-w-full t-h-full" v-if="isHeroChosen">
          <div class="t-flex t-items-center t-justify-start t-flex-col t-w-1/2 t-h-full">
            <p class="t-text-xl">Wybrany bohater</p>
            <div class="t-flex t-flex-col t-items-center" v-if="chosenHero">
              <img :src="chosenHero.image" class="t-rounded-3xl t-shadow-md t-shadow-turq"/>
              <div class="t-flex t-flex-col t-items-center t-mt-2">
                <span class="t-font-bold t-text-yell">Zdrowie</span>
                <q-input disable dense borderless v-model="chosenHero.health" type="range" min="0" max="100"></q-input>
              </div>
              <div class="t-flex t-text-xs t-mt-1">
                <span class="t-mr-1 t-text-yell t-font-bold">Imię:</span>
                <span>{{ chosenHero.name }}</span>
              </div>
              <div class="t-flex t-text-xs">
                <span class="t-mr-1 t-text-yell t-font-bold">Płeć:</span>
                <span>{{ chosenHero.gender }}</span>
              </div>
              <div class="t-flex t-text-xs">
                <span class="t-mr-1 t-text-yell t-font-bold">Gatunek:</span>
                <span>{{ chosenHero.species }}</span>
              </div>
              <div class="t-flex t-flex-col t-items-center">
                <span class="t-font-bold t-text-yell t-mt-2">Statystyki</span>
                <div class="t-flex t-justify-between t-w-full">
                  <span>Siła: {{ chosenHero.stats?.strength || 0 }}</span>
                  <span class="t-mx-4">Inteligencja: {{ chosenHero.stats?.intelligence || 0 }}</span>
                  <span>Zręczność: {{ chosenHero.stats?.agility || 0 }}</span>
                </div>
              </div>

            </div>

          </div>
          <div class="t-flex t-items-center t-justify-center">
            <button
                @click="onStartClicked"
                class="t-p-4 t-rounded-full t-bg-turq t-font-bold" v-if="!showDetails"
            >
              Generuj
            </button>
            <button
                @click="fight"
                v-if="showDetails"
                class="t-p-4 t-rounded-full t-bg-yell t-font-bold t-text-turq"
            >
              Walcz
            </button>
          </div>
          <div class="t-flex t-items-center t-justify-start t-flex-col t-h-full t-w-1/2">
            <p class="t-text-xl">Przeciwnik</p>
            <div class="t-flex t-flex-col t-items-center" v-if="opponentHero && showDetails">
              <img :src="opponentHero.image" class="t-rounded-3xl t-shadow-md t-shadow-turq"/>
              <div class="t-flex t-flex-col t-items-center t-mt-2">
                <span class="t-font-bold t-text-yell">Zdrowie</span>
                <q-input disable dense borderless v-model="opponentHero.health" type="range" min="0" max="100"></q-input>
              </div>
              <div class="t-flex t-text-xs t-mt-1">
                <span class="t-mr-1 t-text-yell t-font-bold">Imię:</span>
                <span>{{ opponentHero.name }}</span>
              </div>
              <div class="t-flex t-text-xs">
                <span class="t-mr-1 t-text-yell t-font-bold">Płeć:</span>
                <span>{{ opponentHero.gender }}</span>
              </div>
              <div class="t-flex t-text-xs">
                <span class="t-mr-1 t-text-yell t-font-bold">Gatunek:</span>
                <span>{{ opponentHero.species }}</span>
              </div>
              <div class="t-flex t-flex-col t-items-center">
                <span class="t-font-bold t-text-yell t-mt-2">Statystyki</span>
                <div class="t-flex t-justify-between t-w-full">
                  <span>Siła: {{ opponentHero.stats?.strength || 0 }}</span>
                  <span class="t-mx-4">Inteligencja: {{ opponentHero.stats?.intelligence || 0 }}</span>
                  <span>Zręczność: {{ opponentHero.stats?.agility || 0 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script>

import ButtonGroup from "@/components/showMoreComponents/ButtonGroup";
import CharactersList from "@/components/showMoreComponents/CharactersList";
import {ref} from "vue"
export default {
  components: { CharactersList, ButtonGroup},
  props:{startGame: Boolean},
  setup() {
    const isGameStarted = ref(false);
    const opponentHero = ref({});
    const allHeroes = ref([]);
    const showDetails = ref(false);

    const updateHeroList = (newList) => {
      allHeroes.value = newList;
    };
    const openDialog = () => {
      isGameStarted.value = !isGameStarted.value;
      console.log('Emmit/Props works')
    };
    const chosenHero = ref({});
    const isHeroChosen = ref(false);

    const toggleChosenHero = () => {
      chosenHero.value = !chosenHero.value
      console.log('wybrano bohatera:', chosenHero.value)
    };

    const selectRandomOpponent = () => {
      if (allHeroes.value.length === 0) {
        console.error("Lista bohaterów jest pusta");
        return;
      }

      const randomIndex = Math.floor(Math.random() * allHeroes.value.length);
      opponentHero.value = allHeroes.value[randomIndex];
    };

    const generateRandomStats = () => {
      return {
        strength: Math.floor(Math.random() * 101),
        intelligence: Math.floor(Math.random() * 101),
        agility: Math.floor(Math.random() * 101)
      }
    }

    const onHeroClicked = (hero) => {
      console.log("bohater, który został kliknięty:", hero);
      chosenHero.value = hero;
      isHeroChosen.value = true;
      console.log('wybrano bohatera 2:', chosenHero.value);
    };

    const getRandomDamage = (strength) => {
      const lowerBound = Math.max(strength - 10, 0);
      const upperBound = strength + 10;

      return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
    };

    const fight = () => {
      const heroDamage = getRandomDamage(chosenHero.value.stats.strength);
      const opponentDamage = getRandomDamage(opponentHero.value.stats.strength);

      chosenHero.value.health -= heroDamage / 10;
      opponentHero.value.health -= opponentDamage / 10;

      if (chosenHero.value.health <= 0 || opponentHero.value.health <= 0) {
        alert("Walka zakończona");
      }
    };


    const onStartClicked = () => {
      selectRandomOpponent();
      showDetails.value = true;
      chosenHero.value.stats = generateRandomStats();
      opponentHero.value.stats = generateRandomStats();
      showDetails.value = true;
      chosenHero.value.health = 100;
      opponentHero.value.health = 100;
    };



    return {
      openDialog,
      isGameStarted,
      chosenHero,
      isHeroChosen,
      toggleChosenHero,
      onHeroClicked,
      updateHeroList,
      opponentHero,
      showDetails,
      onStartClicked,
      fight
    };
  },
};
</script>
<style scoped>
.special-text {
  text-shadow: 0px 0px 6px rgba(220, 235, 81, 1);
}
</style>
