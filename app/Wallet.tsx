import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Text } from "react-native-paper";


/**
 * TODO - Wallet Screen
 *
 * @constructor
 */

export default function Wallet(): ReactElement {
    const { t } = useTranslation();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'green'
            }}>{t('wallet.title')}</Text>
        </View>
    )
}