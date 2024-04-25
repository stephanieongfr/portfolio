/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-semibold">Stephanie Ong</h2>
        <h3 className="text-3xl font-caption">Web Developer</h3>
        <p>
          I love to learn and grow. I graduated from <Code>O&apos;Clock school</Code> and am currently looking for new opportunities to improve my skills in web development.
          <br />
          Currently living in <Code>🇫🇷 France</Code> near Paris area, open to <Code>onsite</Code> and <Code>remote positions</Code>.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img 
          src="/stephanie.jpg"
          alt="profile picture"
          className="w-full h-auto max-w-xs rounded-full max-md:w-56"
        />
      </div>
    </Section>
  ) 
}