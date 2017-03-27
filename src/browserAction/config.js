import config from '../config';

module.exports = Object.assign(config, {
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
});
