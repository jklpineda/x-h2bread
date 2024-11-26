// app/home/metadata.js

export const metadata = {
  title: "Home || H2Bread",
  description: "H2Bread - Startup",
  keywords: [
    "panadería sostenible", "hidrógeno verde", "panificación Lima",
    "reducción CO2", "ahorro energético", "hornos ecológicos",
    "panadería innovadora", "energía limpia", "sostenibilidad",
    "pan artesanal", "tecnología verde", "eco-friendly",
    "panadería del futuro", "cero emisiones", "energía renovable"
  ].join(", "),
  openGraph: {
    title: "H2Bread: Revolucionando las Panaderías con Hidrógeno Verde",
    description: "H2Bread - Startup",
    url: 'https://h2bread.me',
    siteName: 'H2Bread',
    images: [
      {
        url: '/assets/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'H2Bread - Panadería Sostenible'
      },
      {
        url: '/assets/img/og-image-square.png',
        width: 800,
        height: 800,
        alt: 'H2Bread Logo'
      }
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "H2Bread: Revolucionando las Panaderías con Hidrógeno Verde",
    description: "H2Bread - Startup",
    creator: '@h2bread',
    images: [
      {
        url: '/assets/img/og-image.png',
        alt: 'H2Bread - Panadería Sostenible'
      }
    ],
  }
};