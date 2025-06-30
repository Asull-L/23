import Navbar from "@/components/Navbar";
import ExerciseCard from "@/components/ExerciseCard"; 
import exercises from "@/data/exercises.json"; 

export default function Home() {
  return (
    // 修改页面背景色为 #BDD5EA（使用 Tailwind 自定义颜色语法 bg-[#BDD5EA]）
    <div className="flex flex-col min-h-screen bg-[#BDD5EA]"> 
      {/* 导航条需要固定在顶部，需在 Navbar 组件中添加样式（假设 Navbar 组件代码支持类名传递） */}
      <Navbar className="fixed top-0 w-full z-10 bg-[#577399]" /> 
      <main className="flex-grow container mx-auto px-4 py-8 mt-16"> {/* 顶部留出导航条空间（mt-16 约 64px，根据导航条高度调整） */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            《Web前端开发》课程练习
          </h1>
          <p className="text-lg text-slate-600">
            欢迎来到课程练习展示平台，这里汇集了各个阶段的学习成果。
            作者:蓝秋凤 2023级新闻学一班 P231014737
          </p>
          <p className="text-lg text-slate-600">
            你可以在这里浏览各种练习，包括HTML、CSS、JavaScript等前端技术。
      
            如果你有任何问题或建议，欢迎随时联系我们。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              title={exercise.title}
              description={exercise.description}
              imageUrl={exercise.imageUrl}
              link={exercise.link}
              tags={exercise.tags}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
