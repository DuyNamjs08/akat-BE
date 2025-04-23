-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "instance_id" INTEGER,
    "aud" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email_confirmed_at" TIMESTAMP(3),
    "invited_at" TIMESTAMP(3),
    "confirmation_token" TEXT,
    "confirmation_sent_at" TIMESTAMP(3),
    "recovery_token" TEXT,
    "recovery_sent_at" TIMESTAMP(3),
    "email_change_token_new" TEXT,
    "email_change" TEXT,
    "email_change_sent_at" TIMESTAMP(3),
    "last_sign_in_at" TIMESTAMP(3),
    "raw_app_meta_data" JSONB,
    "raw_user_meta_data" JSONB,
    "is_super_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "phone" TEXT,
    "phone_confirmed_at" TIMESTAMP(3),
    "phone_change" TEXT,
    "phone_change_token" TEXT,
    "phone_change_sent_at" TIMESTAMP(3),
    "confirmed_at" TIMESTAMP(3),
    "email_change_token_current" TEXT,
    "email_change_confirm_status" INTEGER,
    "banned_until" TIMESTAMP(3),
    "reauthentication_token" TEXT,
    "reauthentication_sent_at" TIMESTAMP(3),
    "is_sso_user" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,
    "role_id" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "user_token" TEXT[],
    "access_token" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facebook_fan_pages" (
    "id" TEXT NOT NULL,
    "page_name" TEXT NOT NULL,
    "page_category" TEXT NOT NULL,
    "page_url" TEXT NOT NULL,
    "page_avatar_url" TEXT NOT NULL,
    "follower_count" INTEGER NOT NULL,
    "page_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "connection_id" TEXT NOT NULL,

    CONSTRAINT "facebook_fan_pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facebook_connections" (
    "id" TEXT NOT NULL,
    "page_id" TEXT NOT NULL DEFAULT '',
    "access_token" TEXT[],
    "status" TEXT NOT NULL DEFAULT '',
    "permissions" TEXT[],
    "last_sync" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "facebook_fanpage_id" TEXT NOT NULL,
    "role_id" TEXT,

    CONSTRAINT "facebook_connections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facebook_page_insights" (
    "id" SERIAL NOT NULL,
    "posts" INTEGER NOT NULL,
    "approach" INTEGER NOT NULL,
    "interactions" INTEGER NOT NULL,
    "follows" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "image_url" TEXT,
    "category" TEXT,
    "status" TEXT,
    "user_id" TEXT,
    "facebook_fanpage_id" TEXT NOT NULL,

    CONSTRAINT "facebook_page_insights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "ad_account_rentals" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "account_id" INTEGER NOT NULL,

    CONSTRAINT "ad_account_rentals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system_ad_accounts" (
    "id" SERIAL NOT NULL,
    "account_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "daily_budget" DOUBLE PRECISION NOT NULL,
    "total_spent" DOUBLE PRECISION NOT NULL,
    "available" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "system_ad_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "facebook_fan_pages_connection_id_key" ON "facebook_fan_pages"("connection_id");

-- CreateIndex
CREATE UNIQUE INDEX "facebook_connections_facebook_fanpage_id_key" ON "facebook_connections"("facebook_fanpage_id");

-- CreateIndex
CREATE UNIQUE INDEX "facebook_page_insights_facebook_fanpage_id_key" ON "facebook_page_insights"("facebook_fanpage_id");

-- CreateIndex
CREATE UNIQUE INDEX "system_ad_accounts_account_id_key" ON "system_ad_accounts"("account_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook_connections" ADD CONSTRAINT "facebook_connections_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook_connections" ADD CONSTRAINT "facebook_connections_facebook_fanpage_id_fkey" FOREIGN KEY ("facebook_fanpage_id") REFERENCES "facebook_fan_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook_page_insights" ADD CONSTRAINT "facebook_page_insights_facebook_fanpage_id_fkey" FOREIGN KEY ("facebook_fanpage_id") REFERENCES "facebook_fan_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ad_account_rentals" ADD CONSTRAINT "ad_account_rentals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ad_account_rentals" ADD CONSTRAINT "ad_account_rentals_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "system_ad_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
