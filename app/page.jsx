// app/page.jsx
import Home from "@/app/home/page";
import { metadata as homeMetadata } from "@/app/home/metadata";

const languages = {
  es: {
    title: "H2Bread - Panaderías Sostenibles con Hidrógeno Verde en Lima",
    description: "Descubre cómo H2Bread revoluciona la panificación en Lima con hornos sustentables de hidrógeno verde, reduciendo emisiones de CO2 en 99% y ahorrando 30% en energía. Panadería ecológica, innovación sostenible.",
    keywords: [
      "panadería sostenible", "hidrógeno verde", "panificación Lima",
      "reducción CO2", "ahorro energético", "hornos ecológicos",
      "panadería innovadora", "energía limpia", "sostenibilidad",
      "pan artesanal", "tecnología verde", "eco-friendly",
      "panadería del futuro", "cero emisiones", "energía renovable"
    ].join(", "),
  },
  en: {
    title: "H2Bread - Sustainable Bakeries with Green Hydrogen in Lima",
    description: "Discover how H2Bread revolutionizes baking in Lima with sustainable green hydrogen ovens, reducing CO2 emissions by 99% and saving 30% on energy. Eco-friendly bakery, sustainable innovation.",
    keywords: [
      "sustainable bakery", "green hydrogen", "Lima bakeries",
      "CO2 reduction", "energy savings", "eco-friendly ovens",
      "innovative bakery", "clean energy", "sustainability",
      "artisan bread", "green technology", "zero emissions",
      "future of baking", "renewable energy", "sustainable food"
    ].join(", "),
  },
  pt: {
    title: "H2Bread - Padarias Sustentáveis com Hidrogênio Verde em Lima",
    description: "Descubra como a H2Bread revoluciona a panificação em Lima com fornos sustentáveis de hidrogênio verde, reduzindo emissões de CO2 em 99% e economizando 30% em energia. Padaria ecológica, inovação sustentável.",
    keywords: [
      "padaria sustentável", "hidrogênio verde", "panificação Lima",
      "redução CO2", "economia energia", "fornos ecológicos",
      "padaria inovadora", "energia limpa", "sustentabilidade",
      "pão artesanal", "tecnologia verde", "zero emissões",
      "padaria do futuro", "energia renovável", "comida sustentável"
    ].join(", "),
  }
};

export const metadata = {
  metadataBase: new URL('https://h2bread.me'),
  alternates: {
    canonical: '/',
    languages: {
      'es-PE': '/es',
      'en-US': '/en',
      'pt-BR': '/pt'
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code'
  },
  title: {
    template: '%s | H2Bread',
    default: languages.es.title,
  },
  description: languages.es.description,
  keywords: languages.es.keywords,
  authors: [{ name: 'H2Bread' }],
  creator: 'H2Bread',
  publisher: 'H2Bread',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "H2Bread: Revolucionando las Panaderías con Hidrógeno Verde",
    description: languages.es.description,
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
    publishedTime: new Date().toISOString(),
    authors: ['H2Bread'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "H2Bread: Revolucionando las Panaderías con Hidrógeno Verde",
    description: languages.es.description,
    creator: '@h2bread',
    images: [
      {
        url: '/assets/img/og-image.png',
        alt: 'H2Bread - Panadería Sostenible'
      }
    ],
  },
  other: {
    'fb:app_id': 'your-fb-app-id',
    'og:video': 'https://h2bread.me/assets/video/intro.mp4',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent'
  }
};

export default function Page() {
  return <Home />;
}