import { Prisma } from "@prisma/client";

export const validator = Prisma.validator<Prisma.MusicUpdateArgs>(),
  selectAlbums = (id: string | undefined) => ({
    data: { music: { update: { albums: { connect: { id } } } } },
  }),
  removeAlbums = (id: string | undefined) => ({
    data: { music: { update: { albums: { disconnect: { id } } } } },
  }),
  destroyParticipations = (id: string) => ({
    data: { music: { update: { participations: { delete: { id } } } } },
  }),
  createParticipations = (id: string) => ({
    data: {
      music: {
        update: { participations: { create: { artist: { connect: { id } } } } },
      },
    },
  });
