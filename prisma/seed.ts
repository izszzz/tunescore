import {PrismaClient} from "@prisma/client"
import musics from "./fixtures/musics"
import artists from "./fixtures/artists"
import bands from "./fixtures/bands"

const prisma = new PrismaClient()
prisma.music
  .createMany({data: musics})
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

prisma.artist
  .createMany({data: artists})
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

prisma.band
  .createMany({data: bands})
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
