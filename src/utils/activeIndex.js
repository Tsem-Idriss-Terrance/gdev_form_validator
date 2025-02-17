export default function useActivateFirstIndex(points, location1) {
  let activeIndex = 0;
  for (let i = 0; i < points.length; i++) {
    if (location1.includes(points[i])) {
      activeIndex = i;
    }
  }

  return activeIndex;
}
