-- CreateTable
CREATE TABLE `Transaction` (
    `transactionId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `value` DOUBLE NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `transactionDate` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NULL,
    `recurrence` BOOLEAN NOT NULL,
    `type` ENUM('Income', 'Expense') NOT NULL,

    PRIMARY KEY (`transactionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
