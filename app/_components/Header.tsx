import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";


export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-background">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">stephanieongfr.com</h1>
        <div className="flex-1">
          <ul className="flex justify-end items-center gap-2">
            <Link href="https://github.com/stephanieongfr" target="_blank" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
              <GithubIcon size={14} className="text-foreground" />
            </Link>
            <Link href="https://www.linkedin.com/in/st%C3%A9phanie-o-327292109" target="_blank" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
              <LinkedinIcon size={14} className="text-foreground" />
            </Link>
          </ul>
        </div>
      </Section>
    </header>
  )
}