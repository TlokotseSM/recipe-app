import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext.jsx';
import HomeView from './views/HomeView.jsx';
import RecipeDetailView from './views/RecipeDetailView.jsx';
import AddEditRecipeView from './views/AddEditRecipeView.jsx';
import SearchResultsView from './views/SearchResultsView.jsx';
import TagResultsView from './views/TagResultsView.jsx';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';

function App() {
  return (
    <Router>
      <RecipeProvider>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/recipe/:id" element={<RecipeDetailView />} />
              <Route path="/add-recipe" element={<AddEditRecipeView />} />
              <Route path="/edit-recipe/:id" element={<AddEditRecipeView />} />
              <Route path="/search" element={<SearchResultsView />} />
              <Route path="/tag/:tag" element={<TagResultsView />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </RecipeProvider>
    </Router>
  );
}

export default App;