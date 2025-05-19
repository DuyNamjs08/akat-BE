-- AlterTable
ALTER TABLE "facebook_post_draft" ADD COLUMN     "post_video_url" TEXT[] DEFAULT ARRAY[]::TEXT[];
