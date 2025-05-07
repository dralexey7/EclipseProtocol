-- CreateEnum
CREATE TYPE "MalfunctionStatus" AS ENUM ('NOT_STARTED', 'FINISHED', 'IN_PROGRESS');

-- CreateEnum
CREATE TYPE "EventCause" AS ENUM ('SABOTAGE', 'ACCIDENT');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ALIVE', 'GHOST', 'INACTIVE');

-- CreateEnum
CREATE TYPE "Fraction" AS ENUM ('ALLIANCE', 'REBELS', 'CULT');

-- CreateEnum
CREATE TYPE "Skills" AS ENUM ('NAVIGATION', 'MILITARY', 'ENGINEERING', 'BUREAUCRACY', 'SERVICE');

-- CreateEnum
CREATE TYPE "InteractionType" AS ENUM ('POSITIVE', 'NEGATIVE', 'GHOST', 'CULT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "fraction" "Fraction" NOT NULL,
    "navigation_skill" INTEGER NOT NULL,
    "military_skill" INTEGER NOT NULL,
    "engineering_skill" INTEGER NOT NULL,
    "bureaucracy_skill" INTEGER NOT NULL,
    "service_skill" INTEGER NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'INACTIVE',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "System" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "durability" INTEGER NOT NULL,
    "section_id" INTEGER NOT NULL,

    CONSTRAINT "System_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interaction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "skill" "Skills" NOT NULL,
    "type" "InteractionType" NOT NULL,
    "malfunction" TEXT NOT NULL,
    "system_id" INTEGER NOT NULL,

    CONSTRAINT "Interaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventTemplate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cause" "EventCause" NOT NULL,

    CONSTRAINT "EventTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Malfunction" (
    "id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "interaction_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status" "MalfunctionStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Malfunction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "event_template_id" INTEGER NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventTemplateToInteraction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_EventTemplateToInteraction_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_EventTemplateToInteraction_B_index" ON "_EventTemplateToInteraction"("B");

-- AddForeignKey
ALTER TABLE "System" ADD CONSTRAINT "System_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "System"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Malfunction" ADD CONSTRAINT "Malfunction_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Malfunction" ADD CONSTRAINT "Malfunction_interaction_id_fkey" FOREIGN KEY ("interaction_id") REFERENCES "Interaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Malfunction" ADD CONSTRAINT "Malfunction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_event_template_id_fkey" FOREIGN KEY ("event_template_id") REFERENCES "EventTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventTemplateToInteraction" ADD CONSTRAINT "_EventTemplateToInteraction_A_fkey" FOREIGN KEY ("A") REFERENCES "EventTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventTemplateToInteraction" ADD CONSTRAINT "_EventTemplateToInteraction_B_fkey" FOREIGN KEY ("B") REFERENCES "Interaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
