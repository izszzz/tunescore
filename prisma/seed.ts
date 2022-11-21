import {PrismaClient} from "@prisma/client"
import musics from "./fixtures/musics"
import artists from "./fixtures/artists"
import bands from "./fixtures/bands"
import lingtositesigure from "./fixtures/LingtositeSigure"

const prisma = new PrismaClient()
;(async () => {
  await prisma.music
    .createMany({data: musics})
    .catch(e => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })

  await prisma.artist
    .createMany({data: artists})
    .catch(e => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })

  await prisma.band
    .createMany({data: bands})
    .catch(e => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })

  await prisma.band
    .create({data: lingtositesigure})
    .catch(e => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
})()
