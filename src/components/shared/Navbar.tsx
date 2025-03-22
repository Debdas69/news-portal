"use client"
import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";



const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div>
          <Link href="/" className="font-bold text-2xl">
            Daily News
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-8">
            {/* News */}
            <NavigationMenuItem>
              <Link href="/news" passHref legacyBehavior>
                <NavigationMenuLink className={`${pathname === '/news' ? 'text-blue-500 font-semibold' : ''} text-gray-600 hover:text-gray-900`}>
                  News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-md rounded-md p-2">
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/web" passHref legacyBehavior>
                      <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                        Web Development
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/app" passHref legacyBehavior>
                      <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                        Mobile App
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seo" passHref legacyBehavior>
                      <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                        SEO
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Components Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900">
                Components
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-md rounded-md p-2">
                <ul className="space-y-2">
                  <li>
                    <Link href="/components/buttons" passHref legacyBehavior>
                      <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                        Buttons
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/cards" passHref legacyBehavior>
                      <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                        Cards
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/forms" passHref legacyBehavior>
                      <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                        Forms
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
              
              <Link  href="/about" passHref legacyBehavior>
             <NavigationMenuLink  className={`${pathname === '/about' ? 'text-blue-500 font-semibold' : ''} text-gray-600 hover:text-blue-900`}>
                  About
                </NavigationMenuLink>
              </Link>
              <Link  href="/contact" passHref legacyBehavior>
            <NavigationMenuLink   className={`${pathname === '/contact' ? 'text-blue-500 font-semibold' : ''} text-gray-600 hover:text-blue-900`}>
                  Contact
                </NavigationMenuLink>
              </Link>


          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

          {/* mobile hamber menu */}
          <MobileMenu/>
          
      </nav>
    </header>
  );
};

export default Navbar;
