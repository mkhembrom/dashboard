import './projectData.css'
import { projectListData } from '../../data';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TuneIcon from '@mui/icons-material/Tune';
import avatar from '../../img/avatar.jpg';

function separateNumber(x) {
    let nfObject = new Intl.NumberFormat('en-US');
    let output = nfObject.format(x);

    return output;

}



export const ProjectData = () => {
    return (
        <div className="project_data">
            <div className="project_data_header">
                <p className="project_data_title">Budget status</p>

                <div className="project_button">
                    <span style={{ cursor: 'pointer', marginRight: '1rem' }}>
                        <Button sx={{ backgroundColor: '#007F75'}} variant="contained" startIcon={<AddIcon />}>
                            Add New Project
                        </Button>
                    </span>
                    <span style={{ cursor: 'pointer', marginRight: '1rem' }}>
                        <Button sx={{ borderColor: '#007F75', color: '#007F75'}} variant="outlined" startIcon={<GetAppIcon />}>
                            Download report
                        </Button>
                    </span>
                    <span style={{ cursor: 'pointer', marginRight: '1rem' }}>
                        <Button sx={{ borderColor: '#007F75', color: '#007F75'}} variant="outlined" startIcon={<CalendarTodayIcon />}>
                            dd/mm/yyyy-dd/mm/yyyy
                        </Button>
                    </span>
                    <span style={{ cursor: 'pointer', marginRight: '1rem' }}>
                        <Button sx={{ borderColor: '#007F75', color: '#007F75', }} variant="outlined" startIcon={<TuneIcon />}>
                            Filter
                        </Button>
                    </span>
                </div>
            </div>
            <div className="project_lists">

                {
                    projectListData.map((item) => {
                        return (
                            <div key={item.id} className="project_card">
                                <div className="project_head">
                                    <div className='project_title'>
                                        <p className='project_name'>{item.name}</p>
                                        <p className='project_owner'>{item.owner}</p>
                                    </div>
                                    <img className='avatar asm' src={avatar} alt="avatar" />
                                </div>
                                <div className='expenses'>
                                    <p className='expenses_name'>Total Budget</p>
                                    <p className='expenses_value'>{separateNumber(item.totalBudget)} <span>&#8364;</span></p>
                                </div>
                                <div className='expenses'>
                                    <p className='expenses_name'>Profitability(100%)</p>
                                    {
                                        item.profitability < 0 ?
                                            <p className='expenses_value evred'>{separateNumber(item.profitability)} <span>&#8364;</span></p>
                                            :
                                            <p className='expenses_value'>{separateNumber(item.profitability)} <span>&#8364;</span></p>
                                    }
                                </div>
                                <div class="meter" style={{ backgroundColor: item.bg }}>
                                    {
                                        item.strength >= 60 && item.profitability > 0 ?
                                            <span className='orange' style={{ width: `${item.strength}%` }}></span>
                                            :
                                            item.strength >= 30 && item.strength < 60 && item.profitability > 0 ?
                                                <span className='orange yellow' style={{ width: `${item.strength}%` }}></span>
                                                :
                                                <span className='orange redo' style={{ width: `${item.strength}%` }}></span>


                                    }

                                </div>

                                <div className='project_bottom'>
                                    <p>Actual hours: 1.100</p>

                                    {
                                        item.profitability < 0 ?
                                            <p className='red_color'>{item.soldHour}</p>
                                            :
                                            <p className=''>{item.soldHour}</p>
                                    }
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
}