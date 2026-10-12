const employees = [
  // Engineering - 5
  {
    id: 1,
    name: "Arjun Reddy",
    email: "arjun.reddy@workzen.com",
    phone: "9876543210",
    role: "Frontend Developer",
    department: "Engineering",
    salary: 65000,
    status: "Active",
    joiningDate: "2024-02-15"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@workzen.com",
    phone: "9876543211",
    role: "Backend Developer",
    department: "Engineering",
    salary: 72000,
    status: "Active",
    joiningDate: "2023-11-20"
  },
  {
    id: 3,
    name: "Rahul Kumar",
    email: "rahul.kumar@workzen.com",
    phone: "9876543212",
    role: "Full Stack Developer",
    department: "Engineering",
    salary: 80000,
    status: "Active",
    joiningDate: "2023-08-10"
  },
  {
    id: 4,
    name: "Sanjay Rao",
    email: "sanjay.rao@workzen.com",
    phone: "9876543213",
    role: "DevOps Engineer",
    department: "Engineering",
    salary: 78000,
    status: "Active",
    joiningDate: "2023-10-02"
  },
  {
    id: 5,
    name: "Lakshmi Devi",
    email: "lakshmi.devi@workzen.com",
    phone: "9876543214",
    role: "QA Engineer",
    department: "Engineering",
    salary: 60000,
    status: "Inactive",
    joiningDate: "2024-06-17"
  },

  // Marketing - 3
  {
    id: 6,
    name: "Aditya Mehta",
    email: "aditya.mehta@workzen.com",
    phone: "9876543215",
    role: "Marketing Manager",
    department: "Marketing",
    salary: 68000,
    status: "Active",
    joiningDate: "2022-11-14"
  },
  {
    id: 7,
    name: "Pooja Nair",
    email: "pooja.nair@workzen.com",
    phone: "9876543216",
    role: "Content Strategist",
    department: "Marketing",
    salary: 52000,
    status: "Active",
    joiningDate: "2024-04-08"
  },
  {
    id: 8,
    name: "Rohit Das",
    email: "rohit.das@workzen.com",
    phone: "9876543217",
    role: "SEO Specialist",
    department: "Marketing",
    salary: 50000,
    status: "Inactive",
    joiningDate: "2023-05-19"
  },

  // HR - 2
  {
    id: 9,
    name: "Ananya Rao",
    email: "ananya.rao@workzen.com",
    phone: "9876543218",
    role: "HR Manager",
    department: "HR",
    salary: 70000,
    status: "Active",
    joiningDate: "2022-06-12"
  },
  {
    id: 10,
    name: "Karthik Varma",
    email: "karthik.varma@workzen.com",
    phone: "9876543219",
    role: "HR Executive",
    department: "HR",
    salary: 45000,
    status: "Active",
    joiningDate: "2024-03-22"
  },

  // Finance - 3
  {
    id: 11,
    name: "Neha Kapoor",
    email: "neha.kapoor@workzen.com",
    phone: "9876543220",
    role: "Finance Manager",
    department: "Finance",
    salary: 75000,
    status: "Active",
    joiningDate: "2022-04-25"
  },
  {
    id: 12,
    name: "Suresh Babu",
    email: "suresh.babu@workzen.com",
    phone: "9876543221",
    role: "Accountant",
    department: "Finance",
    salary: 48000,
    status: "Active",
    joiningDate: "2023-07-11"
  },
  {
    id: 13,
    name: "Divya Menon",
    email: "divya.menon@workzen.com",
    phone: "9876543222",
    role: "Financial Analyst",
    department: "Finance",
    salary: 56000,
    status: "Active",
    joiningDate: "2024-02-01"
  },

  // Sales - 2
  {
    id: 14,
    name: "Manoj Kumar",
    email: "manoj.kumar@workzen.com",
    phone: "9876543223",
    role: "Sales Manager",
    department: "Sales",
    salary: 70000,
    status: "Active",
    joiningDate: "2022-08-16"
  },
  {
    id: 15,
    name: "Ishita Gupta",
    email: "ishita.gupta@workzen.com",
    phone: "9876543224",
    role: "Sales Executive",
    department: "Sales",
    salary: 45000,
    status: "Active",
    joiningDate: "2024-05-10"
  }
];
const employeesCount = employees.length;
const Departments = new Set(employees.map((employee) => employee.department));
const ActiveEmployees = employees.filter((employee) => employee.status === "Active");
const InactiveEmployees = employees.filter((employee) => employee.status === "Inactive");


export {  employees, employeesCount,  Departments, ActiveEmployees, InactiveEmployees, };
