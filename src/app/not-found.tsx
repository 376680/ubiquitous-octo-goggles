export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">页面未找到</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            抱歉，您访问的页面不存在。可能是链接错误或页面已被移动。
          </p>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            © 2024 小鼠帝国. 为纪念从"低盐大鼠"到小鼠帝国的伟大历程而建立.
          </p>
        </div>
      </div>
    </div>
  )
}