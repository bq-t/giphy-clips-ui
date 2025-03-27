import type { App, Plugin } from 'vue'
import * as directives from './directives'
import * as components from './components'

export interface UIOptions {
  prefix?: string,
}

export const createUI: Plugin = {
  install: (app: App, options: UIOptions = {}) => {
    const prefix = options.prefix || 'Gc'

    for (const [directiveName, directive] of Object.entries(directives)) {
      app.directive(
        directiveName,
        directive,
      )
    }

    for (const [componentName, component] of Object.entries(components)) {
      app.component(
        prefix + componentName,
        component,
      )
    }
  },
}