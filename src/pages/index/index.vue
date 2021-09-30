<template>
  <view class="index">
    <common-title title="试卷列表"/>
    <nut-cell @click="handleClick" v-for="item in list" :title="123"></nut-cell>
  </view>
</template>

<script lang="ts">
import {reactive, toRefs} from 'vue';
import Taro from '@tarojs/taro';
import CommonTitle from "../../components/common-title.vue";

export default {
  name: 'Index',
  components: {CommonTitle},
  setup() {
    const state = reactive({
      list: [
        {id: 1, title: "试卷A"},
        {id: 2, title: "试卷B"},
        {id: 3, title: "试卷C"},
      ]
    });

    const handleClick = (type: string, msg: string, cover: boolean = false) => {
      Taro.redirectTo({
        url: 'pages/paperinfo/paperinfo'
      })
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss">
.index {
  text-align: center;
  margin-top: 80px;
}

</style>
