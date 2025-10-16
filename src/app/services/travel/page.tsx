'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Plane, FileText, Globe, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function TravelServicePage() {
  const services = [
    {
      title: '护照申请',
      description: '申请、换发、补发小鼠帝国护照',
      icon: FileText,
      processingTime: '5-10个工作日',
      fee: '50-100帝国币'
    },
    {
      title: '签证服务',
      description: '办理各国签证和入境许可',
      icon: Globe,
      processingTime: '7-30个工作日',
      fee: '根据国家而定'
    },
    {
      title: '旅行证件',
      description: '海员证、旅行证等其他证件',
      icon: FileText,
      processingTime: '3-7个工作日',
      fee: '30-80帝国币'
    },
    {
      title: '加急服务',
      description: '紧急情况下的快速证件办理',
      icon: AlertTriangle,
      processingTime: '1-3个工作日',
      fee: '标准费用2倍'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">旅行</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            获取旅行信息，护照申请，旅行警告等
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">旅行服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">处理时间：</span>
                      <span className="font-medium">{service.processingTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">费用：</span>
                      <span className="font-medium">{service.fee}</span>
                    </div>
                  </div>
                  <Link href={`/services/travel/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                      申请服务
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