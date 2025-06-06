import CategoryService from '../../application/CategoryService.js';
import { hateoas_item, hateoas_list } from '../../utils/hateoas.js';

const baseUrl = '/api/category';

export const listCategory = async (req, res, next) => {
  const category = await CategoryService.findAll();
  res.json(hateoas_list(category, baseUrl));
};

export const getCategory = async (req, res, next) => {
  const category = await CategoryService.findById(req.params.id);
  if (!category) return res.not_found().json({ error: 'Not found' });
  res.json(hateoas_item(category, baseUrl));
};

export const createCategory = async (req, res, next) => {
  const category = await CategoryService.create(req.body);
  res.created().json(hateoas_item(category, baseUrl));
};

export const updateCategory = async (req, res, next) => {
  const category = await CategoryService.update(req.params.id, req.body);
  res.json(hateoas_item(category, baseUrl));
};

export const deleteCategory = async (req, res, next) => {
  await CategoryService.remove(req.params.id);
  res.no_content().end();
};
