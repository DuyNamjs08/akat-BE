-- CreateTable
CREATE TABLE "moderation_settings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'moderationConfig',
    "description" TEXT NOT NULL DEFAULT 'Cấu hình kiểm duyệt nội dung',
    "auto_moderation" BOOLEAN NOT NULL DEFAULT false,
    "hide_post_violations" BOOLEAN NOT NULL DEFAULT false,
    "edit_minor_content" BOOLEAN NOT NULL DEFAULT false,
    "notify_admin" BOOLEAN NOT NULL DEFAULT false,
    "admin_email" TEXT DEFAULT '',
    "threshold" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "moderation_settings_pkey" PRIMARY KEY ("id")
);
