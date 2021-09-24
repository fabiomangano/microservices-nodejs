import fs from 'fs/promises';
import axios from 'axios';
import uniqid from 'uniqid';

const EMAIL_SERVICE = 'http://email-service:3008/api/v1/email';

export default {
  createTicket: async (req, res) => {
    const id_ticket = uniqid();

    const data = {
      id: id_ticket,
      ...req.body
    };

    await fs.writeFile('tickets.json', JSON.stringify(data));

    await axios({
      method: 'post',
      url: EMAIL_SERVICE,
      data,
    });

    res.status(200).json(data);
  },
};