/**
 * @author Narnianknight
 * @dependencies vue, @wikimedia/codex
 * @public
 */

import * as vue from 'vue'
import App from './App.vue'

const targetEl = document.querySelector('.mcw-calc[data-type="damage"]')!
const createApp =
  process.env.NODE_ENV === 'development' ? vue.createApp : vue.createMwApp || vue.createApp
createApp(App).mount(targetEl)
