import CategoryService from '../../application/CategoryService.js';

export const create = async (req, res, next) => {
  try {
    const data = await CategoryService.create(req.body);
    res.created(data);
  } catch (err) {
    next(err);
  }
};

export const findAll = async (req, res, next) => {
  try {
    const data = await CategoryService.findAll();
    res.hateoas_list(data, 1);
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const item = await CategoryService.findById(req.params.id);
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
