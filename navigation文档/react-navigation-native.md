> 模板版本：v0.2.1
<p align="center">
  <h1 align="center"> <code>@react-navigation/native</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/react-navigation/react-navigation/tree/6.x/packages/native">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/react-navigation/react-navigation/blob/6.x/packages/native/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/react-navigation/react-navigation/tree/6.x/packages/native)


## 安装与使用

进入到工程目录并输入以下命令：
> [!TIP] # 处替换为 tgz 包的路径
<!-- tabs:start -->

#### **npm**

```bash
npm install @react-navigation/native@6.1.17
```

#### **yarn**

```bash
yarn add @react-navigation/native@6.1.17
```

[!TIP] 如果要体验全部demo效果，还需要安装以下依赖，[@react-native-oh-tpl/react-native-safe-area-context](/zh-cn/react-native-safe-area-context.md)和[@react-native-oh-tpl/react-native-gesture-handler](/zh-cn/react-native-gesture-handler.md)需要进行额外的配置，详情请去对应的文档查看：
```bash
npm install @react-navigation/stack@6.3.29
npm install @react-native-oh-tpl/react-native-gesture-handler@file:#
npm install @react-native-oh-tpl/react-native-safe-area-context@file:#
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
## 约束与限制
### 兼容性

本文档内容基于以下版本验证通过：

1. RNOH：0.72.11; SDK：OpenHarmony(api11) 4.1.0.53; IDE：DevEco Studio 4.1.3.412; ROM：2.0.0.52;
2. RNOH：0.72.13; SDK：HarmonyOS NEXT Developer Preview1; IDE：DevEco Studio 4.1.3.500; ROM：2.0.0.58;
3. RNOH：0.72.20; SDK：HarmonyOS NEXT Developer Beta1 B.0.18; IDE：DevEco Studio 5.0.3.200; ROM：3.0.0.18;

## 属性

以下属性已验证，更多属性详情请查看 [react-navigation/native 的文档介绍](https://reactnavigation.org/docs/navigation-container)

**NavigationContainer**：

| Name          | Description                  | Type     | Required | Platform | HarmonyOS Support |
| ------------- | ---------------------------- | -------- | -------- | -------- | ----------------- |
| theme         | 主题                         | Theme    | no       | All      | yes               |
| independent   | 此导航容器是否应独立于父容器 | boolean  | no       | All      | yes               |
| documentTitle | 网页标题                  | function | no       | All      | yes               |

**NavigationHelpersContext.Provider**：navigation 提供者，用于保存导航器

## 遗留问题

## 其他

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/react-navigation/react-navigation/blob/6.x/packages/native/LICENSE) ，请自由地享受和参与开源。
