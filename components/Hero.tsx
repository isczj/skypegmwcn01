import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              专业的
              <span className="text-blue-600">企业门户</span>
              <br />
              解决方案
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              为艺术培训、医疗健康等企业提供专业的门户网站建设服务，
              助力企业数字化转型，提升品牌影响力。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center">
                立即咨询
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Play className="mr-2 h-4 w-4" />
                观看演示
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <Play className="h-16 w-16 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
