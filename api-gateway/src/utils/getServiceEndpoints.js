import axios from 'axios';
import fs from 'fs/promises';

const getServiceEndpoints = async () => {
  const URL = "http://service-register:3005/service-register";
  try {
    const res = await axios.get(URL);
    const addresses = JSON.stringify(res.data);
    await fs.writeFile('service-address.json', addresses);

  } catch (err) {
    console.log(err);
  }
};

export default getServiceEndpoints;