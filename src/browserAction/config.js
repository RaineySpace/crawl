const HOST = 'http://127.0.0.1:3000';
module.exports = {
    host: '',
    API: {
        login: `${HOST}/api/user/login`
    },
    MENU_MAP: {
        main: {
            name: 'home',
            title: '首页',
            icon: 'home'
        },
        setting: {
            name: 'setting',
            title: '设置',
            icon: 'setting'
        },
    },
    IMAGE_CDN: '../resource/image/'
};
