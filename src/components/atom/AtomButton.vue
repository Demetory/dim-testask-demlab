<script setup lang="ts">
// Props
defineProps<{
  isDisabled?: boolean;
}>();
</script>

<template>
  <button class="btn" :disabled="isDisabled">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  color: colors.$white;
  @include font-style(500, 1.4rem, 2.4rem);
  border: none;
  background: linear-gradient(230.15deg, #9580ff 0%, #a361ff 92.48%);
  box-shadow: 2px 2px 7px rgba(11, 10, 13, 0.44), inset 1px 1px 4px #f1e7ff;
  border-radius: 30px;

  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(230.15deg, #9580ff 0%, #bd91fc 92.48%);
    box-shadow: 2px 2px 7px rgba(11, 10, 13, 0.44), inset 1px 1px 4px #f1e7ff;
    border-radius: 30px;
    transition: opacity grid.$transition;
  }

  &:hover:not(:active, :disabled) {
    &::before {
      opacity: 1;
    }
  }

  &:active {
    background: linear-gradient(90deg, #7930de 0%, #7f65ff 100%);
    box-shadow: 2px 2px 5px rgba(31, 36, 47, 0.5), inset 1px 1px 2px rgba(8, 7, 13, 0.24);
  }

  &:disabled {
    background: #b0aeb9;
    box-shadow: 2px 2px 7px rgba(11, 10, 13, 0.44), inset 1px 1px 4px rgba(241, 231, 255, 0.3);
  }
}
</style>
