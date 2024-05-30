// vite.config.ts
import { resolve } from 'path'
import { build } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        bag: resolve(__dirname, 'Bag/bag.html'),
        card: resolve(__dirname, 'card/card.html'),
        checkout: resolve(__dirname, 'checkout/checkout.html'),
        orders: resolve(__dirname, 'order/orders.html'),
      }
    }
  },
  base: '/shop/',

}

