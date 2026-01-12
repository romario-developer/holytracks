-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Ministry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ownerUserId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Ministry_ownerUserId_fkey" FOREIGN KEY ("ownerUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MinistryMember" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ministryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'MEMBER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MinistryMember_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MinistryMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "liturgicalTags" TEXT NOT NULL,
    "bpm" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "timeSignature" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "season" TEXT,
    "parts" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Arrangement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "songId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "defaultKey" TEXT NOT NULL,
    "defaultBpm" INTEGER NOT NULL,
    "structureJson" TEXT NOT NULL,
    "stemsJson" TEXT NOT NULL,
    "audioDemoUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Arrangement_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Setlist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ministryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATETIME,
    "liturgyType" TEXT,
    "season" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    CONSTRAINT "Setlist_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Setlist_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SetlistItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "setlistId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "part" TEXT NOT NULL,
    "arrangementId" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SetlistItem_setlistId_fkey" FOREIGN KEY ("setlistId") REFERENCES "Setlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SetlistItem_arrangementId_fkey" FOREIGN KEY ("arrangementId") REFERENCES "Arrangement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
