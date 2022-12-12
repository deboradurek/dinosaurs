// Helper function to generate a single tile
export const generateTile = (name, image, fact) => {
  return `
    <h3>${name}</h3>
    <image src="./images/${image.toLowerCase()}.png" />
    ${fact ? `<p>${fact}</p>` : ''}
`;
};
