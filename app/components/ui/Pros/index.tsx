import ProsItem from '@ui/Pros/ProsItem';
import { ProsTextContentItemType } from 'app/types/types';
import { homepageData } from 'data/homepageData';

export default function Pros() {
  return (
    <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center px-4 md:flex-row md:justify-evenly">
      {homepageData.pros.map(({ icon, textContent }) => {
        const prosKey = textContent[0].text;

        return <ProsItem key={prosKey} icon={icon} textContent={textContent as ProsTextContentItemType[]} />;
      })}
    </div>
  );
}
