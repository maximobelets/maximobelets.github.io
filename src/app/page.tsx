import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      <Header />
      <Footer/>
    </main>
  );
}
