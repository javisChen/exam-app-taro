<template>
  <view class="index">
    <common-title title="登录"/>
    <view class="login-wrapper">
      <nut-row type="flex" justify="center">
        <nut-col :span="20">
          <nut-input
              v-model="phone"
              @change=""
              @focus="focus"
              @blur="blur"
              label="手机号"
              placeholder="请输入手机号"
          />
        </nut-col>
      </nut-row>
      <nut-row type="flex" justify="center">
        <nut-col :span="20">
          <nut-input
              v-model="password"
              @change=""
              @focus="focus"
              @blur="blur"
              label="密码"
              placeholder="请输入密码"
          />
        </nut-col>
      </nut-row>
      <br>
      <nut-row type="flex" justify="center">
        <nut-col :span="20">
          <nut-button @click="handleClick" size="large" type="primary">登录</nut-button>
        </nut-col>
      </nut-row>
    </view>
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
      phone: '',
      password: ''
    });

    const handleClick = (type: string, msg: string, cover: boolean = false) => {
      Taro.redirectTo({
        url: 'pages/index/index'
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
.login-wrapper {
}

</style>
