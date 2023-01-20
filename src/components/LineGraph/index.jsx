import './lineGraph.css'

import { Switch } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: false,
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['19 June', '20 June', '21 June', '22 June', '23 June', '24 June', '25 June'];

const data = {
    labels,
    datasets: [
        {
            data: [0, 1000, 3600, 3100, 4000, 5600, 6400, 6400],
            borderColor: '#007F75',
            backgroundColor: '#007F75',
        },
    ],
};

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export const LineGraph = () => {
    return (
        <div className='line_graph'>
            <div className='line_graph_header'>
                <p className=''>Total revenue</p>
                <div className='line_graph_switch'>
                    <p style={{ color: '#b2b2b2' }}>Month</p>
                    <Switch {...label} color="default" defaultChecked size="small" />
                    <p>Week</p>
                </div>
            </div>
            <Line options={options} data={data} />
        </div>
    );
}