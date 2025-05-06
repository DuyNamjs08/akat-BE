-- CreateTable
CREATE TABLE "facebook_post_draft" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "facebook_fanpage_id" TEXT NOT NULL,
    "posted_at" TIMESTAMP(3) NOT NULL,
    "likes" INTEGER NOT NULL,
    "comments" INTEGER NOT NULL,
    "shares" INTEGER NOT NULL,
    "status" TEXT,
    "post_avatar_url" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "schedule" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "facebook_post_draft_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "facebook_post_draft" ADD CONSTRAINT "facebook_post_draft_facebook_fanpage_id_fkey" FOREIGN KEY ("facebook_fanpage_id") REFERENCES "facebook_fan_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
