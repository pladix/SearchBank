import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { AnimatedBackground } from '../../components/AnimatedBackground';

function Terms() {
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
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white font-grotesk">Termos e Condições de Uso</h1>
            
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao acessar e usar os serviços da SearchPay, você concorda com estes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.</p>

            <h2>2. Serviços Oferecidos</h2>
            <p>A SearchPay oferece serviços de intermediação de pagamentos, incluindo mas não se limitando a:</p>
            <ul>
              <li>Conta digital para pessoas físicas e jurídicas</li>
              <li>Transferências via PIX</li>
              <li>Pagamentos via QR Code</li>
              <li>APIs para integração</li>
            </ul>

            <h2>3. Elegibilidade</h2>
            <p>Para utilizar nossos serviços, você deve:</p>
            <ul>
              <li>Ter pelo menos 18 anos de idade</li>
              <li>Ter capacidade legal para contratar</li>
              <li>Fornecer informações verdadeiras e precisas</li>
            </ul>

            <h2>4. Responsabilidades do Usuário</h2>
            <p>O usuário é responsável por:</p>
            <ul>
              <li>Manter a segurança de suas credenciais de acesso</li>
              <li>Fornecer informações verdadeiras e atualizadas</li>
              <li>Utilizar os serviços de acordo com a legislação vigente</li>
            </ul>

            <h2>5. Limitação de Responsabilidade</h2>
            <p>A SearchPay não se responsabiliza por:</p>
            <ul>
              <li>Uso indevido da plataforma por parte do usuário</li>
              <li>Problemas técnicos fora de nosso controle</li>
              <li>Perdas ou danos indiretos</li>
            </ul>

            <h2>6. Alterações nos Termos</h2>
            <p>A SearchPay se reserva o direito de modificar estes termos a qualquer momento, notificando os usuários sobre mudanças significativas.</p>

            <h2>7. Lei Aplicável</h2>
            <p>Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais do Brasil.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Terms;