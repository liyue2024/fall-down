# Fall Down App Store Web Pages

This directory is a static GitHub Pages site for App Store submission.

## Pages

- `privacy.html` - Privacy Policy URL
- `support.html` - Support URL

Examples:

```text
https://liyue2024.github.io/fall-down/privacy.html?lang=en-US
https://liyue2024.github.io/fall-down/support.html?lang=zh-Hans
```

If `lang` is omitted or unsupported, the page detects the browser language and falls back to English.

## Supported App Store Locales

The language selector contains the 45 App Store localizations requested for this app:

```text
ar, hi, pl, da, de, ru, fr, fr-CA, zh-Hant, fi, ko, nl, ca, zh-Hans, cs, hr,
ro, mr, ms, bn, nb, pt-BR, pt-PT, ja, sv, sk, sl, te, ta, th, tr, ur, uk,
es-MX, es-ES, he, el, hu, it, id, en-AU, en-CA, en-GB, vi, en-US
```

## Before App Store Submission

The current wording matches the V1.0 requirement: no ads, no in-app purchases, no account system, no analytics SDK, no developer-operated server, and local settings and scores.

For final release, review the live GitHub Pages URLs against the actual shipped build and App Store privacy answers.
