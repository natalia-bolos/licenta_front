import React from 'react';
import {
    Typography,
    Divider,
    Select,
    MenuItem,
    TextField
} from '@material-ui/core';
import {setPersonalInfo} from '../util/ApiUtils';
import { USER_ID} from '../constants';

export default class MoreInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedUniversity: "UTCN",
            selectedFaculty:"",
            selectedYear:"",
            UTCN:["Faculty of Architecture and Urban Planning","Faculty of Automation and Computer Science","Faculty of Automotive, Mechatronics and Mechanical Engineering",
                                        "Faculty of Civil Engineering","Faculty of Machine Building",
                                        "Faculty of Electronics, Telecommunications and Iformation Technology",
                                        "Faculty of Materials and Environmental Engineering","Faculty of Building Services Engineering","Faculty of Electrical Engineering"],
            UBB:["Faculty of Mathematics and Computer Science","Faculty of Physics","Faculty of Law","Faculty of Economics and Business Administration"],
            UMF:["Medicine","Dental medicine","Pharmacy"],
            skill1:"",
            skill2:"",
            skill3:"",
            skill4:"",
            skill5:"",
            skill6:"",
            subject1:"",
            subject2:"",
            subject3:"",
            description:"",
            city:""   
          };
    
    }

    handleUniversityChange = (event) => {
        this.setState({selectedUniversity:event.target.value}); 
    }

    handleFacultyChnage=(event)=>{
        this.setState({selectedFaculty:event.target.value}); 
    }

    handleYearChange=(event)=>{
        this.setState({selectedYear:event.target.value}); 
    }

    handleChange=(event)=>{
        this.setState({[event.target.id]:event.target.value}); 
    }

    handleSubmit(){
        var skillsArray=[];
        var subjectsArray=[];

        if(this.state.skill1!==""){
            skillsArray.push( {
                skillName:this.state.skill1
            })
        }
        if(this.state.skill2!==""){
            skillsArray.push( {
                skillName:this.state.skill2
            })
        }
        if(this.state.skill3!==""){
            skillsArray.push( {
                skillName:this.state.skill3
            })
        }
        if(this.state.skill4!==""){
            skillsArray.push( {
                skillName:this.state.skill4
            })
        }
        if(this.state.skill5!==""){
            skillsArray.push( {
                skillName:this.state.skill5
            })
        }
        if(this.state.skill6!==""){
            skillsArray.push( {
                skillName:this.state.skill6
            })
        }
        if(this.state.subject1!==""){
            subjectsArray.push( {
                favouriteSubjectName:this.state.subject1
            })
        }
        if(this.state.subject2!==""){
            subjectsArray.push( {
                favouriteSubjectName:this.state.subject2
            })
        }
        if(this.state.subject3!==""){
            subjectsArray.push( {
                favouriteSubjectName:this.state.subject3
            })
        }

        var completeUserInfo={
            moreUserInfo: {
                description: this.state.description,
                university: this.state.selectedUniversity,
                faculty: this.state.selectedFaculty,
                year: this.state.selectedYear,
                city: this.state.city
            },
            skills:skillsArray,
            subjects:subjectsArray
        }
        console.log(localStorage.getItem(USER_ID));
        setPersonalInfo(localStorage.getItem(USER_ID),completeUserInfo).then(response=>{
            // aici trebuie o alerta sa am salvat cu bine datele si sa vede spre ce componenta facem redirect
            console.log(response);
        })
    }


    render(){
        const facultiesList=this.state[this.state.selectedUniversity].map(university=><MenuItem key={university} value={university}>{university}</MenuItem>);
        
        return (
            <div className="container">
                <Typography>Welcome! </Typography>
                <Typography>In order to help you connect with other sudents, we would like to get to know you a bit better</Typography>
                <Divider />
                <Typography>Describe yourself in a few words</Typography>
                <TextField id="description" variant="filled" onChange={this.handleChange.bind(this)}/>
                <div>
                    <Typography>University:</Typography>
                    <Select onChange={this.handleUniversityChange.bind(this)}>
                        <MenuItem value={"UTCN"} name={"Technical University of Cluj Napoca"}>Technical University of Cluj Napoca</MenuItem>
                        <MenuItem value={"UBB"} name={"Babes-Bolyai University"}>Babes-Bolyai University</MenuItem>
                        <MenuItem value={"UMF"} name={"Iuliu Hategan University of Medicine and Pharmacy"}>Iuliu Hategan University of Medicine and Pharmacy</MenuItem>
                    </Select>
                    <Typography>Faculty:</Typography>
                    <Select onChange={this.handleFacultyChnage.bind(this)}>
                        {facultiesList}
                    </Select>
                    
                </div>
                <Typography>Year of study:</Typography>
                <Select onChange={this.handleYearChange.bind(this)}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                </Select>
                <Typography>City</Typography>
                <TextField id="city" variant="filled" onChange={this.handleChange.bind(this)}/>
                <Divider />
                <Typography>Your top skills</Typography>
                <div>
                    <TextField id="skill1" variant="filled" style={{margin:'5px'}} onChange={this.handleChange.bind(this)}/>
                    <TextField id="skill2" variant="filled" style={{margin:'5px'}} onChange={this.handleChange.bind(this)}/>
                    <TextField id="skill3" variant="filled" style={{margin:'5px'}} onChange={this.handleChange.bind(this)}/>
                    <TextField id="skill4" variant="filled" style={{margin:'5px'}} onChange={this.handleChange.bind(this)}/>
                    <TextField id="skill5" variant="filled" style={{margin:'5px'}} onChange={this.handleChange.bind(this)}/>
                    <TextField id="skill6" variant="filled" style={{margin:'5px'}} onChange={this.handleChange.bind(this)}/>
                </div>
                <Typography>Your favourite subjects</Typography>
                <div>
                    <TextField id="subject1" variant="filled" style={{margin:'5px'}} onChange={this.handleChange.bind(this)}/>
                    <TextField id="subject2" variant="filled" style={{margin:'5px'}} onChange={this.handleChange.bind(this)}/>
                    <TextField id="subject3" variant="filled" style={{margin:'5px'}} onChange={this.handleChange.bind(this)}/>
                </div>
                <p className="btn" onClick={this.handleSubmit.bind(this)}>Save Info</p>
                

            </div>
        )
    }
}