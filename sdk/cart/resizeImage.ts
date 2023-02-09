/**
 * VTEX resizeImage function
 *
 * The item image returned in the orderForm is 55x55px by default, which results
 * in a pixelated thumb in the cart.
 *
 * This resizeImage function should increase the image to 100px width and auto height.
 *
 * TODO: Make width value customizable.
 */

const baseUrlRegex = new RegExp(/.+ids\/(\d+)(?:-(\d+)-(\d+)|)\//);
const sizeRegex = new RegExp(/-(\d+)-(\d+)/);

const cleanImageUrl = (imageUrl: string) => {
  let resizedImageUrl = imageUrl;
  const result = baseUrlRegex.exec(imageUrl);
  if (result && result.length > 0) {
    if (
      result.length === 4 &&
      result[2] !== undefined &&
      result[3] !== undefined
    ) {
      resizedImageUrl = result[0].replace(sizeRegex, "");
    } else {
      resizedImageUrl = result[0];
    }
  }
  return resizedImageUrl;
};

const changeImageUrlSize = (imageUrl: string) => {
  const resizedImageUrl = imageUrl.slice(0, -1); // Remove last "/"
  return `${resizedImageUrl}-100-auto`;
};

export default function resizeImage(imageUrl: string) {
  return changeImageUrlSize(cleanImageUrl(imageUrl));
}
