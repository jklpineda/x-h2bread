// app/page.jsx
import Home from "@/app/home/page"

export const metadata = {
  title: "H2Bread - Panaderías Sostenibles con Hidrógeno Verde en Lima",
  description: "Descubre cómo H2Bread revoluciona la panificación en Lima con hornos sustentables de hidrógeno verde, reduciendo emisiones de CO2 en un 99% y ahorrando un 30% en energía. ¡Únete al futuro de la panadería!",
  openGraph: {
    title: "H2Bread: Revolucionando las Panaderías con Hidrógeno Verde",
    description: "H2Bread está modernizando las panaderías en Lima con tecnología de hidrógeno verde, reduciendo las emisiones de CO2 en un 99% y optimizando el ahorro energético. ¡Conoce el futuro de la panadería sostenible!",
    url: 'https://h2bread.me',
    siteName: 'H2Bread',
    images: [
      {
        url: '/assets/img/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "H2Bread: Revolucionando las Panaderías con Hidrógeno Verde",
    description: "H2Bread está modernizando las panaderías en Lima con tecnología de hidrógeno verde, reduciendo las emisiones de CO2 en un 99%.",
    images: ['/assets/img/og-image.png'],
  },
}

export default function HomePage() {
  return <Home />
}
