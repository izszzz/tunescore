-- CreateEnum
CREATE TYPE "UserRoleType" AS ENUM ('Admin', 'User');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRoleType" DEFAULT 'User';
