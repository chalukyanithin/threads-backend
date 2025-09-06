/*
  Warnings:

  - You are about to drop the `threads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."threads";

-- CreateTable
CREATE TABLE "public"."posts" (
    "id" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
