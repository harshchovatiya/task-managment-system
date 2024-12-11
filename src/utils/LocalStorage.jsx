import moment from 'moment';

const employeesData = [
    {
      "id": 101,
      "firstName": "Rajesh",
      "lastName": "Kumar",
      "name": "Rajesh Kumar",
      "username": "rajeshkumar",
      "email": "rajesh@gmail.com", 
      "password": "Rajesh@123",
      "department": "Finance",
      "role": "Financial Analyst",
      "joinDate": moment("2023-01-15").format("MMM D, YYYY"),
      "tasks": [
        {
          "taskTitle": "Prepare monthly report",
          "taskDescription": "Compile the sales and revenue data for the last month.",
          "deadline": moment().add(19, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "Reporting",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "taskTitle": "Team meeting",
          "taskDescription": "Participate in the weekly team sync-up.",
          "deadline": moment().add(17, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "Meetings",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "priority": "Low"
        }
      ],
      "taskCount": {
        "active": 2,
        "new": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": 102,
      "firstName": "Priya",
      "lastName": "Sharma",
      "name": "Priya Sharma",
      "username": "priya.sharma",
      "email": "priya@gmail.com",
      "password": "Priya@123",
      "department": "Human Resources",
      "role": "HR Manager",
      "joinDate": moment("2023-02-01").format("MMM D, YYYY"),
      "tasks": [
        {
          "taskTitle": "Update client database",
          "taskDescription": "Ensure all client contact information is up-to-date.",
          "deadline": moment().add(18, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "Database Management",
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false,
          "priority": "Medium"
        },
        {
          "taskTitle": "Onboard new employee",
          "taskDescription": "Assist with orientation for the new hire.",
          "deadline": moment().add(20, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "HR",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "priority": "High"
        }
      ],
      "taskCount": {
        "active": 1,
        "new": 2,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 103,
      "firstName": "Amit",
      "lastName": "Patel",
      "name": "Amit Patel",
      "username": "amit.patel",
      "email": "amit@gmail.com",
      "password": "Amit@123",
      "department": "Engineering",
      "role": "Software Developer",
      "joinDate": moment("2023-03-15").format("MMM D, YYYY"),
      "tasks": [
        {
          "taskTitle": "Fix website bugs",
          "taskDescription": "Resolve issues reported in the feedback section.",
          "deadline": moment().add(21, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "taskTitle": "Conduct user testing",
          "taskDescription": "Organize and evaluate the outcomes of testing.",
          "deadline": moment().add(23, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "Quality Assurance",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "priority": "Medium"
        }
      ],
      "taskCount": {
        "active": 1,
        "new": 2,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 104,
      "firstName": "Neha",
      "lastName": "Gupta",
      "name": "Neha Gupta",
      "username": "neha.gupta",
      "email": "neha@gmail.com",
      "password": "Neha@123",
      "department": "Design",
      "role": "Senior Designer",
      "joinDate": moment("2023-04-01").format("MMM D, YYYY"),
      "tasks": [
        {
          "taskTitle": "Design logo concepts",
          "taskDescription": "Create three design options for the new brand logo.",
          "deadline": moment().add(25, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "taskTitle": "Prepare client pitch",
          "taskDescription": "Develop a compelling presentation for the upcoming pitch.",
          "deadline": moment().add(19, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "Sales",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "priority": "High"
        }
      ],
      "taskCount": {
        "active": 1,
        "new": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 105,
      "firstName": "Vikram",
      "lastName": "Singh",
      "name": "Vikram Singh",
      "username": "vikram.singh",
      "email": "vikram@gmail.com",
      "password": "Vikram@123",
      "department": "Operations",
      "role": "Operations Manager",
      "joinDate": moment("2023-05-15").format("MMM D, YYYY"),
      "tasks": [
        {
          "taskTitle": "Inventory management",
          "taskDescription": "Check and update the inventory stock levels.",
          "deadline": moment().add(22, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "Operations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "priority": "Medium"
        },
        {
          "taskTitle": "Coordinate vendor meeting",
          "taskDescription": "Set up a meeting with vendors to discuss supply chain issues.",
          "deadline": moment().add(21, 'days').format('YYYY-MM-DD'),
          "assignedDate": moment().format('YYYY-MM-DD'),
          "category": "Logistics",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "priority": "Low"
        }
      ],
      "taskCount": {
        "active": 1,
        "new": 1,
        "completed": 0,
        "failed": 1
      }
    },
];

const adminData = [
    {
      "id": 1,
      "firstName": "Harsh",
      "lastName": "Chovatiya",
      "name": "Harsh Chovatiya",
      "username": "harsh.chovatiya",
      "email": "harshchovatiya16@gmail.com",
      "password": "Harsh@123"
    }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employeesData));
  localStorage.setItem("admin", JSON.stringify(adminData));
};

export const getLocalStorage = () => {
  return {
    employees: JSON.parse(localStorage.getItem("employees")) || employeesData,
    admin: JSON.parse(localStorage.getItem("admin")) || adminData
  };
};
