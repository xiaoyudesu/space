> 模板版本：v0.2.1

<p align="center">
  <h1 align="center"> <code>@react-navigation/material-bottom-tabs</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/react-navigation/react-navigation/tree/6.x/packages/material-bottom-tabs">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/react-navigation/react-navigation/blob/6.x/packages/material-bottom-tabs/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/react-navigation/react-navigation/tree/6.x/packages/material-bottom-tabs)

## 安装与使用

请到三方库的 Releases 发布地址查看配套的版本信息：[@react-native-oh-tpl/elements Releases](https://github.com/react-native-oh-library/react-navigation/releases)、[@react-native-oh-library/react-native-safe-area-context Releases](https://github.com/react-native-oh-library/react-native-safe-area-context/releases)，并下载react-native-safe-area-context适用版本的 tgz 包。

进入到工程目录并输入以下命令：

> [!TIP] # 处替换为 tgz 包的路径

<!-- tabs:start -->

#### **npm**

```bash
npm install @react-navigation/material-bottom-tabs@6.2.28
npm install @react-navigation/native@6.1.17
npm install @react-native-oh-tpl/elements@file:#
npm install @react-native-oh-tpl/react-native-safe-area-context@file:#
```

#### **yarn**

```bash
yarn add @react-navigation/material-bottom-tabs@6.2.28
yarn add @react-navigation/native@6.1.17
yarn add @react-native-oh-tpl/elements@file:#
yarn add @react-native-oh-tpl/react-native-safe-area-context@file:#
```

<!-- tabs:end -->

下面的代码展示了这个库的基本使用场景：

> [!WARNING] 使用时 import 的库名不变。

```js
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

const Tab = createMaterialBottomTabNavigator();


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}


function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings Screen</Text>
        </View>
    );
}


export function NavigationMaterialBottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator >
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

1. RNOH：0.72.20; SDK：HarmonyOS NEXT Developer Beta1 B.0.18; IDE：DevEco Studio 5.0.3.200; ROM：3.0.0.18;

## 属性

> [!tip] "Platform"列表示该属性在原三方库上支持的平台。

> [!tip] "HarmonyOS Support"列为 yes 表示 HarmonyOS 平台支持该属性；no 则表示不支持；partially 表示部分支持。使用方法跨平台一致，效果对标 iOS 或 Android 的效果。

以下属性已验证，更多属性详情请查看 [@react-navigation/material-bottom-tabs 的文档介绍](https://reactnavigation.org/docs/material-bottom-tab-navigator)

**Tab.Navigator**

| Name             | Description                           | Type      | Required | Platform | HarmonyOS Support |
| ---------------- | ------------------------------------- | --------- | -------- | -------- | ----------------- |
| initialRouteName | 默认路由名字                          | string    | no       | all      | yes               |
| screenOptions    | 用于navigator的screens属性            | object    | no       | all      | yes               |
| inactiveColor    | 自定义未激活的tab页的图标和标签的颜色 | string    | no       | all      | yes               |
| activeColor      | 自定义激活的tab页的图标和标签的颜色   | string    | no       | all      | yes               |
| barStyle         | 底部导航栏的样式                      | ViewStyle | no       | all      | yes               |


**Tab.Screen 的 Options**

| Name        | Description                                                   | Type                  | Required | Platform | HarmonyOS Support |
| ----------- | ------------------------------------------------------------- | --------------------- | -------- | -------- | ----------------- |
| title       | 页面标题                                                      | string                | no       | all      | yes               |
| tabBarIcon  | tabBar图标                                                    | React.Node            | no       | all      | yes               |
| tabBarColor | 激活页的tabBar颜色                                            | string                | no       | all      | yes               |
| tabBarLabel | tabBar标题，当未设置时，title属性生效                         | string                | no       | all      | yes               |
| tabBarBadge | 显示在tabIcon上的徽章，为true显示原点，string或number显示文字 | boolean,number,string | no       | all      | yes               |



## 遗留问题

## 其他

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/react-navigation/react-navigation/blob/6.x/packages/material-bottom-tabs/LICENSE) ，请自由地享受和参与开源。
