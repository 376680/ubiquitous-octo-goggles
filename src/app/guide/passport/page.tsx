'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, FileText, Clock, CheckCircle, AlertCircle, DollarSign, Camera } from 'lucide-react'
import Link from 'next/link'

export default function PassportGuidePage() {
  const steps = [
    {
      number: 1,
      title: '准备申请材料',
      description: '收集所有必需的文件和材料',
      icon: FileText,
      items: [
        '身份证明文件（身份证或出生证明）',
        '两张近期免冠照片（白底，2寸）',
        '填写完整的护照申请表',
        '申请费用支付凭证'
      ]
    },
    {
      number: 2,
      title: '填写申请表',
      description: '准确填写护照申请表格',
      icon: FileText,
      items: [
        '在线填写或前往办事处领取表格',
        '确保所有信息准确无误',
        '签名确认',
        '检查必填项是否完整'
      ]
    },
    {
      number: 3,
      title: '提交申请',
      description: '将申请材料提交到指定地点',
      icon: CheckCircle,
      items: [
        '前往最近的护照办理中心',
        '提交所有申请材料',
        '现场拍照和指纹采集',
        '领取受理通知书'
      ]
    },
    {
      number: 4,
      title: '等待审核',
      description: '等待政府部门审核申请',
      icon: Clock,
      items: [
        '审核时间通常为5-10个工作日',
        '可通过在线系统查询进度',
        '保持联系电话畅通',
        '如需补充材料会及时通知'
      ]
    },
    {
      number: 5,
      title: '领取护照',
      description: '审核通过后领取护照',
      icon: CheckCircle,
      items: [
        '收到领取通知后前往办理中心',
        '携带受理通知书和身份证明',
        '现场核对信息并签字',
        '领取护照和相关文件'
      ]
    }
  ]

  const requirements = [
    {
      title: '年龄要求',
      description: '年满16周岁的公民可申请成人护照，未满16周岁需监护人陪同办理。'
    },
    {
      title: '身份要求',
      description: '必须是小鼠帝国合法公民，具有有效身份证明。'
    },
    {
      title: '照片要求',
      description: '近期6个月内拍摄的白底免冠照片，需清晰显示面部特征。'
    },
    {
      title: '费用标准',
      description: '首次申请费用为50帝国币，换发费用为30帝国币。'
    }
  ]

  const faqs = [
    {
      question: '护照有效期是多久？',
      answer: '成人护照有效期为10年，未满16周岁护照有效期为5年。'
    },
    {
      question: '如果护照丢失怎么办？',
      answer: '应立即向当地警察局报案，然后前往护照办理中心申请补发。'
    },
    {
      question: '可以加急办理吗？',
      answer: '可以提供加急服务，费用为标准费用的2倍，3个工作日内完成。'
    },
    {
      question: '护照办理需要多长时间？',
      answer: '标准办理时间为5-10个工作日，加急办理为3个工作日。'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">获取或更新护照</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            详细的小鼠帝国护照申请和更新指南，帮助您顺利完成办理流程
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
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center">
                        <step.icon className="h-5 w-5 mr-2 text-blue-600" />
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

        {/* 申请要求 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">申请要求</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 费用信息 */}
        <section className="mb-12">
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-xl text-orange-800 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                费用信息
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">标准办理</h3>
                  <p className="text-2xl font-bold text-orange-600">50帝国币</p>
                  <p className="text-sm text-orange-700">首次申请</p>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">换发补发</h3>
                  <p className="text-2xl font-bold text-orange-600">30帝国币</p>
                  <p className="text-sm text-orange-700">护照换发或补发</p>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">加急服务</h3>
                  <p className="text-2xl font-bold text-orange-600">100帝国币</p>
                  <p className="text-sm text-orange-700">3个工作日内完成</p>
                </div>
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
                    <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
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

        {/* 办理地点 */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">办理地点</CardTitle>
              <CardDescription>
                小鼠帝国各地护照办理中心地址和联系方式
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">首都办理中心</h3>
                  <p className="text-gray-600 mb-1">地址：帝国大道1号政府大楼</p>
                  <p className="text-gray-600 mb-1">电话：400-MOUSE-01</p>
                  <p className="text-gray-600">办公时间：周一至周五 9:00-17:00</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">各区办理点</h3>
                  <p className="text-gray-600 mb-1">各区政务服务中心均设有办理点</p>
                  <p className="text-gray-600 mb-1">咨询电话：400-MOUSE-02</p>
                  <p className="text-gray-600">支持预约办理服务</p>
                </div>
              </div>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                <Camera className="h-4 w-4 mr-2" />
                在线预约办理
              </Button>
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