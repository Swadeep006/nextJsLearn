import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Prepdha.ai',
    default: 'Prepdha Dashboard',
  },
  description: 'An EdTech startup',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
