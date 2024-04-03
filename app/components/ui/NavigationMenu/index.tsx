'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@lib/utils';

import { Sheet, SheetContent, SheetClose, SheetTrigger } from 'app/ui/components/ui/sheet';

import Image from 'next/image';
import { useState } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@ui/Navigation';

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <NavigationMenu>
      {/* Desktop navigation */}
      <NavigationMenuList className="hidden justify-between w-[500px] desktop-sm:flex">
        <NavigationMenuItem>
          <Link href="/public" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Strona główna</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/blog" as="/artykuly" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Artykuły</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" as="/kontakt" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Kontakt</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* Mobile / tablet navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="block desktop-sm:hidden">
          <SheetTrigger>
            <div>
              <Image src={cpkBurger} className="w-[30px] mobile-lg:w-[40px]" alt="Navigation burger" />
              {/*<Image src={cpkMenuClose} className="" />*/}
            </div>
          </SheetTrigger>
          <SheetContent className="w-full flex justify-center items-center">
            <SheetClose>
              <Image
                src={cpkMenuClose}
                className="w-[30px] h-[28px] mobile-lg:w-[40px] mobile-lg:h-[37px]  absolute top-3 mobile-lg:top-4 right-4"
                alt="Navigation close menu icon"
              />
            </SheetClose>

            <NavigationMenuList className="flex flex-col justify-between w-full desktop-sm:hidden h-[300px]">
              <NavigationMenuItem onClick={() => setOpen(false)}>
                <Link href="/public" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Strona główna</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative cursor-[default]">
                {/*<Link href="/about-cpk" as="/o-cpk" legacyBehavior passHref>*/}
                <Badge className="absolute px-2 text-[10px] top-[-8px] h-[18px] bg-blue-dark hover:bg-blue-dark right-[-24px]">soon</Badge>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-neutral-50 hover:bg-neutral-50 text-gray hover:text-gray')}>
                  O CPK
                </NavigationMenuLink>
                {/*<NavigationMenuLink className={navigationMenuTriggerStyle()}>O CPK</NavigationMenuLink>*/}
                {/*</Link>*/}
              </NavigationMenuItem>

              <NavigationMenuItem onClick={() => setOpen(false)}>
                <Link href="/blog" as="/artykuly" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Artykuły</NavigationMenuLink>
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
