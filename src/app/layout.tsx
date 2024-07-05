import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lequios Creative",
  description: "Frontend Portfolio From Okinawa",
	openGraph: {
		images: ['/ogp.jpg']
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
