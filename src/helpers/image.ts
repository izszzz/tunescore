import type { ImageSize, StreamingLink } from "@prisma/client";
import * as R from "remeda";

export const getImage = (
  streamingLink: StreamingLink | null | undefined,
  size: number,
  options: {
    square?: boolean;
    channel?: boolean;
  } = { square: false, channel: false }
) => {
  if (!streamingLink) return null;
  const images = R.pipe(
    streamingLink,
    R.toPairs,
    R.map(([key, val]) => {
      if (val?.image?.size) return { key, size: val?.image?.size };
    }),
    R.compact
  );
  const result = R.pipe(
    images,
    R.map(({ key, size }) => {
      if (R.equals(key, "itunes") && !options.channel)
        return shapeImageSize(size, [30, 60, 100]);
      if (R.equals(key, "youtube")) {
        if (options.channel) return shapeImageSize(size, [88, 240, 800]);
        if (!options.square) return shapeImageSize(size, [90, 180, 360]);
      }
      if (R.equals(key, "spotify")) return shapeImageSize(size, [64, 300, 640]);
    }),
    R.flatten(),
    R.compact,
    R.sortBy((val) => val.size),
    R.find((val) => val.size >= size)
  );
  return result?.image;
};

const shapeImageSize = (size: ImageSize, sizes: number[]) =>
  R.pipe(
    size,
    R.toPairs,
    R.map(([key, image]) => {
      if (!sizes[0] || !sizes[1] || !sizes[2]) return;
      if (image) {
        if (R.equals(key, "small")) return { size: sizes[0], image };
        if (R.equals(key, "medium")) return { size: sizes[1], image };
        if (R.equals(key, "large")) return { size: sizes[2], image };
      }
    }),
    R.compact
  );
