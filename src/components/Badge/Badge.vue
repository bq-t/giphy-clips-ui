<template>
  <div
    class="gc-badge"
    :class="computedClass"
  >
    <span class="gc-badge__label">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { BadgeProps } from './types'
import { computed } from 'vue'

const props = withDefaults(defineProps<BadgeProps>(), {
  color: 'black',
  size: 'md',
})

const computedClass = computed(() => ([
  {
    sm: 'gc-badge_size-sm',
    md: 'gc-badge_size-md',
    lg: 'gc-badge_size-lg',
  }[props.size],
  {
    black: 'gc-badge_color-black',
    primary: 'gc-badge_color-primary',
  }[props.color],
]))
</script>