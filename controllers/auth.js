exports.getLogin = (req, res, next) => {
  // const isLoggedin = req.get('Cookie').split('=')[1] === truek;
  console.log(req.session.isLoggedin);
  console.log(isLoggedin);
      res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: isLoggedin
      });
};


exports.postLogin = (req, res, next) => {
    // req.isAuthenticated = true;
    // res.setHeader('Set-Cookie', 'loggedIn=true');
    req.session.isLoggedin = true;
    res.redirect('/');
};