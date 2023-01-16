<script setup lang="ts">
// Core
import { RouterView } from "vue-router";

// Content / Faked API
import footer from "@/content/footer.json";
import navi from "@/content/navi.json";

// Components
import TemplateNav from "@/components/template/TemplateNav.vue";
import TemplateSearch from "./components/template/TemplateSearch.vue";
import TemplateFooter from "@/components/template/TemplateFooter.vue";
</script>

<template>
  <main class="main">
    <TemplateNav :content="navi" />
    <section class="main__page">
      <TemplateSearch />
      <section class="main__content">
        <RouterView v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </section>
    </section>
  </main>

  <TemplateFooter :content="footer" />
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: row;

  &__page {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__content {
    display: flex;
    flex: 1;
    padding: 24px 40px 22px 24px;
  }
}
</style>
