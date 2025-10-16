'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Receipt, Calculator, FileText, Calendar, AlertCircle, Users, Building, ShoppingCart, Home } from 'lucide-react'
import Link from 'next/link'

export default function TaxesServicePage() {
  const taxTypes = [
    {
      title: '个人所得税',
      description: '针对个人收入征收的税款',
      icon: Users,
      rate: '5%-45%',
      deadline: '次年4月30日'
    },
    {
      title: '企业所得税',
      description: '针对企业利润征收的税款',
      icon: Building,
      rate: '15%-25%',
      deadline: '季度申报'
    },
    {
      title: '增值税',
      description: '针对商品和服务增值部分征收的税款',
      icon: ShoppingCart,
      rate: '6%-13%',
      deadline: '月度申报'
    },
    {
      title: '房产税',
      description: '针对房产所有权征收的税款',
      icon: Home,
      rate: '0.5%-1.2%',
      deadline: '年度申报'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/mouse-empire-logo.png" alt="小鼠帝国徽章" className="w-8 h-8 object-contain" />
                <h1 className="text-xl font-bold text-gray-900">小鼠帝国</h1>
              </Link>
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回首页
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">税收</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解税收政策，报税流程，税务相关问题
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">主要税种</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {taxTypes.map((tax, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <tax.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{tax.title}</CardTitle>
                  <CardDescription>{tax.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">税率：</span>
                      <span className="font-semibold text-red-600">{tax.rate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">申报期：</span>
                      <span className="font-medium">{tax.deadline}</span>
                    </div>
                  </div>
                  <Link href={`/services/taxes/${tax.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                      了解详情
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 小鼠帝国. 为纪念从"低盐大鼠"到小鼠帝国的伟大历程而建立.
          </p>
          <p className="mt-2 text-xs text-gray-500">🐭 帝国荣耀，公民至上 🐭</p>
        </div>
      </footer>
    </div>
  )
}