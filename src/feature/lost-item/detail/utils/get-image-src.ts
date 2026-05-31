export function getImageSrc(
  image?: string
) {
  if (!image) {
    return "/images/fallback-image.png";
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
    return image;
  }

  if (image.startsWith("/")) {
    return image;
  }

  return "/images/fallback-image.png";
}