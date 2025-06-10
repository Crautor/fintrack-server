/*
  Warnings:

  - Added the required column `icon` to the `FinancialGoal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FinancialGoal` ADD COLUMN `icon` INTEGER NOT NULL;
