'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('感谢您的留言！我们会尽快回复您。')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: '电子邮件',
      content: 'contact@mouse-empire.gov',
      description: '一般咨询和业务联系'
    },
    {
      icon: Phone,
      title: '服务热线',
      content: '400-MOUSE-01',
      description: '工作日 9:00-17:00'
    },
    {
      icon: MapPin,
      title: '帝国地址',
      content: '小鼠帝国中央政府大楼',
      description: '帝国大道1号，首都中心区'
    },
    {
      icon: Clock,
      title: '办公时间',
      content: '周一至周五 9:00-17:00',
      description: '节假日除外'
    }
  ]

  const departments = [
    {
      name: '公民服务部',
      email: 'citizen@mouse-empire.gov',
      phone: '400-MOUSE-02',
      services: ['公民身份申请', '证件办理', '福利咨询']
    },
    {
      name: '经济发展部',
      email: 'economy@mouse-empire.gov',
      phone: '400-MOUSE-03',
      services: ['企业注册', '投资咨询', '贸易服务']
    },
    {
      name: '文化旅游部',
      email: 'culture@mouse-empire.gov',
      phone: '400-MOUSE-04',
      services: ['文化活动', '旅游咨询', '历史研究']
    },
    {
      name: '紧急事务部',
      email: 'emergency@mouse-empire.gov',
      phone: '400-MOUSE-99',
      services: ['紧急援助', '灾害响应', '安全咨询']
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们随时准备为您服务。请通过以下方式与我们联系，我们将竭诚为您提供帮助。
          </p>
        </div>

        {/* 联系方式 */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系表单 */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">发送消息</CardTitle>
                <CardDescription>
                  请填写下面的表单，我们会尽快回复您的咨询。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        电子邮件 *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      主题 *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="请输入消息主题"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      消息内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请详细描述您的问题或需求..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800">
                    <Send className="h-4 w-4 mr-2" />
                    发送消息
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* 部门联系信息 */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">各部门联系方式</CardTitle>
                <CardDescription>
                  根据您的需求，直接联系相关部门获得更专业的服务。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {departments.map((dept, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{dept.name}</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">
                        <span className="font-medium">邮箱:</span> {dept.email}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">电话:</span> {dept.phone}
                      </p>
                      <div className="mt-2">
                        <span className="font-medium text-gray-700">服务项目:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {dept.services.map((service, serviceIndex) => (
                            <Badge key={serviceIndex} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>

        {/* 常见问题 */}
        <section className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">常见问题</CardTitle>
              <CardDescription>
                查看其他公民经常咨询的问题，也许能快速解决您的疑问。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">如何申请小鼠帝国公民身份？</h4>
                  <p className="text-sm text-gray-600">
                    请访问"移民与小鼠帝国公民身份"页面，查看详细的申请流程和所需材料。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">政府福利申请需要多长时间？</h4>
                  <p className="text-sm text-gray-600">
                    通常情况下，申请处理时间为5-10个工作日，具体时间视申请类型而定。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">如何查询申请进度？</h4>
                  <p className="text-sm text-gray-600">
                    您可以通过我们的在线系统查询申请进度，或致电客服热线咨询。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">紧急情况如何联系？</h4>
                  <p className="text-sm text-gray-600">
                    请拨打紧急事务部热线 400-MOUSE-99，我们提供24小时紧急服务。
                  </p>
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