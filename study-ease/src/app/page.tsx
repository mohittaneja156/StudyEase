"use client";

import React from "react";
import { 
  Upload, 
  FileText, 
  Brain, 
  MessageCircle, 
  Download, 
  History,
  BookOpen,
  Lightbulb,
  CheckCircle,
  Play,
  ArrowRight,
  Zap,
  Target,
  Users,
  Star
} from 'lucide-react';

export default function Page() {
  return (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-white dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6 transition-colors duration-300">
                Transform Your Study Materials into 
                <span className="text-blue-600 dark:text-blue-400"> Interactive Learning</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                Upload videos, PDFs, or YouTube links and get instant transcriptions, AI-generated notes, 
                flashcards, mind maps, and quizzes. Study smarter, not harder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 flex items-center justify-center group">
                  Start Learning Free
                  {/* <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /> */}
                </button>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">4.9/5 from 2,500+ students</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-blue-100 dark:border-blue-900 transition-colors duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-800/20 rounded-lg transition-colors duration-300">
                    <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-200 transition-colors duration-300">Upload your study material</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-800/20 rounded-lg transition-colors duration-300">
                    <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-200 transition-colors duration-300">AI processes in seconds</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-800/20 rounded-lg transition-colors duration-300">
                    <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-200 transition-colors duration-300">Get interactive study tools</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-full opacity-20 transition-colors duration-300"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-300 dark:bg-blue-600 rounded-full opacity-20 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        Everything You Need to Study Effectively
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
        Our AI-powered platform transforms any study material into comprehensive learning tools
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Smart Transcriptions */}
      <div className="bg-blue-50 dark:bg-blue-800/20 p-6 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-700/40 transition-colors group">
        <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          Smart Transcriptions
        </h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Accurate transcriptions from videos and audio using advanced speech-to-text technology.
        </p>
      </div>

      {/* AI Summaries */}
      <div className="bg-blue-50 dark:bg-blue-800/20 p-6 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-700/40 transition-colors group">
        <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          AI Summaries
        </h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Get concise summaries and detailed notes generated by advanced AI models.
        </p>
      </div>

      {/* Interactive Flashcards */}
      <div className="bg-blue-50 dark:bg-blue-800/20 p-6 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-700/40 transition-colors group">
        <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          Interactive Flashcards
        </h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Automatically generated flashcards for effective spaced repetition learning.
        </p>
      </div>

      {/* Mind Maps */}
      <div className="bg-blue-50 dark:bg-blue-800/20 p-6 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-700/40 transition-colors group">
        <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Lightbulb className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          Mind Maps
        </h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Visual mind maps that help you understand concepts and their relationships.
        </p>
      </div>

      {/* Smart Quizzes */}
      <div className="bg-blue-50 dark:bg-blue-800/20 p-6 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-700/40 transition-colors group">
        <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <CheckCircle className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          Smart Quizzes
        </h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Test your understanding with AI-generated quizzes tailored to your content.
        </p>
      </div>

      {/* Chat Assistant */}
      <div className="bg-blue-50 dark:bg-blue-800/20 p-6 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-700/40 transition-colors group">
        <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          Chat Assistant
        </h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Ask questions about your material and get instant, context-aware answers.
        </p>
      </div>

      {/* PDF Export */}
      <div className="bg-blue-50 dark:bg-blue-800/20 p-6 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-700/40 transition-colors group">
        <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Download className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          PDF Export
        </h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Download your notes and summaries as PDFs for offline studying.
        </p>
      </div>

      {/* Study History */}
      <div className="bg-blue-50 dark:bg-blue-800/20 p-6 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-700/40 transition-colors group">
        <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <History className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          Study History
        </h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Access all your previous uploads and results in one organized place.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-blue-50 dark:bg-blue-900/10 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">How StudyEase Works</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">Simple, fast, and effective learning in just 3 steps</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 relative">
      {/* Step 1 */}
      <div className="text-center relative">
        <div className="bg-blue-600 dark:bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Upload className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">1. Upload Content</h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors duration-300">
          Upload your lecture videos, PDFs, or paste YouTube links. We support multiple formats for maximum flexibility.
        </p>
      </div>

      {/* Step 2 */}
      <div className="text-center relative">
        <div className="bg-blue-600 dark:bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Zap className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">2. AI Processing</h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors duration-300">
          Our advanced AI transcribes, analyzes, and processes your content using Google Speech-to-Text and Gemini/OpenAI models.
        </p>
      </div>

      {/* Step 3 */}
      <div className="text-center relative">
        <div className="bg-blue-600 dark:bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Target className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">3. Interactive Learning</h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors duration-300">
          Access your personalized dashboard with notes, flashcards, quizzes, mind maps, and chat assistant.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">50K+</div>
        <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Happy Students</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">1M+</div>
        <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Hours Processed</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">95%</div>
        <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Accuracy Rate</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">24/7</div>
        <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">AI Support</div>
      </div>
    </div>
  </div>
</section>


   <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white dark:text-white transition-colors duration-300">
  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Study Experience?</h2>
    <p className="text-xl mb-8 opacity-90">
      Join thousands of students who are already studying smarter with StudyEase. 
      <br/>
      Start today and see the difference AI can make.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
    
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">StudyEase</span>
              </div>
              <p className="text-gray-400">
                Making learning accessible, efficient, and enjoyable for students worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 StudyEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

