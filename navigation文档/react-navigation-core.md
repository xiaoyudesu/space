> 模板版本：v0.2.1

<p align="center">
  <h1 align="center"> <code>@react-navigation/core</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/react-navigation/react-navigation/tree/6.x/packages/core">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/react-navigation/react-navigation/blob/6.x/packages/core/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/react-navigation/react-navigation/tree/6.x/packages/core)

## 安装与使用

进入到工程目录并输入以下命令：
> [!TIP] # 处替换为 tgz 包的路径
<!-- tabs:start -->

#### **npm**

```bash
npm install @react-navigation/core@6.4.16
```

#### **yarn**

```bash
yarn add @react-navigation/core@6.4.16
```

[!TIP] 如果要体验全部demo效果，还需要安装以下依赖，[@react-native-oh-tpl/react-native-safe-area-context](/zh-cn/react-native-safe-area-context.md)和[@react-native-oh-tpl/react-native-gesture-handler](/zh-cn/react-native-gesture-handler.md)需要进行额外的配置，详情请去对应的文档查看：
```bash
npm install @react-navigation/native@6.1.17
npm install @react-navigation/stack@6.3.29
npm install @react-native-oh-tpl/react-native-gesture-handler@file:#
npm install @react-native-oh-tpl/react-native-safe-area-context@file:#
```

<!-- tabs:end -->

下面的代码展示了这个库的基本使用场景：

> [!WARNING] 使用时 import 的库名不变。

```js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

function MyBackButton() {
    const navigation = useNavigation();

    return (
        <Button
            title="Back"
            onPress={() => {
                navigation.goBack();
            }}
        />
    );
}

function HomeScreen({ navigation: { navigate } }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the home screen of the app</Text>
            <Button title="Go to Profile" onPress={() => navigate('Profile')} />
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <MyBackButton />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

```

## 约束与限制

### 兼容性

本文档内容基于以下版本验证通过：

1. RNOH：0.72.20; SDK：HarmonyOS NEXT Developer Beta1 B.0.18; IDE：DevEco Studio 5.0.3.200; ROM：3.0.0.18;


## 静态方法

> [!tip] "Platform"列表示该属性在原三方库上支持的平台。

以下方法已验证，更多使用详情请查看 [react-navigation 的文档介绍](https://reactnavigation.org/docs/getting-started/)

| Name          | Description                                                                      | Type     | Required | Platform | HarmonyOS Support |
| ------------- | -------------------------------------------------------------------------------- | -------- | -------- | -------- | ----------------- |
| useNavigation | 可访问navigation对象，当在组件中不能直接获取navigation属性时，可使用此方法来代替 | function | no       | all      | yes               |
| useRoute      | 可访问route对象，当在组件中不能直接获取route属性时，可使用此方法来代替           | function | no       | all      | yes               |


## 遗留问题

## 其他

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/react-navigation/react-navigation/blob/6.x/packages/core/LICENSE) ，请自由地享受和参与开源。
