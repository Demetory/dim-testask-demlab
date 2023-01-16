<script setup lang="ts">
// Composables
import { useDynamicURL } from "@/composables/useDynamicURL";
// Types
import type { INavi } from "@/types/INavi";

// Props
defineProps({
  content: {
    type: Object as () => INavi,
    required: true,
  },
});
</script>

<template>
  <nav>
    <RouterLink to="/">
      <img alt="Cellframe" src="@/assets/images/cellframe-logo.svg" width="109" height="22" />
    </RouterLink>
    <RouterLink v-for="(element, index) in content.navi" :key="`element-${index}`" :to="`/${element.path}`">
      <i><img :alt="element.label" :src="useDynamicURL(`${element.icon}.svg`)" width="24" height="24" /></i>
      {{ element.label }}
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
nav {
  z-index: grid.$navi-index;
  display: flex;
  flex-direction: column;
  margin-bottom: grid.$navi-gap;
  padding-right: calc(grid.$navi-gap * 2);
  width: grid.$navi-width;
  background: colors.$bg-navi;
  border-bottom-right-radius: grid.$border-radius;
  @include container-shadow;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px 24px;
    color: colors.$white;
    @include font-style(400, 1.3rem, 1.6rem);
    transition: box-shadow grid.$transition-cubic, border-radius grid.$transition-cubic;
    will-change: box-shadow;

    &:first-of-type {
      padding: 20px 24px;
    }

    &.router-link-exact-active:not(:first-of-type) {
      box-shadow: 1px 1px 0px rgba(107, 102, 126, 0.49), inset 3px 3px 5px rgba(8, 7, 13, 0.25);
      border-radius: 0px grid.$border-radius grid.$border-radius 0px;
    }

    i {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      width: grid.$navi-icon;
      height: grid.$navi-icon;
    }
  }
}
</style>
