const DisplayAndEditButtons = (props) => {
    return (
        <>
            {
                props.editFlag ?
                    (
                        <tr>
                            <td>
                                <button
                                    onClick={() => {
                                        editEmployee(props.employees, props.setEmployess, props.selectedEmployee, props.setSelectedEmployee, props.setEditFlag)
                                    }}
                                >
                                    Save
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        props.setEditFlag(false)
                                    }}
                                >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    )
                    : props.delEmpFlag ?
                    (
                            <tr>
                                <td>
                                    <button
                                        onClick={() => {
                                            deleteEmployee(props.employees, props.setEmployess, props.selectedEmployee, props.setSelectedEmployee, props.setDelEmpFlag)
                                        }}
                                    >
                                        Confirm
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            props.setDelEmpFlag(false)
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        )
                        :
                        (
                            <tr>
                                <td>
                                    <button
                                        onClick={() => {
                                            props.setEditFlag(true);
                                        }}
                                        >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            props.setDelEmpFlag(true)
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
            }
        </>
    )
}

function editEmployee(employees, setEmployess, selectedEmployee, setSelectedEmployee, setEditFlag) {
    const index = employees.findIndex(emp => emp.empId === selectedEmployee.empId);

    const updatedEmployees = [...employees];

    updatedEmployees[index] = selectedEmployee;
    
    setEmployess(updatedEmployees);
    
    setSelectedEmployee({});
    
    setEditFlag(false);
}

function deleteEmployee(employees, setEmployess, selectedEmployee, setSelectedEmployee, setDelEmpFlag) {
    const updatedEmployees = employees.filter(employee => employee.empId !== selectedEmployee.empId);
    setEmployess(updatedEmployees);
    setSelectedEmployee({});
    setDelEmpFlag(false);
}

export default DisplayAndEditButtons;