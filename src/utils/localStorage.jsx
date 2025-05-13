

const employees = [
  {
    "id": 1,
    "firstName": "Aarav", // Added first name
    "email": "employee1@example.com",
    "password": "free",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Prepare sales report",
        "description": "Compile Q1 sales data into report format.",
        "date": "2025-04-20",
        "category": "Sales",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
      
      },
      {
        "title": "Team meeting",
        "description": "Attend project kickoff with marketing team.",
        "date": "2025-04-22",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskNumber": {
          "active": 0,
          "newTask": 0,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "title": "Client follow-up",
        "description": "Send proposal updates to client X.",
        "date": "2025-04-21",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskNumber": {
          "active": 1,
          "newTask": 0,
          "completed": 0,
          "failed": 0
        }
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Isha", // Added first name
    "email": "employee2@example.com",
    "password": "free",
    "taskNumber": {
      "active": 0,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Database migration",
        "description": "Move data from old server to AWS.",
        "date": "2025-04-19",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
       },
      {
        "title": "Bug fixing",
        "description": "Fix login issue on mobile app.",
        "date": "2025-04-20",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
      },
      {
        "title": "Code review",
        "description": "Review merge request #52.",
        "date": "2025-04-22",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Priya", // Added first name
    "email": "employee3@example.com",
    "password": "free",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Design wireframes",
        "description": "Create mockups for landing page.",
        "date": "2025-04-23",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
      },
      {
        "title": "Team sync-up",
        "description": "Weekly team catch-up.",
        "date": "2025-04-21",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
      },
      {
        "title": "Customer feedback analysis",
        "description": "Summarize insights from last survey.",
        "date": "2025-04-20",
        "category": "Analytics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
      },
      {
        "title": "Draft newsletter",
        "description": "Prepare content for April newsletter.",
        "date": "2025-04-24",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Ravi", // Added first name
    "email": "employee4@example.com",
    "password": "free",
    "taskNumber": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Inventory check",
        "description": "Verify stock levels in warehouse.",
        "date": "2025-04-20",
        "category": "Operations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,

      },
      {
        "title": "Vendor meeting",
        "description": "Discuss supply terms for Q2.",
        "date": "2025-04-21",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
      },
      {
        "title": "Update inventory software",
        "description": "Patch bugs in item tracking module.",
        "date": "2025-04-23",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Neha", // Added first name
    "email": "employee5@example.com",
    "password": "free",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Social media campaign",
        "description": "Launch Instagram ad for new product.",
        "date": "2025-04-22",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
      },
      {
        "title": "Product feedback",
        "description": "Collect user feedback via form.",
        "date": "2025-04-20",
        "category": "Customer Success",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
      },
      {
        "title": "Blog article draft",
        "description": "Write post on team productivity tips.",
        "date": "2025-04-24",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    "firstName": "Admin Sir",
    "email": "admin@example.com",
    "password": "free"
  }
];


export const setLocalStorage = () => {
           localStorage.setItem('employees',JSON.stringify(employees))
           localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
       const employees =   JSON.parse(localStorage.getItem('employees'))
       const admin =   JSON.parse(localStorage.getItem('admin'))
        return {employees,admin}
}


