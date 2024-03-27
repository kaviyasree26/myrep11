import { AppBar, Button, Toolbar, Stack } from '@mui/material';
import FileOpenTwoToneIcon from '@mui/icons-material/FileOpenTwoTone'; import './Home.css';
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Home.css';
const Home = () => {
    const e = useNavigate();
    function exit() {
        e('/')
    }
    return (
        <div className='outer'>
            <div className='div4'>
                <img src='https://i.seadn.io/s/raw/files/43d6659110f9484a0e36a95de76b1f85.png?auto=format&dpr=1&w=750' /><h1 style={{ paddingLeft: '10px' }}>FERRET</h1>
            </div>
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack direction={'row'} spacing={2}>
                        <Button color="inherit">SUPPORT</Button>
                        <Button color="inherit">CONTACT US</Button>
                        <Button color="inherit">Theme</Button>
                    </Stack>
                    <div>
                        <Button color="inherit" onClick={exit}>LOGOUT</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div className='div5'>
                <div className="main">
                    <h1 className='div16'>Content Search</h1>
                    <div className="search">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
                    </div>
                </div>
                <div className='div6'><h2 style={{ fontSize: '30px' }}>SELECT THE CONTENT<FileOpenTwoToneIcon sx={{ width: '30px', height: '30px' }} /></h2></div>
                <div className='div7'>
                    <div className='div8'>
                        <table cellSpacing={25}>
                            <tr>
                                <td><button className='aa'><div className='div9'></div></button></td>
                                <td><button className='aa'><div className='div10'></div></button></td>
                                <td><button className='aa'><div className='div11'></div></button></td>
                            </tr>
                            <tr>
                                <td><b>TRENDING</b></td>
                                <td><b>NEWS</b></td>
                                <td><b>SPORTS</b></td>
                            </tr>
                            <tr>
                                <td><button className='aa'><div className='div12'></div></button></td>
                                <td><button className='aa'><div className='div13'></div></button></td>
                                <td><button className='aa'><div className='div14'></div></button></td>
                            </tr>
                            <tr>
                                <td><b>ENTERTAINMENT</b></td>
                                <td><b>BUSINESS</b></td>
                                <td><b>OTHERS</b></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <h2>HIGHLIGHTS</h2>
            <table className='last' cellSpacing={10}>
                <tr>
                    <td><b>POPULAR TOPICS</b></td>
                    <td><b>ACCOUNT</b></td>    
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr><td><a href='https://m.cricbuzz.com/cricket-commentary/75651/rohit-falls-after-another-flying-start' style={{color:'white'}}>2023 FINAL </a>- Auatralia won by 6 wickets.</td>
                    <td>Manage your Account</td>
                </tr>
                <tr><td><a href='https://zeenews.india.com/cricket/india-vs-england-t20-world-cup-2022-from-t20-world-cup-2014-to-2022-the-history-of-team-india-choking-in-icc-events-knockout-stage-2533605.html' style={{color:'white'}}>CHOKING CONTINUES</a> - India,Yet another loss in finals.</td>
                <td><InstagramIcon sx={{width:'40px',height:'40px'}}/> <LocalPostOfficeIcon sx={{width:'40px',height:'40px'}}/>
                <WhatsAppIcon sx={{width:'40px',height:'40px'}}/><FacebookIcon sx={{width:'40px',height:'40px'}}/></td></tr>
                <tr><a href='https://www.filmibeat.com/tamil/movies/kanguva/fan-photos-86486.html' style={{color:'white'}}>KANGUVA CELEBRATIONS</a> - Kaguva Celebrations fires up...!</tr>
                <tr></tr>
                <tr><a href='https://www.imdb.com/title/tt23474462/' style={{color:'white'}}>JAPAN NEGATIVE REVIEWS</a> - Japan gets negative reviews.</tr>
                <tr></tr>
                <tr><a href='https://www.imdb.com/title/tt24226474/' style={{color:'white'}}>KARTHIK SUBURAJ BLOCKBUSTER</a> - Karthik Suburaj pulls off a banger!!!</tr>
            </table>

        </div>
    );
};

export default Home;
