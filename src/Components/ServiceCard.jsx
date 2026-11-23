import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group rounded-2xl border border-white/10 bg-[#111113] p-7 transition duration-300 hover:-translate-y-2 hover:border-red-500/50">

      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
        <Icon size={28} />
      </div>

      <h3 className="mt-7 font-heading text-xl font-semibold text-white">
        {service.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-zinc-400">
        {service.description}
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            {feature}
          </div>
        ))}
      </div>

      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition group-hover:gap-3"
      >
        Get Started <ArrowUpRight size={17} />
      </Link>
    </div>
  );
}

export default ServiceCard;