const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Nzg3NTdjNGViNTMwZGRmOWExY2U5YSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAyMzk1MDI5fQ.7gVq9Vod0qKwraVFWtZAnalyjL2MJ65Ei4VYA4XY7SI"
  return token;
};