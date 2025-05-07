import yup from 'yup';

export default yup.object().shape({
  value: yup.number().positive('Must be positive (value)').required('Required (value)'),
  limitDate: yup.date().required('Required (limitDate)'),
  status: yup.string().oneOf(['pending', 'completed', 'cancelled'], 'Invalid (status)').required('Required (status)'),
});
