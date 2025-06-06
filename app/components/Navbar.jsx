import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/blogs", label: "Blogs" },
    {
      href: "https://duckaroo.com.au/collections/aquarium-designs",
      label: "Gallery",
    },
    { href: "https://duckaroo.com.au/pages/contact-us", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/swan-logo-transparent_rphcfl"
              alt="Aquatic Swan Design"
              width={60}
              height={60}
              className="w-14 h-14 md:w-16 md:h-16"
            />
            <span className="text-white font-bold text-xl hidden sm:block">
              Aquatic Swan Design
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-purple-400 transition-colors duration-200 font-medium"
                {...(item.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noreferrer",
                })}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-br from-[#8044e2] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#506ef8] hover:to-[#0f172a] border-none"
            >
              <Link href="/products">Shop Plants</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-br from-[#10b981] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#34d399] hover:to-[#0f172a] border-none"
            >
              <Link href="/service">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white w-12 h-12 border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-200"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetTrigger asChild className="hidden md:block lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white w-12 h-12 border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-200"
              >
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 border-white/10 [&>button]:text-white [&>button]:hover:text-white/80"
            >
              <SheetHeader>
                <SheetTitle className="text-white text-left">
                  Navigation Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white/90 hover:text-purple-400 transition-colors duration-200 font-medium text-lg"
                    {...(item.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noreferrer",
                    })}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-6 border-t border-white/10">
                  <Button
                    asChild
                    className="bg-gradient-to-br from-[#8044e2] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#506ef8] hover:to-[#0f172a] border-none"
                  >
                    <Link href="/products">Shop Plants</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-br from-[#10b981] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#34d399] hover:to-[#0f172a] border-none"
                  >
                    <Link href="/service">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
