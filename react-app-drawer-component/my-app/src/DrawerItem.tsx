import { ReactElement } from 'react';

type DrawerItemProps = {
  item: { id: number; name: string };
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
