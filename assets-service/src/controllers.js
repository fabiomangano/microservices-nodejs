import assets from './data.json';

export default {
  getAssets: (req, res) => {
    res.status(200).send(assets);
  },
};







