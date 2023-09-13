<template>
  <div class="t-flex t-flex-wrap">
    <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
    />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import CharacterCard from '@/components/characters/CharacterCard';
export default {
  components: {
    CharacterCard
  },
  setup() {
    const store = useStore();
    onMounted(async () => {
      await store.dispatch('fetchCharacters');
    });
    const characters = computed(() => store.state.characters);
    const charactersFromEarth = computed(() => store.getters.charactersFromEarth);
    return {
      characters,
      charactersFromEarth,
    };
  },
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
  color:green;
}
.red-text {
  color:red;
}
</style>
