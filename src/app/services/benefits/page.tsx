'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Shield, Home, Heart, BookOpen, Users, DollarSign, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function BenefitsServicePage() {
  const benefitCategories = [
    {
      title: '住房援助',
      description: '帮助支付房租、房贷和房屋维修费用',
      icon: Home,
      color: 'bg-blue-600',
      programs: ['公共住房', '房租补贴', '房贷援助', '房屋维修补助'],
      eligibility: '低收入家庭、老年人、残疾人士'
    },
    {
      title: '医疗保健',
      description: '提供医疗保险和医疗费用补助',
      icon: Heart,
      color: 'bg-red-600',
      programs: ['医疗保险', '处方药补助', '长期护理', '心理健康服务'],
      eligibility: '低收入个人、老年人、慢性病患者'
    },
    {
      title: '教育支持',
      description: '提供教育资金和学习补助',
      icon: BookOpen,
      color: 'bg-purple-600',
      programs: ['学生助学金', '学费减免', '免费午餐', '学习用品补助'],
      eligibility: '低收入家庭学生、优秀学生、特殊需求学生'
    },
    {
      title: '家庭援助',
      description: '支持有儿童的家庭和单亲父母',
      icon: Users,
      color: 'bg-green-600',
      programs: ['儿童福利', '托儿服务补助', '单亲父母援助', '家庭营养计划'],
      eligibility: '有儿童的家庭、单亲父母、低收入家庭'
    },
    {
      title: '收入支持',
      description: '提供基本生活保障和失业救济',
      icon: DollarSign,
      color: 'bg-orange-600',
      programs: ['基本收入保障', '失业救济', '残疾人补助', '老年人养老金'],
      eligibility: '失业人员、残疾人、低收入个人、老年人'
    },
    {
      title: '特殊群体福利',
      description: '针对退伍军人和其他特殊群体的专门福利',
      icon: Shield,
      color: 'bg-slate-600',
      programs: ['退伍军人福利', '残疾人服务', '灾害救助', '紧急援助'],
      eligibility: '退伍军人、残疾人、灾害受害者'
    }
  ]

  const applicationSteps = [
    {
      number: 1,
      title: '资格评估',
      description: '使用在线工具评估您可能符合的福利项目'
    },
    {
      number: 2,
      title: '准备材料',
      description: '收集申请所需的身份证明、收入证明等文件'
    },
    {
      number: 3,
      title: '提交申请',
      description: '在线或现场提交福利申请'
    },
    {
      number: 4,
      title: '等待审核',
      description: '政府部门审核您的申请资格'
    },
    {
      number: 5,
      title: '获得批准',
      description: '审核通过后开始领取福利'
    }
  ]

  const emergencyBenefits = [
    {
      type: '紧急食品援助',
      description: '为面临食品短缺的家庭提供紧急食品支持',
      contact: '400-MOUSE-FOOD',
      responseTime: '24小时内'
    },
    {
      type: '紧急住房',
      description: '为无家可归者提供临时住所',
      contact: '400-MOUSE-HOME',
      responseTime: '48小时内'
    },
    {
      type: '紧急医疗',
      description: '紧急医疗费用援助',
      contact: '400-MOUSE-MED',
      responseTime: '立即'
    },
    {
      type: '灾害救助',
      description: '自然灾害受害者的紧急援助',
      contact: '400-MOUSE-DIS',
      responseTime: '12小时内'
    }
  ]

  const faqs = [
    {
      question: '如何知道自己符合哪些福利资格？',
      answer: '可以使用我们网站的在线资格评估工具，输入您的家庭情况，系统会自动匹配可能符合条件的福利项目。'
    },
    {
      question: '申请福利需要多长时间？',
      answer: '不同福利项目的处理时间不同，紧急援助通常24-48小时内，常规福利申请通常需要2-4周时间。'
    },
    {
      question: '可以同时申请多个福利项目吗？',
      answer: '可以，大多数福利项目可以同时申请，但某些可能有收入限制。建议详细咨询每个项目的具体要求。'
    },
    {
      question: '福利申请被拒绝了怎么办？',
      answer: '您有权在收到拒绝通知后30天内提出申诉，也可以重新申请或寻求法律援助。'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/mouse-empire-logo.png"
                  alt="小鼠帝国徽章"
                  className="w-8 h-8 object-contain"
                />
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
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">政府福利和经济援助</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            寻找可能有助于支付食品、住房、医疗保健等费用的政府项目
          </p>
        </div>

        {/* 福利类别 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">福利类别</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">主要项目：</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.programs.slice(0, 3).map((program, programIndex) => (
                          <Badge key={programIndex} variant="secondary" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                        {category.programs.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.programs.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">适用对象：</h4>
                      <p className="text-xs text-gray-600">{category.eligibility}</p>
                    </div>
                  </div>
                  <Link href={`/services/benefits/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full mt-4" style={{ backgroundColor: category.color.replace('bg-', '').replace('600', '600') }}>
                      了解详情
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 申请流程 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">申请流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {step.number}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* 紧急援助 */}
        <section className="mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-xl text-red-800">紧急援助</CardTitle>
              <CardDescription>
                如果您面临紧急情况，以下服务可以提供立即帮助
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyBenefits.map((benefit, index) => (
                  <div key={index} className="border-l-4 border-red-400 pl-4">
                    <h3 className="font-semibold text-red-800 mb-1">{benefit.type}</h3>
                    <p className="text-sm text-red-700 mb-2">{benefit.description}</p>
                    <div className="flex justify-between text-xs text-red-600">
                      <span>联系电话: {benefit.contact}</span>
                      <span>响应时间: {benefit.responseTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 资格评估工具 */}
        <section className="mb-12">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">福利资格评估</CardTitle>
              <CardDescription>
                使用我们的在线工具快速评估您可能符合的福利项目
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-800 mb-3">评估所需信息</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• 家庭收入和支出情况</li>
                    <li>• 家庭成员数量和年龄</li>
                    <li>• 居住状况和住房成本</li>
                    <li>• 健康状况和医疗需求</li>
                    <li>• 教育和就业状况</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 mb-3">评估结果</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• 匹配适合的福利项目</li>
                    <li>• 估算可能获得的援助金额</li>
                    <li>• 提供申请指导和建议</li>
                    <li>• 生成个性化申请清单</li>
                    <li>• 推荐就近的服务机构</li>
                  </ul>
                </div>
              </div>
              <Link href="/services/benefits/eligibility-assessment">
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  开始资格评估
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* 常见问题 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">常见问题</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-green-600" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 联系信息 */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">需要帮助？</CardTitle>
              <CardDescription>
                福利服务中心随时为您提供咨询和帮助
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">福利服务中心</h3>
                  <p className="text-gray-600 mb-1">地址：帝国大道10号福利大楼</p>
                  <p className="text-gray-600 mb-1">电话：400-MOUSE-10</p>
                  <p className="text-gray-600">办公时间：周一至周五 8:30-17:30</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">福利热线</h3>
                  <p className="text-gray-600 mb-1">咨询电话：400-MOUSE-11</p>
                  <p className="text-gray-600 mb-1">紧急援助：400-MOUSE-99</p>
                  <p className="text-gray-600">在线咨询：工作日 9:00-17:00</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Link href="/services/benefits/eligibility-assessment">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    资格评估
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    <Shield className="h-4 w-4 mr-2" />
                    预约咨询
                  </Button>
                </Link>
                <Link href="/services/benefits/programs">
                  <Button variant="outline">
                    <DollarSign className="h-4 w-4 mr-2" />
                    查看福利项目
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* 页脚 */}
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