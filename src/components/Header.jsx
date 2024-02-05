function addEmployeeButtonHandler(selectedEmployee, setSelectedEmployee, setAddEmpFlag) {
    if (Object.keys(selectedEmployee).length === 0) {
        setAddEmpFlag(true)
    } else {
        setSelectedEmployee({})
        setAddEmpFlag(true)
    }
}

const Header = (props) => {
    return (
        <div id="navdiv">
            <nav>
                <input
                    type="button" value="Home"
                    onClick={() => props.homeButton(true)}
                />
                <input
                    type="button" value="Add Employee"
                    onClick={() => addEmployeeButtonHandler(props.selectedEmployee, props.setSelectedEmployee, props.setAddEmpFlag)}
                />
                <button value={props.employees.length}
                    style={{
                        fontFamily: "cursive", border: 'none', borderRadius: '15px',
                        width: 'fit-content', height: '4vh',
                        float: 'right', margin: '3px 5px 3px 0px',
                    }}>{props.employees.length + " Employees Registered"}</button>
        </nav>
        </div >
    )
}

export default Header;