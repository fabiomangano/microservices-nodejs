import data from './endpoints.json';

export default {
  getServiceEndpoints: (req, res) => {
    res.status(200).send(data);
  }
};







