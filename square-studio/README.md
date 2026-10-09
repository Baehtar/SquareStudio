# Square Studio

A recreation of the supplied Ramit Batra website reference, using Square Studio branding and placeholder content and stock media.

## Run locally

```sh
npm run dev
```

Open http://127.0.0.1:5173. No dependency installation or build is needed. `dist/` is the complete deployable static website. The small Node server supports direct page URLs and video range requests.

## Edit content

- `dist/content.js`: weddings, films, FAQs, reviews, and blog entries.
- `dist/app.js`: page layouts, navigation, scroll effects, and interactions.
- `dist/style.css`: typography, responsive layouts, and animation settings.
- `dist/assets/`: local stock photography, a sample film, and web fonts.

The site includes the homepage, portfolio with a keyboard-accessible photo viewer, real weddings and individual stories, searchable films with a video player, about, contact, testimonials, blogs and articles, careers, and placeholder terms/privacy.

## Placeholder details

Names, locations, descriptions, reviews, team profiles, and client names are sample content. Photos are stock placeholders sourced from Unsplash. The film is a sample clip sourced from Pexels. Instrument Serif and Inter are from Google Fonts; Clash Display and Satoshi are from Fontshare, matching the supplied reference's public font definitions. Review the relevant asset licenses before commercial publication.

The forms validate entries and let visitors download their details. They do not send emails or applications; replace this behavior with the studio's actual endpoint before launch. The email uses the reserved `.example` domain, and social links go to platform homepages until real details are supplied.

Desktop scroll sequences follow the reference: an expanding photo collage, a horizontal wedding track, and moving testimonials. Mobile uses the reference's stacked wedding cards. Reduced-motion preferences, keyboard navigation, dialog focus management, and direct routes are supported.

The reference's layout and observed motion were recreated independently. Placeholder media and branding differ, and the original Framer runtime is not included; exact pixel and animation parity is not guaranteed.
