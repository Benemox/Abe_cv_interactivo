import type { Metadata } from "next";
import "./globals.css";
import "./projects.css";
export const metadata: Metadata={title:"Abel Abbasi | Backend Developer",description:"Desarrollador backend en Madrid desde 2021: PHP, Laravel, Symfony, APIs, DDD y arquitectura hexagonal. Experiencia full stack con React y Vue.js."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
