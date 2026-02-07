import { useState, useMemo } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { DivisionCard } from './components/DivisionCard';
import { CategoryCard } from './components/CategoryCard';
import { FaqItem } from './components/FaqItem';
import { SearchBar } from './components/SearchBar';
import { FloatingCTA } from './components/FloatingCTA';
import { divisions, categories, faqItems } from './data';
import { Division, Category } from './types';

type ViewType = 'divisions' | 'categories' | 'faq';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('divisions');
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDivisionClick = (division: Division) => {
    setSelectedDivision(division);
    setCurrentView('categories');
    setSearchQuery('');
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView('faq');
    setSearchQuery('');
  };

  const handleBackToDivisions = () => {
    setCurrentView('divisions');
    setSelectedDivision(null);
    setSelectedCategory(null);
    setSearchQuery('');
  };

  const handleBackToCategories = () => {
    setCurrentView('categories');
    setSelectedCategory(null);
    setSearchQuery('');
  };

  const filteredCategories = useMemo(() => {
    if (!selectedDivision) return [];
    return categories.filter(cat => cat.divisionId === selectedDivision.id);
  }, [selectedDivision]);

  const filteredFaqItems = useMemo(() => {
    if (!selectedCategory) return [];

    let items = faqItems.filter(item => item.categoryId === selectedCategory.id);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
      );
    }

    return items;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-[#003071] text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <HelpCircle size={32} />
            <h1 className="text-3xl font-bold">Portal de Autoatendimento</h1>
          </div>
          <p className="text-center text-blue-100 mt-2">Grupo Águia Branca</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {currentView === 'divisions' && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#003071]">
                Selecione uma Divisão
              </h2>
              <p className="text-gray-600 text-lg">
                Escolha a área para encontrar respostas específicas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {divisions.map((division) => (
                <DivisionCard
                  key={division.id}
                  division={division}
                  onClick={() => handleDivisionClick(division)}
                />
              ))}
            </div>
          </div>
        )}

        {currentView === 'categories' && selectedDivision && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <button
              onClick={handleBackToDivisions}
              className="flex items-center space-x-2 text-[#003071] hover:text-blue-700 transition-colors font-medium group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Voltar para Divisões</span>
            </button>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#003071]">
                {selectedDivision.name}
              </h2>
              <p className="text-gray-600 text-lg">
                Selecione uma categoria para ver as perguntas frequentes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => handleCategoryClick(category)}
                />
              ))}
            </div>
          </div>
        )}

        {currentView === 'faq' && selectedCategory && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <button
              onClick={handleBackToCategories}
              className="flex items-center space-x-2 text-[#003071] hover:text-blue-700 transition-colors font-medium group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Voltar para Categorias</span>
            </button>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#003071]">
                {selectedCategory.name}
              </h2>
              <p className="text-gray-600 text-lg">
                Perguntas frequentes sobre {selectedCategory.name.toLowerCase()}
              </p>
            </div>

            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Buscar perguntas..."
            />

            <div className="space-y-4">
              {filteredFaqItems.length > 0 ? (
                filteredFaqItems.map((item) => (
                  <FaqItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    tip={item.tip}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-md">
                  <p className="text-gray-500 text-lg">
                    {searchQuery
                      ? 'Nenhuma pergunta encontrada para sua busca.'
                      : 'Nenhuma pergunta disponível nesta categoria.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <FloatingCTA />

      <footer className="bg-[#003071] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">
            Não encontrou o que procura? Abra um chamado no Field Service.
          </p>
          <p className="text-blue-200 text-sm mt-2">
            © 2024 Grupo Águia Branca - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
