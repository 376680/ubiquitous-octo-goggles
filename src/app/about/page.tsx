'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Crown, Users, Calendar, Map } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const timeline = [
    {
      year: '2023',
      title: '低盐大鼠的诞生',
      description: '一篇阅读理解中的"高盐小鼠"启发了第一位同学在黑板上画下了"低盐大鼠"。',
      icon: Users
    },
    {
      year: '2023',
      title: '小鼠帝国的建立',
      description: '越来越多的同学加入创作，从单一的老子发展为完整的小鼠帝国。',
      icon: Crown
    },
    {
      year: '2024',
      title: '政府网的创建',
      description: '为了纪念这个美好的班级传统，建立了小鼠帝国政府官方网站。',
      icon: Map
    }
  ]

  const values = [
    {
      title: '团结协作',
      description: '从一个人画画到全班参与，体现了团结的力量。'
    },
    {
      title: '创意无限',
      description: '将一个简单的词汇转化为丰富的帝国故事。'
    },
    {
      title: '传承文化',
      description: '将班级的美好回忆通过网站永久保存。'
    },
    {
      title: '服务公民',
      description: '为小鼠帝国的"公民"提供最好的政府服务。'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">关于小鼠帝国</h1>
        </div>



        {/* 发展历程 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">帝国发展历程</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((event, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-sm">
                      {event.year}
                    </Badge>
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <event.icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 帝国价值观 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">帝国价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 政府使命 */}
        <Card className="bg-slate-50 border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800">政府使命</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-700 mb-3">我们的承诺</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• 为所有小鼠帝国公民提供优质服务</li>
                  <li>• 传承和发扬班级文化传统</li>
                  <li>• 创造更多有趣和有意义的内容</li>
                  <li>• 建立温暖友好的社区环境</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-3">服务宗旨</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• 以公民需求为中心</li>
                  <li>• 提供便捷高效的服务</li>
                  <li>• 保持透明和公正</li>
                  <li>• 持续改进和创新</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
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