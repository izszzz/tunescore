import type { Link } from "@prisma/client";
import * as R from "remeda";
import { isNonEmpty } from "ts-array-length";

export const getImage = (
  links: Link[],
  size: number,
  options: {
    square?: boolean;
    channel?: boolean;
  } = { square: false, channel: false }
) => {
  if (!isNonEmpty(links)) return null;
  const result = R.pipe(
    links,
    R.map((link) => {
      const { type } = link;
      if (R.equals(type, "iTunes") && !options.channel)
        return shapeImageSize(link, [30, 60, 100]);
      if (R.equals(type, "Youtube")) {
        if (options.channel) return shapeImageSize(link, [88, 240, 800]);
        if (!options.square) return shapeImageSize(link, [90, 180, 360]);
      }
      if (R.equals(type, "Spotify")) {
        if (options.channel) return shapeImageSize(link, [160, 320, 640]);
        return shapeImageSize(link, [64, 300, 640]);
      }
    }),
    R.flatten(),
    R.compact,
    R.sortBy((val) => val.size),
    R.find((val) => val.size >= size)
  );
  return result?.image;
};

const shapeImageSize = ({ small, medium, large }: Link, sizes: number[]) =>
  R.pipe(
    { small, medium, large },
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
