import CloudsBackground from "../components/clouds-background";
import Footer from "../components/footer";
import Header from "../components/header";
import StarsBackground from "../components/stars-background";

export default function MainLayout({ children }) {
  return (
    <div className="text-[#333] relative min-h-screen min-[900px]:text-[18px]  dark:text-[#efefef]">
      <StarsBackground />
      <CloudsBackground />
      <Header className="relative z-10" />
      <main className="relative z-10 flex flex-col items-center gap-25 min-[900px]:mt-20 min-[900px]:mb-10 p-10">
        {children}
      </main>
      <Footer className="relative z-10" />
    </div>
  );
}
