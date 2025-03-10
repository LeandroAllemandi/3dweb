import Navbar from "./components/Navbar";
import "./styles/global.css";

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children} {/* Este es el contenido dinámico de cada página */}
        {/* <footer>Mi Pie de Página</footer> Pie de página global */}
      </body>
    </html>
  );
}
