'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Search, 
  AlertCircle, 
  Globe, 
  CreditCard, 
  Receipt, 
  Plane,
  FileText,
  DollarSign,
  IdCard,
  Briefcase,
  MessageSquare,
  Users,
  AlertTriangle,
  Home,
  Shield,
  Building,
  Phone,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const services = [
    {
      title: '小鼠帝国及其政府',
      description: '了解小鼠帝国法律、历史等内容。购买政府财产。联系民选官员和联邦机构。',
      icon: Building,
      color: 'bg-slate-600'
    },
    {
      title: '政府福利',
      description: '寻找可能有助于支付食品、住房、医疗保健等费用的政府项目。',
      icon: Shield,
      color: 'bg-green-600'
    },
    {
      title: '移民与小鼠帝国公民身份',
      description: '了解小鼠帝国居留权、绿卡、公民身份要求及相关问题。',
      icon: Globe,
      color: 'bg-emerald-600'
    },
    {
      title: '金钱与信贷',
      description: '了解如何管理财务，获取信贷，处理金融问题。',
      icon: CreditCard,
      color: 'bg-orange-600'
    },
    {
      title: '税收',
      description: '了解税收政策，报税流程，税务相关问题。',
      icon: Receipt,
      color: 'bg-red-600'
    },
    {
      title: '旅行',
      description: '获取旅行信息，护照申请，旅行警告等。',
      icon: Plane,
      color: 'bg-purple-600'
    }
  ]

  const howToItems = [
    {
      title: '获取或更新护照',
      description: '申请或更新小鼠帝国护照',
      icon: FileText
    },
    {
      title: '查找无人认领的资金',
      description: '寻找可能属于您的资金',
      icon: DollarSign
    },
    {
      title: '了解如何获取真实身份ID',
      description: '身份证明文件申请指南',
      icon: IdCard
    },
    {
      title: '申请失业救济金',
      description: '失业保险申请流程',
      icon: Briefcase
    }
  ]

  const additionalServices = [
    {
      title: '投诉',
      description: '提交涉及政府机构、电话营销人员、产品与服务、旅游、住房及银行业的投诉。',
      icon: MessageSquare,
      variant: 'default'
    },
    {
      title: '残疾人服务',
      description: '为残疾人士及其家庭查找政府福利和项目。',
      icon: Users,
      variant: 'default'
    },
    {
      title: '灾害与紧急情况',
      description: '了解灾害援助，并查找针对其他紧急情况的政府福利。',
      icon: AlertTriangle,
      variant: 'destructive'
    },
    {
      title: '工作、劳动法和失业',
      description: '获取找工作的资源。了解失业保险和重要的劳动法。',
      icon: Briefcase,
      variant: 'default'
    },
    {
      title: '诈骗与欺诈',
      description: '了解身份盗窃、社会保障诈骗以及如何举报诈骗和欺诈行为。',
      icon: Shield,
      variant: 'destructive'
    },
    {
      title: '创办企业',
      description: '了解如何创办自己的企业，包括进出口业务。',
      icon: Building,
      variant: 'default'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 政府停摆通知横幅 */}
      <Alert className="bg-orange-50 border-orange-200 rounded-none">
        <AlertCircle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-sm text-orange-800">
          由于政府临时停摆，本网站的部分内容目前无法更新。有关总务管理局（GSA）停摆程序的更多信息，请访问拨款未到位情况下的运营。
        </AlertDescription>
      </Alert>

      {/* 顶部导航栏 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img
                  src="/mouse-empire-logo.png"
                  alt="小鼠帝国徽章"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">小鼠帝国</h1>
              </div>
            </div>
            
            {/* 桌面导航 */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/search" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">所有主题和服务</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">关于我们</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">联系我们</Link>
            </nav>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/search" className="block px-3 py-2 text-gray-700 hover:text-gray-900">所有主题和服务</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">关于我们</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">联系我们</Link>
            </div>
          </div>
        )}
      </header>

      {/* 主要内容 */}
      <main>
        {/* 搜索区域 */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              小鼠帝国门户网站
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              帮助您查找并了解政府福利、项目和信息。
            </p>
            <div className="max-w-2xl mx-auto">
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  if (searchQuery.trim()) {
                    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
                  }
                }}
                className="flex gap-2"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="搜索政府服务和信息..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button type="submit" className="bg-slate-700 hover:bg-slate-800">
                  搜索
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* 主要服务板块 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">所有主题和服务</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const serviceLinks = [
                  "/services/government",
                  "/services/benefits",
                  "/services/immigration",
                  "/services/finance",
                  "/services/taxes",
                  "/services/travel"
                ]
                return (
                  <Link key={index} href={serviceLinks[index]}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* How do I... 快速指南 */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">How do I ... 我该如何……</h3>
              <Badge variant="secondary" className="text-sm">
                让政府服务更易于查找
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howToItems.map((item, index) => {
                const guideLinks = [
                  "/guide/passport",
                  "/guide/unclaimed-money", 
                  "/guide/id-card",
                  "/guide/unemployment"
                ]
                return (
                  <Link key={index} href={guideLinks[index]}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 政府福利和经济援助 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services/benefits">
              <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl text-green-800">政府福利和经济援助</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">
                    了解您可能有资格获得的政府福利，并学习如何申请。
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    了解更多 <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* 其他服务 */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">更多服务</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => {
                const serviceLinks = [
                  "/services/complaints",
                  "/services/disability", 
                  "/services/emergency",
                  "/services/jobs",
                  "/services/fraud",
                  "/services/business"
                ]
                return (
                  <Link key={index} href={serviceLinks[index]}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            service.variant === 'destructive' ? 'bg-red-100' : 'bg-gray-100'
                          }`}>
                            <service.icon className={`h-5 w-5 ${
                              service.variant === 'destructive' ? 'text-red-600' : 'text-gray-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-2">{service.title}</h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400 mt-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 人生大事 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-slate-50 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">人生大事</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  探索政府福利和服务，以帮助您和您的家人度过人生的每个阶段。
                </p>
                <Link href="/life-stages">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                    浏览人生阶段指南 <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* 页脚 */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-4">小鼠帝国</h4>
                <p className="text-sm text-gray-400">
                  为小鼠帝国公民提供政府服务和信息
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">快速链接</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/contact" className="hover:text-white">联系我们</Link></li>
                  <li><a href="#" className="hover:text-white">政府机构</a></li>
                  <li><a href="#" className="hover:text-white">民选官员</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">服务</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">政府福利</a></li>
                  <li><a href="#" className="hover:text-white">公民身份</a></li>
                  <li><a href="#" className="hover:text-white">税收信息</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">关于</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">网站使用条款</a></li>
                  <li><a href="#" className="hover:text-white">隐私政策</a></li>
                  <li><a href="#" className="hover:text-white">无障碍访问</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© 2024 小鼠帝国. 为纪念从"低盐大鼠"到小鼠帝国的伟大历程而建立.</p>
              <p className="mt-2 text-xs">🐭 帝国荣耀，公民至上 🐭</p>
            </div>
          </div>
        </footer>
    </div>
  )
}