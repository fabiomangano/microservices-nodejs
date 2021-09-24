export default {
    findById: (movies, id) => {
        return movies.find(m => m.id === id);
    }
};