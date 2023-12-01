require("server-only");
// const { Locale } = require("../../i18n-config");

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  vi: () =>
    import("../../dictionaries/vi.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
