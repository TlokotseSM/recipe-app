import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import HomeView from './views/HomeView';
import RecipeDetailView from './views/RecipeDetailView';
import AddEditRecipeView from './views/AddEditRecipeView';
import SearchResultsView from './views/SearchResultsView';
import TagResultsView from './views/TagResultsView';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

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