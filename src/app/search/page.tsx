'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Search, FileText, Users, Shield, Globe, CreditCard, Receipt, Plane, Building } from 'lucide-react'
import Link from 'next/link'

function SearchPageContent() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams?.get('q') || '')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const allServices = [
    {
      id: 1,
      title: '小鼠帝国及其政府',
      description: '了解小鼠帝国法律、历史等内容。购买政府财产。联系民选官员和联邦机构。',
      category: '政府服务',
      icon: Building,
      url: '/services/government'
    },
    {
      id: 2,
      title: '政府福利',
      description: '寻找可能有助于支付食品、住房、医疗保健等费用的政府项目。',
      category: '福利服务',
      icon: Shield,
      url: '/services/benefits'
    },
    {
      id: 3,
      title: '移民与小鼠帝国公民身份',
      description: '了解小鼠帝国居留权、绿卡、公民身份要求及相关问题。',
      category: '移民服务',
      icon: Globe,
      url: '/services/immigration'
    },
    {
      id: 4,
      title: '金钱与信贷',
      description: '了解如何管理财务，获取信贷，处理金融问题。',
      category: '金融服务',
      icon: CreditCard,
      url: '/services/finance'
    },
    {
      id: 5,
      title: '税收',
      description: '了解税收政策，报税流程，税务相关问题。',
      category: '税务服务',
      icon: Receipt,
      url: '/services/taxes'
    },
    {
      id: 6,
      title: '旅行',
      description: '获取旅行信息，护照申请，旅行警告等。',
      category: '旅行服务',
      icon: Plane,
      url: '/services/travel'
    },
    {
      id: 7,
      title: '获取或更新护照',
      description: '申请或更新小鼠帝国护照的详细指南和流程。',
      category: '证件服务',
      icon: FileText,
      url: '/guide/passport'
    },
    {
      id: 8,
      title: '查找无人认领的资金',
      description: '寻找可能属于您的资金和财产。',
      category: '金融服务',
      icon: CreditCard,
      url: '/guide/unclaimed-money'
    },
    {
      id: 9,
      title: '申请失业救济金',
      description: '失业保险申请流程和资格要求。',
      category: '福利服务',
      icon: Shield,
      url: '/guide/unemployment'
    },
    {
      id: 10,
      title: '投诉服务',
      description: '提交涉及政府机构、电话营销人员等的投诉。',
      category: '投诉服务',
      icon: Users,
      url: '/services/complaints'
    }
  ]

  const performSearch = (searchQuery: string) => {
    setIsSearching(true)
    
    setTimeout(() => {
      if (!searchQuery.trim()) {
        setSearchResults([])
        setIsSearching(false)
        return
      }

      const results = allServices.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      
      setSearchResults(results)
      setIsSearching(false)
    }, 500)
  }

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(query)
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      '政府服务': 'bg-slate-600',
      '福利服务': 'bg-green-600',
      '移民服务': 'bg-emerald-600',
      '金融服务': 'bg-orange-600',
      '税务服务': 'bg-red-600',
      '旅行服务': 'bg-purple-600',
      '证件服务': 'bg-blue-600',
      '投诉服务': 'bg-pink-600'
    }
    return colors[category] || 'bg-gray-600'
  }

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
        {/* 搜索框 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">搜索政府服务</h1>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="搜索政府服务和信息..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" className="bg-slate-700 hover:bg-slate-800" disabled={isSearching}>
                {isSearching ? '搜索中...' : '搜索'}
              </Button>
            </div>
          </form>
        </div>

        {/* 搜索结果 */}
        <div>
          {query && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                搜索结果: "{query}"
                <span className="ml-2 text-sm text-gray-500">
                  (找到 {searchResults.length} 个结果)
                </span>
              </h2>
            </div>
          )}

          {isSearching ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-slate-700"></div>
              <p className="mt-4 text-gray-600">正在搜索...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map((result) => (
                <Card key={result.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${getCategoryColor(result.category)} flex items-center justify-center flex-shrink-0`}>
                        <result.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{result.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {result.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{result.description}</p>
                        <Link href={result.url}>
                          <Button variant="outline" size="sm">
                            查看详情
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">未找到相关结果</h3>
              <p className="text-gray-600 mb-4">
                没有找到与 "{query}" 相关的服务或信息。
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">建议：</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 检查拼写是否正确</li>
                  <li>• 尝试使用更简单的关键词</li>
                  <li>• 使用相关词汇进行搜索</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">开始搜索</h3>
              <p className="text-gray-600">
                输入关键词来搜索小鼠帝国的政府服务和信息。
              </p>
            </div>
          )}
        </div>

        {/* 热门搜索 */}
        {!query && (
          <section className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>热门搜索</CardTitle>
                <CardDescription>
                  其他公民经常搜索的服务
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['护照申请', '失业救济', '公民身份', '税收政策', '政府福利', '投诉服务'].map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setQuery(term)
                        performSearch(term)
                      }}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}
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

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-slate-700"></div>
          <p className="mt-4 text-gray-600">加载中...</p>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  )
}