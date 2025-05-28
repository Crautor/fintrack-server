import SavingService from '../../application/SavingService.js';
import { hateoas_item, hateoas_list } from '../../utils/hateoas.js';

const baseUrl = '/api/savings';

export const listSavings = async (req, res, next) => {
  const savings = await SavingService.findAll();
  res.json(hateoas_list(savings, baseUrl));
};

export const getSaving = async (req, res, next) => {
  const saving = await SavingService.findById(req.params.id);
  if (!saving) return res.not_found().json({ error: 'Not found' });
  res.json(hateoas_item(saving, baseUrl));
};

export const createSaving = async (req, res, next) => {
  const saving = await SavingService.create(req.body);
  res.created().json(hateoas_item(saving, baseUrl));
};

export const updateSaving = async (req, res, next) => {
  const saving = await SavingService.update(req.params.id, req.body);
  res.json(hateoas_item(saving, baseUrl));
};

export const deleteSaving = async (req, res, next) => {
  await SavingService.remove(req.params.id);
  res.no_content().end();
};
