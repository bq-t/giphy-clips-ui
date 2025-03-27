import type { Directive, DirectiveBinding } from 'vue'

export type IntersectionHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
export interface IntersectionBinding extends DirectiveBinding {
  value: IntersectionHandler | { handler: IntersectionHandler; options?: IntersectionObserverInit },
}

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

const parseBinding = (value: IntersectionBinding['value']) => {
  if (typeof value === 'function') {
    return { handler: value, options: {} }
  }

  if (typeof value === 'object' && value !== null && 'handler' in value) {
    if (typeof value.handler !== 'function') {
      throw new Error('VIntersection: handler must be a function')
    }
    return { handler: value.handler, options: value.options || {} }
  }
  throw new Error('VIntersection: directive requires a function or an object with a handler function')
}

const mounted = (el: HTMLElement, binding: IntersectionBinding) => {
  const { handler, options } = parseBinding(binding.value)

  const observer = new IntersectionObserver((
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    entries.forEach(entry => {
      handler(entry, observer)
    })
  }, options)

  observers.set(el, observer)
  observer.observe(el)
}

const unmounted = (el: HTMLElement) => {
  const observer = observers.get(el)
  if (!observer) {
    return
  }
  observer.disconnect()
  observers.delete(el)
}

export const Intersect: Directive = {
  mounted,
  unmounted,
}

export default Intersect