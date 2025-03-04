import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  href: string;
}

export function ServiceCard({ title, subtitle, icon, href }: ServiceCardProps) {
  return (
    <div className="flex items-center justify-start gap-4 border-b pb-2 mb-3">
      {icon}
      <a href={href} target="_blank" rel="noreferrer">
        <div className="flex flex-col text-xs text-gray-600">
          <span className="font-semibold">{title}</span>
          <span>{subtitle}</span>
        </div>
      </a>
    </div>
  );
}
