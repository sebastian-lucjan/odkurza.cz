import { ReactNode } from 'react';

export interface EquipmentProps {
  pricesJSON: string;
}

/**
 * Represents an item of text content in ProsItem component.
 */
export interface ProsTextContentItemType {
  textType: 'highlighted' | 'paragraph';
  text: string;
}

/**
 * Props for the ProsItem component.
 */
export interface ProsItemProps {
  icon: ReactNode;
  textContent: ProsTextContentItemType[];
}

/**
 * Props for the GoogleMap component.
 * Determines when to display the map.
 */
export interface GoogleMapProps {
  displayOn: 'all' | 'tablet-and-up' | 'mobile';
}

/**
 * Props for the FirmIcon component.
 */
export interface FirmIconProps {
  iconSize: number;
  bubblesSize: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export interface InfoBarProps {
  textContent: string;
  bargain: string;
}

export type MobileNumber = number;

/**
 * Represents pricing information.
 * object structure from CMS
 */
export interface PricesType {
  prices: {
    dayRenting: {
      smallPrice: number;
      mediumPrice: number;
      biggestPrice: number;
    };
    cleaner: {
      [key: number]: number;
    };
    delivery: {
      toCustomer: number;
      fromCustomer: number;
    };
  };
}
