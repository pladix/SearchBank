import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Por favor, preencha todos os campos', {
        icon: '⚠️',
        style: {
          background: 'var(--toast-bg)',
          color: '#fff',
          border: '1px solid var(--toast-border)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        },
      });
      return;
    }

    const toastStyle = {
      style: {
        background: 'var(--toast-bg)',
        color: '#fff',
        border: '1px solid var(--toast-border)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
    };

    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: 'Autenticando...',
        success: () => {
          navigate('/dashboard');
          return 'Login realizado com sucesso! 🎉';
        },
        error: 'Erro ao fazer login ❌',
      },
      toastStyle
    );
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <AnimatedBackground />

      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md animate-fade-up">
        <div className="flex justify-center">
          <Shield className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <h2 className="mt-6 text-center text-3xl md:text-4xl font-bold text-white font-grotesk">
          Acesse sua conta SearchPay
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="glass-card py-8 px-4 sm:rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                E-mail
              </label>
              <div className="mt-1 relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Senha
              </label>
              <div className="mt-1 relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-dark-border rounded transition-colors"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-300">
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary-dark transition-colors">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full btn-primary text-lg py-3">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;