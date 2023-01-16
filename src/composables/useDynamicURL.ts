// Returns dynamic image path
const useDynamicURL = (image: string) => {
  return new URL(`/src/assets/images/${image}`, import.meta.url).href;
};

// Export
export { useDynamicURL };
