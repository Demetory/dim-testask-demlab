<script setup lang="ts">
// Components
import AtomInput from "@/components/atom/AtomInput.vue";
</script>

<template>
  <section class="container-search">
    <AtomInput placeholder="Search" type="search" />
  </section>
</template>

<style scoped lang="scss">
.container-search {
  display: flex;
  margin-left: 3px;
  background-color: colors.$bg-main;
  border-bottom-left-radius: grid.$border-radius;
  @include container-shadow;
}
</style>
