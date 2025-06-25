const notificationService = require('../services/notificationService');
const { validateCreateNotificationDto } = require('../dtos/createNotificationDto');

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

async function createNotification(req, res, next) {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }
    const user = await buscarUsuario(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    const data = req.body;
    data.userId = user.id;
    const validatedData = validateCreateNotificationDto(req.body);
    const notification = await notificationService.createNotification(validatedData);
    res.status(201).json({ success: true, id: notification.id });
  } catch (err) {
    next(err);
  }
}

async function getNotificationsByUser(req, res, next) {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }
    const user = await buscarUsuario(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    const userId = user.id;
    const notifications = await notificationService.getNotificationsByUser(userId);
    res.status(200).json({ success: true, notifications });
  } catch (err) {
    next(err);
  }
}

async function markNotificationAsRead(req, res, next) {
  try {
    await notificationService.markNotificationAsRead(req.params.id);
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createNotification,
  getNotificationsByUser,
  markNotificationAsRead,
};
