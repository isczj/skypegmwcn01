export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            文章中心
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            了解我们的最新动态、行业资讯和专业知识分享
          </p>
        </div>
      </div>

      {/* 文章列表 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 示例文章卡片 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  技术分享
                </span>
                <span className="text-gray-500 text-sm ml-auto">2024-01-15</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                企业门户网站建设的最佳实践
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                在数字化时代，一个优秀的企业门户网站对于品牌形象和业务发展至关重要。本文将分享我们在企业门户网站建设方面的经验和最佳实践...
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                阅读更多
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  行业资讯
                </span>
                <span className="text-gray-500 text-sm ml-auto">2024-01-10</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2024年网站设计趋势分析
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                随着技术的不断发展，网站设计也在不断演进。本文将分析2024年网站设计的主要趋势，包括用户体验、视觉设计和技术实现等方面...
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                阅读更多
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  案例分享
                </span>
                <span className="text-gray-500 text-sm ml-auto">2024-01-05</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                成功案例：某医疗机构的门户网站改造
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                我们为一家知名医疗机构完成了门户网站的全面改造，提升了用户体验和转化率。本文详细介绍了项目背景、解决方案和最终效果...
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                阅读更多
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>

        {/* 分页 */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              上一页
            </button>
            <button className="px-3 py-2 text-white bg-blue-600 border border-blue-600 rounded-md">
              1
            </button>
            <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              下一页
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
} 