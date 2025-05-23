-- CreateTable
CREATE TABLE `Expense` (
    `expenseId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `value` DOUBLE NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `paymentMethodId` INTEGER NOT NULL,
    `expenseDate` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`expenseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
