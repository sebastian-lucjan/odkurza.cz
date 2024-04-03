import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/Accordion';
import { cn } from '@lib/utils';
import { useState } from 'react';

export default function AdditionalChemistryAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion type="single" collapsible className="bg-whiteish">
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={cn(
            'flex w-full justify-between bg-neutral-700 h-10 px-4 py-2 text-left font-semibold text-white text-xs hover:bg-neutral-600 focus:outline-none focus-visible:ring focus-visible:ring-lime-500/75 leading-6',
            isOpen ? 'rounded-t-lg' : 'rounded-lg',
          )}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          🥼 Chemia do cięższych zabrudzeń? 🧪
        </AccordionTrigger>
        <AccordionContent className={`${isOpen ? 'rounded-b-lg' : 'rounded-lg'} px-2 pb-2 pt-2 text-natural-700 bg-neutral-100 text-xs leading-6`}>
          <p>Jeśli chcesz uprać uporczywe plamy lepszym rozwiązaniem będzie użycie mocniejszej chemii w proszku.</p>
          <div className="flex justify-between">
            <p className="w-1/5">100g</p>
            <div className="w-3/5">- Kanapa 3os.</div>
            <p className="w-1/5 font-semibold">12zł</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
