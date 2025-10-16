'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Baby, GraduationCap, Heart, Briefcase, Home, Users } from 'lucide-react'
import Link from 'next/link'

export default function LifeStagesPage() {
  const lifeStages = [
    {
      title: '婴幼儿阶段',
      description: '0-3岁，为婴幼儿提供健康、营养和早期教育支持',
      icon: Baby,
      ageRange: '0-3岁',
      services: ['儿童健康检查', '疫苗接种', '早教指导', '营养补助'],
      benefits: ['免费疫苗', '健康体检', '早教课程', '奶粉补贴']
    },
    {
      title: '学龄前阶段',
      description: '3-6岁，学前教育准备和成长支持',
      icon: Users,
      ageRange: '3-6岁',
      services: ['幼儿园教育', '兴趣培养', '健康监测', '家庭教育指导'],
      benefits: ['学前教育补贴', '兴趣班费用减免', '健康档案', '家长培训']
    },
    {
      title: '学龄阶段',
      description: '6-18岁，义务教育和青少年发展支持',
      icon: GraduationCap,
      ageRange: '6-18岁',
      services: ['义务教育', '课外辅导', '心理健康', '兴趣发展'],
      benefits: ['免费教育', '助学金', '心理辅导', '课外活动支持']
    },
    {
      title: '青年阶段',
      description: '18-35岁，高等教育、就业和独立生活支持',
      icon: Briefcase,
      ageRange: '18-35岁',
      services: ['高等教育', '就业服务', '创业支持', '住房保障'],
      benefits: ['学费减免', '就业培训', '创业贷款', '青年公寓']
    },
    {
      title: '中年阶段',
      description: '35-60岁，职业发展、家庭责任和健康管理',
      icon: Heart,
      ageRange: '35-60岁',
      services: ['职业发展', '家庭支持', '健康管理', '财务规划'],
      benefits: ['技能提升', '家庭津贴', '健康体检', '税收优惠']
    },
    {
      title: '老年阶段',
      description: '60岁以上，养老保障和晚年生活支持',
      icon: Home,
      ageRange: '60岁以上',
      services: ['养老服务', '医疗保障', '社会参与', '权益保护'],
      benefits: ['养老金', '医疗保险', '社区服务', '老年活动中心']
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">人生大事</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索政府福利和服务，以帮助您和您的家人度过人生的每个阶段
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">人生阶段</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeStages.map((stage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-4">
                    <stage.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{stage.title}</CardTitle>
                    <Badge variant="outline">{stage.ageRange}</Badge>
                  </div>
                  <CardDescription>{stage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">主要服务：</h4>
                      <div className="flex flex-wrap gap-1">
                        {stage.services.slice(0, 3).map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {stage.services.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{stage.services.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">主要福利：</h4>
                      <div className="flex flex-wrap gap-1">
                        {stage.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                        {stage.benefits.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{stage.benefits.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-slate-600 hover:bg-slate-700">
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