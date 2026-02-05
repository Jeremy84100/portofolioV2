import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button-variants";
import { AvailabilityBadge } from "@/components/availability-badge";
import { ProjectCard } from "@/components/project-card";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserIcon, Mail01Icon, Github01Icon, Linkedin02Icon, NewTwitterIcon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

// Hoisted static JSX for performance (Rule 6.3)


export default function Portfolio() {
    return (
        <div className="flex flex-col">

            {/* Hero Section */}
            <section className="w-full border-b border-border/30 bg-background/30">
                <div className="max-w-3xl mx-auto border-x border-border/30 px-4 md:px-6 py-8">
                    <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12">
                        <div className="flex-1 space-y-6">
                            <AvailabilityBadge />

                            <div className="space-y-4 max-w-2xl">
                                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight">
                                    Jeremy Bourret
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Software Engineer and <span className="text-foreground font-medium">Next.js Expert</span> specializing in high-performance architecture.
                                    Creator of <span className="text-foreground font-medium">NextResto</span> (SaaS) and <span className="text-foreground font-medium">Food Guard</span> (AI).
                                </p>
                            </div>

                            <div className="flex items-center gap-6 pt-2">
                                <Link href="https://github.com/Jeremy84100" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <HugeiconsIcon icon={Github01Icon} size={24} />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link href="https://www.linkedin.com/in/jérémy-bourret" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <HugeiconsIcon icon={Linkedin02Icon} size={24} />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link href="https://x.com/jemeryHOT" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <HugeiconsIcon icon={NewTwitterIcon} size={24} />
                                    <span className="sr-only">X (Twitter)</span>
                                </Link>
                                <div className="h-6 w-px bg-border/50" />
                                <a href="mailto:bourretjeremy8.p@gmail.com" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
                                    Contact me
                                    <HugeiconsIcon icon={ArrowRight02Icon} size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        <div className="relative shrink-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border border-border/50 shadow-inner flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/profile.png"
                                    alt="Jeremy Bourret"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 216px, 512px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Selected Work */}
            <section id="work" className="w-full border-b border-border/30 bg-background/50">
                <div className="max-w-3xl mx-auto border-x border-border/30 px-4 md:px-6 py-8 md:py-16">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">Selected Products</h2>
                            <p className="text-muted-foreground max-w-2xl">
                                I specialize in building proprietary commercial solutions.
                                These projects showcase my ability to deliver production-grade software from concept to deployment.
                            </p>
                        </div>

                        <div className="grid gap-12">
                            {/* Project 1: Food Guard */}
                            <ProjectCard
                                title="Food Guard"
                                category="AI Mobile Ecosystem"
                                description="A high-performance inventory ecosystem split into two specialized applications for maximum efficiency. I architected a dedicated Next.js backend for heavy data processing and a lightweight React/Capacitor mobile app for the frontend."
                                techStack={["React Native (Capacitor)", "Next.js Backend", "Custom AI Vision Pipeline"]}
                                metrics="< 3s AI Scan • 99% Recognition Accuracy"
                                isProprietary={true}
                                links={{
                                    live: "https://getfoodguard.com/",
                                    playStore: "https://play.google.com/store/apps/details?id=com.foodtracker.bourr"
                                }}
                                logo="/FoodGuard.svg"
                            />

                            {/* Project 2: NextResto */}
                            <ProjectCard
                                title="NextResto"
                                category="SaaS Platform"
                                description="The most advanced restaurant operating system on the market. It allows restaurateurs to generate a fully SEO-optimized, production-ready website in just 15 minutes. Features include infinite recursive menu options, a drag-and-drop floor plan editor, global Kanban/List reservation views, and a smart CRM with banking imprint to eliminate no-shows."
                                techStack={["Next.js", "Stripe Connect", "Complex State Management", "Real-time Sync"]}
                                metrics="15min Delivery Time • 0% No-Show Rate"
                                isProprietary={true}
                                links={{
                                    live: "https://www.nextresto.com/",
                                    demo: "https://www.nextresto.com/" // User can update to specific demo link
                                }}
                                logo="/NextResto.svg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full bg-background">
                <div className="max-w-3xl mx-auto border-x border-border/30 px-4 md:px-6 py-8 md:py-16">
                    <div className="flex flex-col items-center text-center space-y-6 max-w-xl mx-auto">
                        <div className="p-4 rounded-full bg-secondary/50 mb-4">
                            <HugeiconsIcon icon={UserIcon} size={32} className="text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight">Ready to build your next product?</h2>
                        <p className="text-muted-foreground">
                            I am currently accepting one new engagement for Q2.
                            If you are looking for a partner to build high-performance software, let's connect.
                        </p>
                        <a href="mailto:bourretjeremy8.p@gmail.com" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 gap-2 h-12 text-base w-full sm:w-auto")}>
                            <HugeiconsIcon icon={Mail01Icon} size={18} />
                            Email Me
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}