import type { App, Plugin } from 'vue'
import * as components from './components'

export interface UIOptions {
  prefix?: string,
}

export const createUI: Plugin = {
  install: (app: App, options: UIOptions = {}) => {
    const prefix = options.prefix || 'Gc'

    for (const [componentName, component] of Object.entries(components)) {
      app.component(
        prefix + componentName,
        component,
      )
    }
  },
}