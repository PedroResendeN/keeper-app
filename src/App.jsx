import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((noteItems) => (
        <Note
          key={noteItems.key}
          title={noteItems.title}
          content={noteItems.content}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
