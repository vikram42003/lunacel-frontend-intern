export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-screen bg-linear-to-b from-bg-gradient-start-gray to-bg-gradient-end-dark-gray">
      {children}
    </main>
  );
}
