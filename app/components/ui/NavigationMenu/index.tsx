'use client';

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
        <a href="/" className="p-6 text-base font-medium text-gray-600 hover:text-gray-900">
          Home
        </a>

        <a href="/#equipment" className="p-6 text-base font-medium text-gray-600 hover:text-gray-900">
          Sprzęt
        </a>

        <a href="/#faq" className="p-6 text-base font-medium text-gray-600 hover:text-gray-900">
          FAQ
        </a>

        <a href="/kontakt" className="p-6 text-base font-medium text-gray-600 hover:text-gray-900">
          Kontakt
        </a>
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
                <a href="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Strona główna</NavigationMenuLink>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem onClick={() => setOpen(false)}>
                <a href="/#equipment">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sprzęt</NavigationMenuLink>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem onClick={() => setOpen(false)}>
                <a href="/#faq">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQ</NavigationMenuLink>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem onClick={() => setOpen(false)}>
                <a href="/kontakt">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Kontakt</NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </SheetContent>
        </div>
      </Sheet>
    </NavigationMenu>
  );
}
