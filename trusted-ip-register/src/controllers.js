import data from '../trusted-ips.json';

export default {
  getTrustedIps: (req, res) => {
    res.status(200).send(data);
  }
};







