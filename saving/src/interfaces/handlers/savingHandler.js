import SavingService from '../../application/SavingService.js';

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
    const { email, value, financialGoalId, title, description, createdAt } = req.body;
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
      financialGoalId,
      description,
      title,
      createdAt,
    };
    const response = await SavingService.create(data);
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
    const data = await SavingService.findAll(usuario.id);
    res.hateoas_list(data, 1); // sem paginação ainda
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
    const item = await SavingService.findById({ id: req.params.id, userId: usuario.id });
    if (!item) return res.not_found();
    res.hateoas_item(item);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await SavingService.update(req.params.id, req.body);
    if (!updated) return res.not_found();
    res.no_content();
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const deleted = await SavingService.remove(req.params.id);
    if (!deleted) return res.not_found();
    res.no_content();
  } catch (err) {
    next(err);
  }
};

export const findByFinancialGoal = async (req, res, next) => {
  try {
    const { email, financialGoalId } = req.query;
    if (!email) {
      return res.bad_request('Email is required');
    }
    const usuario = await buscarUsuario(email);
    if (!usuario) {
      return res.not_found('Usuário não encontrado');
    }
    const item = await SavingService.findByFinancialGoal({
      userId: usuario.id,
      financialGoalId: financialGoalId,
    });
    if (!item) return res.not_found();
    res.hateoas_item(item);
  } catch (err) {
    next(err);
  }
};

export const findByCreatedAt = async (req, res, next) => {
  try {
    const { email, createdAt } = req.query;
    if (!email) {
      return res.bad_request('Email is required');
    }
    const usuario = await buscarUsuario(email);
    if (!usuario) {
      return res.not_found('Usuário não encontrado');
    }
    const item = await SavingService.findByCreatedAt({
      userId: usuario.id,
      createdAt: new Date(createdAt),
    });
    if (!item) return res.not_found();
    res.hateoas_item(item);
  } catch (err) {
    next(err);
  }
};
