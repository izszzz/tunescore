import React from "react";
import type { ImgHTMLAttributes } from "react";

const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} style={{ borderRadius: 5 }} />;
};

export default Image;
