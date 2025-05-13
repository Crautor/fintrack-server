import PaymentMethodService from "../../application/PaymentMethodService";
import { hateoas_item, hateoas_list } from "../../utils/hateoas.js";

const baseUrl = "/api/payment-methods";

export const listPaymentMethods = async (req, res, next) => {
  const paymentMethods = await PaymentMethodService.getAll();
  res.json(hateoas_list(paymentMethods, baseUrl));
};

export const getPaymentMethod = async (req, res, next) => {
  const paymentMethod = await PaymentMethodService.getById(req.params.id);
  if (!paymentMethod) return res.not_found.json({ error: "Not found" });
  res.json(hateoas_item(paymentMethod, baseUrl));
};

export const createPaymentMethod = async (req, res, next) => {
  const paymentMethod = await PaymentMethodService.create(req.body);
  res.created().json(hateoas_item(paymentMethod, baseUrl));
};

export const updatePaymentMethod = async (req, res, next) => {
	const paymentMethod = await PaymentMethodService.update(
		req.params.id,
		req.body
	);
	res.json(hateoas_item(paymentMethod, baseUrl));
};

export const deletePaymentMethod = async (req, res, next) => {
	await PaymentMethodService.delete(req.params.id);
	res.no_content().end();
};
