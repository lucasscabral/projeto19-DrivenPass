/*
  Warnings:

  - You are about to drop the column `wiifiName` on the `Wifi` table. All the data in the column will be lost.
  - Added the required column `wifiName` to the `Wifi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wifi" DROP COLUMN "wiifiName",
ADD COLUMN     "wifiName" TEXT NOT NULL;
