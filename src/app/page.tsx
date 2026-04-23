import HeroSection from "@/components/HeroSection";
import FadeInEffect from "@/components/FadeInEffect";
import TechMatrix from "@/components/TechMatrix";
import SolutionShowcase from "@/components/SolutionShowcase";
import ContactForm from "@/components/ContactForm";
import ClientAboutPage from "@/app/about/ClientAboutPage";

const partnersData = [
  { name: "LG", src: "/static/cooperater/LG.svg" },
  { name: "BYD 比亚迪", src: "/static/cooperater/BYD.svg" },
  { name: "DELTA 台达", src: "/static/cooperater/Delta.svg" },
  { name: "FINEST", src: "/static/cooperater/FINEST.svg" },
  { name: "Haier 海尔", src: "/static/cooperater/Haier.svg" },
  { name: "HUAWEI 华为", src: "/static/cooperater/huawei.svg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-cyanGlow/30 selection:text-white">
      <FadeInEffect>
        <HeroSection />
      </FadeInEffect>
      <FadeInEffect delay={0.2}>
        <TechMatrix />
      </FadeInEffect>
      <FadeInEffect delay={0.2}>
        <SolutionShowcase />
      </FadeInEffect>

      {/* 合作伙伴展示模块 */}
      <FadeInEffect delay={0.6}>
        <div className="relative overflow-hidden w-full mt-32 mb-16 py-32 bg-gradient-to-r from-slate-50 to-slate-200 shadow-inner">
          {/* 背景动画组件 */}
          <ClientAboutPage partnersData={partnersData} />
          
          <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto flex items-center">
            <div className="max-w-xl backdrop-blur-sm bg-white/70 p-10 md:p-14 rounded-3xl shadow-xl border border-white/80">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8 tracking-tight">合作伙伴</h2>
              <div className="w-24 h-1.5 bg-blue-600 rounded-full mb-10 shadow-sm"></div>
              <p className="text-slate-700 text-lg md:text-xl leading-loose font-medium">
                携手行业标杆，共创智造未来。天军科技凭借领先的视觉检测与AI行为分析技术，已与
                <strong className="text-blue-700 px-1 font-bold">华为、海尔、比亚迪、LG、OPPO、拓普</strong>
                等多家全球知名企业达成深度合作。我们的解决方案成功落地于各类复杂工业场景，持续为客户产品的质量提升与产线智能化升级保驾护航。
              </p>
            </div>
          </div>
        </div>
      </FadeInEffect>
      <FadeInEffect delay={0.2}>
        <ContactForm />
      </FadeInEffect>
    </main>
  );
}
