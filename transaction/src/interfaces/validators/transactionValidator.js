import yup from 'yup';

export default yup.object().shape({
  email: yup.string().email('Formato de e-mail inválido'),
  value: yup.number().required('Required (value)').positive('Must be positive'),
  categoryId: yup.string().required('Required (categoryId)'),
  transactionDate: yup.date().required('Required (transactionDate)'),
  recurrence: yup.boolean().required('Required (recurrence)'),
  type: yup.string().oneOf(['Income', 'Expense']).required(),
});
