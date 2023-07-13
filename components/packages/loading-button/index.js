import loadingButton from './src/loading-button.vue';

loadingButton.install = (Vue) => {
    Vue.component(loadingButton.name, loadingButton);
}

export default loadingButton;