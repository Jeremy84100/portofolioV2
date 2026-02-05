"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home01Icon, Mail01Icon, Layers01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "#work", icon: Layers01Icon, label: "Work" },
    { href: "#contact", icon: Mail01Icon, label: "Contact" },
];

export function NavHeader() {
    const pathname = usePathname();

    return (
        <header className="w-full border-b border-border/30 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/20">
            <div className="max-w-3xl mx-auto border-x border-border/30 px-6 md:px-8 py-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    Bourret.
                </Link>

                <nav className="flex items-center gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "p-2 rounded-full hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground",
                            )}
                            aria-label={item.label}
                        >
                            <HugeiconsIcon icon={item.icon} size={24} />
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
