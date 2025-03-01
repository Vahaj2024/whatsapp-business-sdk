// See the docs
// here: https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/supported-languages/
// and/or here: https://developers.facebook.com/docs/whatsapp/api/messages/message-templates/#supported-languages
export const SUPPORTED_LANGUAGES_CODES = {
	Afrikaans: "af",
	Albanian: "sq",
	Arabic: "ar",
	Azerbaijani: "az",
	Bengali: "bn",
	Bulgarian: "bg",
	Catalan: "ca",
	Chinese_CHN: "zh_CN",
	Chinese_HKG: "zh_HK",
	Chinese_TAI: "zh_TW",
	Croatian: "hr",
	Czech: "cs",
	Danish: "da",
	Dutch: "nl",
	English: "en",
	English_UK: "en_GB",
	English_US: "en_US",
	Estonian: "et",
	Filipino: "fil",
	Finnish: "fi",
	French: "fr",
	Georgian: "ka",
	German: "de",
	Greek: "el",
	Gujarati: "gu",
	Hausa: "ha",
	Hebrew: "he",
	Hindi: "hi",
	Hungarian: "hu",
	Indonesian: "id",
	Irish: "ga",
	Italian: "it",
	Japanese: "ja",
	Kannada: "kn",
	Kazakh: "kk",
	Kinyarwanda: "rw_RW",
	Korean: "ko",
	Kyrgyzstan: "ky_KG",
	Lao: "lo",
	Latvian: "lv",
	Lithuanian: "lt",
	Macedonian: "mk",
	Malay: "ms",
	Malayalam: "ml",
	Marathi: "mr",
	Norwegian: "nb",
	Persian: "fa",
	Polish: "pl",
	Portuguese_BR: "pt_BR",
	Portuguese_PT: "pt_PT",
	Punjabi: "pa",
	Romanian: "ro",
	Russian: "ru",
	Serbian: "sr",
	Slovak: "sk",
	Slovenian: "sl",
	Spanish: "es",
	SpanishArgentina: "es_AR",
	SpanishSpain: "es_ES",
	SpanishMexico: "es_MX",
	Swahili: "sw",
	Swedish: "sv",
	Tamil: "ta",
	Telugu: "te",
	Thai: "th",
	Turkish: "tr",
	Ukrainian: "uk",
	Urdu: "ur",
	Uzbek: "uz",
	Vietnamese: "vi",
	Zulu: "zu",
} as const;

export type SupportedLanguagesCodeUnion = typeof SUPPORTED_LANGUAGES_CODES[keyof typeof SUPPORTED_LANGUAGES_CODES];
