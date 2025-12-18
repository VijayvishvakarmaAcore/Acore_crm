// import React from 'react';
// import TreeView from './TreeView';

// const Sidebar = ({ role, currentPage, onNavigate }) => {
//   const baseMenu = [
//     {
//       id: 'dashboard',
//       icon: '📊',
//       label: 'Dashboard',
//       selected: currentPage === 'dashboard',
//       onClick: () => onNavigate('dashboard')
//     },
//     {
//       id: 'employees',
//       icon: '👥',
//       label: 'Employees',
//       selected: currentPage === 'employees',
//       onClick: () => onNavigate('employees')
//     },
//     {
//       id: 'tracking',
//       icon: '📡',
//       label: 'Live Tracking',
//       selected: currentPage === 'tracking',
//       onClick: () => onNavigate('tracking')
//     },
//     {
//       id: 'attendance',
//       icon: '📅',
//       label: 'Attendance',
//       selected: currentPage === 'attendance',
//       onClick: () => onNavigate('attendance')
//     }
//   ];

//   const bossMenu = [
//     {
//       id: 'reports',
//       icon: '📈',
//       label: 'Reports',
//       children: [
//         { id: 'reports-weekly', icon: '📊', label: 'Weekly Report', onClick: () => onNavigate('reports-weekly') },
//         { id: 'reports-monthly', icon: '📆', label: 'Monthly Report', onClick: () => onNavigate('reports-monthly') }
//       ]
//     },
//     {
//       id: 'settings',
//       icon: '⚙️',
//       label: 'Settings',
//       children: [
//         { id: 'settings-general', icon: '🔧', label: 'General', onClick: () => onNavigate('settings-general') },
//         { id: 'settings-users', icon: '👤', label: 'User Management', onClick: () => onNavigate('settings-users') }
//       ]
//     }
//   ];

//   const treeData = role === 'Boss' ? [...baseMenu, ...bossMenu] : baseMenu;

//   return (
//     <aside className="sidebar">
//       <div className="sidebar-header">
//         <h2>🏢 ACORE IT</h2>
//         <span className="role-badge">{role}</span>
//       </div>
//       <nav className="sidebar-nav">
//         <TreeView data={treeData} />
//       </nav>
//       <div className="sidebar-footer">
//         <p>© 2024 ACORE IT</p>
//         <p>Version 1.0.0</p>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;




// import React, { useState } from 'react';
// import TreeView from './TreeView';
// import './Sidebar.css'; // CSS file import

// const Sidebar = ({ role, currentPage, onNavigate }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const baseMenu = [
//     {
//       id: 'dashboard',
//       icon: '📊',
//       label: 'Dashboard',
//       selected: currentPage === 'dashboard',
//       onClick: () => onNavigate('dashboard')
//     },
//     {
//       id: 'employees',
//       icon: '👥',
//       label: 'Employees',
//       selected: currentPage === 'employees',
//       onClick: () => onNavigate('employees')
//     },
//     {
//       id: 'tracking',
//       icon: '📡',
//       label: 'Live Tracking',
//       selected: currentPage === 'tracking',
//       onClick: () => onNavigate('tracking')
//     },
//     {
//       id: 'attendance',
//       icon: '📅',
//       label: 'Attendance',
//       selected: currentPage === 'attendance',
//       onClick: () => onNavigate('attendance')
//     }
//   ];

//   const bossMenu = [
//     {
//       id: 'reports',
//       icon: '📈',
//       label: 'Reports',
//       children: [
//         { id: 'reports-weekly', icon: '📊', label: 'Weekly Report', onClick: () => onNavigate('reports-weekly') },
//         { id: 'reports-monthly', icon: '📆', label: 'Monthly Report', onClick: () => onNavigate('reports-monthly') }
//       ]
//     },
//     {
//       id: 'settings',
//       icon: '⚙️',
//       label: 'Settings',
//       children: [
//         { id: 'settings-general', icon: '🔧', label: 'General', onClick: () => onNavigate('settings-general') },
//         { id: 'settings-users', icon: '👤', label: 'User Management', onClick: () => onNavigate('settings-users') }
//       ]
//     }
//   ];

//   const treeData = role === 'Boss' ? [...baseMenu, ...bossMenu] : baseMenu;

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Agar sidebar closed hai to sirf toggle button dikhao
//   if (!isOpen) {
//     return (
//       <div style={{
//         position: 'fixed',
//         top: '15px',
//         left: '15px',
//         zIndex: '1000'
//       }}>
//         <button 
//           onClick={toggleSidebar}
//           title="Open sidebar"
//           style={{
//             width: '40px',
//             height: '40px',
//             background: '#1e293b',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             fontSize: '20px',
//             cursor: 'pointer',
//             boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//             transition: 'all 0.3s ease'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.background = '#3b82f6';
//             e.target.style.transform = 'scale(1.05)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = '#1e293b';
//             e.target.style.transform = 'scale(1)';
//           }}
//         >
//           ☰
//         </button>
//       </div>
//     );
//   }

//   return (
//     <aside style={{
//       position: 'fixed',
//       left: '0',
//       top: '0',
//       width: '250px',
//       height: '100vh',
//       background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
//       color: 'white',
//       zIndex: '1000',
//       boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
//       display: 'flex',
//       flexDirection: 'column'
//     }}>
//       {/* Header section me toggle button */}
//       <div style={{
//         padding: '20px 15px',
//         borderBottom: '1px solid #334155'
//       }}>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '10px'
//         }}>
//           <h2 style={{ margin: '0', fontSize: '18px' }}>🏢 ACORE IT</h2>
//           <button 
//             onClick={toggleSidebar}
//             title="Close sidebar"
//             style={{
//               background: 'none',
//               border: 'none',
//               color: '#94a3b8',
//               fontSize: '24px',
//               cursor: 'pointer',
//               width: '30px',
//               height: '30px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: '4px',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255,255,255,0.1)';
//               e.target.style.color = 'white';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'none';
//               e.target.style.color = '#94a3b8';
//             }}
//           >
//             ×
//           </button>
//         </div>
//         <span style={{
//           background: '#3b82f6',
//           padding: '4px 8px',
//           borderRadius: '4px',
//           fontSize: '12px',
//           fontWeight: '500'
//         }}>{role}</span>
//       </div>
      
//       <nav style={{
//         padding: '15px',
//         flexGrow: '1'
//       }}>
//         <TreeView data={treeData} />
//       </nav>
      
//       <div style={{
//         padding: '15px',
//         borderTop: '1px solid #334155',
//         fontSize: '12px',
//         color: '#94a3b8'
//       }}>
//         <p style={{ margin: '0 0 5px 0' }}>© 2024 ACORE IT</p>
//         <p style={{ margin: '0' }}>Version 1.0.0</p>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;




//++++++++


import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ role, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Navigation data with emoji icons
  const baseMenu = [
    {
      id: 'dashboard',
      icon: '📊',
      label: 'Dashboard',
      selected: currentPage === 'dashboard',
      onClick: () => onNavigate('dashboard')
    },
    {
      id: 'employees',
      icon: '👥',
      label: 'Employees',
      selected: currentPage === 'employees',
      onClick: () => onNavigate('employees')
    },
    {
      id: 'tracking',
      icon: '📍',
      label: 'Live Tracking',
      selected: currentPage === 'tracking',
      onClick: () => onNavigate('tracking')
    },
    {
      id: 'attendance',
      icon: '📅',
      label: 'Attendance',
      selected: currentPage === 'attendance',
      onClick: () => onNavigate('attendance')
    },

      {
    id: 'projects',
    icon: '📋',
    label: 'Projects',
    selected: currentPage === 'projects',
    onClick: () => onNavigate('projects')
  },
     {
    id: 'tasks',  // ✅ CHANGE FROM 'task' TO 'tasks'
    icon: '✓',    // ✅ ADD ICON
    label: 'Tasks',
    selected: currentPage === 'tasks',  // ✅ CHANGE FROM 'task' TO 'tasks'
    onClick: () => onNavigate('tasks')  // ✅ CHANGE FROM 'task' TO 'tasks'
  }
    
  ];

  const bossMenu = [
    {
      id: 'reports',
      icon: '📈',
      label: 'Reports',
      children: [
        { id: 'reports-weekly', icon: '📊', label: 'Weekly Report', onClick: () => onNavigate('reports-weekly') },
        { id: 'reports-monthly', icon: '📆', label: 'Monthly Report', onClick: () => onNavigate('reports-monthly') }
      ]
    },
    {
      id: 'settings',
      icon: '⚙️',
      label: 'Settings',
      children: [
        { id: 'settings-general', icon: '🔧', label: 'General', onClick: () => onNavigate('settings-general') },
        { id: 'settings-users', icon: '👤', label: 'User Management', onClick: () => onNavigate('settings-users') }
      ]
    }
  ];

  const menuData = role === 'Boss' ? [...baseMenu, ...bossMenu] : baseMenu;

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Toggle collapsed state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Handle mouse enter on sidebar
  const handleSidebarMouseEnter = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
  };

  // Handle mouse leave from sidebar
  const handleSidebarMouseLeave = () => {
    if (!isCollapsed) {
      setTimeout(() => {
        setIsCollapsed(true);
      }, 500); // 0.5 second delay
    }
  };

  // Handle item hover
  const handleItemHover = (itemId) => {
    setHoveredItem(itemId);
  };

  // Handle item leave
  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  // If sidebar is completely closed, show minimal toggle button
  if (!isOpen) {
    return (
      <div className="sidebar-closed-container">
        <button 
          onClick={toggleSidebar}
          title="Open Sidebar"
          className="sidebar-closed-toggle"
        >
          ☰
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`sidebar-wrapper ${isCollapsed ? 'collapsed' : ''}`}
      onMouseEnter={handleSidebarMouseEnter}
      onMouseLeave={handleSidebarMouseLeave}
    >
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div className="header-top">
            <div className="logo-container">
              <span className="company-logo">🏢</span>
              <div className="company-info">
                <h2>ACORE IT</h2>
                <span className="role-badge">{role}</span>
              </div>
            </div>
            <button 
              onClick={toggleSidebar}
              title="Close Sidebar"
              className="close-sidebar-btn"
            >
              ×
            </button>
          </div>
          
          <button 
            onClick={toggleCollapse}
            className="collapse-toggle-btn"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? '▶' : '◀'}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-menu">
            {menuData.map((item) => (
              <li 
                key={item.id}
                className={`nav-item ${item.selected ? 'selected' : ''} ${hoveredItem === item.id ? 'hovered' : ''}`}
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={handleItemLeave}
                onClick={item.onClick}
              >
                <div className="nav-icon">
                  <span className="icon-emoji">{item.icon}</span>
                </div>
                {!isCollapsed && (
                  <div className="nav-content">
                    <span className="nav-label">{item.label}</span>
                    {item.children && (
                      <span className="chevron-icon">›</span>
                    )}
                  </div>
                )}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="nav-tooltip">
                    {item.label}
                    {item.children && ' ›'}
                  </div>
                )}
                
                {/* Submenu */}
                {item.children && !isCollapsed && (
                  <ul className="submenu">
                    {item.children.map((child) => (
                      <li 
                        key={child.id}
                        className="submenu-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          child.onClick();
                        }}
                      >
                        <div className="submenu-icon">{child.icon}</div>
                        <span>{child.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer */}
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">
              {role.charAt(0)}
            </div>
            {!isCollapsed && (
              <div className="user-info">
                <p className="user-name">{role} User</p>
                <p className="user-email">user@acoreit.com</p>
              </div>
            )}
          </div>
          <div className="footer-bottom">
            <p>© 2024 ACORE IT</p>
            <p className="version">v1.0.0</p>
          </div>
        </div>
      </aside>
      
      {/* Overlay for mobile/tablet */}
      <div 
        className="sidebar-overlay" 
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default Sidebar;