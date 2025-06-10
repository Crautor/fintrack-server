import CategoryService from '../../application/CategoryService.js';

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
    const { email, name, icon } = req.body;
    if (!email) {
      return res.bad_request('Email is required');
    }
    const usuario = await buscarUsuario(email);
    if (!usuario) {
      return res.not_found('Usuário não encontrado');
    }
    const data = { userId: usuario.id, name, icon };
    const category = await CategoryService.create(data);
    res.created(category);
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
    const data = await CategoryService.findAll(usuario.id);
    res.hateoas_list(data, 1);
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    if (!email) {
      return res.bad_request('Email is required');
    }
    if (!id) {
      return res.bad_request('ID is required');
    }
    const usuario = await buscarUsuario(email);
    if (!usuario) {
      return res.not_found('Usuário não encontrado');
    }
    const item = await CategoryService.findById({ id: req.params.id, userId: usuario.id });
    if (!item) return res.not_found();
    res.hateoas_item(item);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await CategoryService.update(req.params.id, req.body);
    if (!updated) return res.not_found();
    res.no_content();
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const deleted = await CategoryService.remove(req.params.id);
    if (!deleted) return res.not_found();
    res.no_content();
  } catch (err) {
    next(err);
  }
};
