import ExpenseService from '../../application/ExpenseService.js';

export const create = async (req, res, next) => {
  try {
    const data = await ExpenseService.create(req.body, req.user.userId);
    res.created(data);
  } catch (err) {
    next(err);
  }
};

export const findAll = async (req, res, next) => {
  try {
    const data = await ExpenseService.findAll(req.user.userId);
    res.hateoas_list(data, 1); // sem paginação ainda
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const item = await ExpenseService.findById(req.params.id, req.user.userId);
    if (!item) return res.not_found();
    res.hateoas_item(item);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await ExpenseService.update(req.params.id, req.body, req.user.userId);
    if (!updated) return res.not_found();
    res.no_content();
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const deleted = await ExpenseService.remove(req.params.id, req.user.userId);
    if (!deleted) return res.not_found();
    res.no_content();
  } catch (err) {
    next(err);
  }
};
