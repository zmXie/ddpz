import loadingButton from './loading-button';

const components = [loadingButton];
const install = (Vue, opts = {}) => {
    components.forEach(e => {
        Vue.component(e.name, e);
    })
}

export default {
    install,
    loadingButton
}