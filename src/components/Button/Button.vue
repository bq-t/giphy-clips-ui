<template>
  <component
    :is="computedTag"
    v-bind="computedLinkAttributes"
    class="gc-button"
    :class="computedClass"
  >
    <span
      v-if="prependIcon"
      class="gc-button__prepend"
    >
      <gc-icon
        class="gc-button__prepend-icon"
        :name="prependIcon"
      />
    </span>
    <span class="gc-button__content">
      <slot />
    </span>
    <span
      v-if="appendIcon"
      class="gc-button__append"
    >
      <gc-icon
        class="gc-button__append-icon"
        :name="appendIcon"
      />
    </span>
  </component>
</template>

<script lang="ts">
import type { RouterLinkProps } from '@/types'

export interface ButtonProps extends RouterLinkProps {
  prependIcon?: string,
  appendIcon?: string,
  tag: 'button',
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

const { computedTag, computedLinkAttributes } = useRouterLink(props)
const computedClass = computed(() => ({
  sm: 'gc-button_size-sm',
  md: 'gc-button_size-md',
  lg: 'gc-button_size-lg',
})[props.size])
</script>