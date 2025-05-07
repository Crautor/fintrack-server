export default class FinancialGoal {
  constructor({ financialGoalId, userId, value, limitDate, status }) {
    this.financialGoalId = financialGoalId;
    this.userId = userId;
    this.value = value;
    this.limitDate = limitDate;
    this.status = status;
  }
}
