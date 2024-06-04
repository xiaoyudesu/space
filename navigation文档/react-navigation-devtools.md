> 模板版本：v0.2.1

<p align="center">
  <h1 align="center"> <code>@react-navigation/devtools</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/react-navigation/react-navigation/tree/6.x/packages/devtools">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/react-navigation/react-navigation/blob/6.x/packages/devtools/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/react-navigation/react-navigation/tree/6.x/packages/devtools)

## 安装与使用

进入到工程目录并输入以下命令：

<!-- tabs:start -->

#### **npm**

```bash
npm install @react-navigation/devtools@6.0.26
```

#### **yarn**

```bash
yarn add @react-navigation/devtools@6.0.26
```

<!-- tabs:end -->

下面的代码展示了这个库的基本使用场景，更多请参考[官方文档](https://reactnavigation.org/docs/devtools/#usereduxdevtoolsextension)：

> [!WARNING] 使用时 import 的库名不变。

```js
import * as React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

export default function App() {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>
  );
}
```

## 约束与限制

### 兼容性

本文档内容基于以下版本验证通过：

1. RNOH：0.72.20; SDK：HarmonyOS NEXT Developer Beta1 B.0.18; IDE：DevEco Studio 5.0.3.200; ROM：3.0.0.18;

## 遗留问题

## 其他

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/react-navigation/react-navigation/blob/6.x/packages/devtools/LICENSE) ，请自由地享受和参与开源。
