-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('Completed', 'InProgress');

-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "TodoStatus" NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
