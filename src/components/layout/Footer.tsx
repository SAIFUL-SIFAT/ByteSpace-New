import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { footerLinks, footerBottomLinks } from "@/data/footer";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-neutral-200">
      <Container>
        <Grid className="mb-20">
          {/* Left Column: Newsletter */}
          <div className="col-span-4 md:col-span-8 xl:col-span-4 max-xl:mb-12">
            <Logo variant="dark" className="mb-6" />
            <p className="text-body-m text-neutral-600 mb-8 max-w-sm">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 mb-6 max-w-md">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1"
              />
              <Button type="submit" variant="primary">
                Search
              </Button>
            </form>
            <p className="text-body-xs text-neutral-500 max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="col-span-4 md:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 xl:pl-10">
              {footerLinks.map((column) => (
                <div key={column.title} className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-body-m text-neutral-600 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded px-1 -ml-1 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-200">
          <p className="text-body-s text-neutral-500">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerBottomLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-body-s text-neutral-500 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded px-1 -ml-1 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}