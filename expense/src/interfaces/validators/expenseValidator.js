import yup from 'yup';

export default yup.object().shape({
  userId: yup.string().required('Required (userId)'),
  value: yup.number().positive('Must be positive (value)').required('Required (value)'),
  categoryId: yup.string().required('Required (categoryId)'),
  paymentMethodId: yup.string().required('Required (paymentMethodId)'),
  expenseDate: yup.date().required('Required (expenseDate)'),
});
