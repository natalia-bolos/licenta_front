import React from 'react';
import {
    Typography,
    Divider,
    Select,
    MenuItem,
    TextField
} from '@material-ui/core';



export default class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedUniversity: "UTCN",
            UTCN:["Faculty of Architecture and Urban Planning","Faculty of Automation and Computer Science","Faculty of Automotive, Mechatronics and Mechanical Engineering",
                                        "Faculty of Civil Engineering","Faculty of Machine Building",
                                        "Faculty of Electronics, Telecommunications and Iformation Technology",
                                        "Faculty of Materials and Environmental Engineering","Faculty of Building Services Engineering","Faculty of Electrical Engineering"],
            UBB:["Faculty of Mathematics and Computer Science","Faculty of Physics","Faculty of Law","Faculty of Economics and Business Administration"],
            UMF:["Medicine","Dental medicine","Pharmacy"]   
          };
    
    }
    handleUniversityChange = (event) => {
        this.setState({selectedUniversity:event.target.value}); 
       };


    render(){
        const facultiesList=this.state[this.state.selectedUniversity].map(university=><MenuItem value={university}>{university}</MenuItem>);
        
        return (
            <div>
                <Typography>Welcome! </Typography>
                <Typography>In order to help you connect with other sudents, we would like to get to know you a bit better</Typography>
                <Divider />
                <Typography>Describe yourself in a few words</Typography>
                <TextField id="filled-basic" variant="filled" />
                <div>
                    <Typography>University:</Typography>
                    <Select onChange={this.handleUniversityChange}>
                        <MenuItem value={"UTCN"}>Technical University of Cluj Napoca</MenuItem>
                        <MenuItem value={"UBB"}>Babes-Bolyai University</MenuItem>
                        <MenuItem value={"UMF"}>Iuliu Hategan University of Medicine and Pharmacy</MenuItem>
                    </Select>
                    <Typography>Faculty:</Typography>
                    <Select>
                        {facultiesList}
                    </Select>
                    
                </div>
                <Typography>Year of study:</Typography>
                <Select>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    <MenuItem>5</MenuItem>
                    <MenuItem>6</MenuItem>
                </Select>
                <Typography>City</Typography>
                <TextField id="filled-basic" variant="filled" />
                <Divider />
                <Typography>Your top skills</Typography>
                <div>
                    <TextField id="filled-basic" variant="filled" style={{margin:'5px'}} />
                    <TextField id="filled-basic" variant="filled" style={{margin:'5px'}}/>
                    <TextField id="filled-basic" variant="filled" style={{margin:'5px'}}/>
                    <TextField id="filled-basic" variant="filled" style={{margin:'5px'}}/>
                    <TextField id="filled-basic" variant="filled" style={{margin:'5px'}}/>
                    <TextField id="filled-basic" variant="filled" style={{margin:'5px'}}/>
                </div>
                <Typography>Your favourite subjects</Typography>
                <div>
                    <TextField id="filled-basic" variant="filled" style={{margin:'5px'}}/>
                    <TextField id="filled-basic" variant="filled" style={{margin:'5px'}}/>
                    <TextField id="filled-basic" variant="filled" style={{margin:'5px'}}/>
                </div>
                <p className="btn">Save Info</p>
                

            </div>
        )
    }
}