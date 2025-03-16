<template>
  <component
    :is="computedTag"
    v-bind="computedLinkAttributes"
    class="gc-button"
    :class="computedClass"
    :disabled="disabled"
  >
    <span
      v-if="prependIcon && !icon"
      class="gc-button__prepend"
    >
      <gc-icon
        class="gc-button__prepend-icon"
        :name="prependIcon"
      />
    </span>
    <span class="gc-button__content">
      <gc-icon
        v-if="icon"
        :name="icon"
        :color="color === 'primary' ? 'primary' : 'white'"
        size="sm"
      />
      <slot v-else />
    </span>
    <span
      v-if="appendIcon && !icon"
      class="gc-button__append"
    >
      <gc-icon
        class="gc-button__append-icon"
        :name="appendIcon"
      />
    </span>
    <div class="gc-button__overlay" />
  </component>
</template>

<script lang="ts" setup>
import type { ButtonProps } from './types'
import { Icon as GcIcon } from '@/components/Icon'
import { useRouterLink } from '@/composables'
import { computed } from 'vue'

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'black',
  tag: 'button',
  size: 'md',
  disabled: false,
})

const { computedTag, computedLinkAttributes } = useRouterLink(props)
const computedClass = computed(() => ([
  {
    sm: 'gc-button_size-sm',
    md: 'gc-button_size-md',
    lg: 'gc-button_size-lg',
  }[props.size],
  { 'gc-button_icon': props.icon },
]))
</script>