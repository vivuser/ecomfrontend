export const getQueryString = (query = {}) => {
    const queryString = Object.keys(query)
        .reduce((acc, key) => {
            if (acc !== '') {
                acc += '&';
            }
            return acc + `${key}=${encodeURIComponent(query[key])}`;
        }, '');
    return queryString;
};

export const LoadCartCountFromLocalStorage = () => {
    const cartCount = localStorage.getItem('cartCount');
    return cartCount ? JSON.parse(cartCount) : 0;
};

export const LoadCartFromLocalStorage = () => {
    const cartProduct = localStorage.getItem('cartProducts')
    return cartProduct ? JSON.parse(cartProduct) : []
}

export const saveCartToLocalStorage = (cartCount, cartProducts) => {
    localStorage.setItem('cartCount', JSON.stringify(cartCount));
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
}

export const dataNew=
[
    {
      "taskId": 1,
      "taskName": "Complete Monthly Report",
      "description": "Prepare and finalize the monthly performance report for the sales department, including all key metrics and trends.",
      "dueDate": "2024-12-05",
      "priority": "High",
      "status": "In Progress",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Collect Sales Data",
          "status": "Completed"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Analyze Key Metrics",
          "status": "In Progress"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Create Visuals and Charts",
          "status": "Pending"
        },
        {
          "subTaskId": 4,
          "subTaskName": "Draft Report Content",
          "status": "Pending"
        }
      ]
    },
    {
      "taskId": 2,
      "taskName": "Team Meeting",
      "description": "Organize and lead the weekly team meeting to discuss ongoing projects and upcoming deadlines.",
      "dueDate": "2024-12-03",
      "priority": "Medium",
      "status": "Scheduled",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Send Meeting Invite",
          "status": "Completed"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Prepare Agenda",
          "status": "In Progress"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Gather Team Updates",
          "status": "Pending"
        }
      ]
    },
    {
      "taskId": 3,
      "taskName": "Update Website",
      "description": "Review the current website content and update it with the latest product information and promotions.",
      "dueDate": "2024-12-10",
      "priority": "Low",
      "status": "Not Started",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Review Current Content",
          "status": "Pending"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Update Product Listings",
          "status": "Pending"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Add New Promotions",
          "status": "Pending"
        }
      ]
    },
    {
      "taskId": 4,
      "taskName": "Client Presentation",
      "description": "Prepare and deliver a presentation to the client showcasing our product's new features and benefits.",
      "dueDate": "2024-12-07",
      "priority": "High",
      "status": "In Progress",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Create Presentation Slides",
          "status": "In Progress"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Rehearse Presentation",
          "status": "Pending"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Send Presentation to Client",
          "status": "Pending"
        }
      ]
    },
    {
      "taskId": 5,
      "taskName": "Budget Review",
      "description": "Review the current budget and analyze the expenses for the quarter, proposing any necessary adjustments.",
      "dueDate": "2024-12-12",
      "priority": "Medium",
      "status": "Not Started",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Collect Expense Reports",
          "status": "Pending"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Analyze Monthly Spending",
          "status": "Pending"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Identify Areas for Adjustment",
          "status": "Pending"
        }
      ]
    },
    {
      "taskId": 6,
      "taskName": "Employee Training",
      "description": "Conduct training sessions for new employees on company policies, tools, and workflow procedures.",
      "dueDate": "2024-12-15",
      "priority": "High",
      "status": "Scheduled",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Prepare Training Materials",
          "status": "Pending"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Schedule Training Sessions",
          "status": "Pending"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Conduct Training",
          "status": "Pending"
        }
      ]
    },
    {
      "taskId": 7,
      "taskName": "Data Backup",
      "description": "Ensure that all critical company data is backed up to prevent any data loss during the system upgrade.",
      "dueDate": "2024-12-06",
      "priority": "High",
      "status": "Pending",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Verify Backup System",
          "status": "Pending"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Perform Data Backup",
          "status": "Pending"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Confirm Backup Completion",
          "status": "Pending"
        }
      ]
    },
    {
      "taskId": 8,
      "taskName": "Marketing Campaign Planning",
      "description": "Create a detailed plan for the upcoming marketing campaign, including target audience, strategy, and timeline.",
      "dueDate": "2024-12-20",
      "priority": "Medium",
      "status": "Not Started",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Research Target Audience",
          "status": "Pending"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Define Campaign Goals",
          "status": "Pending"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Create Campaign Timeline",
          "status": "Pending"
        }
      ]
    },
    {
      "taskId": 9,
      "taskName": "Customer Feedback Analysis",
      "description": "Analyze recent customer feedback to identify common issues and improve product quality.",
      "dueDate": "2024-12-08",
      "priority": "Low",
      "status": "In Progress",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Collect Feedback Data",
          "status": "In Progress"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Categorize Feedback",
          "status": "Pending"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Identify Key Issues",
          "status": "Pending"
        }
      ]
    },
    {
      "taskId": 10,
      "taskName": "Product Prototype Testing",
      "description": "Test the new product prototype with selected users and collect feedback for future revisions.",
      "dueDate": "2024-12-18",
      "priority": "High",
      "status": "Scheduled",
      "subTasks": [
        {
          "subTaskId": 1,
          "subTaskName": "Select Test Users",
          "status": "Pending"
        },
        {
          "subTaskId": 2,
          "subTaskName": "Prepare Testing Materials",
          "status": "Pending"
        },
        {
          "subTaskId": 3,
          "subTaskName": "Conduct User Testing",
          "status": "Pending"
        }
      ]
    }
  ]
  