<template>
  <div class="t-flex t-flex-col t-m-4 t-rounded-lg t-px-2 t-py-3">
    <div>
      <img :src="character.image" class="t-rounded-3xl t-shadow-md t-shadow-turq"/>
    </div>
    <CharacterDetails :character="character" />
  </div>
</template>

<script>
import CharacterDetails from './CharacterDetails.vue';
export default {
  components: {
    CharacterDetails
  },
  props: {
    character: Object
  },
};
</script>