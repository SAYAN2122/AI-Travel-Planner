import LogoCard from "./LogoCard";
import { logos } from "./logos";

function TrustedBy() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Inspired by the world's leading travel experiences
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <LogoCard
              key={logo}
              name={logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;