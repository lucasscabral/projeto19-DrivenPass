-- CreateEnum
CREATE TYPE "typesCard" AS ENUM ('credito', 'debito', 'ambos');

-- CreateTable
CREATE TABLE "Secure_notes" (
    "id" SERIAL NOT NULL,
    "noteTitle" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Secure_notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "numberCard" TEXT NOT NULL,
    "printedName" TEXT NOT NULL,
    "cvc" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL,
    "type" "typesCard" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wifi" (
    "id" SERIAL NOT NULL,
    "wifiTitle" TEXT NOT NULL,
    "wiifiName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Wifi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Secure_notes" ADD CONSTRAINT "Secure_notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wifi" ADD CONSTRAINT "Wifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
