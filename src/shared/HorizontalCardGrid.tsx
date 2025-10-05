import type { LucideProps } from "lucide-react";
import { HorizontalCard } from "./HorizontalCard";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 5rem;
`;

interface MenuItem {
  id: string;
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

interface HorizontalCardGridProps {
  menuItems: MenuItem[];
}

export const HorizontalCardGrid = ({ menuItems }: HorizontalCardGridProps) => (
  <GridContainer>
    {menuItems.map((item) => (
      <HorizontalCard
        key={item.id}
        title={item.title}
        description={item.description}
        icon={item.icon}
      />
    ))}
  </GridContainer>
);
