import React from "react";
import Vacancies from "../../utils/vacancies";


export default props => {
    const [loading,setLoading] = React.useState("Loading...");
    React.useEffect(()=>{
        Vacancies.getVacancies()
            .then(res => {props.setVacancies(res)
                          console.log(res)              
                        })
            .catch(console.log)
    },[])
    React.useEffect(()=>{
    if(props.vacancies)
        var str = '<ul>'
        props.vacancies.forEach(function(elem) {
        str += '<li>'+ elem.title + '</li>';
        }); 
        str += '</ul>';
        setLoading(str);
    } 
    ,[props.vacancies])

return <div>{loading}</div>
}