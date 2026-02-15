
export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface SectionContent {
  title: string;
  items: string[];
}

export interface AccordionProps {
  sections: SectionContent[];
}
