"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Building2,
  Users,
  Heart,
  TrendingUp,
  ExternalLink,
  X,
  Zap,
  Stethoscope,
  MessageSquare,
  ShoppingCart,
  BarChart3,
  Smartphone,
  Brain,
  Truck,
  GraduationCap,
  Video,
  Award,
  Star,
  Clock,
  Mail,
  Sparkles,
  Lock,
  Eye,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react"

export default function TrovesxHomepage() {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", emoji: "", platform: "" })
  const [showRefillXDemo, setShowRefillXDemo] = useState(false)
  const [showSkillSwapDemo, setShowSkillSwapDemo] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [showLinkedInModal, setShowLinkedInModal] = useState(false)
  const [showTwitterModal, setShowTwitterModal] = useState(false)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineIndex((prev) => (prev + 1) % timelineEvents.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const targetDate = new Date("2026-01-01T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSocialClick = (platform: string) => {
    const content =
      platform === "linkedin"
        ? { title: "LinkedIn", emoji: "💼", platform: "LinkedIn" }
        : { title: "Twitter", emoji: "🐦", platform: "Twitter" }

    setModalContent(content)
    setShowModal(true)
  }

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const timelineEvents = [
    {
      year: "2025",
      title: "Founded in Retail",
      description: "Started as a retail innovation company with smart supply chain solutions",
      active: true,
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-600",
    },
    {
      year: "2025",
      title: "AI & Fintech Expansion",
      description: "Launched RefillX and SkillSwap, expanding into AI-powered financial technology",
      active: true,
      icon: Brain,
      color: "from-purple-500 to-pink-600",
    },
    {
      year: "2026-2027",
      title: "Pharmaceutical Dominance",
      description: "Strategic entry into pharmaceutical industry with revolutionary healthcare solutions",
      active: false,
      icon: Stethoscope,
      color: "from-emerald-500 to-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Trovesx Enterprise
                </h1>
                <p className="text-xs text-gray-500">Multi-Industry Innovation Leader</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#subsidiaries"
                className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group"
              >
                Subsidiaries
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#timeline"
                className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group"
              >
                Journey
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            id="hero-content"
            data-animate
            className={`transition-all duration-1000 ${visibleElements.has("hero-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-6 hover:scale-105 transition-transform duration-300">
              <Zap className="w-4 h-4 text-indigo-600 mr-2" />
              <span className="text-indigo-800 font-medium text-sm">
                From Retail Roots to Multi-Industry Innovation
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Reshaping Industries
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Started as retail innovators → Now building AI-powered solutions → Next: Pharmaceutical revolution. We're
              building tomorrow's solutions across retail, fintech, education, and pharmaceuticals.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-indigo-600">2</div>
                <div className="text-sm text-gray-500">Active Subsidiaries</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-600">1</div>
                <div className="text-sm text-gray-500">Coming Soon</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-pink-600">2026-2027</div>
                <div className="text-sm text-gray-500">Pharma Launch</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Explore Our Innovation Journey
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleSocialClick("linkedin")}
                  className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => handleSocialClick("twitter")}
                  className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110"
                >
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="about-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 delay-200 ${visibleElements.has("about-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Three-Pillar Innovation Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on innovation, driven by purpose, expanding across industries with strategic focus
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              id="pillar-1"
              data-animate
              className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 ${visibleElements.has("pillar-1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Profit-Driven Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  RefillX transforming retail supply chains with AI-powered WhatsApp commerce and fintech solutions,
                  creating sustainable business value and market disruption.
                </p>
              </CardContent>
            </Card>
            <Card
              id="pillar-2"
              data-animate
              className={`group hover:shadow-xl transition-all duration-500 delay-100 transform hover:-translate-y-4 bg-gradient-to-br from-green-50 to-emerald-50 border-0 ${visibleElements.has("pillar-2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  SkillSwap democratizing education through our non-profit EdTech platform, making learning accessible
                  regardless of economic barriers and creating opportunities for all.
                </p>
              </CardContent>
            </Card>
            <Card
              id="pillar-3"
              data-animate
              className={`group hover:shadow-xl transition-all duration-500 delay-200 transform hover:-translate-y-4 bg-gradient-to-br from-purple-50 to-pink-50 border-0 ${visibleElements.has("pillar-3") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pharmaceutical dominance through innovation, leveraging our multi-industry expertise to revolutionize
                  healthcare and establish market leadership by 2026-2027.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Timeline */}
      <section id="timeline" className="py-20 bg-gradient-to-r from-slate-50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-500 rounded-full animate-bounce animation-delay-2000"></div>
          <div className="absolute bottom-20 right-16 w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            id="timeline-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has("timeline-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Evolution</h2>
            <p className="text-xl text-gray-600">The strategic journey across industries</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-400 to-transparent rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon
                const isHighlighted = index === activeTimelineIndex
                return (
                  <div
                    key={index}
                    id={`timeline-${index}`}
                    data-animate
                    className={`flex items-center transition-all duration-1000 delay-${index * 200} ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} ${visibleElements.has(`timeline-${index}`) ? "opacity-100 translate-x-0" : `opacity-0 ${index % 2 === 0 ? "-translate-x-8" : "translate-x-8"}`}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card
                        className={`${event.active ? "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200" : "bg-gray-50 border-gray-200"} hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isHighlighted ? "ring-2 ring-indigo-300 shadow-xl scale-105" : ""}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div
                              className={`w-10 h-10 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110`}
                            >
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div
                              className={`text-sm font-semibold ${event.active ? "text-indigo-600" : "text-gray-500"}`}
                            >
                              {event.year}
                            </div>
                          </div>
                          <h3 className={`text-xl font-bold mb-2 ${event.active ? "text-gray-900" : "text-gray-600"}`}>
                            {event.title}
                          </h3>
                          <p className={`${event.active ? "text-gray-700" : "text-gray-500"}`}>{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div
                        className={`w-8 h-8 rounded-full border-4 transition-all duration-500 ${event.active ? "bg-indigo-500 border-white shadow-2xl scale-125" : "bg-gray-300 border-white"} ${isHighlighted ? "animate-pulse ring-4 ring-indigo-200" : ""}`}
                      >
                        {event.active && (
                          <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-75"></div>
                        )}
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* RefillX Detailed Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
              <ShoppingCart className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium text-sm">Smart Retail Solutions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">RefillX: Revolutionizing Retail Supply Chain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-Powered WhatsApp Commerce eliminating stockouts and reducing supply chain costs for small retailers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Refill Reminders</h3>
                  <p className="text-gray-600">
                    Predictive analytics track inventory patterns and automatically suggest optimal reorder times,
                    preventing stockouts before they happen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp-Based Ordering</h3>
                  <p className="text-gray-600">
                    No app needed! Simple WhatsApp interface allows retailers to place orders, track deliveries, and
                    manage inventory with familiar messaging.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Supplier Connection</h3>
                  <p className="text-gray-600">
                    Real-time price comparison across multiple suppliers with automated negotiations and bulk order
                    consolidation for better rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Tracking & Insights</h3>
                  <p className="text-gray-600">
                    Real-time delivery tracking with AI-powered cost optimization insights and future demand forecasting
                    for strategic planning.
                  </p>
                </div>
              </div>

              <Button
                onClick={() => setShowRefillXDemo(true)}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                See WhatsApp Demo
                <Smartphone className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Value Proposition Card */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact Metrics</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                      <div className="text-sm text-gray-600">Stockout Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-600 mb-2">60%</div>
                      <div className="text-sm text-gray-600">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                      <div className="text-sm text-gray-600">User Satisfaction</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-6 text-center">
                    <h4 className="font-bold text-gray-900 mb-2">Value Proposition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Eliminating stockouts and reducing supply chain costs for small retailers through intelligent
                      automation and seamless WhatsApp integration."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SkillSwap Impact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-800 font-medium text-sm">Democratizing Education</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SkillSwap: Creating Opportunities Through Knowledge Exchange
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making education accessible regardless of economic barriers through innovative skill bartering and
              AI-powered matching
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Skill Bartering System</h3>
                  <p className="text-gray-600">
                    Revolutionary teach-to-learn model where users exchange skills instead of money, creating a
                    sustainable education ecosystem for all economic backgrounds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Matching</h3>
                  <p className="text-gray-600">
                    Intelligent algorithm matches learners with teachers based on skills, availability, learning styles,
                    and compatibility for optimal knowledge transfer.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integrated Learning Platform</h3>
                  <p className="text-gray-600">
                    Built-in video calling, scheduling, progress tracking, and resource sharing tools create a seamless
                    learning experience within one platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gamification & Community</h3>
                  <p className="text-gray-600">
                    Badges, reputation points, community spaces, and progress analytics motivate continuous learning and
                    create supportive educational communities.
                  </p>
                </div>
              </div>

              <Button
                onClick={() => setShowSkillSwapDemo(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                See Matching Demo
                <Star className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Social Impact Card */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Impact Metrics</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">12K+</div>
                      <div className="text-sm text-gray-600">Users Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 mb-2">25K+</div>
                      <div className="text-sm text-gray-600">Skills Exchanged</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-600 mb-2">150+</div>
                      <div className="text-sm text-gray-600">Communities Built</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 text-center">
                    <h4 className="font-bold text-gray-900 mb-2">Social Mission</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Making education accessible regardless of economic barriers by creating opportunities for
                      knowledge exchange and professional growth across all communities."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mystery Third Subsidiary Teaser */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-28 h-28 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-32 right-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-pulse animation-delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600 mr-2" />
              <span className="text-emerald-800 font-medium text-sm">Innovation in Progress</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Solution Launching Soon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our most ambitious project yet is in development. A breakthrough that will transform an entire industry
              and establish new standards for innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Countdown Timer */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-white to-emerald-50 border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch Countdown</h3>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">{timeLeft.days}</div>
                      <div className="text-sm text-gray-600">Days</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-600 mb-2">{timeLeft.hours}</div>
                      <div className="text-sm text-gray-600">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-2">{timeLeft.minutes}</div>
                      <div className="text-sm text-gray-600">Minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{timeLeft.seconds}</div>
                      <div className="text-sm text-gray-600">Seconds</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-6 text-center">
                    <h4 className="font-bold text-gray-900 mb-2">Target Launch</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Q1 2026 - A revolutionary solution that will redefine industry standards and create unprecedented
                      value.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-white to-teal-50 border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Stay Updated</h3>
                      <p className="text-sm text-gray-600">Be the first to know about our breakthrough</p>
                    </div>
                  </div>

                  {!subscribed ? (
                    <form onSubmit={handleNewsletterSignup} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        required
                      />
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white"
                      >
                        Get Exclusive Updates
                        <Sparkles className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-green-600 mb-2">✓ Successfully subscribed!</div>
                      <p className="text-sm text-gray-600">
                        You'll be the first to know about our revolutionary launch.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Mystery Hints */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visionary Technology</h3>
                  <p className="text-gray-600">
                    Cutting-edge innovation that bridges the gap between traditional practices and future possibilities,
                    creating solutions that seemed impossible just years ago.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Life-Changing Impact</h3>
                  <p className="text-gray-600">
                    A solution designed to improve quality of life on a global scale, addressing fundamental challenges
                    that affect millions of people worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Intelligence</h3>
                  <p className="text-gray-600">
                    Advanced artificial intelligence and machine learning capabilities that enable precision,
                    personalization, and predictive insights at unprecedented scales.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory Excellence</h3>
                  <p className="text-gray-600">
                    Built with the highest standards of compliance, safety, and regulatory approval processes, ensuring
                    trust and reliability from day one.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border-l-4 border-emerald-500">
                <h4 className="font-bold text-gray-900 mb-2">Industry Transformation</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "This breakthrough will establish new industry standards and create unprecedented opportunities for
                  innovation, growth, and positive global impact."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Subsidiaries Section */}
      <section id="subsidiaries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="subsidiaries-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has("subsidiaries-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Subsidiaries</h2>
            <p className="text-xl text-gray-600">Diverse portfolio driving innovation across sectors</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* RefillX */}
            <Card
              id="refillx-card"
              data-animate
              className={`group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 border-0 overflow-hidden ${visibleElements.has("refillx-card") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">RefillX</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full transform group-hover:scale-110 transition-transform duration-300">
                        Smart Retail Solutions
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Revolutionizing retail supply chain with AI-powered WhatsApp commerce, smart refill reminders, and
                  direct supplier connections. Eliminating stockouts for small retailers.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Focus:</span> AI Commerce • Supply Chain • WhatsApp Tech
                  </div>
                  <Button
                    onClick={() => window.open("https://refillx.trovesx.com", "_blank")}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white group-hover:scale-110 transition-all duration-300 hover:shadow-lg"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* SkillSwap */}
            <Card
              id="skillswap-card"
              data-animate
              className={`group hover:shadow-2xl transition-all duration-700 delay-200 transform hover:-translate-y-6 hover:-rotate-1 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 border-0 overflow-hidden ${visibleElements.has("skillswap-card") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-6 right-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60"></div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">SkillSwap</h3>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full transform group-hover:scale-110 transition-transform duration-300">
                        Democratizing Education
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Creating opportunities through knowledge exchange with skill bartering, AI-powered matching, and
                  gamified learning. Making education accessible regardless of economic barriers.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Focus:</span> EdTech • Skill Exchange • Social Impact
                  </div>
                  <Button
                    onClick={() => window.open("https://skillswap.trovesx.com", "_blank")}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white group-hover:scale-110 transition-all duration-300 hover:shadow-lg"
                  >
                    Explore
                    <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon - Updated */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Next Chapter</h2>
            <p className="text-xl text-gray-600 mb-8">
              Beyond our current innovations lies our most ambitious venture yet - a revolutionary solution that will
              transform healthcare and establish pharmaceutical excellence.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full">
              <Stethoscope className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-800 font-medium">Healthcare Revolution - Coming 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            id="innovation-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has("innovation-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl font-bold mb-4">Innovation Lab</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Where breakthrough ideas become tomorrow's industry standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Research",
                desc: "Advanced machine learning algorithms",
                count: "15+ Projects",
              },
              { icon: Zap, title: "Automation", desc: "Process optimization solutions", count: "8 Patents" },
              {
                icon: Globe,
                title: "Global Expansion",
                desc: "International market strategies",
                count: "12 Countries",
              },
              { icon: TrendingUp, title: "Future Tech", desc: "Emerging technology adoption", count: "5 Partnerships" },
            ].map((item, index) => (
              <div
                key={item.title}
                id={`innovation-${index}`}
                data-animate
                className={`text-center group transition-all duration-1000 ${visibleElements.has(`innovation-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-purple-300 group-hover:text-white transition-colors duration-300" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-purple-200 mb-4">{item.desc}</p>
                  <div className="text-2xl font-bold text-purple-300">{item.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="impact-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has("impact-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Potential Global Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vision for influence across industries and communities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Businesses Served", icon: Building2, color: "text-blue-600" },
              { number: "2.5M+", label: "Lives Impacted", icon: Users, color: "text-green-600" },
              { number: "15+", label: "Countries Reached", icon: Globe, color: "text-purple-600" },
              { number: "₹500Cr+", label: "Economic Value Created", icon: TrendingUp, color: "text-orange-600" },
            ].map((metric, index) => (
              <div
                key={metric.label}
                id={`metric-${index}`}
                data-animate
                className={`text-center group transition-all duration-1000 ${visibleElements.has(`metric-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <metric.icon
                    className={`w-12 h-12 mx-auto mb-4 ${metric.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.number}</div>
                  <p className="text-gray-600 font-medium">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-32 h-32 bg-indigo-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-32 w-24 h-24 bg-purple-500 rounded-full animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div
              id="footer-brand"
              data-animate
              className={`md:col-span-2 transition-all duration-1000 ${visibleElements.has("footer-brand") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Trovesx Enterprise</h3>
                  <p className="text-gray-400 text-sm">Multi-Industry Innovation Leader</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future across retail, fintech, and pharmaceutical industries. Based in India with a
                global vision for innovation and growth.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowLinkedInModal(true)}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowTwitterModal(true)}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              id="footer-links"
              data-animate
              className={`transition-all duration-1000 delay-200 ${visibleElements.has("footer-links") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#subsidiaries"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    Subsidiaries
                  </a>
                </li>
                <li>
                  <a
                    href="#timeline"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    Our Journey
                  </a>
                </li>
                <li>
                  <a
                    href="#innovation"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    Innovation Lab
                  </a>
                </li>
              </ul>
            </div>

            <div
              id="footer-contact"
              data-animate
              className={`transition-all duration-1000 delay-400 ${visibleElements.has("footer-contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p className="hover:text-white transition-colors duration-300">📍 India</p>
                <p className="hover:text-white transition-colors duration-300">📧 contact@trovesx.com</p>
                <p className="hover:text-white transition-colors duration-300">📧 founder@trovesx.com</p>
                <p className="hover:text-white transition-colors duration-300 mt-4 text-sm">
                  <strong>Business Hours:</strong>
                  <br />
                  Mon-Fri: 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </div>

          <div
            id="footer-bottom"
            data-animate
            className={`border-t border-gray-800 mt-12 pt-8 text-center transition-all duration-1000 delay-600 ${visibleElements.has("footer-bottom") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-gray-400">
              © 2025 Trovesx Enterprise. All rights reserved. | Innovating across industries since 2025.
            </p>
          </div>
        </div>
      </footer>

      {/* Social Media Modals */}
      {showLinkedInModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform animate-scale-in shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We're not fully on LinkedIn yet!</h3>
              <p className="text-gray-600 mb-6">
                We will be there soon with big updates
                <span className="inline-flex ml-2">
                  <span className="animate-pulse">.</span>
                  <span className="animate-pulse animation-delay-200">.</span>
                  <span className="animate-pulse animation-delay-400">.</span>
                </span>
              </p>
              <Button
                onClick={() => setShowLinkedInModal(false)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-2 rounded-full"
              >
                Got it!
              </Button>
            </div>
            <button
              onClick={() => setShowLinkedInModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {showTwitterModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform animate-scale-in shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">🐦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We're not fully on Twitter yet!</h3>
              <p className="text-gray-600 mb-6">
                We will be there soon with big updates
                <span className="inline-flex ml-2">
                  <span className="animate-pulse">.</span>
                  <span className="animate-pulse animation-delay-200">.</span>
                  <span className="animate-pulse animation-delay-400">.</span>
                </span>
              </p>
              <Button
                onClick={() => setShowTwitterModal(false)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-2 rounded-full"
              >
                Got it!
              </Button>
            </div>
            <button
              onClick={() => setShowTwitterModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Social Media Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform animate-scale-in shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">{modalContent.emoji}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We're not on {modalContent.platform} yet!</h3>
              <p className="text-gray-600 mb-6">
                We will be there soon with big updates
                <span className="inline-flex ml-2">
                  <span className="animate-pulse">.</span>
                  <span className="animate-pulse animation-delay-200">.</span>
                  <span className="animate-pulse animation-delay-400">.</span>
                </span>
              </p>
              <Button
                onClick={() => setShowModal(false)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-2 rounded-full"
              >
                Got it!
              </Button>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Demo Modal */}
      {showRefillXDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform animate-scale-in shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp Ordering Demo</h3>
              <p className="text-gray-600 text-sm">See how retailers order through WhatsApp</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="bg-white rounded-lg p-3 flex-1">
                  <p className="text-sm text-gray-800">"Hi RefillX! I need to reorder rice and dal"</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Great! I found the best prices:</p>
                  <p className="text-sm mt-1">🌾 Rice (25kg): ₹1,200</p>
                  <p className="text-sm">🫘 Dal (10kg): ₹800</p>
                  <p className="text-sm mt-1">Total: ₹2,000 (Save ₹300!)</p>
                </div>
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="bg-white rounded-lg p-3 flex-1">
                  <p className="text-sm text-gray-800">"Perfect! Please place the order"</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">✅ Order placed!</p>
                  <p className="text-sm">📦 Delivery: Tomorrow 2-4 PM</p>
                  <p className="text-sm">🚚 Track: bit.ly/track123</p>
                </div>
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button onClick={() => setShowRefillXDemo(false)} variant="outline" className="flex-1">
                Close
              </Button>
              <Button
                onClick={() => window.open("https://refillx.trovesx.com", "_blank")}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
              >
                Try RefillX
              </Button>
            </div>

            <button
              onClick={() => setShowRefillXDemo(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* SkillSwap Demo Modal */}
      {showSkillSwapDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform animate-scale-in shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Matching Demo</h3>
              <p className="text-gray-600 text-sm">See how we match learners with teachers</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-900">Sarah wants to learn Python</span>
                </div>
                <p className="text-sm text-gray-600">Offers: Graphic Design • Available: Evenings</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                  <Brain className="w-4 h-4 text-purple-600 mr-1" />
                  <span className="text-sm text-purple-800">AI Matching...</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">Perfect Match: Alex</span>
                </div>
                <p className="text-sm text-gray-600">Teaches: Python • Wants: Graphic Design • 98% compatibility</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 text-center">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">✨ Match Success!</span> Both users can now exchange skills and start
                  learning together.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button onClick={() => setShowSkillSwapDemo(false)} variant="outline" className="flex-1">
                Close
              </Button>
              <Button
                onClick={() => window.open("https://skillswap.trovesx.com", "_blank")}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
              >
                Try SkillSwap
              </Button>
            </div>

            <button
              onClick={() => setShowSkillSwapDemo(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
