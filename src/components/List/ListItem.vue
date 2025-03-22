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
import { useLink } from 'vue-router'

const props = withDefaults(defineProps<ListItemProps>(), {
  tag: 'li',
  active: false,
  activeClass: 'gc-list-item_active',
  exactActiveClass: 'gc-list-item_active',
})

const { computedTag, computedLinkAttributes } = useRouterLink(props)
const computedClass = computed(() => ([
  { 'gc-list-item_active': computedActive.value },
]))

const { isExactActive: isRouteExactActive } = useLink(props)
const computedActive = computed(() => {
  if (!props.to) {
    return props.active
  }
  return isRouteExactActive.value
})

const computedIconColor = computed(() => computedActive.value ? 'primary' : 'white')
</script>