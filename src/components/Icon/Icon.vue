<template>
  <i
    class="gc-icon"
    :class="computedClass"
  >
    <template v-if="color === 'primary'">
      <svg
        class="gc-icon__mask"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <mask :id="computedMaskId">
          <use :href="`#${computedSourceId}`" fill="white" />
        </mask>
      </svg>
      <span
        class="gc-icon__icon"
        :style="computedStyle"
      />
    </template>
    <iconify-icon
      class="gc-icon__svg"
      :id="computedSourceId"
      :icon="computedName"
    />
  </i>
</template>

<script lang="ts" setup>
import { IconProps } from './types'
import { Icon as IconifyIcon } from '@iconify/vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<IconProps>(), {
  color: 'white',
  size: 'md',
  rounded: true,
})

const computedName = computed(() => {
  const providerName = 'material-symbols'
  return `${providerName}:${props.name}`
    + (props.rounded ? '-rounded' : '')
})

const computedClass = computed(() => ([
  {
    sm: 'gc-icon_size-sm',
    md: 'gc-icon_size-md',
    lg: 'gc-icon_size-lg',
  }[props.size],
  {
    black: 'gc-icon_color-black',
    white: 'gc-icon_color-white',
    primary: 'gc-icon_color-primary',
  }[props.color],
]))

// Icon mask hash
const iconHash = Math.random()
  .toString(36)
  .substring(2, 9)

const computedMaskId = computed(() => `icon-mask-${iconHash}`)
const computedSourceId = computed(() => `icon-source-${iconHash}`)
const computedStyle = computed(() => ({
  mask: `url(#${computedMaskId.value})`,
  '-webkit-mask': `url(#${computedMaskId.value})`,
}))
</script>