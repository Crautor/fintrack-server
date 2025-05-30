const servicoAuth = require('../../application/services/auth.service');
const AutenticacaoMiddleware = require('../../infrastructure/middlewares/auth.middleware');

class ControladorAutenticacao {
  async cadastrar(req, res) {
    try {
      const { name, phone, birthdate, email, password } = req.body;
      const tokens = await servicoAuth.register(name, phone, birthdate, email, password);
      AutenticacaoMiddleware.definirCookies(res, tokens);
      res.status(201).json({ mensagem: 'Cadastro realizado com sucesso.' });
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }

  async entrar(req, res) {
    try {
      const { email, password } = req.body;
      const tokens = await servicoAuth.login(email, password);
      AutenticacaoMiddleware.definirCookies(res, tokens);
      res.json({ mensagem: 'Login efetuado com êxito.' });
    } catch (erro) {
      res.status(401).json({ erro: erro.message });
    }
  }

  async atualizarToken(req, res) {
    try {
      const { refreshToken } = req.body;
      const tokens = await servicoAuth.refreshToken(refreshToken);
      AutenticacaoMiddleware.definirCookies(res, tokens);
      res.json({ mensagem: 'Tokens renovados com sucesso.' });
    } catch (erro) {
      res.status(401).json({ erro: erro.message });
    }
  }

  async sair(req, res) {
    AutenticacaoMiddleware.limparCookies(res);
    res.json({ mensagem: 'Logout concluído.' });
  }

  async solicitarCodigoRecuperacao(req, res) {
    try {
      const { email } = req.body;
      const retorno = await servicoAuth.initiatePasswordReset(email);
      res.json(retorno);
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }

  async redefinirSenha(req, res) {
    try {
      const { email, codigo, novapassword } = req.body;
      const resultado = await servicoAuth.applyNewPassword(email, codigo, novapassword);
      res.json(resultado);
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }

  async buscarPorEmail(req, res) {
    try {
      const { email } = req.params;
      const user = await servicoAuth.getByEmail(email);
      res.json(user);
    } catch (erro) {
      res.status(404).json({ erro: erro.message });
    }
  }

  async validarCodigo(req, res) {
    try {
      const { email, code } = req.body;
      const isValid = await servicoAuth.verifyRecoveryCode(email, code);
      res.json({ message: 'Código de recuperação válido', isValid: isValid });
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }

  async buscarTodosUsuarios(req, res) {
    try {
      const usuarios = await servicoAuth.getAllUsers();
      res.json(usuarios);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = new ControladorAutenticacao();
