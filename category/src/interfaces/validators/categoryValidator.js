import yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Required (name)'),
  icon: yup.string().required('Required (icon)'),
  email: yup.string().email('Formato de e-mail inválido')
});
