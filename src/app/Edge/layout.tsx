import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edge",
  description: "Edge Error",
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
