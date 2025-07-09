import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '企业门户网站',
    template: '%s | 企业门户网站'
  },
  description: '专业的艺术培训、医疗健康等企业门户网站',
  keywords: ['企业门户', '艺术培训', '医疗健康', 'CMS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
