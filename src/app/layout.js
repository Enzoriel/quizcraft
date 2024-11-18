import "./globals.css";
import Background from "@/components/ui/Background";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baumans&family=DM+Serif+Display:ital@0;1&family=Press+Start+2P&family=REM:ital,wght@0,100..900;1,100..900&family=Share+Tech&family=Wellfleet&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Background>{children}</Background>
      </body>
    </html>
  );
}
