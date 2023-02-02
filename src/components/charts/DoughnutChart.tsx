import {
    Chart as ChartJS,
    Filler,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend,
    Tooltip,
    Filler,
    Legend);

/* 
const doughnutLabels = ['Electronics', 'Home Applicances', 'Beauty', 'Furniture', 'Watches', 'Apparel'];

const doughnutData = {
    labels: doughnutLabels,
    datasets: [
        {
            label: '# of Orders',
            data: [122, 219, 30, 51, 82, 13],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }
    ],
}; */

export default function DoughnutChart({ doughnutData }: IDoughnutChart) {
    return <div className="card bg-neutral w-full p-6 shadow-xl grid place-items-center">
        <div className="card-body">
            <Doughnut data={doughnutData} />
        </div>
    </div>
}

interface IDoughnutChart {
    doughnutData: {
        labels: string[],
        datasets: {
            label: string,
            data: number[],
            backgroundColor?: string[],
            borderColor?: string[],
            borderWidth?: number,
        }[]
    };
}