-- DropIndex
DROP INDEX "facebook_fan_pages_connection_id_key";

-- AlterTable
ALTER TABLE "facebook_fan_pages" ALTER COLUMN "connection_id" DROP NOT NULL;
