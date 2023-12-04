<template>
  <q-icon v-if="saved" name="save"
    style="color:green; font-size: 3em; position:fixed; top: 2em; right: 50%; z-index:1000; transition:all .5s; box-shadow: 0 0 5px black;" />
  <router-view />
</template>

<script setup lang="ts">
import { LocalStorage } from 'quasar';
import { ref, watch } from 'vue';
import { appState } from './stores/appState';


const saved = ref(false)

LocalStorage.getItem('appState') ? appState.value = LocalStorage.getItem('appState') as any : ''

watch(appState, (val) => {
  LocalStorage.set('appState', val)
  saved.value = true
  setTimeout(() => {
    saved.value = false
  }, 500);
}, { deep: true })


</script>
