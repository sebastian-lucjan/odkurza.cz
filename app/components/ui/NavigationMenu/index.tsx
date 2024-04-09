'use client';

import * as React from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetClose, SheetTrigger } from '@ui/Sheet';
import { useState } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@ui/Navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <NavigationMenu>
      {/* Desktop navigation */}
      <div className="my-8 hidden laptop:block">
        <Link href="/" className="p-6 text-base font-medium text-gray-600 hover:text-gray-900">
          Home
        </Link>

        <Link href="/#equipment" className="p-6 text-base font-medium text-gray-600 hover:text-gray-900">
          Sprzęt
        </Link>

        <Link href="/#faq" className="p-6 text-base font-medium text-gray-600 hover:text-gray-900">
          FAQ
        </Link>

        <Link href="/kontakt" className="p-6 text-base font-medium text-gray-600 hover:text-gray-900">
          Kontakt
        </Link>
      </div>

      {/* Mobile / tablet navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="block laptop:hidden">
          <SheetTrigger>
            <Bars3Icon width={40} height={40} className="absolute left-0 top-0" />
          </SheetTrigger>
          <SheetContent className="flex w-full items-center justify-center bg-white">
            <SheetClose>
              <XMarkIcon width={40} height={40} className="absolute top-0 right-0 m-6" />
            </SheetClose>

            <NavigationMenuList className="desktop-sm:hidden flex h-[300px] w-full flex-col justify-between">
              <NavigationMenuItem onClick={() => setOpen(false)} className="rounded-md hover:bg-neutral-50">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Strona główna</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem onClick={() => setOpen(false)}>
                <Link href="/#equipment" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sprzęt</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem onClick={() => setOpen(false)}>
                <Link href="/#faq" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQ</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem onClick={() => setOpen(false)}>
                <Link href="/contact" as="/kontakt" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Kontakt</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </SheetContent>
        </div>
      </Sheet>
    </NavigationMenu>
  );
}
