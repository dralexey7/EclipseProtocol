/*
  Warnings:

  - Added the required column `system_id` to the `Malfunction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "InteractionType" ADD VALUE 'SUPPORT';

-- AlterTable
ALTER TABLE "Interaction" ALTER COLUMN "skill" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Malfunction" ADD COLUMN     "system_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "skill" "Skills" NOT NULL;

-- AddForeignKey
ALTER TABLE "Malfunction" ADD CONSTRAINT "Malfunction_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "System"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
