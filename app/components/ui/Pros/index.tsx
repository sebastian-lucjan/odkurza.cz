import ProsItem from '@ui/Pros/ProsItem';
import { ProsTextContentItemType } from 'app/types/types';
import { homepageData } from 'data/homepageData';

export default function Pros() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center mt-8 md:flex-row md:justify-evenly px-4">
      {homepageData.pros.map(({ icon, textContent }) => {
        const prosKey = textContent[0].text;

        return <ProsItem key={prosKey} icon={icon} textContent={textContent as ProsTextContentItemType[]} />;
      })}
    </div>
  );
}
