import SolutionShowcase from "@/components/SolutionShowcase";
import FadeInEffect from "@/components/FadeInEffect";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <FadeInEffect>
        <SolutionShowcase hideImageTab={true} hideViewMore={true} />
      </FadeInEffect>
    </main>
  );
}
