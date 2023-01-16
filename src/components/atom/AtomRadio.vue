<script setup lang="ts">
// Types
import type { IFilter } from "@/types/IFilter";

// Props
defineProps({
  params: {
    type: Object as () => IFilter,
    required: true,
  },
  modelValue: {
    type: String,
  },
});

// Data
const emit = defineEmits(["update:modelValue"]);

// Methods
const emitValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <label class="btn-radio">
    <input
      type="radio"
      :name="params.name"
      :value="params.value"
      @input="emitValue"
      :checked="modelValue === params.value"
    />
    {{ params.label }}
  </label>
</template>

<style scoped lang="scss">
.btn-radio {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  @include font-style(400, 1.6rem, 2rem);
  cursor: pointer;
  user-select: none;

  &:not(:last-of-type) {
    margin-bottom: 32px;
  }

  input[type="radio"] {
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    display: grid;
    place-content: center;
    margin: 0;
    margin-right: 16px;
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    transform: translateY(-0.075em);
    background: #2d3037;
    box-shadow: 2px 2px 5px rgba(8, 7, 13, 0.42), inset 1px 1px 3px rgba(77, 85, 99, 0.52);
  }

  input[type="radio"]::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background: linear-gradient(90deg, #7930de 0%, #7f65ff 100%);
    box-shadow: 2px 2px 5px rgba(31, 36, 47, 0.5), inset 1px 1px 2px rgba(8, 7, 13, 0.24);
  }

  input[type="radio"]::after {
    position: absolute;
    content: "";
    top: calc(50% - 3px);
    left: calc(50% - 3px);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #717580;
  }

  input[type="radio"]:checked::after {
    background-color: #363a42;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
  }
}
</style>
