'use strict';
class ResourceNotFound extends Error {
  constructor(message = 'Unauthorized', ...args) {
    super(message, ...args);
    this.type = 'custom';
    this.code = 401;
  }
}

module.exports = ResourceNotFound;
