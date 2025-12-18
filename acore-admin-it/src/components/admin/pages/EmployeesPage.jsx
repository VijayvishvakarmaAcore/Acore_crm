// import React, { useState } from 'react';

// const EmployeesPage = ({ employees: initialEmployees }) => {
//   const [employees, setEmployees] = useState(initialEmployees);
//   const [showForm, setShowForm] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [filterDepartment, setFilterDepartment] = useState('All');
//   const [editingEmployee, setEditingEmployee] = useState(null);
//   const [newEmployee, setNewEmployee] = useState({
//     empId: '',
//     name: '',
//     role: '',
//     department: '',
//     email: '',
//     phone: '',
//     status: 'Active'
//   });

//   // Get unique departments
//   const departments = ['All', ...new Set(initialEmployees.map(emp => emp.department))];

//   const filteredEmployees = employees.filter(emp => {
//     const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           emp.empId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           emp.role.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = filterStatus === 'All' || emp.status === filterStatus;
//     const matchesDepartment = filterDepartment === 'All' || emp.department === filterDepartment;
//     return matchesSearch && matchesStatus && matchesDepartment;
//   });

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this employee?')) {
//       setEmployees(employees.filter(e => e.id !== id));
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditingEmployee(employee);
//     setShowForm(true);
//     setNewEmployee({
//       empId: employee.empId,
//       name: employee.name,
//       role: employee.role,
//       department: employee.department,
//       email: employee.email,
//       phone: employee.phone,
//       status: employee.status
//     });
//   };

//   const handleSave = () => {
//     if (editingEmployee) {
//       // Update existing employee
//       setEmployees(employees.map(emp => 
//         emp.id === editingEmployee.id 
//           ? { ...emp, ...newEmployee, id: emp.id }
//           : emp
//       ));
//       setEditingEmployee(null);
//     } else {
//       // Add new employee
//       const newId = Math.max(...employees.map(e => e.id)) + 1;
//       const newEmp = {
//         id: newId,
//         ...newEmployee,
//         todayHours: 0,
//         weekHours: 0,
//         monthHours: 0,
//         lastActive: 'Just now',
//         joinDate: new Date().toISOString().split('T')[0]
//       };
//       setEmployees([...employees, newEmp]);
//     }
    
//     setShowForm(false);
//     setNewEmployee({
//       empId: '',
//       name: '',
//       role: '',
//       department: '',
//       email: '',
//       phone: '',
//       status: 'Active'
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEmployee(prev => ({ ...prev, [name]: value }));
//   };

//   // Calculate statistics
//   const totalEmployees = employees.length;
//   const activeEmployees = employees.filter(e => e.status === 'Active').length;
//   const engineeringEmployees = employees.filter(e => e.department === 'Engineering').length;

//   return (
//     <div className="page-content">
//       <div className="page-header">
//         <div>
//           <h2 className="page-title">👥 Employees Management</h2>
//           <p className="page-subtitle">Total {totalEmployees} employees • {activeEmployees} active</p>
//         </div>
//         <button 
//           className="btn-primary" 
//           onClick={() => {
//             setShowForm(!showForm);
//             setEditingEmployee(null);
//             setNewEmployee({
//               empId: '',
//               name: '',
//               role: '',
//               department: '',
//               email: '',
//               phone: '',
//               status: 'Active'
//             });
//           }}
//         >
//           {showForm ? '❌ Cancel' : '➕ Add Employee'}
//         </button>
//       </div>

//       {/* Statistics Cards */}
//       <div className="summary-cards">
//         <div className="card">
//           <div className="card-icon">📊</div>
//           <h3>Total Employees</h3>
//           <p className="card-value">{totalEmployees}</p>
//         </div>
//         <div className="card card-success">
//           <div className="card-icon">✅</div>
//           <h3>Active Now</h3>
//           <p className="card-value">{activeEmployees}</p>
//         </div>
//         {/* <div className="card">
//           <div className="card-icon">🏢</div>
//           <h3>Engineering Dept</h3>
//           <p className="card-value">{engineeringEmployees}</p>
//         </div> */}
//         <div className="card card-warning">
//           <div className="card-icon">📅</div>
//           <h3>On Leave</h3>
//           <p className="card-value">{employees.filter(e => e.status === 'On Leave').length}</p>
//         </div>
//       </div>

//       {/* Add/Edit Form */}
//       {showForm && (
//         <div className="form-card">
//           <h3>{editingEmployee ? '✏️ Edit Employee' : '➕ Add New Employee'}</h3>
//           <div className="form-grid">
//             <div className="input-group">
//               <label>Employee ID *</label>
//               <input 
//                 type="text" 
//                 name="empId"
//                 value={newEmployee.empId}
//                 onChange={handleInputChange}
//                 placeholder="EMP001" 
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Full Name *</label>
//               <input 
//                 type="text" 
//                 name="name"
//                 value={newEmployee.name}
//                 onChange={handleInputChange}
//                 placeholder="John Doe" 
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Role *</label>
//               <input 
//                 type="text" 
//                 name="role"
//                 value={newEmployee.role}
//                 onChange={handleInputChange}
//                 placeholder="Software Developer" 
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Department *</label>
//               <select 
//                 name="department"
//                 value={newEmployee.department}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select Department</option>
//                 <option value="Engineering">Engineering</option>
//                 <option value="Design">Design</option>
//                 <option value="Management">Management</option>
//                 <option value="Quality">Quality</option>
//                 <option value="HR">HR</option>
//                 <option value="Marketing">Marketing</option>
//                 <option value="Sales">Sales</option>
//                 <option value="Support">Support</option>
//               </select>
//             </div>
//             <div className="input-group">
//               <label>Email *</label>
//               <input 
//                 type="email" 
//                 name="email"
//                 value={newEmployee.email}
//                 onChange={handleInputChange}
//                 placeholder="john@acore.com" 
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Phone *</label>
//               <input 
//                 type="tel" 
//                 name="phone"
//                 value={newEmployee.phone}
//                 onChange={handleInputChange}
//                 placeholder="9876543210" 
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Status</label>
//               <select 
//                 name="status"
//                 value={newEmployee.status}
//                 onChange={handleInputChange}
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//                 <option value="On Leave">On Leave</option>
//               </select>
//             </div>
//           </div>
//           <div className="form-actions">
//             <button className="btn-primary" onClick={handleSave}>
//               {editingEmployee ? '💾 Update Employee' : '➕ Add Employee'}
//             </button>
//             <button 
//               className="btn-secondary" 
//               onClick={() => {
//                 setShowForm(false);
//                 setEditingEmployee(null);
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Filters */}
//       <div className="filters-row">
//         <div className="search-container">
//           <input 
//             type="text" 
//             className="search-input" 
//             placeholder="🔍 Search by name, ID, or role..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="filter-group">
//           <select 
//             className="filter-select" 
//             value={filterStatus} 
//             onChange={(e) => setFilterStatus(e.target.value)}
//           >
//             <option value="All">All Status</option>
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//             <option value="On Leave">On Leave</option>
//           </select>
//           <select 
//             className="filter-select" 
//             value={filterDepartment} 
//             onChange={(e) => setFilterDepartment(e.target.value)}
//           >
//             <option value="All">All Departments</option>
//             {departments.filter(dept => dept !== 'All').map(dept => (
//               <option key={dept} value={dept}>{dept}</option>
//             ))}
//           </select>
//           <button 
//             className="btn-icon" 
//             onClick={() => {
//               setSearchTerm('');
//               setFilterStatus('All');
//               setFilterDepartment('All');
//             }}
//             title="Clear Filters"
//           >
//             🗑️ Clear
//           </button>
//         </div>
//       </div>

//       {/* Employees Table */}
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Emp ID</th>
//               <th>Name</th>
//               <th>Role</th>
//               <th>Department</th>
//               <th>Status</th>
//               <th>Today Hours</th>
//               <th>Week Hours</th>
//               <th>Month Hours</th>
//               <th>Last Active</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredEmployees.length > 0 ? (
//               filteredEmployees.map(emp => (
//                 <tr key={emp.id}>
//                   <td><strong>{emp.empId}</strong></td>
//                   <td>
//                     <div className="employee-info">
//                       <div className="employee-avatar">{emp.name[0]}</div>
//                       <div>
//                         <div className="employee-name">{emp.name}</div>
//                         <div className="employee-email">{emp.email}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td>{emp.role}</td>
//                   <td>
//                     <span className="dept-badge">{emp.department}</span>
//                   </td>
//                   <td>
//                     <span className={`status-badge ${emp.status.toLowerCase().replace(' ', '-')}`}>
//                       {emp.status}
//                     </span>
//                   </td>
//                   <td className="hours-cell">{emp.todayHours}h</td>
//                   <td className="hours-cell">{emp.weekHours}h</td>
//                   <td className="hours-cell">{emp.monthHours}h</td>
//                   <td>{emp.lastActive}</td>
//                   <td>
//                     <div className="action-buttons">
//                       <button className="btn-icon" title="View Profile" onClick={() => handleEdit(emp)}>
//                         👁️
//                       </button>
//                       <button className="btn-icon" title="Edit" onClick={() => handleEdit(emp)}>
//                         ✏️
//                       </button>
//                       <button className="btn-icon btn-danger" onClick={() => handleDelete(emp.id)} title="Delete">
//                         🗑️
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="10" className="no-data">
//                   <div className="no-data-content">
//                     <span className="no-data-icon">👥</span>
//                     <h4>No employees found</h4>
//                     <p>Try changing your search or filters</p>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className="table-footer">
//         Showing {filteredEmployees.length} of {employees.length} employees
//         {searchTerm && ` • Search: "${searchTerm}"`}
//       </div>

//       <style jsx>{`
//         .page-subtitle {
//           color: #94a3b8;
//           font-size: 14px;
//           margin-top: 4px;
//         }
        
//         .filter-group {
//           display: flex;
//           gap: 12px;
//           align-items: center;
//         }
        
//         .employee-info {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }
        
//         .employee-avatar {
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           background: #3b82f6;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 600;
//           color: white;
//           flex-shrink: 0;
//         }
        
//         .employee-name {
//           font-weight: 500;
//           color: #f1f5f9;
//         }
        
//         .employee-email {
//           font-size: 12px;
//           color: #94a3b8;
//         }
        
//         .dept-badge {
//           background: rgba(59, 130, 246, 0.1);
//           color: #3b82f6;
//           padding: 4px 12px;
//           border-radius: 12px;
//           font-size: 12px;
//           font-weight: 500;
//         }
        
//         .hours-cell {
//           font-weight: 600;
//           color: #f1f5f9;
//         }
        
//         .action-buttons {
//           display: flex;
//           gap: 4px;
//         }
        
//         .btn-danger {
//           color: #ef4444;
//         }
        
//         .btn-secondary {
//           background: #334155;
//           color: white;
//           border: none;
//           padding: 10px 20px;
//           border-radius: 6px;
//           cursor: pointer;
//           font-size: 14px;
//           font-weight: 500;
//           transition: background 0.2s;
//         }
        
//         .btn-secondary:hover {
//           background: #475569;
//         }
        
//         .form-actions {
//           display: flex;
//           gap: 12px;
//           margin-top: 20px;
//         }
        
//         .no-data {
//           text-align: center;
//           padding: 40px;
//         }
        
//         .no-data-content {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 12px;
//         }
        
//         .no-data-icon {
//           font-size: 48px;
//           opacity: 0.5;
//         }
        
//         .no-data h4 {
//           color: #f1f5f9;
//           margin: 0;
//         }
        
//         .no-data p {
//           color: #94a3b8;
//           margin: 0;
//         }
        
//         @media (max-width: 768px) {
//           .filters-row {
//             flex-direction: column;
//             align-items: stretch;
//           }
          
//           .filter-group {
//             flex-wrap: wrap;
//           }
          
//           .action-buttons {
//             flex-direction: column;
//             gap: 8px;
//           }
          
//           .employee-info {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 8px;
//           }
          
//           .form-actions {
//             flex-direction: column;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EmployeesPage;







import React, { useState, useEffect } from 'react';

// Employee Activity Modal Component
const EmployeeActivityModal = ({ employee, onClose, isOpen }) => {
  const [timeframe, setTimeframe] = useState('week');
  const [activityData, setActivityData] = useState([]);

  // Mock activity data for different timeframes
  const mockWeeklyData = [
    { day: 'Mon', hours: 8, tasks: 12 },
    { day: 'Tue', hours: 7.5, tasks: 10 },
    { day: 'Wed', hours: 8.5, tasks: 14 },
    { day: 'Thu', hours: 8, tasks: 11 },
    { day: 'Fri', hours: 6.5, tasks: 8 },
    { day: 'Sat', hours: 4, tasks: 5 },
    { day: 'Sun', hours: 0, tasks: 0 }
  ];

  const mockMonthlyData = [
    { week: 'Week 1', hours: 40, tasks: 50 },
    { week: 'Week 2', hours: 38, tasks: 48 },
    { week: 'Week 3', hours: 42, tasks: 52 },
    { week: 'Week 4', hours: 35, tasks: 45 }
  ];

  const mockDailyLogs = [
    { time: '09:00 AM', activity: 'Logged in', project: 'Project Alpha' },
    { time: '09:15 AM', activity: 'Daily Standup', project: 'Team Meeting' },
    { time: '10:00 AM', activity: 'Code Review', project: 'Project Alpha' },
    { time: '11:30 AM', activity: 'Feature Development', project: 'Project Beta' },
    { time: '01:00 PM', activity: 'Lunch Break', project: 'Break' },
    { time: '02:00 PM', activity: 'Bug Fixing', project: 'Project Alpha' },
    { time: '04:30 PM', activity: 'Client Meeting', project: 'Project Gamma' },
    { time: '06:00 PM', activity: 'Logged out', project: 'System' }
  ];

  useEffect(() => {
    if (timeframe === 'week') {
      setActivityData(mockWeeklyData);
    } else {
      setActivityData(mockMonthlyData);
    }
  }, [timeframe]);

  if (!isOpen) return null;

  // Calculate stats
  const totalHours = activityData.reduce((sum, item) => sum + item.hours, 0);
  const avgHoursPerDay = timeframe === 'week' ? (totalHours / 7).toFixed(1) : (totalHours / 4).toFixed(1);
  const maxHours = Math.max(...activityData.map(item => item.hours));

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>👤 {employee.name}'s Activity Details</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="employee-profile-header">
          <div className="profile-avatar-large">{employee.name[0]}</div>
          <div className="profile-info">
            <h3>{employee.name}</h3>
            <p>{employee.role} • {employee.department}</p>
            <div className="profile-meta">
              <span>🆔 {employee.empId}</span>
              <span>📧 {employee.email}</span>
              <span>📱 {employee.phone}</span>
              <span className={`status-badge ${employee.status.toLowerCase().replace(' ', '-')}`}>
                {employee.status}
              </span>
            </div>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="timeframe-selector">
          <button 
            className={`timeframe-btn ${timeframe === 'week' ? 'active' : ''}`}
            onClick={() => setTimeframe('week')}
          >
            📅 Weekly View
          </button>
          <button 
            className={`timeframe-btn ${timeframe === 'month' ? 'active' : ''}`}
            onClick={() => setTimeframe('month')}
          >
            📊 Monthly View
          </button>
        </div>

        {/* Stats Cards */}
        <div className="activity-stats">
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h4>Total Hours</h4>
              <p className="stat-value">{totalHours}h</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <h4>Avg. Daily Hours</h4>
              <p className="stat-value">{avgHoursPerDay}h</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <h4>Peak Performance</h4>
              <p className="stat-value">{maxHours}h</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h4>Tasks Completed</h4>
              <p className="stat-value">{activityData.reduce((sum, item) => sum + (item.tasks || 0), 0)}</p>
            </div>
          </div>
        </div>

        {/* Activity Graph */}
        <div className="activity-graph-section">
          <h3 style={{marginBottom:"50px"}}>⏰ Hours Worked ({timeframe === 'week' ? 'This Week' : 'This Month'})</h3>
          <div className="activity-graph">
            {activityData.map((item, index) => (
              <div key={index} className="graph-bar-container">
                <div className="graph-bar-label">{timeframe === 'week' ? item.day : item.week}</div>
                <div className="graph-bar-background">
                  <div 
                    className="graph-bar-fill"
                    style={{ height: `${(item.hours / maxHours) * 100}%` }}
                    title={`${item.hours} hours`}
                  ></div>
                </div>
                <div className="graph-bar-value">{item.hours}h</div>
                {item.tasks && <div className="graph-bar-tasks">{item.tasks} tasks</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Log */}
        {/* <div className="activity-log-section">
          <h3>📝 Today's Activity Log</h3>
          <div className="activity-log">
            {mockDailyLogs.map((log, index) => (
              <div key={index} className="log-item">
                <div className="log-time">{log.time}</div>
                <div className="log-dot"></div>
                <div className="log-content">
                  <div className="log-activity">{log.activity}</div>
                  <div className="log-project">{log.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Project Breakdown */}
        <div className="project-breakdown">
          <h3>📂 Project Distribution</h3>
          <div className="projects-grid">
            <div className="project-item">
              <div className="project-icon">🔷</div>
              <div>
                <h4>Project Alpha</h4>
                <p>32 hours • 45 tasks</p>
              </div>
            </div>
            <div className="project-item">
              <div className="project-icon">🔶</div>
              <div>
                <h4>Project Beta</h4>
                <p>18 hours • 22 tasks</p>
              </div>
            </div>
            <div className="project-item">
              <div className="project-icon">🔸</div>
              <div>
                <h4>Project Gamma</h4>
                <p>12 hours • 15 tasks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button className="btn-primary">
            📥 Download Report
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          overflow-y: auto;
        }
        
        .modal-content {
          background: #1e293b;
          border-radius: 15px;
          width: 100%;
          max-width: 1000px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px;
          border-bottom: 1px solid #334155;
        }
        
        .modal-close {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 28px;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        
        .modal-close:hover {
          background: #334155;
        }
        
        .employee-profile-header {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 25px;
          background: rgba(30, 41, 59, 0.5);
          border-bottom: 1px solid #334155;
        }
        
        .profile-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          color: white;
          flex-shrink: 0;
        }
        
        .profile-info h3 {
          margin: 0 0 8px 0;
          font-size: 24px;
        }
        
        .profile-info p {
          margin: 0 0 15px 0;
          color: #94a3b8;
        }
        
        .profile-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 14px;
          color: #cbd5e1;
        }
        
        .timeframe-selector {
          display: flex;
          gap: 10px;
          padding: 20px 25px;
          border-bottom: 1px solid #334155;
        }
        
        .timeframe-btn {
          padding: 10px 20px;
          background: #334155;
          border: 1px solid #475569;
          border-radius: 6px;
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .timeframe-btn.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .activity-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          padding: 25px;
        }
        
        .stat-card {
          background: #0f172a;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          border: 1px solid #334155;
        }
        
        .stat-icon {
          font-size: 24px;
        }
        
        .stat-value {
          font-size: 24px;
          font-weight: bold;
          margin: 5px 0 0 0;
          color: #3b82f6;
        }
        
        .activity-graph-section {
          padding: 25px;
          border-top: 1px solid #334155;
        }
        
        .activity-graph {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          height: 200px;
          margin-top: 20px;
          gap: 15px;
        }
        
        .graph-bar-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        .graph-bar-background {
          width: 100%;
          height: 150px;
          background: #0f172a;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }
        
        .graph-bar-fill {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, #3b82f6, #60a5fa);
          border-radius: 8px 8px 0 0;
          transition: height 0.3s ease;
        }
        
        .graph-bar-value {
          font-weight: 600;
          color: #cbd5e1;
        }
        
        .graph-bar-tasks {
          font-size: 12px;
          color: #94a3b8;
        }
        
        .activity-log-section {
          padding: 25px;
          border-top: 1px solid #334155;
        }
        
        .activity-log {
          margin-top: 20px;
          position: relative;
          padding-left: 30px;
        }
        
        .activity-log::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #334155;
        }
        
        .log-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 20px;
          position: relative;
        }
        
        .log-time {
          width: 80px;
          font-size: 12px;
          color: #94a3b8;
          flex-shrink: 0;
        }
        
        .log-dot {
          width: 12px;
          height: 12px;
          background: #3b82f6;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 2px;
          position: absolute;
          left: -6px;
        }
        
        .log-content {
          flex: 1;
          background: #0f172a;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #334155;
        }
        
        .log-activity {
          font-weight: 500;
          margin-bottom: 5px;
        }
        
        .log-project {
          font-size: 12px;
          color: #94a3b8;
        }
        
        .project-breakdown {
          padding: 25px;
          border-top: 1px solid #334155;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        
        .project-item {
          background: #0f172a;
          padding: 20px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 15px;
          border: 1px solid #334155;
        }
        
        .project-icon {
          font-size: 24px;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 15px;
          padding: 25px;
          border-top: 1px solid #334155;
          background: #0f172a;
          border-radius: 0 0 15px 15px;
        }
        
        @media (max-width: 768px) {
          .modal-content {
            margin: 10px;
          }
          
          .employee-profile-header {
            flex-direction: column;
            text-align: center;
          }
          
          .profile-meta {
            justify-content: center;
          }
          
          .activity-graph {
            flex-direction: column;
            height: auto;
            align-items: stretch;
          }
          
          .graph-bar-container {
            flex-direction: row;
            height: 40px;
          }
          
          .graph-bar-background {
            height: 40px;
            width: auto;
            flex: 1;
          }
          
          .graph-bar-fill {
            height: 100% !important;
            width: var(--width, 50%);
            border-radius: 8px;
          }
          
          .modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

// Main EmployeesPage Component with updates
const EmployeesPage = ({ employees: initialEmployees }) => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showActivityModal, setShowActivityModal] = useState(false);
  
  const [newEmployee, setNewEmployee] = useState({
    empId: '',
    name: '',
    role: '',
    department: '',
    email: '',
    phone: '',
    status: 'Active'
  });

  // Get unique departments
  const departments = ['All', ...new Set(initialEmployees.map(emp => emp.department))];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          emp.empId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          emp.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || emp.status === filterStatus;
    const matchesDepartment = filterDepartment === 'All' || emp.department === filterDepartment;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter(e => e.id !== id));
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
    setNewEmployee({
      empId: employee.empId,
      name: employee.name,
      role: employee.role,
      department: employee.department,
      email: employee.email,
      phone: employee.phone,
      status: employee.status
    });
  };

  const handleViewActivity = (employee) => {
    setSelectedEmployee(employee);
    setShowActivityModal(true);
  };

  const handleSave = () => {
    if (editingEmployee) {
      // Update existing employee
      setEmployees(employees.map(emp => 
        emp.id === editingEmployee.id 
          ? { ...emp, ...newEmployee, id: emp.id }
          : emp
      ));
      setEditingEmployee(null);
    } else {
      // Add new employee
      const newId = Math.max(...employees.map(e => e.id)) + 1;
      const newEmp = {
        id: newId,
        ...newEmployee,
        todayHours: Math.floor(Math.random() * 9) + 4,
        weekHours: Math.floor(Math.random() * 30) + 20,
        monthHours: Math.floor(Math.random() * 160) + 100,
        lastActive: 'Just now',
        joinDate: new Date().toISOString().split('T')[0]
      };
      setEmployees([...employees, newEmp]);
    }
    
    setShowForm(false);
    setNewEmployee({
      empId: '',
      name: '',
      role: '',
      department: '',
      email: '',
      phone: '',
      status: 'Active'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({ ...prev, [name]: value }));
  };

  // Calculate statistics
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(e => e.status === 'Active').length;
  const engineeringEmployees = employees.filter(e => e.department === 'Engineering').length;

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <h2 className="page-title">👥 Employees Management</h2>
          <p className="page-subtitle">Total {totalEmployees} employees • {activeEmployees} active</p>
        </div>
        <button 
          className="btn-primary" 
          onClick={() => {
            setShowForm(!showForm);
            setEditingEmployee(null);
            setNewEmployee({
              empId: '',
              name: '',
              role: '',
              department: '',
              email: '',
              phone: '',
              status: 'Active'
            });
          }}
        >
          {showForm ? '❌ Cancel' : '➕ Add Employee'}
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="summary-cards">
        <div className="card">
          <div className="card-icon">📊</div>
          <h3>Total Employees</h3>
          <p className="card-value">{totalEmployees}</p>
        </div>
        <div className="card card-success">
          <div className="card-icon">✅</div>
          <h3>Active Now</h3>
          <p className="card-value">{activeEmployees}</p>
        </div>
        {/* <div className="card">
          <div className="card-icon">🏢</div>
          <h3>Engineering Dept</h3>
          <p className="card-value">{engineeringEmployees}</p>
        </div> */}
        <div className="card card-warning">
          <div className="card-icon">📅</div>
          <h3>On Leave</h3>
          <p className="card-value">{employees.filter(e => e.status === 'On Leave').length}</p>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="form-card">
          <h3>{editingEmployee ? '✏️ Edit Employee' : '➕ Add New Employee'}</h3>
          <div className="form-grid">
            {/* Form fields remain same */}
            {/* ... */}
          </div>
          <div className="form-actions">
            <button className="btn-primary" onClick={handleSave}>
              {editingEmployee ? '💾 Update Employee' : '➕ Add Employee'}
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => {
                setShowForm(false);
                setEditingEmployee(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="filters-row">
        {/* <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="🔍 Search by name, ID, or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div>

              <select 
            className="filter-select" 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
          </div>


          <div>


               <select 
            className="filter-select" 
            value={filterDepartment} 
            onChange={(e) => setFilterDepartment(e.target.value)}
          >
            <option value="All">All Departments</option>
            {departments.filter(dept => dept !== 'All').map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          </div>


            <button 
            className="btn-icon" 
            onClick={() => {
              setSearchTerm('');
              setFilterStatus('All');
              setFilterDepartment('All');
            }}
            title="Clear Filters"
          >
            🗑️ Clear
          </button>
        </div> */}


        {/* Filters */}

  <div className="search-container" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
    <input 
      type="text" 
      className="search-input" 
      placeholder="🔍 Search by name, ID, or role..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ flex: 1, minWidth: '200px' }}
    />

    <select 
      className="filter-select" 
      value={filterStatus} 
      onChange={(e) => setFilterStatus(e.target.value)}
      style={{ minWidth: '150px' }}
    >
      <option value="All">All Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
      <option value="On Leave">On Leave</option>
    </select>

    <select 
      className="filter-select" 
      value={filterDepartment} 
      onChange={(e) => setFilterDepartment(e.target.value)}
      style={{ minWidth: '150px' }}
    >
      <option value="All">All Departments</option>
      {departments.filter(dept => dept !== 'All').map(dept => (
        <option key={dept} value={dept}>{dept}</option>
      ))}
    </select>

    <button 
      className="btn-icon" 
      onClick={() => {
        setSearchTerm('');
        setFilterStatus('All');
        setFilterDepartment('All');
      }}
      title="Clear Filters"
      style={{ minWidth: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      🗑️ Clear
    </button>
  </div>



        <div>


          
        </div>
        <div className="filter-group">
          {/* <select 
            className="filter-select" 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select> */}
          {/* <select 
            className="filter-select" 
            value={filterDepartment} 
            onChange={(e) => setFilterDepartment(e.target.value)}
          >
            <option value="All">All Departments</option>
            {departments.filter(dept => dept !== 'All').map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select> */}
          {/* <button 
            className="btn-icon" 
            onClick={() => {
              setSearchTerm('');
              setFilterStatus('All');
              setFilterDepartment('All');
            }}
            title="Clear Filters"
          >
            🗑️ Clear
          </button> */}
        </div>
      </div>

      {/* Employees Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
              <th>Today Hours</th>
              <th>Week Hours</th>
              <th>Month Hours</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map(emp => (
                <tr key={emp.id}>
                  <td><strong>{emp.empId}</strong></td>
                  <td>
                    <div className="employee-info">
                      <div className="employee-avatar">{emp.name[0]}</div>
                      <div>
                        <div className="employee-name">{emp.name}</div>
                        <div className="employee-email">{emp.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{emp.role}</td>
                  <td>
                    <span className="dept-badge">{emp.department}</span>
                  </td>
                  <td>
                    <span className={`status-badge ${emp.status.toLowerCase().replace(' ', '-')}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="hours-cell">{emp.todayHours}h</td>
                  <td className="hours-cell">{emp.weekHours}h</td>
                  <td className="hours-cell">{emp.monthHours}h</td>
                  <td>{emp.lastActive}</td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn-icon" 
                        title="View Activity" 
                        onClick={() => handleViewActivity(emp)}
                      >
                        📊
                      </button>
                      <button 
                        className="btn-icon" 
                        title="Edit" 
                        onClick={() => handleEdit(emp)}
                      >
                        ✏️
                      </button>
                      <button 
                        className="btn-icon btn-danger" 
                        onClick={() => handleDelete(emp.id)} 
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="no-data">
                  <div className="no-data-content">
                    <span className="no-data-icon">👥</span>
                    <h4>No employees found</h4>
                    <p>Try changing your search or filters</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        Showing {filteredEmployees.length} of {employees.length} employees
        {searchTerm && ` • Search: "${searchTerm}"`}
      </div>

      {/* Employee Activity Modal */}
      {selectedEmployee && (
        <EmployeeActivityModal
          employee={selectedEmployee}
          isOpen={showActivityModal}
          onClose={() => {
            setShowActivityModal(false);
            setSelectedEmployee(null);
          }}
        />
      )}
    </div>
  );
};

export default EmployeesPage;