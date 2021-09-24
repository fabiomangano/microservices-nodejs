import axios from 'axios';
import fs from 'fs/promises';
const CronJob = require('cron').CronJob;

const getTrustedIps = async () => {
  const URL = "http://trusted-ip-register:3006/trusted-ip-register";
  try {
    const res = await axios.get(URL);
    const ips = JSON.stringify(res.data);
    await fs.writeFile('../whitelist.json', ips);

  } catch (err) {
    console.log(err);
  }
};

const job = new CronJob('0 */2 * * * *', function() {
  getTrustedIps();
  console.log('Trusted ips list updated');
}, null, true, 'America/Los_Angeles');

export { job, getTrustedIps };