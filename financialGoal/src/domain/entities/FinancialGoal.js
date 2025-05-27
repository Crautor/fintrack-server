export default class FinancialGoal {
  constructor({ financialGoalId, userId, value, limitDate, status, title, description }) {
    this.financialGoalId = financialGoalId;
    this.userId = userId;
    this.value = value;
    this.limitDate = limitDate;
    this.status = status;
    this.title = title;
    this.description = description;
  }
}
