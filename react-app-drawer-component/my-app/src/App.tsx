import { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import './App.css';
import AppDrawer from './AppDrawer';
import Header from './Header';

const menuItems = [
  { id: 1, name: 'About' },
  { id: 2, name: 'Get Started' },
  { id: 3, name: 'Sign In' },
];

function App() {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleItemClick(item: string) {
    setSelectedItem(item);
    setIsOpen(false);
  }

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <FaAlignJustify onClick={toggleDrawer} className="icon-size" />
      <Header title={selectedItem} />
      <AppDrawer
        isOpen={isOpen}
        items={menuItems}
        onItemClick={handleItemClick}
        onDrawerClick={toggleDrawer}
      />
    </div>
  );
}

export default App;
