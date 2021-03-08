import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

const app = new Vue({
    render: h => h(App),
    el: "#app",
    data: {
        keyCode: "",
        key: "",
    },
    methods: {
        handleGlobalKeyDown(e: any) {
            this.$data.keyCode = e.keyCode;
            this.$data.key = e.key;
        },
    },
}).$mount("#app");

window.addEventListener("keydown", function(e) {
    app.handleGlobalKeyDown(e);
});
