<template>
  <div class="gc-progress">
    <div
      class="gc-progress__track"
      :style="computedTrackStyle"
    />
  </div>
</template>

<script lang="ts" setup>
import type { ProgressModel } from './types'
import { computed } from 'vue'

const modelValue = defineModel<ProgressModel>({
  default: 0,
})

const computedTrackStyle = computed(() => ({
  width: modelValue.value + '%',
}))
</script>