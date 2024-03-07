import React from "react";
import { cn } from "@/utils/classes";

interface FeaturesProps {
  className?: string;
}

export const Features = (props: FeaturesProps) => {
  const { className } = props;
  return (
    <section className={cn("", className)}>
      <h2 className="font-display text-center text-4xl font-semibold sm:text-5xl">
        Communicate more,
        <br /> with less.
      </h2>
      <p className="mt-4 text-center text-muted-foreground">
        Driven by delightfully smart interactions.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        {[
          {
            title: "Connect Sources",
            description: "Connect your data sources to our API.",
          },
          { title: "Ask Questions", description: "Ask questions in natural language." },
          { title: "Get Answers", description: "Get instant answers from your data." },
        ].map((step, index) => (
          <div key={index} className="rounded-md border p-4">
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};