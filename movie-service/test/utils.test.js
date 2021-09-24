import { expect } from 'chai'; 
import utils from '../src/utils';
import movies from '../data.json';

describe('[Utils]', () => {
  it('should return currect movie for the current id', (done) => {
    const movie = utils.findById(movies, "1");
    expect(movie).to.be.a('object');
    expect(movie.id).to.be.eql("1");
    done();
  });
});