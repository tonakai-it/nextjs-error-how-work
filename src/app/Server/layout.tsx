import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server",
  description: "Server Error",
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
