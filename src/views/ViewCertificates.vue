<script setup lang="ts">
// Core
import { onMounted, reactive, ref, watch } from "vue";
// Modules
import { useEventListener } from "@vueuse/core";
// Content / Faked API
import data from "@/content/certificates.json";
// Components
import AtomButton from "@/components/atom/AtomButton.vue";
import AtomRadio from "@/components/atom/AtomRadio.vue";

// Data
const filter = ref(data.filter[0].value);
const certificates = ref([{ label: "", type: "" }]);
const elements = ref([]);
const selected = reactive({ element: null, index: -1 });

// Listeners
useEventListener(document, "keydown", (evt) => {
  if (evt.key !== undefined || evt.keyCode !== undefined) {
    if (evt.key === "Escape" || evt.keyCode === 27) {
      unselectElement();
    }
  }
});

// Watchers
watch(filter, (newFilter) => {
  findCertificates(newFilter);
});

// Hooks
onMounted(() => {
  findCertificates(filter.value);
});

// Methods
const findCertificates = (param: string) => {
  unselectElement();

  if (param === "Both") {
    certificates.value = data.certificates;
  } else {
    certificates.value = data.certificates.filter((x) => x.type.includes(param));
  }
};

const selectElement = (index: number) => {
  selected.index = index;
  selected.element = elements.value[index];
};

const unselectElement = () => {
  selected.element = null;
  selected.index = -1;
};

const doAction = (action: number, index: number) => {
  let str = `Perform action: ${action}`;
  if (index > -1) {
    str = str + ` for the Certificate ${index}`;
  }

  console.log(str);
};

const isDisabled = (action: number) => {
  if (action > 1) {
    return selected.element ? false : true;
  }
};
</script>

<template>
  <section class="page-wrapper">
    <article>
      <section class="table">
        <h1 class="table__head">Certificates</h1>
        <h2 class="table__subhead">{{ filter }}</h2>
        <div class="table__body">
          <PerfectScrollbar>
            <p
              v-for="(element, index) in certificates"
              :key="`cert-${index}`"
              :class="{ active: index === selected.index }"
              ref="elements"
              @click.stop="selectElement(index)"
            >
              {{ element.label }}
            </p>
          </PerfectScrollbar>
        </div>
      </section>
    </article>

    <aside class="aside">
      <section class="aside-section aside__filter">
        <h2>Filter</h2>
        <AtomRadio
          v-for="(element, index) in data.filter"
          :key="`filter-${index}`"
          :params="element"
          v-model="filter"
        />
      </section>
      <section class="aside-section aside__actions">
        <h2>Actions</h2>
        <AtomButton
          v-for="(element, index) in data.actions"
          :key="`action-${index}`"
          :is-disabled="isDisabled(element.action)"
          @click.stop="doAction(element.action, selected.index)"
        >
          {{ element.label }}
        </AtomButton>
      </section>
    </aside>
  </section>
</template>

<style scoped lang="scss">
.page-wrapper {
  display: flex;
  flex: 1;
  flex-direction: row;
}

.table {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 40px;
  background: #363a42;
  box-shadow: 1px 1px 0px rgba(107, 102, 126, 0.49), inset 3px 3px 5px rgba(8, 7, 13, 0.25);
  border-radius: 12px;

  &__head {
    padding: 12px 16px;
    @include font-style(700, 1.4rem, 1.8rem);
  }

  &__subhead {
    padding: 8px 16px 7px 16px;
    @include font-style(500, 1.2rem, 1.5rem);
    background-color: #2e3138;
  }

  &__body {
    display: flex;
    flex-direction: column;
    flex: 1;

    .ps {
      display: flex;
      flex-direction: column;
      flex: 1;
      max-height: calc(100vh - 224px);
    }

    p {
      display: flex;
      padding: 16px 13px;
      @include font-style(400, 1.6rem, 2.4rem);
      transition: background-color grid.$transition;
      cursor: pointer;

      &:not(:last-of-type) {
        border-bottom: solid 1px #2e3138;
      }

      &.active {
        background-color: #2e3138;
      }
    }
  }
}

.aside {
  display: flex;
  flex: 0 1 318px;
  flex-direction: column;

  &-section {
    display: flex;
    flex-direction: column;

    &:not(:last-of-type) {
      margin-bottom: 40px;
    }

    h2 {
      margin-bottom: 24px;
      @include font-style(700, 1.4rem, 1.8rem);
    }

    .btn:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
}
</style>
