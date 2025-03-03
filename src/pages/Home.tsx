import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, CreditCard, BarChart3, Users, Lock, ArrowRight, CheckCircle2, Building2, Wallet, Globe2, Phone, Menu, X } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative bg-black/80 backdrop-blur-md shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-10 w-10 text-primary" />
            <span className="ml-3 text-3xl font-bold text-primary font-grotesk">SearchBank</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-xl bg-dark-card/80 backdrop-blur-md border border-dark-border"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="#features" className="text-gray-300 hover:text-white transition-colors">Recursos</Link>
            <Link to="#" className="text-gray-300 hover:text-white transition-colors">Sobre</Link>
            <Link to="#" className="text-gray-300 hover:text-white transition-colors">Contato</Link>
            <Link to="/login" className="btn-primary flex items-center space-x-2">
              <span>Acessar conta</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute z-50 w-full bg-dark-card/95 backdrop-blur-md border-b border-dark-border animate-fade-in">
            <div className="px-4 py-3 space-y-3">
              <Link to="#features" className="block text-gray-300 hover:text-white transition-colors py-2">Recursos</Link>
              <Link to="#" className="block text-gray-300 hover:text-white transition-colors py-2">Sobre</Link>
              <Link to="#" className="block text-gray-300 hover:text-white transition-colors py-2">Contato</Link>
              <Link to="/login" className="btn-primary flex items-center justify-center space-x-2 w-full mt-4">
                <span>Acessar conta</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white font-grotesk leading-tight">
              O Banco Digital do<br />Futuro está Aqui
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-12">
              Soluções financeiras inovadoras para Pessoas Físicas (PF) e Pessoas Jurídicas (PJ)
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/login" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                Abra sua conta
              </Link>
              <a href="#features" className="text-white hover:text-primary transition-colors duration-300 flex items-center gap-2">
                <span>Saiba mais</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary font-grotesk mb-2">+1M</div>
            <div className="text-gray-300 text-sm md:text-base">Clientes Ativos</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-4xl font-bold text-secondary font-grotesk mb-2">R$5B+</div>
            <div className="text-gray-300 text-sm md:text-base">Transacionados</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary font-grotesk mb-2">4.9/5</div>
            <div className="text-gray-300 text-sm md:text-base">Avaliação App</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl md:text-4xl font-bold text-secondary font-grotesk mb-2">24/7</div>
            <div className="text-gray-300 text-sm md:text-base">Suporte</div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-white font-grotesk animate-fade-up">
          Por que escolher o SearchBank?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-card group hover:-translate-y-2 hover:border-primary-light animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="group-hover:scale-110 transition-transform">
              <CreditCard className="h-12 w-12 text-primary mb-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Conta Digital Completa</h3>
            <p className="text-gray-300">100% Gratuita para PJ com pagamentos, TED, recargas e PIX.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>Sem taxa de manutenção</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>PIX ilimitado</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>Cartão sem anuidade</span>
              </li>
            </ul>
          </div>
          <div className="glass-card group hover:-translate-y-2 hover:border-primary-light animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="group-hover:scale-110 transition-transform">
              <Zap className="h-12 w-12 text-primary mb-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Pagamentos Instantâneos</h3>
            <p className="text-gray-300">Soluções rápidas e seguras para todas as suas transações.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>QR Code dinâmico</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>API robusta</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>Split de pagamentos</span>
              </li>
            </ul>
          </div>
          <div className="glass-card group hover:-translate-y-2 hover:border-primary-light animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="group-hover:scale-110 transition-transform">
              <BarChart3 className="h-12 w-12 text-primary mb-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Gestão Inteligente</h3>
            <p className="text-gray-300">Acompanhe seu negócio com relatórios detalhados em tempo real.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>Dashboard personalizado</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>Relatórios exportáveis</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>Análise de fluxo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-16 md:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-white font-grotesk animate-fade-up">
            Soluções para Todos os Perfis
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="glass-card group hover:-translate-y-2 hover:border-primary-light animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="group-hover:scale-110 transition-transform">
                <Building2 className="h-12 w-12 text-primary mb-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Para Empresas</h3>
              <p className="text-gray-300 mb-6">Soluções completas para impulsionar seu negócio.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <span>Conta PJ gratuita</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <span>Gateway de pagamentos</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <span>Gestão financeira completa</span>
                </li>
              </ul>
            </div>
            <div className="glass-card group hover:-translate-y-2 hover:border-primary-light animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="group-hover:scale-110 transition-transform">
                <Wallet className="h-12 w-12 text-primary mb-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Para Você</h3>
              <p className="text-gray-300 mb-6">Sua vida financeira mais simples e digital.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <span>Conta digital gratuita</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <span>Cartão sem anuidade</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <span>Investimentos integrados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card animate-fade-up">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-grotesk mb-6">
                  Precisa de Ajuda?
                </h2>
                <p className="text-gray-300 mb-8">
                  Nossa equipe está disponível 24/7 para ajudar você com qualquer dúvida.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <span>0800 123 4567</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Globe2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <span>suporte@searchbank.com.br</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <Link to="/login" className="btn-primary inline-flex items-center text-lg px-8 py-4">
                  <span>Abra sua conta</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-black/80 backdrop-blur-md text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
                <span className="ml-2 text-2xl font-bold font-grotesk">SearchBank</span>
              </div>
              <p className="text-gray-400">Transformando o futuro das finanças digitais.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><Link to="/sobre" className="footer-link">Sobre nós</Link></li>
                <li><Link to="/carreiras" className="footer-link">Carreiras</Link></li>
                <li><Link to="/contato" className="footer-link">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/termos" className="footer-link">Termos de Uso</Link></li>
                <li><Link to="/privacidade" className="footer-link">Política de Privacidade</Link></li>
                <li><Link to="/compliance" className="footer-link">Compliance</Link></li>
                <li><Link to="/pldft" className="footer-link">PLDFT</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">LinkedIn</a></li>
                <li><a href="#" className="footer-link">Instagram</a></li>
                <li><a href="#" className="footer-link">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 SearchBank. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;