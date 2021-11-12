Nova.booting((Vue, router) => {
    Vue.component('index-text-counted', require('./components/TextCounted/IndexField'));
    Vue.component('detail-text-counted', require('./components/TextCounted/DetailField'));
    Vue.component('form-text-counted', require('./components/TextCounted/FormField'));

    Vue.component('index-textarea-counted', require('./components/TextareaCounted/IndexField'));
    Vue.component('detail-textarea-counted', require('./components/TextareaCounted/DetailField'));
    Vue.component('form-textarea-counted', require('./components/TextareaCounted/FormField'));
})
