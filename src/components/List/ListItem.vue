<template>
  <component
    :is="computedTag"
    v-bind="computedLinkAttributes"
    class="gc-list-item"
    :class="computedClass"
  >
    <span
      v-if="icon"
      class="gc-list-item__prepend"
    >
      <gc-icon
        :name="icon"
        :color="computedIconColor"
      />
    </span>
    <span class="gc-list-item__content">
      <slot>
        {{ title }}
      </slot>
    </span>
  </component>
</template>

<script lang="ts" setup>
import { ListItemProps } from './types'
import { Icon as GcIcon } from '@/components/Icon'
import { useRouterLink } from '@/composables'
import { computed } from 'vue'

const props = withDefaults(defineProps<ListItemProps>(), {
  tag: 'li',
  exact: true,
  active: false,
  activeClass: 'gc-list-item_active',
  exactActiveClass: 'gc-list-item_active',
})

const { computedTag, computedLinkAttributes, isActive } = useRouterLink(props)
const computedClass = computed(() => ([
  { 'gc-list-item_active': computedActive.value },
]))

const computedActive = computed(() => {
  if (!props.to) {
    return props.active
  }
  return isActive.value
})

const computedIconColor = computed(() => computedActive.value ? 'primary' : 'white')
</script>