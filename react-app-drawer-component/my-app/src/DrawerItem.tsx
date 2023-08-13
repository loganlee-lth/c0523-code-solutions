import { ReactElement } from 'react';
import { Item } from './AppDrawer';

type DrawerItemProps = {
  item: Item;
  onItemClick: (item: string) => void;
};

function DrawerItem({ item, onItemClick }: DrawerItemProps): ReactElement {
  return (
    <div className="drawer-item" onClick={() => onItemClick(item.name)}>
      {item.name}
    </div>
  );
}

export default DrawerItem;
