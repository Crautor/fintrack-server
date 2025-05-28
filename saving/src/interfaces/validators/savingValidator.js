import yup from 'yup';

export default yup.object().shape({
  userId: yup.string().required('Required (userId)'),
  value: yup.number().required('Required (value)').positive('Must be positive'),
  financialGoalId: yup.string().required('Required (financialGoalId)'),
});
