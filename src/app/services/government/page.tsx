'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Building, Users, FileText, Gavel, Landmark, Crown, Shield, Globe } from 'lucide-react'
import Link from 'next/link'

export default function GovernmentServicePage() {
  const services = [
    {
      title: '帝国法律体系',
      description: '了解小鼠帝国的宪法、法律体系和司法程序。',
      icon: Gavel,
      features: ['宪法解读', '法律查询', '司法程序', '法律援助']
    },
    {
      title: '帝国历史',
      description: '探索小鼠帝国从"低盐大鼠"到完整帝国的发展历程。',
      icon: Crown,
      features: ['帝国起源', '发展历程', '重要事件', '文化传承']
    },
    {
      title: '政府财产购买',
      description: '了解如何购买帝国政府财产和资产。',
      icon: Landmark,
      features: ['财产目录', '购买流程', '拍卖信息', '产权转让']
    },
    {
      title: '民选官员',
      description: '联系小鼠帝国的民选官员和代表。',
      icon: Users,
      features: ['官员名录', '联系方式', '选举信息', '民意反馈']
    },
    {
      title: '联邦机构',
      description: '访问各个联邦机构的服务和信息。',
      icon: Building,
      features: ['机构目录', '服务指南', '部门职能', '办事流程']
    },
    {
      title: '政府文件',
      description: '获取政府公开文件和官方信息。',
      icon: FileText,
      features: ['文件查询', '信息公开', '政策文件', '统计数据']
    }
  ]

  const recentUpdates = [
    {
      title: '帝国宪法修正案通过',
      date: '2024-01-15',
      type: '法律更新'
    },
    {
      title: '新公民身份申请流程简化',
      date: '2024-01-10',
      type: '政策调整'
    },
    {
      title: '政府财产拍卖会公告',
      date: '2024-01-08',
      type: '拍卖信息'
    },
    {
      title: '帝国历史博物馆开放',
      date: '2024-01-05',
      type: '文化活动'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">小鼠帝国及其政府</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解小鼠帝国的法律体系、历史文化，获取政府服务，联系民选官员
          </p>
        </div>

        {/* 主要服务 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">主要服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">服务内容：</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1 h-1 bg-slate-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/services/government/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full mt-4 bg-slate-600 hover:bg-slate-700">
                      了解详情
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 最新动态 */}
          <section className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">最新动态</CardTitle>
                <CardDescription>
                  了解小鼠帝国政府的最新政策和公告
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <div key={index} className="border-l-4 border-slate-600 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{update.title}</h3>
                        <Badge variant="outline">{update.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{update.date}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  查看所有动态
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* 快速链接 */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>快速链接</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/services/benefits">
                  <Button variant="ghost" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    政府福利
                  </Button>
                </Link>
                <Link href="/services/immigration">
                  <Button variant="ghost" className="w-full justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    公民身份申请
                  </Button>
                </Link>
                <Link href="/guide/passport">
                  <Button variant="ghost" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    护照申请
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    联系我们
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* 政府机构介绍 */}
        <section className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">主要政府机构</CardTitle>
              <CardDescription>
                了解小鼠帝国各个政府机构的职能和服务
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">中央政府</h3>
                  <p className="text-sm text-gray-600">负责帝国整体治理和政策制定</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">公民服务部</h3>
                  <p className="text-sm text-gray-600">提供公民身份和福利服务</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Landmark className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">经济发展部</h3>
                  <p className="text-sm text-gray-600">促进帝国经济发展和贸易</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Crown className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">文化部</h3>
                  <p className="text-sm text-gray-600">保护和传承帝国文化</p>
                </div>
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