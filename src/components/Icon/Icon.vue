<template>
  <i
    class="gc-icon"
    :class="computedClass"
  >
    <template v-if="color === 'primary'">
      <svg
        class="gc-icon__mask"
        viewBox="0 0 24 24"
        :width="computedSize"
        :height="computedSize"
      >
        <mask :id="computedMaskId">
          <use
            :href="`#${computedSourceId}`"
            fill="white"
          />
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
      :width="computedSize"
      :height="computedSize"
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

const computedClass = computed(() => ({
  black: 'gc-icon_color-black',
  white: 'gc-icon_color-white',
  primary: 'gc-icon_color-primary',
})[props.color])

const computedSize = computed(() => {
  const defaultSizes: Record<string, string> = {
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.875rem',
  }

  const size = props.size
  if (Object.keys(defaultSizes).includes(size as string)) {
    return defaultSizes[size]
  }
  return typeof size === 'number'
    ? `${size}px`
    : size
})

// Icon mask hash
const iconHash = Math.random()
  .toString(36)
  .substring(2, 9)

const computedMaskId = computed(() => `icon-mask-${iconHash}`)
const computedSourceId = computed(() => `icon-source-${iconHash}`)
const computedStyle = computed(() => ({
  '--mask-url': `url(#${computedMaskId.value})`,
  height: computedSize.value,
  width: computedSize.value,
}))
</script>