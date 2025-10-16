'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Shield, AlertTriangle, Phone, CreditCard, Users, Globe } from 'lucide-react'
import Link from 'next/link'

export default function FraudServicePage() {
  const fraudTypes = [
    {
      title: '身份盗窃',
      description: '他人盗用您的个人信息进行违法活动',
      icon: Users,
      risk: '高风险',
      prevention: ['保护个人信息', '定期检查信用报告', '使用强密码', '谨慎分享信息']
    },
    {
      title: '网络诈骗',
      description: '通过网络进行的各种诈骗活动',
      icon: Globe,
      risk: '高风险',
      prevention: ['识别钓鱼网站', '不轻信陌生链接', '使用安全软件', '定期更新系统']
    },
    {
      title: '电话诈骗',
      description: '通过电话进行的诈骗活动',
      icon: Phone,
      risk: '中风险',
      prevention: ['核实来电身份', '不透露个人信息', '警惕紧急威胁', '挂断可疑电话']
    },
    {
      title: '金融诈骗',
      description: '针对银行账户、信用卡等的诈骗',
      icon: CreditCard,
      risk: '高风险',
      prevention: ['保护银行信息', '定期检查账单', '使用安全支付', '设置交易提醒']
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">诈骗与欺诈</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解身份盗窃、社会保障诈骗以及如何举报诈骗和欺诈行为
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">常见诈骗类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fraudTypes.map((fraud, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow border-2 ${
                fraud.risk === '高风险' ? 'border-red-300' : 'border-orange-300'
              }`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    fraud.risk === '高风险' ? 'bg-red-600' : 'bg-orange-600'
                  }`}>
                    <fraud.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{fraud.title}</CardTitle>
                    <Badge variant={fraud.risk === '高风险' ? 'destructive' : 'default'}>
                      {fraud.risk}
                    </Badge>
                  </div>
                  <CardDescription>{fraud.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-2">预防措施：</h4>
                    <ul className="space-y-1">
                      {fraud.prevention.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                    了解更多
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