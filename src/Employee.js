import axios from "axios";
import { useEffect,useState } from "react";
const Employee =()=>{
    const [employee,setEmployee] = useState([])
    useEffect(()=>{
        axios.get("employeeOb.json").then((res)=>{
            console.log(res.data)
            setEmployee(res.data)
        })
    },[])
    return(
        <div>
            <h3>EMPLOYEE DETAILS</h3>
        <table className="Table">
            <tr>
                <th className="Table-Cell">Sl.No</th>
                <th className="Table-Cell">Name of the Employee</th>
                <th className="Table-Cell">Location</th>
            </tr>
            {employee.map((val,index)=>{
                return(
                    <tr>
                        <td className="Table-Cell">{index+1}</td>
                        <td className="Table-Cell">{val.name}</td>
                        <td className="Table-Cell">{val.loc}</td>
                    </tr>
                )
            })}
            </table>
            </div>
    )
}
export default Employee;