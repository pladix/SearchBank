import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { AnimatedBackground } from '../../components/AnimatedBackground';

function PLDFT() {
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
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white font-grotesk">Política de Prevenção à Lavagem de Dinheiro e do Financiamento ao Terrorismo (PLDFT)</h1>

            <h2>1. Objetivo</h2>
            <p>Esta política estabelece diretrizes para prevenir e combater a lavagem de dinheiro e o financiamento ao terrorismo em nossas operações.</p>

            <h2>2. Procedimentos de Identificação</h2>
            <p>Realizamos os seguintes procedimentos:</p>
            <ul>
              <li>Verificação de identidade</li>
              <li>Validação de documentos</li>
              <li>Análise de perfil do cliente</li>
              <li>Monitoramento de transações</li>
            </ul>

            <h2>3. Monitoramento de Operações</h2>
            <p>Monitoramos continuamente:</p>
            <ul>
              <li>Padrões de transações</li>
              <li>Operações atípicas</li>
              <li>Movimentações suspeitas</li>
              <li>Perfil de risco dos clientes</li>
            </ul>

            <h2>4. Sinais de Alerta</h2>
            <p>Consideramos como sinais de alerta:</p>
            <ul>
              <li>Transações fragmentadas</li>
              <li>Operações incompatíveis com o perfil</li>
              <li>Recusa em fornecer informações</li>
              <li>Transferências para países de alto risco</li>
            </ul>

            <h2>5. Comunicação de Operações</h2>
            <p>Realizamos comunicações ao COAF quando:</p>
            <ul>
              <li>Detectamos operações suspeitas</li>
              <li>Identificamos transações atípicas</li>
              <li>Observamos padrões irregulares</li>
            </ul>

            <h2>6. Treinamento</h2>
            <p>Nosso programa de treinamento inclui:</p>
            <ul>
              <li>Capacitação periódica</li>
              <li>Atualização sobre regulamentações</li>
              <li>Estudos de casos práticos</li>
            </ul>

            <h2>7. Responsabilidades</h2>
            <p>São responsabilidades da instituição:</p>
            <ul>
              <li>Manter registros atualizados</li>
              <li>Reportar atividades suspeitas</li>
              <li>Implementar controles internos</li>
              <li>Avaliar riscos periodicamente</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PLDFT;