<template>
  <div
    class="gc-volume-control"
    @mouseenter="() => changeVolumeVisible(true)"
    @mouseleave="() => changeVolumeVisible(false)"
  >
    <gc-icon
      class="gc-volume-control__icon"
      role="button"
      :name="computedIconName"
      @click="switchVolume"
    />
    <div
      v-show="volumeVisible"
      class="gc-volume-control__slider"
    >
      <gc-slider v-model="modelValue" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { VolumeControlModel, VolumeControlProps } from './types'
import { Icon as GcIcon } from '@/components/Icon'
import { Slider as GcSlider } from '@/components/Slider'
import { computed, ref } from 'vue'

const modelValue = defineModel<VolumeControlModel>({
  default: 50,
})

const props = withDefaults(defineProps<VolumeControlProps>(), {
  alwaysShowVolume: false,
})

const computedIconName = computed(() => modelValue.value <= 0 ? 'volume-off' : 'volume-up-outline')

function switchVolume() {
  modelValue.value = modelValue.value > 0 ? 0 : 50
}

const volumeVisible = ref(props.alwaysShowVolume)
function changeVolumeVisible(visible) {
  if (props.alwaysShowVolume) {
    return
  }
  volumeVisible.value = visible
}
</script>