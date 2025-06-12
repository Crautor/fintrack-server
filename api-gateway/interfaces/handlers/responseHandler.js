import httpStatus from 'http-status';

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

  res.bad_request = (err) => {
    res.status(httpStatus.BAD_REQUEST).json({
      message: err || 'Bad Request',
    });
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

  next();
};
