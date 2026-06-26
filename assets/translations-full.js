(function () {
  function makePack(languageLabel, navPrivacy, navSupport, footer, privacyTitle, privacyIntro, privacySections, supportTitle, supportIntro, supportSections) {
    return {
      fullLocalized: true,
      languageLabel,
      navPrivacy,
      navSupport,
      footer,
      privacy: { title: privacyTitle, intro: privacyIntro, sections: privacySections },
      support: { title: supportTitle, intro: supportIntro, sections: supportSections }
    };
  }

  const packs = {
    "en": makePack(
      "Language", "Privacy Policy", "Support",
      "{appName} is a paid single-player arcade game for iPhone and iPad.",
      "Privacy Policy",
      "{appName} is a paid, offline-friendly single-player arcade game. You can start playing without logging in, and your settings and scores stay on your device for a clean, focused experience.",
      [
        ["Personal Data", "We do not collect personal data through {appName}."],
        ["Local Data", "The app may store language, music, sound effects, haptics, best score, and recent scores on your device."],
        ["How Local Data Is Used", "Local data is used to remember your settings, show recent scores, save your best score, and keep the experience consistent when you return."],
        ["Game Center", "If you use Apple Game Center, Apple may process Game Center information under Apple's own terms and privacy policy. {appName} only attempts to submit your best score when you create a new local record."],
        ["Purchases", "The app is sold through the App Store. Purchases, billing, and refunds are handled by Apple. We do not receive your payment card number or App Store account credentials."],
        ["Permissions and Tracking", "The app does not request location, contacts, photos, camera, microphone, Bluetooth, or advertising identifier access. We do not track you across apps or websites."],
        ["Offline Play", "Core gameplay works offline. App Store services, system updates, and Game Center may require Apple's network services."],
        ["Retention and Deletion", "Local settings and local scores remain on your device. You can delete them by deleting the app."],
        ["Children", "The app is not designed to collect information from children, and we do not knowingly collect personal data."],
        ["Changes", "We may update this policy when the app changes. The latest version will be posted on this page."],
        ["Contact", "For privacy questions, contact us at {email}."]
      ],
      "Support",
      "Need help with {appName}? The information below covers common questions and how to contact us.",
      [
        ["Contact", "Email us at {email}. Include your device model, iOS or iPadOS version, app version, selected language, and a short description of the issue."],
        ["What to Include", "Screenshots, screen recordings, and clear steps to reproduce a problem help us investigate faster."],
        ["Offline Play", "Core gameplay works offline. Game Center score submission requires Game Center availability."],
        ["Scores", "Best score and recent scores are saved on your device, so you can keep playing and review your progress even when offline."],
        ["Game Center", "If Game Center is unavailable, local play and local score saving still work. A failed Game Center submission does not affect your local score."],
        ["Purchases and Refunds", "Purchases, billing, and refund requests are handled by Apple through the App Store or Apple Support."],
        ["Settings", "Use the in-app Settings screen to change language, music, sound effects, and haptics."],
        ["Audio and Haptics", "If audio or haptics do not work, check the in-app switches, device silent mode, system volume, and system haptic settings."],
        ["Language or Display Issues", "If text is clipped, unclear, or shown in the wrong direction, email us with the language, screen, device model, and system version."],
        ["Crashes or Performance", "If the app closes unexpectedly or feels slow, restart the device, update the app, and email us if the issue continues."],
        ["System Requirements", "{appName} supports iPhone and iPad running iOS 15.0 / iPadOS 15.0 or later."]
      ]
    ),

    "zh-Hans": makePack(
      "语言", "隐私政策", "支持",
      "《下落》是一款适用于 iPhone 和 iPad 的单人街机游戏。",
      "隐私政策",
      "《下落》是一款适用于 iPhone 和 iPad 的单人街机游戏。你无需登录即可开始，设置和成绩会保存在设备本地，让体验更干净、更专注。",
      [
        ["个人数据", "我们不会通过《下落》收集个人数据。"],
        ["本地数据", "应用可能会在你的设备上保存语言、音乐、音效、触感、历史最佳和最近成绩。"],
        ["本地数据用途", "这些数据用于记住你的设置、显示最近成绩、保存历史最佳，并在下次打开时延续一致的游戏体验。"],
        ["Game Center", "如果你使用 Apple Game Center，Apple 可能会按照其条款和隐私政策处理 Game Center 信息。《下落》只会在产生新的本地记录时尝试提交最佳成绩。"],
        ["购买与付款", "本应用通过 App Store 销售。购买、账单和退款由 Apple 处理。我们不会接收你的付款卡号或 App Store 账号凭据。"],
        ["权限与追踪", "本应用不会请求定位、通讯录、照片、相机、麦克风、蓝牙或广告标识符权限，也不会跨 App 或网站追踪你。"],
        ["离线玩", "核心玩法可离线运行。App Store、系统更新和 Game Center 可能需要 Apple 的网络服务。"],
        ["保留与删除", "本地设置和本地成绩保存在你的设备上。删除应用即可删除这些本地数据。"],
        ["儿童", "本应用不是为了收集儿童信息而设计，我们不会有意收集个人数据。"],
        ["政策变更", "如果应用发生变化，我们可能会更新本政策。最新版本会发布在本页面。"],
        ["联系我们", "如有隐私问题，请通过 {email} 联系我们。"]
      ],
      "支持",
      "如果你在使用《下落》时遇到问题，可以参考下面的信息，或通过邮件联系我们。",
      [
        ["联系方式", "请发送邮件至 {email}。建议附上设备型号、iOS 或 iPadOS 版本、App 版本、当前语言和问题简述。"],
        ["反馈时请提供", "截图、录屏和清晰的复现步骤可以帮助我们更快定位问题。"],
        ["离线玩", "核心玩法可离线运行。Game Center 分数提交需要 Game Center 可用。"],
        ["成绩保存", "历史最佳和最近成绩会保存在设备本地，方便你离线玩时继续挑战并回看进度。"],
        ["Game Center", "如果 Game Center 暂时不可用，本地游戏和本地成绩保存仍然可用。提交失败不会影响本地成绩。"],
        ["购买与退款", "购买、账单和退款请求由 Apple 通过 App Store 或 Apple 支持处理。"],
        ["设置", "你可以在应用内设置中修改语言、音乐、音效和触感。"],
        ["音频与触感", "如果音频或触感没有生效，请检查应用内开关、设备静音模式、系统音量和系统触感设置。"],
        ["语言或显示问题", "如果文字被截断、不清楚或方向不正确，请邮件告知语言、页面、设备型号和系统版本。"],
        ["闪退或性能问题", "如果应用意外关闭或运行缓慢，请先重启设备、更新应用；问题仍存在时请邮件反馈。"],
        ["系统要求", "《下落》支持运行 iOS 15.0 / iPadOS 15.0 或更高版本的 iPhone 和 iPad。"]
      ]
    ),

    "zh-Hant": makePack(
      "語言", "隱私權政策", "支援",
      "《下落》是一款適用於 iPhone 和 iPad 的單人街機遊戲。",
      "隱私權政策",
      "《下落》是一款適用於 iPhone 和 iPad 的單人街機遊戲。你無需登入即可開始，設定和成績會保存在裝置本機，讓體驗更乾淨、更專注。",
      [
        ["個人資料", "我們不會透過《下落》收集個人資料。"],
        ["本機資料", "應用程式可能會在你的裝置上儲存語言、音樂、音效、觸覺回饋、歷史最佳和最近成績。"],
        ["本機資料用途", "這些資料用於記住你的設定、顯示最近成績、保存歷史最佳，並在下次開啟時延續一致的遊戲體驗。"],
        ["Game Center", "如果你使用 Apple Game Center，Apple 可能會依其條款與隱私權政策處理 Game Center 資訊。《下落》只會在產生新的本機紀錄時嘗試提交最佳成績。"],
        ["購買與付款", "本應用程式透過 App Store 銷售。購買、帳單與退款由 Apple 處理。我們不會接收你的付款卡號或 App Store 帳號憑證。"],
        ["權限與追蹤", "本應用程式不會要求定位、聯絡人、照片、相機、麥克風、藍牙或廣告識別碼權限，也不會跨 App 或網站追蹤你。"],
        ["離線玩", "核心玩法可離線運作。App Store、系統更新和 Game Center 可能需要 Apple 的網路服務。"],
        ["保留與刪除", "本機設定與本機成績保存在你的裝置上。刪除應用程式即可刪除這些本機資料。"],
        ["兒童", "本應用程式並非為收集兒童資訊而設計，我們不會有意收集個人資料。"],
        ["政策變更", "如果應用程式發生變化，我們可能會更新本政策。最新版本會發布在本頁面。"],
        ["聯絡我們", "如有隱私問題，請透過 {email} 聯絡我們。"]
      ],
      "支援",
      "如果你在使用《下落》時遇到問題，可以參考以下資訊，或透過電子郵件聯絡我們。",
      [
        ["聯絡方式", "請寄信至 {email}。建議附上裝置型號、iOS 或 iPadOS 版本、App 版本、目前語言和問題簡述。"],
        ["回報時請提供", "截圖、錄影和清楚的重現步驟可以幫助我們更快定位問題。"],
        ["離線玩", "核心玩法可離線運作。Game Center 分數提交需要 Game Center 可用。"],
        ["成績儲存", "歷史最佳和最近成績會儲存在裝置本機，方便你離線玩時繼續挑戰並查看進度。"],
        ["Game Center", "如果 Game Center 暫時無法使用，本機遊戲和本機成績儲存仍然可用。提交失敗不會影響本機成績。"],
        ["購買與退款", "購買、帳單與退款請求由 Apple 透過 App Store 或 Apple 支援處理。"],
        ["設定", "你可以在應用程式內設定中修改語言、音樂、音效與觸覺回饋。"],
        ["音訊與觸覺回饋", "如果音訊或觸覺回饋沒有生效，請檢查應用程式內開關、裝置靜音模式、系統音量與系統觸覺設定。"],
        ["語言或顯示問題", "如果文字被截斷、不清楚或方向不正確，請寄信告知語言、頁面、裝置型號和系統版本。"],
        ["閃退或效能問題", "如果應用程式意外關閉或執行緩慢，請先重新啟動裝置、更新應用程式；問題仍存在時請寄信回報。"],
        ["系統需求", "《下落》支援執行 iOS 15.0 / iPadOS 15.0 或更高版本的 iPhone 和 iPad。"]
      ]
    ),

    "fr": makePack(
      "Langue", "Politique de confidentialité", "Assistance",
      "{appName} est un jeu d'arcade solo payant pour iPhone et iPad.",
      "Politique de confidentialité",
      "{appName} est un jeu d'arcade solo payant, pensé pour jouer aussi hors ligne. Vous pouvez commencer sans vous connecter, et vos réglages ainsi que vos scores restent sur votre appareil pour une expérience claire et concentrée.",
      [
        ["Données personnelles", "Nous ne collectons pas de données personnelles via {appName}."],
        ["Données locales", "L'app peut enregistrer sur votre appareil la langue, la musique, les effets sonores, les vibrations, le meilleur score et les scores récents."],
        ["Utilisation des données locales", "Ces données servent à mémoriser vos réglages, afficher les scores récents, sauvegarder le meilleur score et conserver une expérience cohérente à la prochaine ouverture."],
        ["Game Center", "Si vous utilisez Apple Game Center, Apple peut traiter les informations Game Center selon ses propres conditions et règles de confidentialité. {appName} tente seulement d'envoyer votre meilleur score lorsqu'un nouveau record local est créé."],
        ["Achats", "L'app est vendue via l'App Store. Les achats, la facturation et les remboursements sont traités par Apple. Nous ne recevons pas votre numéro de carte ni vos identifiants App Store."],
        ["Autorisations et suivi", "L'app ne demande pas l'accès à la localisation, aux contacts, aux photos, à l'appareil photo, au microphone, au Bluetooth ou à l'identifiant publicitaire. Nous ne vous suivons pas entre les apps ou les sites web."],
        ["Jeu hors ligne", "Le jeu principal fonctionne hors ligne. L'App Store, les mises à jour système et Game Center peuvent nécessiter les services réseau d'Apple."],
        ["Conservation et suppression", "Les réglages et scores locaux restent sur votre appareil. Vous pouvez les supprimer en supprimant l'app."],
        ["Enfants", "L'app n'est pas conçue pour collecter des informations auprès des enfants, et nous ne collectons pas sciemment de données personnelles."],
        ["Modifications", "Nous pouvons mettre cette politique à jour si l'app évolue. La dernière version sera publiée sur cette page."],
        ["Contact", "Pour toute question sur la confidentialité, contactez-nous à {email}."]
      ],
      "Assistance",
      "Besoin d'aide avec {appName} ? Vous trouverez ci-dessous les réponses aux questions courantes et notre contact.",
      [
        ["Contact", "Écrivez-nous à {email}. Indiquez le modèle de l'appareil, la version d'iOS ou d'iPadOS, la version de l'app, la langue choisie et une courte description du problème."],
        ["Informations utiles", "Des captures d'écran, un enregistrement vidéo et des étapes claires pour reproduire le problème nous aident à enquêter plus vite."],
        ["Jeu hors ligne", "Le jeu principal fonctionne hors ligne. L'envoi du score à Game Center nécessite que Game Center soit disponible."],
        ["Scores", "Le meilleur score et les scores récents sont enregistrés sur votre appareil, afin de continuer à jouer et de suivre votre progression même hors ligne."],
        ["Game Center", "Si Game Center est indisponible, le jeu local et l'enregistrement local des scores continuent de fonctionner. Un échec d'envoi à Game Center n'affecte pas votre score local."],
        ["Achats et remboursements", "Les achats, la facturation et les demandes de remboursement sont traités par Apple via l'App Store ou l'assistance Apple."],
        ["Réglages", "Utilisez les réglages dans l'app pour modifier la langue, la musique, les effets sonores et les vibrations."],
        ["Audio et vibrations", "Si l'audio ou les vibrations ne fonctionnent pas, vérifiez les interrupteurs dans l'app, le mode silencieux, le volume système et les réglages haptiques du système."],
        ["Langue ou affichage", "Si du texte est coupé, peu clair ou dans le mauvais sens, envoyez-nous la langue, l'écran, le modèle de l'appareil et la version du système."],
        ["Blocages ou performances", "Si l'app se ferme de manière inattendue ou semble lente, redémarrez l'appareil, mettez l'app à jour, puis contactez-nous si le problème continue."],
        ["Configuration requise", "{appName} prend en charge les iPhone et iPad sous iOS 15.0 / iPadOS 15.0 ou version ultérieure."]
      ]
    ),

    "es": makePack(
      "Idioma", "Política de privacidad", "Soporte",
      "{appName} es un juego arcade para un jugador de pago para iPhone y iPad.",
      "Política de privacidad",
      "{appName} es un juego arcade para un jugador, de pago y apto para jugar sin conexión. Puedes empezar sin iniciar sesión, y tus ajustes y puntuaciones permanecen en tu dispositivo para una experiencia limpia y centrada.",
      [
        ["Datos personales", "No recopilamos datos personales a través de {appName}."],
        ["Datos locales", "La app puede guardar en tu dispositivo el idioma, la música, los efectos de sonido, la vibración, la mejor puntuación y las puntuaciones recientes."],
        ["Uso de los datos locales", "Estos datos se usan para recordar tus ajustes, mostrar puntuaciones recientes, guardar tu mejor puntuación y mantener una experiencia coherente cuando vuelves."],
        ["Game Center", "Si usas Apple Game Center, Apple puede procesar información de Game Center según sus propios términos y política de privacidad. {appName} solo intenta enviar tu mejor puntuación cuando creas un nuevo récord local."],
        ["Compras", "La app se vende a través del App Store. Apple gestiona compras, facturación y reembolsos. No recibimos tu número de tarjeta ni las credenciales de tu cuenta del App Store."],
        ["Permisos y seguimiento", "La app no solicita acceso a ubicación, contactos, fotos, cámara, micrófono, Bluetooth ni identificador de publicidad. No te rastreamos entre apps o sitios web."],
        ["Juego sin conexión", "La jugabilidad principal funciona sin conexión. El App Store, las actualizaciones del sistema y Game Center pueden requerir servicios de red de Apple."],
        ["Conservación y eliminación", "Los ajustes y puntuaciones locales permanecen en tu dispositivo. Puedes eliminarlos borrando la app."],
        ["Menores", "La app no está diseñada para recopilar información de menores, y no recopilamos conscientemente datos personales."],
        ["Cambios", "Podemos actualizar esta política si la app cambia. La versión más reciente se publicará en esta página."],
        ["Contacto", "Para preguntas sobre privacidad, escríbenos a {email}."]
      ],
      "Soporte",
      "¿Necesitas ayuda con {appName}? Aquí encontrarás respuestas comunes y cómo contactarnos.",
      [
        ["Contacto", "Escríbenos a {email}. Incluye el modelo del dispositivo, la versión de iOS o iPadOS, la versión de la app, el idioma seleccionado y una breve descripción del problema."],
        ["Qué incluir", "Capturas de pantalla, grabaciones y pasos claros para reproducir el problema nos ayudan a investigar más rápido."],
        ["Juego sin conexión", "La jugabilidad principal funciona sin conexión. El envío de puntuación a Game Center requiere que Game Center esté disponible."],
        ["Puntuaciones", "La mejor puntuación y las puntuaciones recientes se guardan en tu dispositivo, para que puedas seguir jugando y revisar tu progreso incluso sin conexión."],
        ["Game Center", "Si Game Center no está disponible, el juego local y el guardado local siguen funcionando. Un fallo al enviar a Game Center no afecta tu puntuación local."],
        ["Compras y reembolsos", "Apple gestiona compras, facturación y solicitudes de reembolso a través del App Store o el soporte de Apple."],
        ["Ajustes", "Usa los ajustes dentro de la app para cambiar idioma, música, efectos de sonido y vibración."],
        ["Audio y vibración", "Si el audio o la vibración no funcionan, revisa los interruptores de la app, el modo silencioso, el volumen del sistema y los ajustes hápticos del sistema."],
        ["Idioma o visualización", "Si el texto aparece cortado, poco claro o en dirección incorrecta, envíanos el idioma, la pantalla, el modelo del dispositivo y la versión del sistema."],
        ["Cierres o rendimiento", "Si la app se cierra inesperadamente o va lenta, reinicia el dispositivo, actualiza la app y escríbenos si el problema continúa."],
        ["Requisitos del sistema", "{appName} es compatible con iPhone y iPad con iOS 15.0 / iPadOS 15.0 o posterior."]
      ]
    ),

    "de": makePack(
      "Sprache", "Datenschutzrichtlinie", "Support",
      "{appName} ist ein kostenpflichtiges Einzelspieler-Arcade-Spiel für iPhone und iPad.",
      "Datenschutzrichtlinie",
      "{appName} ist ein kostenpflichtiges, offlinefreundliches Einzelspieler-Arcade-Spiel. Du kannst ohne Anmeldung spielen; Einstellungen und Ergebnisse bleiben für ein klares, konzentriertes Erlebnis auf deinem Gerät.",
      [
        ["Personenbezogene Daten", "Wir erheben über {appName} keine personenbezogenen Daten."],
        ["Lokale Daten", "Die App kann Sprache, Musik, Soundeffekte, Haptik, Bestwert und letzte Ergebnisse auf deinem Gerät speichern."],
        ["Verwendung lokaler Daten", "Diese Daten merken deine Einstellungen, zeigen letzte Ergebnisse, speichern den Bestwert und sorgen beim nächsten Start für ein gleichbleibendes Erlebnis."],
        ["Game Center", "Wenn du Apple Game Center nutzt, kann Apple Game-Center-Informationen gemäß den eigenen Bedingungen und Datenschutzrichtlinien verarbeiten. {appName} versucht nur, deinen Bestwert zu senden, wenn ein neuer lokaler Rekord entsteht."],
        ["Käufe", "Die App wird über den App Store verkauft. Käufe, Abrechnung und Rückerstattungen werden von Apple abgewickelt. Wir erhalten keine Kartennummer und keine App-Store-Zugangsdaten."],
        ["Berechtigungen und Tracking", "Die App fordert keinen Zugriff auf Standort, Kontakte, Fotos, Kamera, Mikrofon, Bluetooth oder Werbe-ID an. Wir verfolgen dich nicht über Apps oder Websites hinweg."],
        ["Offline-Spiel", "Das Hauptspiel funktioniert offline. App Store, Systemupdates und Game Center können Apples Netzwerkdienste benötigen."],
        ["Speicherung und Löschung", "Lokale Einstellungen und Ergebnisse bleiben auf deinem Gerät. Du kannst sie löschen, indem du die App entfernst."],
        ["Kinder", "Die App ist nicht darauf ausgelegt, Informationen von Kindern zu sammeln, und wir erheben wissentlich keine personenbezogenen Daten."],
        ["Änderungen", "Wir können diese Richtlinie aktualisieren, wenn sich die App ändert. Die neueste Version wird auf dieser Seite veröffentlicht."],
        ["Kontakt", "Bei Datenschutzfragen kontaktiere uns unter {email}."]
      ],
      "Support",
      "Brauchst du Hilfe mit {appName}? Unten findest du häufige Fragen und Kontaktmöglichkeiten.",
      [
        ["Kontakt", "Schreibe uns an {email}. Nenne Gerätemodell, iOS- oder iPadOS-Version, App-Version, gewählte Sprache und eine kurze Problembeschreibung."],
        ["Nützliche Angaben", "Screenshots, Bildschirmaufnahmen und klare Schritte zur Reproduktion helfen uns bei der schnellen Untersuchung."],
        ["Offline-Spiel", "Das Hauptspiel funktioniert offline. Die Punkteübermittlung an Game Center setzt voraus, dass Game Center verfügbar ist."],
        ["Ergebnisse", "Bestwert und letzte Ergebnisse werden auf deinem Gerät gespeichert, damit du auch offline weiterspielen und deinen Fortschritt ansehen kannst."],
        ["Game Center", "Wenn Game Center nicht verfügbar ist, funktionieren lokales Spiel und lokale Ergebnisspeicherung weiter. Ein fehlgeschlagener Game-Center-Versand beeinflusst deinen lokalen Wert nicht."],
        ["Käufe und Rückerstattungen", "Käufe, Abrechnung und Rückerstattungsanfragen werden von Apple über den App Store oder Apple Support bearbeitet."],
        ["Einstellungen", "In den App-Einstellungen kannst du Sprache, Musik, Soundeffekte und Haptik ändern."],
        ["Audio und Haptik", "Wenn Audio oder Haptik nicht funktionieren, prüfe die Schalter in der App, den Stummmodus, die Systemlautstärke und die Systemhaptik."],
        ["Sprache oder Anzeige", "Wenn Text abgeschnitten, unklar oder in falscher Richtung erscheint, sende uns Sprache, Bildschirm, Gerätemodell und Systemversion."],
        ["Abstürze oder Leistung", "Wenn sich die App unerwartet schließt oder langsam wirkt, starte das Gerät neu, aktualisiere die App und kontaktiere uns, falls das Problem bleibt."],
        ["Systemanforderungen", "{appName} unterstützt iPhone und iPad mit iOS 15.0 / iPadOS 15.0 oder neuer."]
      ]
    ),

    "pt-BR": makePack(
      "Idioma", "Política de Privacidade", "Suporte",
      "{appName} é um jogo arcade pago para um jogador no iPhone e iPad.",
      "Política de Privacidade",
      "{appName} é um jogo arcade pago para um jogador, feito para também funcionar offline. Você pode começar sem fazer login, e suas configurações e pontuações ficam no seu dispositivo para uma experiência limpa e focada.",
      [
        ["Dados pessoais", "Não coletamos dados pessoais por meio de {appName}."],
        ["Dados locais", "O app pode salvar no dispositivo idioma, música, efeitos sonoros, resposta tátil, melhor pontuação e pontuações recentes."],
        ["Uso dos dados locais", "Esses dados servem para lembrar suas configurações, mostrar pontuações recentes, salvar seu melhor resultado e manter a experiência consistente."],
        ["Game Center", "Se você usar o Apple Game Center, a Apple poderá processar informações do Game Center segundo seus próprios termos e política de privacidade. {appName} apenas tenta enviar sua melhor pontuação quando você cria um novo recorde local."],
        ["Compras", "O app é vendido pela App Store. Compras, cobrança e reembolsos são tratados pela Apple. Não recebemos seu número de cartão nem suas credenciais da App Store."],
        ["Permissões e rastreamento", "O app não solicita localização, contatos, fotos, câmera, microfone, Bluetooth ou identificador de publicidade. Não rastreamos você entre apps ou sites."],
        ["Jogo offline", "A jogabilidade principal funciona offline. App Store, atualizações do sistema e Game Center podem exigir serviços de rede da Apple."],
        ["Retenção e exclusão", "Configurações e pontuações locais ficam no seu dispositivo. Você pode excluí-las apagando o app."],
        ["Crianças", "O app não foi criado para coletar informações de crianças, e não coletamos dados pessoais intencionalmente."],
        ["Alterações", "Podemos atualizar esta política quando o app mudar. A versão mais recente será publicada nesta página."],
        ["Contato", "Para dúvidas sobre privacidade, fale conosco em {email}."]
      ],
      "Suporte",
      "Precisa de ajuda com {appName}? Veja abaixo respostas comuns e como entrar em contato.",
      [
        ["Contato", "Envie um e-mail para {email}. Inclua modelo do dispositivo, versão do iOS ou iPadOS, versão do app, idioma selecionado e uma breve descrição do problema."],
        ["O que incluir", "Capturas de tela, gravações e passos claros para reproduzir o problema nos ajudam a investigar mais rápido."],
        ["Jogo offline", "A jogabilidade principal funciona offline. O envio de pontuação ao Game Center exige que o Game Center esteja disponível."],
        ["Pontuações", "A melhor pontuação e as pontuações recentes são salvas no dispositivo, para você continuar jogando e acompanhar seu progresso mesmo offline."],
        ["Game Center", "Se o Game Center estiver indisponível, o jogo local e o salvamento local continuam funcionando. Uma falha no envio ao Game Center não afeta sua pontuação local."],
        ["Compras e reembolsos", "Compras, cobrança e pedidos de reembolso são tratados pela Apple pela App Store ou pelo Suporte da Apple."],
        ["Configurações", "Use as configurações dentro do app para mudar idioma, música, efeitos sonoros e resposta tátil."],
        ["Áudio e resposta tátil", "Se áudio ou resposta tátil não funcionarem, verifique os botões no app, modo silencioso, volume do sistema e ajustes táteis do sistema."],
        ["Idioma ou exibição", "Se o texto estiver cortado, pouco claro ou na direção errada, envie idioma, tela, modelo do dispositivo e versão do sistema."],
        ["Falhas ou desempenho", "Se o app fechar inesperadamente ou parecer lento, reinicie o dispositivo, atualize o app e entre em contato se continuar."],
        ["Requisitos do sistema", "{appName} é compatível com iPhone e iPad com iOS 15.0 / iPadOS 15.0 ou posterior."]
      ]
    ),

    "pt-PT": makePack(
      "Idioma", "Política de Privacidade", "Suporte",
      "{appName} é um jogo arcade pago para um jogador no iPhone e iPad.",
      "Política de Privacidade",
      "{appName} é um jogo arcade pago para um jogador, concebido para também funcionar offline. Pode começar sem iniciar sessão, e as suas definições e pontuações ficam no dispositivo para uma experiência limpa e focada.",
      [
        ["Dados pessoais", "Não recolhemos dados pessoais através de {appName}."],
        ["Dados locais", "A app pode guardar no dispositivo o idioma, música, efeitos sonoros, resposta tátil, melhor pontuação e pontuações recentes."],
        ["Utilização dos dados locais", "Estes dados servem para memorizar definições, mostrar pontuações recentes, guardar o melhor resultado e manter a experiência consistente."],
        ["Game Center", "Se usar o Apple Game Center, a Apple poderá processar informações do Game Center segundo os seus próprios termos e política de privacidade. {appName} apenas tenta enviar a melhor pontuação quando cria um novo recorde local."],
        ["Compras", "A app é vendida pela App Store. Compras, faturação e reembolsos são tratados pela Apple. Não recebemos o número do seu cartão nem credenciais da App Store."],
        ["Permissões e seguimento", "A app não solicita localização, contactos, fotografias, câmara, microfone, Bluetooth ou identificador de publicidade. Não o seguimos entre apps ou sites."],
        ["Jogo offline", "A jogabilidade principal funciona offline. App Store, atualizações do sistema e Game Center podem exigir serviços de rede da Apple."],
        ["Retenção e eliminação", "Definições e pontuações locais ficam no seu dispositivo. Pode eliminá-las apagando a app."],
        ["Crianças", "A app não foi concebida para recolher informações de crianças, e não recolhemos dados pessoais intencionalmente."],
        ["Alterações", "Podemos atualizar esta política quando a app mudar. A versão mais recente será publicada nesta página."],
        ["Contacto", "Para questões de privacidade, contacte-nos em {email}."]
      ],
      "Suporte",
      "Precisa de ajuda com {appName}? Veja abaixo respostas comuns e como contactar-nos.",
      [
        ["Contacto", "Envie um e-mail para {email}. Inclua o modelo do dispositivo, versão do iOS ou iPadOS, versão da app, idioma selecionado e uma breve descrição do problema."],
        ["O que incluir", "Capturas de ecrã, gravações e passos claros para reproduzir o problema ajudam-nos a investigar mais depressa."],
        ["Jogo offline", "A jogabilidade principal funciona offline. O envio de pontuação ao Game Center exige que o Game Center esteja disponível."],
        ["Pontuações", "A melhor pontuação e as pontuações recentes são guardadas no dispositivo, para continuares a jogar e acompanhares o progresso mesmo offline."],
        ["Game Center", "Se o Game Center estiver indisponível, o jogo local e a gravação local continuam a funcionar. Uma falha no envio ao Game Center não afeta a pontuação local."],
        ["Compras e reembolsos", "Compras, faturação e pedidos de reembolso são tratados pela Apple através da App Store ou do Suporte Apple."],
        ["Definições", "Use as definições na app para alterar idioma, música, efeitos sonoros e resposta tátil."],
        ["Áudio e resposta tátil", "Se áudio ou resposta tátil não funcionarem, verifique os interruptores na app, modo silencioso, volume do sistema e definições táteis do sistema."],
        ["Idioma ou apresentação", "Se o texto estiver cortado, pouco claro ou na direção errada, envie idioma, ecrã, modelo do dispositivo e versão do sistema."],
        ["Falhas ou desempenho", "Se a app fechar inesperadamente ou parecer lenta, reinicie o dispositivo, atualize a app e contacte-nos se continuar."],
        ["Requisitos do sistema", "{appName} é compatível com iPhone e iPad com iOS 15.0 / iPadOS 15.0 ou posterior."]
      ]
    ),

    "it": makePack(
      "Lingua", "Informativa sulla privacy", "Supporto",
      "{appName} è un gioco arcade a pagamento per giocatore singolo su iPhone e iPad.",
      "Informativa sulla privacy",
      "{appName} è un gioco arcade a pagamento per giocatore singolo, pensato per funzionare anche offline. Puoi iniziare senza accedere, mentre impostazioni e punteggi restano sul dispositivo per un'esperienza pulita e concentrata.",
      [
        ["Dati personali", "Non raccogliamo dati personali tramite {appName}."],
        ["Dati locali", "L'app può salvare sul dispositivo lingua, musica, effetti sonori, feedback aptico, miglior punteggio e punteggi recenti."],
        ["Uso dei dati locali", "Questi dati servono a ricordare le impostazioni, mostrare i punteggi recenti, salvare il miglior punteggio e mantenere coerente l'esperienza."],
        ["Game Center", "Se usi Apple Game Center, Apple può trattare le informazioni di Game Center secondo i propri termini e la propria informativa sulla privacy. {appName} tenta solo di inviare il tuo miglior punteggio quando crei un nuovo record locale."],
        ["Acquisti", "L'app è venduta tramite App Store. Acquisti, fatturazione e rimborsi sono gestiti da Apple. Non riceviamo il numero della carta né le credenziali dell'account App Store."],
        ["Autorizzazioni e tracciamento", "L'app non richiede accesso a posizione, contatti, foto, fotocamera, microfono, Bluetooth o identificatore pubblicitario. Non ti tracciamo tra app o siti web."],
        ["Gioco offline", "Il gioco principale funziona offline. App Store, aggiornamenti di sistema e Game Center possono richiedere i servizi di rete Apple."],
        ["Conservazione ed eliminazione", "Impostazioni e punteggi locali restano sul dispositivo. Puoi eliminarli cancellando l'app."],
        ["Minori", "L'app non è progettata per raccogliere informazioni dai minori, e non raccogliamo consapevolmente dati personali."],
        ["Modifiche", "Potremmo aggiornare questa informativa se l'app cambia. La versione più recente sarà pubblicata in questa pagina."],
        ["Contatto", "Per domande sulla privacy, contattaci a {email}."]
      ],
      "Supporto",
      "Hai bisogno di aiuto con {appName}? Qui trovi risposte comuni e come contattarci.",
      [
        ["Contatto", "Scrivici a {email}. Includi modello del dispositivo, versione iOS o iPadOS, versione dell'app, lingua selezionata e una breve descrizione del problema."],
        ["Cosa includere", "Screenshot, registrazioni e passaggi chiari per riprodurre il problema ci aiutano a indagare più velocemente."],
        ["Gioco offline", "Il gioco principale funziona offline. L'invio del punteggio a Game Center richiede la disponibilità di Game Center."],
        ["Punteggi", "Il miglior punteggio e i punteggi recenti vengono salvati sul dispositivo, così puoi continuare a giocare e seguire i progressi anche offline."],
        ["Game Center", "Se Game Center non è disponibile, il gioco locale e il salvataggio locale continuano a funzionare. Un errore di invio a Game Center non influisce sul punteggio locale."],
        ["Acquisti e rimborsi", "Acquisti, fatturazione e richieste di rimborso sono gestiti da Apple tramite App Store o Supporto Apple."],
        ["Impostazioni", "Usa le impostazioni nell'app per cambiare lingua, musica, effetti sonori e feedback aptico."],
        ["Audio e feedback aptico", "Se audio o feedback aptico non funzionano, controlla gli interruttori nell'app, la modalità silenziosa, il volume di sistema e le impostazioni aptiche del sistema."],
        ["Lingua o visualizzazione", "Se il testo è tagliato, poco chiaro o nella direzione sbagliata, inviaci lingua, schermata, modello del dispositivo e versione del sistema."],
        ["Chiusure o prestazioni", "Se l'app si chiude in modo imprevisto o sembra lenta, riavvia il dispositivo, aggiorna l'app e contattaci se il problema continua."],
        ["Requisiti di sistema", "{appName} supporta iPhone e iPad con iOS 15.0 / iPadOS 15.0 o versioni successive."]
      ]
    ),

    "nl": makePack(
      "Taal", "Privacybeleid", "Ondersteuning",
      "{appName} is een betaalde arcadegame voor één speler op iPhone en iPad.",
      "Privacybeleid",
      "{appName} is gemaakt om ook offline te spelen. Je kunt beginnen zonder in te loggen; instellingen en scores blijven op je apparaat voor een rustige en gerichte ervaring.",
      [["Persoonsgegevens","Wij verzamelen geen persoonsgegevens via {appName}."],["Lokale gegevens","De app kan taal, muziek, geluidseffecten, haptiek, beste score en recente scores op je apparaat bewaren."],["Apple-services","Als je Game Center gebruikt, verwerkt Apple die informatie volgens Apples eigen voorwaarden en privacybeleid. De App Store verwerkt aankopen, facturering en terugbetalingen."],["Machtigingen en tracking","De app vraagt geen toegang tot locatie, contacten, foto's, camera, microfoon, Bluetooth of advertentie-ID. We volgen je niet tussen apps of websites."],["Offline en verwijderen","De kern van de game werkt offline. Lokale gegevens blijven op je apparaat en worden verwijderd wanneer je de app verwijdert."],["Contact","Voor privacyvragen kun je mailen naar {email}."]],
      "Ondersteuning",
      "Hulp nodig met {appName}? Hieronder vind je veelvoorkomende antwoorden en contactinformatie.",
      [["Contact","Mail ons via {email} met apparaatmodel, iOS- of iPadOS-versie, appversie, gekozen taal en een korte beschrijving."],["Offline spelen en scores","Beste score en recente scores worden op je apparaat opgeslagen, zodat je offline kunt blijven spelen en je voortgang kunt bekijken."],["Game Center","Als Game Center niet beschikbaar is, blijven lokaal spelen en lokaal opslaan werken. Een mislukte inzending beïnvloedt je lokale score niet."],["Aankopen en instellingen","Aankopen en terugbetalingen lopen via Apple. In de app kun je taal, muziek, geluidseffecten en haptiek aanpassen."],["Problemen melden","Stuur screenshots, opnames en stappen om het probleem te reproduceren. {appName} ondersteunt iOS 15.0 / iPadOS 15.0 of nieuwer."]]
    ),

    "sv": makePack(
      "Språk", "Integritetspolicy", "Support",
      "{appName} är ett betalt arkadspel för en spelare på iPhone och iPad.",
      "Integritetspolicy",
      "{appName} är gjort för att även fungera offline. Du kan börja spela utan inloggning, och inställningar samt poäng sparas på din enhet för en ren och fokuserad upplevelse.",
      [["Personuppgifter","Vi samlar inte in personuppgifter via {appName}."],["Lokala data","Appen kan spara språk, musik, ljudeffekter, haptik, bästa poäng och senaste poäng på din enhet."],["Apple-tjänster","Om du använder Game Center behandlar Apple sådan information enligt sina egna villkor och sin integritetspolicy. App Store hanterar köp, fakturering och återbetalningar."],["Behörigheter och spårning","Appen begär inte plats, kontakter, bilder, kamera, mikrofon, Bluetooth eller annonsidentifierare. Vi spårar dig inte mellan appar eller webbplatser."],["Offline och radering","Spelets kärna fungerar offline. Lokala data finns kvar på enheten och raderas när du tar bort appen."],["Kontakt","Kontakta oss på {email} om du har integritetsfrågor."]],
      "Support",
      "Behöver du hjälp med {appName}? Här finns vanliga svar och kontaktuppgifter.",
      [["Kontakt","Mejla {email} med enhetsmodell, iOS- eller iPadOS-version, appversion, valt språk och en kort beskrivning."],["Offline och poäng","Bästa poäng och senaste poäng sparas på enheten, så att du kan fortsätta spela och följa dina framsteg även offline."],["Game Center","Om Game Center inte är tillgängligt fungerar lokalt spel och lokal sparning ändå. Ett misslyckat skickande påverkar inte din lokala poäng."],["Köp och inställningar","Köp och återbetalningar hanteras av Apple. I appen kan du ändra språk, musik, ljudeffekter och haptik."],["Rapportera problem","Skicka skärmbilder, inspelningar och steg för att återskapa problemet. {appName} stöder iOS 15.0 / iPadOS 15.0 eller senare."]]
    ),

    "da": makePack(
      "Sprog", "Privatlivspolitik", "Support",
      "{appName} er et betalt arkadespil for én spiller på iPhone og iPad.",
      "Privatlivspolitik",
      "{appName} er lavet til også at fungere offline. Du kan begynde uden login, og indstillinger samt scorer bliver på din enhed for en ren og fokuseret oplevelse.",
      [["Personoplysninger","Vi indsamler ikke personoplysninger gennem {appName}."],["Lokale data","Appen kan gemme sprog, musik, lydeffekter, haptik, bedste score og seneste scorer på din enhed."],["Apple-tjenester","Hvis du bruger Game Center, behandler Apple disse oplysninger efter Apples egne vilkår og privatlivspolitik. App Store håndterer køb, betaling og refusioner."],["Tilladelser og sporing","Appen anmoder ikke om placering, kontakter, fotos, kamera, mikrofon, Bluetooth eller annonce-id. Vi sporer dig ikke på tværs af apps eller websites."],["Offline og sletning","Kernespillet fungerer offline. Lokale data bliver på enheden og slettes, når du sletter appen."],["Kontakt","Kontakt os på {email} ved spørgsmål om privatliv."]],
      "Support",
      "Har du brug for hjælp til {appName}? Her finder du almindelige svar og kontaktoplysninger.",
      [["Kontakt","Skriv til {email} med enhedsmodel, iOS- eller iPadOS-version, appversion, valgt sprog og en kort beskrivelse."],["Offline og scorer","Bedste score og seneste scorer gemmes på enheden, så du kan fortsætte med at spille og følge din fremgang, også offline."],["Game Center","Hvis Game Center ikke er tilgængeligt, fungerer lokalt spil og lokal lagring stadig. En mislykket indsendelse påvirker ikke din lokale score."],["Køb og indstillinger","Køb og refusioner håndteres af Apple. I appen kan du ændre sprog, musik, lydeffekter og haptik."],["Rapportér problemer","Send skærmbilleder, optagelser og trin til at genskabe problemet. {appName} understøtter iOS 15.0 / iPadOS 15.0 eller nyere."]]
    ),

    "nb": makePack(
      "Språk", "Personvernerklæring", "Brukerstøtte",
      "{appName} er et betalt arkadespill for én spiller på iPhone og iPad.",
      "Personvernerklæring",
      "{appName} er laget for å fungere også uten nett. Du kan starte uten innlogging, og innstillinger og poeng blir lagret på enheten for en ryddig og fokusert opplevelse.",
      [["Personopplysninger","Vi samler ikke inn personopplysninger gjennom {appName}."],["Lokale data","Appen kan lagre språk, musikk, lydeffekter, haptikk, beste poengsum og nylige poengsummer på enheten."],["Apple-tjenester","Hvis du bruker Game Center, behandler Apple slik informasjon etter egne vilkår og personvernregler. App Store håndterer kjøp, fakturering og refusjoner."],["Tillatelser og sporing","Appen ber ikke om posisjon, kontakter, bilder, kamera, mikrofon, Bluetooth eller annonse-ID. Vi sporer deg ikke på tvers av apper eller nettsteder."],["Frakoblet bruk og sletting","Kjernespillet fungerer uten nett. Lokale data blir på enheten og slettes når du sletter appen."],["Kontakt","Kontakt oss på {email} ved spørsmål om personvern."]],
      "Brukerstøtte",
      "Trenger du hjelp med {appName}? Her finner du vanlige svar og kontaktinformasjon.",
      [["Kontakt","Send e-post til {email} med enhetsmodell, iOS- eller iPadOS-versjon, appversjon, valgt språk og en kort beskrivelse."],["Uten nett og poeng","Beste poengsum og nylige poengsummer lagres på enheten, slik at du kan fortsette å spille og følge fremgangen også uten nett."],["Game Center","Hvis Game Center ikke er tilgjengelig, fungerer lokal spilling og lokal lagring fortsatt. En mislykket innsending påvirker ikke lokal poengsum."],["Kjøp og innstillinger","Kjøp og refusjoner håndteres av Apple. I appen kan du endre språk, musikk, lydeffekter og haptikk."],["Rapporter problemer","Send skjermbilder, opptak og trinn for å gjenskape problemet. {appName} støtter iOS 15.0 / iPadOS 15.0 eller nyere."]]
    ),

    "fi": makePack(
      "Kieli", "Tietosuojakäytäntö", "Tuki",
      "{appName} on maksullinen yhden pelaajan arcade-peli iPhonelle ja iPadille.",
      "Tietosuojakäytäntö",
      "{appName} on suunniteltu toimimaan myös offline-tilassa. Voit aloittaa ilman kirjautumista, ja asetukset sekä pisteet pysyvät laitteellasi selkeää ja keskittynyttä kokemusta varten.",
      [["Henkilötiedot","Emme kerää henkilötietoja {appName}-sovelluksen kautta."],["Paikalliset tiedot","Sovellus voi tallentaa laitteelle kielen, musiikin, äänitehosteet, tuntopalautteen, parhaan tuloksen ja viimeisimmät tulokset."],["Apple-palvelut","Jos käytät Game Centeriä, Apple voi käsitellä näitä tietoja omien ehtojensa ja tietosuojakäytäntönsä mukaisesti. App Store käsittelee ostot, laskutuksen ja hyvitykset."],["Luvat ja seuranta","Sovellus ei pyydä sijaintia, yhteystietoja, kuvia, kameraa, mikrofonia, Bluetoothia tai mainostunnistetta. Emme seuraa sinua sovellusten tai verkkosivustojen välillä."],["Offline ja poistaminen","Pelin ydin toimii offline-tilassa. Paikalliset tiedot pysyvät laitteella ja poistuvat, kun poistat sovelluksen."],["Yhteys","Tietosuojaan liittyvissä kysymyksissä ota yhteyttä osoitteeseen {email}."]],
      "Tuki",
      "Tarvitsetko apua {appName}-pelin kanssa? Alla on yleisiä vastauksia ja yhteystiedot.",
      [["Yhteys","Lähetä sähköpostia osoitteeseen {email}. Kerro laitemalli, iOS- tai iPadOS-versio, sovellusversio, valittu kieli ja lyhyt kuvaus ongelmasta."],["Offline ja tulokset","Paras tulos ja viimeisimmät tulokset tallennetaan laitteelle, jotta voit jatkaa pelaamista ja seurata edistymistä myös offline-tilassa."],["Game Center","Jos Game Center ei ole käytettävissä, paikallinen pelaaminen ja tallennus toimivat silti. Epäonnistunut lähetys ei vaikuta paikalliseen tulokseen."],["Ostot ja asetukset","Apple käsittelee ostot ja hyvitykset. Sovelluksessa voit vaihtaa kieltä, musiikkia, äänitehosteita ja tuntopalautetta."],["Ilmoita ongelmasta","Lähetä kuvakaappauksia, tallenteita ja vaiheet ongelman toistamiseen. {appName} tukee iOS 15.0 / iPadOS 15.0 tai uudempaa."]]
    ),

    "pl": makePack(
      "Język", "Polityka prywatności", "Pomoc",
      "{appName} to płatna gra arcade dla jednego gracza na iPhone'a i iPada.",
      "Polityka prywatności",
      "{appName} działa także offline. Możesz zacząć bez logowania, a ustawienia i wyniki pozostają na urządzeniu, aby gra była czysta i skupiona.",
      [["Dane osobowe","Nie zbieramy danych osobowych przez {appName}."],["Dane lokalne","Aplikacja może zapisywać na urządzeniu język, muzykę, efekty dźwiękowe, haptykę, najlepszy wynik i ostatnie wyniki."],["Usługi Apple","Jeśli używasz Game Center, Apple przetwarza te informacje zgodnie z własnymi zasadami. App Store obsługuje zakupy, rozliczenia i zwroty."],["Uprawnienia i śledzenie","Aplikacja nie prosi o lokalizację, kontakty, zdjęcia, kamerę, mikrofon, Bluetooth ani identyfikator reklamowy. Nie śledzimy Cię między aplikacjami ani stronami."],["Offline i usuwanie","Podstawowa rozgrywka działa offline. Dane lokalne pozostają na urządzeniu i są usuwane po skasowaniu aplikacji."],["Kontakt","W sprawach prywatności napisz do nas: {email}."]],
      "Pomoc",
      "Potrzebujesz pomocy z {appName}? Poniżej znajdziesz odpowiedzi i kontakt.",
      [["Kontakt","Napisz na {email}, podając model urządzenia, wersję iOS lub iPadOS, wersję aplikacji, wybrany język i krótki opis problemu."],["Offline i wyniki","Najlepszy wynik i ostatnie wyniki są zapisywane na urządzeniu, dzięki czemu możesz grać dalej i śledzić postępy także offline."],["Game Center","Jeśli Game Center jest niedostępne, lokalna gra i lokalny zapis nadal działają. Nieudane wysłanie nie wpływa na lokalny wynik."],["Zakupy i ustawienia","Zakupy i zwroty obsługuje Apple. W aplikacji zmienisz język, muzykę, efekty dźwiękowe i haptykę."],["Zgłaszanie problemów","Wyślij zrzuty ekranu, nagrania i kroki odtworzenia problemu. {appName} obsługuje iOS 15.0 / iPadOS 15.0 lub nowszy."]]
    ),

    "cs": makePack(
      "Jazyk", "Zásady ochrany soukromí", "Podpora",
      "{appName} je placená arkádová hra pro jednoho hráče na iPhone a iPad.",
      "Zásady ochrany soukromí",
      "{appName} je navržena i pro hraní offline. Můžete začít bez přihlášení a nastavení i skóre zůstávají v zařízení pro čistý a soustředěný zážitek.",
      [["Osobní údaje","Prostřednictvím {appName} neshromažďujeme osobní údaje."],["Místní data","Aplikace může v zařízení ukládat jazyk, hudbu, zvukové efekty, haptiku, nejlepší skóre a poslední skóre."],["Služby Apple","Pokud používáte Game Center, Apple zpracovává tyto informace podle vlastních podmínek. App Store zajišťuje nákupy, platby a refundace."],["Oprávnění a sledování","Aplikace nežádá o polohu, kontakty, fotografie, kameru, mikrofon, Bluetooth ani reklamní identifikátor. Nesledujeme vás mezi aplikacemi ani weby."],["Offline a smazání","Hlavní hra funguje offline. Místní data zůstávají v zařízení a odstraní se při smazání aplikace."],["Kontakt","S otázkami k soukromí nás kontaktujte na {email}."]],
      "Podpora",
      "Potřebujete pomoc s {appName}? Níže najdete časté odpovědi a kontakt.",
      [["Kontakt","Napište na {email} a uveďte model zařízení, verzi iOS nebo iPadOS, verzi aplikace, zvolený jazyk a krátký popis problému."],["Offline a skóre","Nejlepší a poslední skóre se ukládají v zařízení, takže můžete pokračovat ve hře a sledovat postup i offline."],["Game Center","Pokud Game Center není dostupné, místní hraní i ukládání dál fungují. Neúspěšné odeslání neovlivní místní skóre."],["Nákupy a nastavení","Nákupy a refundace řeší Apple. V aplikaci můžete změnit jazyk, hudbu, zvukové efekty a haptiku."],["Hlášení problémů","Pošlete snímky obrazovky, záznamy a kroky k opakování problému. {appName} podporuje iOS 15.0 / iPadOS 15.0 nebo novější."]]
    ),

    "sk": makePack(
      "Jazyk", "Zásady ochrany osobných údajov", "Podpora",
      "{appName} je platená arkádová hra pre jedného hráča na iPhone a iPad.",
      "Zásady ochrany osobných údajov",
      "{appName} je navrhnutá aj na hranie offline. Môžete začať bez prihlásenia a nastavenia aj skóre zostávajú v zariadení pre čistý a sústredený zážitok.",
      [["Osobné údaje","Prostredníctvom {appName} nezhromažďujeme osobné údaje."],["Miestne údaje","Aplikácia môže v zariadení ukladať jazyk, hudbu, zvukové efekty, haptiku, najlepšie skóre a posledné skóre."],["Služby Apple","Ak používate Game Center, Apple spracúva tieto informácie podľa vlastných podmienok. App Store rieši nákupy, platby a refundácie."],["Povolenia a sledovanie","Aplikácia nežiada polohu, kontakty, fotografie, kameru, mikrofón, Bluetooth ani reklamný identifikátor. Nesledujeme vás medzi aplikáciami ani webmi."],["Offline a vymazanie","Hlavná hra funguje offline. Miestne údaje zostávajú v zariadení a vymažú sa pri odstránení aplikácie."],["Kontakt","S otázkami o súkromí nás kontaktujte na {email}."]],
      "Podpora",
      "Potrebujete pomoc s {appName}? Nižšie nájdete časté odpovede a kontakt.",
      [["Kontakt","Napíšte na {email} a uveďte model zariadenia, verziu iOS alebo iPadOS, verziu aplikácie, zvolený jazyk a krátky opis problému."],["Offline a skóre","Najlepšie a posledné skóre sa ukladajú v zariadení, takže môžete pokračovať v hre a sledovať postup aj offline."],["Game Center","Ak Game Center nie je dostupné, lokálne hranie a ukladanie fungujú ďalej. Neúspešné odoslanie neovplyvní lokálne skóre."],["Nákupy a nastavenia","Nákupy a refundácie rieši Apple. V aplikácii môžete zmeniť jazyk, hudbu, zvukové efekty a haptiku."],["Hlásenie problémov","Pošlite snímky obrazovky, záznamy a kroky na zopakovanie problému. {appName} podporuje iOS 15.0 / iPadOS 15.0 alebo novší."]]
    ),

    "sl": makePack(
      "Jezik", "Pravilnik o zasebnosti", "Podpora",
      "{appName} je plačljiva arkadna igra za enega igralca za iPhone in iPad.",
      "Pravilnik o zasebnosti",
      "{appName} je zasnovana tudi za igranje brez povezave. Začnete lahko brez prijave, nastavitve in rezultati pa ostanejo v napravi za čisto in osredotočeno izkušnjo.",
      [["Osebni podatki","Prek {appName} ne zbiramo osebnih podatkov."],["Lokalni podatki","Aplikacija lahko v napravi shrani jezik, glasbo, zvočne učinke, haptični odziv, najboljši rezultat in nedavne rezultate."],["Storitve Apple","Če uporabljate Game Center, Apple te informacije obdeluje po svojih pravilih. App Store obravnava nakupe, obračun in vračila."],["Dovoljenja in sledenje","Aplikacija ne zahteva lokacije, stikov, fotografij, kamere, mikrofona, Bluetootha ali oglaševalskega ID-ja. Ne sledimo vam med aplikacijami ali spletnimi mesti."],["Brez povezave in brisanje","Osnovna igra deluje brez povezave. Lokalni podatki ostanejo v napravi in se izbrišejo, ko izbrišete aplikacijo."],["Stik","Za vprašanja o zasebnosti pišite na {email}."]],
      "Podpora",
      "Potrebujete pomoč za {appName}? Spodaj so pogosti odgovori in kontakt.",
      [["Stik","Pišite na {email} z modelom naprave, različico iOS ali iPadOS, različico aplikacije, izbranim jezikom in kratkim opisom težave."],["Brez povezave in rezultati","Najboljši in nedavni rezultati se shranijo v napravi, zato lahko nadaljujete igranje in spremljate napredek tudi brez povezave."],["Game Center","Če Game Center ni na voljo, lokalno igranje in shranjevanje še vedno delujeta. Neuspešna oddaja ne vpliva na lokalni rezultat."],["Nakupi in nastavitve","Nakupe in vračila obravnava Apple. V aplikaciji lahko spremenite jezik, glasbo, zvočne učinke in haptični odziv."],["Prijava težav","Pošljite posnetke zaslona, posnetke in korake za ponovitev težave. {appName} podpira iOS 15.0 / iPadOS 15.0 ali novejši."]]
    ),

    "hr": makePack(
      "Jezik", "Pravila privatnosti", "Podrška",
      "{appName} je plaćena arkadna igra za jednog igrača za iPhone i iPad.",
      "Pravila privatnosti",
      "{appName} je osmišljen i za igranje izvan mreže. Možete početi bez prijave, a postavke i rezultati ostaju na uređaju za čisto i usmjereno iskustvo.",
      [["Osobni podaci","Ne prikupljamo osobne podatke putem {appName}."],["Lokalni podaci","Aplikacija može spremiti jezik, glazbu, zvučne efekte, haptički odgovor, najbolji rezultat i nedavne rezultate na uređaju."],["Apple usluge","Ako koristite Game Center, Apple obrađuje te informacije prema svojim pravilima. App Store obrađuje kupnje, naplatu i povrate."],["Dopuštenja i praćenje","Aplikacija ne traži lokaciju, kontakte, fotografije, kameru, mikrofon, Bluetooth ili oglašivački ID. Ne pratimo vas između aplikacija ili web-mjesta."],["Izvan mreže i brisanje","Osnovna igra radi izvan mreže. Lokalni podaci ostaju na uređaju i brišu se kada izbrišete aplikaciju."],["Kontakt","Za pitanja o privatnosti javite se na {email}."]],
      "Podrška",
      "Trebate pomoć za {appName}? U nastavku su česti odgovori i kontakt.",
      [["Kontakt","Pošaljite e-mail na {email} s modelom uređaja, verzijom iOS-a ili iPadOS-a, verzijom aplikacije, odabranim jezikom i kratkim opisom."],["Izvan mreže i rezultati","Najbolji i nedavni rezultati spremaju se na uređaj, pa možete nastaviti igrati i pratiti napredak i izvan mreže."],["Game Center","Ako Game Center nije dostupan, lokalna igra i spremanje i dalje rade. Neuspjelo slanje ne utječe na lokalni rezultat."],["Kupnje i postavke","Kupnje i povrate obrađuje Apple. U aplikaciji možete promijeniti jezik, glazbu, zvučne efekte i haptički odgovor."],["Prijava problema","Pošaljite snimke zaslona, snimke i korake za ponavljanje problema. {appName} podržava iOS 15.0 / iPadOS 15.0 ili noviji."]]
    ),

    "ro": makePack(
      "Limbă", "Politica de confidențialitate", "Asistență",
      "{appName} este un joc arcade plătit pentru un singur jucător pe iPhone și iPad.",
      "Politica de confidențialitate",
      "{appName} este creat să funcționeze și offline. Poți începe fără autentificare, iar setările și scorurile rămân pe dispozitiv pentru o experiență curată și concentrată.",
      [["Date personale","Nu colectăm date personale prin {appName}."],["Date locale","Aplicația poate salva pe dispozitiv limba, muzica, efectele sonore, feedbackul haptic, cel mai bun scor și scorurile recente."],["Servicii Apple","Dacă folosești Game Center, Apple procesează aceste informații conform propriilor reguli. App Store gestionează achizițiile, facturarea și rambursările."],["Permisiuni și urmărire","Aplicația nu solicită locație, contacte, fotografii, cameră, microfon, Bluetooth sau identificator publicitar. Nu te urmărim între aplicații sau site-uri."],["Offline și ștergere","Jocul principal funcționează offline. Datele locale rămân pe dispozitiv și sunt șterse când ștergi aplicația."],["Contact","Pentru întrebări despre confidențialitate, contactează-ne la {email}."]],
      "Asistență",
      "Ai nevoie de ajutor cu {appName}? Mai jos găsești răspunsuri frecvente și date de contact.",
      [["Contact","Trimite e-mail la {email} cu modelul dispozitivului, versiunea iOS sau iPadOS, versiunea aplicației, limba aleasă și o descriere scurtă."],["Offline și scoruri","Cel mai bun scor și scorurile recente sunt salvate pe dispozitiv, ca să poți continua jocul și să îți urmărești progresul și offline."],["Game Center","Dacă Game Center nu este disponibil, jocul local și salvarea locală continuă să funcționeze. O trimitere eșuată nu afectează scorul local."],["Achiziții și setări","Achizițiile și rambursările sunt gestionate de Apple. În aplicație poți schimba limba, muzica, efectele sonore și feedbackul haptic."],["Raportarea problemelor","Trimite capturi, înregistrări și pași de reproducere. {appName} acceptă iOS 15.0 / iPadOS 15.0 sau mai nou."]]
    ),

    "hu": makePack(
      "Nyelv", "Adatvédelmi irányelvek", "Támogatás",
      "{appName} fizetős, egyjátékos arcade játék iPhone-ra és iPadre.",
      "Adatvédelmi irányelvek",
      "{appName} offline játékra is készült. Bejelentkezés nélkül elkezdheted, a beállítások és pontszámok pedig az eszközödön maradnak a tiszta, fókuszált élményért.",
      [["Személyes adatok","A {appName} használatával nem gyűjtünk személyes adatokat."],["Helyi adatok","Az app a nyelvet, zenét, hangeffekteket, haptikát, legjobb pontszámot és legutóbbi pontszámokat tárolhatja az eszközön."],["Apple-szolgáltatások","Ha Game Centert használsz, az Apple saját feltételei szerint kezeli ezeket az információkat. Az App Store kezeli a vásárlást, számlázást és visszatérítést."],["Engedélyek és követés","Az app nem kér helyadatot, névjegyeket, fotókat, kamerát, mikrofont, Bluetooth-t vagy hirdetési azonosítót. Nem követünk appok vagy webhelyek között."],["Offline és törlés","Az alapjáték offline működik. A helyi adatok az eszközön maradnak, és az app törlésével törlődnek."],["Kapcsolat","Adatvédelmi kérdés esetén írj ide: {email}."]],
      "Támogatás",
      "Segítség kell a {appName} használatához? Alább gyakori válaszokat és elérhetőséget találsz.",
      [["Kapcsolat","Írj a {email} címre az eszköz modelljével, iOS vagy iPadOS verzióval, appverzióval, kiválasztott nyelvvel és rövid leírással."],["Offline és pontszámok","A legjobb és legutóbbi pontszámok az eszközön mentődnek, így offline is folytathatod a játékot és követheted a fejlődésed."],["Game Center","Ha a Game Center nem elérhető, a helyi játék és mentés továbbra is működik. A sikertelen beküldés nem érinti a helyi pontszámot."],["Vásárlás és beállítások","A vásárlást és visszatérítést az Apple kezeli. Az appban módosítható a nyelv, zene, hangeffekt és haptika."],["Hiba jelentése","Küldj képernyőképeket, felvételeket és reprodukciós lépéseket. A {appName} iOS 15.0 / iPadOS 15.0 vagy újabb rendszert támogat."]]
    ),

    "tr": makePack(
      "Dil", "Gizlilik Politikası", "Destek",
      "{appName}, iPhone ve iPad için ücretli tek oyunculu bir arcade oyunudur.",
      "Gizlilik Politikası",
      "{appName} çevrimdışı da oynanacak şekilde tasarlanmıştır. Giriş yapmadan başlayabilir, ayarlarınız ve puanlarınız temiz ve odaklı bir deneyim için cihazınızda kalır.",
      [["Kişisel veriler","{appName} aracılığıyla kişisel veri toplamıyoruz."],["Yerel veriler","Uygulama dil, müzik, ses efektleri, dokunsal geri bildirim, en iyi puan ve son puanları cihazınızda saklayabilir."],["Apple hizmetleri","Game Center kullanırsanız Apple bu bilgileri kendi şartları ve gizlilik politikası kapsamında işleyebilir. App Store satın alma, faturalama ve iadeleri yönetir."],["İzinler ve izleme","Uygulama konum, kişiler, fotoğraflar, kamera, mikrofon, Bluetooth veya reklam kimliği erişimi istemez. Sizi uygulamalar veya web siteleri arasında izlemeyiz."],["Çevrimdışı ve silme","Temel oynanış çevrimdışı çalışır. Yerel veriler cihazınızda kalır ve uygulamayı silince kaldırılır."],["İletişim","Gizlilik soruları için bize {email} adresinden ulaşın."]],
      "Destek",
      "{appName} için yardıma mı ihtiyacınız var? Sık yanıtlar ve iletişim bilgileri aşağıdadır.",
      [["İletişim","Cihaz modeli, iOS veya iPadOS sürümü, uygulama sürümü, seçili dil ve kısa açıklama ile {email} adresine yazın."],["Çevrimdışı ve puanlar","En iyi puan ve son puanlar cihazınıza kaydedilir; böylece çevrimdışıyken de oynamaya devam edebilir ve ilerlemenizi takip edebilirsiniz."],["Game Center","Game Center kullanılamıyorsa yerel oyun ve yerel kayıt çalışmaya devam eder. Başarısız gönderim yerel puanı etkilemez."],["Satın alma ve ayarlar","Satın alma ve iadeleri Apple yönetir. Uygulama içinden dil, müzik, ses efektleri ve dokunsal geri bildirimi değiştirebilirsiniz."],["Sorun bildirme","Ekran görüntüsü, kayıt ve yeniden oluşturma adımlarını gönderin. {appName} iOS 15.0 / iPadOS 15.0 veya üstünü destekler."]]
    ),

    "ru": makePack(
      "Язык", "Политика конфиденциальности", "Поддержка",
      "{appName} — платная аркадная игра для одного игрока на iPhone и iPad.",
      "Политика конфиденциальности",
      "{appName} создана так, чтобы в неё можно было играть и офлайн. Вы можете начать без входа в аккаунт, а настройки и результаты остаются на вашем устройстве для спокойного и сосредоточенного опыта.",
      [["Персональные данные","Мы не собираем персональные данные через {appName}."],["Локальные данные","Приложение может сохранять на устройстве язык, музыку, звуковые эффекты, тактильную отдачу, лучший результат и недавние результаты."],["Сервисы Apple","Если вы используете Game Center, Apple обрабатывает эти сведения по своим правилам. App Store обрабатывает покупки, оплату и возвраты."],["Разрешения и отслеживание","Приложение не запрашивает геолокацию, контакты, фотографии, камеру, микрофон, Bluetooth или рекламный идентификатор. Мы не отслеживаем вас между приложениями или сайтами."],["Офлайн и удаление","Основной игровой процесс работает офлайн. Локальные данные остаются на устройстве и удаляются при удалении приложения."],["Контакт","По вопросам конфиденциальности пишите на {email}."]],
      "Поддержка",
      "Нужна помощь с {appName}? Ниже приведены частые ответы и контакты.",
      [["Контакт","Напишите на {email}, указав модель устройства, версию iOS или iPadOS, версию приложения, выбранный язык и краткое описание проблемы."],["Офлайн и результаты","Лучший и недавние результаты сохраняются на устройстве, чтобы вы могли продолжать играть и отслеживать прогресс даже офлайн."],["Game Center","Если Game Center недоступен, локальная игра и сохранение продолжают работать. Неудачная отправка не влияет на локальный результат."],["Покупки и настройки","Покупки и возвраты обрабатывает Apple. В приложении можно изменить язык, музыку, звуковые эффекты и тактильную отдачу."],["Сообщить о проблеме","Пришлите снимки экрана, запись и шаги воспроизведения. {appName} поддерживает iOS 15.0 / iPadOS 15.0 или новее."]]
    ),

    "uk": makePack(
      "Мова", "Політика конфіденційності", "Підтримка",
      "{appName} — платна аркадна гра для одного гравця на iPhone та iPad.",
      "Політика конфіденційності",
      "{appName} створена так, щоб у неї можна було грати й офлайн. Ви можете почати без входу, а налаштування та результати залишаються на вашому пристрої для чистого й зосередженого досвіду.",
      [["Персональні дані","Ми не збираємо персональні дані через {appName}."],["Локальні дані","Додаток може зберігати на пристрої мову, музику, звукові ефекти, тактильний відгук, найкращий результат і нещодавні результати."],["Сервіси Apple","Якщо ви використовуєте Game Center, Apple обробляє ці відомості за власними правилами. App Store обробляє покупки, оплату та повернення."],["Дозволи й відстеження","Додаток не запитує геолокацію, контакти, фото, камеру, мікрофон, Bluetooth або рекламний ідентифікатор. Ми не відстежуємо вас між додатками чи сайтами."],["Офлайн і видалення","Основний ігровий процес працює офлайн. Локальні дані залишаються на пристрої та видаляються після видалення додатка."],["Контакт","З питань конфіденційності пишіть на {email}."]],
      "Підтримка",
      "Потрібна допомога з {appName}? Нижче наведено поширені відповіді та контакти.",
      [["Контакт","Напишіть на {email}, указавши модель пристрою, версію iOS або iPadOS, версію додатка, вибрану мову та короткий опис проблеми."],["Офлайн і результати","Найкращий і нещодавні результати зберігаються на пристрої, щоб ви могли продовжувати гру й відстежувати прогрес навіть офлайн."],["Game Center","Якщо Game Center недоступний, локальна гра й локальне збереження працюють далі. Невдала відправка не впливає на локальний результат."],["Покупки й налаштування","Покупки та повернення обробляє Apple. У додатку можна змінити мову, музику, звукові ефекти й тактильний відгук."],["Повідомити про проблему","Надішліть знімки екрана, запис і кроки відтворення. {appName} підтримує iOS 15.0 / iPadOS 15.0 або новішу версію."]]
    ),

    "el": makePack(
      "Γλώσσα", "Πολιτική απορρήτου", "Υποστήριξη",
      "Το {appName} είναι ένα επί πληρωμή arcade παιχνίδι ενός παίκτη για iPhone και iPad.",
      "Πολιτική απορρήτου",
      "Το {appName} έχει σχεδιαστεί ώστε να παίζεται και εκτός σύνδεσης. Μπορείτε να ξεκινήσετε χωρίς σύνδεση σε λογαριασμό, ενώ οι ρυθμίσεις και τα σκορ μένουν στη συσκευή σας για καθαρή και συγκεντρωμένη εμπειρία.",
      [["Προσωπικά δεδομένα","Δεν συλλέγουμε προσωπικά δεδομένα μέσω του {appName}."],["Τοπικά δεδομένα","Η εφαρμογή μπορεί να αποθηκεύει στη συσκευή γλώσσα, μουσική, ηχητικά εφέ, απτική ανάδραση, καλύτερο σκορ και πρόσφατα σκορ."],["Υπηρεσίες Apple","Αν χρησιμοποιείτε Game Center, η Apple επεξεργάζεται αυτές τις πληροφορίες με τους δικούς της όρους. Το App Store χειρίζεται αγορές, χρεώσεις και επιστροφές."],["Άδειες και παρακολούθηση","Η εφαρμογή δεν ζητά τοποθεσία, επαφές, φωτογραφίες, κάμερα, μικρόφωνο, Bluetooth ή διαφημιστικό αναγνωριστικό. Δεν σας παρακολουθούμε μεταξύ εφαρμογών ή ιστότοπων."],["Εκτός σύνδεσης και διαγραφή","Το βασικό παιχνίδι λειτουργεί εκτός σύνδεσης. Τα τοπικά δεδομένα μένουν στη συσκευή και διαγράφονται όταν διαγράψετε την εφαρμογή."],["Επικοινωνία","Για ερωτήσεις απορρήτου, επικοινωνήστε στο {email}."]],
      "Υποστήριξη",
      "Χρειάζεστε βοήθεια με το {appName}; Παρακάτω υπάρχουν συχνές απαντήσεις και στοιχεία επικοινωνίας.",
      [["Επικοινωνία","Στείλτε email στο {email} με μοντέλο συσκευής, έκδοση iOS ή iPadOS, έκδοση εφαρμογής, επιλεγμένη γλώσσα και σύντομη περιγραφή."],["Εκτός σύνδεσης και σκορ","Το καλύτερο και τα πρόσφατα σκορ αποθηκεύονται στη συσκευή, ώστε να συνεχίζετε το παιχνίδι και να παρακολουθείτε την πρόοδό σας ακόμη και εκτός σύνδεσης."],["Game Center","Αν το Game Center δεν είναι διαθέσιμο, το τοπικό παιχνίδι και η τοπική αποθήκευση συνεχίζουν να λειτουργούν. Μια αποτυχημένη υποβολή δεν επηρεάζει το τοπικό σκορ."],["Αγορές και ρυθμίσεις","Οι αγορές και επιστροφές χειρίζονται από την Apple. Στην εφαρμογή μπορείτε να αλλάξετε γλώσσα, μουσική, ηχητικά εφέ και απτική ανάδραση."],["Αναφορά προβλήματος","Στείλτε στιγμιότυπα, εγγραφή και βήματα αναπαραγωγής. Το {appName} υποστηρίζει iOS 15.0 / iPadOS 15.0 ή νεότερο."]]
    ),

    "ca": makePack(
      "Idioma", "Política de privadesa", "Assistència",
      "{appName} és un joc arcade de pagament per a un jugador a iPhone i iPad.",
      "Política de privadesa",
      "{appName} està pensat per funcionar també sense connexió. Pots començar sense iniciar sessió, i la configuració i les puntuacions es queden al dispositiu per a una experiència neta i centrada.",
      [["Dades personals","No recollim dades personals a través de {appName}."],["Dades locals","L'app pot desar al dispositiu l'idioma, la música, els efectes de so, la resposta hàptica, la millor puntuació i les puntuacions recents."],["Serveis d'Apple","Si utilitzes Game Center, Apple processa aquesta informació segons les seves pròpies condicions. L'App Store gestiona compres, facturació i reembossaments."],["Permisos i seguiment","L'app no demana ubicació, contactes, fotos, càmera, micròfon, Bluetooth ni identificador publicitari. No et seguim entre apps o llocs web."],["Sense connexió i eliminació","El joc principal funciona sense connexió. Les dades locals romanen al dispositiu i s'eliminen quan esborres l'app."],["Contacte","Per preguntes de privadesa, escriu-nos a {email}."]],
      "Assistència",
      "Necessites ajuda amb {appName}? A continuació trobaràs respostes habituals i contacte.",
      [["Contacte","Escriu a {email} amb el model del dispositiu, versió d'iOS o iPadOS, versió de l'app, idioma triat i una breu descripció."],["Sense connexió i puntuacions","La millor puntuació i les recents es desen al dispositiu, perquè puguis continuar jugant i seguir el progrés fins i tot sense connexió."],["Game Center","Si Game Center no està disponible, el joc local i el desat local continuen funcionant. Un enviament fallit no afecta la puntuació local."],["Compres i configuració","Apple gestiona compres i reembossaments. A l'app pots canviar idioma, música, efectes de so i resposta hàptica."],["Informar d'un problema","Envia captures, gravacions i passos per reproduir el problema. {appName} admet iOS 15.0 / iPadOS 15.0 o posterior."]]
    ),

    "id": makePack(
      "Bahasa", "Kebijakan Privasi", "Dukungan",
      "{appName} adalah game arcade berbayar untuk satu pemain di iPhone dan iPad.",
      "Kebijakan Privasi",
      "{appName} dibuat agar juga dapat dimainkan offline. Anda dapat mulai tanpa login, dan pengaturan serta skor tetap tersimpan di perangkat untuk pengalaman yang bersih dan fokus.",
      [["Data pribadi","Kami tidak mengumpulkan data pribadi melalui {appName}."],["Data lokal","Aplikasi dapat menyimpan bahasa, musik, efek suara, haptik, skor terbaik, dan skor terbaru di perangkat."],["Layanan Apple","Jika Anda menggunakan Game Center, Apple memproses informasi tersebut sesuai ketentuannya. App Store menangani pembelian, penagihan, dan pengembalian dana."],["Izin dan pelacakan","Aplikasi tidak meminta lokasi, kontak, foto, kamera, mikrofon, Bluetooth, atau pengenal iklan. Kami tidak melacak Anda antar aplikasi atau situs web."],["Offline dan penghapusan","Permainan utama berjalan offline. Data lokal tetap di perangkat dan dihapus saat Anda menghapus aplikasi."],["Kontak","Untuk pertanyaan privasi, hubungi kami di {email}."]],
      "Dukungan",
      "Butuh bantuan dengan {appName}? Berikut jawaban umum dan cara menghubungi kami.",
      [["Kontak","Kirim email ke {email} dengan model perangkat, versi iOS atau iPadOS, versi aplikasi, bahasa yang dipilih, dan deskripsi singkat."],["Offline dan skor","Skor terbaik dan skor terbaru disimpan di perangkat, sehingga Anda dapat terus bermain dan melihat progres meski offline."],["Game Center","Jika Game Center tidak tersedia, permainan dan penyimpanan lokal tetap berfungsi. Kegagalan pengiriman tidak memengaruhi skor lokal."],["Pembelian dan pengaturan","Pembelian dan pengembalian dana ditangani Apple. Di aplikasi Anda dapat mengubah bahasa, musik, efek suara, dan haptik."],["Laporkan masalah","Kirim tangkapan layar, rekaman, dan langkah untuk mengulang masalah. {appName} mendukung iOS 15.0 / iPadOS 15.0 atau lebih baru."]]
    ),

    "ms": makePack(
      "Bahasa", "Dasar Privasi", "Sokongan",
      "{appName} ialah permainan arked berbayar untuk seorang pemain pada iPhone dan iPad.",
      "Dasar Privasi",
      "{appName} direka untuk dimainkan juga secara luar talian. Anda boleh mula tanpa log masuk, dan tetapan serta skor kekal pada peranti untuk pengalaman yang bersih dan fokus.",
      [["Data peribadi","Kami tidak mengumpul data peribadi melalui {appName}."],["Data setempat","Aplikasi boleh menyimpan bahasa, muzik, kesan bunyi, haptik, skor terbaik dan skor terkini pada peranti."],["Perkhidmatan Apple","Jika anda menggunakan Game Center, Apple memproses maklumat itu mengikut syaratnya sendiri. App Store mengendalikan pembelian, pengebilan dan bayaran balik."],["Kebenaran dan penjejakan","Aplikasi tidak meminta lokasi, kenalan, foto, kamera, mikrofon, Bluetooth atau pengecam iklan. Kami tidak menjejaki anda merentas aplikasi atau laman web."],["Luar talian dan pemadaman","Permainan utama berfungsi luar talian. Data setempat kekal pada peranti dan dipadam apabila anda memadam aplikasi."],["Hubungi","Untuk soalan privasi, hubungi kami di {email}."]],
      "Sokongan",
      "Perlukan bantuan dengan {appName}? Berikut jawapan biasa dan cara menghubungi kami.",
      [["Hubungi","E-mel {email} dengan model peranti, versi iOS atau iPadOS, versi aplikasi, bahasa dipilih dan penerangan ringkas."],["Luar talian dan skor","Skor terbaik dan skor terkini disimpan pada peranti, supaya anda boleh terus bermain dan melihat kemajuan walaupun luar talian."],["Game Center","Jika Game Center tidak tersedia, permainan dan simpanan setempat masih berfungsi. Kegagalan penghantaran tidak menjejaskan skor setempat."],["Pembelian dan tetapan","Pembelian dan bayaran balik dikendalikan oleh Apple. Dalam aplikasi anda boleh menukar bahasa, muzik, kesan bunyi dan haptik."],["Laporkan masalah","Hantar tangkapan skrin, rakaman dan langkah mengulang masalah. {appName} menyokong iOS 15.0 / iPadOS 15.0 atau lebih baharu."]]
    ),

    "vi": makePack(
      "Ngôn ngữ", "Chính sách quyền riêng tư", "Hỗ trợ",
      "{appName} là trò chơi arcade trả phí dành cho một người chơi trên iPhone và iPad.",
      "Chính sách quyền riêng tư",
      "{appName} được thiết kế để có thể chơi cả khi ngoại tuyến. Bạn có thể bắt đầu mà không cần đăng nhập, còn cài đặt và điểm số được lưu trên thiết bị để trải nghiệm gọn gàng và tập trung.",
      [["Dữ liệu cá nhân","Chúng tôi không thu thập dữ liệu cá nhân thông qua {appName}."],["Dữ liệu cục bộ","Ứng dụng có thể lưu ngôn ngữ, nhạc, hiệu ứng âm thanh, phản hồi xúc giác, điểm cao nhất và điểm gần đây trên thiết bị."],["Dịch vụ Apple","Nếu bạn dùng Game Center, Apple xử lý thông tin đó theo điều khoản riêng. App Store xử lý mua hàng, thanh toán và hoàn tiền."],["Quyền và theo dõi","Ứng dụng không yêu cầu vị trí, danh bạ, ảnh, camera, micrô, Bluetooth hoặc mã định danh quảng cáo. Chúng tôi không theo dõi bạn giữa các ứng dụng hoặc trang web."],["Ngoại tuyến và xóa", "Lối chơi chính hoạt động ngoại tuyến. Dữ liệu cục bộ ở lại trên thiết bị và bị xóa khi bạn xóa ứng dụng."],["Liên hệ","Nếu có câu hỏi về quyền riêng tư, hãy liên hệ {email}."]],
      "Hỗ trợ",
      "Cần trợ giúp với {appName}? Dưới đây là câu trả lời thường gặp và cách liên hệ.",
      [["Liên hệ","Gửi email đến {email} kèm mẫu thiết bị, phiên bản iOS hoặc iPadOS, phiên bản ứng dụng, ngôn ngữ đã chọn và mô tả ngắn."],["Ngoại tuyến và điểm số","Điểm cao nhất và điểm gần đây được lưu trên thiết bị, giúp bạn tiếp tục chơi và xem tiến độ ngay cả khi ngoại tuyến."],["Game Center","Nếu Game Center không khả dụng, chơi và lưu cục bộ vẫn hoạt động. Gửi thất bại không ảnh hưởng điểm cục bộ."],["Mua hàng và cài đặt","Mua hàng và hoàn tiền do Apple xử lý. Trong ứng dụng, bạn có thể đổi ngôn ngữ, nhạc, hiệu ứng âm thanh và phản hồi xúc giác."],["Báo lỗi","Gửi ảnh chụp, bản ghi và các bước tái hiện lỗi. {appName} hỗ trợ iOS 15.0 / iPadOS 15.0 trở lên."]]
    ),

    "ja": makePack(
      "言語", "プライバシーポリシー", "サポート",
      "{appName}は iPhone と iPad 向けの有料シングルプレイヤー・アーケードゲームです。",
      "プライバシーポリシー",
      "{appName}はオフラインでも遊べるように設計されています。ログインせずに始められ、設定やスコアは端末内に保存されるため、余計な中断のない集中した体験を保てます。",
      [["個人データ","{appName}を通じて個人データを収集しません。"],["ローカルデータ","アプリは言語、音楽、効果音、触覚フィードバック、最高スコア、最近のスコアを端末に保存する場合があります。"],["Apple のサービス","Game Center を使用する場合、その情報は Apple の規約とプライバシーポリシーに従って処理されます。App Store は購入、請求、返金を処理します。"],["権限とトラッキング","位置情報、連絡先、写真、カメラ、マイク、Bluetooth、広告識別子へのアクセスは要求しません。アプリやウェブサイトをまたいで追跡しません。"],["オフラインと削除","基本のゲームプレイはオフラインで動作します。ローカルデータは端末に残り、アプリを削除すると削除されます。"],["お問い合わせ","プライバシーに関する質問は {email} までご連絡ください。"]],
      "サポート",
      "{appName}についてお困りですか？よくある回答と連絡先を以下にまとめています。",
      [["お問い合わせ","端末モデル、iOS または iPadOS のバージョン、アプリのバージョン、選択中の言語、問題の簡単な説明を添えて {email} までご連絡ください。"],["オフラインとスコア","最高スコアと最近のスコアは端末に保存されるため、オフラインでもプレイを続け、進行状況を確認できます。"],["Game Center","Game Center が利用できない場合でも、ローカルでのプレイと保存は動作します。送信に失敗してもローカルスコアには影響しません。"],["購入と設定","購入と返金は Apple が処理します。アプリ内で言語、音楽、効果音、触覚フィードバックを変更できます。"],["問題の報告","スクリーンショット、録画、再現手順をお送りください。{appName}は iOS 15.0 / iPadOS 15.0 以降に対応しています。"]]
    ),

    "ko": makePack(
      "언어", "개인정보 처리방침", "지원",
      "{appName}는 iPhone 및 iPad용 유료 싱글 플레이 아케이드 게임입니다.",
      "개인정보 처리방침",
      "{appName}는 오프라인에서도 플레이할 수 있도록 설계되었습니다. 로그인 없이 시작할 수 있으며, 설정과 점수는 기기에 저장되어 깔끔하고 집중된 경험을 제공합니다.",
      [["개인정보","{appName}를 통해 개인정보를 수집하지 않습니다."],["로컬 데이터","앱은 언어, 음악, 효과음, 햅틱, 최고 점수, 최근 점수를 기기에 저장할 수 있습니다."],["Apple 서비스","Game Center를 사용하는 경우 Apple이 자체 약관과 개인정보 보호정책에 따라 해당 정보를 처리할 수 있습니다. App Store는 구매, 결제, 환불을 처리합니다."],["권한 및 추적","앱은 위치, 연락처, 사진, 카메라, 마이크, Bluetooth 또는 광고 식별자 접근을 요청하지 않습니다. 앱이나 웹사이트 간에 사용자를 추적하지 않습니다."],["오프라인 및 삭제","핵심 게임 플레이는 오프라인에서 작동합니다. 로컬 데이터는 기기에 남아 있으며 앱을 삭제하면 함께 삭제됩니다."],["문의","개인정보 관련 문의는 {email}로 연락해 주세요."]],
      "지원",
      "{appName}에 도움이 필요하신가요? 아래에서 자주 묻는 답변과 연락 방법을 확인할 수 있습니다.",
      [["문의","기기 모델, iOS 또는 iPadOS 버전, 앱 버전, 선택한 언어, 문제 설명을 포함해 {email}로 보내 주세요."],["오프라인과 점수","최고 점수와 최근 점수는 기기에 저장되어 오프라인에서도 계속 플레이하고 진행 상황을 확인할 수 있습니다."],["Game Center","Game Center를 사용할 수 없어도 로컬 플레이와 로컬 저장은 계속 작동합니다. 전송 실패는 로컬 점수에 영향을 주지 않습니다."],["구매 및 설정","구매와 환불은 Apple이 처리합니다. 앱 안에서 언어, 음악, 효과음, 햅틱을 변경할 수 있습니다."],["문제 신고","스크린샷, 녹화, 재현 단계를 보내 주세요. {appName}는 iOS 15.0 / iPadOS 15.0 이상을 지원합니다."]]
    ),

    "th": makePack(
      "ภาษา", "นโยบายความเป็นส่วนตัว", "การสนับสนุน",
      "{appName} เป็นเกมอาร์เคดแบบผู้เล่นคนเดียวแบบชำระเงินสำหรับ iPhone และ iPad",
      "นโยบายความเป็นส่วนตัว",
      "{appName} ออกแบบมาให้เล่นแบบออฟไลน์ได้ด้วย คุณเริ่มเล่นได้โดยไม่ต้องเข้าสู่ระบบ และการตั้งค่ากับคะแนนจะอยู่บนอุปกรณ์ของคุณเพื่อประสบการณ์ที่สะอาดและมีสมาธิ",
      [["ข้อมูลส่วนบุคคล","เราไม่เก็บรวบรวมข้อมูลส่วนบุคคลผ่าน {appName}"],["ข้อมูลในเครื่อง","แอปอาจบันทึกภาษา เพลง เอฟเฟกต์เสียง การสั่นตอบสนอง คะแนนสูงสุด และคะแนนล่าสุดไว้บนอุปกรณ์"],["บริการของ Apple","หากคุณใช้ Game Center Apple อาจประมวลผลข้อมูลดังกล่าวตามข้อกำหนดของ Apple เอง App Store จัดการการซื้อ การเรียกเก็บเงิน และการคืนเงิน"],["สิทธิ์และการติดตาม","แอปไม่ขอตำแหน่ง รายชื่อ รูปภาพ กล้อง ไมโครโฟน Bluetooth หรือรหัสโฆษณา และเราไม่ติดตามคุณข้ามแอปหรือเว็บไซต์"],["ออฟไลน์และการลบ","การเล่นหลักทำงานแบบออฟไลน์ ข้อมูลในเครื่องจะอยู่บนอุปกรณ์และถูกลบเมื่อคุณลบแอป"],["ติดต่อ","หากมีคำถามด้านความเป็นส่วนตัว โปรดติดต่อที่ {email}"]],
      "การสนับสนุน",
      "ต้องการความช่วยเหลือเกี่ยวกับ {appName} หรือไม่ ด้านล่างคือคำตอบทั่วไปและช่องทางติดต่อ",
      [["ติดต่อ","ส่งอีเมลไปที่ {email} พร้อมรุ่นอุปกรณ์ เวอร์ชัน iOS หรือ iPadOS เวอร์ชันแอป ภาษาที่เลือก และคำอธิบายสั้น ๆ"],["ออฟไลน์และคะแนน","คะแนนสูงสุดและคะแนนล่าสุดจะบันทึกไว้บนอุปกรณ์ คุณจึงเล่นต่อและดูความคืบหน้าได้แม้ออฟไลน์"],["Game Center","หาก Game Center ไม่พร้อมใช้งาน การเล่นและการบันทึกในเครื่องยังทำงานได้ การส่งไม่สำเร็จไม่กระทบคะแนนในเครื่อง"],["การซื้อและการตั้งค่า","Apple จัดการการซื้อและการคืนเงิน คุณเปลี่ยนภาษา เพลง เอฟเฟกต์เสียง และการสั่นตอบสนองได้ในแอป"],["รายงานปัญหา","ส่งภาพหน้าจอ วิดีโอ และขั้นตอนการทำซ้ำปัญหา {appName} รองรับ iOS 15.0 / iPadOS 15.0 หรือใหม่กว่า"]]
    ),

    "ar": makePack(
      "اللغة", "سياسة الخصوصية", "الدعم",
      "{appName} لعبة أركيد مدفوعة للاعب واحد على iPhone و iPad.",
      "سياسة الخصوصية",
      "صُممت {appName} لتعمل أيضًا دون اتصال. يمكنك البدء من دون تسجيل دخول، وتبقى الإعدادات والنتائج على جهازك لتجربة نظيفة ومركزة.",
      [["البيانات الشخصية","لا نجمع بيانات شخصية عبر {appName}."],["البيانات المحلية","قد يحفظ التطبيق اللغة والموسيقى والمؤثرات الصوتية والاهتزازات وأفضل نتيجة والنتائج الأخيرة على جهازك."],["خدمات Apple","إذا استخدمت Game Center، فقد تعالج Apple تلك المعلومات وفق شروطها وسياسة الخصوصية الخاصة بها. يتولى App Store عمليات الشراء والفوترة والاسترداد."],["الأذونات والتتبع","لا يطلب التطبيق الوصول إلى الموقع أو جهات الاتصال أو الصور أو الكاميرا أو الميكروفون أو Bluetooth أو معرّف الإعلانات. ولا نتتبعك عبر التطبيقات أو المواقع."],["اللعب دون اتصال والحذف","تعمل طريقة اللعب الأساسية دون اتصال. تبقى البيانات المحلية على جهازك وتُحذف عند حذف التطبيق."],["التواصل","لأسئلة الخصوصية، تواصل معنا عبر {email}."]],
      "الدعم",
      "هل تحتاج إلى مساعدة في {appName}؟ ستجد أدناه إجابات شائعة وطريقة التواصل.",
      [["التواصل","راسلنا على {email} مع طراز الجهاز وإصدار iOS أو iPadOS وإصدار التطبيق واللغة المختارة ووصف مختصر للمشكلة."],["اللعب دون اتصال والنتائج","يتم حفظ أفضل نتيجة والنتائج الأخيرة على جهازك، حتى تتمكن من مواصلة اللعب ومتابعة تقدمك حتى دون اتصال."],["Game Center","إذا لم يكن Game Center متاحًا، يستمر اللعب والحفظ المحليان. فشل الإرسال لا يؤثر في نتيجتك المحلية."],["المشتريات والإعدادات","تتولى Apple عمليات الشراء والاسترداد. يمكنك تغيير اللغة والموسيقى والمؤثرات الصوتية والاهتزازات داخل التطبيق."],["الإبلاغ عن مشكلة","أرسل لقطات شاشة أو تسجيلًا وخطوات إعادة إنتاج المشكلة. يدعم {appName} نظام iOS 15.0 / iPadOS 15.0 أو أحدث."]]
    ),

    "he": makePack(
      "שפה", "מדיניות פרטיות", "תמיכה",
      "{appName} הוא משחק ארקייד בתשלום לשחקן יחיד עבור iPhone ו-iPad.",
      "מדיניות פרטיות",
      "{appName} תוכנן לפעול גם ללא חיבור. אפשר להתחיל בלי להתחבר, וההגדרות והציונים נשארים במכשיר לחוויה נקייה וממוקדת.",
      [["מידע אישי","איננו אוספים מידע אישי דרך {appName}."],["נתונים מקומיים","האפליקציה עשויה לשמור במכשיר שפה, מוזיקה, אפקטים קוליים, משוב הפטי, שיא אישי וציונים אחרונים."],["שירותי Apple","אם משתמשים ב-Game Center, Apple עשויה לעבד מידע זה לפי התנאים שלה. App Store מטפל ברכישות, חיובים והחזרים."],["הרשאות ומעקב","האפליקציה אינה מבקשת מיקום, אנשי קשר, תמונות, מצלמה, מיקרופון, Bluetooth או מזהה פרסום. איננו עוקבים אחריך בין אפליקציות או אתרים."],["ללא חיבור ומחיקה","המשחק המרכזי פועל ללא חיבור. נתונים מקומיים נשארים במכשיר ונמחקים בעת מחיקת האפליקציה."],["יצירת קשר","לשאלות פרטיות ניתן לפנות אל {email}."]],
      "תמיכה",
      "צריך עזרה עם {appName}? להלן תשובות נפוצות ופרטי יצירת קשר.",
      [["יצירת קשר","שלחו דוא״ל אל {email} עם דגם המכשיר, גרסת iOS או iPadOS, גרסת האפליקציה, השפה שנבחרה ותיאור קצר."],["ללא חיבור וציונים","השיא והציונים האחרונים נשמרים במכשיר, כדי שתוכלו להמשיך לשחק ולעקוב אחר ההתקדמות גם ללא חיבור."],["Game Center","אם Game Center אינו זמין, משחק ושמירה מקומיים ממשיכים לפעול. כשל בשליחה אינו משפיע על הציון המקומי."],["רכישות והגדרות","Apple מטפלת ברכישות ובהחזרים. באפליקציה אפשר לשנות שפה, מוזיקה, אפקטים קוליים ומשוב הפטי."],["דיווח על בעיה","שלחו צילומי מסך, הקלטות ושלבי שחזור. {appName} תומך ב-iOS 15.0 / iPadOS 15.0 ואילך."]]
    ),

    "ur": makePack(
      "زبان", "رازداری کی پالیسی", "معاونت",
      "{appName} iPhone اور iPad کے لیے ایک ادا شدہ سنگل پلیئر آرکیڈ گیم ہے۔",
      "رازداری کی پالیسی",
      "{appName} کو آف لائن کھیلنے کے لیے بھی بنایا گیا ہے۔ آپ لاگ اِن کیے بغیر شروع کر سکتے ہیں، اور سیٹنگز اور اسکور صاف اور توجہ مرکوز تجربے کے لیے آپ کے آلے پر رہتے ہیں۔",
      [["ذاتی ڈیٹا","ہم {appName} کے ذریعے ذاتی ڈیٹا جمع نہیں کرتے۔"],["مقامی ڈیٹا","ایپ زبان، موسیقی، آواز کے اثرات، ہیپٹک فیڈبیک، بہترین اسکور اور حالیہ اسکور آپ کے آلے پر محفوظ کر سکتی ہے۔"],["Apple سروسز","اگر آپ Game Center استعمال کرتے ہیں تو Apple یہ معلومات اپنی شرائط کے مطابق پراسیس کر سکتا ہے۔ App Store خریداری، بلنگ اور ریفنڈ سنبھالتا ہے۔"],["اجازتیں اور ٹریکنگ","ایپ مقام، رابطے، تصاویر، کیمرا، مائیکروفون، Bluetooth یا اشتہاری شناخت کنندہ کی اجازت نہیں مانگتی۔ ہم آپ کو ایپس یا ویب سائٹس کے درمیان ٹریک نہیں کرتے۔"],["آف لائن اور حذف کرنا","بنیادی گیم آف لائن چلتی ہے۔ مقامی ڈیٹا آلے پر رہتا ہے اور ایپ حذف کرنے پر مٹ جاتا ہے۔"],["رابطہ","رازداری سے متعلق سوالات کے لیے {email} پر رابطہ کریں۔"]],
      "معاونت",
      "{appName} کے لیے مدد چاہیے؟ عام جوابات اور رابطہ نیچے موجود ہیں۔",
      [["رابطہ","آلے کا ماڈل، iOS یا iPadOS ورژن، ایپ ورژن، منتخب زبان اور مختصر وضاحت کے ساتھ {email} پر ای میل کریں۔"],["آف لائن اور اسکور","بہترین اور حالیہ اسکور آپ کے آلے پر محفوظ ہوتے ہیں، تاکہ آپ آف لائن بھی کھیل جاری رکھ سکیں اور اپنی پیش رفت دیکھ سکیں۔"],["Game Center","اگر Game Center دستیاب نہ ہو تو مقامی کھیل اور محفوظ کرنا جاری رہتا ہے۔ ناکام ارسال مقامی اسکور کو متاثر نہیں کرتا۔"],["خریداری اور سیٹنگز","خریداری اور ریفنڈ Apple سنبھالتا ہے۔ ایپ میں زبان، موسیقی، آواز کے اثرات اور ہیپٹک فیڈبیک تبدیل کیے جا سکتے ہیں۔"],["مسئلہ رپورٹ کریں","اسکرین شاٹس، ریکارڈنگ اور مسئلہ دہرانے کے مراحل بھیجیں۔ {appName} iOS 15.0 / iPadOS 15.0 یا جدید تر کو سپورٹ کرتا ہے۔"]]
    ),

    "hi": makePack(
      "भाषा", "गोपनीयता नीति", "सहायता",
      "{appName} iPhone और iPad के लिए एक भुगतान वाला सिंगल-प्लेयर आर्केड गेम है।",
      "गोपनीयता नीति",
      "{appName} को ऑफलाइन खेलने के लिए भी बनाया गया है। आप बिना लॉगिन शुरू कर सकते हैं, और सेटिंग्स व स्कोर साफ और केंद्रित अनुभव के लिए आपके डिवाइस पर रहते हैं।",
      [["व्यक्तिगत डेटा","हम {appName} के माध्यम से व्यक्तिगत डेटा एकत्र नहीं करते।"],["स्थानीय डेटा","ऐप भाषा, संगीत, ध्वनि प्रभाव, हैप्टिक, सर्वश्रेष्ठ स्कोर और हाल के स्कोर आपके डिवाइस पर सहेज सकता है।"],["Apple सेवाएँ","यदि आप Game Center उपयोग करते हैं, तो Apple उस जानकारी को अपनी शर्तों के अनुसार संसाधित कर सकता है। App Store खरीद, बिलिंग और रिफंड संभालता है।"],["अनुमतियाँ और ट्रैकिंग","ऐप स्थान, संपर्क, फ़ोटो, कैमरा, माइक्रोफ़ोन, Bluetooth या विज्ञापन पहचानकर्ता की अनुमति नहीं मांगता। हम आपको ऐप्स या वेबसाइटों के बीच ट्रैक नहीं करते।"],["ऑफलाइन और हटाना","मुख्य गेमप्ले ऑफलाइन चलता है। स्थानीय डेटा डिवाइस पर रहता है और ऐप हटाने पर मिट जाता है।"],["संपर्क","गोपनीयता से जुड़े प्रश्नों के लिए {email} पर संपर्क करें।"]],
      "सहायता",
      "{appName} में मदद चाहिए? सामान्य उत्तर और संपर्क जानकारी नीचे है।",
      [["संपर्क","डिवाइस मॉडल, iOS या iPadOS संस्करण, ऐप संस्करण, चुनी गई भाषा और संक्षिप्त विवरण के साथ {email} पर ईमेल करें।"],["ऑफलाइन और स्कोर","सर्वश्रेष्ठ और हाल के स्कोर आपके डिवाइस पर सहेजे जाते हैं, ताकि आप ऑफलाइन भी खेल जारी रख सकें और अपनी प्रगति देख सकें।"],["Game Center","यदि Game Center उपलब्ध नहीं है, तो स्थानीय खेल और सहेजना चलता रहता है। असफल सबमिशन स्थानीय स्कोर को प्रभावित नहीं करता।"],["खरीद और सेटिंग्स","खरीद और रिफंड Apple संभालता है। ऐप में भाषा, संगीत, ध्वनि प्रभाव और हैप्टिक बदले जा सकते हैं।"],["समस्या रिपोर्ट करें","स्क्रीनशॉट, रिकॉर्डिंग और समस्या दोहराने के चरण भेजें। {appName} iOS 15.0 / iPadOS 15.0 या नए संस्करण का समर्थन करता है।"]]
    ),

    "mr": makePack(
      "भाषा", "गोपनीयता धोरण", "सहाय्य",
      "{appName} हा iPhone आणि iPad साठी सशुल्क सिंगल-प्लेअर आर्केड गेम आहे.",
      "गोपनीयता धोरण",
      "{appName} ऑफलाइन खेळण्यासाठीही तयार केला आहे. लॉगिन न करता सुरुवात करता येते, आणि सेटिंग्ज व स्कोअर स्वच्छ, लक्ष केंद्रित अनुभवासाठी तुमच्या डिव्हाइसवर राहतात.",
      [["वैयक्तिक डेटा","आम्ही {appName} द्वारे वैयक्तिक डेटा गोळा करत नाही."],["स्थानिक डेटा","अॅप भाषा, संगीत, ध्वनी प्रभाव, हॅप्टिक, सर्वोत्तम स्कोअर आणि अलीकडील स्कोअर डिव्हाइसवर जतन करू शकते."],["Apple सेवा","तुम्ही Game Center वापरल्यास Apple ती माहिती त्यांच्या अटींनुसार प्रक्रिया करू शकते. App Store खरेदी, बिलिंग आणि परतावे हाताळते."],["परवानग्या आणि ट्रॅकिंग","अॅप स्थान, संपर्क, फोटो, कॅमेरा, मायक्रोफोन, Bluetooth किंवा जाहिरात ओळखीसाठी परवानगी मागत नाही. आम्ही अॅप्स किंवा वेबसाइट्सदरम्यान तुम्हाला ट्रॅक करत नाही."],["ऑफलाइन आणि हटवणे","मुख्य गेमप्ले ऑफलाइन चालतो. स्थानिक डेटा डिव्हाइसवर राहतो आणि अॅप हटवल्यावर हटतो."],["संपर्क","गोपनीयतेबाबत प्रश्नांसाठी {email} वर संपर्क करा."]],
      "सहाय्य",
      "{appName} साठी मदत हवी आहे? सामान्य उत्तरे आणि संपर्क खाली दिले आहेत.",
      [["संपर्क","डिव्हाइस मॉडेल, iOS किंवा iPadOS आवृत्ती, अॅप आवृत्ती, निवडलेली भाषा आणि थोडक्यात वर्णनासह {email} वर ईमेल करा."],["ऑफलाइन आणि स्कोअर","सर्वोत्तम आणि अलीकडील स्कोअर तुमच्या डिव्हाइसवर जतन होतात, त्यामुळे ऑफलाइन असतानाही खेळ सुरू ठेवता येतो आणि प्रगती पाहता येते."],["Game Center","Game Center उपलब्ध नसले तरी स्थानिक खेळ आणि जतन करणे चालू राहते. अयशस्वी सबमिशन स्थानिक स्कोअरवर परिणाम करत नाही."],["खरेदी आणि सेटिंग्ज","खरेदी आणि परतावे Apple हाताळते. अॅपमध्ये भाषा, संगीत, ध्वनी प्रभाव आणि हॅप्टिक बदलू शकता."],["समस्या कळवा","स्क्रीनशॉट, रेकॉर्डिंग आणि समस्या पुन्हा निर्माण करण्याची पावले पाठवा. {appName} iOS 15.0 / iPadOS 15.0 किंवा नवीन आवृत्तीला समर्थन देते."]]
    ),

    "bn": makePack(
      "ভাষা", "গোপনীয়তা নীতি", "সহায়তা",
      "{appName} iPhone ও iPad-এর জন্য একটি পেইড একক-খেলোয়াড় আর্কেড গেম।",
      "গোপনীয়তা নীতি",
      "{appName} অফলাইনেও খেলার জন্য তৈরি। লগইন ছাড়াই শুরু করা যায়, আর সেটিংস ও স্কোর পরিষ্কার ও মনোযোগী অভিজ্ঞতার জন্য আপনার ডিভাইসেই থাকে।",
      [["ব্যক্তিগত তথ্য","আমরা {appName}-এর মাধ্যমে ব্যক্তিগত তথ্য সংগ্রহ করি না।"],["স্থানীয় তথ্য","অ্যাপ ভাষা, সঙ্গীত, শব্দ প্রভাব, হ্যাপটিক, সেরা স্কোর এবং সাম্প্রতিক স্কোর ডিভাইসে সংরক্ষণ করতে পারে।"],["Apple পরিষেবা","আপনি Game Center ব্যবহার করলে Apple তাদের নিজস্ব শর্ত অনুযায়ী সেই তথ্য প্রক্রিয়া করতে পারে। App Store কেনাকাটা, বিলিং ও রিফান্ড পরিচালনা করে।"],["অনুমতি ও ট্র্যাকিং","অ্যাপ অবস্থান, পরিচিতি, ছবি, ক্যামেরা, মাইক্রোফোন, Bluetooth বা বিজ্ঞাপন শনাক্তকারীর অনুমতি চায় না। আমরা আপনাকে অ্যাপ বা ওয়েবসাইটের মধ্যে ট্র্যাক করি না।"],["অফলাইন ও মুছে ফেলা","মূল গেমপ্লে অফলাইনে চলে। স্থানীয় তথ্য ডিভাইসে থাকে এবং অ্যাপ মুছে ফেললে মুছে যায়।"],["যোগাযোগ","গোপনীয়তা সম্পর্কিত প্রশ্নের জন্য {email}-এ যোগাযোগ করুন।"]],
      "সহায়তা",
      "{appName} নিয়ে সাহায্য দরকার? সাধারণ উত্তর ও যোগাযোগের তথ্য নিচে আছে।",
      [["যোগাযোগ","ডিভাইস মডেল, iOS বা iPadOS সংস্করণ, অ্যাপ সংস্করণ, নির্বাচিত ভাষা এবং সংক্ষিপ্ত বিবরণসহ {email}-এ ইমেল করুন।"],["অফলাইন ও স্কোর","সেরা ও সাম্প্রতিক স্কোর আপনার ডিভাইসে সংরক্ষিত থাকে, তাই অফলাইনেও খেলা চালিয়ে যেতে এবং অগ্রগতি দেখতে পারেন।"],["Game Center","Game Center উপলভ্য না থাকলেও স্থানীয় খেলা ও সংরক্ষণ কাজ করে। ব্যর্থ জমা স্থানীয় স্কোরে প্রভাব ফেলে না।"],["কেনাকাটা ও সেটিংস","কেনাকাটা ও রিফান্ড Apple পরিচালনা করে। অ্যাপে ভাষা, সঙ্গীত, শব্দ প্রভাব ও হ্যাপটিক বদলানো যায়।"],["সমস্যা জানান","স্ক্রিনশট, রেকর্ডিং এবং সমস্যা পুনরায় ঘটানোর ধাপ পাঠান। {appName} iOS 15.0 / iPadOS 15.0 বা পরবর্তী সংস্করণ সমর্থন করে।"]]
    ),

    "ta": makePack(
      "மொழி", "தனியுரிமைக் கொள்கை", "ஆதரவு",
      "{appName} iPhone மற்றும் iPad க்கான கட்டண ஒற்றை வீரர் ஆர்கேட் விளையாட்டு.",
      "தனியுரிமைக் கொள்கை",
      "{appName} இணையமில்லாமலும் விளையாட வடிவமைக்கப்பட்டுள்ளது. உள்நுழையாமல் தொடங்கலாம்; அமைப்புகள் மற்றும் மதிப்பெண்கள் தெளிவான, கவனம் கூடிய அனுபவத்திற்காக உங்கள் சாதனத்தில் இருக்கும்.",
      [["தனிப்பட்ட தரவு","{appName} மூலம் தனிப்பட்ட தரவை நாம் சேகரிப்பதில்லை."],["உள்ளூர் தரவு","மொழி, இசை, ஒலி விளைவுகள், ஹாப்டிக், சிறந்த மதிப்பெண் மற்றும் சமீபத்திய மதிப்பெண்களை பயன்பாடு சாதனத்தில் சேமிக்கலாம்."],["Apple சேவைகள்","நீங்கள் Game Center பயன்படுத்தினால், Apple அந்த தகவலை அதன் விதிகளின்படி செயலாக்கலாம். App Store வாங்குதல், பில்லிங் மற்றும் பணத்தைத் திருப்பிச் செலுத்தலை கையாளுகிறது."],["அனுமதிகள் மற்றும் கண்காணிப்பு","பயன்பாடு இருப்பிடம், தொடர்புகள், புகைப்படங்கள், கேமரா, மைக்ரோஃபோன், Bluetooth அல்லது விளம்பர அடையாளியை கேட்காது. பயன்பாடுகள் அல்லது வலைத்தளங்களுக்கிடையில் உங்களை கண்காணிப்பதில்லை."],["ஆஃப்லைன் மற்றும் நீக்கம்","முக்கிய விளையாட்டு ஆஃப்லைனில் இயங்கும். உள்ளூர் தரவு சாதனத்தில் இருக்கும்; பயன்பாட்டை நீக்கும்போது அது நீங்கும்."],["தொடர்பு","தனியுரிமை கேள்விகளுக்கு {email} இல் தொடர்புகொள்ளவும்."]],
      "ஆதரவு",
      "{appName} குறித்து உதவி தேவைப்படுகிறதா? பொதுவான பதில்களும் தொடர்பு விவரங்களும் கீழே உள்ளன.",
      [["தொடர்பு","சாதன மாதிரி, iOS அல்லது iPadOS பதிப்பு, பயன்பாட்டு பதிப்பு, தேர்ந்தெடுத்த மொழி மற்றும் சுருக்கமான விளக்கத்துடன் {email} க்கு மின்னஞ்சல் அனுப்பவும்."],["ஆஃப்லைன் மற்றும் மதிப்பெண்கள்","சிறந்த மற்றும் சமீபத்திய மதிப்பெண்கள் உங்கள் சாதனத்தில் சேமிக்கப்படும்; ஆகவே ஆஃப்லைனிலும் விளையாட்டை தொடரவும் முன்னேற்றத்தை பார்க்கவும் முடியும்."],["Game Center","Game Center கிடைக்காவிட்டாலும் உள்ளூர் விளையாடலும் சேமிப்பும் செயல்படும். அனுப்புவது தோல்வியடைந்தாலும் உள்ளூர் மதிப்பெண்ணை பாதிக்காது."],["வாங்குதல் மற்றும் அமைப்புகள்","வாங்குதல் மற்றும் பணத்தைத் திருப்பிச் செலுத்தலை Apple கையாளுகிறது. பயன்பாட்டில் மொழி, இசை, ஒலி விளைவுகள் மற்றும் ஹாப்டிக் மாற்றலாம்."],["சிக்கலை தெரிவிக்கவும்","திரைப்பிடிப்புகள், பதிவுகள் மற்றும் சிக்கலை மீண்டும் உருவாக்கும் படிகளை அனுப்பவும். {appName} iOS 15.0 / iPadOS 15.0 அல்லது அதற்கு மேல் ஆதரிக்கிறது."]]
    ),

    "te": makePack(
      "భాష", "గోప్యతా విధానం", "మద్దతు",
      "{appName} iPhone మరియు iPad కోసం చెల్లింపు సింగిల్-ప్లేయర్ ఆర్కేడ్ గేమ్.",
      "గోప్యతా విధానం",
      "{appName} ఆఫ్‌లైన్‌లో కూడా ఆడేలా రూపొందించబడింది. లాగిన్ అవసరం లేకుండా ప్రారంభించవచ్చు; సెట్టింగ్‌లు మరియు స్కోర్లు స్వచ్ఛమైన, కేంద్రీకృత అనుభవం కోసం మీ పరికరంలోనే ఉంటాయి.",
      [["వ్యక్తిగత డేటా","{appName} ద్వారా మేము వ్యక్తిగత డేటాను సేకరించము."],["స్థానిక డేటా","యాప్ భాష, సంగీతం, శబ్ద ప్రభావాలు, హాప్టిక్, ఉత్తమ స్కోరు మరియు ఇటీవలి స్కోర్లను పరికరంలో సేవ్ చేయవచ్చు."],["Apple సేవలు","మీరు Game Center ఉపయోగిస్తే, Apple ఆ సమాచారాన్ని తన నిబంధనల ప్రకారం ప్రాసెస్ చేయవచ్చు. App Store కొనుగోలు, బిల్లింగ్ మరియు రీఫండ్‌లను నిర్వహిస్తుంది."],["అనుమతులు మరియు ట్రాకింగ్","యాప్ స్థానము, పరిచయాలు, ఫోటోలు, కెమెరా, మైక్రోఫోన్, Bluetooth లేదా ప్రకటన గుర్తింపుకు అనుమతి అడగదు. యాప్‌లు లేదా వెబ్‌సైట్‌ల మధ్య మిమ్మల్ని ట్రాక్ చేయము."],["ఆఫ్‌లైన్ మరియు తొలగింపు","ప్రధాన గేమ్‌ప్లే ఆఫ్‌లైన్‌లో పనిచేస్తుంది. స్థానిక డేటా పరికరంలో ఉంటుంది మరియు యాప్‌ను తొలగించినప్పుడు తొలగించబడుతుంది."],["సంప్రదించండి","గోప్యతా ప్రశ్నల కోసం {email} వద్ద మమ్మల్ని సంప్రదించండి."]],
      "మద్దతు",
      "{appName} గురించి సహాయం కావాలా? సాధారణ సమాధానాలు మరియు సంప్రదింపు వివరాలు క్రింద ఉన్నాయి.",
      [["సంప్రదించండి","పరికర మోడల్, iOS లేదా iPadOS వెర్షన్, యాప్ వెర్షన్, ఎంచుకున్న భాష మరియు చిన్న వివరణతో {email} కు ఇమెయిల్ చేయండి."],["ఆఫ్‌లైన్ మరియు స్కోర్లు","ఉత్తమ మరియు ఇటీవలి స్కోర్లు మీ పరికరంలో సేవ్ అవుతాయి, కాబట్టి ఆఫ్‌లైన్‌లో కూడా ఆటను కొనసాగించి పురోగతిని చూడవచ్చు."],["Game Center","Game Center అందుబాటులో లేకపోయినా స్థానిక ఆట మరియు సేవ్ కొనసాగుతాయి. విఫలమైన పంపింపు స్థానిక స్కోరును ప్రభావితం చేయదు."],["కొనుగోలు మరియు సెట్టింగ్‌లు","కొనుగోలు మరియు రీఫండ్‌లను Apple నిర్వహిస్తుంది. యాప్‌లో భాష, సంగీతం, శబ్ద ప్రభావాలు మరియు హాప్టిక్ మార్చవచ్చు."],["సమస్యను నివేదించండి","స్క్రీన్‌షాట్లు, రికార్డింగ్‌లు మరియు సమస్యను పునరుత్పత్తి చేసే దశలను పంపండి. {appName} iOS 15.0 / iPadOS 15.0 లేదా తరువాతి వెర్షన్‌ను మద్దతు ఇస్తుంది."]]
    )
  };

  const aliases = {
    "en-US": "en",
    "en-GB": "en",
    "en-CA": "en",
    "en-AU": "en",
    "fr-CA": "fr",
    "es-MX": "es",
    "es-ES": "es"
  };

  window.fallDownLocalizedCopy = {};
  for (const [code, pack] of Object.entries(packs)) {
    window.fallDownLocalizedCopy[code] = pack;
  }
  for (const [code, base] of Object.entries(aliases)) {
    window.fallDownLocalizedCopy[code] = packs[base];
  }
}());
