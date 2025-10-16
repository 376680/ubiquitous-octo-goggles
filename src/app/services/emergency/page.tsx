'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, AlertTriangle, Phone, Home, Heart, Shield } from 'lucide-react'
import Link from 'next/link'

export default function EmergencyServicePage() {
  const emergencyServices = [
    {
      title: '医疗急救',
      description: '紧急医疗救助和救护车服务',
      icon: Heart,
      hotline: '120',
      responseTime: '5-10分钟',
      priority: '最高优先级'
    },
    {
      title: '消防救援',
      description: '火灾、救援等紧急情况处理',
      icon: AlertTriangle,
      hotline: '119',
      responseTime: '5-15分钟',
      priority: '最高优先级'
    },
    {
      title: '警察报警',
      description: '治安案件、刑事犯罪报警',
      icon: Shield,
      hotline: '110',
      responseTime: '5-20分钟',
      priority: '最高优先级'
    },
    {
      title: '灾害救助',
      description: '自然灾害紧急救援和安置',
      icon: Home,
      hotline: '400-MOUSE-DIS',
      responseTime: '30分钟-2小时',
      priority: '高优先级'
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
                <h1 className="text-xl font-bold text-gray-900">小鼠帝国政府网</h1>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">灾害与紧急情况</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解灾害援助，并查找针对其他紧急情况的政府福利
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">紧急求助服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow border-2 ${
                service.priority === '最高优先级' ? 'border-red-300' : 'border-orange-300'
              }`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    service.priority === '最高优先级' ? 'bg-red-600' : 'bg-orange-600'
                  }`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <Badge variant={service.priority === '最高优先级' ? 'destructive' : 'default'}>
                      {service.priority}
                    </Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">紧急热线：</span>
                      <span className="font-bold text-red-600">{service.hotline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">响应时间：</span>
                      <span className="font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                  <Button className={`w-full mt-4 ${
                    service.priority === '最高优先级' ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-600 hover:bg-orange-700'
                  }`}>
                    <Phone className="h-4 w-4 mr-2" />
                    立即拨打
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 小鼠帝国政府网. 为纪念从"低盐大鼠"到小鼠帝国的伟大历程而建立.
          </p>
          <p className="mt-2 text-xs text-gray-500">🐭 帝国荣耀，公民至上 🐭</p>
        </div>
      </footer>
    </div>
  )
}