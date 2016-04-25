## Change Log

### v1.0.0-beta.1 (2016/04/25)

- `Changed` [93fac1f](https://github.com/amazeui/amazeui-touch/commit/93fac1f8a17a1f9d61af3e401bb759f2f2467a3b) #39 **API 变更**：`onSelect` 与 React 事件 API 冲突，重命名为 `onAction`，涉及的组件包括：
  - Modal
  - NavBar
  - Slider
  - Tabs
  - TabBar
- `Fixed` [89bc1ff](https://github.com/amazeui/amazeui-touch/commit/89bc1ff022f3b9074409c33f09c24af3c471349f) 修复 React 15.x 读取 `key` 警告问题
- `Changed` [721a2a7](https://github.com/amazeui/amazeui-touch/commit/721a2a72a63c20200b494d76655f81aca80914cd) #36 `react` 和 `react-dom` 移到 `peerDependencies`，解决使用时打包多个版本的问题
- `Fixed` [3d6bbdc](https://github.com/amazeui/amazeui-touch/commit/3d6bbdc819175a0cf6b31185b2a7b3421e447a8c) 修复 flexbox 在部分安卓 UA 上的显示问题（Thx @leakl），至此 flexbox 兼容性问题主要剩下 NavBar 和 Grid
- `Improved` [082c00f](https://github.com/amazeui/amazeui-touch/commit/082c00f2ad7d1e61c914238cc5eb326f73cb672e) 运行环境判断，为后端渲染做准备
- `Fixed` [4903567](https://github.com/amazeui/amazeui-touch/commit/49035679e1e3c55e043eeae02df1dd62be8c71c9) #27 修复 Object.assign 没有转换问题
- `Fixed` [dcdf80a](https://github.com/amazeui/amazeui-touch/commit/dcdf80a3dcbf1611c5422d4ded8b39de7781f9a0) 修复 Modal `open()` 方法判断逻辑始终为 `true` 的错误

### v0.1.0-beta2 (2015/11/17)

- `Improved` [81c4c1a](https://github.com/amazeui/amazeui-touch/commit/81c4c1a23fa5fca4a3352e3a8711a79fa04d7b3b) 移除 `input[type="range"]` 在 Safari 中的黑色边框
- `Improved`  [e39f2e0](https://github.com/amazeui/amazeui-touch/commit/e39f2e023ce9e7997adcafbb96e0cfbc0274ea97) #6 调整 View 样式
- `Improved` #11 优化 Modal、Notification 等组件在 iOS 9 Safari 中入场动画效果
- `Improved` [6cdf4ec](https://github.com/amazeui/amazeui-touch/commit/6cdf4ec61c357b0471837a49db78ba1d66f5b564) #5 修复 Slider 阻止垂直触控默认滚动行为问题
- `Fixed` [33305f4](https://github.com/amazeui/amazeui-touch/commit/33305f49405b09ec578fdf530a54012e1fd9bf43)  #7 修复 Modal 遮罩层显示问题（via [519ae20](https://github.com/amazeui/amazeui-touch/commit/519ae20c8646252c06b819c538c74395a4e47b22) ）
- `Changed` [44bfec0](https://github.com/amazeui/amazeui-touch/commit/44bfec03b4fbee022914476abb88b3f090f8d093) #10 替换 Loader 样式，移除 SVG
- `Improved` [ea51873](https://github.com/amazeui/amazeui-touch/commit/ea51873871d70e131b1d307a1a4236d89e37774e) Button 添加 `:hover` 样式
- `Improved` [338dca4](https://github.com/amazeui/amazeui-touch/commit/338dca48a0fec187ebbcd6215853f27942c6ab99) 官网添加 kitchen-sink 二维码
