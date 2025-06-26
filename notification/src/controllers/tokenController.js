const tokenRepository = require('../repositories/tokenRepository');

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

async function registerToken(req, res, next) {
  try {
    const { email } = req.query;
    const user = await buscarUsuario(email);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    const userId = user.id;
    const { token } = req.body;

    if (!userId || !token) {
      return res.status(400).json({ message: 'userId e token são obrigatórios.' });
    }

    await tokenRepository.saveToken(userId, token);

    res.status(200).json({ message: 'Token registrado com sucesso.' });
  } catch (error) {
    console.error('Erro ao registrar token:', error);
    next(error);
  }
}

module.exports = {
  registerToken,
};
