/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import Link from "next/link";
import { LucideIcon, Code, Leaf, ArrowUpRight, Weight } from "lucide-react";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject 
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        {/* //TODO: Add work section */}
        {/* <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
        </Card> */}
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Contact Me</p>
          <Link href="https://www.linkedin.com/in/st%C3%A9phanie-o-327292109/" target="_blank">
            <ContactCard name="Stephanie Ong" image="stephanie.jpg" mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" description="27 relations" />
          </Link>
        </Card>
      </div>
    </Section>
  )
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Markdown Preview",
    description: "Tool to preview your markdown",
    url: "https://stephanieong-markdown-previewer.netlify.app/",
  },
  {
    Logo: Weight,
    title: "Fitness Survey",
    description: "Simple fitness form",
    url: "/https://stephanieong-fitness-form.netlify.app/",
  },
  {
    Logo: Leaf,
    title: "Quote Generator",
    description: "Random inspirational quote generator",
    url: "https://stephanieong-quote-generator.netlify.app/",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link href={props.url} target="_blank" className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  )
};

//TODO: Add work experience
// const WORKS: WorkProps[] = [{
//   TBC
// }]

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Work = (props: WorkProps) => {
  return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <img 
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  )
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
        <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
    </Card>
  )
}