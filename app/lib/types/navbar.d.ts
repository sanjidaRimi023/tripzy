export type MenuItemType = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

export interface SingleMenuProps {
  menu: MenuItemType;
  isActive: boolean;
}