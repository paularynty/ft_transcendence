import type { LucideProps } from "lucide-react";
import styled from "styled-components";

const Root = styled.button`
  cursor: pointer;
`;

// const StyledIcon = styled.div`
//   height: 20px;
//   width: 20px;
// `;

const CardHeader = styled.div``;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  margin-bottom: 0.25rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

type Props = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
};

export const HorizontalCard = ({ icon: Icon, title, description }: Props) => {
  return (
    <Root>
      <CardHeader>
        <div className="flex items-center gap-3"></div>
        <div>
          <Icon />
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </CardHeader>
    </Root>
  );
};
