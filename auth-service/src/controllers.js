import utils from './utils';

export default {
  checkUserCredentials: (req, res) => {
    if (req.body.username && req.body.password) {
      const {username, password} = req.body;
      const user = utils.getUser(username)[0];

      if(!user || password !== user.password) {
        res(401).send('Username o Password errati');
      } else {
        const {name, lastName, email } = user;
        const token = utils.generateAccessToken();
       
        res.status(200).send({
          name,
          lastName,
          email,
          token
        })
      }

   } else
    res.status(401).send('Errore')
  },
};







