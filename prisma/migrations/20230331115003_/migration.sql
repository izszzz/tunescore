/*
  Warnings:

  - You are about to drop the column `unionId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `unionId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `unionId` on the `Report` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "comment_issue_fk";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "comment_pull_fk";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "notification_bookmarked";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "notification_commented";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "notification_followed";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "report_music";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "report_user";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "unionId",
ADD COLUMN     "issueId" TEXT,
ADD COLUMN     "pullId" TEXT;

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "unionId",
ADD COLUMN     "bookmarkId" TEXT,
ADD COLUMN     "commentedId" TEXT,
ADD COLUMN     "followedId" TEXT;

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "unionId",
ADD COLUMN     "reportedMusicId" TEXT,
ADD COLUMN     "reportedUserId" TEXT;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_pullId_fkey" FOREIGN KEY ("pullId") REFERENCES "Pull"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_bookmarkId_fkey" FOREIGN KEY ("bookmarkId") REFERENCES "Bookmark"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "Follow"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_commentedId_fkey" FOREIGN KEY ("commentedId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reportedUserId_fkey" FOREIGN KEY ("reportedUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reportedMusicId_fkey" FOREIGN KEY ("reportedMusicId") REFERENCES "Music"("id") ON DELETE SET NULL ON UPDATE CASCADE;
