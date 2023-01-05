import type { StreamingLink } from "@prisma/client";

export const getChannelImage = (link: StreamingLink) =>
  link.spotify || link.youtube || null;

export const getContentImage = (link: StreamingLink) =>
  link.spotify || link.itunes || link.youtube || null;
