import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shubham's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add the jQuery and Velocity.js CDN links */}
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          type="text/javascript"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"
          type="text/javascript"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.ui.min.js"
          type="text/javascript"
          async
        ></script>
        <script 
          src="/js/animations.js"
          type="text/javascript"
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
