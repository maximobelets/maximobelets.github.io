
import { Header } from "@/components/Header/Header";
import { Nav } from "@/components/Nav/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Nav />
      <Header />
    </main>
  );
}
