import blacklist from '../../malicious-ips.json';

const checkIpAddress = (req, res, next) => {
  const { headers } = req;
  if (headers["x-forwarded-for"] && blacklist.includes(headers["x-forwarded-for"])){
    return res.status(403).send('Access Denied, request comes from banned ip.');
  } else next();
}

export default checkIpAddress;