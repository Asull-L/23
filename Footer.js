'use client';
import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [totalTime, setTotalTime] = useState('');
  const [error, setError] = useState('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchWakatimeData = async () => {
      try {
        const response = await fetch('/api/wakatime');
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setTotalTime(data.totalTime);
      } catch (err) {
        setError('无法获取编码时长数据');
        console.error(err);
      }
    };

    fetchWakatimeData();
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>作者: 蓝秋凤 2023级新闻学一班 P231014737</p>
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {currentYear} 《Web前端开发》课程练习平台. 保留所有权利.
          </p>
          {error ? (
            <p className="text-sm text-red-300">{error}</p>
          ) : totalTime ? (
            <p className="text-sm">wakatime 总编码时长: {totalTime}</p>
          ) : (
            <p className="text-sm">加载编码时长中...</p>
          )}
          <p className="text-xs mt-2">
            使用 Next.js 和 Tailwind CSS 构建
          </p>
        </div>
      </div>
    </footer>
  );
}