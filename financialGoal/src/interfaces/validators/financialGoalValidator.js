import yup from 'yup';

export default yup.object().shape({
  userId: yup.string().required('User ID is required'),
  value: yup.number().positive('Must be positive (value)').required('Required (value)'),
  limitDate: yup.date().required('Required (limitDate)'),
  status: yup
    .string()
    .oneOf(['Aberto', 'Em_Andamento', 'Expirado', 'Concluido'], 'Invalid (status)')
    .required('Required (status)'),
  title: yup.string().max(100, 'Max length is 100 characters (title)').required('Required (title)'),
});
