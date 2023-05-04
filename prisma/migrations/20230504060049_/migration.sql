-- DropForeignKey
ALTER TABLE "Pull" DROP CONSTRAINT "Pull_userId_fkey";

-- AlterTable
ALTER TABLE "Pull" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Pull" ADD CONSTRAINT "Pull_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
