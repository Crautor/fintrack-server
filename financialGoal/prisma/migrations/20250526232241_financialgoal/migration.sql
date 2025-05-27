-- CreateTable
CREATE TABLE `FinancialGoal` (
    `financialGoalId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `value` DOUBLE NOT NULL,
    `limitDate` DATETIME(3) NOT NULL,
    `status` ENUM('Aberto', 'Em_Andamento', 'Expirado', 'Concluido') NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`financialGoalId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
