> 模板版本：v0.2.1

<p align="center">
  <h1 align="center"> <code>@react-navigation/routers</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/react-navigation/react-navigation/tree/6.x/packages/routers">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/react-navigation/react-navigation/blob/6.x/packages/routers/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/react-navigation/react-navigation/tree/6.x/packages/routers)

## 安装与使用

进入到工程目录并输入以下命令：

> [!TIP] # 处替换为 tgz 包的路径

<!-- tabs:start -->

#### **npm**

```bash
npm install @react-navigation/routers@6.1.9
```

#### **yarn**

```bash
yarn add @react-navigation/routers@6.1.9
```

[!TIP] 如果要体验全部demo效果，还需要安装以下依赖，[@react-native-oh-tpl/react-native-safe-area-context](/zh-cn/react-native-safe-area-context.md)和[@react-native-oh-tpl/react-native-gesture-handler](/zh-cn/react-native-gesture-handler.md)需要进行额外的配置，详情请去对应的文档查看：
```bash
npm install @react-navigation/core@6.4.16
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
import { Button, Text, View } from 'react-native';
import {
    createNavigatorFactory,
    useNavigationBuilder,
} from '@react-navigation/core';
import { StackRouter } from '@react-navigation/routers';
import { StackView } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


function StackNavigator({ initialRouteName, children, ...rest }) {
    const { state, navigation, descriptors, NavigationContent } =
        useNavigationBuilder(StackRouter, {
            initialRouteName,
            children,
        });

    return (
        <NavigationContent>
            <StackView
                state={state}
                navigation={navigation}
                descriptors={descriptors}
                
                {...rest}
            />
        </NavigationContent>
    );
}

const Stack = createNavigatorFactory(StackNavigator)();


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}


export default function Apps() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
```



## 约束与限制

### 兼容性

本文档内容基于以下版本验证通过：

1. RNOH：0.72.20; SDK：HarmonyOS NEXT Developer Beta1 B.0.18; IDE：DevEco Studio 5.0.3.200; ROM：3.0.0.18;


## 静态方法

> [!tip] "Platform"列表示该属性在原三方库上支持的平台。

以下方法已验证，更多使用详情请查看 [react-navigation 的文档介绍](https://reactnavigation.org/docs/getting-started/)

| Name         | Description    | Type     | Required | Platform | HarmonyOS Support |
| ------------ | -------------- | -------- | -------- | -------- | ----------------- |
| StackRouter  | 内建stack路由  | function | no       | all      | yes               |
| TabRouter    | 内建tab路由    | function | no       | all      | yes               |
| DrawerRouter | 内建drawer路由 | function | no       | all      | yes               |


## 遗留问题

## 其他

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/react-navigation/react-navigation/blob/6.x/packages/routers/LICENSE) ，请自由地享受和参与开源。
