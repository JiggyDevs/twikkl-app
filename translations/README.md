# Localization

## dependencies

- i18next
- react-i18next

## Structure

`./translations/` contains the main configuration file for i18next

`./transaltions/resources` contains files for each language supported

Official setup guide shows translations in one file but we have separated them into multiple files for better readability and maintainability.

## Usage

### translate text in component

```js
import { useTranslation } from 'react-i18next';
...
const { t } = useTranslation();
...

<Text>{t('key')}</Text>
```

### adding a new translation key

Add the key in the default export of language file in `./translations/resources`

for example, in `./translations/resources/en.ts` we can add the translation for a Page/Component/Screen called `Store` as follows:

```js

export default {
    ...
    store: {
        title: 'Store',
        description: 'This is the store page'
    }
    ...
}
```

Note: the key can be nested as shown above and access with dot notation `t('store.title')`

### Adding a new language

Add a new file in `./translations/resources` with the language code as the file name. For example, `jp.ts` for Japanese.

## Improvements

- creating type for translation keys so that all files can be checked for consistency

## Resources

Blog followed for intial setup: https://saadbashar.medium.com/step-by-step-guide-to-translation-in-react-native-36409d398e22

Official documentation: https://react.i18next.com/getting-started

Full setup guide: https://locize.com/blog/react-i18next/
