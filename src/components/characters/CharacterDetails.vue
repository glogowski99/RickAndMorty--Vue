<template>
  <div class="t-flex t-flex-col t-items-center t-py-2 t-text-white">
    <span class="t-font-bold t-text-lg">{{ character.name }}</span>
    <div class="t-flex t-items-center t-text-sm">
      <span class="t-mr-1" :class="{'green-dot': character.status === 'Alive', 'red-dot': character.status === 'Dead'}"></span>
      <span class="t-mr-1 t-font-bold" :class="{'green-text': character.status === 'Alive', 'red-text': character.status === 'Dead'}"> {{ translateStatus(character.status) }} - </span>
      <span>{{translateSpecies(character.species)}}</span>
    </div>
    <div class="t-flex t-text-xs" v-if="character.type">
      <span class="t-mr-1 t-text-yell t-font-bold">Typ:</span>
      <span>{{character.type}}</span>
    </div>
    <div class="t-flex t-text-xs">
      <span class="t-mr-1 t-text-yell t-font-bold">Płeć: </span>
      <span>{{translateGender(character.gender)}}</span>
    </div>
    <div class="t-flex t-text-xs">
      <span class="t-mr-1 t-text-yell t-font-bold">Lokalizacja: </span>
      <span> {{ character.location.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: Object
  },
  setup() {
    const translateStatus = (status) => {
      if (status === 'Alive') {
        return 'Żywy';
      } else if (status === 'Dead') {
        return 'Martwy';
      } else {
        return 'Nieznany';
      }
    };
    const translateSpecies = (species) => {
      if (species === 'Human') {
        return 'Człowiek';
      } else if (species === 'Alien') {
        return 'Obcy'
      } else {
        return 'Nieznany'
      }
    }
    const translateGender = (gender) => {
      if (gender === 'Male') {
        return 'Mężczyzna';
      } else if (gender === 'Female'){
        return 'Kobiera';
      } else {
        return 'Nieznany'
      }
    }
    return {
      translateStatus,
      translateSpecies,
      translateGender
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