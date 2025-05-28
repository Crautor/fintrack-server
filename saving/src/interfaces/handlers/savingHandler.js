import SavingService from '../../application/SavingService.js';

export const create = async (req, res, next) => {
  try {
    const data = await SavingService.create(req.body);
    res.created(data);
  } catch (err) {
    next(err);
  }
};

export const findAll = async (req, res, next) => {
  try {
    const data = await SavingService.findAll();
    res.hateoas_list(data, 1); // sem paginação ainda
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const item = await SavingService.findById(req.params.id);
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
