> 模板版本：v0.2.1

<p align="center">
  <h1 align="center"> <code>@react-navigation/material-top-tabs</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/react-navigation/react-navigation/tree/6.x/packages/material-top-tabs">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/react-navigation/react-navigation/blob/6.x/packages/material-top-tabs/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/react-navigation/react-navigation/tree/6.x/packages/material-top-tabs)

## 安装与使用

请到三方库的 Releases 发布地址查看配套的版本信息：[@react-native-oh-tpl/react-native-tab-view Releases](https://github.com/react-native-oh-library/react-navigation/releases)，[@react-native-oh-tpl/react-native-pager-view Releases](https://github.com/react-native-oh-library/react-native-pager-view/releases)，并下载@react-native-oh-tpl/react-native-tab-view适用版本的 tgz 包。

进入到工程目录并输入以下命令：

> [!TIP] # 处替换为 tgz 包的路径

<!-- tabs:start -->

#### **npm**

```bash
npm install @react-navigation/material-top-tabs@6.6.13
npm install @react-navigation/native@6.1.17
npm install @react-native-oh-tpl/react-native-tab-view@file:#
npm install @react-native-oh-tpl/react-native-pager-view@file:#
```

#### **yarn**

```bash
yarn add @react-navigation/material-top-tabs@6.6.13
yarn add @react-navigation/native@6.1.17
yarn add @react-native-oh-tpl/react-native-tab-view@file:#
yarn add @react-native-oh-tpl/react-native-pager-view@file:#
```

<!-- tabs:end -->

下面的代码展示了这个库的基本使用场景：

> [!WARNING] 使用时 import 的库名不变。

```js
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

const Tab = createMaterialTopTabNavigator();


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


export function NavigationMaterialTopTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={HomeScreen} options={{title:'家'}}/>
                <Tab.Screen name="Settings" component={SettingsScreen} options={{title:'设置'}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

```

## Link

本库鸿蒙侧实现依赖@react-native-oh-tpl/react-native-tab-view 的原生端代码，如已在鸿蒙工程中引入过该库，则无需再次引入，可跳过本章节步骤，直接使用。

如未引入请参照[@react-native-oh-tpl/react-native-tab-view 文档的 Link 章节](https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-tab-view.md#link)，[@react-native-oh-tpl/react-native-pager-view 文档的 Link 章节](https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-pager-view.md#link)，进行引入


## 约束与限制

### 兼容性

本文档内容基于以下版本验证通过：

1. RNOH：0.72.20; SDK：HarmonyOS NEXT Developer Beta1 B.0.18; IDE：DevEco Studio 5.0.3.200; ROM：3.0.0.18;

## 属性

> [!tip] "Platform"列表示该属性在原三方库上支持的平台。

> [!tip] "HarmonyOS Support"列为 yes 表示 HarmonyOS 平台支持该属性；no 则表示不支持；partially 表示部分支持。使用方法跨平台一致，效果对标 iOS 或 Android 的效果。

以下属性已验证，更多属性详情请查看 [@react-navigation/material-top-tabs 的文档介绍](https://reactnavigation.org/docs/material-top-tab-navigator)

**Tab.Navigator**
| Name             | Description                                       | Type       | Required | Platform | HarmonyOS Support |
| ---------------- | ------------------------------------------------- | ---------- | -------- | -------- | ----------------- |
| initialRouteName | 默认路由名字                                      | string     | no       | all      | yes               |
| screenOptions    | 用于navigator的screens属性                        | object     | no       | all      | yes               |
| tabBarPosition   | tabBar的位置，可选值为'top'和'bottom',默认为'top' | string     | no       | all      | yes               |
| tabBar           | 自定义tabBar                                      | React.Node | no       | all      | yes               |


**Tab.Screen 的 Options**
| Name            | Description                           | Type       | Required | Platform | HarmonyOS Support |
| --------------- | ------------------------------------- | ---------- | -------- | -------- | ----------------- |
| title           | 页面标题                              | string     | no       | all      | yes               |
| tabBarLabel     | tabBar标题，当未设置时，title属性生效 | string     | no       | all      | yes               |
| tabBarShowLabel | 是否展示tabBar label,默认为false      | boolean    | no       | all      | yes               |
| tabBarIcon      | tabBar图标                            | React.Node | no       | all      | yes               |
| tabBarShowIcon  | 是否展示tabBar图标,默认为false        | boolean    | no       | all      | yes               |



## 遗留问题

## 其他

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/react-navigation/react-navigation/blob/6.x/packages/material-top-tabs/LICENSE) ，请自由地享受和参与开源。
