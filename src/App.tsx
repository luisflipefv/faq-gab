import { useState } from 'react';
import { topics, faqItems } from './data';
import { FaqItem } from './components/FaqItem';
import { FloatingCTA } from './components/FloatingCTA';
import './index.css';
import { CategoryCard } from './components/CategoryCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openTopicId, setOpenTopicId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-['Poppins']">
      <header className="bg-[#003071] text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Portal de Autoatendimento</h1>
          <p className="mt-2 opacity-90">Grupo Águia Branca</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        {/* Barra de Busca */}
        <div className="relative mb-8 -translate-y-16">
          <input
            type="text"
            placeholder="Pesquise sua dúvida..."
            className="w-full pl-6 pr-6 py-4 rounded-xl shadow-xl border-none outline-none focus:ring-2 focus:ring-[#003071]/20 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {searchTerm.trim() ? (
            // VISÃO DE BUSCA
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[200px]">
    <div className="flex flex-col space-y-2">
      {faqItems
        .filter(f =>
          f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          f.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item, index) => (
          <div 
            key={item.id}
            className="animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both"
            style={{ animationDelay: `${index * 50}ms` }} // Efeito cascata
          >
            <FaqItem
              question={item.question}
              answer={item.answer}
              tip={item.tip}
              tipLink={item.tipLink}
            />
          </div>
        ))}
    </div>
  </div>
          ) : (
            // VISÃO POR TÓPICOS: Com animação suave de expansão
            topics.map(topic => (
              <div key={topic.id} className="group">
                <CategoryCard
                  topic={topic}
                  isOpen={openTopicId === topic.id}
                  onClick={() => setOpenTopicId(openTopicId === topic.id ? null : topic.id)}
                />

                {/* Container de Animação Suave */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openTopicId === topic.id 
                      ? 'max-h-[2000px] opacity-100 mt-2' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-white/50 rounded-xl p-4 border border-gray-100 shadow-inner">
                    {faqItems
                      .filter(item => item.topicIds?.includes(topic.id))
                      .map(item => <FaqItem key={item.id} {...item} />)
                    }
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <FloatingCTA />

      <footer className="bg-[#003071] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 opacity-30">
            <img src="/logo-gab-white.png" alt="GAB" className="mx-auto h-8 invisible" />
          </div>
          <p className="text-blue-100 mb-2 font-medium">
            Não encontrou o que precisava? Nossa equipe de Field Service está à disposição.
          </p>
          <p className="text-blue-300/60 text-xs">
            © 2026 Grupo Águia Branca • Desenvolvido por Luis Felipe
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;