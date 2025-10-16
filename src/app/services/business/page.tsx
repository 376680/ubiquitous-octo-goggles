'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Building, TrendingUp, FileText, Users, DollarSign, Globe } from 'lucide-react'
import Link from 'next/link'

export default function BusinessServicePage() {
  const services = [
    {
      title: '企业注册',
      description: '提供企业注册和工商登记服务',
      icon: Building,
      features: ['名称核准', '营业执照', '税务登记', '银行开户'],
      timeline: '3-5个工作日'
    },
    {
      title: '创业指导',
      description: '为创业者提供全方位指导服务',
      icon: TrendingUp,
      features: ['商业计划', '市场分析', '融资指导', '法律咨询'],
      timeline: '1-2周'
    },
    {
      title: '政策咨询',
      description: '提供相关政策和法规咨询服务',
      icon: FileText,
      features: ['政策解读', '合规指导', '优惠政策', '法规咨询'],
      timeline: '即时服务'
    },
    {
      title: '人才招聘',
      description: '为企业提供人才招聘服务',
      icon: Users,
      features: ['人才推荐', '招聘平台', '培训服务', '薪酬咨询'],
      timeline: '1-4周'
    },
    {
      title: '金融服务',
      description: '提供企业金融和融资服务',
      icon: DollarSign,
      features: ['贷款申请', '投资对接', '财务咨询', '税务筹划'],
      timeline: '1-3周'
    },
    {
      title: '国际贸易',
      description: '支持企业开展进出口业务',
      icon: Globe,
      features: ['进出口许可', '海关服务', '外汇管理', '贸易咨询'],
      timeline: '1-2周'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">创办企业</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解如何创办自己的企业，包括进出口业务。
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">企业服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">服务内容：</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">办理时间：</span>
                      <span className="font-medium">{service.timeline}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                    了解详情
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