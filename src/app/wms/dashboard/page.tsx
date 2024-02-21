'use client';
import { Chart, ArcElement } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }[];
}

const MyDoughnutChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { keys, counts } = await response.json();

        setChartData({
          labels: keys,
          datasets: [
            {
              data: counts,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                ''
                // Add more colors as needed
              ],
              hoverOffset: 4,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // const intervalId = setInterval(() => {
    //   window.location.reload();
    // }, 10000);
    // return () => clearInterval(intervalId);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <div className="flex flex-col gap-4 m-5">
        <h1>Order Dashboard</h1>
        <div>Key: {chartData?.labels.join(' , ')}</div>
        <div>Data: {chartData?.datasets.map((m) => m.data).join(' , ')}</div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-[450px] h-[450px]">
          {chartData ? <Doughnut className="" data={chartData} options={options} /> : <div className='flex justify-center'>Loading...</div>}
        </div>
      </div>
    </>
  );
};

export default MyDoughnutChart;
