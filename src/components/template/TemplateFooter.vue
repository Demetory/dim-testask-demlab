<script setup lang="ts">
// Types
import type { IFooter } from "@/types/IFooter";

// Props
defineProps({
  content: {
    type: Object as () => IFooter,
    required: true,
  },
});
</script>

<template>
  <footer>
    <ul>
      <li v-for="(element, index) in content.footer" :key="`element-${index}`">
        <span :class="element.status">{{ element.label }}</span>
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
footer {
  z-index: grid.$footer-index;
  background-color: colors.$bg-main;
  box-shadow: grid.$footer-shadow;

  ul {
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    margin: 0 grid.$footer-gap;
    list-style-type: none;

    li {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding: 13.5px 0;
      @include font-style(500, 1.2rem, 1.5rem);

      span {
        position: relative;
        padding-right: calc(grid.$footer-dot-size * 2);

        &::after {
          position: absolute;
          content: "";
          right: 0;
          top: calc(50% - grid.$footer-dot-size / 2);
          width: grid.$footer-dot-size;
          height: grid.$footer-dot-size;
          border-radius: 50%;
          background-color: colors.$grey;
        }

        &.green::after {
          background: grid.$footer-dot-green;
        }
      }
    }
  }
}
</style>
