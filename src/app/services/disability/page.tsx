'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, Heart, Home, BookOpen, Briefcase, Car } from 'lucide-react'
import Link from 'next/link'

export default function DisabilityServicePage() {
  const services = [
    {
      title: '医疗保障',
      description: '为残疾人士提供专门的医疗保障服务',
      icon: Heart,
      benefits: ['特殊医疗补贴', '康复治疗支持', '辅助器具资助', '长期护理服务'],
      eligibility: '持有残疾证的所有人士'
    },
    {
      title: '教育支持',
      description: '保障残疾儿童和成人的受教育权利',
      icon: BookOpen,
      benefits: ['特殊教育学校', '融合教育支持', '学习辅助工具', '教育费用减免'],
      eligibility: '残疾学生及其家庭'
    },
    {
      title: '就业援助',
      description: '帮助残疾人士就业和职业发展',
      icon: Briefcase,
      benefits: ['职业培训', '就业推荐', '创业扶持', '工作场所改造'],
      eligibility: '劳动年龄残疾人士'
    },
    {
      title: '住房保障',
      description: '提供适合残疾人士的住房解决方案',
      icon: Home,
      benefits: ['无障碍住房', '住房补贴', '房屋改造资助', '优先分配权'],
      eligibility: '低收入残疾人士家庭'
    },
    {
      title: '交通服务',
      description: '改善残疾人士的出行条件',
      icon: Car,
      benefits: ['无障碍公交', '交通补贴', '专用停车位', '出行辅助服务'],
      eligibility: '所有持证残疾人士'
    },
    {
      title: '生活补助',
      description: '提供基本生活保障和经济支持',
      icon: Users,
      benefits: ['生活补贴', '护理补贴', '津贴发放', '紧急救助'],
      eligibility: '重度残疾人士及低收入家庭'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">残疾人服务</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            为残疾人士及其家庭查找政府福利和项目
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">残疾人服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">主要福利：</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                        {service.benefits.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.benefits.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">适用对象：</h4>
                      <p className="text-xs text-gray-600">{service.eligibility}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    申请服务
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