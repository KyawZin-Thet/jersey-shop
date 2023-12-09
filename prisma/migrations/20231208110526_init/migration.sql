-- CreateEnum
CREATE TYPE "ORDERSTATUS" AS ENUM ('PENDING', 'INPROCESS', 'COMPLETE');

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "township" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NationalTeams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "assetUrl" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NationalTeams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClubTeams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "assetUrl" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClubTeams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JerseyTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "assetUrl" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JerseyTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClubJerseyTypes" (
    "id" SERIAL NOT NULL,
    "clubId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClubJerseyTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NationalJerseyTypes" (
    "id" SERIAL NOT NULL,
    "NationalId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NationalJerseyTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Addons" (
    "id" SERIAL NOT NULL,
    "gender" TEXT,
    "kits" TEXT,
    "number" INTEGER,
    "ShirtOrShort" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Addons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "clubTeamsId" INTEGER,
    "nationalTeamsId" INTEGER,
    "addonId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "orderSeq" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "status" "ORDERSTATUS" NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClubJerseyTypes" ADD CONSTRAINT "ClubJerseyTypes_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "ClubTeams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NationalJerseyTypes" ADD CONSTRAINT "NationalJerseyTypes_NationalId_fkey" FOREIGN KEY ("NationalId") REFERENCES "NationalTeams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_addonId_fkey" FOREIGN KEY ("addonId") REFERENCES "Addons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clubTeamsId_fkey" FOREIGN KEY ("clubTeamsId") REFERENCES "ClubTeams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_nationalTeamsId_fkey" FOREIGN KEY ("nationalTeamsId") REFERENCES "NationalTeams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
