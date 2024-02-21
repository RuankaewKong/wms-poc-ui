import { Card } from "@nextui-org/react";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Card fullWidth shadow={'none'}>{children}</Card>;
}
