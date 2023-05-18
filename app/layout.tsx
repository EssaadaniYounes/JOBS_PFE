import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="overflow-y-auto bg-gray-100">{children}</body>
    </html>
  );
}
