import whitelist from '../../whitelist.json';

const checkIpAddress = (req, res, next) => {
  const { headers } = req;
  if (!headers["x-forwarded-for"] && !whitelist.includes(headers["x-forwarded-for"])){
    return res.status(403).send('Access Denied, request comes from untrusted ip.');
  } else next();
}

export default checkIpAddress;