import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Abel Abbasi | Backend Developer",description:"Portfolio interactivo de Abel Abbasi — Backend Developer especializado en PHP, Symfony, Laravel, DDD y arquitectura hexagonal."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}