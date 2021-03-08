<template>
    <div id="app" :style="'background-color:' + getRandomColor()">
        <span class="key">{{ key }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class App extends Vue {
    get keyCode() {
        return this.$root.$data.keyCode;
    }
    get key() {
        return this.$root.$data.key;
    }
    getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
</script>

<style lang="scss">
html,
body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
#app {
    font-family: Cursive, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
}
.key {
    font-size: 50vh;
    color: white;
}
</style>
