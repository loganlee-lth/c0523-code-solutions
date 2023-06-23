import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    window.alert(`Clicked ${text}`);
  }
  return (
    <div>
      <CustomButton
        onCustomClick={handleCustomClick}
        color="red"
        text="Red"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        color="green"
        text="Green"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        color="blue"
        text="Blue"
      />
    </div>
  );
}

export default App;
