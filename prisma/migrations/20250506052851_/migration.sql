/*
  Warnings:

  - You are about to drop the `FacebookPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FacebookPost" DROP CONSTRAINT "FacebookPost_facebook_fanpage_id_fkey";

-- DropTable
DROP TABLE "FacebookPost";

-- CreateTable
CREATE TABLE "facebook_posts" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "facebook_fanpage_id" TEXT NOT NULL,
    "posted_at" TIMESTAMP(3) NOT NULL,
    "likes" INTEGER NOT NULL,
    "comments" INTEGER NOT NULL,
    "shares" INTEGER NOT NULL,
    "status" TEXT,
    "post_avatar_url" TEXT DEFAULT '',
    "schedule" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "facebook_posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "facebook_posts" ADD CONSTRAINT "facebook_posts_facebook_fanpage_id_fkey" FOREIGN KEY ("facebook_fanpage_id") REFERENCES "facebook_fan_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
