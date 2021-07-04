import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

Sentry.init({
    Vue: Vue,
    dsn: 'https://4f344f5e530c4999a92667d421ecf5cc@o910521.ingest.sentry.io/5845954',
    integrations: new Integrations.BrowserTracing(),
    logErrors: true,
    attachProps: true,
    attachStacktrace: true,
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')