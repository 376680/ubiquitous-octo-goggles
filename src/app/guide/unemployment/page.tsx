'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Briefcase, DollarSign, FileText, CheckCircle, AlertCircle, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function UnemploymentGuidePage() {
  const steps = [
    {
      number: 1,
      title: '确认资格',
      description: '检查您是否符合失业救济金申请条件',
      icon: CheckCircle,
      items: [
        '非自愿失业（被解雇或裁员）',
        '在过去12-18个月内工作足够时间',
        '有工作能力和意愿',
        '积极寻找新工作'
      ]
    },
    {
      number: 2,
      title: '准备材料',
      description: '收集申请所需的所有文件和证明',
      icon: FileText,
      items: [
        '身份证明文件',
        '离职证明或解雇通知书',
        '工作经历证明',
        '银行账户信息'
      ]
    },
    {
      number: 3,
      title: '提交申请',
      description: '向就业服务中心提交失业救济申请',
      icon: Users,
      items: [
        '在线填写申请表或现场申请',
        '提交所有必需材料',
        '参加就业指导面谈',
        '登记求职信息'
      ]
    },
    {
      number: 4,
      title: '定期报告',
      description: '按要求定期报告求职进展',
      icon: Clock,
      items: [
        '每周报告求职活动',
        '参加推荐的面试',
        '更新求职状态',
        '参加职业培训'
      ]
    },
    {
      number: 5,
      title: '领取救济金',
      description: '审核通过后定期领取失业救济金',
      icon: DollarSign,
      items: [
        '申请审核通过',
        '建立银行转账',
        '每两周领取一次',
        '持续报告求职进展'
      ]
    }
  ]

  const eligibility = [
    {
      title: '工作历史要求',
      description: '在过去12-18个月内至少工作6个月，赚取足够的工资基数。',
      status: 'required'
    },
    {
      title: '失业原因',
      description: '必须是非自愿失业，如公司裁员、解雇等。主动辞职通常不符合条件。',
      status: 'required'
    },
    {
      title: '工作能力',
      description: '必须有身体和心理能力从事工作，并愿意接受合适的工作机会。',
      status: 'required'
    },
    {
      title: '积极求职',
      description: '必须积极寻找工作，参加面试，接受合适的工作推荐。',
      status: 'required'
    }
  ]

  const benefits = [
    {
      type: '基本救济金',
      amount: '原工资的40-60%',
      duration: '最长26周',
      description: '根据您过去的工资水平计算的基本生活补助'
    },
    {
      type: '延长救济',
      amount: '基本救济金的50%',
      duration: '额外13-20周',
      description: '在经济困难时期可申请的延长救济'
    },
    {
      type: '培训补助',
      amount: '培训费用的80%',
      duration: '培训期间',
      description: '参加职业培训时的额外补助'
    },
    {
      type: '交通补助',
      amount: '每月100-300帝国币',
      duration: '救济期间',
      description: '求职和面试的交通费用补助'
    }
  ]

  const faqs = [
    {
      question: '申请失业救济会影响我的信用记录吗？',
      answer: '不会，失业救济是政府福利，不会影响您的信用记录或信用评分。'
    },
    {
      question: '找到兼职工作还能领取救济金吗？',
      answer: '可以，但需要报告收入，救济金会相应减少。兼职收入超过一定限额可能会暂停救济。'
    },
    {
      question: '拒绝工作机会会怎样？',
      answer: '无正当理由拒绝合适的工作机会可能导致救济金被暂停或取消。'
    },
    {
      question: '救济金需要缴税吗？',
      answer: '是的，失业救济金需要缴纳个人所得税，但通常税率较低。'
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
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">申请失业救济金</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            失业保险申请流程和资格要求，帮助您度过失业期
          </p>
        </div>

        {/* 申请流程 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">申请流程</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center">
                        <step.icon className="h-5 w-5 mr-2 text-purple-600" />
                        {step.title}
                      </CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 资格要求 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">资格要求</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibility.map((req, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{req.title}</CardTitle>
                    {req.status === 'required' && (
                      <Badge variant="destructive" className="text-xs">必需</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 救济金类型 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">救济金类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{benefit.type}</CardTitle>
                    <Badge variant="outline">{benefit.duration}</Badge>
                  </div>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">金额：</span>
                    <span className="font-semibold text-purple-600">{benefit.amount}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 申请工具 */}
        <section className="mb-12">
          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl text-purple-800 flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                申请工具和资源
              </CardTitle>
              <CardDescription>
                帮助您顺利申请失业救济的在线工具
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">在线工具</h3>
                  <ul className="space-y-2 text-sm text-purple-700">
                    <li>• 资格评估计算器</li>
                    <li>• 救济金金额估算器</li>
                    <li>• 在线申请系统</li>
                    <li>• 求职进度跟踪</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">支持服务</h3>
                  <ul className="space-y-2 text-sm text-purple-700">
                    <li>• 一对一就业指导</li>
                    <li>• 简历优化服务</li>
                    <li>• 面试技巧培训</li>
                    <li>• 职业技能提升课程</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  资格评估
                </Button>
                <Button variant="outline">
                  <DollarSign className="h-4 w-4 mr-2" />
                  金额计算
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  在线申请
                </Button>
              </div>
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
                    <AlertCircle className="h-5 w-5 mr-2 text-purple-600" />
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
                就业服务中心随时为您提供支持和指导
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">就业服务中心</h3>
                  <p className="text-gray-600 mb-1">地址：帝国大道30号就业服务大楼</p>
                  <p className="text-gray-600 mb-1">电话：400-MOUSE-08</p>
                  <p className="text-gray-600">办公时间：周一至周五 8:30-17:30</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">失业救济热线</h3>
                  <p className="text-gray-600 mb-1">咨询电话：400-MOUSE-09</p>
                  <p className="text-gray-600 mb-1">紧急求助：400-MOUSE-99</p>
                  <p className="text-gray-600">在线咨询：工作日 9:00-17:00</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Briefcase className="h-4 w-4 mr-2" />
                  立即申请
                </Button>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  预约咨询
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* 页脚 */}
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