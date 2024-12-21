import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Component",
  description: "Client Component Error",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}
