const jwt = require('jsonwebtoken');

class AutenticacaoMiddleware {
  static async verificarToken(req, res, next) {
    try {
      let token = null;
      // Primeiro tenta pegar do header Authorization
      const authHeader = req.headers['authorization'] || req.headers['Authorization'];
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
      } else if (req.cookies && req.cookies['auth_token']) {
        // Fallback para cookie
        token = req.cookies['auth_token'];
      }

      if (!token) {
        return res.status(401).json({ erro: 'Token ausente' });
      }

      const dados = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = dados;
      next();
    } catch (erro) {
      if (erro.name === 'TokenExpiredError') {
        return res.status(401).json({ erro: 'Token expirado' });
      }
      return res.status(401).json({ erro: 'Token inválido' });
    }
  }

  static definirCookies(res, { accessToken, refreshToken }) {
    const opcoes = {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    };

    res.cookie('auth_token', accessToken, {
      ...opcoes,
      maxAge: 15 * 60 * 1000,
    });

    res.cookie('refresh_token', refreshToken, {
      ...opcoes,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  }

  static limparCookies(res) {
    res.clearCookie('auth_token');
    res.clearCookie('refresh_token');
  }
}

module.exports = AutenticacaoMiddleware;
