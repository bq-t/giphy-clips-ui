<template>
  <div class="gc-progressbar">
    <div
      class="gc-progressbar__track"
      :style="computedTrackStyle"
    />
  </div>
</template>

<script lang="ts" setup>
import type { ProgressbarModel } from './types'
import { computed } from 'vue'

const modelValue = defineModel<ProgressbarModel>({
  default: 0,
})

const computedTrackStyle = computed(() => ({
  width: modelValue.value + '%',
}))
</script>