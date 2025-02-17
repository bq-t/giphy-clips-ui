<template>
  <ul
    class="gc-list"
    :class="computedClass"
  >
    <slot :items="items">
      <slot
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        name="item"
        :props="{ ...item, onClick: () => onSelect(itemIndex) }"
      >
        <gc-list-item
          v-bind="item"
          :active="itemIndex === modelValue"
          @click="onSelect(itemIndex)"
        />
      </slot>
    </slot>
  </ul>
</template>

<script lang="ts">
import type { ListItemProps } from '@/types'

export interface ListProps {
  items?: ListItemProps[],
  type?: 'column' | 'row',
}
</script>

<script lang="ts" setup>
import { ListItem as GcListItem } from './index'
import { computed } from 'vue'

const props = withDefaults(defineProps<ListProps>(), {
  items: () => ([]),
  type: 'column',
})

const modelValue = defineModel<number>({
  default: 0,
})

const computedClass = computed(() => ({
  column: 'gc-list_type-column',
  row: 'gc-list_type-row',
})[props.type])

const onSelect = (itemIndex: number) => {
  modelValue.value = itemIndex
}
</script>