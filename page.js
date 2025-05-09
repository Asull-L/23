import Navbar from "../components/Navbar";
export default function Hello(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-purple-50 to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-8xl text-center text-purple-200 bg-sky-100 mb-4">Hello,Welcome!</h1>
        <p className="text-center text-gray-600 font-semibold mb-8">
          西北民族大学 新闻学一班 蓝秋凤
        </p>
      </div>
    </div>
  )
}