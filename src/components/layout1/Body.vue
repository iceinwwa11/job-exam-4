<template>
  <body>
    <h3>Color-theme</h3>
    <b-button-group align="center">
      <b-button variant="info" @click="buttonblue = true,buttongreen=false,buttonyellow=false">Blue</b-button>
      <b-button variant="success" @click="buttongreen = true,buttonblue=false,buttonyellow=false">Green</b-button>
      <b-button variant="warning" @click="buttonyellow = true,buttonblue=false,buttongreen=false">Yellow</b-button>\
      <b-button @click="buttonyellow = false,buttonblue=false,buttongreen=false">Default</b-button>
    </b-button-group>
    <div v-if="buttonblue == true">
      <router-view class="bgblue"></router-view>
    </div>
    <div v-else-if="buttongreen == true">
      <router-view class="bggreen"></router-view>
    </div>
    <div v-else-if="buttonyellow == true">
      <router-view class="bgyellow"></router-view>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </body>
</template>

<script>
export default {
  name: "body",
  data() {
    return {
      buttongreen: false,
      buttonblue: false,
      buttonyellow: false,
    };
  },
};
</script>

<style>
.bgblue {
  background-color: lightblue;
}
.bggreen {
  background-color: greenyellow;
}
.bgyellow {
  background-color: yellow;
}
</style>
