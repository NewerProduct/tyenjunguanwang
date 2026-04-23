import SolutionShowcase from "@/components/SolutionShowcase";
import FadeInEffect from "@/components/FadeInEffect";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <FadeInEffect>
        <SolutionShowcase hideViewMore={true} />
      </FadeInEffect>
    </main>
  );
}
