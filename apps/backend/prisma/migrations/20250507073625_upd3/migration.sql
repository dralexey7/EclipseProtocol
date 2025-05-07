/*
  Warnings:

  - You are about to drop the column `section_id` on the `System` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Section` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section_code` to the `System` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SectionCode" AS ENUM ('NAVIGATION', 'INGENEER', 'MILITARY', 'ARCHIVE', 'CULINAR');

-- DropForeignKey
ALTER TABLE "System" DROP CONSTRAINT "System_section_id_fkey";

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "code" "SectionCode" NOT NULL;

-- AlterTable
ALTER TABLE "System" DROP COLUMN "section_id",
ADD COLUMN     "section_code" "SectionCode" NOT NULL,
ALTER COLUMN "durability" SET DEFAULT 100;

-- CreateIndex
CREATE UNIQUE INDEX "Section_code_key" ON "Section"("code");

-- AddForeignKey
ALTER TABLE "System" ADD CONSTRAINT "System_section_code_fkey" FOREIGN KEY ("section_code") REFERENCES "Section"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
