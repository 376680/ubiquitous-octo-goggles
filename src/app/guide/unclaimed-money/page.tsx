'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, DollarSign, Search, CheckCircle, AlertCircle, FileText, Clock } from 'lucide-react'
import Link from 'next/link'

export default function UnclaimedMoneyGuidePage() {
  const steps = [
    {
      number: 1,
      title: '在线搜索',
      description: '使用官方数据库搜索可能属于您的资金',
      icon: Search,
      items: [
        '访问小鼠帝国资金查询系统',
        '输入姓名和身份信息',
        '搜索相关记录',
        '查看匹配结果'
      ]
    },
    {
      number: 2,
      title: '验证身份',
      description: '确认您是资金的合法所有者',
      icon: CheckCircle,
      items: [
        '准备身份证明文件',
        '填写验证申请表',
        '提交相关证明材料',
        '等待身份验证'
      ]
    },
    {
      number: 3,
      title: '提交申请',
      description: '正式提交资金认领申请',
      icon: FileText,
      items: [
        '填写完整的申请表',
        '附上所有必需文件',
        '选择领取方式',
        '提交申请并等待审核'
      ]
    },
    {
      number: 4,
      title: '领取资金',
      description: '审核通过后领取您的资金',
      icon: DollarSign,
      items: [
        '收到批准通知',
        '选择领取方式（银行转账/支票）',
        '完成最终确认',
        '收到资金'
      ]
    }
  ]

  const moneyTypes = [
    {
      type: '银行账户余额',
      description: '长期未活动的银行账户资金',
      amount: '通常100-5000帝国币'
    },
    {
      type: '保险理赔',
      description: '未领取的保险理赔金',
      amount: '通常500-10000帝国币'
    },
    {
      type: '工资退款',
      description: '未领取的工资或退款',
      amount: '通常50-2000帝国币'
    },
    {
      type: '政府退款',
      description: '各种政府项目的退款',
      amount: '通常100-3000帝国币'
    },
    {
      type: '遗产继承',
      description: '未认领的遗产资金',
      amount: '金额不等'
    },
    {
      type: '投资收益',
      description: '未领取的投资分红或收益',
      amount: '通常200-10000帝国币'
    }
  ]

  const faqs = [
    {
      question: '搜索和认领资金需要收费吗？',
      answer: '搜索是完全免费的。只有在成功认领资金后，才会收取少量处理费用，通常为认领金额的1-5%。'
    },
    {
      question: '需要多长时间才能收到资金？',
      answer: '从提交申请到收到资金通常需要4-8周时间，具体取决于申请的复杂程度。'
    },
    {
      question: '如果我为家人搜索可以吗？',
      answer: '可以，您可以为直系亲属搜索，但需要提供相关的关系证明和授权文件。'
    },
    {
      question: '资金会一直保存吗？',
      answer: '大部分资金会永久保存，但某些类型的资金可能有时间限制，建议尽快查询。'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">查找无人认领的资金</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            寻找可能属于您的资金，简单的四步流程帮您找回失去的财产
          </p>
        </div>

        {/* 认领流程 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">认领流程</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center">
                        <step.icon className="h-5 w-5 mr-2 text-orange-600" />
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

        {/* 资金类型 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">常见资金类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moneyTypes.map((money, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{money.type}</CardTitle>
                  <CardDescription>{money.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">典型金额：</span>
                    <Badge variant="secondary">{money.amount}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 搜索工具 */}
        <section className="mb-12">
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-xl text-orange-800 flex items-center">
                <Search className="h-5 w-5 mr-2" />
                开始搜索
              </CardTitle>
              <CardDescription>
                使用官方搜索工具查找可能属于您的资金
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-orange-800 mb-3">搜索所需信息</h3>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li>• 全名（包括曾用名）</li>
                    <li>• 身份证号码</li>
                    <li>• 出生日期</li>
                    <li>• 曾居住地址</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800 mb-3">搜索提示</h3>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li>• 尝试不同的姓名拼写</li>
                    <li>• 搜索已故亲属的资金</li>
                    <li>• 定期重新搜索</li>
                    <li>• 保存搜索结果</li>
                  </ul>
                </div>
              </div>
              <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                <Search className="h-4 w-4 mr-2" />
                立即搜索资金
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
                    <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
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
                如果您在搜索或认领过程中遇到问题，请联系我们
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">资金查询办公室</h3>
                  <p className="text-gray-600 mb-1">地址：帝国大道20号财政大楼</p>
                  <p className="text-gray-600 mb-1">电话：400-MOUSE-04</p>
                  <p className="text-gray-600">办公时间：周一至周五 9:00-17:00</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">客服热线</h3>
                  <p className="text-gray-600 mb-1">咨询电话：400-MOUSE-05</p>
                  <p className="text-gray-600 mb-1">在线客服：24小时服务</p>
                  <p className="text-gray-600">邮箱：unclaimed@mouse-empire.gov</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Search className="h-4 w-4 mr-2" />
                  开始搜索
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  下载申请表
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