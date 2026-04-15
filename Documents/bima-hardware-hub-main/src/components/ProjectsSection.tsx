import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import roofingImg from "@/assets/roofing-sheets.jpg";
import steelImg from "@/assets/steel-pipes.jpg";
import cementImg from "@/assets/cement-bags.jpg";

const projects = [
  { title: "Residential Home - Nairobi", image: project1 },
  { title: "Commercial Complex - Mombasa", image: project2 },
  { title: "Apartment Estate - Kisumu", image: project3 },
  { title: "Boma Showroom - Mombasa Rd", image: roofingImg },
  { title: "Boma Tile Installation", image: steelImg },
  { title: "Customer Project - Limuru", image: cementImg },
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    const newPos = direction === "left" ? scrollPos - amount : scrollPos + amount;
    scrollRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    setScrollPos(newPos);
  };

  return (
    <section id="projects" className="py-16 bg-section-alt">
      <div className="container">
        <h2 className="section-heading text-center mb-12">Recent Projects</h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-colors -ml-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((p, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[320px] snap-start">
                <div className="rounded-xl overflow-hidden bg-card border border-border shadow-sm group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-heading font-semibold text-foreground text-sm">{p.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-colors -mr-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
