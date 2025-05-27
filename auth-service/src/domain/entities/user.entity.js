const bcrypt = require('bcryptjs');

class User {
  constructor(id, name, phone = null, birthdate = null, email, password, recoveryCode = null, recoveryExpires = null) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.birthdate = birthdate;
    this.email = email;
    this.password = password;
    this.recoveryCode = recoveryCode;
    this.recoveryExpires = recoveryExpires;
  }

  async hashPassword() {
    console.log(`[Security] Hashing password for: ${this.email}`);
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(typedPassword) {
    console.log(`[Security] Validating password for: ${this.email}`);
    return await bcrypt.compare(typedPassword, this.password);
  }

  setRecoveryCode(code) {
    this.recoveryCode = code;
    this.recoveryExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 min
  }

  verifyRecoveryCode(inputCode) {
    return this.recoveryCode === inputCode && this.recoveryExpires && this.recoveryExpires > new Date();
  }
}

module.exports = User;
