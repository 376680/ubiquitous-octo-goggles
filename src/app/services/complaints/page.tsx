'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, MessageSquare, AlertTriangle, Phone, Building, FileText, CheckCircle, MapPin, Home, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function ComplaintsServicePage() {
  const complaintTypes = [
    {
      title: '政府机构投诉',
      description: '对政府部门服务态度、工作效率等方面的投诉',
      icon: Building,
      processingTime: '7-15个工作日',
      contact: '400-MOUSE-COMP'
    },
    {
      title: '电话营销投诉',
      description: '举报骚扰电话、垃圾短信和虚假营销',
      icon: Phone,
      processingTime: '3-7个工作日',
      contact: '400-MOUSE-SPAM'
    },
    {
      title: '产品服务投诉',
      description: '对商品质量、服务不达标等问题进行投诉',
      icon: FileText,
      processingTime: '5-10个工作日',
      contact: '400-MOUSE-PROD'
    },
    {
      title: '旅游服务投诉',
      description: '旅游过程中的服务质量、安全问题投诉',
      icon: MapPin,
      processingTime: '3-5个工作日',
      contact: '400-MOUSE-TRAVEL'
    },
    {
      title: '住房问题投诉',
      description: '房屋质量、租赁纠纷、物业管理问题',
      icon: Home,
      processingTime: '7-14个工作日',
      contact: '400-MOUSE-HOUSE'
    },
    {
      title: '银行业务投诉',
      description: '银行服务、金融产品相关问题投诉',
      icon: CreditCard,
      processingTime: '5-10个工作日',
      contact: '400-MOUSE-BANK'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">投诉服务</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            提交涉及政府机构、电话营销人员、产品与服务、旅游、住房及银行业的投诉
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">投诉类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaintTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">处理时间：</span>
                      <span className="font-medium">{type.processingTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">投诉热线：</span>
                      <span className="font-medium text-pink-600">{type.contact}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700">
                    立即投诉
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