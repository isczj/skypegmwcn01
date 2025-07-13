import { Zap, Shield, Users, Smartphone, Search, Headphones } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: '快速部署',
      description: '基于现代化技术栈，快速搭建企业门户网站'
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '多层安全防护，保障企业数据安全'
    },
    {
      icon: Users,
      title: '用户友好',
      description: '直观的用户界面，提升用户体验'
    },
    {
      icon: Smartphone,
      title: '响应式设计',
      description: '完美适配各种设备，移动端体验优秀'
    },
    {
      icon: Search,
      title: 'SEO优化',
      description: '内置SEO优化，提升搜索引擎排名'
    },
    {
      icon: Headphones,
      title: '专业支持',
      description: '7x24小时技术支持，解决您的后顾之忧'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            为什么选择我们
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们提供专业的企业门户解决方案，帮助您的企业在数字化时代脱颖而出
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
