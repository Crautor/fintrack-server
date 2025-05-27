const rabbitmqConfig = require('../config/rabbitmq.config');

class EventService {
  constructor() {
    this.queues = {
      USER_CREATED: 'auth.user.created',
      USER_UPDATED: 'auth.user.updated',
      USER_DELETED: 'auth.user.deleted',
      PASSWORD_CHANGED: 'auth.password.changed',
      PASSWORD_RESET_REQUESTED: 'auth.password.reset.requested',
      LOGIN_SUCCESS: 'auth.login.success',
      LOGIN_FAILED: 'auth.login.failed',
    };
  }

  async start() {
    try {
      await rabbitmqConfig.start();
      console.log('[Queue] Event service started');
    } catch (error) {
      console.error('[Queue] Failed to start event service:', error);
      throw error;
    }
  }

  async publishUserCreated(user) {
    await this.publish(this.queues.USER_CREATED, {
      id: user.id,
      name: user.name,
      phone: user.phone,
      birthdate: user.birthdate,
      email: user.email,
      createdAt: new Date(),
    });
  }

  async publishUserUpdated(user) {
    await this.publish(this.queues.USER_UPDATED, {
      id: user.id,
      name: user.name,
      phone: user.phone,
      birthdate: user.birthdate,
      email: user.email,
      updatedAt: new Date(),
    });
  }

  async publishUserDeleted(user) {
    await this.publish(this.queues.USER_DELETED, {
      id: user.id,
      name: user.name,
      phone: user.phone,
      birthdate: user.birthdate,
      email: user.email,
      deletedAt: new Date(),
    });
  }

  async publishPasswordChanged(user) {
    await this.publish(this.queues.PASSWORD_CHANGED, {
      id: user.id,
      name: user.name,
      phone: user.phone,
      birthdate: user.birthdate,
      email: user.email,
      changedAt: new Date(),
    });
  }

  async publishPasswordResetRequested(email, code) {
    await this.publish(this.queues.PASSWORD_RESET_REQUESTED, {
      email,
      code,
      requestedAt: new Date(),
    });
  }

  async publishLoginSuccess(user) {
    await this.publish(this.queues.LOGIN_SUCCESS, {
      id: user.id,
      name: user.name,
      phone: user.phone,
      birthdate: user.birthdate,
      email: user.email,
      timestamp: new Date(),
    });
  }

  async publishLoginFailed(email, reason) {
    await this.publish(this.queues.LOGIN_FAILED, {
      email,
      reason,
      timestamp: new Date(),
    });
  }

  async publish(queue, data) {
    try {
      await rabbitmqConfig.sendToQueue(queue, data);
      console.log(`[Queue] Event published to: ${queue}`);
    } catch (error) {
      console.error(`[Queue] Failed to publish event ${queue}:`, error);
      throw error;
    }
  }
}

module.exports = new EventService();
