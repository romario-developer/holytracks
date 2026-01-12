-- CreateTable
CREATE TABLE "EventLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "ministryId" TEXT NOT NULL,
    "setlistId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "payloadJson" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EventLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EventLog_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EventLog_setlistId_fkey" FOREIGN KEY ("setlistId") REFERENCES "Setlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
