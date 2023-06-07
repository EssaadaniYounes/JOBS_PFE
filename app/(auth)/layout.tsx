import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <div>{children}</div>
    </div>
  );
}
