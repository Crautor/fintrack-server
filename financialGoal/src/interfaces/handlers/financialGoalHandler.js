import financialGoalService from '../../application/FinancialGoalService.js';

async function buscarUsuario(email) {
  try {
    const response = await fetch(`http://api-gateway:3000/api/auth/usuario/${email}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return null;
  }
}

export const create = async (req, res, next) => {
  try {
    const { email, value, limitDate, status, title, description, icon } = req.body;
    if (!email) {
      return res.bad_request('Email is required');
    }
    const usuario = await buscarUsuario(email);
    if (!usuario) {
      return res.not_found('Usuário não encontrado');
    }
    const data = {
      userId: usuario.id,
      value,
      limitDate,
      status,
      title,
      description,
      icon,
    }
    const response = await financialGoalService.create(data);
    res.created(response);
  } catch (err) {
    next(err);
  }
};

export const findAll = async (req, res, next) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.bad_request('Email is required');
    }
    const usuario = await buscarUsuario(email);
    if (!usuario) {
      return res.not_found('Usuário não encontrado');
    }
    const data = await financialGoalService.findAll(usuario.id);
    res.hateoas_list(data, 1);
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.bad_request('Email is required');
    }
    const usuario = await buscarUsuario(email);
    if (!usuario) {
      return res.not_found('Usuário não encontrado');
    }
    const item = await financialGoalService.findById({id:req.params.id, userId:usuario.id});
    if (!item) return res.not_found();
    res.hateoas_item(item);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await financialGoalService.update(req.params.id, req.body);
    if (!updated) return res.not_found();
    res.no_content();
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const deleted = await financialGoalService.remove(req.params.id);
    if (!deleted) return res.not_found();
    res.no_content();
  } catch (err) {
    next(err);
  }
};
