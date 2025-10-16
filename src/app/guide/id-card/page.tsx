'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, IdCard, Camera, FileText, CheckCircle, AlertCircle, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function IdCardGuidePage() {
  const steps = [
    {
      number: 1,
      title: '准备材料',
      description: '收集申请真实身份ID所需的所有文件',
      icon: FileText,
      items: [
        '出生证明或户口本',
        '近期免冠照片（白底，1寸）',
        '填写完整的ID申请表',
        '申请费用支付凭证'
      ]
    },
    {
      number: 2,
      title: '在线预约',
      description: '预约到ID办理中心的时间',
      icon: Clock,
      items: [
        '访问在线预约系统',
        '选择方便的时间和地点',
        '填写个人信息',
        '获取预约确认码'
      ]
    },
    {
      number: 3,
      title: '现场办理',
      description: '前往预约地点办理ID卡',
      icon: Users,
      items: [
        '携带所有材料前往办理点',
        '现场核实身份信息',
        '采集指纹和照片',
        '签名确认'
      ]
    },
    {
      number: 4,
      title: '领取ID卡',
      description: '制作完成后领取您的身份ID',
      icon: IdCard,
      items: [
        '等待制作完成（通常7-15天）',
        '收到领取通知',
        '凭领取凭证和身份证明',
        '现场核对并领取ID卡'
      ]
    }
  ]

  const idTypes = [
    {
      type: '标准身份证',
      description: '18岁以上公民的标准身份证明',
      features: ['芯片技术', '10年有效期', '全国通用', '可作银行卡使用'],
      fee: '50帝国币'
    },
    {
      type: '临时身份证',
      description: '短期有效的临时身份证明',
      features: ['3个月有效期', '快速办理', '基本功能', '不可作银行卡'],
      fee: '20帝国币'
    },
    {
      type: '老年身份证',
      description: '65岁以上公民专用身份证',
      features: ['终身有效', '优待功能', '医疗信息', '紧急联系'],
      fee: '免费'
    },
    {
      type: '学生身份证',
      description: '在校学生专用身份证明',
      features: ['学生身份标识', '优惠功能', '校园功能', '4年有效期'],
      fee: '30帝国币'
    }
  ]

  const requirements = [
    {
      title: '年龄要求',
      description: '年满16周岁的公民必须申请身份证，16岁以下可自愿申请。'
    },
    {
      title: '身份要求',
      description: '必须是小鼠帝国合法公民或永久居民。'
    },
    {
      title: '照片要求',
      description: '近期6个月内拍摄的白底免冠照片，需清晰显示面部特征。'
    },
    {
      title: '健康要求',
      description: '无传染性疾病，能够配合指纹采集等程序。'
    }
  ]

  const faqs = [
    {
      question: '身份证丢失了怎么办？',
      answer: '应立即到就近的派出所报案，然后携带报案证明和身份证明文件到ID办理中心申请补办。'
    },
    {
      question: '可以异地办理身份证吗？',
      answer: '可以，现在支持全国异地办理，需要提供在当地居住或工作的证明。'
    },
    {
      question: '身份证快到期了怎么办？',
      answer: '可以在到期前3个月内申请换发，建议提前办理以免影响使用。'
    },
    {
      question: '办理身份证需要多长时间？',
      answer: '标准办理时间为7-15个工作日，加急办理为3-5个工作日。'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">了解如何获取真实身份ID</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            完整的身份ID申请指南，帮助您顺利获得小鼠帝国官方身份证明
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

        {/* ID类型 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">ID卡类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {idTypes.map((idType, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{idType.type}</CardTitle>
                    <Badge variant="outline">{idType.fee}</Badge>
                  </div>
                  <CardDescription>{idType.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">主要功能：</h4>
                    <ul className="space-y-1">
                      {idType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    申请此类型
                  </Button>
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

        {/* 办理地点 */}
        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                办理地点
              </CardTitle>
              <CardDescription>
                小鼠帝国各地ID办理中心地址和联系方式
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-3">主要办理中心</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• 首都ID办理中心 - 帝国大道25号</li>
                    <li>• 各区政务服务中心 - 均设有办理窗口</li>
                    <li>• 大型商场办理点 - 周末也开放</li>
                    <li>• 移动办理车 - 定期下乡服务</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-3">服务时间</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• 周一至周五：9:00-17:00</li>
                    <li>• 周六：9:00-12:00（部分网点）</li>
                    <li>• 节假日休息</li>
                    <li>• 支持在线预约，减少等待时间</li>
                  </ul>
                </div>
              </div>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                <Camera className="h-4 w-4 mr-2" />
                在线预约办理
              </Button>
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

        {/* 联系信息 */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">需要帮助？</CardTitle>
              <CardDescription>
                如果您在申请过程中遇到问题，请联系我们
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ID办理服务中心</h3>
                  <p className="text-gray-600 mb-1">地址：帝国大道25号身份认证中心</p>
                  <p className="text-gray-600 mb-1">电话：400-MOUSE-06</p>
                  <p className="text-gray-600">办公时间：周一至周五 9:00-17:00</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">客服热线</h3>
                  <p className="text-gray-600 mb-1">咨询电话：400-MOUSE-07</p>
                  <p className="text-gray-600 mb-1">紧急热线：400-MOUSE-99</p>
                  <p className="text-gray-600">在线客服：24小时服务</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <IdCard className="h-4 w-4 mr-2" />
                  在线申请
                </Button>
                <Button variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  预约办理
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