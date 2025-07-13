import { Globe, Palette, Heart, Code, Database, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: '企业门户开发',
      description: '定制化企业门户网站，展示企业形象和实力',
      features: ['响应式设计', '多语言支持', '内容管理系统', 'SEO优化']
    },
    {
      icon: Palette,
      title: '艺术培训平台',
      description: '专为艺术培训机构打造的在线教育平台',
      features: ['在线课程管理', '学员管理系统', '作品展示', '预约系统']
    },
    {
      icon: Heart,
      title: '医疗健康系统',
      description: '医疗机构专业的信息化解决方案',
      features: ['预约挂号', '健康档案', '在线咨询', '药品管理']
    },
    {
      icon: Code,
      title: '定制开发',
      description: '根据企业需求提供个性化开发服务',
      features: ['需求分析', '系统设计', '开发实施', '测试部署']
    },
    {
      icon: Database,
      title: '数据管理',
      description: '专业的数据管理和分析解决方案',
      features: ['数据库设计', '数据迁移', '备份恢复', '性能优化']
    },
    {
      icon: Cpu,
      title: '技术支持',
      description: '全方位的技术支持和维护服务',
      features: ['系统监控', '故障处理', '性能优化', '安全维护']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            我们的服务
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            提供全方位的企业门户解决方案，满足不同行业的个性化需求
          </p>
          <div className="mt-8">
            <Link 
              href="/articles" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              了解更多案例
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
