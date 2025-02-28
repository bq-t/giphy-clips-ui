<template>
  <div
    class="gc-volume-control"
    @mouseenter="sliderVisible = true"
    @mouseleave="sliderVisible = false"
  >
    <gc-icon
      class="gc-volume-control__icon"
      :name="computedIconName"
      @click="switchVolume"
    />
    <div
      v-show="sliderVisible"
      class="gc-volume-control__slider"
    >
      <gc-slider v-model="modelValue" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { VolumeControlModel } from './types'
import { Icon as GcIcon } from '@/components/Icon'
import { Slider as GcSlider } from '@/components/Slider'
import { computed, ref } from 'vue'

const modelValue = defineModel<VolumeControlModel>({
  default: 50,
})

const sliderVisible = ref(false)
const computedIconName = computed(() => modelValue.value <= 0 ? 'volume-off' : 'volume-up-outline')

function switchVolume() {
  modelValue.value = modelValue.value > 0 ? 0 : 50
}
</script>