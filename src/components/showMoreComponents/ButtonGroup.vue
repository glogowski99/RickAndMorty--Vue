<template>
  <div class="t-flex t-justify-center t-items-center t-my-6 t-w-2/5">
    <button
        class="t-rounded-lg t-bg-turq t-px-10 t-py-2 t-text-white hover:t-shadow-md hover:t-shadow-yell t-transition-all"
        @click="startGame"
    >
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  setup(_, { emit }) {
    const startGame = () => {
      emit('start-game');
    };
    return {
      startGame
    };
  }
}
</script>
<style scoped></style>