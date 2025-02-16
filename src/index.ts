import './styles/main.scss'
import { createUI } from './createUI'

export default {
  install: createUI.install,
  ...createUI,
}