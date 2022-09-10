/*
  Warnings:

  - Added the required column `titleCard` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cards" ADD COLUMN     "titleCard" TEXT NOT NULL;
