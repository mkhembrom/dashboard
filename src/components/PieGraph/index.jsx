import './pieGraph.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Switch } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [],
  datasets: [
    {
      data: [48, 33, 19],
      backgroundColor: [
        'rgb(0,220,198)',
        'rgb(120,140,209)',
        'rgb(232,0,0)',
      ],
      borderColor: [
        'rgb(0,220,198)',
        'rgb(120,140,209)',
        'rgb(232,0,0)',
      ],
      borderWidth: 1,
      borderRadius: 0,
      weight: 50,

    },
  ],
};

const label = { inputProps: { 'aria-label': 'Size switch demo' } };


export const PieGraph = () => {
  return (
    <div className='pie_graph'>
      <div className='pie_graph_header'>
        <p className=''>Budget</p>
        <div className='pie_graph_switch'>
          <p style={{ color: '#b2b2b2' }}>Profitability</p>
          <Switch {...label} color="default" defaultChecked size="small" />
          <p>Status</p>
        </div>
      </div>
      <div className='doughnut'>
        <Doughnut data={data} />
      <div className='doughnut_title'>
        <p className="dough_num">5</p>
        <p className="dought_name">Total projects</p>
      </div>
      </div>

      <div className='doughnut_data'>
        {
          [{name: "Over Budget", color: 'rgb(232,0,0)'}, {name: "On Budget", color: 'rgb(120,140,209)'}, {name: "Under Budget", color: 'rgb(0,220,198)'}].map((item) => {
            return (<div key={item.name} className="dough_dots">
              <div className='dough_dot' style={{  
                backgroundColor: item.color
              }}>
              </div>
              <p>{item.name}</p>
            </div>)

            })
        }
      </div>
    </div>
  );
}