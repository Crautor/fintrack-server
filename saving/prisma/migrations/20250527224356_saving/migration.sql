-- CreateTable
CREATE TABLE `Saving` (
    `savingId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `value` DOUBLE NOT NULL,
    `financialGoalId` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,

    PRIMARY KEY (`savingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
