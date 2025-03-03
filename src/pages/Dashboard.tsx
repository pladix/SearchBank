import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  BarChart3, 
  Send, 
  QrCode,
  Bell,
  Settings,
  LogOut,
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  ArrowDown,
  ArrowUp,
  DollarSign,
  Clock,
  User,
  Menu,
  X
} from 'lucide-react';
import toast from 'react-hot-toast';
import { AnimatedBackground } from '../components/AnimatedBackground';

function Dashboard() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    toast.loading('Desconectando...', {
      style: {
        background: 'var(--toast-bg)',
        color: '#fff',
        border: '1px solid var(--toast-border)',
        backdropFilter: 'blur(10px)',
      },
    });

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-dark-bg relative">
      <AnimatedBackground />
      
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-xl bg-dark-card/80 backdrop-blur-md border border-dark-border"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 sm:w-72 bg-dark-card/80 backdrop-blur-md border-r border-dark-border transform transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <CreditCard className="h-10 w-10 text-primary animate-pulse" />
            <span className="text-2xl font-bold text-primary font-grotesk">SearchPay</span>
          </div>
        </div>
        <nav className="mt-6 px-3">
          <a href="#" className="nav-link active mb-2 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <BarChart3 className="h-5 w-5 mr-3" />
            Dashboard
          </a>
          <a href="#" className="nav-link mb-2 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <Send className="h-5 w-5 mr-3" />
            Transferências
          </a>
          <a href="#" className="nav-link mb-2 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <QrCode className="h-5 w-5 mr-3" />
            PIX
          </a>
          <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-dark-border">
            <a href="#" className="nav-link mb-2 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <Settings className="h-5 w-5 mr-3" />
              Configurações
            </a>
            <button 
              onClick={handleLogout} 
              className="nav-link w-full text-red-500 hover:bg-red-500/10 hover:text-red-500 animate-slide-in-left" 
              style={{ animationDelay: '0.5s' }}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sair
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`lg:ml-72 p-3 sm:p-4 lg:p-8 relative transition-all duration-300 ${isMobileMenuOpen ? 'blur-sm lg:blur-none' : ''}`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-8 mt-12 lg:mt-0 animate-fade-in">
          <div className="flex items-center">
            <BarChart3 className="h-7 w-7 sm:h-8 sm:w-8 text-primary mr-2 sm:mr-3" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-grotesk">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 relative hover:bg-dark-card rounded-xl transition-colors group">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-primary transition-colors" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            </button>
            <div className="hidden sm:flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-dark-card/50 backdrop-blur-sm border border-dark-border">
              <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-sm sm:text-base text-gray-300">Admin</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          {/* Balance Card */}
          <div className="glass-card bg-gradient-to-br from-primary/20 to-primary-dark/20 group animate-fade-up">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-300">Saldo Disponível</h3>
              <div className="icon-container group-hover:scale-110 transition-transform">
                <Wallet className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-grotesk text-white group-hover:scale-105 transition-transform">
              R$ 25.480,00
            </p>
            <div className="mt-3 sm:mt-4 flex items-center text-gray-400 text-xs sm:text-sm">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
              <span>Última atualização: há 5 minutos</span>
            </div>
          </div>

          {/* Income Card */}
          <div className="glass-card group animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-300">Entradas (PIX)</h3>
              <div className="icon-container group-hover:scale-110 transition-transform">
                <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
              </div>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-500 font-grotesk group-hover:scale-105 transition-transform">
              R$ 12.350,00
            </p>
            <div className="mt-3 sm:mt-4 flex items-center text-green-400/70 text-xs sm:text-sm">
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
              <span>+15% este mês</span>
            </div>
          </div>

          {/* Expenses Card */}
          <div className="glass-card group animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-300">Saídas (PIX)</h3>
              <div className="icon-container group-hover:scale-110 transition-transform">
                <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
              </div>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500 font-grotesk group-hover:scale-105 transition-transform">
              R$ 8.720,00
            </p>
            <div className="mt-3 sm:mt-4 flex items-center text-red-400/70 text-xs sm:text-sm">
              <ArrowDownLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
              <span>-8% este mês</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="glass-card animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
            <div className="flex items-center">
              <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 text-primary mr-2 sm:mr-3" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-grotesk">Transações Recentes</h3>
            </div>
            <button className="btn-primary py-1.5 sm:py-2 px-3 sm:px-4 text-sm w-full sm:w-auto">
              Ver todas
            </button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {[
              { 
                type: 'debit',
                title: 'Saque PIX realizado',
                name: 'Pladix dos Santos',
                amount: '-R$ 1.500,00',
                date: '15 Mar 2024',
                id: 'PIX-OUT-2024031501',
                icon: Send
              },
              { 
                type: 'credit',
                title: 'Depósito PIX recebido',
                name: 'Pladix dos Santos',
                amount: '+R$ 2.800,00',
                date: '14 Mar 2024',
                id: 'PIX-IN-2024031402',
                icon: QrCode
              },
              { 
                type: 'credit',
                title: 'Depósito PIX recebido',
                name: 'Pladix dos Santos',
                amount: '+R$ 3.200,00',
                date: '13 Mar 2024',
                id: 'PIX-IN-2024031303',
                icon: QrCode
              }
            ].map((transaction, index) => (
              <div 
                key={index} 
                className="transaction-card group animate-fade-up"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className="flex items-center">
                  <div className="icon-container group-hover:scale-110 transition-transform">
                    <transaction.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <p className="font-medium text-sm sm:text-base text-gray-200">{transaction.title}</p>
                      <span className="hidden sm:inline mx-2 text-gray-500">-</span>
                      <p className="text-xs sm:text-sm text-gray-400">{transaction.name}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mt-1 text-xs sm:text-sm text-gray-500">
                      <p className="font-mono">{transaction.id}</p>
                      <span className="hidden sm:inline mx-2">•</span>
                      <p>{transaction.date}</p>
                    </div>
                  </div>
                </div>
                <span className={`text-base sm:text-lg font-semibold font-grotesk mt-2 sm:mt-0 ${
                  transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'
                } group-hover:scale-105 transition-transform`}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;