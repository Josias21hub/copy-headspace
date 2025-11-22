'use client'

import { useState } from 'react'
import { Sparkles, Moon, Wind, Heart, Library, Crown, ChevronRight, Play, Lock } from 'lucide-react'

export default function Zenora() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'checkin' | 'home' | 'library' | 'premium'>('welcome')
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  // Tela 1: Bem-vindo
  if (currentScreen === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#4CB09A] to-[#F7D97E] flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-8 max-w-md">
          {/* Logo */}
          <div className="space-y-4">
            <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white tracking-tight">ZENORA</h1>
            <p className="text-white/90 text-lg font-light">luz interior, essência tranquila</p>
          </div>

          {/* Frase principal */}
          <p className="text-2xl text-white font-light leading-relaxed">
            Respire. Você está em um lugar de calma.
          </p>

          {/* Botões */}
          <div className="space-y-3 pt-8">
            <button 
              onClick={() => setCurrentScreen('checkin')}
              className="w-full bg-white text-[#4CB09A] py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Começar Jornada
            </button>
            <button 
              onClick={() => setCurrentScreen('checkin')}
              className="w-full bg-white/10 backdrop-blur-sm text-white py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              Já tenho conta
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Tela 2: Check-in Diário
  if (currentScreen === 'checkin') {
    const moods = [
      { emoji: '😊', label: 'Feliz', value: 'happy' },
      { emoji: '😐', label: 'Neutro', value: 'neutral' },
      { emoji: '😰', label: 'Ansioso', value: 'anxious' },
      { emoji: '😴', label: 'Cansado', value: 'tired' },
      { emoji: '😢', label: 'Triste', value: 'sad' },
    ]

    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4CB09A] to-[#F7D97E] p-6 pb-12">
          <h2 className="text-2xl font-bold text-white text-center">Como você se sente hoje?</h2>
        </div>

        {/* Mood Selection */}
        <div className="flex-1 p-6 -mt-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${
                    selectedMood === mood.value
                      ? 'bg-[#4CB09A] scale-110 shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100 hover:scale-105'
                  }`}
                >
                  <span className="text-4xl">{mood.emoji}</span>
                  <span className={`text-sm font-medium ${
                    selectedMood === mood.value ? 'text-white' : 'text-gray-700'
                  }`}>
                    {mood.label}
                  </span>
                </button>
              ))}
            </div>

            {selectedMood && (
              <div className="pt-6 space-y-4 animate-fadeIn">
                <div className="bg-[#4CB09A]/10 border border-[#4CB09A]/20 rounded-2xl p-6">
                  <p className="text-[#4CB09A] font-semibold mb-2">✨ Recomendação da IA Zen</p>
                  <p className="text-gray-700">
                    {selectedMood === 'anxious' && 'Pratique a respiração 4-7-8 por 3 minutos para acalmar sua mente.'}
                    {selectedMood === 'tired' && 'Uma meditação de 5 minutos vai renovar sua energia.'}
                    {selectedMood === 'sad' && 'Sons de cura emocional podem te ajudar agora.'}
                    {selectedMood === 'happy' && 'Que tal uma prática de gratidão para amplificar essa energia?'}
                    {selectedMood === 'neutral' && 'Comece com uma meditação guiada de 2 minutos.'}
                  </p>
                </div>

                <button
                  onClick={() => setCurrentScreen('home')}
                  className="w-full bg-gradient-to-r from-[#4CB09A] to-[#F7D97E] text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Continuar para o App
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Tela 3: Home
  if (currentScreen === 'home') {
    const categories = [
      {
        icon: Sparkles,
        title: 'Meditar',
        color: 'from-[#4CB09A] to-[#3A9B87]',
        items: ['Meditações curtas (1–3 min)', 'Séries de 7 dias', 'Sons para foco e paz']
      },
      {
        icon: Moon,
        title: 'Dormir',
        color: 'from-[#7B68EE] to-[#9370DB]',
        items: ['Sons de chuva', 'Histórias calmantes', 'Frequências binaurais']
      },
      {
        icon: Wind,
        title: 'Respirar',
        color: 'from-[#F7D97E] to-[#F4C542]',
        items: ['Respiração 4–7–8', 'Respiração antifragmentação', 'Respiração rápida para foco']
      },
      {
        icon: Heart,
        title: 'Mover',
        color: 'from-[#FF6B9D] to-[#FF8FAB]',
        items: ['Yoga leve', 'Alongamento rápido', 'Treinos de 5 minutos']
      }
    ]

    return (
      <div className="min-h-screen bg-[#FAFAFA]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4CB09A] to-[#F7D97E] p-6 pb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Olá, Zenora</h1>
              <p className="text-white/80 mt-1">Sua jornada de paz começa aqui</p>
            </div>
            <button 
              onClick={() => setCurrentScreen('premium')}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
            >
              <Crown className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 -mt-4 space-y-6">
          {/* Daily Practice Card */}
          <div className="bg-gradient-to-br from-[#4CB09A] to-[#F7D97E] rounded-3xl p-6 text-white shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-white/80 text-sm font-medium">PRÁTICA DO DIA</p>
                <h3 className="text-2xl font-bold mt-1">Meditação de 1 Minuto</h3>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <Play className="w-6 h-6" />
              </div>
            </div>
            <p className="text-white/90 mb-4">
              "Feche os olhos… Respire fundo… Um minuto é o suficiente para recomeçar."
            </p>
            <button className="bg-white text-[#4CB09A] px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105">
              Começar Agora
            </button>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-[#4CB09A] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-around max-w-md mx-auto">
              <button className="flex flex-col items-center gap-1 text-[#4CB09A]">
                <Sparkles className="w-6 h-6" />
                <span className="text-xs font-medium">Início</span>
              </button>
              <button 
                onClick={() => setCurrentScreen('library')}
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4CB09A] transition-colors"
              >
                <Library className="w-6 h-6" />
                <span className="text-xs font-medium">Biblioteca</span>
              </button>
              <button 
                onClick={() => setCurrentScreen('premium')}
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4CB09A] transition-colors"
              >
                <Crown className="w-6 h-6" />
                <span className="text-xs font-medium">Premium</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Tela 4: Biblioteca
  if (currentScreen === 'library') {
    const libraryCategories = [
      { name: 'Ansiedade', count: 24, color: 'bg-[#4CB09A]' },
      { name: 'Sono', count: 18, color: 'bg-[#7B68EE]' },
      { name: 'Foco', count: 15, color: 'bg-[#F7D97E]' },
      { name: 'Cura emocional', count: 21, color: 'bg-[#FF6B9D]' },
      { name: 'Energia', count: 12, color: 'bg-[#FF9500]' },
      { name: 'Espiritualidade', count: 16, color: 'bg-[#9370DB]' },
      { name: 'Crianças', count: 10, color: 'bg-[#4CB09A]' },
    ]

    return (
      <div className="min-h-screen bg-[#FAFAFA] pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4CB09A] to-[#F7D97E] p-6 pb-8">
          <h1 className="text-3xl font-bold text-white">Biblioteca</h1>
          <p className="text-white/80 mt-1">Explore práticas por categoria</p>
        </div>

        {/* Categories */}
        <div className="p-6 -mt-4 space-y-3">
          {libraryCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} práticas</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center justify-around max-w-md mx-auto">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4CB09A] transition-colors"
            >
              <Sparkles className="w-6 h-6" />
              <span className="text-xs font-medium">Início</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-[#4CB09A]">
              <Library className="w-6 h-6" />
              <span className="text-xs font-medium">Biblioteca</span>
            </button>
            <button 
              onClick={() => setCurrentScreen('premium')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4CB09A] transition-colors"
            >
              <Crown className="w-6 h-6" />
              <span className="text-xs font-medium">Premium</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Tela 5: Premium
  if (currentScreen === 'premium') {
    const premiumFeatures = [
      'Todas as séries desbloqueadas',
      'Programas de 21 dias',
      'Sons premium exclusivos',
      'IA Zen - rotinas personalizadas',
      'Download offline',
      'Yoga avançado',
      'Sem anúncios',
      'Acesso antecipado a novos conteúdos'
    ]

    return (
      <div className="min-h-screen bg-gradient-to-b from-[#4CB09A] to-[#F7D97E] pb-24">
        {/* Header */}
        <div className="p-6 pt-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Zenora Premium</h1>
            <p className="text-white/90 text-lg">Desbloqueie todo o potencial da sua jornada</p>
          </div>

          {/* Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-6 border border-white/20">
            <div className="grid grid-cols-1 gap-3">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#4CB09A] text-sm">✓</span>
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="space-y-4">
            {/* Annual Plan */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-[#F7D97E] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F7D97E] px-4 py-1 rounded-full">
                <span className="text-sm font-bold text-gray-800">MAIS POPULAR</span>
              </div>
              <div className="text-center mb-4 mt-2">
                <p className="text-gray-600 text-sm font-medium">ANUAL</p>
                <div className="flex items-baseline justify-center gap-1 my-2">
                  <span className="text-5xl font-bold text-gray-800">$4.49</span>
                  <span className="text-gray-500">/ano</span>
                </div>
                <p className="text-[#4CB09A] font-semibold">Economize 62%</p>
              </div>
              <button className="w-full bg-gradient-to-r from-[#4CB09A] to-[#F7D97E] text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Começar Agora
              </button>
            </div>

            {/* Monthly Plan */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="text-center mb-4">
                <p className="text-gray-600 text-sm font-medium">MENSAL</p>
                <div className="flex items-baseline justify-center gap-1 my-2">
                  <span className="text-4xl font-bold text-gray-800">$0.99</span>
                  <span className="text-gray-500">/mês</span>
                </div>
              </div>
              <button className="w-full bg-gray-100 text-gray-800 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300">
                Assinar Mensal
              </button>
            </div>
          </div>

          {/* Programs */}
          <div className="mt-8">
            <h3 className="text-white font-bold text-xl mb-4">Programas Especiais</h3>
            <div className="space-y-3">
              {[
                { name: '21 dias para Ansiedade Zero', price: '$2.99' },
                { name: 'Sono Profundo em 14 dias', price: '$1.99' },
                { name: 'Equilíbrio com Mantras', price: '$3.99' },
                { name: 'Reset Mental: 5 min por dia', price: '$1.99' }
              ].map((program, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between border border-white/20">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">{program.name}</span>
                  </div>
                  <span className="text-[#F7D97E] font-bold">{program.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center justify-around max-w-md mx-auto">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4CB09A] transition-colors"
            >
              <Sparkles className="w-6 h-6" />
              <span className="text-xs font-medium">Início</span>
            </button>
            <button 
              onClick={() => setCurrentScreen('library')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4CB09A] transition-colors"
            >
              <Library className="w-6 h-6" />
              <span className="text-xs font-medium">Biblioteca</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-[#4CB09A]">
              <Crown className="w-6 h-6" />
              <span className="text-xs font-medium">Premium</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
