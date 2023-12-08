<template>
  <!-- <div style="padding: 20em 2em">
      <div v-for="(view, i) in views.filter(x => x.enabled == true)" :key="i" :style="`transform:scale(${scale});`"
        style="display:inline-block">
        <div :style="`margin:-${view.height * (1 - scale)}px -${view.width * (1 - scale) / 2}px `">
          <h3>
            {{  view.name  }} {{  view.width  }}x{{  view.height  }}
          </h3>
          <iframe :src="url" :width="view.width" :height="view.height" loading="lazy" frameborder="1"></iframe>
        </div>
      </div>
    </div> -->

  <!-- <svg :viewBox="`0 0  ${1000 / scale}  ${550 / scale}`">
      <foreignObject :width="1000 / scale" :height="550 / scale" style="overflow:scroll">
        <div v-for="view in views.filter(x => x.enabled == true)" style="display:inline-block; margin:5em; ">
          <div style="text-align:center; text-overflow: clip;">
            <h3 :style="`font-size: ${0.9 / scale}rem`">{{  view.name  }} {{  view.width  }}x{{  view.height  }}</h3>
          </div>
          <iframe :src="url" :width="view.width" :height="view.height" frameborder="0"></iframe>
        </div>
      </foreignObject>
    </svg> -->

  <template v-for="view, i in appState.views.filter(x => x.enabled == true)">
    <div style="text-align:center; display:inline-block; margin:1em">
      <div style="display: flex;justify-content: space-between; align-items: center;">
        <div style="padding: 0 1em; font-weight: 600;">{{ view.name }} {{ view.width }}x{{
          view.height }}</div>
        <div>
          <q-btn title="full screen" icon="fullscreen" @click="makeFullScreen(i)" round outline flat></q-btn>
          <q-btn title="close" icon="close" @click="view.enabled = false" round outline flat></q-btn>
        </div>
      </div>
      <svg :id="`viewComp` + i" :viewBox="`0 0 ${view.width} ${view.height}`"
        :width="view.width * appState.zoom * view.scale" :height="view.height * appState.zoom * view.scale"
        style="box-shadow: 0 0 10px black;">
        <foreignObject :width="view.width" :height="view.height">
          <iframe style="border: none;" :src="appState.url" :width="view.width" :height="view.height" />
        </foreignObject>
      </svg>
      <q-slider :min="0.1" :max="2" :step="0.1" v-model="view.scale" />
    </div>
  </template>



  <!-- <div v-for="(view, i) in views" :key="i">
      <div>
        <iframe :style="`transform:scale(${scale}); transform-origin: 0 0`" :src="url" :width="view.width"
          :height="view.height" loading="lazy" frameborder="1"></iframe>
        </div>
      </div> -->
</template>

<script setup lang="ts">
import { appState } from 'src/stores/appState';

function makeFullScreen(i: number) {
  document.getElementById('viewComp' + i)?.requestFullscreen()
}

</script>

