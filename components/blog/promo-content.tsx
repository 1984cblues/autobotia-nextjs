/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("border-t border-border bg-muted/20 p-3", className)}>
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground/90 truncate">
              Simule seu Orçamento
            </p>
            <p className="text-xs text-muted-foreground truncate">
              SEO, GEO e Web Design
            </p>
          </div>
          <Link
            href="/simulador"
            className="text-xs text-primary hover:text-primary/80 font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Começar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("border border-border rounded-lg p-4 bg-card", className)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter">
            Pronto para Dominar as Buscas?
          </h3>
          <p className="text-sm text-muted-foreground">
            Use nosso simulador interativo para descobrir o investimento ideal para sua presença digital em SEO e IA.
          </p>
          <Link 
            href="/simulador" 
            className="mt-2 text-sm font-medium text-primary hover:underline"
          >
            Acessar Simulador →
          </Link>
        </div>
      </div>
    </div>
  );
}
