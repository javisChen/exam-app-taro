import {createApp} from 'vue'
import {
    Button,
    Toast,
    Input,
    Layout,
    Row,
    Col,
    Cell,
    Radio,
    RadioGroup,
} from '@nutui/nutui-taro';
import '@nutui/nutui-taro/dist/style.css';

import './app.css'

const App = createApp({
    onShow(options) {
    },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.config.globalProperties.$user = "jc"
App.config.globalProperties.$success = () =>{
    Toast.text('全局使用方式');
}

App.use(Button)
    .use(Toast)
    .use(Input)
    .use(Layout)
    .use(Row)
    .use(Col)
    .use(Cell)
    .use(Radio)
    .use(RadioGroup)

export default App
