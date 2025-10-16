'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, CreditCard, DollarSign, TrendingUp, Shield, PiggyBank, AlertCircle, Home } from 'lucide-react'
import Link from 'next/link'

export default function FinanceServicePage() {
  const services = [
    {
      title: '个人贷款',
      description: '为个人消费、教育、医疗等提供贷款服务',
      icon: DollarSign,
      features: ['低利率', '灵活还款', '快速审批', '无抵押'],
      interestRate: '年利率3.5%-8.5%'
    },
    {
      title: '住房贷款',
      description: '帮助公民购买、建造或装修房屋',
      icon: Home,
      features: ['长期贷款', '优惠利率', '政府担保', '首付支持'],
      interestRate: '年利率2.8%-5.2%'
    },
    {
      title: '小企业贷款',
      description: '支持创业和小微企业发展',
      icon: TrendingUp,
      features: ['创业资金', '经营周转', '设备采购', '政府贴息'],
      interestRate: '年利率4.0%-7.5%'
    },
    {
      title: '信用卡服务',
      description: '提供安全便捷的信用卡服务',
      icon: CreditCard,
      features: ['免息期', '积分奖励', '全球通用', '安全保障'],
      interestRate: '年利率15%-20%'
    },
    {
      title: '储蓄投资',
      description: '安全可靠的储蓄和投资理财服务',
      icon: PiggyBank,
      features: ['定期存款', '理财产品', '政府债券', '退休储蓄'],
      interestRate: '年收益率2.0%-6.0%'
    },
    {
      title: '金融保险',
      description: '全面的金融保险和风险保障服务',
      icon: Shield,
      features: ['人寿保险', '健康保险', '财产保险', '意外保险'],
      premium: '月费50-500帝国币'
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">金钱与信贷</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解如何管理财务，获取信贷，处理金融问题
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">金融服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">主要特点：</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {service.interestRate || service.premium}
                      </span>
                      <Link href={`/services/finance/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          申请
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

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