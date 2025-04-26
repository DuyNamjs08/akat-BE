-- AlterTable
ALTER TABLE "tokens" ALTER COLUMN "access_token" SET NOT NULL,
ALTER COLUMN "access_token" SET DEFAULT '',
ALTER COLUMN "access_token" SET DATA TYPE TEXT,
ALTER COLUMN "refresh_token" SET NOT NULL,
ALTER COLUMN "refresh_token" SET DEFAULT '',
ALTER COLUMN "refresh_token" SET DATA TYPE TEXT;
