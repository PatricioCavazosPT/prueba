import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={'${montserrat.className} antialiased'}>
        Esto es parte del layout
          {children}
          <footer className= 'py-10 flex justify-center items-center'>
            Hecho por Pato C :)
          </footer>
        </body>
    </html>
  );
}
