import {PrismaClient} from "@prisma/client"
import musics from "./fixtures/musics.json"

const prisma = new PrismaClient()
prisma.user
  .create({
    data: {
      name: "hoge1",
      email: "hoge1@example.com",
    },
  })
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
prisma.music
  .createMany({data: musics})
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
