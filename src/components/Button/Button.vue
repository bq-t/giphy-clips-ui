<template>
  <component
    :is="computedTag"
    class="gc-button"
    :class="computedClass"
  >
    <span class="gc-button__content">
      <slot />
    </span>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import {
  type RouterLinkProps,
  useRouterLink
} from '../../composables'

interface Props extends RouterLinkProps {
  size?: string,
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  size: 'md',
})

const { computedTag } = useRouterLink(props)
const computedClass = computed<string>(() => {
  const sizeArray = {
    sm: 'gc-button_size-sm',
    md: 'gc-button_size-md',
    lg: 'gc-button_size-lg',
  } as Record<string, string>

  return sizeArray[props.size]
})
</script>