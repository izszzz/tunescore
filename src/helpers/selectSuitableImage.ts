import type { StreamingLink } from "@prisma/client";

const selectSuitableStreamingImage = (link: StreamingLink) =>
  link.spotify || link.itunes || link.youtube || null;

export { selectSuitableStreamingImage };
