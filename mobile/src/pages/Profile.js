import React, {Component} from 'react';

import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({navigation}) {
    const github_username = navigation.getParam('github_username');

    return(
        <WebView
            source={{ uri: `https://github.com/${github_username}` }}
            style={{ flex: 1 }}
        />
    );
}

export default Profile;