"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-primary-800 w-full z-50 relative overflow-hidden">
      {/* Grid lines to blend with Hero section */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.08)_1px,transparent_1px)] bg-[size:180px_180px]"
      />

      <Container className="relative">
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded">
            <Logo variant="light" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-label-m text-neutral-50 hover:text-secondary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded px-2 py-1 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className="text-label-m text-neutral-50 hover:text-secondary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded px-2 py-1 transition-colors"
            >
              Sign In
            </Link>
            <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-secondary-500">
              Join Us
            </Button>
            <button
              aria-label="Shopping Cart"
              className="text-neutral-50 hover:text-secondary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded p-1 transition-colors"
            >
              <ShoppingBag size={24} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              aria-label="Shopping Cart"
              className="text-neutral-50 hover:text-secondary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded p-1 transition-colors"
            >
              <ShoppingBag size={24} />
            </button>
            <button
              type="button"
              className="text-neutral-50 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-20 z-40 bg-primary-800 transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Container className="py-8 flex flex-col h-full overflow-y-auto">
          <ul className="flex flex-col gap-6 mb-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-heading-s text-neutral-50 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-auto border-t border-primary-500 pt-8">
            <Link
              href="/login"
              className="text-heading-xs text-neutral-50 text-center py-3 border border-neutral-50 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Us
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
