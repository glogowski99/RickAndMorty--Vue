<template>
  <div @click="isSelectable ? chooseHero() : null"
       class="t-flex t-flex-col t-m-4 t-rounded-lg t-px-2 t-py-3"
  >
    <div>
      <img
          :src="character.image"
          class="t-rounded-3xl t-shadow-md t-shadow-turq"
      />
    </div>
    <CharacterDetails :character="character" />
  </div>
</template>

<script>
import { toRefs } from 'vue';
import CharacterDetails from './CharacterDetails.vue';

export default {
  components: {
    CharacterDetails
  },
  props: {
    character: Object,
    isSelectable: Boolean
  },
  setup(props, { emit }) {
    // eslint-disable-next-line no-unused-vars
    const { character, isSelectable } = toRefs(props);
    const chooseHero = () => {
      emit('heroSelected', character.value);
    };
    return {
      chooseHero,

    };
  }
};
</script>
