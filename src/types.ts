import type { LucideProps } from "lucide-react";


export type HorizontalItemCardProps = {
  item: {
    id: string;
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    primary?: boolean;
};
};