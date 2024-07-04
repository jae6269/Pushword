/*
  Warnings:

  - You are about to drop the `channal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `keyword` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `channal` DROP FOREIGN KEY `Channal_userId_fkey`;

-- DropForeignKey
ALTER TABLE `keyword` DROP FOREIGN KEY `Keyword_channelId_fkey`;

-- DropTable
DROP TABLE `channal`;

-- DropTable
DROP TABLE `keyword`;

-- DropTable
DROP TABLE `user`;
