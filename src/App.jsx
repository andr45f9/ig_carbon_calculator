import ClaculatorSection from "./components/ClaculatorSection";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <InfoSection></InfoSection>
        <ClaculatorSection></ClaculatorSection>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
