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