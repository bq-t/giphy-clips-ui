<template>
  <component
    :is="computedTag"
    class="gc-button"
    :class="computedClass"
  >
    <span
      v-if="prependIcon"
      class="gc-button__prepend"
    >
      <gc-icon :name="prependIcon" />
    </span>
    <span class="gc-button__content">
      <slot />
    </span>
    <span
      v-if="appendIcon"
      class="gc-button__append"
    >
      <gc-icon :name="appendIcon" />
    </span>
  </component>
</template>

<script lang="ts">
import type { RouterLinkProps } from '@/types'

export interface ButtonProps extends RouterLinkProps {
  prependIcon?: string,
  appendIcon?: string,
  size?: 'sm' | 'md' | 'lg',
}
</script>

<script lang="ts" setup>
import { Icon as GcIcon } from '@/components/Icon'
import { useRouterLink } from '@/composables'
import { computed } from 'vue'

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  size: 'md',
})

const { computedTag } = useRouterLink(props)
const computedClass = computed(() => ({
  sm: 'gc-button_size-sm',
  md: 'gc-button_size-md',
  lg: 'gc-button_size-lg',
})[props.size])
</script>