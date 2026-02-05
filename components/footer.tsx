import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, Linkedin02Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";

export function Footer() {
    return (
        <footer className="w-full border-t border-border/30 bg-background">
            <div className="max-w-3xl mx-auto border-x border-border/30 px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Jeremy Bourret. All rights reserved.</p>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/Jeremy84100" target="_blank" className="hover:text-foreground transition-colors">
                        <HugeiconsIcon icon={Github01Icon} size={20} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/jérémy-bourret" target="_blank" className="hover:text-foreground transition-colors">
                        <HugeiconsIcon icon={Linkedin02Icon} size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://x.com/jemeryHOT" target="_blank" className="hover:text-foreground transition-colors">
                        <HugeiconsIcon icon={NewTwitterIcon} size={20} />
                        <span className="sr-only">X (Twitter)</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
