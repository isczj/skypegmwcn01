import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: {
    default: '企业门户网站',
    template: '%s | 企业门户网站'
  },
  description: '专业的医疗健康、艺术培训等企业门户网站',
  keywords: ['企业门户', '医疗健康', '艺术培训', 'CMS'],
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
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
