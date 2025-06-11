import yup from 'yup';

export default yup.object().shape({
  email: yup.string().email("Email é inválido"),
  value: yup.number().required('Required (value)').positive('Must be positive'),
  financialGoalId: yup.string().required('Required (financialGoalId)'),
});
