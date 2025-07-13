export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              关于我们
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              我们是一家专注于企业门户网站建设的专业团队，拥有丰富的行业经验和技术实力。
              我们致力于为医疗健康、艺术培训等各个行业的企业提供高质量的门户网站解决方案。
            </p>
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">成功案例</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">客户满意度</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-4"></div>
                  <div className="text-xl font-semibold text-gray-900">企业门户专家</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
