-- AlterTable
ALTER TABLE "facebook_post_draft" ADD COLUMN     "page_name" TEXT DEFAULT '';

-- AlterTable
ALTER TABLE "facebook_posts" ADD COLUMN     "page_name" TEXT DEFAULT '';
