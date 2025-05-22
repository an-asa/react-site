import Hero from "@/components/hero";
import { ConstructionIcon } from "lucide-react";

export default function Projects() {
  return (
    <div className="mx-auto mt-26 w-full max-w-3xl px-8 tracking-tight">
      <div className="inline-block space-y-2">
        <h1 className="text-2xl font-bold">Sorry!</h1>
        <p>This page is under construction. I hope to include a record of my work on this website and other personal projects here in the future.</p>
        <ConstructionIcon className="mx-auto size-40 pt-12 text-muted-foreground" />
      </div>
    </div>
  );
}
