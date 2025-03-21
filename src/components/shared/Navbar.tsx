import React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu';

const Navbar = () => {
  return (
    <header className='py-4 shadow-md'>
      <nav className='max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <div>
          <Link href='/' className='font-bold text-2xl'>
            Daily News
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList className='flex items-center space-x-8'>
            <NavigationMenuItem>
              <NavigationMenuLink href='/news' className='text-gray-600 hover:text-gray-900'>
                News
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-gray-600 hover:text-gray-900'>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className='bg-white shadow-md rounded-md p-2'>
                <ul className='space-y-2'>
                  <li>
                    <NavigationMenuLink href='/services/web' className='block px-4 py-2 hover:bg-gray-100'>
                      Web Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href='/services/app' className='block px-4 py-2 hover:bg-gray-100'>
                      Mobile App
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href='/services/seo' className='block px-4 py-2 hover:bg-gray-100'>
                      SEO
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Navbar;
