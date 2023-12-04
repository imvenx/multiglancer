<template>
  <q-layout view="hHh Lpr lFf">
    <q-header style="background-color: black;">
      <div>
        <!-- <div class=" q-gutter-y-md column"> -->
        <div>
          <q-toolbar>
            <q-btn @click="toggleLeftDrawer" round dense flat icon="menu" class="q-mr-xs" />
            <!-- <q-avatar>
              <q-icon name="visibility" />
            </q-avatar> -->
            <q-toolbar-title>MultiGlancer</q-toolbar-title>

            <q-space />

            <q-input label="Site URL" dark dense standout v-model="appState.url" style="width:40%;">
              <template v-slot:append>
                <q-icon v-if="appState.url === ''" name="http" />
                <q-icon v-else name="clear" class="cursor-pointer" @click="appState.url = ''" />
              </template>
            </q-input>
          </q-toolbar>
        </div>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>
          Views
        </q-item-label>

        <views-edit />
      </q-list>
    </q-drawer>
    <q-page-container>

      <router-view />
    </q-page-container>

    <q-card style="position:fixed; bottom: 1em; right:5em; width: 20em;" class="shadow-10">
      <q-item>
        <q-item-section>
          <q-slider v-model="appState.zoom" :step="0.01" :min="0.1" :max="1" :label="true" />
        </q-item-section>
        <q-item-section side>
          <q-icon size="md" name="zoom_in" />
        </q-item-section>
      </q-item>
    </q-card>

  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ViewsEdit from 'src/components/ViewsEdit.vue';
import { appState } from 'src/stores/appState';

appState
const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
