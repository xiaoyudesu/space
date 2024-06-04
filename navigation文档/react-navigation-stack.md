> 模板版本：v0.2.1

<p align="center">
  <h1 align="center"> <code>@react-navigation/stack</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/react-navigation/react-navigation/tree/6.x/packages/stack">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/react-navigation/react-navigation/blob/6.x/packages/stack/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/react-navigation/react-navigation/tree/6.x/packages/stack)


## 安装与使用
请到三方库的 Releases 发布地址查看配套的版本信息：[@react-native-oh-tpl/react-native-gesture-handler Releases](https://github.com/react-native-oh-library/react-native-harmony-gesture-handler/releases)、[@react-native-oh-library/react-native-safe-area-context Releases](https://github.com/react-native-oh-library/react-native-safe-area-context/releases)，并下载react-native-safe-area-context适用版本的 tgz 包。

进入到工程目录并输入以下命令：
> [!TIP] # 处替换为 tgz 包的路径
<!-- tabs:start -->

#### **npm**

```bash
npm install @react-navigation/stack@6.3.29
npm install @react-native-oh-tpl/react-native-gesture-handler@file:#
npm install @react-native-oh-tpl/react-native-safe-area-context@file:#
```

#### **yarn**

```bash
yarn add @react-navigation/stack@6.3.29
yarn add @react-native-oh-tpl/react-native-gesture-handler@file:#
yarn add @react-native-oh-tpl/react-native-safe-area-context@file:#
```

<!-- tabs:end -->

下面的代码展示了这个库的基本使用场景：

> [!WARNING] 使用时 import 的库名不变。
```js
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const HomeStack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}



export default function App() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeScreen} />
                <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}
```


## Link

本库鸿蒙侧实现依赖@react-native-oh-library/react-native-safe-area-context 的原生端代码，如已在鸿蒙工程中引入过该库，则无需再次引入，可跳过本章节步骤，直接使用。

如未引入请参照[@react-native-oh-tpl/react-native-gesture-handler 文档的 Link 章节](https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-gesture-handler.md#link)、[@react-native-oh-library/react-native-safe-area-context 文档的 Link 章节](https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-safe-area-context.md#link)进行引入



## 约束与限制
### 兼容性

本文档内容基于以下版本验证通过：

1. RNOH: 0.72.10; SDK: OpenHarmony(API10) 4.0.10.15; DevEco Studio: 4.0.3.700;  测试设备: Mate 40 Pro(NOH-AN00); ROM: 4.0.0.66(SP3C00E73R1P14log); 
2. RNOH: 0.72.11; SDK: OpenHarmony(API11) 4.1.0.52; DevEco Studio: 4.1.3.313;  测试设备: Mate 40 Pro(NOH-AN00); ROM: 2.0.0.52(SP22C00E52R1P17log); 
3. RNOH：0.72.20; SDK：HarmonyOS NEXT Developer Beta1 B.0.18; IDE：DevEco Studio 5.0.3.200; ROM：3.0.0.18;

## 方法

| Name                   | Description     | Type     | Required | Platform | HarmonyOS Support |
| ---------------------- | --------------- | -------- | -------- | -------- | ----------------- |
| `createStackNavigator` | 创建 Stack 组件 | function | no       | all      | yes               |

## 属性

以下属性已验证，更多属性详情请查看 [react-navigation/stack 的文档介绍](https://reactnavigation.org/docs/stack-navigator)

**Navigator**：

| Name             | Description                          | Type   | Required | Platform | HarmonyOS Support |
| ---------------- | ------------------------------------ | ------ | -------- | -------- | ----------------- |
| initialRouteName | 第一次加载导航器时要渲染的路线的名称 | string | no       | all      | yes               |

**Screen**：

| Name    | Description                            | Type       | Required | Platform | HarmonyOS Support |
| ------- | -------------------------------------- | ---------- | -------- | -------- | ----------------- |
| name    | 屏幕显示的 自定义类型名称              | string     | no       | all      | yes               |
| options | 用于配置如何在导航器中显示屏幕的选项。 | 自定义类型 | no       | all      | yes               |

## 遗留问题

## 其他

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/react-navigation/react-navigation/blob/6.x/packages/stack/LICENSE) ，请自由地享受和参与开源。
