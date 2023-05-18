import React from 'react';
import MainNav from '@/components/ui/navigation/MainNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <MainNav />

      <div className="min-h-full">{children}</div>
    </div>
  );
}
