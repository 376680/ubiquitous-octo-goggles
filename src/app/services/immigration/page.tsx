'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Globe, Users, FileText, Clock, CheckCircle, AlertCircle, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function ImmigrationServicePage() {
  const services = [
    {
      title: '临时居留许可',
      description: '为希望在小鼠帝国临时居住的外国公民提供居留许可。',
      icon: Users,
      duration: '6个月-2年',
      requirements: ['有效护照', '无犯罪记录', '健康证明', '经济担保']
    },
    {
      title: '永久居留权（绿卡）',
      description: '获得在小鼠帝国永久居住和工作的权利。',
      icon: FileText,
      duration: '永久有效',
      requirements: ['连续居住5年', '语言能力证明', '融入社会证明', '无严重犯罪记录']
    },
    {
      title: '公民身份申请',
      description: '成为小鼠帝国正式公民，享有完整公民权利。',
      icon: Globe,
      duration: '终身有效',
      requirements: ['年满18岁', '永久居留8年', '公民考试通过', '宣誓效忠']
    },
    {
      title: '工作签证',
      description: '为有专业技能的外国人才提供工作机会。',
      icon: CreditCard,
      duration: '1-4年',
      requirements: ['工作录用证明', '专业技能认证', '学历证明', '健康检查']
    }
  ]

  const applicationSteps = [
    {
      number: 1,
      title: '资格评估',
      description: '确定您符合哪种移民类别的要求',
      items: ['在线评估测试', '材料清单准备', '咨询移民顾问']
    },
    {
      number: 2,
      title: '材料准备',
      description: '收集和准备所有必需的申请材料',
      items: ['身份证明文件', '学历和工作证明', '无犯罪记录证明', '健康检查报告']
    },
    {
      number: 3,
      title: '提交申请',
      description: '向移民局提交完整的申请材料',
      items: ['在线申请或现场提交', '缴纳申请费用', '获取受理编号', '等待初步审核']
    },
    {
      number: 4,
      title: '面试和审核',
      description: '参加面试并配合背景调查',
      items: ['预约面试时间', '准备面试材料', '参加面试', '背景调查']
    },
    {
      number: 5,
      title: '获得批准',
      description: '收到批准通知并完成最后手续',
      items: ['收到批准信', '缴纳相关费用', '领取居留证件', '完成登记手续']
    }
  ]

  const fees = [
    {
      type: '临时居留许可',
      standard: '200帝国币',
      expedited: '400帝国币',
      processing: '15-30个工作日'
    },
    {
      type: '永久居留权',
      standard: '800帝国币',
      expedited: '1600帝国币',
      processing: '3-6个月'
    },
    {
      type: '公民身份',
      standard: '1200帝国币',
      expedited: '2400帝国币',
      processing: '6-12个月'
    },
    {
      type: '工作签证',
      standard: '300帝国币',
      expedited: '600帝国币',
      processing: '20-40个工作日'
    }
  ]

  const faqs = [
    {
      question: '申请被拒绝后可以申诉吗？',
      answer: '可以，您可以在收到拒绝通知后30天内提交申诉申请，并提供补充材料。'
    },
    {
      question: '家属可以一起申请吗？',
      answer: '可以，配偶和未成年子女可以作为家属一同申请，需要提供家庭关系证明。'
    },
    {
      question: '申请期间可以离开小鼠帝国吗？',
      answer: '临时居留和工作签证申请期间可以离开，但公民身份申请期间需要保持居住。'
    },
    {
      question: '如何查询申请进度？',
      answer: '可以通过在线系统使用受理编号查询，或致电移民局客服热线。'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">移民与小鼠帝国公民身份</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解小鼠帝国居留权、绿卡、公民身份要求及相关问题
          </p>
        </div>

        {/* 主要服务 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">移民服务类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <Badge variant="outline">{service.duration}</Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">基本要求：</h4>
                    <ul className="space-y-1">
                      {service.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/services/immigration/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
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
          <div className="space-y-6">
            {applicationSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{step.title}</CardTitle>
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

        {/* 费用信息 */}
        <section className="mb-12">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-800">申请费用</CardTitle>
              <CardDescription>
                不同移民类型的申请费用和处理时间
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-emerald-200">
                      <th className="text-left py-2 px-4 font-semibold text-emerald-800">服务类型</th>
                      <th className="text-center py-2 px-4 font-semibold text-emerald-800">标准费用</th>
                      <th className="text-center py-2 px-4 font-semibold text-emerald-800">加急费用</th>
                      <th className="text-center py-2 px-4 font-semibold text-emerald-800">处理时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((fee, index) => (
                      <tr key={index} className="border-b border-emerald-100">
                        <td className="py-3 px-4 font-medium">{fee.type}</td>
                        <td className="text-center py-3 px-4">{fee.standard}</td>
                        <td className="text-center py-3 px-4">{fee.expedited}</td>
                        <td className="text-center py-3 px-4">{fee.processing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                    <AlertCircle className="h-5 w-5 mr-2 text-emerald-600" />
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
              <CardTitle className="text-2xl">联系我们</CardTitle>
              <CardDescription>
                移民局办事处信息和联系方式
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">移民局总部</h3>
                  <p className="text-gray-600 mb-1">地址：帝国大道15号移民大楼</p>
                  <p className="text-gray-600 mb-1">电话：400-MOUSE-03</p>
                  <p className="text-gray-600">办公时间：周一至周五 8:30-17:30</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">客服热线</h3>
                  <p className="text-gray-600 mb-1">咨询电话：400-MOUSE-88</p>
                  <p className="text-gray-600 mb-1">紧急热线：400-MOUSE-99</p>
                  <p className="text-gray-600">24小时自动语音服务</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Link href="/services/immigration/online-application">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <FileText className="h-4 w-4 mr-2" />
                    在线申请
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    <Clock className="h-4 w-4 mr-2" />
                    预约咨询
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