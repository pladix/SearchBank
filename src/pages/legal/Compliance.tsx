import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { AnimatedBackground } from '../../components/AnimatedBackground';

function Compliance() {
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
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white font-grotesk">Política de Compliance Corporativo e Anticorrupção</h1>

            <h2>1. Introdução</h2>
            <p>A SearchPay está comprometida com os mais altos padrões de ética e integridade em suas operações comerciais.</p>

            <h2>2. Objetivo</h2>
            <p>Esta política visa estabelecer diretrizes para garantir o cumprimento das leis anticorrupção e promover práticas éticas nos negócios.</p>

            <h2>3. Abrangência</h2>
            <p>Esta política se aplica a todos os colaboradores, parceiros, fornecedores e terceiros que se relacionam com a SearchPay.</p>

            <h2>4. Práticas Proibidas</h2>
            <p>São expressamente proibidas:</p>
            <ul>
              <li>Ofertas de suborno ou pagamentos facilitadores</li>
              <li>Fraudes em processos comerciais</li>
              <li>Lavagem de dinheiro</li>
              <li>Uso de informações privilegiadas</li>
            </ul>

            <h2>5. Compliance Corporativo</h2>
            <p>Nosso programa de compliance inclui:</p>
            <ul>
              <li>Treinamentos regulares</li>
              <li>Auditorias internas</li>
              <li>Canal de denúncias</li>
              <li>Monitoramento contínuo</li>
            </ul>

            <h2>6. Due Diligence</h2>
            <p>Realizamos processos de due diligence para:</p>
            <ul>
              <li>Avaliação de parceiros comerciais</li>
              <li>Verificação de fornecedores</li>
              <li>Análise de clientes de alto risco</li>
            </ul>

            <h2>7. Violações e Penalidades</h2>
            <p>Violações desta política podem resultar em:</p>
            <ul>
              <li>Medidas disciplinares</li>
              <li>Rescisão contratual</li>
              <li>Ações legais</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Compliance;