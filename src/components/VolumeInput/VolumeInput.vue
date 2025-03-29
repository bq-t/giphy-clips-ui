<template>
  <div
    class="gc-volume-input"
    @mouseenter="() => changeVolumeVisible(true)"
    @mouseleave="() => changeVolumeVisible(false)"
  >
    <gc-icon
      class="gc-volume-input__icon"
      role="button"
      :name="computedIconName"
      @click="switchVolume"
    />
    <div
      v-show="volumeVisible"
      class="gc-volume-input__slider"
    >
      <gc-range-input v-model="modelValue" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { VolumeInputProps, VolumeInputModel } from './types'
import { Icon as GcIcon, RangeInput as GcRangeInput } from '@/components'
import { computed, ref } from 'vue'

const modelValue = defineModel<VolumeInputModel>({
  default: 50,
})

const props = withDefaults(defineProps<VolumeInputProps>(), {
  expanded: false,
})

const computedIconName = computed(() => modelValue.value <= 0 ? 'volume-off' : 'volume-up-outline')

function switchVolume() {
  modelValue.value = modelValue.value > 0 ? 0 : 50
}

const volumeVisible = ref(props.expanded)
function changeVolumeVisible(visible: boolean) {
  if (props.expanded) {
    return
  }
  volumeVisible.value = visible
}
</script>