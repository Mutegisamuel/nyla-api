module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a57e1e7f8424ec7afa923c4dd31103c1'),
  },
});
