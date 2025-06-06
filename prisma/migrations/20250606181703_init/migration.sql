-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "headline" TEXT NOT NULL,
    "subheading" TEXT,
    "image" TEXT NOT NULL,
    "altTextImg" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
