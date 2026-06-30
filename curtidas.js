const feedJSON = require('./');

function curtir(feed, id) {
    const post = feed[0].id === id ? feed[0] :
                feed[1].id === id ? feed[1] : feed[2];
}