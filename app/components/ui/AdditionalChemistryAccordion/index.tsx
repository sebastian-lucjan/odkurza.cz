import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/Accordion';
import { cn } from '@lib/utils';
import { useState } from 'react';

export default function AdditionalChemistryAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion type="single" collapsible className="bg-whiteish">
      <AccordionItem value="additional-chemistry-item">
        <AccordionTrigger
          className={cn(
            'flex w-full justify-between bg-neutral-700 px-3 text-left text-[11px] font-semibold text-white hover:bg-neutral-600 focus:outline-none focus-visible:ring focus-visible:ring-lime-500/75 tablet:text-xs',
            isOpen ? 'rounded-t-lg' : 'rounded-lg',
          )}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          🥼Chemia do cięższych zabrudzeń?🧪
        </AccordionTrigger>
        <AccordionContent className={`${isOpen ? 'rounded-b-lg' : 'rounded-lg'} text-natural-700 bg-neutral-100 px-2 pb-2 pt-2 text-xs leading-6`}>
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
