
// import React, { useState, useEffect } from 'react';
// import { useAuth } from './hooks/useAuth';
// import  useAttendance  from './hooks/useAttendance';
// import { useToast } from './hooks/useToast';

// // Components
// import Login from './components/auth/Login';
// import Header from './components/common/Header';
// import Toast from './components/common/Toast';
// import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
// // DashboardGrid remove kiya - ab Header ke andar hai

// // Modals
// import AttendanceModal from './components/modals/AttendanceModal';
// import LeaveModal from './components/modals/LeaveModal';
// import BirthdayModal from './components/modals/BirthdayModal';
// import ProfileModal from './components/modals/ProfileModal';
// import CalendarModal from './components/modals/CalendarModal';
// import GithubModal from './components/modals/GithubModal';
// import SalaryModal from './components/modals/SalaryModal';
// import BirthdaySlider from './components/dashboard/BirthdaySlider';

// import './App.css';
// import EmployeeSlider from './components/dashboard/EmployeeSlider';

// function App() {
//   // Authentication
//   const { currentUser, loading: authLoading, login, logout } = useAuth();
  
//   // Attendance
//   const attendance = useAttendance();
  
//   // Toast Notifications
//   const { toast, showToast, hideToast } = useToast();
  
//   // Modal State
//   const [activeModal, setActiveModal] = useState(null);
//   const [leaveLoading, setLeaveLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);

//   // Auto close modal when user logs out
//   useEffect(() => {
//     if (!currentUser) {
//       setActiveModal(null);
//     }
//   }, [currentUser]);

//   // Handle Login
//   const handleLogin = async (email, password) => {
//     try {
//       if (!email || !password) {
//         showToast('❌ Please enter both email and password', 'error');
//         return;
//       }

//       await login(email, password);
//       showToast('✅ Login successful! Welcome to Acore IT Hub', 'success');
//     } catch (error) {
//       showToast('❌ Login failed. Please check your credentials.', 'error');
//     }
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     if (attendance.isPunchedIn) {
//       showToast('⛔ Please punch out before logging out', 'warning');
//       return;
//     }
    
//     if (window.confirm('Are you sure you want to logout?')) {
//       logout();
//       showToast('👋 Logged out successfully!', 'success');
//     }
//   };

//   // Handle Punch In/Out
//   const handlePunch = async () => {
//     try {
//       const result = await attendance.handlePunch();
      
//       if (result.success) {
//         if (result.action === 'in') {
//           showToast('✅ Punched in successfully! Have a productive day.', 'success');
//         } else {
//           showToast('✅ Punched out successfully! See you tomorrow.', 'success');
//           closeModal();
//         }
//       } else {
//         showToast(result.error, 'warning');
//       }
//     } catch (error) {
//       showToast('❌ Error processing attendance', 'error');
//     }
//   };

//   // Handle Leave Application
//   const handleLeaveSubmit = async (formData) => {
//     setLeaveLoading(true);
    
//     try {
//       // Validate form data
//       if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Leave application submitted successfully!', 'success');
//       setActiveModal(null);
//     } catch (error) {
//       showToast('❌ Failed to submit leave application', 'error');
//     } finally {
//       setLeaveLoading(false);
//     }
//   };

//   // Handle GitHub Push
//   const handleGithubPush = async (formData) => {
//     setGithubLoading(true);
    
//     try {
//       // Validate form data
//       if (!formData.repository || !formData.commitMessage) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Code pushed to GitHub successfully!', 'success');
//     } catch (error) {
//       showToast('❌ Failed to push code to GitHub', 'error');
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   // Open Modal
//   const openModal = (modalName) => {
//     setActiveModal(modalName);
//   };

//   // Close Modal
//   const closeModal = () => {
//     setActiveModal(null);
//   };

//   // Render Login Page if not authenticated
//   if (!currentUser) {
//     return (
//       <>
//         <Login onLogin={handleLogin} loading={authLoading} />
//         <Toast toast={toast} onClose={hideToast} />
//       </>
//     );
//   }

//   // Main Dashboard
//   return (
//     <div className="app">
//       <div className="app-container">
//         <Header
//           currentUser={currentUser}
//           onProfileClick={() => openModal('profile')}
//           onLogout={handleLogout}
//           onCardClick={openModal}
//           attendanceStatus={attendance}
//         />

//         {/* ✅ DIRECT ATTENDANCE TRACKER - SIMPLE DIV HATA KAR */}
//         <AttendanceModal
//           attendance={attendance}
//           onPunch={handlePunch}
//         />

//         <AnnouncementSlider />
//          <BirthdaySlider />
//          <EmployeeSlider/>
        

//         {/* Other Modals */}
//         <LeaveModal
//           isOpen={activeModal === 'leave'}
//           onClose={closeModal}
//           onLeaveSubmit={handleLeaveSubmit}
//           loading={leaveLoading}
//         />

//         <BirthdayModal
//           isOpen={activeModal === 'birthday'}
//           onClose={closeModal}
//         />

//         <ProfileModal
//           isOpen={activeModal === 'profile'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <CalendarModal
//           isOpen={activeModal === 'calendar'}
//           onClose={closeModal}
//         />

//         <GithubModal
//           isOpen={activeModal === 'github'}
//           onClose={closeModal}
//           onPushCode={handleGithubPush}
//           loading={githubLoading}
//         />

//         <SalaryModal
//           isOpen={activeModal === 'salary'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <Toast toast={toast} onClose={hideToast} />
//       </div>
//     </div>
//   );
// }

// export default App;










// import React, { useState, useEffect } from 'react';
// import { useAuth } from './hooks/useAuth';
// import useAttendance from './hooks/useAttendance';
// import { useToast } from './hooks/useToast';



// import Swal from "sweetalert2";


// // Components
// import Login from './components/auth/Login';
// import Header from './components/common/Header';
// import Toast from './components/common/Toast';
// import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
// import BirthdaySlider from './components/dashboard/BirthdaySlider';
// import EmployeeSlider from './components/dashboard/EmployeeSlider';

// // Modals
// import AttendanceModal from './components/modals/AttendanceModal';
// import LeaveModal from './components/modals/LeaveModal';
// import BirthdayModal from './components/modals/BirthdayModal';
// import ProfileModal from './components/modals/ProfileModal';
// import CalendarModal from './components/modals/CalendarModal';
// import GithubModal from './components/modals/GithubModal';
// import SalaryModal from './components/modals/SalaryModal';

// import './App.css';

// function App() {
//   // Authentication
//   const { currentUser, loading: authLoading, login, logout } = useAuth();
  
//   // Attendance - CORRECT USAGE
//   const { attendance, punchIn, punchOut } = useAttendance();
  
//   // Toast Notifications
//   const { toast, showToast, hideToast } = useToast();
  
//   // Modal State
//   const [activeModal, setActiveModal] = useState(null);
//   const [leaveLoading, setLeaveLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);

//   // Auto close modal when user logs out
//   useEffect(() => {
//     if (!currentUser) {
//       setActiveModal(null);
//     }
//   }, [currentUser]);

//   // Handle Login
//   const handleLogin = async (email, password) => {
//     try {
//       if (!email || !password) {
//         showToast('❌ Please enter both email and password', 'error');
//         return;
//       }

//       await login(email, password);
//       showToast('✅ Login successful! Welcome to Acore IT Hub', 'success');
//     } catch (error) {
//       showToast('❌ Login failed. Please check your credentials.', 'error');
//     }
//   };

//   // Handle Logout
//   // const handleLogout = () => {
//   //   if (attendance.isPunchedIn) {
//   //     showToast('⛔ Please punch out before logging out', 'warning');
//   //     return;
//   //   }
    
//   //   if (window.confirm('Are you sure you want to logout?')) {
//   //     logout();
//   //     showToast('👋 Logged out successfully!', 'success');
//   //   }
//   // };


//   const handleLogout = () => {
//   Swal.fire({
//     title: "Logout?",
//     text: "Are you sure you want to logout?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, Logout",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       logout();
//       showToast("👋 Logged out successfully!", "success");
//     }
//   });
// };


//   // Handle Punch In/Out - CORRECTED
//   const handlePunch = async () => {
//     try {
//       if (attendance.isPunchedIn) {
//         // Punch out
//         const result = await punchOut();
//         if (result && result.success) {
//           showToast('✅ Punched out successfully! See you tomorrow.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch out failed', 'error');
//         }
//       } else {
//         // Punch in
//         const result = await punchIn();
//         if (result && result.success) {
//           showToast('✅ Punched in successfully! Have a productive day.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch in failed', 'error');
//         }
//       }
//     } catch (error) {
//       showToast('❌ Error processing attendance', 'error');
//       console.error('Punch error:', error);
//     }
//   };

//   // Handle Leave Application
//   const handleLeaveSubmit = async (formData) => {
//     setLeaveLoading(true);
    
//     try {
//       // Validate form data
//       if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Leave application submitted successfully!', 'success');
//       setActiveModal(null);
//     } catch (error) {
//       showToast('❌ Failed to submit leave application', 'error');
//     } finally {
//       setLeaveLoading(false);
//     }
//   };

//   // Handle GitHub Push
//   const handleGithubPush = async (formData) => {
//     setGithubLoading(true);
    
//     try {
//       // Validate form data
//       if (!formData.repository || !formData.commitMessage) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Code pushed to GitHub successfully!', 'success');
//     } catch (error) {
//       showToast('❌ Failed to push code to GitHub', 'error');
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   // Open Modal
//   const openModal = (modalName) => {
//     setActiveModal(modalName);
//   };

//   // Close Modal
//   const closeModal = () => {
//     setActiveModal(null);
//   };

//   // Render Login Page if not authenticated
//   if (!currentUser) {
//     return (
//       <>
//         <Login onLogin={handleLogin} loading={authLoading} />
//         <Toast toast={toast} onClose={hideToast} />
//       </>
//     );
//   }

//   // Main Dashboard
//   return (
//     <div className="app">
//       <div className="app-container">
//         <Header
//           currentUser={currentUser}
//           onProfileClick={() => openModal('profile')}
//           onLogout={handleLogout}
//           onCardClick={openModal}
//           attendanceStatus={attendance}
//         />

//         {/* ✅ ATTENDANCE MODAL */}
//         <AttendanceModal
//           attendance={attendance}
//           onPunch={handlePunch}
//         />

//         <AnnouncementSlider />
//         <BirthdaySlider />
//         <EmployeeSlider/>

//         {/* Other Modals */}
//         <LeaveModal
//           isOpen={activeModal === 'leave'}
//           onClose={closeModal}
//           onLeaveSubmit={handleLeaveSubmit}
//           loading={leaveLoading}
//         />

//         <BirthdayModal
//           isOpen={activeModal === 'birthday'}
//           onClose={closeModal}
//         />

//         <ProfileModal
//           isOpen={activeModal === 'profile'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <CalendarModal
//           isOpen={activeModal === 'calendar'}
//           onClose={closeModal}
//         />

//         <GithubModal
//           isOpen={activeModal === 'github'}
//           onClose={closeModal}
//           onPushCode={handleGithubPush}
//           loading={githubLoading}
//         />

//         <SalaryModal
//           isOpen={activeModal === 'salary'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <Toast toast={toast} onClose={hideToast} />
//       </div>
//     </div>
//   );
// }

// export default App;


// ---------------------------------------->>




// import React, { useState, useEffect } from 'react';
// import { useAuth } from './hooks/useAuth';
// import useAttendance from './hooks/useAttendance';
// import { useToast } from './hooks/useToast';
// import Swal from "sweetalert2";

// // Components
// import Login from './components/auth/Login';
// import Header from './components/common/Header';
// import Toast from './components/common/Toast';
// import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
// import BirthdaySlider from './components/dashboard/BirthdaySlider';
// import EmployeeSlider from './components/dashboard/EmployeeSlider';


// // Modals
// import AttendanceModal from './components/modals/AttendanceModal';
// import LeaveModal from './components/modals/LeaveModal';
// import BirthdayModal from './components/modals/BirthdayModal';
// import ProfileModal from './components/modals/ProfileModal';
// import CalendarModal from './components/modals/CalendarModal';
// import GithubModal from './components/modals/GithubModal';
// import SalaryModal from './components/modals/SalaryModal';
// import DashboardModal from './components/modals/DashboardModal';

// // NEW: Attendance Calendar Modal
// import AttendanceCalendarModal from './components/modals/AttendanceCalendarModal';

// import './App.css';

// function App() {
//   // Authentication
//   const { currentUser, loading: authLoading, login, logout } = useAuth();
  
//   // Attendance - CORRECT USAGE
//   const { attendance, punchIn, punchOut } = useAttendance();
  
//   // Toast Notifications
//   const { toast, showToast, hideToast } = useToast();
  
//   // Modal State
//   const [activeModal, setActiveModal] = useState(null);
//   const [showAttendanceCalendar, setShowAttendanceCalendar] = useState(false); // NEW STATE
//   const [leaveLoading, setLeaveLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);

//   // Auto close modal when user logs out
//   useEffect(() => {
//     if (!currentUser) {
//       setActiveModal(null);
//       setShowAttendanceCalendar(false);
//     }
//   }, [currentUser]);

//   // Handle Login
//   const handleLogin = async (email, password) => {
//     try {
//       if (!email || !password) {
//         showToast('❌ Please enter both email and password', 'error');
//         return;
//       }

//       await login(email, password);
//       showToast('✅ Login successful! Welcome to Acore IT Hub', 'success');
//     } catch (error) {
//       showToast('❌ Login failed. Please check your credentials.', 'error');
//     }
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Logout?",
//       text: "Are you sure you want to logout?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Logout",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         logout();
//         showToast("👋 Logged out successfully!", "success");
//       }
//     });
//   };

//   // Handle Punch In/Out - CORRECTED
//   const handlePunch = async () => {
//     try {
//       if (attendance.isPunchedIn) {
//         // Punch out
//         const result = await punchOut();
//         if (result && result.success) {
//           showToast('✅ Punched out successfully! See you tomorrow.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch out failed', 'error');
//         }
//       } else {
//         // Punch in
//         const result = await punchIn();
//         if (result && result.success) {
//           showToast('✅ Punched in successfully! Have a productive day.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch in failed', 'error');
//         }
//       }
//     } catch (error) {
//       showToast('❌ Error processing attendance', 'error');
//       console.error('Punch error:', error);
//     }
//   };

//   // Handle Leave Application
//   const handleLeaveSubmit = async (formData) => {
//     setLeaveLoading(true);
    
//     try {
//       // Validate form data
//       if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Leave application submitted successfully!', 'success');
//       setActiveModal(null);
//     } catch (error) {
//       showToast('❌ Failed to submit leave application', 'error');
//     } finally {
//       setLeaveLoading(false);
//     }
//   };

//   // Handle GitHub Push
//   const handleGithubPush = async (formData) => {
//     setGithubLoading(true);
    
//     try {
//       // Validate form data
//       if (!formData.repository || !formData.commitMessage) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Code pushed to GitHub successfully!', 'success');
//     } catch (error) {
//       showToast('❌ Failed to push code to GitHub', 'error');
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   // Open Modal - UPDATED to handle attendance calendar
//   // const openModal = (modalName) => {
//   //   if (modalName === 'attendance-calendar') {
//   //     setShowAttendanceCalendar(true);
//   //   } else {
//   //     setActiveModal(modalName);
//   //   }
//   // };


//   const openModal = (modalName) => {
//   if (modalName === 'attendance-calendar') {
//     setShowAttendanceCalendar(true);
//   } else if (modalName === 'dashboard') {
//     setShowDashboard(true);
//   } else {
//     setActiveModal(modalName);
//   }
// };

//   // Close Modal - UPDATED
//   // const closeModal = () => {
//   //   setActiveModal(null);
//   //   setShowAttendanceCalendar(false);
//   // };


//   const closeModal = () => {
//   setActiveModal(null);
//   setShowAttendanceCalendar(false);
//   setShowDashboard(false);
// };

//   // Close Attendance Calendar Only
//   const closeAttendanceCalendar = () => {
//     setShowAttendanceCalendar(false);
//   };

//   // Render Login Page if not authenticated
//   if (!currentUser) {
//     return (
//       <>
//         <Login onLogin={handleLogin} loading={authLoading} />
//         <Toast toast={toast} onClose={hideToast} />
//       </>
//     );
//   }

//   // Main Dashboard
//   return (
//     <div className="app">
//       <div className="app-container">
//         <Header
//           currentUser={currentUser}
//           onProfileClick={() => openModal('profile')}
//           onLogout={handleLogout}
//           onCardClick={openModal} // This will handle all menu clicks including attendance-calendar
//           attendanceStatus={attendance}
//         />

//         {/* ✅ ATTENDANCE MODAL */}
//         <AttendanceModal
//           attendance={attendance}
//           onPunch={handlePunch}
//         />

//         <AnnouncementSlider />
//         <BirthdaySlider />
//         <EmployeeSlider/>

//         {/* NEW: ATTENDANCE CALENDAR MODAL */}
//         <AttendanceCalendarModal
//           isOpen={showAttendanceCalendar}
//           onClose={closeAttendanceCalendar}
//           currentUser={currentUser}
//           attendanceData={attendance}
//         />

//         {/* Other Modals */}
//         <LeaveModal
//           isOpen={activeModal === 'leave'}
//           onClose={closeModal}
//           onLeaveSubmit={handleLeaveSubmit}
//           loading={leaveLoading}
//         />

//         <DashboardModal
//   isOpen={showDashboard}
//   onClose={() => setShowDashboard(false)}
// />

//         <BirthdayModal
//           isOpen={activeModal === 'birthday'}
//           onClose={closeModal}
//         />

//         <ProfileModal
//           isOpen={activeModal === 'profile'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <CalendarModal
//           isOpen={activeModal === 'calendar'}
//           onClose={closeModal}
//         />

//         <GithubModal
//           isOpen={activeModal === 'github'}
//           onClose={closeModal}
//           onPushCode={handleGithubPush}
//           loading={githubLoading}
//         />

//         <SalaryModal
//           isOpen={activeModal === 'salary'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <Toast toast={toast} onClose={hideToast} />
//       </div>
//     </div>
//   );
// }

// export default App;



// dashboard in humberger btn 





// import React, { useState, useEffect } from 'react';
// import { useAuth } from './hooks/useAuth';
// import useAttendance from './hooks/useAttendance';
// import { useToast } from './hooks/useToast';
// import Swal from "sweetalert2";

// // Components
// import Login from './components/auth/Login';
// import Header from './components/common/Header';
// import Toast from './components/common/Toast';
// import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
// import BirthdaySlider from './components/dashboard/BirthdaySlider';
// import EmployeeSlider from './components/dashboard/EmployeeSlider';
// import Dashboard from './components/dashboard/Dashboard'; // NEW: Regular Dashboard Component

// // Modals
// import AttendanceModal from './components/modals/AttendanceModal';
// import LeaveModal from './components/modals/LeaveModal';
// import BirthdayModal from './components/modals/BirthdayModal';
// import ProfileModal from './components/modals/ProfileModal';
// import CalendarModal from './components/modals/CalendarModal';
// import GithubModal from './components/modals/GithubModal';
// import SalaryModal from './components/modals/SalaryModal';
// import AttendanceCalendarModal from './components/modals/AttendanceCalendarModal';

// import './App.css';

// function App() {
//   const { currentUser, loading: authLoading, login, logout } = useAuth();
//   const { attendance, punchIn, punchOut } = useAttendance();
//   const { toast, showToast, hideToast } = useToast();
  
//   // Modal State
//   const [activeModal, setActiveModal] = useState(null);
//   const [showAttendanceCalendar, setShowAttendanceCalendar] = useState(false);
//   const [leaveLoading, setLeaveLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);
//   // [IMPORTANT] Dashboard modal ko remove karo, regular component use karo

//   // Auto close modal when user logs out
//   useEffect(() => {
//     if (!currentUser) {
//       setActiveModal(null);
//       setShowAttendanceCalendar(false);
//     }
//   }, [currentUser]);

//   // Handle Login
//   const handleLogin = async (email, password) => {
//     try {
//       if (!email || !password) {
//         showToast('❌ Please enter both email and password', 'error');
//         return;
//       }

//       await login(email, password);
//       showToast('✅ Login successful! Welcome to Acore IT Hub', 'success');
//     } catch (error) {
//       showToast('❌ Login failed. Please check your credentials.', 'error');
//     }
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Logout?",
//       text: "Are you sure you want to logout?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Logout",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         logout();
//         showToast("👋 Logged out successfully!", "success");
//       }
//     });
//   };

//   // Handle Punch In/Out
//   const handlePunch = async () => {
//     try {
//       if (attendance.isPunchedIn) {
//         const result = await punchOut();
//         if (result && result.success) {
//           showToast('✅ Punched out successfully! See you tomorrow.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch out failed', 'error');
//         }
//       } else {
//         const result = await punchIn();
//         if (result && result.success) {
//           showToast('✅ Punched in successfully! Have a productive day.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch in failed', 'error');
//         }
//       }
//     } catch (error) {
//       showToast('❌ Error processing attendance', 'error');
//       console.error('Punch error:', error);
//     }
//   };

//   // Handle Leave Application
//   const handleLeaveSubmit = async (formData) => {
//     setLeaveLoading(true);
    
//     try {
//       if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Leave application submitted successfully!', 'success');
//       setActiveModal(null);
//     } catch (error) {
//       showToast('❌ Failed to submit leave application', 'error');
//     } finally {
//       setLeaveLoading(false);
//     }
//   };

//   // Handle GitHub Push
//   const handleGithubPush = async (formData) => {
//     setGithubLoading(true);
    
//     try {
//       if (!formData.repository || !formData.commitMessage) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Code pushed to GitHub successfully!', 'success');
//     } catch (error) {
//       showToast('❌ Failed to push code to GitHub', 'error');
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   // Open Modal
//   // const openModal = (modalName) => {
//   //   if (modalName === 'attendance-calendar') {
//   //     setShowAttendanceCalendar(true);
//   //   } else {
//   //     setActiveModal(modalName);
//   //   }
//   // };



//   // Open Modal function mein AttendanceModal handle karo:
// const openModal = (modalName) => {
//   if (modalName === 'attendance-calendar') {
//     setShowAttendanceCalendar(true);
//   } else if (modalName === 'attendance') { // ✅ YEH ADD KARO
//     setActiveModal('attendance'); // Attendance modal ko open karo
//   } else {
//     setActiveModal(modalName);
//   }
// };

//   // Close Modal
//   const closeModal = () => {
//     setActiveModal(null);
//     setShowAttendanceCalendar(false);
//   };

//   // Render Login Page if not authenticated
//   if (!currentUser) {
//     return (
//       <>
//         <Login onLogin={handleLogin} loading={authLoading} />
//         <Toast toast={toast} onClose={hideToast} />
//       </>
//     );
//   }

//   // Main Dashboard
//   return (
//     <div className="app">
//       <div className="app-container">
//         <Header
//           currentUser={currentUser}
//           onProfileClick={() => openModal('profile')}
//           onLogout={handleLogout}
//           onCardClick={openModal}
//           attendanceStatus={attendance}
//         />

//         {/* ✅ ATTENDANCE MODAL */}
//         {/* <AttendanceModal
//           attendance={attendance}
//           onPunch={handlePunch}
//         /> */}

//         {/* ✅ DASHBOARD - As a regular component, not modal */}
//         <div className="dashboard-wrapper">
//           <Dashboard />
//         </div>

//         {/* Other content */}
//         <AnnouncementSlider />
//         <BirthdaySlider />
//         <EmployeeSlider/>

//         {/* ATTENDANCE CALENDAR MODAL */}
//         <AttendanceCalendarModal
//           isOpen={showAttendanceCalendar}
//           onClose={closeModal}
//           currentUser={currentUser}
//           attendanceData={attendance}
//         />

//            <AttendanceModal  // ✅ YEH ADD KARO
//         isOpen={activeModal === 'attendance'}
//         onClose={closeModal}
//         attendance={attendance}
//         onPunch={handlePunch}
//       />

    

//         {/* Other Modals */}
//         <LeaveModal
//           isOpen={activeModal === 'leave'}
//           onClose={closeModal}
//           onLeaveSubmit={handleLeaveSubmit}
//           loading={leaveLoading}
//         />

//         <BirthdayModal
//           isOpen={activeModal === 'birthday'}
//           onClose={closeModal}
//         />

//         <ProfileModal
//           isOpen={activeModal === 'profile'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <CalendarModal
//           isOpen={activeModal === 'calendar'}
//           onClose={closeModal}
//         />

//         <GithubModal
//           isOpen={activeModal === 'github'}
//           onClose={closeModal}
//           onPushCode={handleGithubPush}
//           loading={githubLoading}
//         />

//         <SalaryModal
//           isOpen={activeModal === 'salary'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <Toast toast={toast} onClose={hideToast} />
//       </div>
//     </div>
//   );
// }

// export default App;





// import React, { useState, useEffect } from 'react';
// import { useAuth } from './hooks/useAuth';
// import useAttendance from './hooks/useAttendance';
// import { useToast } from './hooks/useToast';
// import Swal from "sweetalert2";

// // Components
// import Login from './components/auth/Login';
// import Header from './components/common/Header';
// import Toast from './components/common/Toast';
// import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
// import BirthdaySlider from './components/dashboard/BirthdaySlider';
// import EmployeeSlider from './components/dashboard/EmployeeSlider';
// import Dashboard from './components/dashboard/Dashboard';

// // Modals
// import AttendanceModal from './components/modals/AttendanceModal';
// import LeaveModal from './components/modals/LeaveModal';
// import BirthdayModal from './components/modals/BirthdayModal';
// import ProfileModal from './components/modals/ProfileModal';
// import CalendarModal from './components/modals/CalendarModal';
// import GithubModal from './components/modals/GithubModal';
// import SalaryModal from './components/modals/SalaryModal';
// import AttendanceCalendarModal from './components/modals/AttendanceCalendarModal';

// import './App.css';

// function App() {
//   const { currentUser, loading: authLoading, login, logout } = useAuth();
//   const { attendance, punchIn, punchOut } = useAttendance();
//   const { toast, showToast, hideToast } = useToast();
  
//   // Modal State
//   const [activeModal, setActiveModal] = useState(null);
//   const [showAttendanceCalendar, setShowAttendanceCalendar] = useState(false);
//   const [leaveLoading, setLeaveLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);

//   // Auto close modal when user logs out
//   useEffect(() => {
//     if (!currentUser) {
//       setActiveModal(null);
//       setShowAttendanceCalendar(false);
//     }
//   }, [currentUser]);

//   // Handle Login
//   const handleLogin = async (email, password) => {
//     try {
//       if (!email || !password) {
//         showToast('❌ Please enter both email and password', 'error');
//         return;
//       }

//       await login(email, password);
//       showToast('✅ Login successful! Welcome to Acore IT Hub', 'success');
//     } catch (error) {
//       showToast('❌ Login failed. Please check your credentials.', 'error');
//     }
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Logout?",
//       text: "Are you sure you want to logout?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Logout",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         logout();
//         showToast("👋 Logged out successfully!", "success");
//       }
//     });
//   };

//   // Handle Punch In/Out
//   const handlePunch = async () => {
//     try {
//       if (attendance.isPunchedIn) {
//         const result = await punchOut();
//         if (result && result.success) {
//           showToast('✅ Punched out successfully! See you tomorrow.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch out failed', 'error');
//         }
//       } else {
//         const result = await punchIn();
//         if (result && result.success) {
//           showToast('✅ Punched in successfully! Have a productive day.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch in failed', 'error');
//         }
//       }
//     } catch (error) {
//       showToast('❌ Error processing attendance', 'error');
//       console.error('Punch error:', error);
//     }
//   };

//   // Handle Leave Application
//   const handleLeaveSubmit = async (formData) => {
//     setLeaveLoading(true);
    
//     try {
//       if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Leave application submitted successfully!', 'success');
//       setActiveModal(null);
//     } catch (error) {
//       showToast('❌ Failed to submit leave application', 'error');
//     } finally {
//       setLeaveLoading(false);
//     }
//   };

//   // Handle GitHub Push
//   const handleGithubPush = async (formData) => {
//     setGithubLoading(true);
    
//     try {
//       if (!formData.repository || !formData.commitMessage) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Code pushed to GitHub successfully!', 'success');
//     } catch (error) {
//       showToast('❌ Failed to push code to GitHub', 'error');
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   // Open Modal
//   const openModal = (modalName) => {
//     if (modalName === 'attendance-calendar') {
//       setShowAttendanceCalendar(true);
//     } else if (modalName === 'attendance') {
//       setActiveModal('attendance');
//     } else {
//       setActiveModal(modalName);
//     }
//   };

//   // Close Modal
//   const closeModal = () => {
//     setActiveModal(null);
//     setShowAttendanceCalendar(false);
//   };

//   // Render Login Page if not authenticated
//   if (!currentUser) {
//     return (
//       <>
//         <Login onLogin={handleLogin} loading={authLoading} />
//         <Toast toast={toast} onClose={hideToast} />
//       </>
//     );
//   }

//   // Main Dashboard
//   return (
//     <div className="app">
//       <div className="app-container">
//         <Header
//           currentUser={currentUser}
//           onProfileClick={() => openModal('profile')}
//           onLogout={handleLogout}
//           onCardClick={openModal}
//           attendanceStatus={attendance}
//         />

//         {/* ✅ DASHBOARD */}
//         <div className="dashboard-wrapper">
//           <Dashboard />
//         </div>

//         {/* ✅ SLIDERS */}
//         <AnnouncementSlider />
//         <BirthdaySlider />
//         <EmployeeSlider/>

//         {/* ✅ ATTENDANCE MODAL - Hamburger se open hoga */}
//         <AttendanceModal
//           isOpen={activeModal === 'attendance'}
//           onClose={closeModal}
//           attendance={attendance}
//           onPunch={handlePunch}
//         />

//         {/* ✅ ATTENDANCE CALENDAR MODAL */}
//         <AttendanceCalendarModal
//           isOpen={showAttendanceCalendar}
//           onClose={closeModal}
//           currentUser={currentUser}
//           attendanceData={attendance}
//         />

//         {/* ✅ OTHER MODALS */}
//         <LeaveModal
//           isOpen={activeModal === 'leave'}
//           onClose={closeModal}
//           onLeaveSubmit={handleLeaveSubmit}
//           loading={leaveLoading}
//         />

//         <BirthdayModal
//           isOpen={activeModal === 'birthday'}
//           onClose={closeModal}
//         />

//         <ProfileModal
//           isOpen={activeModal === 'profile'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <CalendarModal
//           isOpen={activeModal === 'calendar'}
//           onClose={closeModal}
//         />

//         <GithubModal
//           isOpen={activeModal === 'github'}
//           onClose={closeModal}
//           onPushCode={handleGithubPush}
//           loading={githubLoading}
//         />

//         <SalaryModal
//           isOpen={activeModal === 'salary'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <Toast toast={toast} onClose={hideToast} />
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import { useAuth } from './hooks/useAuth';
// import useAttendance from './hooks/useAttendance';
// import { useToast } from './hooks/useToast';
// import Swal from "sweetalert2";

// // Components
// import Login from './components/auth/Login';
// import Header from './components/common/Header';
// import Toast from './components/common/Toast';
// import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
// import BirthdaySlider from './components/dashboard/BirthdaySlider';
// import EmployeeSlider from './components/dashboard/EmployeeSlider';
// import Dashboard from './components/dashboard/Dashboard';

// // Modals
// import AttendanceModal from './components/modals/AttendanceModal';
// import LeaveModal from './components/modals/LeaveModal';
// import BirthdayModal from './components/modals/BirthdayModal';
// import ProfileModal from './components/modals/ProfileModal';
// import CalendarModal from './components/modals/CalendarModal';
// import GithubModal from './components/modals/GithubModal';
// import SalaryModal from './components/modals/SalaryModal';
// import AttendanceCalendarModal from './components/modals/AttendanceCalendarModal';

// // ✅ NEW: Import ProjectsModal
// import ProjectsModal from './components/modals/ProjectsModal';
// import TasksModal from './components/modals/TasksModal';

// import './App.css';

// function App() {
//   const { currentUser, loading: authLoading, login, logout } = useAuth();
//   const { attendance, punchIn, punchOut } = useAttendance();
//   const { toast, showToast, hideToast } = useToast();
  
//   // Modal State
//   const [activeModal, setActiveModal] = useState(null);
//   const [showAttendanceCalendar, setShowAttendanceCalendar] = useState(false);
//   const [leaveLoading, setLeaveLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);
//   const [showTasks, setShowTasks] = useState(false);

//   // Auto close modal when user logs out
//   useEffect(() => {
//     if (!currentUser) {
//       setActiveModal(null);
//       setShowAttendanceCalendar(false);
//     }
//   }, [currentUser]);

//   // Handle Login
//   const handleLogin = async (email, password) => {
//     try {
//       if (!email || !password) {
//         showToast('❌ Please enter both email and password', 'error');
//         return;
//       }

//       await login(email, password);
//       showToast('✅ Login successful! Welcome to Acore IT Hub', 'success');
//     } catch (error) {
//       showToast('❌ Login failed. Please check your credentials.', 'error');
//     }
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Logout?",
//       text: "Are you sure you want to logout?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Logout",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         logout();
//         showToast("👋 Logged out successfully!", "success");
//       }
//     });
//   };

//   // Handle Punch In/Out
//   const handlePunch = async () => {
//     try {
//       if (attendance.isPunchedIn) {
//         const result = await punchOut();
//         if (result && result.success) {
//           showToast('✅ Punched out successfully! See you tomorrow.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch out failed', 'error');
//         }
//       } else {
//         const result = await punchIn();
//         if (result && result.success) {
//           showToast('✅ Punched in successfully! Have a productive day.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch in failed', 'error');
//         }
//       }
//     } catch (error) {
//       showToast('❌ Error processing attendance', 'error');
//       console.error('Punch error:', error);
//     }
//   };

//   // Handle Leave Application
//   const handleLeaveSubmit = async (formData) => {
//     setLeaveLoading(true);
    
//     try {
//       if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Leave application submitted successfully!', 'success');
//       setActiveModal(null);
//     } catch (error) {
//       showToast('❌ Failed to submit leave application', 'error');
//     } finally {
//       setLeaveLoading(false);
//     }
//   };

//   // Handle GitHub Push
//   const handleGithubPush = async (formData) => {
//     setGithubLoading(true);
    
//     try {
//       if (!formData.repository || !formData.commitMessage) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Code pushed to GitHub successfully!', 'success');
//     } catch (error) {
//       showToast('❌ Failed to push code to GitHub', 'error');
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   // ✅ UPDATED: Open Modal function with Projects support
// const openModal = (modalName) => {
//   if (modalName === 'attendance-calendar') {
//     setShowAttendanceCalendar(true);
//   } else if (modalName === 'attendance') {
//     setActiveModal('attendance');
//   } else if (modalName === 'projects') {
//     setActiveModal('projects');
//   } else if (modalName === 'tasks') {
//     setActiveModal('tasks'); // ✅ NEW
//   } else {
//     setActiveModal(modalName);
//   }
// };

//   // ✅ UPDATED: Close Modal function with Projects support
//  const closeModal = () => {
//   setActiveModal(null);
//   setShowAttendanceCalendar(false);
// };

//   // Render Login Page if not authenticated
//   if (!currentUser) {
//     return (
//       <>
//         <Login onLogin={handleLogin} loading={authLoading} />
//         <Toast toast={toast} onClose={hideToast} />
//       </>
//     );
//   }

//   // Main Dashboard
//   return (
//     <div className="app">
//       <div className="app-container">
//         <Header
//           currentUser={currentUser}
//           onProfileClick={() => openModal('profile')}
//           onLogout={handleLogout}
//           onCardClick={openModal}
//           attendanceStatus={attendance}
//         />

//         {/* ✅ DASHBOARD */}
//         <div className="dashboard-wrapper">
//           <Dashboard />
//         </div>

//         {/* ✅ SLIDERS */}
//         <AnnouncementSlider />
//         <BirthdaySlider />
//         <EmployeeSlider/>

//         {/* ✅ ATTENDANCE MODAL */}
//         {/* <AttendanceModal
//           isOpen={activeModal === 'attendance'}
//           onClose={closeModal}
//           attendance={attendance}
//           onPunch={handlePunch}
//         /> */}

//         {activeModal === 'attendance' && (
//   <AttendanceModal
//     onClose={closeModal}
//     attendance={attendance}
//     onPunch={handlePunch}
//   />
// )}

//         {/* ✅ NEW: PROJECTS MODAL */}
//         <ProjectsModal
//           isOpen={activeModal === 'projects'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <TasksModal
//          isOpen={activeModal === 'tasks'}
//          onClose={closeModal}
//          currentUser={currentUser}
//        />

//         {/* ✅ ATTENDANCE CALENDAR MODAL */}
//         <AttendanceCalendarModal
//           isOpen={showAttendanceCalendar}
//           onClose={closeModal}
//           currentUser={currentUser}
//           attendanceData={attendance}
//         />

//         {/* ✅ OTHER MODALS */}
//         <LeaveModal
//           isOpen={activeModal === 'leave'}
//           onClose={closeModal}
//           onLeaveSubmit={handleLeaveSubmit}
//           loading={leaveLoading}
//         />

//         <BirthdayModal
//           isOpen={activeModal === 'birthday'}
//           onClose={closeModal}
//         />

//         <ProfileModal
//           isOpen={activeModal === 'profile'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <CalendarModal
//           isOpen={activeModal === 'calendar'}
//           onClose={closeModal}
//         />

//         <GithubModal
//           isOpen={activeModal === 'github'}
//           onClose={closeModal}
//           onPushCode={handleGithubPush}
//           loading={githubLoading}
//         />

//         <SalaryModal
//           isOpen={activeModal === 'salary'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <Toast toast={toast} onClose={hideToast} />
//       </div>
//     </div>
//   );
// }

// export default App;








// import React, { useState, useEffect } from 'react';
// import { useAuth } from './hooks/useAuth';
// import useAttendance from './hooks/useAttendance';
// import { useToast } from './hooks/useToast';
// import Swal from "sweetalert2";

// // Components
// import Login from './components/auth/Login';
// import Header from './components/common/Header';
// import Toast from './components/common/Toast';
// import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
// import BirthdaySlider from './components/dashboard/BirthdaySlider';
// import EmployeeSlider from './components/dashboard/EmployeeSlider';
// import Dashboard from './components/dashboard/Dashboard';

// // Modals
// import AttendanceModal from './components/modals/AttendanceModal';
// import LeaveModal from './components/modals/LeaveModal';
// import BirthdayModal from './components/modals/BirthdayModal';
// import ProfileModal from './components/modals/ProfileModal';
// import CalendarModal from './components/modals/CalendarModal';
// import GithubModal from './components/modals/GithubModal';
// import SalaryModal from './components/modals/SalaryModal';
// import AttendanceCalendarModal from './components/modals/AttendanceCalendarModal';
// import ProjectsModal from './components/modals/ProjectsModal';
// import TasksModal from './components/modals/TasksModal';

// import './App.css';

// function App() {
//   const { currentUser, loading: authLoading, login, logout } = useAuth();
//   const { attendance, punchIn, punchOut } = useAttendance();
//   const { toast, showToast, hideToast } = useToast();
  
//   // Modal State
//   const [activeModal, setActiveModal] = useState(null);
//   const [showAttendanceCalendar, setShowAttendanceCalendar] = useState(false);
//   const [leaveLoading, setLeaveLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);
//   const [showTasks, setShowTasks] = useState(false);

//   // Auto close modal when user logs out
//   useEffect(() => {
//     if (!currentUser) {
//       setActiveModal(null);
//       setShowAttendanceCalendar(false);
//     }
//   }, [currentUser]);

//   // Handle Login
//   const handleLogin = async (email, password) => {
//     try {
//       if (!email || !password) {
//         showToast('❌ Please enter both email and password', 'error');
//         return;
//       }

//       await login(email, password);
//       showToast('✅ Login successful! Welcome to Acore IT Hub', 'success');
//     } catch (error) {
//       showToast('❌ Login failed. Please check your credentials.', 'error');
//     }
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Logout?",
//       text: "Are you sure you want to logout?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Logout",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         logout();
//         showToast("👋 Logged out successfully!", "success");
//       }
//     });
//   };

//   // Handle Punch In/Out
//   const handlePunch = async () => {
//     try {
//       if (attendance.isPunchedIn) {
//         const result = await punchOut();
//         if (result && result.success) {
//           showToast('✅ Punched out successfully! See you tomorrow.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch out failed', 'error');
//         }
//       } else {
//         const result = await punchIn();
//         if (result && result.success) {
//           showToast('✅ Punched in successfully! Have a productive day.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch in failed', 'error');
//         }
//       }
//     } catch (error) {
//       showToast('❌ Error processing attendance', 'error');
//       console.error('Punch error:', error);
//     }
//   };

//   // Handle Leave Application
//   const handleLeaveSubmit = async (formData) => {
//     setLeaveLoading(true);
    
//     try {
//       if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Leave application submitted successfully!', 'success');
//       setActiveModal(null);
//     } catch (error) {
//       showToast('❌ Failed to submit leave application', 'error');
//     } finally {
//       setLeaveLoading(false);
//     }
//   };

//   // Handle GitHub Push
//   const handleGithubPush = async (formData) => {
//     setGithubLoading(true);
    
//     try {
//       if (!formData.repository || !formData.commitMessage) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Code pushed to GitHub successfully!', 'success');
//     } catch (error) {
//       showToast('❌ Failed to push code to GitHub', 'error');
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   // Open Modal function
//   const openModal = (modalName) => {
//     if (modalName === 'attendance-calendar') {
//       setShowAttendanceCalendar(true);
//     } else if (modalName === 'attendance') {
//       setActiveModal('attendance');
//     } else if (modalName === 'projects') {
//       setActiveModal('projects');
//     } else if (modalName === 'tasks') {
//       setActiveModal('tasks');
//     } else {
//       setActiveModal(modalName);
//     }
//   };

//   // Close Modal function
//   const closeModal = () => {
//     setActiveModal(null);
//     setShowAttendanceCalendar(false);
//   };

//   // Render Login Page if not authenticated
//   if (!currentUser) {
//     return (
//       <>
//         <Login onLogin={handleLogin} loading={authLoading} />
//         <Toast toast={toast} onClose={hideToast} />
//       </>
//     );
//   }

//   // Main Dashboard
//   return (
//     <div className="app">
//       <div className="app-container">
//         <Header
//           currentUser={currentUser}
//           onProfileClick={() => openModal('profile')}
//           onLogout={handleLogout}
//           onCardClick={openModal}
//           attendanceStatus={attendance}
//         />

//         {/* ✅ DASHBOARD */}
//         <div className="dashboard-wrapper">
//           <Dashboard />
//         </div>

//         {/* ✅ SLIDERS */}
//         <AnnouncementSlider />
//         <BirthdaySlider />
//         <EmployeeSlider/>

//         {/* ✅ ATTENDANCE MODAL - सही तरीका */}
//         <AttendanceModal
//           isOpen={activeModal === 'attendance'}
//           onClose={closeModal}
//           attendance={attendance}
//           onPunch={handlePunch}
//         />

//         {/* ✅ NEW: PROJECTS MODAL */}
//         <ProjectsModal
//           isOpen={activeModal === 'projects'}
//           onClose={closeModal}
//           currentUser={currentUser}
//            onCardClick={openModal}
//         />

//         <TasksModal
//           isOpen={activeModal === 'tasks'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         {/* ✅ ATTENDANCE CALENDAR MODAL */}
//         <AttendanceCalendarModal
//           isOpen={showAttendanceCalendar}
//           onClose={closeModal}
//           currentUser={currentUser}
//           attendanceData={attendance}
//         />

//         {/* ✅ OTHER MODALS */}
//         <LeaveModal
//           isOpen={activeModal === 'leave'}
//           onClose={closeModal}
//           onLeaveSubmit={handleLeaveSubmit}
//           loading={leaveLoading}
//         />

//         <BirthdayModal
//           isOpen={activeModal === 'birthday'}
//           onClose={closeModal}
//         />

//         <ProfileModal
//           isOpen={activeModal === 'profile'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <CalendarModal
//           isOpen={activeModal === 'calendar'}
//           onClose={closeModal}
//         />

//         <GithubModal
//           isOpen={activeModal === 'github'}
//           onClose={closeModal}
//           onPushCode={handleGithubPush}
//           loading={githubLoading}
//         />

//         <SalaryModal
//           isOpen={activeModal === 'salary'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <Toast toast={toast} onClose={hideToast} />
//       </div>
//     </div>
//   );
// }

// export default App;





// API adding 




// import React, { useState, useEffect } from 'react';
// import { useAuth } from './hooks/useAuth';
// import useAttendance from './hooks/useAttendance';
// import { useToast } from './hooks/useToast';
// import Swal from "sweetalert2";

// // Components
// import Login from './components/auth/Login';
// import Header from './components/common/Header';
// import Toast from './components/common/Toast';
// import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
// import BirthdaySlider from './components/dashboard/BirthdaySlider';
// import EmployeeSlider from './components/dashboard/EmployeeSlider';
// import Dashboard from './components/dashboard/Dashboard';

// // Modals
// import AttendanceModal from './components/modals/AttendanceModal';
// import LeaveModal from './components/modals/LeaveModal';
// import BirthdayModal from './components/modals/BirthdayModal';
// import ProfileModal from './components/modals/ProfileModal';
// import CalendarModal from './components/modals/CalendarModal';
// import GithubModal from './components/modals/GithubModal';
// import SalaryModal from './components/modals/SalaryModal';
// import AttendanceCalendarModal from './components/modals/AttendanceCalendarModal';
// import ProjectsModal from './components/modals/ProjectsModal';
// import TasksModal from './components/modals/TasksModal';

// import './App.css';

// function App() {
//   const { 
//     currentUser, 
//     loading: authLoading, 
//     error: authError,
//     loginMessage,
//     registerLoading,
//     registerError,
//     registerSuccess,
//     registerMessage,
//     login, 
//     logout,
//     clearErrors
//   } = useAuth();
  
//   const { attendance, punchIn, punchOut } = useAttendance();
//   const { toast, showToast, hideToast } = useToast();
  
//   // Modal State
//   const [activeModal, setActiveModal] = useState(null);
//   const [showAttendanceCalendar, setShowAttendanceCalendar] = useState(false);
//   const [leaveLoading, setLeaveLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);
//   const [showTasks, setShowTasks] = useState(false);

//   // Auto close modal when user logs out
//   useEffect(() => {
//     if (!currentUser) {
//       setActiveModal(null);
//       setShowAttendanceCalendar(false);
//     }
//   }, [currentUser]);

//   // Show success message after registration
//   useEffect(() => {
//     if (registerSuccess && registerMessage) {
//       showToast(`✅ ${registerMessage}`, 'success');
//       clearErrors();
//     }
//   }, [registerSuccess, registerMessage]);

//   // Show login message
//   useEffect(() => {
//     if (loginMessage) {
//       showToast(`✅ ${loginMessage}`, 'success');
//     }
//   }, [loginMessage]);

//   // Show auth error
//   useEffect(() => {
//     if (authError) {
//       showToast(`❌ ${authError}`, 'error');
//     }
//   }, [authError]);

//   // Handle Login
//   const handleLogin = async (email, password) => {
//     try {
//       if (!email || !password) {
//         showToast('❌ Please enter both email and password', 'error');
//         return;
//       }

//       await login(email, password);
//       // Success toast will be shown via useEffect listening to loginMessage
      
//     } catch (error) {
//       // Error toast will be shown via useEffect listening to authError
//       console.error('Login error:', error);
//     }
//   };

//   // Handle Register
//   const handleRegister = async (userData) => {
//     try {
//       await register(userData);
//       // Success toast will be shown via useEffect listening to registerMessage
//     } catch (error) {
//       // Error toast will be shown via useEffect listening to registerError
//       console.error('Register error:', error);
//     }
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Logout?",
//       text: "Are you sure you want to logout?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Logout",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         logout();
//         showToast("👋 Logged out successfully!", "success");
//       }
//     });
//   };

//   // Handle Punch In/Out
//   const handlePunch = async () => {
//     try {
//       if (attendance.isPunchedIn) {
//         const result = await punchOut();
//         if (result && result.success) {
//           showToast('✅ Punched out successfully! See you tomorrow.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch out failed', 'error');
//         }
//       } else {
//         const result = await punchIn();
//         if (result && result.success) {
//           showToast('✅ Punched in successfully! Have a productive day.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch in failed', 'error');
//         }
//       }
//     } catch (error) {
//       showToast('❌ Error processing attendance', 'error');
//       console.error('Punch error:', error);
//     }
//   };

//   // Handle Leave Application
//   const handleLeaveSubmit = async (formData) => {
//     setLeaveLoading(true);
    
//     try {
//       if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Leave application submitted successfully!', 'success');
//       setActiveModal(null);
//     } catch (error) {
//       showToast('❌ Failed to submit leave application', 'error');
//     } finally {
//       setLeaveLoading(false);
//     }
//   };

//   // Handle GitHub Push
//   const handleGithubPush = async (formData) => {
//     setGithubLoading(true);
    
//     try {
//       if (!formData.repository || !formData.commitMessage) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Code pushed to GitHub successfully!', 'success');
//     } catch (error) {
//       showToast('❌ Failed to push code to GitHub', 'error');
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   // Open Modal function
//   const openModal = (modalName) => {
//     if (modalName === 'attendance-calendar') {
//       setShowAttendanceCalendar(true);
//     } else if (modalName === 'attendance') {
//       setActiveModal('attendance');
//     } else if (modalName === 'projects') {
//       setActiveModal('projects');
//     } else if (modalName === 'tasks') {
//       setActiveModal('tasks');
//     } else {
//       setActiveModal(modalName);
//     }
//   };

//   // Close Modal function
//   const closeModal = () => {
//     setActiveModal(null);
//     setShowAttendanceCalendar(false);
//   };

//   // Render Login Page if not authenticated
//   if (!currentUser) {
//     return (
//       <>
//         <Login 
//           onLogin={handleLogin} 
//           onRegister={handleRegister}
//           loading={authLoading}
//           registerLoading={registerLoading}
//           registerError={registerError}
//           loginError={authError}
//           clearErrors={clearErrors}
//         />
//         <Toast toast={toast} onClose={hideToast} />
//       </>
//     );
//   }

//   // Main Dashboard
//   return (
//     <div className="app">
//       <div className="app-container">
//         <Header
//           currentUser={currentUser}
//           onProfileClick={() => openModal('profile')}
//           onLogout={handleLogout}
//           onCardClick={openModal}
//           attendanceStatus={attendance}
//         />

//         {/* ✅ DASHBOARD */}
//         <div className="dashboard-wrapper">
//           <Dashboard />
//         </div>

//         {/* ✅ SLIDERS */}
//         <AnnouncementSlider />
//         <BirthdaySlider />
//         <EmployeeSlider/>

//         {/* ✅ ATTENDANCE MODAL */}
//         <AttendanceModal
//           isOpen={activeModal === 'attendance'}
//           onClose={closeModal}
//           attendance={attendance}
//           onPunch={handlePunch}
//         />

//         {/* ✅ PROJECTS MODAL */}
//         <ProjectsModal
//           isOpen={activeModal === 'projects'}
//           onClose={closeModal}
//           currentUser={currentUser}
//           onCardClick={openModal}
//         />

//         <TasksModal
//           isOpen={activeModal === 'tasks'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         {/* ✅ ATTENDANCE CALENDAR MODAL */}
//         <AttendanceCalendarModal
//           isOpen={showAttendanceCalendar}
//           onClose={closeModal}
//           currentUser={currentUser}
//           attendanceData={attendance}
//         />

//         {/* ✅ OTHER MODALS */}
//         <LeaveModal
//           isOpen={activeModal === 'leave'}
//           onClose={closeModal}
//           onLeaveSubmit={handleLeaveSubmit}
//           loading={leaveLoading}
//         />

//         <BirthdayModal
//           isOpen={activeModal === 'birthday'}
//           onClose={closeModal}
//         />

//         <ProfileModal
//           isOpen={activeModal === 'profile'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <CalendarModal
//           isOpen={activeModal === 'calendar'}
//           onClose={closeModal}
//         />

//         <GithubModal
//           isOpen={activeModal === 'github'}
//           onClose={closeModal}
//           onPushCode={handleGithubPush}
//           loading={githubLoading}
//         />

//         <SalaryModal
//           isOpen={activeModal === 'salary'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <Toast toast={toast} onClose={hideToast} />
//       </div>
//     </div>
//   );
// }

// export default App;



// api adding11

// import React, { useState, useEffect } from 'react';
// import { useAuth } from './hooks/useAuth';
// import useAttendance from './hooks/useAttendance';
// import { useToast } from './hooks/useToast';
// import Swal from "sweetalert2";

// // Components
// import Login from './components/auth/Login';
// import Header from './components/common/Header';
// import Toast from './components/common/Toast';
// import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
// import BirthdaySlider from './components/dashboard/BirthdaySlider';
// import EmployeeSlider from './components/dashboard/EmployeeSlider';
// import Dashboard from './components/dashboard/Dashboard';

// // Modals
// import AttendanceModal from './components/modals/AttendanceModal';
// import LeaveModal from './components/modals/LeaveModal';
// import BirthdayModal from './components/modals/BirthdayModal';
// import ProfileModal from './components/modals/ProfileModal';
// import CalendarModal from './components/modals/CalendarModal';
// import GithubModal from './components/modals/GithubModal';
// import SalaryModal from './components/modals/SalaryModal';
// import AttendanceCalendarModal from './components/modals/AttendanceCalendarModal';
// import ProjectsModal from './components/modals/ProjectsModal';
// import TasksModal from './components/modals/TasksModal';

// import './App.css';

// function App() {
//   const { 
//     currentUser, 
//     isAuthenticated,
//     loginLoading,
//     loginError,
//     registerLoading,
//     registerError,
//     registerSuccess,
//     message,
//     login, 
//     register,
//     logout,
//     clearErrors,
//     clearRegisterStatus
//   } = useAuth();
  
//   const { attendance, punchIn, punchOut } = useAttendance();
//   const { toast, showToast, hideToast } = useToast();
  
//   // Modal State
//   const [activeModal, setActiveModal] = useState(null);
//   const [showAttendanceCalendar, setShowAttendanceCalendar] = useState(false);
//   const [leaveLoading, setLeaveLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);

//   // Handle login/register messages
//   useEffect(() => {
//     if (message) {
//       showToast(`ℹ️ ${message}`, 'info');
//     }
//   }, [message, showToast]);

//   // Handle login success
//   useEffect(() => {
//     if (isAuthenticated && currentUser) {
//       showToast(`✅ Welcome back, ${currentUser.name}!`, 'success');
//     }
//   }, [isAuthenticated, currentUser, showToast]);

//   // Handle login error
//   useEffect(() => {
//     if (loginError) {
//       showToast(`❌ ${loginError}`, 'error');
//     }
//   }, [loginError, showToast]);

//   // Handle register success
//   useEffect(() => {
//     if (registerSuccess) {
//       showToast('✅ Registration successful! Please login.', 'success');
//       clearRegisterStatus();
//     }
//   }, [registerSuccess, showToast, clearRegisterStatus]);

//   // Handle register error
//   useEffect(() => {
//     if (registerError) {
//       showToast(`❌ ${registerError}`, 'error');
//     }
//   }, [registerError, showToast]);

//   // Auto close modal when user logs out
//   useEffect(() => {
//     if (!isAuthenticated) {
//       setActiveModal(null);
//       setShowAttendanceCalendar(false);
//     }
//   }, [isAuthenticated]);

//   // Handle Login
//   const handleLogin = async (email, password) => {
//     try {
//       if (!email || !password) {
//         showToast('❌ Please enter both email and password', 'error');
//         return;
//       }

//       await login(email, password);
//       // Success toast will be shown via useEffect
      
//     } catch (error) {
//       // Error toast will be shown via useEffect
//       console.error('Login error:', error);
//     }
//   };

//   // Handle Register
//   const handleRegister = async (userData) => {
//     try {
//       await register(userData);
//       // Success toast will be shown via useEffect
//     } catch (error) {
//       // Error toast will be shown via useEffect
//       console.error('Register error:', error);
//     }
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Logout?",
//       text: "Are you sure you want to logout?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Logout",
//       cancelButtonText: "Cancel"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         logout();
//         showToast("👋 Logged out successfully!", "success");
//       }
//     });
//   };

//   // Handle Punch In/Out
//   const handlePunch = async () => {
//     try {
//       if (attendance.isPunchedIn) {
//         const result = await punchOut();
//         if (result && result.success) {
//           showToast('✅ Punched out successfully! See you tomorrow.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch out failed', 'error');
//         }
//       } else {
//         const result = await punchIn();
//         if (result && result.success) {
//           showToast('✅ Punched in successfully! Have a productive day.', 'success');
//         } else {
//           showToast(result?.error || '❌ Punch in failed', 'error');
//         }
//       }
//     } catch (error) {
//       showToast('❌ Error processing attendance', 'error');
//       console.error('Punch error:', error);
//     }
//   };

//   // Handle Leave Application
//   const handleLeaveSubmit = async (formData) => {
//     setLeaveLoading(true);
    
//     try {
//       if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Leave application submitted successfully!', 'success');
//       setActiveModal(null);
//     } catch (error) {
//       showToast('❌ Failed to submit leave application', 'error');
//     } finally {
//       setLeaveLoading(false);
//     }
//   };

//   // Handle GitHub Push
//   const handleGithubPush = async (formData) => {
//     setGithubLoading(true);
    
//     try {
//       if (!formData.repository || !formData.commitMessage) {
//         showToast('❌ Please fill all required fields', 'error');
//         return;
//       }

//       await new Promise(resolve => setTimeout(resolve, 2000));
//       showToast('✅ Code pushed to GitHub successfully!', 'success');
//     } catch (error) {
//       showToast('❌ Failed to push code to GitHub', 'error');
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   // Open Modal function
//   const openModal = (modalName) => {
//     if (modalName === 'attendance-calendar') {
//       setShowAttendanceCalendar(true);
//     } else if (modalName === 'attendance') {
//       setActiveModal('attendance');
//     } else if (modalName === 'projects') {
//       setActiveModal('projects');
//     } else if (modalName === 'tasks') {
//       setActiveModal('tasks');
//     } else {
//       setActiveModal(modalName);
//     }
//   };

//   // Close Modal function
//   const closeModal = () => {
//     setActiveModal(null);
//     setShowAttendanceCalendar(false);
//   };

//   // Render Login Page if not authenticated
//   if (!isAuthenticated) {
//     return (
//       <>
//         <Login 
//           onLogin={handleLogin}
//           onRegister={handleRegister}
//           loading={loginLoading}
//           registerLoading={registerLoading}
//           registerError={registerError}
//           loginError={loginError}
//           clearErrors={clearErrors}
//         />
//         <Toast toast={toast} onClose={hideToast} />
//       </>
//     );
//   }

//   // Main Dashboard
//   return (
//     <div className="app">
//       <div className="app-container">
//         <Header
//           currentUser={currentUser}
//           onProfileClick={() => openModal('profile')}
//           onLogout={handleLogout}
//           onCardClick={openModal}
//           attendanceStatus={attendance}
//         />

//         {/* ✅ DASHBOARD */}
//         <div className="dashboard-wrapper">
//           <Dashboard />
//         </div>

//         {/* ✅ SLIDERS */}
//         <AnnouncementSlider />
//         <BirthdaySlider />
//         <EmployeeSlider/>

//         {/* ✅ ATTENDANCE MODAL */}
//         <AttendanceModal
//           isOpen={activeModal === 'attendance'}
//           onClose={closeModal}
//           attendance={attendance}
//           onPunch={handlePunch}
//         />

//         {/* ✅ PROJECTS MODAL */}
//         <ProjectsModal
//           isOpen={activeModal === 'projects'}
//           onClose={closeModal}
//           currentUser={currentUser}
//           onCardClick={openModal}
//         />

//         <TasksModal
//           isOpen={activeModal === 'tasks'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         {/* ✅ ATTENDANCE CALENDAR MODAL */}
//         <AttendanceCalendarModal
//           isOpen={showAttendanceCalendar}
//           onClose={closeModal}
//           currentUser={currentUser}
//           attendanceData={attendance}
//         />

//         {/* ✅ OTHER MODALS */}
//         <LeaveModal
//           isOpen={activeModal === 'leave'}
//           onClose={closeModal}
//           onLeaveSubmit={handleLeaveSubmit}
//           loading={leaveLoading}
//         />

//         <BirthdayModal
//           isOpen={activeModal === 'birthday'}
//           onClose={closeModal}
//         />

//         <ProfileModal
//           isOpen={activeModal === 'profile'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <CalendarModal
//           isOpen={activeModal === 'calendar'}
//           onClose={closeModal}
//         />

//         <GithubModal
//           isOpen={activeModal === 'github'}
//           onClose={closeModal}
//           onPushCode={handleGithubPush}
//           loading={githubLoading}
//         />

//         <SalaryModal
//           isOpen={activeModal === 'salary'}
//           onClose={closeModal}
//           currentUser={currentUser}
//         />

//         <Toast toast={toast} onClose={hideToast} />
//       </div>
//     </div>
//   );
// }

// export default App;






import React, { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import useAttendance from './hooks/useAttendance';
import { useToast } from './hooks/useToast';
import Swal from "sweetalert2";

// Components
import Login from './components/auth/Login';
import Header from './components/common/Header';
import Toast from './components/common/Toast';
import AnnouncementSlider from './components/dashboard/AnnouncementSlider';
import BirthdaySlider from './components/dashboard/BirthdaySlider';
import EmployeeSlider from './components/dashboard/EmployeeSlider';
import Dashboard from './components/dashboard/Dashboard';

// Modals
import AttendanceModal from './components/modals/AttendanceModal';
import LeaveModal from './components/modals/LeaveModal';
import BirthdayModal from './components/modals/BirthdayModal';
import ProfileModal from './components/modals/ProfileModal';
import CalendarModal from './components/modals/CalendarModal';
import GithubModal from './components/modals/GithubModal';
import SalaryModal from './components/modals/SalaryModal';
import AttendanceCalendarModal from './components/modals/AttendanceCalendarModal';
import ProjectsModal from './components/modals/ProjectsModal';
import TasksModal from './components/modals/TasksModal';

import './App.css';


// slices

import { useDispatch } from "react-redux";
import { applyLeave } from "./redux/slices/leaveSlice";


function App() {

  const dispatch = useDispatch();
  const { currentUser, loading: authLoading, login, register, logout } = useAuth();
  const { attendance, punchIn, punchOut } = useAttendance();
  const { toast, showToast, hideToast } = useToast();
  
  // Modal State
  const [activeModal, setActiveModal] = useState(null);
  const [showAttendanceCalendar, setShowAttendanceCalendar] = useState(false);
  const [leaveLoading, setLeaveLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [showTasks, setShowTasks] = useState(false);

  // Auto close modal when user logs out
  useEffect(() => {
    if (!currentUser) {
      setActiveModal(null);
      setShowAttendanceCalendar(false);
    }
  }, [currentUser]);

  // Handle Login
  const handleLogin = async (email, password) => {
    try {
      if (!email || !password) {
        showToast('❌ Please enter both email and password', 'error');
        return;
      }

      const result = await login(email, password);
      if (result && result.success) {
        showToast('✅ Login successful! Welcome to Acore IT Hub', 'success');
      } else {
        showToast(result?.error || '❌ Login failed', 'error');
      }
    } catch (error) {
      showToast('❌ Login failed. Please check your credentials.', 'error');
    }
  };

  // Handle Register
  const handleRegister = async (formData) => {
    try {
      console.log("📤 Original Form Data:", formData);
      
      // ✅ Password match check
      if (formData.password !== formData.confirmPassword) {
        showToast('❌ Passwords do not match!', 'error');
        return;
      }

      // ✅ Transform data to match backend schema
      const dataToSend = {
        // Personal Info (MAPPED to backend fields)
        name: formData.fullName, // ✅ 'fullName' -> 'name'
        email: formData.email,
        mobile: formData.mobile,
        birthday: formData.dob, // ✅ 'dob' -> 'birthday'
        gender: formData.gender?.toLowerCase() || 'male', // ✅ lowercase
        address: formData.address,
        
        // Emergency Contact (backend requires 3 fields!)
        emergencyContactName: formData.emergencyContactName || formData.fullName, // ✅ default to user's name
        emergencyContactRelation: formData.emergencyContactRelation || "Self", // ✅ default value
        emergencyContactNumber: formData.emergencyContact,
        
        // Professional Info
        designation: formData.designation,
        department: formData.department,
        dateOfJoining: formData.dateOfJoining,
        employeeType: formData.employeeType?.toLowerCase().replace(" ", "-") || 'full-time', // ✅ 'Full Time' -> 'full-time'
        githubUsername: formData.git || '',
        
        // Account Info
        password: formData.password,
        
        // Financial Info (MAPPED)
        aadhaarNumber: formData.aadharNumber || '', // ✅ SPELLING FIX: 'aadharNumber' -> 'aadhaarNumber'
        panNumber: formData.panNumber || '',
        accountNumber: formData.bankAccount || '', // ✅ 'bankAccount' -> 'accountNumber'
        bankName: formData.bankName || '',
        ifscCode: formData.ifscCode || '',
        
        // Optional fields with defaults
        bloodGroup: formData.bloodGroup || '',
      };

      console.log("🚀 Transformed Data for Backend:", JSON.stringify(dataToSend, null, 2));
      
      // ✅ Call API
      const result = await register(dataToSend);
      
      if (result && result.success) {
        showToast('✅ Registration successful! Please login.', 'success');
      } else {
        const errorMsg = result?.error?.message || result?.error || 'Registration failed';
        showToast(`❌ ${errorMsg}`, 'error');
      }
    } catch (error) {
      console.error('Registration error:', error);
      showToast('❌ Registration failed. Please try again.', 'error');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        showToast("👋 Logged out successfully!", "success");
      }
    });
  };

  // Handle Punch In/Out
  const handlePunch = async () => {
    try {
      if (attendance.isPunchedIn) {
        const result = await punchOut();
        if (result && result.success) {
          showToast('✅ Punched out successfully! See you tomorrow.', 'success');
        } else {
          showToast(result?.error || '❌ Punch out failed', 'error');
        }
      } else {
        const result = await punchIn();
        if (result && result.success) {
          showToast('✅ Punched in successfully! Have a productive day.', 'success');
        } else {
          showToast(result?.error || '❌ Punch in failed', 'error');
        }
      }
    } catch (error) {
      showToast('❌ Error processing attendance', 'error');
      console.error('Punch error:', error);
    }
  };

  // Handle Leave Application
  // const handleLeaveSubmit = async (formData) => {
  //   setLeaveLoading(true);
    
  //   try {
  //     if (!formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
  //       showToast('❌ Please fill all required fields', 'error');
  //       return;
  //     }

  //     await new Promise(resolve => setTimeout(resolve, 2000));
  //     showToast('✅ Leave application submitted successfully!', 'success');
  //     setActiveModal(null);
  //   } catch (error) {
  //     showToast('❌ Failed to submit leave application', 'error');
  //   } finally {
  //     setLeaveLoading(false);
  //   }
  // };

// const handleLeaveSubmit = async (formData) => {
//   setLeaveLoading(true);

//   try {
//     if (!currentUser || !currentUser.employeeId) {
//       showToast("❌ Employee not found. Please login again.", "error");
//       return;
//     }

//     if (
//       !formData.type ||
//       !formData.startDate ||
//       !formData.endDate ||
//       !formData.reason
//     ) {
//       showToast("❌ Please fill all required fields", "error");
//       return;
//     }

//     await dispatch(
//       applyLeave({
//         formData,
//         employeeId: currentUser.employeeId,
//         employeeName: currentUser.name,
//       })
//     ).unwrap();

//     showToast("✅ Leave application submitted successfully!", "success");
//     setActiveModal(null);
//   } catch (error) {
//     showToast(
//       error?.message || "❌ Failed to submit leave application",
//       "error"
//     );
//   } finally {
//     setLeaveLoading(false);
//   }
// };


// App.js me handleLeaveSubmit
// const handleLeaveSubmit = async (formData) => {
//   setLeaveLoading(true);

//   try {
//     if (!currentUser || !currentUser.employeeId) {
//       showToast("❌ Employee not found. Please login again.", "error");
//       return;
//     }

//     // ✅ Validate dates
//     const start = new Date(formData.startDate);
//     const end = new Date(formData.endDate);
    
//     if (end < start) {
//       showToast("❌ End date cannot be before start date", "error");
//       setLeaveLoading(false);
//       return;
//     }

//     // ✅ Dispatch leave application
//     const resultAction = await dispatch(
//       applyLeave({
//         formData,
//         employeeId: currentUser.employeeId,
//         employeeName: currentUser.name,
//       })
//     );

//     console.log("🔄 Dispatch Result:", resultAction);
    
//     if (applyLeave.fulfilled.match(resultAction)) {
//       showToast("✅ Leave application submitted successfully!", "success");
//       setActiveModal(null);
//     } else {
//       const errorMessage = resultAction.payload?.message || 
//                           resultAction.error?.message || 
//                           "❌ Failed to submit leave application";
//       showToast(errorMessage, "error");
//     }

//   } catch (error) {
//     console.error("❌ Unexpected Error:", error);
//     showToast("❌ An unexpected error occurred", "error");
//   } finally {
//     setLeaveLoading(false);
//   }
// };


const handleLeaveSubmit = async (formData) => {
  setLeaveLoading(true);

  try {
    if (!currentUser || !currentUser.employeeId) {
      showToast("❌ Employee not found. Please login again.", "error");
      return;
    }

    console.log("📝 Submitting leave with:", formData);

    // ✅ Dispatch with mapping (Redux handle karega)
    const result = await dispatch(
      applyLeave({
        formData,
        employeeId: currentUser.employeeId,
        employeeName: currentUser.name,
      })
    ).unwrap();

    console.log("✅ Leave Result:", result);
    showToast("✅ Leave application submitted successfully!", "success");
    setActiveModal(null);

  } catch (error) {
    console.error("❌ Leave Error:", error);
    
    // ✅ User-friendly error messages
    let errorMessage = "❌ Failed to submit leave application";
    
    if (typeof error === 'string') {
      if (error.includes("holiday")) {
        errorMessage = error;
      } else if (error.includes("already applied")) {
        errorMessage = error;
      }
    } else if (error?.message) {
      errorMessage = error.message;
    }
    
    showToast(errorMessage, "error");
  } finally {
    setLeaveLoading(false);
  }
};



  // Handle GitHub Push
  const handleGithubPush = async (formData) => {
    setGithubLoading(true);
    
    try {
      if (!formData.repository || !formData.commitMessage) {
        showToast('❌ Please fill all required fields', 'error');
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
      showToast('✅ Code pushed to GitHub successfully!', 'success');
    } catch (error) {
      showToast('❌ Failed to push code to GitHub', 'error');
    } finally {
      setGithubLoading(false);
    }
  };

  // Open Modal function
  const openModal = (modalName) => {
    if (modalName === 'attendance-calendar') {
      setShowAttendanceCalendar(true);
    } else if (modalName === 'attendance') {
      setActiveModal('attendance');
    } else if (modalName === 'projects') {
      setActiveModal('projects');
    } else if (modalName === 'tasks') {
      setActiveModal('tasks');
    } else {
      setActiveModal(modalName);
    }
  };

  // Close Modal function
  const closeModal = () => {
    setActiveModal(null);
    setShowAttendanceCalendar(false);
  };

  // Render Login Page if not authenticated
  if (!currentUser) {
    return (
      <>
        <Login 
          onLogin={handleLogin} 
          onRegister={handleRegister}
          loading={authLoading}
          registerLoading={false}
        />
        <Toast toast={toast} onClose={hideToast} />
      </>
    );
  }

  // Main Dashboard
  return (
    <div className="app">
      <div className="app-container">
        <Header
          currentUser={currentUser}
          onProfileClick={() => openModal('profile')}
          onLogout={handleLogout}
          onCardClick={openModal}
          attendanceStatus={attendance}
        />

        {/* ✅ DASHBOARD */}
        <div className="dashboard-wrapper">
          {/* <Dashboard /> */}
     
<Dashboard currentUser={currentUser} />
        </div>

        {/* ✅ SLIDERS */}
        <AnnouncementSlider />
        <BirthdaySlider />
        <EmployeeSlider/>

        {/* ✅ ATTENDANCE MODAL */}
        <AttendanceModal
          isOpen={activeModal === 'attendance'}
          onClose={closeModal}
          attendance={attendance}
          onPunch={handlePunch}
        />

        {/* ✅ PROJECTS MODAL */}
        <ProjectsModal
          isOpen={activeModal === 'projects'}
          onClose={closeModal}
          currentUser={currentUser}
           onCardClick={openModal}
        />

        <TasksModal
          isOpen={activeModal === 'tasks'}
          onClose={closeModal}
          currentUser={currentUser}
        />

        {/* ✅ ATTENDANCE CALENDAR MODAL */}
        {/* <AttendanceCalendarModal
          isOpen={showAttendanceCalendar}
          onClose={closeModal}
          currentUser={currentUser}
          attendanceData={attendance}
        /> */}


        <AttendanceCalendarModal
  isOpen={showAttendanceCalendar}
  onClose={closeModal}
  empId={currentUser?.employeeId}  // ✅ सिर्फ empId pass करें
  attendanceData={attendance}
/>

        {/* ✅ OTHER MODALS */}
        <LeaveModal
          isOpen={activeModal === 'leave'}
          onClose={closeModal}
          onLeaveSubmit={handleLeaveSubmit}
          loading={leaveLoading}
        />

        <BirthdayModal
          isOpen={activeModal === 'birthday'}
          onClose={closeModal}
        />

        <ProfileModal
          isOpen={activeModal === 'profile'}
          onClose={closeModal}
          currentUser={currentUser}
        />

        <CalendarModal
          isOpen={activeModal === 'calendar'}
          onClose={closeModal}
        />

        <GithubModal
          isOpen={activeModal === 'github'}
          onClose={closeModal}
          onPushCode={handleGithubPush}
          loading={githubLoading}
        />

        <SalaryModal
          isOpen={activeModal === 'salary'}
          onClose={closeModal}
          currentUser={currentUser}
        />

        <Toast toast={toast} onClose={hideToast} />
      </div>
    </div>
  );
}

export default App;