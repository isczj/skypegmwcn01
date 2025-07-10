export default function TestPage() {
  return (
    <div>
      <h1>测试页面</h1>
      {/* 故意添加一个语法错误 */}
      <p>这是一个测试</p>
      {/* 缺少闭合标签，这会导致构建时出错 */}
    </div>
  )
} 