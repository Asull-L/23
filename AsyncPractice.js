'use client';
import { useEffect } from 'react';

export default function AsyncPractice() {
  useEffect(() => {
    // 原HTML中的JavaScript代码转换为React useEffect
    async function getAllCommitDates(owner, repo) {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('网络响应失败');
        const commits = await response.json();
        return commits.map(commit => commit.commit.author.date);
      } catch (error) {
        console.error('获取提交日期失败:', error);
        return [];
      }
    }

    getAllCommitDates('Asull-L', '23').then(dates => {
      console.log('所有提交日期:', JSON.stringify(dates));
      const demo = document.getElementById('demo');
      if (demo) {
        let html = '<table border="1" cellpadding="5"><tr><th>序号</th><th>提交日期</th></tr>';
        dates.forEach((date, idx) => {
          html += `<tr><td>${idx + 1}</td><td>${date}</td></tr>`;
        });
        demo.innerHTML = html + '</table>';
      }
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">JavaScript 异步编程练习</h1>
      <div id="demo" className="border p-4 rounded"></div>
    </div>
  );
}