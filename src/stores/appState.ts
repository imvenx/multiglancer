import { ref } from "vue";

export const appState = ref({
  zoom: 0.3,
  url: 'https://arcanepad.com',
  views: [
    { scale: 1, enabled: true, name: 'Pixel 5', width: 393, height: 851 },
    { scale: 1, enabled: true, name: 'iPhone 12 Pro', width: 390, height: 844 },
    { scale: 1, enabled: true, name: 'SXGA', width: 1280, height: 1024 },
    { scale: 1, enabled: true, name: 'HD', width: 1366, height: 768 },
    { scale: 1, enabled: true, name: 'HD+', width: 1600, height: 900 },
    { scale: 1, enabled: true, name: 'FHD', width: 1920, height: 1080 },
    { scale: 1, enabled: true, name: 'WUXGA', width: 1920, height: 1200 },
    { scale: 1, enabled: true, name: 'QHD', width: 2560, height: 1440 },
    { scale: 1, enabled: true, name: 'WQHD', width: 3440, height: 1440 },
    { scale: 1, enabled: true, name: 'UHD', width: 3840, height: 2160 },
  ]
})
