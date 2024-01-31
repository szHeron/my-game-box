import { Header } from "@/components/Header";
import { HomeBody } from "@/components/HomeBody";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <HomeBody/>
    </div>
  );
}
