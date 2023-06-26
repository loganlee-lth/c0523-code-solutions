const business = {
  opens: '9AM',
  closes: '5PM',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    Saul: {
      position: 'Lawyer',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
    },
    Walt: {
      position: 'Chemist',
      daysOfWeekWorking: ['M', 'W'],
    },
    Jesse: {
      position: 'Cook',
      daysOfWeekWorking: ['T', 'Th'],
    },
    Gus: {
      position: 'King',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
  },
};

function addWeekends(obj) {
  obj.daysOpen.push('Sat', 'Sun');
  for (const emp in obj.employees) {
    obj.employees[emp].daysOfWeekWorking.push('Sat', 'Sun');
  }
}

function addEmployees(obj) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';

  const uniquePositions = ['Designer', 'Manager', 'Technician', 'Analyst'];

  xhr.addEventListener('load', function () {
    for (let i = 0; i < 4; i++) {
      const newEmpName = xhr.response[i].name;
      const newEmpInfo = createEmployee();
      obj.employees[newEmpName] = newEmpInfo;

      // Assign random job position
      const randomIndex = Math.floor(Math.random() * uniquePositions.length);
      const randomPosition = uniquePositions[randomIndex];
      obj.employees[newEmpName].position = randomPosition;
      uniquePositions.splice(randomIndex, 1);
    }

    business.totalEmployees = Object.keys(business.employees).length;

  });
  xhr.send();
}

function createEmployee() {

  const weekdays = ['M', 'T', 'W', 'Th', 'F'];
  const workDays = [];
  const numDays = Math.floor(Math.random() * 5) + 1;

  // Random workdays
  while (workDays.length < numDays) {
    const randomDay = weekdays[Math.floor(Math.random() * 5)];
    if (!workDays.includes(randomDay)) {
      workDays.push(randomDay);
    }
  }
  workDays.push('Sat', 'Sun');

  // Set new employee
  const newEmployee = {
    daysOfWeekWorking: workDays,
    fullTime: checkIfFullTime(workDays.length),
  }

  return newEmployee;
}

function checkIfFullTime(numDays) {
  return numDays >= 5;
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees--;
}

window.addEventListener('DOMContentLoaded', (event) => {
  addWeekends(business);

  const employeeNames = Object.keys(business.employees);

  for (const employee of employeeNames) {
    business.employees[employee].fullTime = business.employees[employee].daysOfWeekWorking.length >= 5;
  }
  addEmployees(business);
  deleteEmployee('Gus');
});
