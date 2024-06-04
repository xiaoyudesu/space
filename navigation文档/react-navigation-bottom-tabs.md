> 模板版本：v2.1.0

<p align="center">
  <h1 align="center"> <code>@react-navigation/bottom-tabs</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/react-navigation/react-navigation/tree/6.x/packages/bottom-tabs">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/react-navigation/react-navigation/blob/6.x/packages/bottom-tabs/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/react-navigation/react-navigation/tree/6.x/packages/bottom-tabs)

## 安装与使用

请到三方库的 Releases 发布地址查看配套的版本信息：[@react-native-oh-tpl/elements Releases](https://github.com/react-native-oh-library/react-navigation/releases)、[@react-native-oh-library/react-native-safe-area-context Releases](https://github.com/react-native-oh-library/react-native-safe-area-context/releases)，并下载react-native-safe-area-context适用版本的 tgz 包。

进入到工程目录并输入以下命令：

> [!TIP] # 处替换为 tgz 包的路径

<!-- tabs:start -->

#### **npm**

```bash
npm install @react-navigation/bottom-tabs@6.5.20
npm install @react-native-oh-tpl/elements@file:#
npm install @react-native-oh-tpl/react-native-safe-area-context@file:#
```

#### **yarn**

```bash
yarn add @react-navigation/bottom-tabs@6.5.20
yarn add @react-native-oh-tpl/elements@file:#
yarn add @react-native-oh-tpl/react-native-safe-area-context@file:#
```

<!-- tabs:end -->

下面的代码展示了这个库的基本使用场景：

> [!WARNING] 使用时 import 的库名不变。

```js
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export function NavigationBottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
```


## Link

本库鸿蒙侧实现依赖@react-native-oh-library/react-native-safe-area-context 的原生端代码，如已在鸿蒙工程中引入过该库，则无需再次引入，可跳过本章节步骤，直接使用。

如未引入请参照[@react-native-oh-library/react-native-safe-area-context 文档的 Link 章节](https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-safe-area-context.md#link)进行引入


## 约束与限制

### 兼容性

本文档内容基于以下版本验证通过：

1. RNOH：0.72.11; SDK：OpenHarmony(api11) 4.1.0.53; IDE：DevEco Studio 4.1.3.412; ROM：2.0.0.52;
2. RNOH：0.72.13; SDK：HarmonyOS NEXT Developer Preview1; IDE：DevEco Studio 4.1.3.500; ROM：2.0.0.58;
3. RNOH：0.72.20; SDK：HarmonyOS NEXT Developer Beta1 B.0.18; IDE：DevEco Studio 5.0.3.200; ROM：3.0.0.18;
   
## 方法

| Name                       | Description          | Type     | Required | Platform | HarmonyOS Support |
| -------------------------- | -------------------- | -------- | -------- | -------- | ----------------- |
| `createBottomTabNavigator` | 创建 BottomTabs 组件 | function | no       | All      | yes               |

## 属性

以下属性已验证，更多属性详情请查看 [react-navigation/bottom-tabs 的文档介绍](https://reactnavigation.org/docs/bottom-tab-navigator)

**Navigator**：

| Name                | Description                               | Type       | Required | Platform | HarmonyOS Support |
| ------------------- | ----------------------------------------- | ---------- | -------- | -------- | ----------------- |
| initialRouteName    | 第一次加载导航器时要渲染的路线的名称      | string     | no       | All      | yes               |
| backBehavior        | 控制在导航器中调用 goBack 时发生的情况    | string     | no       | All      | yes               |
| tabBar              | 函数，返回一个 React 元素用来显示选项卡栏 | function   | no       | All      | yes               |
| sceneContainerStyle | 包装屏幕内容的组件的样式对象              | ViewStyle  | no       | All      | yes               |
| screenOptions       | 用于导航器中屏幕的默认选项                | 自定义类型 | no       | All      | yes               |

**Screen**：

| Name    | Description                            | Type       | Required | Platform | HarmonyOS Support |
| ------- | -------------------------------------- | ---------- | -------- | -------- | ----------------- |
| name    | 屏幕显示的 自定义类型名称              | string     | no       | All      | yes               |
| options | 用于配置如何在导航器中显示屏幕的选项。 | 自定义类型 | no       | All      | yes               |

**BottomTabBarHeightCallBackContext.Provider**：标签栏高度回调函数提供者

**BottomTabBarHeightContext.Provider**：标签栏高度提供者

## 遗留问题

## 其他

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/react-navigation/react-navigation/blob/6.x/packages/bottom-tabs/LICENSE) ，请自由地享受和参与开源。
