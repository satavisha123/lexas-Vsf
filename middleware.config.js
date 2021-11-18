const config = require('./config.js');

module.exports = {
  integrations: {
    kibo: {
      location: '@vue-storefront/kibocommerce-api/server',
      configuration: {
        api: {
          accessTokenUrl: config.get('accessTokenUrl'),
          clientId: config.get('clientId'),
          sharedSecret: config.get('sharedSecret'),
          apiHost: config.get('apiHost')
        }
      }
    },
    lexascms: {
      location: 'vsf-lexascms/server',
      configuration: {
        spaceId: '29d0ab59-0e1e-4d0c-979e-64689c6b1ec2'
      }
    }
  }
};
