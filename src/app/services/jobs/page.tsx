'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Briefcase, Users, TrendingUp, GraduationCap, Building, Shield } from 'lucide-react'
import Link from 'next/link'

export default function JobsServicePage() {
  const services = [
    {
      title: '就业服务',
      description: '提供就业信息、职业介绍和就业指导',
      icon: Briefcase,
      features: ['职位匹配', '简历优化', '面试辅导', '职业规划'],
      target: '所有求职者'
    },
    {
      title: '职业培训',
      description: '提供职业技能培训和提升课程',
      icon: GraduationCap,
      features: ['技能培训', '证书考试', '在线学习', '实训基地'],
      target: '需要提升技能的求职者'
    },
    {
      title: '创业扶持',
      description: '支持创业和小微企业发展',
      icon: TrendingUp,
      features: ['创业指导', '资金支持', '政策咨询', '场地提供'],
      target: '创业者和小微企业主'
    },
    {
      title: '劳动保障',
      description: '维护劳动者权益，提供法律援助',
      icon: Shield,
      features: ['权益保护', '法律咨询', '纠纷调解', '仲裁服务'],
      target: '所有劳动者'
    },
    {
      title: '失业保险',
      description: '为失业人员提供基本生活保障',
      icon: Users,
      features: ['失业救济', '再就业培训', '创业支持', '生活补助'],
      target: '失业人员'
    },
    {
      title: '企业服务',
      description: '为企业提供人力资源服务',
      icon: Building,
      features: ['人才招聘', '培训服务', '政策咨询', '补贴申请'],
      target: '各类企业'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">工作、劳动法和失业</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            获取找工作的资源。了解失业保险和重要的劳动法。
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">就业服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
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
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">服务对象：</h4>
                      <p className="text-xs text-gray-600">{service.target}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
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