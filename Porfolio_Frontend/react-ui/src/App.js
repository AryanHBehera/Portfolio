import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <ProjectList />
    </div>
  );
}

export default App;
