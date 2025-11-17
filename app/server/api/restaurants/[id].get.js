import restaurants from '../data/restaurants.json';

export default defineEventHandler((event) => {
  const id = event.context.params.id;
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return { error: "Restaurant not found" };
  }

  return restaurant;
});
