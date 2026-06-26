const CONTACT_EMAIL = "1257670186@qq.com";
const LAST_UPDATED_DATE = new Date(Date.UTC(2026, 5, 26));
const dateLabels = {
  ar: "آخر تحديث",
  hi: "अंतिम अपडेट",
  pl: "Ostatnia aktualizacja",
  da: "Sidst opdateret",
  de: "Zuletzt aktualisiert",
  ru: "Последнее обновление",
  fr: "Dernière mise à jour",
  "fr-CA": "Dernière mise à jour",
  "zh-Hant": "更新日期",
  fi: "Päivitetty",
  ko: "최종 업데이트",
  nl: "Laatst bijgewerkt",
  ca: "Última actualització",
  "zh-Hans": "更新日期",
  cs: "Poslední aktualizace",
  hr: "Zadnje ažuriranje",
  ro: "Ultima actualizare",
  mr: "शेवटचे अद्यतन",
  ms: "Terakhir dikemas kini",
  bn: "শেষ আপডেট",
  nb: "Sist oppdatert",
  "pt-BR": "Última atualização",
  "pt-PT": "Última atualização",
  ja: "最終更新日",
  sv: "Senast uppdaterad",
  sk: "Naposledy aktualizované",
  sl: "Nazadnje posodobljeno",
  te: "చివరిగా నవీకరించబడింది",
  ta: "கடைசியாக புதுப்பிக்கப்பட்டது",
  th: "อัปเดตล่าสุด",
  tr: "Son güncelleme",
  ur: "آخری تازہ کاری",
  uk: "Останнє оновлення",
  "es-MX": "Última actualización",
  "es-ES": "Última actualización",
  he: "עודכן לאחרונה",
  el: "Τελευταία ενημέρωση",
  hu: "Utolsó frissítés",
  it: "Ultimo aggiornamento",
  id: "Terakhir diperbarui",
  "en-AU": "Last updated",
  "en-CA": "Last updated",
  "en-GB": "Last updated",
  vi: "Cập nhật lần cuối",
  "en-US": "Last updated"
};

const locales = [
  { code: "ar", nativeName: "العربية", dir: "rtl", appName: "السقوط", base: "ar" },
  { code: "hi", nativeName: "हिन्दी", dir: "ltr", appName: "गिरो", base: "hi" },
  { code: "pl", nativeName: "Polski", dir: "ltr", appName: "Spadanie", base: "pl" },
  { code: "da", nativeName: "Dansk", dir: "ltr", appName: "Fald ned", base: "da" },
  { code: "de", nativeName: "Deutsch", dir: "ltr", appName: "Fallspiel", base: "de" },
  { code: "ru", nativeName: "Русский", dir: "ltr", appName: "Падение", base: "ru" },
  { code: "fr", nativeName: "Français", dir: "ltr", appName: "Chute", base: "fr" },
  { code: "fr-CA", nativeName: "Français (Canada)", dir: "ltr", appName: "Chute", base: "fr" },
  { code: "zh-Hant", nativeName: "繁體中文", dir: "ltr", appName: "下落", base: "zh-Hant" },
  { code: "fi", nativeName: "Suomi", dir: "ltr", appName: "Putoaminen", base: "fi" },
  { code: "ko", nativeName: "한국어", dir: "ltr", appName: "낙하", base: "ko" },
  { code: "nl", nativeName: "Nederlands", dir: "ltr", appName: "Vallen", base: "nl" },
  { code: "ca", nativeName: "Català", dir: "ltr", appName: "Caiguda", base: "ca" },
  { code: "zh-Hans", nativeName: "简体中文", dir: "ltr", appName: "下落", base: "zh-Hans" },
  { code: "cs", nativeName: "Čeština", dir: "ltr", appName: "Pád", base: "cs" },
  { code: "hr", nativeName: "Hrvatski", dir: "ltr", appName: "Pad", base: "hr" },
  { code: "ro", nativeName: "Română", dir: "ltr", appName: "Cădere", base: "ro" },
  { code: "mr", nativeName: "मराठी", dir: "ltr", appName: "पडा", base: "mr" },
  { code: "ms", nativeName: "Bahasa Melayu", dir: "ltr", appName: "Jatuh", base: "ms" },
  { code: "bn", nativeName: "বাংলা", dir: "ltr", appName: "পড়ে যান", base: "bn" },
  { code: "nb", nativeName: "Norsk", dir: "ltr", appName: "Fall ned", base: "nb" },
  { code: "pt-BR", nativeName: "Português (Brasil)", dir: "ltr", appName: "Queda", base: "pt-BR" },
  { code: "pt-PT", nativeName: "Português (Portugal)", dir: "ltr", appName: "Queda", base: "pt-PT" },
  { code: "ja", nativeName: "日本語", dir: "ltr", appName: "落下", base: "ja" },
  { code: "sv", nativeName: "Svenska", dir: "ltr", appName: "Fall", base: "sv" },
  { code: "sk", nativeName: "Slovenčina", dir: "ltr", appName: "Pád", base: "sk" },
  { code: "sl", nativeName: "Slovenščina", dir: "ltr", appName: "Padanje", base: "sl" },
  { code: "te", nativeName: "తెలుగు", dir: "ltr", appName: "పడిపో", base: "te" },
  { code: "ta", nativeName: "தமிழ்", dir: "ltr", appName: "விழு", base: "ta" },
  { code: "th", nativeName: "ไทย", dir: "ltr", appName: "ร่วงลง", base: "th" },
  { code: "tr", nativeName: "Türkçe", dir: "ltr", appName: "Düşüş", base: "tr" },
  { code: "ur", nativeName: "اردو", dir: "rtl", appName: "گرنا", base: "ur" },
  { code: "uk", nativeName: "Українська", dir: "ltr", appName: "Падіння", base: "uk" },
  { code: "es-MX", nativeName: "Español (México)", dir: "ltr", appName: "Caída", base: "es" },
  { code: "es-ES", nativeName: "Español (España)", dir: "ltr", appName: "Caída", base: "es" },
  { code: "he", nativeName: "עברית", dir: "rtl", appName: "נפילה", base: "he" },
  { code: "el", nativeName: "Ελληνικά", dir: "ltr", appName: "Πτώση", base: "el" },
  { code: "hu", nativeName: "Magyar", dir: "ltr", appName: "Zuhanás", base: "hu" },
  { code: "it", nativeName: "Italiano", dir: "ltr", appName: "Caduta", base: "it" },
  { code: "id", nativeName: "Bahasa Indonesia", dir: "ltr", appName: "Jatuh", base: "id" },
  { code: "en-AU", nativeName: "English (Australia)", dir: "ltr", appName: "Fall Down", base: "en" },
  { code: "en-CA", nativeName: "English (Canada)", dir: "ltr", appName: "Fall Down", base: "en" },
  { code: "en-GB", nativeName: "English (UK)", dir: "ltr", appName: "Fall Down", base: "en" },
  { code: "vi", nativeName: "Tiếng Việt", dir: "ltr", appName: "Rơi xuống", base: "vi" },
  { code: "en-US", nativeName: "English (US)", dir: "ltr", appName: "Fall Down", base: "en" }
];

const copy = {
  en: {
    languageLabel: "Language",
    navPrivacy: "Privacy Policy",
    navSupport: "Support",
    footer: "Fall Down is an offline-friendly arcade game for iPhone and iPad.",
    privacy: {
      title: "Privacy Policy",
      intro: "Fall Down is an offline-friendly arcade game. You can start playing without logging in, and the game keeps settings and scores on your device for a clean, focused experience.",
      sections: [
        ["Data We Collect", "We do not collect personal data through Fall Down."],
        ["Local Data", "The app may store game settings and progress on your device, including language, music, sound effects, haptics, best score, and recent scores. This data stays on your device and is deleted if you uninstall the app."],
        ["Game Center", "If you use Apple Game Center, Apple may process Game Center information under Apple's own terms and privacy policy. Fall Down only attempts to submit your best floor score when a new local record is created. We do not receive, store, or manage your Game Center account data."],
        ["Permissions and Tracking", "Fall Down does not request location, contacts, photos, camera, microphone, Bluetooth, or advertising identifier access. We do not track you across apps or websites."],
        ["Children", "The app is not built to collect information from children, and we do not knowingly collect personal data from anyone."],
        ["Changes", "We may update this policy when the app changes. The latest version will be posted on this page."],
        ["Contact", `For privacy questions, contact us at ${CONTACT_EMAIL}.`]
      ]
    },
    support: {
      title: "Support",
      intro: "Need help with Fall Down? Use the contact details and quick answers below.",
      sections: [
        ["Contact", `Email: ${CONTACT_EMAIL}. Please include your device model, iOS or iPadOS version, app version, and a short description of the issue.`],
        ["Does the game work offline?", "Yes. Core gameplay works offline. Game Center score submission requires Apple Game Center availability."],
        ["How are scores saved?", "Your best score and recent scores are saved on your device, so you can keep playing and review your progress even when offline."],
        ["How do I change language or audio settings?", "Open Settings inside the app to change language, music, sound effects, and haptics."],
        ["I found a problem", `Please email ${CONTACT_EMAIL} with steps to reproduce the issue. Screenshots or a screen recording are helpful when available.`]
      ]
    }
  },
  "zh-Hans": {
    languageLabel: "语言",
    navPrivacy: "隐私政策",
    navSupport: "支持",
    footer: "《下落》是一款适用于 iPhone 和 iPad 的单人街机游戏。",
    privacy: {
      title: "隐私政策",
      intro: "《下落》是一款适用于 iPhone 和 iPad 的单人街机游戏。你无需登录即可开始，设置和成绩会保存在设备本地，让体验更干净、更专注。",
      sections: [
        ["我们收集的数据", "我们不会通过《下落》收集个人数据。"],
        ["本地数据", "应用可能会在你的设备上保存游戏设置和进度，包括语言、音乐、音效、触感、历史最佳和最近成绩。这些数据保留在你的设备本地；卸载应用后会被删除。"],
        ["Game Center", "如果你使用 Apple Game Center，Apple 可能会按照其条款和隐私政策处理 Game Center 信息。《下落》只会在产生新的本地历史最佳时尝试提交最佳层数。我们不会接收、保存或管理你的 Game Center 账号数据。"],
        ["权限与追踪", "《下落》不会请求定位、通讯录、照片、相机、麦克风、蓝牙或广告标识符权限。我们不会跨 App 或网站追踪你。"],
        ["儿童", "本应用不是为了收集儿童信息而设计，我们不会有意收集任何人的个人数据。"],
        ["变更", "如果应用发生变化，我们可能会更新本政策。最新版本会发布在本页面。"],
        ["联系我们", `如有隐私问题，请通过 ${CONTACT_EMAIL} 联系我们。`]
      ]
    },
    support: {
      title: "支持",
      intro: "如果你在使用《下落》时遇到问题，可以参考下面的信息，或通过邮件联系我们。",
      sections: [
        ["联系方式", `邮箱：${CONTACT_EMAIL}。请附上设备型号、iOS 或 iPadOS 版本、App 版本，以及问题的简短描述。`],
        ["游戏可以离线玩吗？", "可以。核心玩法可离线运行。Game Center 分数提交需要 Apple Game Center 可用。"],
        ["成绩如何保存？", "历史最佳和最近成绩会保存在设备本地，方便你离线玩时继续挑战并回看进度。"],
        ["如何修改语言或音频设置？", "在应用内打开设置，可修改语言、音乐、音效和触感。"],
        ["我发现了问题", `请发送邮件到 ${CONTACT_EMAIL}，并说明复现步骤。如方便，截图或录屏会很有帮助。`]
      ]
    }
  },
  "zh-Hant": {
    languageLabel: "語言",
    navPrivacy: "隱私權政策",
    navSupport: "支援",
    footer: "《下落》是一款適用於 iPhone 和 iPad 的單人街機遊戲。",
    privacy: {
      title: "隱私權政策",
      intro: "《下落》是一款適用於 iPhone 和 iPad 的單人街機遊戲。你無需登入即可開始，設定和成績會保存在裝置本機，讓體驗更乾淨、更專注。",
      sections: [
        ["我們收集的資料", "我們不會透過《下落》收集個人資料。"],
        ["本機資料", "應用程式可能會在你的裝置上儲存遊戲設定與進度，包括語言、音樂、音效、觸覺回饋、歷史最佳和最近成績。這些資料會留在你的裝置上；解除安裝應用程式後會被刪除。"],
        ["Game Center", "如果你使用 Apple Game Center，Apple 可能會依其條款與隱私權政策處理 Game Center 資訊。《下落》只會在產生新的本機歷史最佳時嘗試提交最佳層數。我們不會接收、儲存或管理你的 Game Center 帳號資料。"],
        ["權限與追蹤", "《下落》不會要求定位、聯絡人、照片、相機、麥克風、藍牙或廣告識別碼權限。我們不會跨 App 或網站追蹤你。"],
        ["兒童", "本應用程式並非為收集兒童資訊而設計，我們不會有意收集任何人的個人資料。"],
        ["變更", "如果應用程式有所變更，我們可能會更新本政策。最新版本會發布在本頁面。"],
        ["聯絡我們", `如有隱私問題，請透過 ${CONTACT_EMAIL} 聯絡我們。`]
      ]
    },
    support: {
      title: "支援",
      intro: "如果你在使用《下落》時遇到問題，可以參考以下資訊，或透過電子郵件聯絡我們。",
      sections: [
        ["聯絡方式", `電子郵件：${CONTACT_EMAIL}。請附上裝置型號、iOS 或 iPadOS 版本、App 版本，以及問題的簡短描述。`],
        ["遊戲可以離線玩嗎？", "可以。核心玩法可離線運作。Game Center 分數提交需要 Apple Game Center 可用。"],
        ["成績如何儲存？", "歷史最佳與最近成績會儲存在裝置本機，方便你離線玩時繼續挑戰並查看進度。"],
        ["如何修改語言或音訊設定？", "在應用程式內開啟設定，可修改語言、音樂、音效與觸覺回饋。"],
        ["我發現了問題", `請寄信到 ${CONTACT_EMAIL}，並說明重現步驟。如方便，截圖或錄影會很有幫助。`]
      ]
    }
  }
};

const templateSources = {
  fr: {
    languageLabel: "Langue",
    navPrivacy: "Politique de confidentialité",
    navSupport: "Assistance",
    footer: "{appName} est un jeu d'arcade pensé pour iPhone et iPad.",
    privacyTitle: "Politique de confidentialité",
    privacyIntro: "{appName} est un jeu d'arcade utilisable hors ligne. Vous pouvez jouer sans vous connecter, avec des réglages et scores conservés sur votre appareil pour une expérience claire et concentrée.",
    dataTitle: "Données collectées",
    dataBody: "Nous ne collectons pas de données personnelles via {appName}.",
    localTitle: "Données locales",
    localBody: "L'app peut enregistrer sur votre appareil les réglages et la progression du jeu, notamment la langue, la musique, les effets sonores, les vibrations, le meilleur score et les scores récents. Ces données restent sur votre appareil et sont supprimées si vous désinstallez l'app.",
    gcTitle: "Game Center",
    gcBody: "Si vous utilisez Apple Game Center, Apple peut traiter les informations Game Center selon ses propres conditions et règles de confidentialité. {appName} tente seulement d'envoyer votre meilleur nombre d'étages lorsqu'un nouveau record local est créé. Nous ne recevons, ne stockons ni ne gérons les données de votre compte Game Center.",
    permsTitle: "Autorisations et suivi",
    permsBody: "{appName} ne demande pas l'accès à la localisation, aux contacts, aux photos, à l'appareil photo, au microphone, au Bluetooth ni à l'identifiant publicitaire. Nous ne vous suivons pas entre les apps ou les sites web.",
    childrenTitle: "Enfants",
    childrenBody: "L'app n'est pas conçue pour collecter des informations auprès des enfants, et nous ne collectons sciemment aucune donnée personnelle.",
    changesTitle: "Modifications",
    changesBody: "Nous pouvons mettre à jour cette politique si l'app change. La dernière version sera publiée sur cette page.",
    contactTitle: "Contact",
    contactBody: "Pour toute question sur la confidentialité, contactez-nous à {email}.",
    supportTitle: "Assistance",
    supportIntro: "Besoin d'aide avec {appName} ? Utilisez les coordonnées et les réponses rapides ci-dessous.",
    supportContactTitle: "Contact",
    supportContactBody: "E-mail : {email}. Veuillez indiquer le modèle de l'appareil, la version d'iOS ou d'iPadOS, la version de l'app et une brève description du problème.",
    offlineQ: "Le jeu fonctionne-t-il hors ligne ?",
    offlineA: "Oui. Le jeu principal fonctionne hors ligne. L'envoi du score Game Center nécessite la disponibilité d'Apple Game Center.",
    scoresQ: "Comment les scores sont-ils enregistrés ?",
    scoresA: "Votre meilleur score et vos scores récents sont enregistrés sur votre appareil, afin de continuer à jouer et de suivre votre progression même hors ligne.",
    settingsQ: "Comment modifier la langue ou les réglages audio ?",
    settingsA: "Ouvrez les réglages dans l'app pour modifier la langue, la musique, les effets sonores et les vibrations.",
    issueQ: "J'ai trouvé un problème",
    issueA: "Envoyez un e-mail à {email} avec les étapes permettant de reproduire le problème. Des captures d'écran ou une vidéo sont utiles si possible."
  },
  es: {
    languageLabel: "Idioma",
    navPrivacy: "Política de privacidad",
    navSupport: "Soporte",
    footer: "{appName} es un juego arcade para iPhone y iPad.",
    privacyTitle: "Política de privacidad",
    privacyIntro: "{appName} es un juego arcade apto para jugar sin conexión. Puedes empezar sin iniciar sesión, con ajustes y puntuaciones guardados en tu dispositivo para una experiencia limpia y centrada.",
    dataTitle: "Datos que recopilamos",
    dataBody: "No recopilamos datos personales a través de {appName}.",
    localTitle: "Datos locales",
    localBody: "La app puede guardar en tu dispositivo ajustes y progreso del juego, incluidos idioma, música, efectos de sonido, vibración, mejor puntuación y puntuaciones recientes. Estos datos permanecen en tu dispositivo y se eliminan si desinstalas la app.",
    gcTitle: "Game Center",
    gcBody: "Si usas Apple Game Center, Apple puede procesar información de Game Center conforme a sus propios términos y política de privacidad. {appName} solo intenta enviar tu mejor número de pisos cuando se crea un nuevo récord local. No recibimos, almacenamos ni gestionamos los datos de tu cuenta de Game Center.",
    permsTitle: "Permisos y seguimiento",
    permsBody: "{appName} no solicita acceso a ubicación, contactos, fotos, cámara, micrófono, Bluetooth ni identificador de publicidad. No te rastreamos entre apps o sitios web.",
    childrenTitle: "Menores",
    childrenBody: "La app no está diseñada para recopilar información de menores, y no recopilamos conscientemente datos personales de nadie.",
    changesTitle: "Cambios",
    changesBody: "Podemos actualizar esta política si la app cambia. La versión más reciente se publicará en esta página.",
    contactTitle: "Contacto",
    contactBody: "Para preguntas sobre privacidad, escríbenos a {email}.",
    supportTitle: "Soporte",
    supportIntro: "¿Necesitas ayuda con {appName}? Usa los datos de contacto y las respuestas rápidas siguientes.",
    supportContactTitle: "Contacto",
    supportContactBody: "Correo: {email}. Incluye el modelo del dispositivo, la versión de iOS o iPadOS, la versión de la app y una breve descripción del problema.",
    offlineQ: "¿El juego funciona sin conexión?",
    offlineA: "Sí. La jugabilidad principal funciona sin conexión. El envío de puntuación a Game Center requiere que Apple Game Center esté disponible.",
    scoresQ: "¿Cómo se guardan las puntuaciones?",
    scoresA: "Tu mejor puntuación y las puntuaciones recientes se guardan en tu dispositivo, para que puedas seguir jugando y revisar tu progreso incluso sin conexión.",
    settingsQ: "¿Cómo cambio el idioma o los ajustes de audio?",
    settingsA: "Abre Ajustes dentro de la app para cambiar idioma, música, efectos de sonido y vibración.",
    issueQ: "Encontré un problema",
    issueA: "Envía un correo a {email} con los pasos para reproducir el problema. Las capturas o grabaciones de pantalla ayudan si están disponibles."
  },
  de: {
    languageLabel: "Sprache",
    navPrivacy: "Datenschutzrichtlinie",
    navSupport: "Support",
    footer: "{appName} ist ein Arcade-Spiel für iPhone und iPad.",
    privacyTitle: "Datenschutzrichtlinie",
    privacyIntro: "{appName} ist ein offlinefreundliches Arcade-Spiel. Du kannst ohne Anmeldung spielen; Einstellungen und Ergebnisse bleiben für ein klares, konzentriertes Erlebnis auf deinem Gerät.",
    dataTitle: "Erhobene Daten",
    dataBody: "Wir erheben über {appName} keine personenbezogenen Daten.",
    localTitle: "Lokale Daten",
    localBody: "Die App kann Spieleinstellungen und Fortschritt auf deinem Gerät speichern, darunter Sprache, Musik, Soundeffekte, Haptik, Bestwert und letzte Ergebnisse. Diese Daten bleiben auf deinem Gerät und werden gelöscht, wenn du die App deinstallierst.",
    gcTitle: "Game Center",
    gcBody: "Wenn du Apple Game Center nutzt, kann Apple Game-Center-Informationen gemäß den eigenen Bedingungen und Datenschutzrichtlinien verarbeiten. {appName} versucht nur, deinen besten Etagenwert zu senden, wenn ein neuer lokaler Rekord entsteht. Wir erhalten, speichern oder verwalten keine Daten deines Game-Center-Kontos.",
    permsTitle: "Berechtigungen und Tracking",
    permsBody: "{appName} fordert keinen Zugriff auf Standort, Kontakte, Fotos, Kamera, Mikrofon, Bluetooth oder Werbe-ID an. Wir verfolgen dich nicht über Apps oder Websites hinweg.",
    childrenTitle: "Kinder",
    childrenBody: "Die App ist nicht darauf ausgelegt, Informationen von Kindern zu erfassen, und wir erheben wissentlich keine personenbezogenen Daten.",
    changesTitle: "Änderungen",
    changesBody: "Wir können diese Richtlinie aktualisieren, wenn sich die App ändert. Die neueste Version wird auf dieser Seite veröffentlicht.",
    contactTitle: "Kontakt",
    contactBody: "Bei Datenschutzfragen kontaktiere uns unter {email}.",
    supportTitle: "Support",
    supportIntro: "Brauchst du Hilfe mit {appName}? Nutze die Kontaktdaten und kurzen Antworten unten.",
    supportContactTitle: "Kontakt",
    supportContactBody: "E-Mail: {email}. Bitte nenne Gerätemodell, iOS- oder iPadOS-Version, App-Version und eine kurze Beschreibung des Problems.",
    offlineQ: "Funktioniert das Spiel offline?",
    offlineA: "Ja. Das Hauptspiel funktioniert offline. Die Game-Center-Punkteübermittlung erfordert Apple Game Center.",
    scoresQ: "Wie werden Ergebnisse gespeichert?",
    scoresA: "Dein Bestwert und die letzten Ergebnisse werden auf deinem Gerät gespeichert, damit du auch offline weiterspielen und deinen Fortschritt ansehen kannst.",
    settingsQ: "Wie ändere ich Sprache oder Audioeinstellungen?",
    settingsA: "Öffne die Einstellungen in der App, um Sprache, Musik, Soundeffekte und Haptik zu ändern.",
    issueQ: "Ich habe ein Problem gefunden",
    issueA: "Sende eine E-Mail an {email} mit Schritten zur Reproduktion. Screenshots oder eine Bildschirmaufnahme sind hilfreich, wenn verfügbar."
  }
};

const aliasTemplates = {
  it: ["Italiano", "Informativa sulla privacy", "Assistenza", "Dati raccolti", "Dati locali", "Autorizzazioni e tracciamento", "Contatto"],
  pt: ["Português", "Política de privacidade", "Suporte", "Dados que coletamos", "Dados locais", "Permissões e rastreamento", "Contato"],
  nl: ["Nederlands", "Privacybeleid", "Ondersteuning", "Gegevens die we verzamelen", "Lokale gegevens", "Machtigingen en tracking", "Contact"],
  sv: ["Svenska", "Integritetspolicy", "Support", "Data vi samlar in", "Lokala data", "Behörigheter och spårning", "Kontakt"],
  nb: ["Norsk", "Personvernerklæring", "Brukerstøtte", "Data vi samler inn", "Lokale data", "Tillatelser og sporing", "Kontakt"],
  da: ["Dansk", "Privatlivspolitik", "Support", "Data vi indsamler", "Lokale data", "Tilladelser og sporing", "Kontakt"],
  fi: ["Suomi", "Tietosuojakäytäntö", "Tuki", "Keräämämme tiedot", "Paikalliset tiedot", "Luvat ja seuranta", "Yhteys"],
  pl: ["Polski", "Polityka prywatności", "Pomoc", "Dane, które zbieramy", "Dane lokalne", "Uprawnienia i śledzenie", "Kontakt"],
  cs: ["Čeština", "Zásady ochrany soukromí", "Podpora", "Údaje, které shromažďujeme", "Místní data", "Oprávnění a sledování", "Kontakt"],
  sk: ["Slovenčina", "Zásady ochrany osobných údajov", "Podpora", "Údaje, ktoré zhromažďujeme", "Miestne údaje", "Povolenia a sledovanie", "Kontakt"],
  sl: ["Slovenščina", "Pravilnik o zasebnosti", "Podpora", "Podatki, ki jih zbiramo", "Lokalni podatki", "Dovoljenja in sledenje", "Stik"],
  hr: ["Hrvatski", "Pravila privatnosti", "Podrška", "Podaci koje prikupljamo", "Lokalni podaci", "Dopuštenja i praćenje", "Kontakt"],
  ro: ["Română", "Politica de confidențialitate", "Asistență", "Datele pe care le colectăm", "Date locale", "Permisiuni și urmărire", "Contact"],
  hu: ["Magyar", "Adatvédelmi irányelvek", "Támogatás", "Gyűjtött adatok", "Helyi adatok", "Engedélyek és követés", "Kapcsolat"],
  tr: ["Türkçe", "Gizlilik Politikası", "Destek", "Topladığımız Veriler", "Yerel Veriler", "İzinler ve İzleme", "İletişim"],
  vi: ["Tiếng Việt", "Chính sách quyền riêng tư", "Hỗ trợ", "Dữ liệu chúng tôi thu thập", "Dữ liệu cục bộ", "Quyền và theo dõi", "Liên hệ"],
  id: ["Bahasa Indonesia", "Kebijakan Privasi", "Dukungan", "Data yang Kami Kumpulkan", "Data Lokal", "Izin dan Pelacakan", "Kontak"],
  ms: ["Bahasa Melayu", "Dasar Privasi", "Sokongan", "Data yang Kami Kumpulkan", "Data Setempat", "Kebenaran dan Penjejakan", "Hubungi"],
  ca: ["Català", "Política de privadesa", "Assistència", "Dades que recollim", "Dades locals", "Permisos i seguiment", "Contacte"],
  ru: ["Русский", "Политика конфиденциальности", "Поддержка", "Данные, которые мы собираем", "Локальные данные", "Разрешения и отслеживание", "Контакты"],
  uk: ["Українська", "Політика конфіденційності", "Підтримка", "Дані, які ми збираємо", "Локальні дані", "Дозволи та відстеження", "Контакт"],
  ko: ["한국어", "개인정보 처리방침", "지원", "수집하는 데이터", "로컬 데이터", "권한 및 추적", "문의"],
  ja: ["日本語", "プライバシーポリシー", "サポート", "収集するデータ", "ローカルデータ", "権限とトラッキング", "お問い合わせ"],
  ar: ["العربية", "سياسة الخصوصية", "الدعم", "البيانات التي نجمعها", "البيانات المحلية", "الأذونات والتتبع", "التواصل"],
  he: ["עברית", "מדיניות פרטיות", "תמיכה", "נתונים שאנו אוספים", "נתונים מקומיים", "הרשאות ומעקב", "יצירת קשר"],
  ur: ["اردو", "رازداری کی پالیسی", "معاونت", "وہ ڈیٹا جو ہم جمع کرتے ہیں", "مقامی ڈیٹا", "اجازتیں اور ٹریکنگ", "رابطہ"],
  hi: ["हिन्दी", "गोपनीयता नीति", "सहायता", "हम जो डेटा एकत्र करते हैं", "स्थानीय डेटा", "अनुमतियाँ और ट्रैकिंग", "संपर्क"],
  mr: ["मराठी", "गोपनीयता धोरण", "सहाय्य", "आम्ही गोळा करणारा डेटा", "स्थानिक डेटा", "परवानग्या आणि ट्रॅकिंग", "संपर्क"],
  bn: ["বাংলা", "গোপনীয়তা নীতি", "সহায়তা", "আমরা যে ডেটা সংগ্রহ করি", "স্থানীয় ডেটা", "অনুমতি ও ট্র্যাকিং", "যোগাযোগ"],
  ta: ["தமிழ்", "தனியுரிமைக் கொள்கை", "ஆதரவு", "நாங்கள் சேகரிக்கும் தரவு", "உள்ளூர் தரவு", "அனுமதிகள் மற்றும் கண்காணிப்பு", "தொடர்பு"],
  te: ["తెలుగు", "గోప్యతా విధానం", "మద్దతు", "మేము సేకరించే డేటా", "స్థానిక డేటా", "అనుమతులు మరియు ట్రాకింగ్", "సంప్రదించండి"],
  th: ["ไทย", "นโยบายความเป็นส่วนตัว", "การสนับสนุน", "ข้อมูลที่เราเก็บรวบรวม", "ข้อมูลในเครื่อง", "สิทธิ์และการติดตาม", "ติดต่อ"],
  el: ["Ελληνικά", "Πολιτική απορρήτου", "Υποστήριξη", "Δεδομένα που συλλέγουμε", "Τοπικά δεδομένα", "Άδειες και παρακολούθηση", "Επικοινωνία"]
};

function buildGenericTemplate(baseCode, appName) {
  const labels = aliasTemplates[baseCode] || aliasTemplates.en;
  return {
    languageLabel: labels[0],
    navPrivacy: labels[1],
    navSupport: labels[2],
    footer: `${appName} is an offline-friendly arcade game for iPhone and iPad.`,
    privacy: {
      title: labels[1],
      intro: `${appName} is an offline-friendly arcade game. You can start playing without logging in, with settings and scores kept on your device for a clean, focused experience.`,
      sections: [
        [labels[3], `We do not collect personal data through ${appName}.`],
        [labels[4], "The app may store language, audio and haptic settings, best score, and recent scores on your device. This data stays on your device and is deleted if you uninstall the app."],
        ["Game Center", `If you use Apple Game Center, Apple may process Game Center information under Apple's own terms and privacy policy. ${appName} only attempts to submit your best floor score when a new local record is created. We do not receive, store, or manage your Game Center account data.`],
        [labels[5], `${appName} does not request location, contacts, photos, camera, microphone, Bluetooth, or advertising identifier access. We do not track you across apps or websites.`],
        ["Children", "The app is not built to collect information from children, and we do not knowingly collect personal data from anyone."],
        ["Changes", "We may update this policy when the app changes. The latest version will be posted on this page."],
        [labels[6], `For privacy questions, contact us at ${CONTACT_EMAIL}.`]
      ]
    },
    support: {
      title: labels[2],
      intro: `Need help with ${appName}? Use the contact details and quick answers below.`,
      sections: [
        [labels[6], `Email: ${CONTACT_EMAIL}. Please include your device model, iOS or iPadOS version, app version, and a short description of the issue.`],
        ["Offline play", "Core gameplay works offline. Game Center score submission requires Apple Game Center availability."],
        ["Scores", "Your best score and recent scores are saved on your device, so you can keep playing and review your progress even when offline."],
        ["Settings", "Open Settings inside the app to change language, music, sound effects, and haptics."],
        ["Report a problem", `Please email ${CONTACT_EMAIL} with steps to reproduce the issue. Screenshots or a screen recording are helpful when available.`]
      ]
    }
  };
}

function extraPrivacySections(locale) {
  if (locale.base === "zh-Hans") {
    return [
      ["简要说明", "《下落》的隐私设计目标是尽量少处理数据。游戏核心功能在设备本地运行，不需要创建账号，也不需要把你的游戏数据上传到我们运营的服务器。"],
      ["开发者身份", "本隐私政策适用于《下落》iOS / iPadOS 版本。如果你通过 App Store 下载本应用，购买、下载和更新流程由 Apple 提供。"],
      ["我们不收集的内容", "我们不收集你的姓名、手机号、邮箱、通讯录、照片、位置、设备广告标识符、精确设备标识、游戏操作日志或用于分析用户行为的数据。"],
      ["本地数据的用途", "本地保存的数据仅用于让应用记住你的设置、显示最近成绩、保存历史最佳，并在下次打开时延续一致的游戏体验。"],
      ["专注体验", "游戏过程中没有广告打断，也不会为了运营分析追踪你的游戏行为。你可以把注意力放在操作、节奏和刷新成绩上。"],
      ["离线可玩", "核心玩法不依赖网络连接。除 Apple 系统服务可能用于 App Store、系统更新或 Game Center 外，本应用没有我们自建的网络服务。"],
      ["第三方服务", "本应用可能使用 Apple 提供的 Game Center 和 App Store 服务。相关数据处理由 Apple 按其条款和隐私政策执行。我们不会通过这些服务建立自己的用户档案。"],
      ["数据保留与删除", "本地设置和本地成绩会保留在你的设备上，用于维持游戏体验。你可以通过删除应用来删除这些本地数据。"],
      ["数据共享", "我们不会出售、出租或共享你的个人数据。除 Apple Game Center 由 Apple 自行处理外，本应用没有我们运营的外部数据接收方。"],
      ["安全", "游戏设置和本地成绩保存在设备本地，用于支持离线体验。设备本地数据的安全也取决于你的设备和系统设置。"],
      ["购买与付款", "本应用通过 App Store 付费下载。购买、付款、账单和退款由 Apple 处理，我们不会接收你的付款卡号或 App Store 账号凭据。"],
      ["跨境传输", "游戏核心数据保存在你的设备上。Apple 服务的数据处理位置以 Apple 的政策为准。"],
      ["你的选择", "你可以在应用内关闭音乐、音效和触感反馈，也可以不登录 Game Center。你也可以删除应用以移除设备上的本地游戏数据。"],
      ["适用范围", "本政策只适用于《下落》本身，不适用于 App Store、Game Center、设备系统设置或你通过其他方式访问的第三方网站和服务。"]
    ];
  }

  if (locale.base === "zh-Hant") {
    return [
      ["簡要說明", "《下落》的隱私設計目標是盡量少處理資料。遊戲核心功能在裝置本機執行，不需要建立帳號，也不需要把你的遊戲資料上傳到我們營運的伺服器。"],
      ["開發者身份", "本隱私權政策適用於《下落》iOS / iPadOS 版本。如果你透過 App Store 下載本應用程式，購買、下載和更新流程由 Apple 提供。"],
      ["我們不收集的內容", "我們不收集你的姓名、電話號碼、電子郵件、聯絡人、照片、位置、裝置廣告識別碼、精確裝置識別、遊戲操作記錄或用於分析使用者行為的資料。"],
      ["本機資料的用途", "本機儲存的資料僅用於讓應用程式記住你的設定、顯示最近成績、保存歷史最佳，並在下次開啟時延續一致的遊戲體驗。"],
      ["專注體驗", "遊戲過程中沒有廣告打斷，也不會為了營運分析追蹤你的遊戲行為。你可以把注意力放在操作、節奏和刷新成績上。"],
      ["網路連線", "除 Apple 系統服務可能用於 App Store、系統更新或 Game Center 外，本應用程式沒有我們自建的網路介面。核心玩法不依賴網路連線。"],
      ["第三方服務", "本應用程式可能使用 Apple 提供的 Game Center 和 App Store 服務。相關資料處理由 Apple 依其條款與隱私權政策執行。我們不會透過這些服務建立自己的使用者檔案。"],
      ["資料保留與刪除", "本機設定與本機成績會保留在你的裝置上，用於維持遊戲體驗。你可以透過刪除應用程式來刪除這些本機資料。"],
      ["資料共享", "我們不會出售、出租或共享你的個人資料。除 Apple Game Center 由 Apple 自行處理外，本應用程式沒有我們營運的外部資料接收方。"],
      ["安全", "遊戲設定與本機成績保存在裝置本機，用於支援離線體驗。裝置本機資料的安全也取決於你的裝置與系統設定。"],
      ["購買與付款", "本應用程式透過 App Store 付費下載。購買、付款、帳單與退款由 Apple 處理，我們不會接收你的付款卡號或 App Store 帳號憑證。"],
      ["跨境傳輸", "遊戲核心資料保存在你的裝置上。Apple 服務的資料處理位置以 Apple 的政策為準。"],
      ["你的選擇", "你可以在應用程式內關閉音樂、音效和觸覺回饋，也可以不登入 Game Center。你也可以刪除應用程式以移除裝置上的本機遊戲資料。"],
      ["適用範圍", "本政策只適用於《下落》本身，不適用於 App Store、Game Center、裝置系統設定或你透過其他方式存取的第三方網站和服務。"]
    ];
  }

  return [
    ["Overview", `${locale.appName} is designed with data minimization in mind. Core gameplay runs locally on your device, does not require an account, and does not require uploading game data to a developer-operated server.`],
    ["Developer Role", `This privacy policy applies to the iOS and iPadOS version of ${locale.appName}. If you download the app through the App Store, purchasing, downloading, and updating are provided by Apple.`],
    ["What We Do Not Collect", "We do not collect your name, phone number, email address, contacts, photos, location, advertising identifier, precise device identifier, gameplay logs, or behavioral analytics data."],
    ["Purpose of Local Data", "Local data is used only to remember your settings, show recent scores, save the best score, and keep the play experience consistent the next time you open the app."],
    ["Focused Experience", "Gameplay is not interrupted by ads, and your play behavior is not tracked for operational analysis. The experience is focused on control, rhythm, and improving your score."],
    ["Offline Play", "Core gameplay does not depend on an internet connection. Apart from Apple system services that may be used for the App Store, system updates, or Game Center, the app has no developer-operated network service."],
    ["Third-Party Services", "The app may use Apple Game Center and App Store services. Apple handles those services under Apple's own terms and privacy policy. We do not use those services to build our own user profile about you."],
    ["Retention and Deletion", "Local settings and local scores remain on your device to support the game experience. You can delete this local data by deleting the app from your device."],
    ["Data Sharing", "We do not sell, rent, or share your personal data. Apart from Apple Game Center, which is operated by Apple, the app has no external data recipient operated by us."],
    ["Security", "Because the app does not operate accounts or developer-run servers, your game settings and local scores are not uploaded to our servers. Local data security also depends on your device and system settings."],
    ["Purchases and Payments", "The app is sold through the App Store. Purchases, payments, billing, and refunds are handled by Apple. We do not receive your payment card number or App Store account credentials."],
    ["International Transfers", "Core game data is kept on your device. Apple service processing locations are governed by Apple's policies."],
    ["Your Choices", "You can turn off music, sound effects, and haptics inside the app. You can choose not to sign in to Game Center. You can also delete the app to remove local game data from your device."],
    ["Scope", `This policy applies only to ${locale.appName}. It does not apply to the App Store, Game Center, device system settings, or third-party websites and services you access outside the app.`]
  ];
}

function extraSupportSections(locale) {
  if (locale.base === "zh-Hans") {
    return [
      ["支持范围", "我们可以协助处理应用使用、设置、语言显示、音频触感、成绩保存、Game Center 提交和明显的崩溃或卡顿问题。"],
      ["联系前请准备的信息", "为了更快定位问题，请尽量提供设备型号、iOS 或 iPadOS 版本、App 版本、当前语言、问题发生页面、复现步骤，以及截图或录屏。"],
      ["无法打开或闪退", "请先确认系统版本不低于 iOS 15.0 / iPadOS 15.0，尝试重启设备并确认 App 是最新版本。如果问题仍然存在，请邮件反馈具体设备和系统版本。"],
      ["购买、账单与退款", "本应用通过 App Store 销售。购买记录、账单、付款失败和退款请求由 Apple 处理。请在 App Store 或 Apple 支持中管理相关问题。"],
      ["Game Center 问题", "如果 Game Center 未登录或暂时不可用，核心游戏仍可继续运行。新的本地历史最佳会先保存在设备本地，Game Center 提交失败不会影响本地成绩。"],
      ["成绩没有同步到 Game Center", "请确认设备已登录 Game Center，并且网络可用。本地历史最佳不会被 Game Center 覆盖；Game Center 提交失败也不会影响本地保存。"],
      ["历史最佳或最近成绩", "历史最佳和最近成绩保存在设备本地，方便你离线玩时继续挑战并回看进度。"],
      ["离线玩", "核心玩法可离线运行。离线状态下无法保证 Game Center 提交成功，但本地成绩保存不受影响。"],
      ["音频或触感没有生效", "请先检查应用内设置中的音乐、音效和震动开关，再检查设备静音模式、系统音量和系统触感设置。"],
      ["语言显示问题", "如果某种语言文字被截断、显示不自然或方向不正确，请通过邮件告诉我们语言、页面位置、设备型号和系统版本。"],
      ["干净体验", "下载后即可开始，游戏过程中不会出现广告打断、订阅入口或虚拟货币商城。"],
      ["隐私相关问题", "如果你对本地数据、Game Center 或隐私政策有疑问，可以通过支持邮箱联系我们。"],
      ["最低系统要求", "本应用面向 iPhone 和 iPad，最低支持 iOS 15.0 / iPadOS 15.0。"],
      ["反馈处理", "我们会尽量阅读并处理支持邮件，但无法保证对每封邮件提供即时回复。"]
    ];
  }

  if (locale.base === "zh-Hant") {
    return [
      ["支援範圍", "我們可以協助處理應用程式使用、設定、語言顯示、音訊觸覺回饋、成績儲存、Game Center 提交，以及明顯的閃退或卡頓問題。"],
      ["聯絡前請準備的資訊", "為了更快定位問題，請盡量提供裝置型號、iOS 或 iPadOS 版本、App 版本、目前語言、問題發生頁面、重現步驟，以及截圖或錄影。"],
      ["無法開啟或閃退", "請先確認系統版本不低於 iOS 15.0 / iPadOS 15.0，嘗試重新啟動裝置並確認 App 是最新版本。如果問題仍然存在，請透過電子郵件回報具體裝置與系統版本。"],
      ["購買、帳單與退款", "本應用程式透過 App Store 銷售。購買記錄、帳單、付款失敗與退款請求由 Apple 處理。請在 App Store 或 Apple 支援中管理相關問題。"],
      ["Game Center 問題", "如果 Game Center 未登入或暫時無法使用，核心遊戲仍可繼續運作。新的本機歷史最佳會先儲存在裝置本機，Game Center 提交失敗不會影響本機成績。"],
      ["成績沒有同步到 Game Center", "請確認裝置已登入 Game Center，並且網路可用。本機歷史最佳不會被 Game Center 覆蓋；Game Center 提交失敗也不會影響本機儲存。"],
      ["歷史最佳或最近成績", "歷史最佳與最近成績儲存在裝置本機，方便你離線玩時繼續挑戰並查看進度。"],
      ["離線玩", "核心玩法可離線運作。離線狀態下無法保證 Game Center 提交成功，但本機成績儲存不受影響。"],
      ["音訊或觸覺回饋沒有生效", "請先檢查應用程式內設定中的音樂、音效與震動開關，再檢查裝置靜音模式、系統音量與系統觸覺設定。"],
      ["語言顯示問題", "如果某種語言文字被截斷、顯示不自然或方向不正確，請透過電子郵件告訴我們語言、頁面位置、裝置型號和系統版本。"],
      ["乾淨體驗", "下載後即可開始，遊戲過程中不會出現廣告打斷、訂閱入口或虛擬貨幣商城。"],
      ["隱私相關問題", "如果你對本機資料、Game Center 或隱私權政策有疑問，可以透過支援信箱聯絡我們。"],
      ["最低系統需求", "本應用程式面向 iPhone 和 iPad，最低支援 iOS 15.0 / iPadOS 15.0。"],
      ["意見處理", "我們會盡量閱讀並處理支援郵件，但無法保證對每封郵件提供即時回覆。"]
    ];
  }

  return [
    ["Support Scope", "We can help with app usage, settings, language display, audio or haptic behavior, local score saving, Game Center submission, and clear crash or performance issues."],
    ["Information to Include", "To help us investigate, include your device model, iOS or iPadOS version, app version, selected language, screen where the issue occurred, steps to reproduce it, and screenshots or a screen recording when possible."],
    ["App Will Not Open or Crashes", "First confirm that your device is running iOS 15.0 / iPadOS 15.0 or later, restart the device, and make sure the app is updated. If the issue continues, email us with your device and system details."],
    ["Purchases, Billing, and Refunds", "The app is sold through the App Store. Purchase history, billing issues, failed payments, and refund requests are handled by Apple. Please manage those requests through the App Store or Apple Support."],
    ["Game Center Issues", "If Game Center is not signed in or is temporarily unavailable, core gameplay still works. New local best scores are saved on your device first, and a Game Center submission failure does not affect local scores."],
    ["Score Not Submitted to Game Center", "Make sure you are signed in to Game Center and that the network is available. Your local best score is not overwritten by Game Center, and Game Center submission failure does not affect local saving."],
    ["Best Score and Recent Scores", "Best score and recent scores are saved on your device, so you can keep playing and review your progress even when offline."],
    ["Offline Play", "Core gameplay works offline. Game Center submission may not be available offline, but local score saving is not affected."],
    ["Audio or Haptics Not Working", "First check the in-app Music, Sound Effects, and Haptics settings. Then check your device silent mode, system volume, and system haptic settings."],
    ["Language Display Issues", "If text is clipped, unnatural, or displayed in the wrong direction for a language, email us with the language, screen location, device model, and system version."],
    ["Clean Experience", "After downloading, you can play without ad interruptions, subscription entry points, or virtual currency shops."],
    ["Privacy Questions", "If you have questions about local data, Game Center, or the privacy policy, contact us by email."],
    ["Minimum System Requirements", "The app is designed for iPhone and iPad and supports iOS 15.0 / iPadOS 15.0 or later."],
    ["Support Response", "We try to read and handle support email, but we cannot guarantee an immediate response to every message."]
  ];
}

function getLocale() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  const available = new Set(locales.map((locale) => locale.code));
  if (requested && available.has(requested)) return requested;

  const browserLanguages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const language of browserLanguages) {
    if (available.has(language)) return language;
    const normalized = language.toLowerCase();
    const exactMatch = locales.find((locale) => locale.code.toLowerCase() === normalized);
    if (exactMatch) return exactMatch.code;
    if (
      normalized === "zh" ||
      normalized.startsWith("zh-cn") ||
      normalized.startsWith("zh-sg") ||
      normalized.startsWith("zh-hans")
    ) {
      return "zh-Hans";
    }
    if (
      normalized.startsWith("zh-tw") ||
      normalized.startsWith("zh-hk") ||
      normalized.startsWith("zh-mo") ||
      normalized.startsWith("zh-hant")
    ) {
      return "zh-Hant";
    }
    if (normalized === "no" || normalized.startsWith("no-") || normalized === "nn" || normalized.startsWith("nn-")) {
      return "nb";
    }
    if (normalized === "iw" || normalized.startsWith("iw-")) {
      return "he";
    }
    if (normalized === "in" || normalized.startsWith("in-")) {
      return "id";
    }
    if (normalized === "pt" || normalized.startsWith("pt-")) {
      return normalized.startsWith("pt-br") ? "pt-BR" : "pt-PT";
    }
    if (normalized === "en" || normalized.startsWith("en-")) {
      return "en-US";
    }
    const short = normalized.split("-")[0];
    const match = locales.find((locale) => locale.code === short || locale.base === short);
    if (match) return match.code;
  }

  return "en-US";
}

function fillTemplate(value, locale) {
  return value.replaceAll("{appName}", locale.appName).replaceAll("{email}", CONTACT_EMAIL);
}

function resolveCopy(locale) {
  const localizedCopy = window.fallDownLocalizedCopy || {};
  if (localizedCopy[locale.code]) return localizedCopy[locale.code];
  if (localizedCopy[locale.base]) return localizedCopy[locale.base];
  if (copy[locale.base]) return copy[locale.base];
  if (locale.base === "pt-BR" || locale.base === "pt-PT") return buildGenericTemplate("pt", locale.appName);
  return buildGenericTemplate(locale.base, locale.appName);
}

function withParams(url, localeCode) {
  return `${url}?lang=${encodeURIComponent(localeCode)}`;
}

function formatUpdatedDate(localeCode) {
  try {
    return new Intl.DateTimeFormat(localeCode, {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    }).format(LAST_UPDATED_DATE);
  } catch {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    }).format(LAST_UPDATED_DATE);
  }
}

function renderPage() {
  const pageType = document.body.dataset.page;
  const localeCode = getLocale();
  const locale = locales.find((item) => item.code === localeCode) || locales.find((item) => item.code === "en-US");
  const pageCopy = resolveCopy(locale);
  const activePage = pageCopy[pageType];

  document.documentElement.lang = locale.code;
  document.documentElement.dir = locale.dir;
  document.title = `${locale.appName} - ${activePage.title}`;

  const languageSelect = document.getElementById("languageSelect");
  languageSelect.innerHTML = locales
    .map((item) => `<option value="${item.code}" ${item.code === locale.code ? "selected" : ""}>${item.nativeName}</option>`)
    .join("");
  languageSelect.addEventListener("change", () => {
    window.location.search = `?lang=${encodeURIComponent(languageSelect.value)}`;
  });

  document.getElementById("languageLabel").textContent = pageCopy.languageLabel;
  document.getElementById("brandName").textContent = locale.appName;
  document.getElementById("brandSubtitle").textContent = fillTemplate(pageCopy.footer, locale);
  document.getElementById("pageTitle").textContent = activePage.title;
  document.getElementById("pageIntro").textContent = fillTemplate(activePage.intro, locale);
  document.getElementById("lastUpdatedLabel").textContent = dateLabels[locale.code] || dateLabels[locale.base] || "Last updated";
  document.getElementById("lastUpdated").textContent = formatUpdatedDate(locale.code);
  const privacyLink = document.getElementById("navPrivacyLink");
  if (privacyLink) {
    privacyLink.textContent = pageCopy.navPrivacy;
    privacyLink.href = withParams("privacy.html", locale.code);
  }

  const supportLink = document.getElementById("navSupportLink");
  if (supportLink) {
    supportLink.textContent = pageCopy.navSupport;
    supportLink.href = withParams("support.html", locale.code);
  }
  document.getElementById("footer").textContent = fillTemplate(pageCopy.footer, locale);

  const extraSections = pageCopy.fullLocalized ? [] : (pageType === "privacy" ? extraPrivacySections(locale) : extraSupportSections(locale));
  const sections = document.getElementById("sections");
  sections.innerHTML = activePage.sections.concat(extraSections).map(([title, body]) => `
    <section class="section">
      <h2>${fillTemplate(title, locale)}</h2>
      <p>${fillTemplate(body, locale)}</p>
    </section>
  `).join("");
}

renderPage();
