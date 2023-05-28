-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "Band" DROP CONSTRAINT "Band_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "Locale" DROP CONSTRAINT "Locale_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "Music" DROP CONSTRAINT "Music_resourceId_fkey";

-- AddForeignKey
ALTER TABLE "Locale" ADD CONSTRAINT "Locale_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Band" ADD CONSTRAINT "Band_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
