<script setup lang="ts">
// Core
import { ref } from "vue";
// Modules
import { useEventListener } from "@vueuse/core";

// Props
defineProps<{
  type?: string;
  placeholder?: string;
}>();

// Data
const input = ref<HTMLInputElement | null>(null);

// Listeners
useEventListener(document, "keydown", (evt) => {
  if (evt.key !== undefined || evt.keyCode !== undefined) {
    if (evt.key === "Escape" || evt.keyCode === 27) {
      input.value?.blur();
      input.value!.value = "";
    }
  }
});
</script>

<template>
  <input ref="input" type="text" :placeholder="placeholder" :class="type" />
</template>

<style scoped lang="scss">
input {
  display: inline-flex;
  padding-left: 36px;
  max-width: 224px;
  height: 30px;
  @include font-style(400, 1.6rem, 2.4rem);
  color: #757184;
  border: none;
  border-bottom: solid 1px #393b41;
  background-color: transparent;
  transition: color grid.$transition;

  &:focus {
    color: colors.$white;
  }

  &.search {
    margin: 15px 36px;
    background: url(@/assets/images/IconSearch.svg) center left no-repeat;
  }
}
</style>
