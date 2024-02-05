import { useState } from 'react';
import DisplayAndEditButtons from './DisplayAndEditButtons';

function DisplayEmployeeDetails(props) {
    const labels = ["Employee Id : " ,"Full Name : ", "Salary : ", "Designation : ", "Department : "]

    const [delEmpFlag, setDelEmpFlag] = useState(false)

    function handleOnChange(e, property) {
        props.setSelectedEmployee((prevEmp) => {
            return {
                ...prevEmp,
                [property]: e.target.value,
            };
        });
    }

    return (
        <>
            <div>
                <h3>Employee Details</h3>
            </div>
            <table id="details">
                <tbody>
                    {
                        Object.keys(props.selectedEmployee).map((property, index) => {
                            if (property === "empId") {
                                return (
                                    <tr key={property}>
                                        <td>
                                            <label>{labels[index]}</label>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                style={{ cursor: 'no-drop' }}
                                                value={props.selectedEmployee[property]} disabled
                                            />
                                        </td>
                                    </tr>
                                )
                            } else if (property === "empDept") {
                                return (
                                    <tr key={property}>
                                        <td>
                                            <label>{labels[index]}</label>
                                        </td>
                                        <td>
                                            <select
                                                id="myList"
                                                onChange={(e) => {
                                                    handleOnChange(e, property)
                                                }}
                                                style={props.editFlag ? { cursor: 'pointer' } : { cursor: 'no-drop' }}
                                                value={props.selectedEmployee.empDept} disabled={props.editFlag === false}
                                            >
                                                {
                                                    props.departments.map((department) => {
                                                        return (
                                                            <option
                                                                key={department.deptId}
                                                                value={department.deptId}
                                                            >
                                                                {department.deptName}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr key={property}>
                                        <td>
                                            <label>{labels[index]}</label>
                                        </td>
                                        <td>
                                            <input type="text" onChange={(e) => { handleOnChange(e, property) }} value={props.selectedEmployee[property]} style={props.editFlag ? { cursor: 'pointer' } : { cursor: 'no-drop' }} disabled={props.editFlag === false} />
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
                    <DisplayAndEditButtons
                        employees={props.employees}
                        setEmployess={props.setEmployess}
                        selectedEmployee={props.selectedEmployee}
                        setSelectedEmployee={props.setSelectedEmployee}
                        editFlag={props.editFlag}
                        setEditFlag={props.setEditFlag}
                        delEmpFlag={delEmpFlag}
                        setDelEmpFlag={setDelEmpFlag}
                    />
                </tbody>
            </table>
        </>
    )
}

export default DisplayEmployeeDetails;
