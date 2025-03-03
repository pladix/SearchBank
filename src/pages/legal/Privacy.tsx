import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { AnimatedBackground } from '../../components/AnimatedBackground';

function Privacy() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <header className="relative bg-[--dark-card]/80 backdrop-blur-md shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-[--primary]" />
            <span className="ml-2 sm:ml-3 text-2xl sm:text-3xl font-bold text-[--primary] font-grotesk">SearchPay</span>
          </div>
          <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
            <span className="text-sm sm:text-base">Voltar</span>
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="glass-card animate-fade-up">
          <div className="legal-content">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white font-grotesk">Política de Privacidade</h1>

            <h2>1. Coleta de Dados</h2>
            <p>Coletamos os seguintes tipos de informações:</p>
            <ul>
              <li>Dados pessoais de identificação</li>
              <li>Informações financeiras</li>
              <li>Dados de transações</li>
              <li>Informações de uso da plataforma</li>
            </ul>

            <h2>2. Uso das Informações</h2>
            <p>Utilizamos seus dados para:</p>
            <ul>
              <li>Processar transações</li>
              <li>Prevenir fraudes</li>
              <li>Melhorar nossos serviços</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2>3. Compartilhamento de Dados</h2>
            <p>Seus dados podem ser compartilhados com:</p>
            <ul>
              <li>Parceiros de processamento de pagamentos</li>
              <li>Autoridades reguladoras</li>
              <li>Prestadores de serviços essenciais</li>
            </ul>

            <h2>4. Segurança dos Dados</h2>
            <p>Protegemos seus dados através de:</p>
            <ul>
              <li>Criptografia de ponta a ponta</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo</li>
            </ul>

            <h2>5. Seus Direitos</h2>
            <p>Você tem direito a:</p>
            <ul>
              <li>Acessar seus dados</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar exclusão de dados</li>
              <li>Revogar consentimentos</li>
            </ul>

            <h2>6. Cookies e Tecnologias Similares</h2>
            <p>Utilizamos cookies para:</p>
            <ul>
              <li>Melhorar a experiência do usuário</li>
              <li>Analisar o uso da plataforma</li>
              <li>Personalizar serviços</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Privacy;