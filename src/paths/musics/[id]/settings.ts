import { Prisma } from "@prisma/client";

export const validator = Prisma.validator<Prisma.MusicUpdateArgs>(),
  selectAlbums = (id: string | undefined) => ({
    data: { albums: { connect: { id } } },
  }),
  removeAlbums = (id: string | undefined) => ({
    data: { albums: { disconnect: { id } } },
  }),
  destroyParticipations = (id: string) => ({
    data: { participations: { delete: { id } } },
  }),
  createParticipations = (id: string) => ({
    data: { participations: { create: { artist: { connect: { id } } } } },
  });
