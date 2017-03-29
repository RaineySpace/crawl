const HOST = 'http://122.114.42.81:3000';
// const HOST = 'http://127.0.0.1:3000';

module.exports = {
    host: '',
    API: {
        login: `${HOST}/api/user/login`,
        feed: `${HOST}/api/feed`,
        updateFeed: `${HOST}/api/feed/update`,
        addArticle: `${HOST}/api/article/add`,
    },
};
