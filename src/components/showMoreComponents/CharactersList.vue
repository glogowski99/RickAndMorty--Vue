<template>
  <div class="t-flex t-flex-wrap">
    <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
        :isSelectable="isSelectable"
        @heroSelected="heroSelected"
    />
  </div>
</template>
<script>
import {onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CharacterCard from '@/components/characters/CharacterCard';
export default {
  components: {
    CharacterCard
  },
  props: {
    isSelectable: Boolean
  },
  setup(_, { emit }) {
    const store = useStore();
    const characters = computed(() => store.state.characters);
    onMounted(async () => {
      await store.dispatch('fetchCharacters');
      emit('updateHeroList', characters.value);
    });

    const charactersFromEarth = computed(() => store.getters.charactersFromEarth);

    const heroSelected = (character) => {
      emit('heroSelected', character);
    };
    return {
      characters,
      charactersFromEarth,
      heroSelected
    };
  }
};
</script>
<style scoped>
.green-dot {
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}

.red-dot {
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
}

.green-text {
  color: green;
}

.red-text {
  color: red;
}
</style>
