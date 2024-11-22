import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/Accordion';
import AdditionalChemistryAccordion from '@ui/AdditionalChemistryAccordion';
import { PricesType } from 'app/types/UIComponentTypes';

export default function EquipmentPricesList({ prices }: PricesType) {
  const {
    dayRenting: { smallPrice, mediumPrice, biggestPrice },
    cleaner,
    // delivery: { toCustomer, fromCustomer },
  } = prices;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="price-list-item">
        <AccordionTrigger className="my-6 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Szczegółowy <span className="ml-2 font-semibold">CENNIK</span>
          <span className="ml-2 animate-wiggle">🔔</span>
        </AccordionTrigger>

        <AccordionContent className="origin-top-left rounded-md bg-white text-xs leading-6 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="w-[100% - 32px] relative p-4">
            <div className="mb-4 flex border-b-4 border-gray-100 pb-2">
              <p className="mr-3 w-[25%] font-bold">CENNIK:</p>
              <div className="w-[80%]">
                <div className="flex justify-between">
                  <p>Pon. - Czw.:</p>
                  <p className="font-semibold">{smallPrice} zł / dzień (24h)</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex font-bold text-black">
                    <p className="underline decoration-lime-300 decoration-2 underline-offset-2">Pt./ Sob./ Nd.:</p>
                    <p className="text-xl">*</p>
                  </div>
                  <p>{mediumPrice} zł / dzień (24h)</p>
                </div>
                <div className="flex justify-between">
                  <p>Święta ustawowe:</p>
                  <p>{biggestPrice} zł / dzień (24h)</p>
                </div>
              </div>
            </div>
            <div className="mb-4 flex border-b-4 border-gray-100 pb-2">
              <p className="mr-3 w-[25%] text-[12px] font-bold">ŚRODEK CZYSZCZĄCY:</p>
              <div className="w-[80%]">
                <div className="flex justify-between">
                  <p className="w-1/5">100ml</p>
                  <div className="w-3/5">- Kanapa 2os.</div>
                  <p className="w-1/5 font-semibold">GRATIS</p>
                </div>
                <div className="flex justify-between border-t border-gray-100">
                  <p className="w-1/5">200ml</p>
                  <ul className="w-3/5">
                    <li>- Kanapa 3os.</li>
                    <li>- Pufa</li>
                  </ul>
                  <p className="w-1/5 font-semibold">{cleaner[200]}zł</p>
                </div>
                <div className="flex justify-between border-t border-gray-100">
                  <p className="w-1/5">300ml</p>
                  <ul className="w-3/5">
                    <li>- Kanapa 3os.</li>
                    <li>- Fotel</li>
                    <li>
                      - Dywanik 4m<sup>2</sup>
                    </li>
                  </ul>
                  <p className="w-1/5 font-semibold">{cleaner[300]}zł</p>
                </div>
                <div className="flex justify-between border-t border-gray-100">
                  <p className="w-1/5">400ml</p>
                  <ul className="w-3/5">
                    <li>- Kanapa 4os.</li>
                    <li>- Fotel</li>
                    <li>
                      - Dywan/wykładzina 10m<sup>2</sup>
                    </li>
                  </ul>
                  <p className="w-1/5 font-semibold">{cleaner[400]}zł</p>
                </div>
                <div className="flex justify-between border-t border-gray-100">
                  <div className="flex w-1/5 font-bold text-black">
                    <p className="underline decoration-lime-300 decoration-2 underline-offset-2">600ml</p>
                    <p className="text-xl">*</p>
                  </div>
                  <ul className="w-3/5">
                    <li>- Kanapa 4os.</li>
                    <li>- Fotel x2</li>
                    <li>
                      - Dywan/wykładzina 10m<sup>2</sup>
                    </li>
                    <li>- Siedzenia w aucie osob.</li>
                  </ul>
                  <p className="w-1/5 font-semibold">{cleaner[600]}zł</p>
                </div>
                <div className="flex justify-between border-t border-gray-100">
                  <p className="w-1/5">1000ml</p>
                  <ul className="w-3/5">
                    <li>- jw.</li>
                    <li>- Zabrudzenia wymagające użycia większej ilości środka czyszczącego</li>
                  </ul>
                  <p className="w-1/5 font-semibold">{cleaner[1000]}zł</p>
                </div>
                <div className="flex flex-col justify-between border-t border-gray-100">
                  <p className="text-[10px] font-semibold text-gray-700">
                    <span>☝️</span>Do odkurzacza dodajemy większą ilość środków czyszczących. Rozliczenie jest przy oddaniu gdy wiadomym jest ile
                    chemii zostało ostatecznie zużyte.
                  </p>
                  <p className="text-[10px] font-semibold text-gray-700">
                    ✌️ Ilość potrzebnego środka czyszczącego jest zależna od stopnia zabrudzeń oraz sposobu prania.
                  </p>
                </div>

                <AdditionalChemistryAccordion />
              </div>
            </div>
            {/* <div className="mb-4 flex border-b-4 border-gray-100 pb-2">
              <p className="mr-3 w-1/4 font-bold">DOWÓZ:</p>
              <div className="w-[80%]">
                <p>W granicach Lublina:</p>
                <div className="flex justify-between">
                  <p>Dowóz:</p>
                  <p>{toCustomer}zł</p>
                </div>
                <div className="flex justify-between">
                  <p>Odbiór:</p>
                  <p>{fromCustomer}zł</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex font-bold text-black">
                    <p className="underline decoration-lime-300 decoration-2 underline-offset-2">Odbiór osobisty:</p>
                    <p className="text-xl">*</p>
                  </div>
                  <p className="font-semibold">0zł</p>
                </div>
              </div>
            </div> */}

            <div className="flex">
              <div className="mr-3 flex w-1/4 font-bold">
                <p className="text-4xl text-black underline decoration-lime-300 decoration-4 underline-offset-[-4px]">*</p>
              </div>
              <div className="w-4/5">
                <p className="">Najczęstszy wybór klientów</p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
