<template>
  <q-layout view="hHh Lpr lFf">
    <q-header style="background-color: rgb(0, 0, 0);">
      <div>
        <!-- <div class=" q-gutter-y-md column"> -->
        <div>
          <q-toolbar>
            <q-btn @click="toggleLeftDrawer" round dense flat icon="add_to_queue" class="q-mr-xs" />
            <!-- <q-avatar>
              <q-icon name="visibility" />
            </q-avatar> -->
            <q-toolbar-title>MultiGlancer</q-toolbar-title>

            <q-space />
            <q-btn icon="fab fa-youtube" @click="openLinkOnNewTab('https://www.youtube.com/watch?v=PNrvdtzaujA')" />
            <q-btn icon="fab fa-github" @click="openLinkOnNewTab('https://github.com/imvenx/multiglancer')" />

            <q-input label="Site URL" dark dense standout v-model="appState.url" style="width:40%; min-width: 200px;">
              <template v-slot:append>
                <q-icon v-if="appState.url === ''" name="http" />
                <template v-else>
                  <q-icon name="clear" class="cursor-pointer" @click="appState.url = ''" />
                  <q-icon name="refresh" class="cursor-pointer" @click="refresh()" />
                </template>
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

    <q-card style="position:fixed; bottom: 1em; right:5em; width: 20em; opacity: .7;" class="shadow-10">
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

const openLinkOnNewTab = (url: string) => window.open(url, '_blank')

function refresh() {
  location.reload()
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
