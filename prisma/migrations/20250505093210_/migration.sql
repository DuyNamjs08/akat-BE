/*
  Warnings:

  - The `fan_count` column on the `facebook_connections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `follower_count` column on the `facebook_connections` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "facebook_connections" DROP COLUMN "fan_count",
ADD COLUMN     "fan_count" INTEGER,
DROP COLUMN "follower_count",
ADD COLUMN     "follower_count" INTEGER;
