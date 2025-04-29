/*
  Warnings:

  - The primary key for the `facebook_page_insights` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "facebook_page_insights" DROP CONSTRAINT "facebook_page_insights_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "facebook_page_insights_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "facebook_page_insights_id_seq";
