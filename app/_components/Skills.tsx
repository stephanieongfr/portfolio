import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { JSLogo } from "./icons/JSLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { Code } from "./Code";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        I like working with...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 mb-3 flex-1">
          <JSLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">JavaScript</h3>
          <p className="text-sm text-muted-foreground">
            Dynamic, interactive, versatile.
            I use <Code>JS</Code> for efficient client-side scripting, seamless web interactions, rich user experiences.
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-3 flex-1">
          <ReactLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main library is <Code>React</Code>. <br /> I also use <Code>Next.js</Code> as a back-end and front-end framework.
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-3 flex-1">
          <TailwindLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            <Code>TailwindCSS</Code> allows us to create <u>beautiful</u> applications easily.
          </p>
        </div>
      </div>
   </Section>
  )
}