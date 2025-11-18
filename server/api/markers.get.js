import restaurants from './data/restaurants.json';

export default defineEventHandler(() => {
  return restaurants.map(r => ({
    id: r.id,
    name: r.name,
    category: r.category,
    lat: r.location.lat,
    lng: r.location.lng
  }));
});
