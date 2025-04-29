/*
  Warnings:

  - You are about to drop the column `page_id` on the `facebook_connections` table. All the data in the column will be lost.
  - Added the required column `fan_count` to the `facebook_fan_pages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "facebook_connections" DROP COLUMN "page_id";

-- AlterTable
ALTER TABLE "facebook_fan_pages" ADD COLUMN     "fan_count" INTEGER NOT NULL;
