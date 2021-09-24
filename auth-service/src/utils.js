import users from '../data.json';
import cryptoRandomString from 'crypto-random-string';

export default {
    getUser: (username) => users.filter(user => username === user.username),
    generateAccessToken: () =>  cryptoRandomString({length: 1000, type: 'base64'})
}