import { ReactElement } from 'react';
import DrawerItem from './DrawerItem';

export type Item = {
  id: number;
  name: string;
};

type AppDrawerProps = {
  isOpen: boolean;
  items: Item[];
  onItemClick: (item: string) => void;
  onDrawerClick: () => void;
};

function AppDrawer({
  isOpen,
  items,
  onItemClick,
  onDrawerClick,
}: AppDrawerProps): ReactElement {
  const drawerClass = isOpen ? 'drawerOpen' : 'drawerClosed';
  const backdropClass = isOpen ? 'backdrop' : 'backdropClosed';

  return (
    <>
      <div className={`drawer ${drawerClass}`}>
        <h2>Menu</h2>
        {items.map((item) => (
          <DrawerItem key={item.id} item={item} onItemClick={onItemClick} />
        ))}
      </div>
      <div className={`backdrop ${backdropClass}`} onClick={onDrawerClick} />
    </>
  );
}

export default AppDrawer;
