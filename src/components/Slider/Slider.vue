<template>
  <div class="gc-slider">
    <input
      v-model.number="modelValue"
      class="gc-slider__input"
      type="range"
      :step="step"
      :min="min"
      :max="max"
    />
    <div
      class="gc-slider__progress"
      :style="computedProgressStyle"
    />
  </div>
</template>

<script lang="ts" setup>
import type { SliderProps, SliderModel } from './types'
import { computed } from 'vue'

withDefaults(defineProps<SliderProps>(), {
  step: 1,
  min: 0,
  max: 100,
})

const modelValue = defineModel<SliderModel>({
  default: 0,
})

const computedProgressStyle = computed(() => ({
  '--progressWidth': modelValue.value + '%',
}))
</script>