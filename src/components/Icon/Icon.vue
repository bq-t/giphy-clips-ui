<template>
  <iconify-icon
    class="gc-icon"
    :class="computedClass"
    :icon="computedName"
  />
</template>

<script lang="ts">
export interface IconProps {
  name?: string,
  size?: 'sm' | 'md' | 'lg',
  rounded?: boolean,
}
</script>

<script lang="ts" setup>
import { Icon as IconifyIcon } from '@iconify/vue'
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<IconProps>(), {
  name: 'star',
  size: 'md',
  rounded: true,
})

const computedName = computed(() => {
  const providerName = 'material-symbols'
  return `${providerName}:${props.name}`
    + (props.rounded ? '-rounded' : '')
})

const computedClass = computed(() => ({
  sm: 'gc-icon_size-sm',
  md: 'gc-icon_size-md',
  lg: 'gc-icon_size-lg',
})[props.size])
</script>