import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./translations/fr.json";
import zh_CN from "./translations/zh_CN.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  fr: fr,
  zh_CN: zh_CN,
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
