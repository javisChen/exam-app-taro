<template>
  <view class="login-title">
    <h1>{{ title }}</h1>
  </view>
</template>
<script lang="ts">
export default {
  name: 'common-title',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.login-title {
  margin-bottom: 20px;
}
</style>
