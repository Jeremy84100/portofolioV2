import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { LockIcon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    techStack: string[];
    metrics?: string;
    links: {
        live?: string;
        playStore?: string;
        appStore?: string;
        demo?: string;
    };
    isProprietary?: boolean;
    logo?: string;
}

export function ProjectCard({
    title,
    category,
    description,
    techStack,
    metrics,
    links,
    isProprietary,
    logo,
}: ProjectCardProps) {
    return (
        <Card className="overflow-hidden border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all duration-300 group pt-6">
            <CardHeader className="space-y-4 pt-0">
                <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                        {logo ? (
                            <div className="h-12 w-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center p-2 shrink-0">
                                <img src={logo} alt={`${title} logo`} className="w-full h-full object-contain" />
                            </div>
                        ) : null}
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                {title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                {category}
                            </p>
                        </div>
                    </div>
                    {isProprietary ? (
                        <Badge variant="secondary" className="gap-1.5 opacity-80">
                            <HugeiconsIcon icon={LockIcon} size={12} />
                            Private Source
                        </Badge>
                    ) : null}
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>

                {metrics ? (
                    <div className="p-3 bg-primary/5 border border-primary/10 rounded-lg text-sm font-medium text-primary">
                        {metrics}
                    </div>
                ) : null}

                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-background/50">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="flex flex-wrap items-center gap-4">
                {links.live ? (
                    <Link
                        href={links.live}
                        target="_blank"
                        className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 flex-1 sm:flex-none")}
                    >
                        View Live
                        <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
                    </Link>
                ) : null}
                {links.demo ? (
                    <Link
                        href={links.demo}
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6 flex-1 sm:flex-none")}
                    >
                        View Demo
                    </Link>
                ) : null}
                {links.playStore ? (
                    <Link
                        href={links.playStore}
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6 flex-1 sm:flex-none")}
                    >
                        Play Store
                    </Link>
                ) : null}
                {links.appStore ? (
                    <Link
                        href={links.appStore}
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6 flex-1 sm:flex-none")}
                    >
                        App Store
                    </Link>
                ) : null}
            </CardFooter>
        </Card>
    );
}
