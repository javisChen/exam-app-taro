<template>
  <view class="index">
    <common-title title="答题"/>
    <view v-for="(item, idx) in list" class="item-group">
      <view class="item-question">
        <span>{{ idx + 1 }}.{{ item.questionTitle }}</span>
      </view>
      <view v-for="opt in item.options" class="item-options">
        <nut-radiogroup v-model="item.answer" @change="onSelect(item, opt)">
          <nut-radio :label="opt.optionId">{{ opt.title }}</nut-radio>
        </nut-radiogroup>
      </view>
    </view>
  </view>
  <view class="action-bar">
    <nut-button @click="save" plain class="btn" shape="square" type="">保存进度</nut-button>
    <nut-button @click="submit" plain class="btn" shape="square" type="">提交</nut-button>
  </view>

  <!--  <nut-toast :msg="page.state.msg" v-model:visible="page.state.show" :type="page.state.type"-->
  <!--             @closed="page.methods.onClosed" :cover="page.state.cover"/>-->

</template>

<script lang="ts">
import {reactive, toRefs} from 'vue';
import CommonTitle from "../../components/common-title.vue";
import Taro from '@tarojs/taro'

import './paperinfo.scss'

export default {
  name: 'Index',
  components: {
    CommonTitle
  },
  setup() {
    const state = reactive({
      list: [
        {
          questionId: 1,
          questionTitle: "你的出生地在哪？",
          options: [
            {
              optionId: '1',
              title: "广州"
            },
            {
              optionId: '2',
              title: "北京"
            },
          ],
          answer: ''
        },
        {
          questionId: 1,
          questionTitle: "你的出生地在哪？",
          options: [
            {
              optionId: 1,
              title: "广州"
            },
            {
              optionId: 2,
              title: "北京"
            },
          ],
          answer: ''
        },
        {
          questionId: 1,
          questionTitle: "你的出生地在哪？",
          options: [
            {
              optionId: 1,
              title: "广州"
            },
            {
              optionId: 2,
              title: "北京"
            },
          ],
          answer: ''
        },
        {
          questionId: 1,
          questionTitle: "你的出生地在哪？",
          options: [
            {
              optionId: 1,
              title: "广州"
            },
            {
              optionId: 2,
              title: "北京"
            },
          ],
          answer: ''
        },
        {
          questionId: 1,
          questionTitle: "你的出生地在哪？",
          options: [
            {
              optionId: 1,
              title: "广州"
            },
            {
              optionId: 2,
              title: "北京"
            },
          ],
          answer: ''
        },
        {
          questionId: 1,
          questionTitle: "你的出生地在哪？",
          options: [
            {
              optionId: 1,
              title: "广州"
            },
            {
              optionId: 2,
              title: "北京"
            },
          ],
          answer: ''
        },
        {
          questionId: 1,
          questionTitle: "你的出生地在哪？",
          options: [
            {
              optionId: 1,
              title: "广州"
            },
            {
              optionId: 2,
              title: "北京"
            },
          ],
          answer: ''
        },
        {
          questionId: 1,
          questionTitle: "你的出生地在哪？",
          options: [
            {
              optionId: 1,
              title: "广州"
            },
            {
              optionId: 2,
              title: "北京"
            },
          ],
          answer: ''
        },
        {
          questionId: 1,
          questionTitle: "你的出生地在哪？",
          options: [
            {
              optionId: 1,
              title: "广州"
            },
            {
              optionId: 2,
              title: "北京"
            },
          ],
          answer: ''
        },
      ]
    });

    const handleClick = (type: string, msg: string, cover: boolean = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    const onSelect = (paper: any, option: any) => {
      console.log(paper)
      console.log(option)
    }


    const save = () => {
      Taro.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000,
      }).then(() => {
        setTimeout(() => {
          Taro.redirectTo({url: '/pages/index/index'})
        }, 500)

      })
    }

    const submit = () => {
      Taro.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000,
      }).then(() => {
        setTimeout(() => {
          Taro.redirectTo({url: '/pages/index/index'})
        }, 500)

      })
    }

    return {
      submit,
      save,
      ...toRefs(state),
      onSelect,
      handleClick
    }
  }
}
</script>
