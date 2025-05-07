import httpStatus from 'http-status';
import { hateoas_item, hateoas_list } from '../../utils/hateoas.js';

export default (req, res, next) => {
  res.ok = (data) => {
    res.status(httpStatus.OK).json(data);
  };

  res.created = () => {
    res.status(httpStatus.CREATED).send();
  };

  res.no_content = () => {
    res.status(httpStatus.NO_CONTENT).send();
  };

  res.internal_server_error = (err) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  };

  res.forbidden = (err) => {
    res.status(httpStatus.FORBIDDEN).send(err);
  };

  res.not_found = () => {
    res.status(httpStatus.NOT_FOUND).send();
  };

  res.payment_required = (err) => {
    res.status(httpStatus.PAYMENT_REQUIRED).json(err);
  };

  res.unauthorized = () => {
    res.status(httpStatus.UNAUTHORIZED).send();
  };

  res.hateoas_item = (resource) => {
    const baseUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const item = hateoas_item(resource, baseUrl);
    res.status(httpStatus.OK).json(item);
  };

  res.hateoas_list = (resources, page) => {
    const baseUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const list = hateoas_list(resources, baseUrl);
    res.status(httpStatus.OK).json({
      page,
      items: list,
    });
  };

  next();
};
