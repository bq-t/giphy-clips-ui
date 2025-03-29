<template>
  <div class="gc-range-input">
    <input
      v-model.number="modelValue"
      class="gc-range-input__input"
      type="range"
      :step="step"
      :min="min"
      :max="max"
    />
    <div
      class="gc-range-input__progress"
      :style="computedProgressStyle"
    />
  </div>
</template>

<script lang="ts" setup>
import type { RangeInputProps, RangeInputModel } from './types'
import { computed } from 'vue'

withDefaults(defineProps<RangeInputProps>(), {
  step: 1,
  min: 0,
  max: 100,
})

const modelValue = defineModel<RangeInputModel>({
  default: 0,
})

const computedProgressStyle = computed(() => ({
  '--progressWidth': modelValue.value + '%',
}))
</script>