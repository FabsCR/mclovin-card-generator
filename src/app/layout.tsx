import "./globals.css";

export const metadata = {
  title: "McLovin",
  description: "Un tributo al gran McLovin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Icono estándar */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Iconos adicionales para diferentes tamaños y dispositivos */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Iconos para dispositivos Android */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Icono para Apple */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Manifesto de la aplicación */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}