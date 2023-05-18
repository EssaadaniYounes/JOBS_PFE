import MainNav from '@/components/ui/navigation/MainNav';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <MainNav />

      <div>{children}</div>
    </div>
  );
}
