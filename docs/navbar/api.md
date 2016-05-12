# NavBar

导航条组件。

## 组件

### NavBar

`<NavBar>` 组件。

#### Props

##### `title`

> PropType: `node`

NavBar 主标题。

##### `leftNav`

> PropType: `array`

左侧链接数据，格式为：

```javascript
const leftNav = [
  {
    component: 'a', // 默认为 `a`
    title: 'Left',
    href: '',
    isCloning: false, // 可选，如果 component 为 OffCanvas 之类的组件时，设为 true
    props: {
    }, // 其他要传递的属性
  },
];
```

##### `rightNav`

> PropType: `array`

右侧链接数据，格式同上。


##### `titleOnLeft`

> PropType: `bool`

主标题是否居左，默认居中。

##### `onAction`

> PropType: `func`

链接点击时的处理函数，第一个参数为链接数据对象。

## 兼容性问题

### Android UC

**问题描述**：

NavBar 两侧的链接（`.navbar-nav-item`）应用 `display: inline-flex` 以后，在部分只支持 09 版 flexbox 的规范的浏览器中宽度异常（有时比实际内容宽度宽一些，有时呈块级显示）。

**测试环境**：

- 设备：MI 4
- 系统：Android 6.0.1 / MIUI 7 6.4.14 开发版
- 浏览器：UCBrowser 10.9.8.738

**解决方式**：

由于 UC 浏览器在[特征检测中返回的数据不准确](https://codepen.io/anon/pen/WQLePg)，只能通过 UA 识别，然后作回退处理。

```javascript
var ua = navigator.userAgent;
if (/android/i.test(ua) && /ucbrowser/i.test(ua)) {
  document.documentElement.className += ' ua-android-uc';
}
```

上面的 JS 需要开发者手动添加到自己的项目中（以下样式已经集成在 CSS 文件中，）。

```css
.ua-android-uc .navbar-nav-itme {
  display: inline-block;
}
```

## 示例
