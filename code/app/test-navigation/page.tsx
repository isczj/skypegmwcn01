'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function TestNavigationPage() {
  const router = useRouter()
  const [count, setCount] = useState(0)
  const [targetPage, setTargetPage] = useState('/articles')

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          导航方式测试页面
        </h1>
        
        {/* 状态显示 */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">当前状态</h2>
          <p className="text-gray-600 mb-2">计数器: {count}</p>
          <p className="text-gray-600 mb-4">目标页面: {targetPage}</p>
          <button 
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            增加计数
          </button>
        </div>

        {/* Link组件跳转 */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Link组件跳转</h2>
          <p className="text-gray-600 mb-4">
            特点：预加载、客户端路由、保持状态
          </p>
          <div className="space-y-2">
            <Link 
              href="/articles" 
              className="block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-center"
            >
              跳转到文章页面 (Link)
            </Link>
            <Link 
              href="/" 
              className="block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-center"
            >
              返回首页 (Link)
            </Link>
          </div>
        </div>

        {/* 编程式跳转 */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">编程式跳转</h2>
          <p className="text-gray-600 mb-4">
            特点：动态跳转、运行时决定、状态重置
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                选择目标页面：
              </label>
              <select 
                value={targetPage} 
                onChange={(e) => setTargetPage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="/articles">文章页面</option>
                <option value="/">首页</option>
                <option value="/test">测试页面</option>
              </select>
            </div>
            <button 
              onClick={() => router.push(targetPage)}
              className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              编程式跳转到: {targetPage}
            </button>
            <button 
              onClick={() => router.replace(targetPage)}
              className="w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              替换当前页面: {targetPage}
            </button>
          </div>
        </div>

        {/* 传统a标签 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">传统a标签跳转</h2>
          <p className="text-gray-600 mb-4">
            特点：页面刷新、重新加载、状态丢失
          </p>
          <a 
            href="/articles" 
            className="block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-center"
          >
            传统跳转到文章页面 (会刷新页面)
          </a>
        </div>
      </div>
    </div>
  )
} 