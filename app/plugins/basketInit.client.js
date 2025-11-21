import { useBasket } from '~/stores/useBasket'

export default defineNuxtPlugin((nuxtApp) => {
  const basket = useBasket()

  basket.setItems()
})
