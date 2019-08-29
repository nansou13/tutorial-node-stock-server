const manageTranslations = require('react-intl-translations-manager').default

manageTranslations({
  messagesDirectory: '.messages',
  translationsDirectory: 'src/translations/l18n/',
  // en is defaultLocale so no need to list en here
  languages: ['fr'],
})
