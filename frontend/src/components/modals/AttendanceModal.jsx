// import React from 'react';
// import Modal from '../common/Modal';
// import './AttendanceModal.css';

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading
//   } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return 'Ready to punch out!';

//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       title="⏰ Attendance Tracker"
//       size="medium"
//     >
//       <div className="attendance-modal-content">
//         <div className={`attendance-status-card ${isPunchedIn ? 'active' : 'inactive'}`}>
//           <div className="status-header">
//             <h3 className="status-title">
//               Today's Status:
//               <span className="status-value">
//                 {isPunchedIn ? ' 🟢 Punched In' : ' ⚪ Not Punched In'}
//               </span>
//             </h3>
//           </div>

//           <div className="working-time-display">
//             <div className="time-value">{workingTime}</div>
//             <p className="time-label">Working Hours Today</p>
//           </div>

//           {isPunchedIn && (
//             <div className="progress-section">
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${calculateProgress()}%` }}
//                 ></div>
//               </div>
//               <div className="progress-info">
//                 <span className="progress-text">{getRemainingTime()}</span>
//                 <span className="progress-percentage">
//                   {calculateProgress().toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}

//           <button
//             className={`punch-button ${isPunchedIn ? 'punch-out' : 'punch-in'} ${loading ? 'loading' : ''}`}
//             onClick={onPunch}
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <span className="button-spinner"></span>
//                 Processing...
//               </>
//             ) : isPunchedIn ? (
//               canLogout ? (
//                 '🔴 Punch Out'
//               ) : (
//                 `⏳ ${getRemainingTime()}`
//               )
//             ) : (
//               '🟢 Punch In'
//             )}
//           </button>

//           <div className="location-info">
//             <span className="location-icon">📍</span>
//             <span className="location-text">
//               {isPunchedIn ? 'Location tracking active' : 'Location will be detected on punch in'}
//             </span>
//           </div>
//         </div>

//         {isPunchedIn && (
//           <div className="attendance-stats">
//             <div className="stat-item">
//               <div className="stat-value">{workingHours.toFixed(2)}h</div>
//               <div className="stat-label">Total Time</div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-value">
//                 {canLogout ? '✅' : '⏳'}
//               </div>
//               <div className="stat-label">7 Hours</div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-value">
//                 {Math.floor(workingHours)}h {Math.floor((workingHours % 1) * 60)}m
//               </div>
//               <div className="stat-label">Completed</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </Modal>
//   );
// };

// export default AttendanceModal;

// import React from 'react';
// import './AttendanceModal.css';

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading
//   } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return 'Ready to punch out!';

//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <div className="attendance-tracker-content">
//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Attendance Tracker</h2>
//         </div>

//         <div className={`attendance-status-card ${isPunchedIn ? 'active' : 'inactive'}`}>
//           <div className="status-header">
//             <h3 className="status-title">
//               Today's Status:
//               <span className="status-value">
//                 {isPunchedIn ? ' 🟢 Punched In' : ' ⚪ Not Punched In'}
//               </span>
//             </h3>
//           </div>

//           <div className="working-time-display">
//             <div className="time-value">{workingTime}</div>
//             <p className="time-label">Working Hours Today</p>
//           </div>

//           {isPunchedIn && (
//             <div className="progress-section">
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${calculateProgress()}%` }}
//                 ></div>
//               </div>
//               <div className="progress-info">
//                 <span className="progress-text">{getRemainingTime()}</span>
//                 <span className="progress-percentage">
//                   {calculateProgress().toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}

//           <button
//             className={`punch-button ${isPunchedIn ? 'punch-out' : 'punch-in'} ${loading ? 'loading' : ''}`}
//             onClick={onPunch}
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <span className="button-spinner"></span>
//                 Processing...
//               </>
//             ) : isPunchedIn ? (
//               canLogout ? (
//                 '🔴 Punch Out'
//               ) : (
//                 `⏳ ${getRemainingTime()}`
//               )
//             ) : (
//               '🟢 Punch In'
//             )}
//           </button>

//           <div className="location-info">
//             <span className="location-icon">📍</span>
//             <span className="location-text">
//               {isPunchedIn ? 'Location tracking active' : 'Location will be detected on punch in'}
//             </span>
//           </div>
//         </div>

//         {isPunchedIn && (
//           <div className="attendance-stats">
//             <div className="stat-item">
//               <div className="stat-value">{workingHours.toFixed(2)}h</div>
//               <div className="stat-label">Total Time</div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-value">
//                 {canLogout ? '✅' : '⏳'}
//               </div>
//               <div className="stat-label">7 Hours</div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-value">
//                 {Math.floor(workingHours)}h {Math.floor((workingHours % 1) * 60)}m
//               </div>
//               <div className="stat-label">Completed</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React from 'react';
// import './AttendanceModal.css';

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <div className="attendance-tracker-content">

//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Attendance Tracker</h2>
//         </div>

//         <div className={`attendance-status-card ${isPunchedIn ? 'active' : 'inactive'}`}>
//           <div className="status-header">
//             <h3 className="status-title">
//               Today's Status:
//               <span className="status-value">
//                 {isPunchedIn ? ' 🟢 Punched In' : ' ⚪ Not Punched In'}
//               </span>
//             </h3>
//           </div>

//           <div className="working-time-display">
//             <div className="time-value">{workingTime}</div>
//             <p className="time-label">Working Hours Today</p>
//           </div>

//           {isPunchedIn && (
//             <div className="progress-section">

//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${calculateProgress()}%` }}
//                 ></div>
//               </div>

//               <div className="progress-info">
//                 <span className="progress-text">{getRemainingTime()}</span>
//                 <span className="progress-percentage">
//                   {calculateProgress().toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}

//           <button
//             className={`punch-button ${isPunchedIn ? 'punch-out' : 'punch-in'} ${loading ? 'loading' : ''}`}
//             onClick={onPunch}
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <span className="button-spinner"></span> Processing...
//               </>
//             ) : isPunchedIn ? (
//               canLogout ? (
//                 '🔴 Punch Out'
//               ) : (
//                 `⏳ ${getRemainingTime()}`
//               )
//             ) : (
//               '🟢 Punch In'
//             )}
//           </button>

//           <div className="location-info">
//             <span className="location-icon">📍</span>
//             <span className="location-text">
//               {isPunchedIn ? 'Location tracking active' : 'Location will be detected on punch in'}
//             </span>
//           </div>
//         </div>

//         {isPunchedIn && (
//           <div className="attendance-stats">
//             <div className="stat-item">
//               <div className="stat-value">{workingHours.toFixed(2)}h</div>
//               <div className="stat-label">Total Time</div>
//             </div>

//             <div className="stat-item">
//               <div className="stat-value">{canLogout ? '✅' : '⏳'}</div>
//               <div className="stat-label">7 Hours</div>
//             </div>

//             <div className="stat-item">
//               <div className="stat-value">
//                 {Math.floor(workingHours)}h {Math.floor((workingHours % 1) * 60)}m
//               </div>
//               <div className="stat-label">Completed</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React from 'react';
// import './AttendanceModal.css';

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     activityData,
//   } = attendance;

//   const calculateProgress = () => {
//     if (!workingHours) return 0;
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";

//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <div className="attendance-tracker-content">

//         {/* HEADER */}
//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Attendance Tracker</h2>
//         </div>

//         {/* STATUS CARD */}
//         <div className={`attendance-status-card ${isPunchedIn ? 'active' : 'inactive'}`}>

//           <div className="status-header">
//             <h3 className="status-title">
//               Today's Status:
//               <span className="status-value">
//                 {isPunchedIn ? ' 🟢 Punched In' : ' ⚪ Not Punched In'}
//               </span>
//             </h3>
//           </div>

//           {/* WORKING TIME */}
//           <div className="working-time-display">
//             <div className="time-value">{workingTime || "00:00:00"}</div>
//             <p className="time-label">Working Hours Today</p>
//           </div>

//           {/* PROGRESS BAR */}
//           {isPunchedIn && (
//             <div className="progress-section">
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${calculateProgress()}%` }}
//                 ></div>
//               </div>

//               <div className="progress-info">
//                 <span className="progress-text">{getRemainingTime()}</span>
//                 <span className="progress-percentage">
//                   {calculateProgress().toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}

//           {/* BUTTON */}
//           <button
//             className={`punch-button ${isPunchedIn ? 'punch-out' : 'punch-in'} ${loading ? 'loading' : ''}`}
//             onClick={onPunch}
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <span className="button-spinner"></span> Processing...
//               </>
//             ) : isPunchedIn ? (
//               canLogout ? (
//                 "🔴 Punch Out"
//               ) : (
//                 `⏳ ${getRemainingTime()}`
//               )
//             ) : (
//               "🟢 Punch In"
//             )}
//           </button>

//           {/* LOCATION INFO */}
//           <div className="location-info">
//             <span className="location-icon">📍</span>
//             <span className="location-text">
//               {isPunchedIn
//                 ? "Location tracking active"
//                 : "Location will be detected on punch in"}
//             </span>
//           </div>
//         </div>

//         {/* ELECTRON ACTIVITY DATA */}
//         {isPunchedIn && (
//           <div className="attendance-stats">

//             <div className="stat-item">
//               <div className="stat-value">{workingHours.toFixed(2)}h</div>
//               <div className="stat-label">Total Time</div>
//             </div>

//             <div className="stat-item">
//               <div className="stat-value">{canLogout ? "✅" : "⏳"}</div>
//               <div className="stat-label">7 Hours</div>
//             </div>

//             <div className="stat-item">
//               <div className="stat-value">
//                 {Math.floor(workingHours)}h {Math.floor((workingHours % 1) * 60)}m
//               </div>
//               <div className="stat-label">Completed</div>
//             </div>

//             {/* NEW — ACTIVITY FROM ELECTRON */}
//             <div className="stat-item">
//               <div className="stat-value">
//                 {activityData?.lastKey || "-"}
//               </div>
//               <div className="stat-label">Last Key</div>
//             </div>

//             <div className="stat-item">
//               <div className="stat-value">
//                 {activityData?.isActive ? "🟢 Active" : "⚪ Idle"}
//               </div>
//               <div className="stat-label">User State</div>
//             </div>

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React from 'react';
// import './AttendanceModal.css';

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     activityData
//   } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <div className="attendance-tracker-content">

//         {/* Header */}
//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Attendance Tracker</h2>
//         </div>

//         {/* Status Card */}
//         <div className={`attendance-status-card ${isPunchedIn ? "active" : "inactive"}`}>
//           <div className="status-header">
//             <h3 className="status-title">
//               Today's Status:
//               <span className="status-value">
//                 {isPunchedIn ? " 🟢 Punched In" : " ⚪ Not Punched In"}
//               </span>
//             </h3>
//           </div>

//           {/* Working Time */}
//           <div className="working-time-display">
//             <div className="time-value">{workingTime}</div>
//             <p className="time-label">Working Hours Today</p>
//           </div>

//           {/* Progress Bar */}
//           {isPunchedIn && (
//             <div className="progress-section">
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${calculateProgress()}%` }}
//                 ></div>
//               </div>

//               <div className="progress-info">
//                 <span className="progress-text">{getRemainingTime()}</span>
//                 <span className="progress-percentage">
//                   {calculateProgress().toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}

//           {/* Activity Tracking (NEW) */}
//           {isPunchedIn && (
//             <div className="activity-tracker-box">
//               <h3 className="activity-title">🧩 User Activity Tracking</h3>

//               <div className="activity-item">
//                 <strong>Last Key:</strong> {activityData.lastKey || "No activity"}
//               </div>

//               <div className="activity-item">
//                 <strong>Last Activity:</strong>{" "}
//                 {activityData.lastEventTime || "—"}
//               </div>

//               <div className="activity-item">
//                 <strong>Status:</strong>{" "}
//                 {activityData.isActive ? "🟢 Active" : "🔴 Idle"}
//               </div>

//               <div className="activity-item">
//                 <strong>Total Active:</strong>{" "}
//                 {activityData.totalActiveMinutes} min
//               </div>
//             </div>
//           )}

//           {/* Punch Button */}
//           <button
//             className={`punch-button ${isPunchedIn ? "punch-out" : "punch-in"} ${
//               loading ? "loading" : ""
//             }`}
//             onClick={onPunch}
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <span className="button-spinner"></span> Processing...
//               </>
//             ) : isPunchedIn ? (
//               canLogout ? (
//                 "🔴 Punch Out"
//               ) : (
//                 `⏳ ${getRemainingTime()}`
//               )
//             ) : (
//               "🟢 Punch In"
//             )}
//           </button>

//           {/* Location Info */}
//           <div className="location-info">
//             <span className="location-icon">📍</span>
//             <span className="location-text">
//               {isPunchedIn
//                 ? "Location tracking active"
//                 : "Location will be detected on punch in"}
//             </span>
//           </div>

//         </div>

//         {/* Footer Stats */}
//         {isPunchedIn && (
//           <div className="attendance-stats">
//             <div className="stat-item">
//               <div className="stat-value">{workingHours.toFixed(2)}h</div>
//               <div className="stat-label">Total Time</div>
//             </div>

//             <div className="stat-item">
//               <div className="stat-value">{canLogout ? "✅" : "⏳"}</div>
//               <div className="stat-label">7 Hours</div>
//             </div>

//             <div className="stat-item">
//               <div className="stat-value">
//                 {Math.floor(workingHours)}h {Math.floor((workingHours % 1) * 60)}m
//               </div>
//               <div className="stat-label">Completed</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React from "react";
// import "./AttendanceModal.css";

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <div className="attendance-tracker-content">

//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Attendance Tracker</h2>
//         </div>

//         <div
//           className={`attendance-status-card ${
//             isPunchedIn ? "active" : "inactive"
//           }`}
//         >
//           <div className="status-header">
//             <h3 className="status-title">
//               Today's Status:
//               <span className="status-value">
//                 {isPunchedIn ? " 🟢 Punched In" : " ⚪ Not Punched In"}
//               </span>
//             </h3>
//           </div>

//           <div className="working-time-display">
//             <div className="time-value">{workingTime}</div>
//             <p className="time-label">Working Hours Today</p>
//           </div>

//           {isPunchedIn && (
//             <div className="progress-section">
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${calculateProgress()}%` }}
//                 ></div>
//               </div>

//               <div className="progress-info">
//                 <span className="progress-text">{getRemainingTime()}</span>
//                 <span className="progress-percentage">
//                   {calculateProgress().toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}

//           <button
//             className={`punch-button ${
//               isPunchedIn ? "punch-out" : "punch-in"
//             } ${loading ? "loading" : ""}`}
//             onClick={onPunch}
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <span className="button-spinner"></span> Processing...
//               </>
//             ) : isPunchedIn ? (
//               canLogout ? "🔴 Punch Out" : `⏳ ${getRemainingTime()}`
//             ) : (
//               "🟢 Punch In"
//             )}
//           </button>

//           <div className="location-info">
//             <span className="location-icon">📍</span>
//             <span className="location-text">
//               {isPunchedIn
//                 ? "Location tracking active"
//                 : "Location will be detected on punch in"}
//             </span>
//           </div>
//         </div>

//         {isPunchedIn && (
//           <div className="attendance-stats">
//             <div className="stat-item">
//               <div className="stat-value">{workingHours.toFixed(2)}h</div>
//               <div className="stat-label">Total Time</div>
//             </div>

//             <div className="stat-item">
//               <div className="stat-value">{canLogout ? "✅" : "⏳"}</div>
//               <div className="stat-label">7 Hours</div>
//             </div>

//             <div className="stat-item">
//               <div className="stat-value">
//                 {Math.floor(workingHours)}h{" "}
//                 {Math.floor((workingHours % 1) * 60)}m
//               </div>
//               <div className="stat-label">Completed</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React from "react";
// import "./AttendanceModal.css";

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remaining = 7 - workingHours;
//     const hours = Math.floor(remaining);
//     const minutes = Math.floor((remaining - hours) * 60);
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <div className="attendance-tracker-content">

//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Attendance Tracker</h2>
//         </div>

//         <div className={`attendance-status-card ${isPunchedIn ? "active" : "inactive"}`}>

//           <div className="status-header">
//             <h3 className="status-title">
//               Status:
//               <span className="status-value">
//                 {isPunchedIn ? " 🟢 Punched In" : " ⚪ Not Punched In"}
//               </span>
//             </h3>
//           </div>

//           <div className="working-time-display">
//             <div className="time-value">{workingTime}</div>
//             <p className="time-label">Working Hours Today</p>
//           </div>

//           {isPunchedIn && (
//             <div className="progress-section">
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${calculateProgress()}%` }}
//                 ></div>
//               </div>

//               <div className="progress-info">
//                 <span className="progress-text">{getRemainingTime()}</span>
//                 <span className="progress-percentage">
//                   {calculateProgress().toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}

//           <button
//             className={`punch-button ${isPunchedIn ? "punch-out" : "punch-in"} ${loading ? "loading" : ""}`}
//             onClick={onPunch}
//             disabled={loading || (isPunchedIn && !canLogout)}
//           >
//             {loading ? (
//               <>
//                 <span className="button-spinner"></span> Processing...
//               </>
//             ) : isPunchedIn ? (
//               canLogout ? "🔴 Punch Out" : `⏳ ${getRemainingTime()}`
//             ) : (
//               "🟢 Punch In"
//             )}
//           </button>

//           <div className="location-info">
//             <span className="location-icon">📍</span>
//             <span className="location-text">
//               {isPunchedIn ? "Location tracking active" : "Click punch in to start"}
//             </span>
//           </div>
//         </div>

//         {isPunchedIn && (
//           <div className="attendance-stats">
//             <div className="stat-item">
//               <div className="stat-value">{workingHours.toFixed(2)}h</div>
//               <div className="stat-label">Total Time</div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-value">{canLogout ? "✅" : "⏳"}</div>
//               <div className="stat-label">7 Hours</div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-value">
//                 {Math.floor(workingHours)}h {Math.floor((workingHours % 1) * 60)}m
//               </div>
//               <div className="stat-label">Completed</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

//thik  he ye code

//     import React from "react";
// import "./AttendanceModal.css";
// import { useEffect } from "react";

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) {
//       return "Ready to punch out!";
//     }

//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle"; // ✅ IDLE status
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused"; // ✅ IDLE text
//     return "🟢 Active Tracking";
//   };

//   // App.jsx ya Dashboard.jsx mein
// useEffect(() => {
//   const handler = (e) => {
//     console.log('Network Tab Proof →', e.detail);
//   };
//   window.addEventListener('electron-activity', handler);
//   return () => window.removeEventListener('electron-activity', handler);
// }, []);

//   return (
//     <div className="attendance-tracker-container">
//       <div className="attendance-tracker-content">

//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//         </div>

//         <div className={`attendance-status-card ${getStatusColor()}`}>

//           {/* ✅ CURRENT APP & IDLE STATUS */}
//           {isPunchedIn && (
//             <div className="current-app-info">
//               <span className="app-icon">💻</span>
//               <span className="app-text">Using: {currentApp}</span>
//               {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//             </div>
//           )}

//           <div className="status-header">
//             <h3 className="status-title">
//               Today's Status:
//               <span className="status-value">
//                 {getStatusText()}
//               </span>
//             </h3>
//           </div>

//           <div className="working-time-display">
//             <div className="time-value">
//               {workingTime}
//               {isIdle && <span className="paused-indicator"> ⏸️</span>}
//             </div>
//             <p className="time-label">
//               {isPunchedIn
//                 ? (isIdle
//                     ? "⏸️ Tracking Paused (No Activity)"
//                     : "🟢 Active Working Time")
//                 : "Working Hours Today"
//               }
//             </p>
//           </div>

//           {isPunchedIn && (
//             <div className="progress-section">
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{
//                     width: `${calculateProgress()}%`,
//                     backgroundColor: isIdle ? '#f59e0b' : '#10b981' // ✅ Color change when idle
//                   }}
//                 ></div>
//               </div>

//               <div className="progress-info">
//                 <span className="progress-text">
//                   {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                 </span>
//                 <span className="progress-percentage">
//                   {calculateProgress().toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}

//           <button
//             className={`punch-button ${
//               isPunchedIn ? "punch-out" : "punch-in"
//             } ${loading ? "loading" : ""}`}
//             onClick={onPunch}
//             disabled={loading || (isPunchedIn && !canLogout)}
//           >
//             {loading ? (
//               <>
//                 <span className="button-spinner"></span> Processing...
//               </>
//             ) : isPunchedIn ? (
//               canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//             ) : (
//               "🟢 Start Tracking & Punch In"
//             )}
//           </button>

//           <div className="location-info">
//             <span className="location-icon">📍</span>
//             <span className="location-text">
//               {isPunchedIn
//                 ? (isIdle
//                     ? "⏸️ Location tracking paused"
//                     : "📍 Location & Activity tracking active")
//                 : "Location will be captured on punch in"
//               }
//             </span>
//           </div>
//         </div>

//         {isPunchedIn && (
//           <div className="tracking-details">
//             <h4 className="details-title">📊 Live Tracking Details</h4>
//             <div className="details-grid">
//               <div className="detail-item">
//                 <span className="detail-label">Current Application:</span>
//                 <span className="detail-value">{currentApp}</span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Tracking Status:</span>
//                 <span className="detail-value">
//                   {isIdle ? "⏸️ PAUSED (User Idle)" : "🟢 ACTIVE"}
//                 </span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Total Time:</span>
//                 <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Required Time:</span>
//                 <span className="detail-value">7 hours</span>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// css updating for attandance model

// import React from "react";
// import "./AttendanceModal.css";
// import { useEffect } from "react";

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) {
//       return "Ready to punch out!";
//     }

//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   useEffect(() => {
//     const handler = (e) => {
//       console.log('Network Tab Proof →', e.detail);
//     };
//     window.addEventListener('electron-activity', handler);
//     return () => window.removeEventListener('electron-activity', handler);
//   }, []);

//   return (
//     <div className="attendance-tracker-container">
//       <div className="attendance-tracker-content">

//         {/* Activity Tracker Section (Left Side) */}
//         <div className="activity-tracker-section">
//           <div className="attendance-tracker-header">
//             <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//           </div>

//           <div className={`attendance-status-card ${getStatusColor()}`}>

//             {/* CURRENT APP & IDLE STATUS */}
//             {isPunchedIn && (
//               <div className="current-app-info">
//                 <span className="app-icon">💻</span>
//                 <span className="app-text">Using: {currentApp}</span>
//                 {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//               </div>
//             )}

//             <div className="status-header">
//               <h3 className="status-title">
//                 Today's Status:
//                 <span className="status-value">
//                   {getStatusText()}
//                 </span>
//               </h3>
//             </div>

//             <div className="working-time-display">
//               <div className="time-value">
//                 {workingTime}
//                 {isIdle && <span className="paused-indicator"> ⏸️</span>}
//               </div>
//               <p className="time-label">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Tracking Paused (No Activity)"
//                       : "🟢 Active Working Time")
//                   : "Working Hours Today"
//                 }
//               </p>
//             </div>

//             {isPunchedIn && (
//               <div className="progress-section">
//                 <div className="progress-bar">
//                   <div
//                     className="progress-fill"
//                     style={{
//                       width: `${calculateProgress()}%`,
//                       backgroundColor: isIdle ? '#f59e0b' : '#10b981'
//                     }}
//                   ></div>
//                 </div>

//                 <div className="progress-info">
//                   <span className="progress-text">
//                     {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                   </span>
//                   <span className="progress-percentage">
//                     {calculateProgress().toFixed(1)}%
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               className={`punch-button ${
//                 isPunchedIn ? "punch-out" : "punch-in"
//               } ${loading ? "loading" : ""}`}
//               onClick={onPunch}
//               disabled={loading || (isPunchedIn && !canLogout)}
//             >
//               {loading ? (
//                 <>
//                   <span className="button-spinner"></span> Processing...
//                 </>
//               ) : isPunchedIn ? (
//                 canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//               ) : (
//                 "🟢 Start Tracking & Punch In"
//               )}
//             </button>

//             <div className="location-info">
//               <span className="location-icon">📍</span>
//               <span className="location-text">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Location tracking paused"
//                       : "📍 Location & Activity tracking active")
//                   : "Location will be captured on punch in"
//                 }
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Tracking Details Section (Right Side) - Only show when punched in */}
//         {isPunchedIn && (
//           <div className="tracking-details">
//             <h4 className="details-title">📊 Live Tracking Details</h4>
//             <div className="details-grid">
//               <div className="detail-item">
//                 <span className="detail-label">Current Application:</span>
//                 <span className="detail-value">{currentApp}</span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Tracking Status:</span>
//                 <span className="detail-value">
//                   {isIdle ? "⏸️ PAUSED (User Idle)" : "🟢 ACTIVE"}
//                 </span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Total Time:</span>
//                 <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Required Time:</span>
//                 <span className="detail-value">7 hours</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React from "react";
// import "./AttendanceModal.css";
// import { useEffect } from "react";

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) {
//       return "Ready to punch out!";
//     }

//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle"; // ✅ IDLE status
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused"; // ✅ IDLE text
//     return "🟢 Active Tracking";
//   };

//   // App.jsx ya Dashboard.jsx mein
// useEffect(() => {
//   const handler = (e) => {
//     console.log('Network Tab Proof →', e.detail);
//   };
//   window.addEventListener('electron-activity', handler);
//   return () => window.removeEventListener('electron-activity', handler);
// }, []);

//   return (
//     <div className="attendance-tracker-container">
//       {/* ✅ YAHAN CHANGE KARO - Line 65 */}
//       <div className={`attendance-tracker-content ${isPunchedIn ? 'punched-in' : ''}`}>

//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//         </div>

//         <div className={`attendance-status-card ${getStatusColor()}`}>

//           {/* ✅ CURRENT APP & IDLE STATUS */}
//           {isPunchedIn && (
//             <div className="current-app-info">
//               <span className="app-icon">💻</span>
//               <span className="app-text">Using: {currentApp}</span>
//               {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//             </div>
//           )}

//           <div className="status-header">
//             <h3 className="status-title">
//               Today's Status:
//               <span className="status-value">
//                 {getStatusText()}
//               </span>
//             </h3>
//           </div>

//           <div className="working-time-display">
//             <div className="time-value">
//               {workingTime}
//               {isIdle && <span className="paused-indicator"> ⏸️</span>}
//             </div>
//             <p className="time-label">
//               {isPunchedIn
//                 ? (isIdle
//                     ? "⏸️ Tracking Paused (No Activity)"
//                     : "🟢 Active Working Time")
//                 : "Working Hours Today"
//               }
//             </p>
//           </div>

//           {isPunchedIn && (
//             <div className="progress-section">
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{
//                     width: `${calculateProgress()}%`,
//                     backgroundColor: isIdle ? '#f59e0b' : '#10b981' // ✅ Color change when idle
//                   }}
//                 ></div>
//               </div>

//               <div className="progress-info">
//                 <span className="progress-text">
//                   {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                 </span>
//                 <span className="progress-percentage">
//                   {calculateProgress().toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}

//           <button
//             className={`punch-button ${
//               isPunchedIn ? "punch-out" : "punch-in"
//             } ${loading ? "loading" : ""}`}
//             onClick={onPunch}
//             disabled={loading || (isPunchedIn && !canLogout)}
//           >
//             {loading ? (
//               <>
//                 <span className="button-spinner"></span> Processing...
//               </>
//             ) : isPunchedIn ? (
//               canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//             ) : (
//               "🟢 Start Tracking & Punch In"
//             )}
//           </button>

//           <div className="location-info">
//             <span className="location-icon">📍</span>
//             <span className="location-text">
//               {isPunchedIn
//                 ? (isIdle
//                     ? "⏸️ Location tracking paused"
//                     : "📍 Location & Activity tracking active")
//                 : "Location will be captured on punch in"
//               }
//             </span>
//           </div>
//         </div>

//         {isPunchedIn && (
//           <div className="tracking-details">
//             <h4 className="details-title">📊 Live Tracking Details</h4>
//             <div className="details-grid">
//               <div className="detail-item">
//                 <span className="detail-label">Current Application:</span>
//                 <span className="detail-value">{currentApp}</span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Tracking Status:</span>
//                 <span className="detail-value">
//                   {isIdle ? "⏸️ PAUSED (User Idle)" : "🟢 ACTIVE"}
//                 </span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Total Time:</span>
//                 <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Required Time:</span>
//                 <span className="detail-value">7 hours</span>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React from "react";
// import "./AttendanceModal.css";

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) {
//       return "Ready to punch out!";
//     }

//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <div className={`attendance-tracker-content ${isPunchedIn ? 'punched-in' : ''}`}>
//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//         </div>

//         <div className="attendance-cards-wrapper">
//           <div className={`attendance-status-card ${getStatusColor()}`}>
//             {/* ✅ CURRENT APP & IDLE STATUS */}
//             {isPunchedIn && (
//               <div className="current-app-info">
//                 <span className="app-icon">💻</span>
//                 <span className="app-text">Using: {currentApp}</span>
//                 {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//               </div>
//             )}

//             <div className="status-header">
//               <h3 className="status-title">
//                 Today's Status:
//                 <span className="status-value">
//                   {getStatusText()}
//                 </span>
//               </h3>
//             </div>

//             <div className="working-time-display">
//               <div className="time-value">
//                 {workingTime}
//                 {isIdle && <span className="paused-indicator"> ⏸️</span>}
//               </div>
//               <p className="time-label">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Tracking Paused (No Activity)"
//                       : "🟢 Active Working Time")
//                   : "Working Hours Today"
//                 }
//               </p>
//             </div>

//             {isPunchedIn && (
//               <div className="progress-section">
//                 <div className="progress-bar">
//                   <div
//                     className="progress-fill"
//                     style={{
//                       width: `${calculateProgress()}%`,
//                       backgroundColor: isIdle ? '#f59e0b' : '#10b981'
//                     }}
//                   ></div>
//                 </div>

//                 <div className="progress-info">
//                   <span className="progress-text">
//                     {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                   </span>
//                   <span className="progress-percentage">
//                     {calculateProgress().toFixed(1)}%
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               className={`punch-button ${
//                 isPunchedIn ? "punch-out" : "punch-in"
//               } ${loading ? "loading" : ""}`}
//               onClick={onPunch}
//               disabled={loading || (isPunchedIn && !canLogout)}
//             >
//               {loading ? (
//                 <>
//                   <span className="button-spinner"></span> Processing...
//                 </>
//               ) : isPunchedIn ? (
//                 canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//               ) : (
//                 "🟢 Start Tracking & Punch In"
//               )}
//             </button>

//             <div className="location-info">
//               <span className="location-icon">📍</span>
//               <span className="location-text">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Location tracking paused"
//                       : "📍 Location & Activity tracking active")
//                   : "Location will be captured on punch in"
//                 }
//               </span>
//             </div>
//           </div>

//           {isPunchedIn && (
//             <div className="tracking-details">
//               <h4 className="details-title">📊 Live Tracking Details</h4>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <span className="detail-label">Current Application:</span>
//                   <span className="detail-value">{currentApp}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Tracking Status:</span>
//                   <span className="detail-value">
//                     {isIdle ? "⏸️ PAUSED (User Idle)" : "🟢 ACTIVE"}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Total Time:</span>
//                   <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Required Time:</span>
//                   <span className="detail-value">7 hours</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./AttendanceModal.css";

// // Office coordinates (from your Google Maps link)
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100; // 100 meter radius

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;
//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [distance, setDistance] = useState(null);
//   const [locationLoading, setLocationLoading] = useState(false);

//   // Calculate distance between two coordinates (Haversine formula)
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000; // Earth's radius in meters
//     const φ1 = lat1 * Math.PI / 180;
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//               Math.cos(φ1) * Math.cos(φ2) *
//               Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c; // Distance in meters
//   };

//   // Check user's current location
//   const checkLocation = () => {
//     setLocationLoading(true);

//     if (!navigator.geolocation) {
//       toast.error("❌ Geolocation is not supported by your browser", {
//         position: "top-right",
//         autoClose: 3000,
//         theme: "dark"
//       });
//       setLocationLoading(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const userLat = position.coords.latitude;
//         const userLng = position.coords.longitude;
//         const accuracy = position.coords.accuracy;

//         // Calculate distance
//         const calculatedDistance = calculateDistance(
//           userLat,
//           userLng,
//           OFFICE_LAT,
//           OFFICE_LNG
//         );

//         setDistance(calculatedDistance);
//         const withinRange = calculatedDistance <= ALLOWED_RADIUS_METERS + accuracy;
//         setIsWithinOffice(withinRange);

//         // Show appropriate toast message
//         if (withinRange) {
//           toast.success(`📍 You're ${Math.round(calculatedDistance)}m from office\n✅ You can punch in now!`, {
//             position: "top-right",
//             autoClose: 4000,
//             theme: "dark",
//             style: {
//               background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//               color: 'white'
//             }
//           });
//         } else {
//           toast.warning(`📍 You're ${Math.round(calculatedDistance)}m from office\n❌ Must be within 100m to punch in`, {
//             position: "top-right",
//             autoClose: 5000,
//             theme: "dark",
//             style: {
//               background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
//               color: 'white'
//             }
//           });
//         }

//         setLocationLoading(false);
//       },
//       (error) => {
//         console.error("Geolocation error:", error);
//         toast.error("📍 Unable to fetch location. Please enable location services", {
//           position: "top-right",
//           autoClose: 3000,
//           theme: "dark"
//         });
//         setLocationLoading(false);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//       }
//     );
//   };

//   // Check location on component mount and when punch status changes
//   useEffect(() => {
//     if (!isPunchedIn) {
//       checkLocation();
//     }
//   }, [isPunchedIn]);

//   // Auto-check location every 30 seconds when not punched in
//   useEffect(() => {
//     if (!isPunchedIn) {
//       const interval = setInterval(checkLocation, 30000); // 30 seconds
//       return () => clearInterval(interval);
//     }
//   }, [isPunchedIn]);

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) {
//       return "Ready to punch out!";
//     }

//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   // Handle punch button click with location check
//   const handlePunchClick = () => {
//     if (!isPunchedIn && !isWithinOffice) {
//       toast.warning(`🚫 Cannot Punch In!\nYou must be within 100m of the office`, {
//         position: "top-center",
//         autoClose: 4000,
//         theme: "dark",
//         style: {
//           background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
//           color: 'white',
//           fontSize: '14px'
//         }
//       });
//       checkLocation(); // Re-check location
//       return;
//     }
//     onPunch(); // Proceed with original punch function
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <ToastContainer
//         position="top-right"
//         autoClose={4000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />

//       <div className={`attendance-tracker-content ${isPunchedIn ? 'punched-in' : ''}`}>
//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//         </div>

//         <div className="attendance-cards-wrapper">
//           <div className={`attendance-status-card ${getStatusColor()}`}>
//             {/* ✅ CURRENT APP & IDLE STATUS */}
//             {isPunchedIn && (
//               <div className="current-app-info">
//                 <span className="app-icon">💻</span>
//                 <span className="app-text">Using: {currentApp}</span>
//                 {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//               </div>
//             )}

//             {/* ✅ LOCATION STATUS INDICATOR */}
//             {!isPunchedIn && (
//               <div className={`location-status-indicator ${isWithinOffice ? 'within-range' : 'out-of-range'}`}>
//                 <div className="location-status-header">
//                   <span className="location-pin-icon">📍</span>
//                   <span className="location-status-text">
//                     {locationLoading ? "Checking location..." :
//                      isWithinOffice ? "✅ Within Office Range" : "❌ Out of Office Range"}
//                   </span>
//                 </div>

//                 {distance !== null && !locationLoading && (
//                   <div className="distance-display">
//                     <div className="distance-value">
//                       {Math.round(distance)}m
//                     </div>
//                     <div className="distance-label">
//                       from office • Required: &lt;100m
//                     </div>
//                   </div>
//                 )}

//                 {!locationLoading && (
//                   <button
//                     className="refresh-location-btn"
//                     onClick={checkLocation}
//                   >
//                     🔄 Refresh Location
//                   </button>
//                 )}
//               </div>
//             )}

//             <div className="status-header">
//               <h3 className="status-title">
//                 Today's Status:
//                 <span className="status-value">
//                   {getStatusText()}
//                 </span>
//               </h3>
//             </div>

//             <div className="working-time-display">
//               <div className="time-value">
//                 {workingTime}
//                 {isIdle && <span className="paused-indicator"> ⏸️</span>}
//               </div>
//               <p className="time-label">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Tracking Paused (No Activity)"
//                       : "🟢 Active Working Time")
//                   : "Working Hours Today"
//                 }
//               </p>
//             </div>

//             {isPunchedIn && (
//               <div className="progress-section">
//                 <div className="progress-bar">
//                   <div
//                     className="progress-fill"
//                     style={{
//                       width: `${calculateProgress()}%`,
//                       backgroundColor: isIdle ? '#f59e0b' : '#10b981'
//                     }}
//                   ></div>
//                 </div>

//                 <div className="progress-info">
//                   <span className="progress-text">
//                     {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                   </span>
//                   <span className="progress-percentage">
//                     {calculateProgress().toFixed(1)}%
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               className={`punch-button ${
//                 isPunchedIn ? "punch-out" : "punch-in"
//               } ${loading ? "loading" : ""} ${(!isPunchedIn && !isWithinOffice) ? "disabled-punch" : ""}`}
//               onClick={handlePunchClick}
//               disabled={loading || (isPunchedIn && !canLogout) || (!isPunchedIn && !isWithinOffice)}
//               title={(!isPunchedIn && !isWithinOffice) ? "You must be within 100m of office to punch in" : ""}
//             >
//               {loading ? (
//                 <>
//                   <span className="button-spinner"></span> Processing...
//                 </>
//               ) : isPunchedIn ? (
//                 canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//               ) : (
//                 <>
//                   {isWithinOffice ? "🟢" : "⭕"}
//                   {isWithinOffice ? " Start Tracking & Punch In" : " Out of Range"}
//                 </>
//               )}
//             </button>

//             <div className="location-info">
//               <span className="location-icon">📍</span>
//               <span className="location-text">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Location tracking paused"
//                       : "📍 Location & Activity tracking active")
//                   : `Office: ${OFFICE_LAT.toFixed(6)}, ${OFFICE_LNG.toFixed(6)}`
//                 }
//               </span>
//             </div>
//           </div>

//           {isPunchedIn && (
//             <div className="tracking-details">
//               <h4 className="details-title">📊 Live Tracking Details</h4>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <span className="detail-label">Current Application:</span>
//                   <span className="detail-value">{currentApp}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Tracking Status:</span>
//                   <span className="detail-value">
//                     {isIdle ? "⏸️ PAUSED (User Idle)" : "🟢 ACTIVE"}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Total Time:</span>
//                   <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Required Time:</span>
//                   <span className="detail-value">7 hours</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./AttendanceModal.css";

// // Office coordinates (from your Google Maps link)
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100; // 100 meter radius

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;
//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [distance, setDistance] = useState(null);
//   const [accuracy, setAccuracy] = useState(null);
//   const [locationLoading, setLocationLoading] = useState(false);
//   const [locationError, setLocationError] = useState(null);

//   // Calculate distance between two coordinates (Haversine formula)
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000; // Earth's radius in meters
//     const φ1 = lat1 * Math.PI / 180;
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//               Math.cos(φ1) * Math.cos(φ2) *
//               Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c; // Distance in meters
//   };

//   // Improved location check with accuracy handling
//   const checkLocation = () => {
//     setLocationLoading(true);
//     setLocationError(null);

//     if (!navigator.geolocation) {
//       const errorMsg = "❌ Geolocation is not supported by your browser";
//       toast.error(errorMsg, {
//         position: "top-right",
//         autoClose: 3000,
//         theme: "dark"
//       });
//       setLocationError(errorMsg);
//       setLocationLoading(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const userLat = position.coords.latitude;
//         const userLng = position.coords.longitude;
//         const currentAccuracy = position.coords.accuracy; // Accuracy in meters

//         setAccuracy(currentAccuracy);

//         // Calculate distance
//         const calculatedDistance = calculateDistance(
//           userLat,
//           userLng,
//           OFFICE_LAT,
//           OFFICE_LNG
//         );

//         setDistance(calculatedDistance);

//         // ✅ IMPROVED LOGIC: Account for GPS accuracy
//         // If calculated distance minus accuracy is within range, consider it valid
//         // This handles cases where GPS shows 7m, 14m etc.
//         const maxAllowedDistance = ALLOWED_RADIUS_METERS + currentAccuracy;
//         const withinRange = calculatedDistance <= maxAllowedDistance;

//         setIsWithinOffice(withinRange);

//         // Debug information
//         console.log("📍 Location Debug:");
//         console.log("- User Location:", userLat, userLng);
//         console.log("- Distance from office:", calculatedDistance, "meters");
//         console.log("- GPS Accuracy:", currentAccuracy, "meters");
//         console.log("- Max allowed (100m + accuracy):", maxAllowedDistance, "meters");
//         console.log("- Is within range?", withinRange);

//         // Show appropriate toast message
//         if (withinRange) {
//           toast.success(
//             <div>
//               <div>✅ <strong>Office Range Detected!</strong></div>
//               <div style={{ fontSize: '12px', opacity: 0.9 }}>
//                 Distance: {Math.round(calculatedDistance)}m (Accuracy: ±{Math.round(currentAccuracy)}m)
//               </div>
//               <div style={{ fontSize: '12px', marginTop: '5px' }}>
//                 ✅ You can now punch in
//               </div>
//             </div>,
//             {
//               position: "top-right",
//               autoClose: 5000,
//               theme: "dark",
//               style: {
//                 background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//                 color: 'white'
//               }
//             }
//           );
//         } else {
//           toast.warning(
//             <div>
//               <div>❌ <strong>Out of Office Range</strong></div>
//               <div style={{ fontSize: '12px', opacity: 0.9 }}>
//                 You're {Math.round(calculatedDistance)}m away (Accuracy: ±{Math.round(currentAccuracy)}m)
//               </div>
//               <div style={{ fontSize: '12px', marginTop: '5px' }}>
//                 Must be within 100m of office
//               </div>
//             </div>,
//             {
//               position: "top-right",
//               autoClose: 5000,
//               theme: "dark",
//               style: {
//                 background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
//                 color: 'white'
//               }
//             }
//           );
//         }

//         setLocationLoading(false);
//       },
//       (error) => {
//         console.error("Geolocation error:", error);
//         let errorMsg = "Unable to fetch location";

//         switch(error.code) {
//           case error.PERMISSION_DENIED:
//             errorMsg = "📍 Location permission denied. Please enable location services";
//             break;
//           case error.POSITION_UNAVAILABLE:
//             errorMsg = "📍 Location information unavailable";
//             break;
//           case error.TIMEOUT:
//             errorMsg = "📍 Location request timed out";
//             break;
//           default:
//             errorMsg = "📍 Unknown location error";
//         }

//         toast.error(errorMsg, {
//           position: "top-right",
//           autoClose: 4000,
//           theme: "dark"
//         });

//         setLocationError(errorMsg);
//         setLocationLoading(false);
//       },
//       {
//         enableHighAccuracy: true, // High accuracy for better results
//         timeout: 10000, // 10 seconds timeout
//         maximumAge: 0 // Don't use cached position
//       }
//     );
//   };

//   // Check location on component mount and when punch status changes
//   useEffect(() => {
//     if (!isPunchedIn) {
//       checkLocation();
//     }
//   }, [isPunchedIn]);

//   // Auto-check location every 10 seconds when not punched in
//   useEffect(() => {
//     if (!isPunchedIn) {
//       const interval = setInterval(checkLocation, 10000); // 10 seconds
//       return () => clearInterval(interval);
//     }
//   }, [isPunchedIn]);

//   const calculateProgress = () => {
//     return Math.min((workingHours / 7) * 100, 100);
//   };

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) {
//       return "Ready to punch out!";
//     }

//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   // Handle punch button click with location check
//   const handlePunchClick = () => {
//     if (!isPunchedIn && !isWithinOffice) {
//       toast.warning(
//         <div>
//           <div>🚫 <strong>Cannot Punch In!</strong></div>
//           <div style={{ fontSize: '13px', marginTop: '5px' }}>
//             You must be within 100m of the office
//           </div>
//           <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '3px' }}>
//             Current distance: {distance ? Math.round(distance) + 'm' : 'Unknown'}
//           </div>
//         </div>,
//         {
//           position: "top-center",
//           autoClose: 5000,
//           theme: "dark",
//           style: {
//             background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
//             color: 'white',
//             fontSize: '14px'
//           }
//         }
//       );
//       checkLocation(); // Re-check location
//       return;
//     }
//     onPunch(); // Proceed with original punch function
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//         style={{ zIndex: 9999 }}
//       />

//       <div className={`attendance-tracker-content ${isPunchedIn ? 'punched-in' : ''}`}>
//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//         </div>

//         <div className="attendance-cards-wrapper">
//           <div className={`attendance-status-card ${getStatusColor()}`}>
//             {/* ✅ CURRENT APP & IDLE STATUS */}
//             {isPunchedIn && (
//               <div className="current-app-info">
//                 <span className="app-icon">💻</span>
//                 <span className="app-text">Using: {currentApp}</span>
//                 {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//               </div>
//             )}

//             {/* ✅ LOCATION STATUS INDICATOR */}
//             {!isPunchedIn && (
//               <div className={`location-status-indicator ${isWithinOffice ? 'within-range' : 'out-of-range'} ${locationLoading ? 'loading' : ''}`}>
//                 <div className="location-status-header">
//                   <span className="location-pin-icon">📍</span>
//                   <span className="location-status-text">
//                     {locationLoading ? "🔍 Detecting location..." :
//                      isWithinOffice ? "✅ Within Office Range" : "❌ Out of Office Range"}
//                   </span>
//                 </div>

//                 {distance !== null && !locationLoading && (
//                   <div className="distance-display">
//                     <div className="distance-value">
//                       {Math.round(distance)}m
//                     </div>
//                     <div className="distance-label">
//                       {accuracy && `(Accuracy: ±${Math.round(accuracy)}m)`}
//                     </div>
//                     <div className="range-info">
//                       Required: Within 100m radius
//                     </div>
//                   </div>
//                 )}

//                 {locationError && (
//                   <div className="location-error">
//                     ⚠️ {locationError}
//                   </div>
//                 )}

//                 <div className="location-actions">
//                   <button
//                     className="refresh-location-btn"
//                     onClick={checkLocation}
//                     disabled={locationLoading}
//                   >
//                     {locationLoading ? (
//                       <>
//                         <span className="mini-spinner"></span> Checking...
//                       </>
//                     ) : (
//                       "🔄 Refresh Location"
//                     )}
//                   </button>
//                 </div>
//               </div>
//             )}

//             <div className="status-header">
//               <h3 className="status-title">
//                 Today's Status:
//                 <span className="status-value">
//                   {getStatusText()}
//                 </span>
//               </h3>
//             </div>

//             <div className="working-time-display">
//               <div className="time-value">
//                 {workingTime}
//                 {isIdle && <span className="paused-indicator"> ⏸️</span>}
//               </div>
//               <p className="time-label">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Tracking Paused (No Activity)"
//                       : "🟢 Active Working Time")
//                   : "Working Hours Today"
//                 }
//               </p>
//             </div>

//             {isPunchedIn && (
//               <div className="progress-section">
//                 <div className="progress-bar">
//                   <div
//                     className="progress-fill"
//                     style={{
//                       width: `${calculateProgress()}%`,
//                       backgroundColor: isIdle ? '#f59e0b' : '#10b981'
//                     }}
//                   ></div>
//                 </div>

//                 <div className="progress-info">
//                   <span className="progress-text">
//                     {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                   </span>
//                   <span className="progress-percentage">
//                     {calculateProgress().toFixed(1)}%
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               className={`punch-button ${
//                 isPunchedIn ? "punch-out" : "punch-in"
//               } ${loading ? "loading" : ""} ${(!isPunchedIn && !isWithinOffice) ? "disabled-punch" : ""}`}
//               onClick={handlePunchClick}
//               disabled={loading || (isPunchedIn && !canLogout) || (!isPunchedIn && !isWithinOffice)}
//               title={(!isPunchedIn && !isWithinOffice) ? `You must be within 100m of office to punch in\nCurrent distance: ${distance ? Math.round(distance) + 'm' : 'Unknown'}` : ""}
//             >
//               {loading ? (
//                 <>
//                   <span className="button-spinner"></span> Processing...
//                 </>
//               ) : isPunchedIn ? (
//                 canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//               ) : (
//                 <>
//                   {isWithinOffice ? "🟢" : "⭕"}
//                   {isWithinOffice ? " Start Tracking & Punch In" : " Out of Range"}
//                   {!isWithinOffice && distance && (
//                     <span className="distance-hint"> ({Math.round(distance)}m)</span>
//                   )}
//                 </>
//               )}
//             </button>

//             <div className={`location-info ${isWithinOffice ? 'within-office' : ''}`}>
//               <span className="location-icon">📍</span>
//               <span className="location-text">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Location tracking paused"
//                       : "📍 Location & Activity tracking active")
//                   : `ACORE IT HUB | Vijay Nagar, Indore`
//                 }
//               </span>
//             </div>
//           </div>

//           {isPunchedIn && (
//             <div className="tracking-details">
//               <h4 className="details-title">📊 Live Tracking Details</h4>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <span className="detail-label">Current Application:</span>
//                   <span className="detail-value">{currentApp}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Tracking Status:</span>
//                   <span className="detail-value">
//                     {isIdle ? "⏸️ PAUSED (User Idle)" : "🟢 ACTIVE"}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Total Time:</span>
//                   <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Required Time:</span>
//                   <span className="detail-value">7 hours</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// ye code sahi vala he

// import React, { useState, useEffect } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./AttendanceModal.css";

// // Office coordinates
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100;

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;
//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState('checking'); // 'checking', 'matched', 'not_matched', 'error'
//   const [employeeLocation, setEmployeeLocation] = useState('');

//   // Calculate distance
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000;
//     const φ1 = lat1 * Math.PI / 180;
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//               Math.cos(φ1) * Math.cos(φ2) *
//               Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   };

//   // Get location type based on coordinates
//   const getLocationType = (distance) => {
//     if (distance <= ALLOWED_RADIUS_METERS) {
//       return 'office';
//     } else if (distance <= 500) { // Within 500m
//       return 'near_office';
//     } else if (distance <= 5000) { // Within 5km
//       return 'city';
//     } else {
//       return 'other';
//     }
//   };

//   // Check location with proper flow
//   // const checkLocation = () => {
//   //   setLocationStatus('checking');
//   //   setEmployeeLocation('');

//   //   if (!navigator.geolocation) {
//   //     toast.error("Location access not available", {
//   //       position: "top-center",
//   //       autoClose: 3000,
//   //       className: 'custom-toast error-toast'
//   //     });
//   //     setLocationStatus('error');
//   //     return;
//   //   }

//   //   navigator.geolocation.getCurrentPosition(
//   //     (position) => {
//   //       const userLat = position.coords.latitude;
//   //       const userLng = position.coords.longitude;

//   //       const distance = calculateDistance(userLat, userLng, OFFICE_LAT, OFFICE_LNG);
//   //       const withinRange = distance <= ALLOWED_RADIUS_METERS;

//   //       setIsWithinOffice(withinRange);

//   //       // Step 1: Show detecting message
//   //       toast.info("🔍 Detecting your location...", {
//   //         position: "top-center",
//   //         autoClose: 1500,
//   //         className: 'custom-toast info-toast'
//   //       });

//   //       // Small delay for better UX
//   //       setTimeout(() => {
//   //         // Step 2: Show match result
//   //         if (withinRange) {
//   //           setLocationStatus('matched');
//   //           toast.success("✅ Your location matches office location", {
//   //             position: "top-center",
//   //             autoClose: 3000,
//   //             className: 'custom-toast success-toast'
//   //           });
//   //         } else {
//   //           setLocationStatus('not_matched');
//   //           toast.error("❌ Your location does not match office location", {
//   //             position: "top-center",
//   //             autoClose: 3000,
//   //             className: 'custom-toast error-toast'
//   //           });
//   //         }

//   //         // Step 3: Show employee location
//   //         setTimeout(() => {
//   //           const locationType = getLocationType(distance);
//   //           let locationMessage = "";

//   //           switch(locationType) {
//   //             case 'office':
//   //               locationMessage = "Employee is at office location";
//   //               break;
//   //             case 'near_office':
//   //               locationMessage = "Employee is near office (within 500m)";
//   //               break;
//   //             case 'city':
//   //               locationMessage = "Employee is in city (within 5km)";
//   //               break;
//   //             default:
//   //               locationMessage = "Employee is away from office";
//   //           }

//   //           setEmployeeLocation(locationMessage);

//   //           toast.info(`📍 ${locationMessage}`, {
//   //             position: "top-center",
//   //             autoClose: 4000,
//   //             className: 'custom-toast info-toast'
//   //           });
//   //         }, 1000);

//   //       }, 1500);
//   //     },
//   //     (error) => {
//   //       setLocationStatus('error');
//   //       toast.error("Cannot check location. Please enable location services.", {
//   //         position: "top-center",
//   //         autoClose: 3000,
//   //         className: 'custom-toast error-toast'
//   //       });
//   //     },
//   //     {
//   //       enableHighAccuracy: true,
//   //       timeout: 5000,
//   //       maximumAge: 0
//   //     }
//   //   );
//   // };

//   // ✅ Updated checkLocation function for Electron
//   const checkLocation = async () => {
//     setLocationStatus('checking');
//     setEmployeeLocation('');

//     try {
//       // Step 1: Try to get location from Electron
//       let userLocation = null;

//       // Try Electron API first
//       if (window.electronAPI && window.electronAPI.getUserLocation) {
//         userLocation = await window.electronAPI.getUserLocation();
//       }

//       // If Electron API fails or not available, try browser geolocation
//       if (!userLocation && navigator.geolocation) {
//         if (window.electronAPI && window.electronAPI.getBrowserLocation) {
//           userLocation = await window.electronAPI.getBrowserLocation();
//         } else {
//           // Direct browser geolocation (will ask permission)
//           userLocation = await new Promise((resolve) => {
//             navigator.geolocation.getCurrentPosition(
//               (position) => {
//                 resolve({
//                   latitude: position.coords.latitude,
//                   longitude: position.coords.longitude,
//                   accuracy: position.coords.accuracy,
//                   source: 'browser'
//                 });
//               },
//               (error) => {
//                 console.log('Geolocation error:', error);
//                 resolve(null);
//               },
//               {
//                 enableHighAccuracy: true,
//                 timeout: 10000,
//                 maximumAge: 0
//               }
//             );
//           });
//         }
//       }

//       if (!userLocation) {
//         // Fallback to hardcoded location or show error
//         setLocationStatus('error');
//         toast.error("⚠️ Unable to get location. Using approximate location.", {
//           position: "top-center",
//           autoClose: 3000,
//           className: 'custom-toast warning-toast'
//         });

//         // Use default coordinates for testing
//         userLocation = {
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           source: 'default'
//         };
//       }

//       const distance = calculateDistance(
//         userLocation.latitude,
//         userLocation.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       const withinRange = distance <= ALLOWED_RADIUS_METERS;
//       setIsWithinOffice(withinRange);

//       // Show detecting message
//       toast.info("🔍 Detecting your location...", {
//         position: "top-center",
//         autoClose: 1500,
//         className: 'custom-toast info-toast'
//       });

//       setTimeout(() => {
//         if (withinRange) {
//           setLocationStatus('matched');
//           toast.success("✅ Location verified! You are at office.", {
//             position: "top-center",
//             autoClose: 3000,
//             className: 'custom-toast success-toast'
//           });
//         } else {
//           setLocationStatus('not_matched');
//           toast.warning(`📍 You are ${distance.toFixed(1)}m away from office`, {
//             position: "top-center",
//             autoClose: 4000,
//             className: 'custom-toast warning-toast'
//           });
//         }

//         // Show employee location info
//         setTimeout(() => {
//           const locationType = getLocationType(distance);
//           let locationMessage = "";

//           switch(locationType) {
//             case 'office':
//               locationMessage = `You are at office (${distance.toFixed(0)}m)`;
//               break;
//             case 'near_office':
//               locationMessage = `Near office (${distance.toFixed(0)}m away)`;
//               break;
//             case 'city':
//               locationMessage = `In city area (${(distance/1000).toFixed(1)}km away)`;
//               break;
//             default:
//               locationMessage = `Away from office (${(distance/1000).toFixed(1)}km)`;
//           }

//           if (userLocation.source === 'default') {
//             locationMessage += " (Approximate location)";
//           }

//           setEmployeeLocation(locationMessage);

//           toast.info(`📍 ${locationMessage}`, {
//             position: "top-center",
//             autoClose: 4000,
//             className: 'custom-toast info-toast'
//           });
//         }, 1000);

//       }, 1500);

//     } catch (error) {
//       console.error('Location check error:', error);
//       setLocationStatus('error');
//       toast.error("⚠️ Location service unavailable", {
//         position: "top-center",
//         autoClose: 3000,
//         className: 'custom-toast error-toast'
//       });
//     }

//   // ... rest of your component remains SAME ...
// };

//   // Check location when component loads
//   useEffect(() => {
//     if (!isPunchedIn) {
//       checkLocation();
//     }
//   }, [isPunchedIn]);

//   // Auto-check every 30 seconds
//   useEffect(() => {
//     if (!isPunchedIn) {
//       const interval = setInterval(checkLocation, 30000);
//       return () => clearInterval(interval);
//     }
//   }, [isPunchedIn]);

//   // Existing functions (unchanged)
//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   // Get location status text
//   const getLocationStatusText = () => {
//     switch(locationStatus) {
//       case 'checking':
//         return "🔍 Detecting your location...";
//       case 'matched':
//         return " Location matched with office";
//       case 'not_matched':
//         return "❌ Not at office location";
//       case 'error':
//         return "⚠️ Location check failed";
//       default:
//         return "📍 Checking location...";
//     }
//   };

//   // Handle punch button click
//   const handlePunchClick = () => {
//     if (!isPunchedIn && !isWithinOffice) {
//       toast.warning("🚫 Cannot Punch In! You must be at office location to punch in.", {
//         position: "top-center",
//         autoClose: 4000,
//         className: 'custom-toast warning-toast'
//       });
//       checkLocation();
//       return;
//     }
//     onPunch();
//   };

//   return (
//     <div className="attendance-tracker-container">
//       <div className={`attendance-tracker-content ${isPunchedIn ? 'punched-in' : ''}`}>
//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//         </div>

//         <div className="attendance-cards-wrapper">
//           <div className={`attendance-status-card ${getStatusColor()}`}>
//             {/* Current App Info */}
//             {isPunchedIn && (
//               <div className="current-app-info">
//                 <span className="app-icon">💻</span>
//                 <span className="app-text">Using: {currentApp}</span>
//                 {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//               </div>
//             )}

//             {/* Location Status with Proper Flow */}
//             {!isPunchedIn && (
//               <div className="location-flow-container">
//                 <div className={`location-status-flow ${locationStatus}`}>
//                   <div className="location-status-icon-flow">
//                     {locationStatus === 'checking' && <span className="location-spinner-flow"></span>}
//                     {locationStatus === 'matched' && <span className="matched-icon"></span>}
//                     {locationStatus === 'not_matched' && <span className="not-matched-icon">❌</span>}
//                     {locationStatus === 'error' && <span className="error-icon">⚠️</span>}
//                   </div>
//                   <div className="location-status-text-flow">
//                     {getLocationStatusText()}
//                   </div>
//                 </div>

//                 {/* Employee Location Info */}
//                 {employeeLocation && (
//                   <div className="employee-location-info">
//                     <div className="employee-location-icon">📍</div>
//                     <div className="employee-location-text">
//                       {employeeLocation}
//                     </div>
//                   </div>
//                 )}

//                 {/* Refresh Button */}
//                 <button
//                   className="refresh-location-flow-btn"
//                   onClick={checkLocation}
//                 >
//                   🔄 Check Location Again
//                 </button>
//               </div>
//             )}

//             <div className="status-header">
//               <h3 className="status-title">
//                 Today's Status:
//                 <span className="status-value">
//                   {getStatusText()}
//                 </span>
//               </h3>
//             </div>

//             <div className="working-time-display">
//               <div className="time-value">
//                 {workingTime}
//                 {isIdle && <span className="paused-indicator"> ⏸️</span>}
//               </div>
//               <p className="time-label">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Tracking Paused (No Activity)"
//                       : "🟢 Active Working Time")
//                   : "Working Hours Today"
//                 }
//               </p>
//             </div>

//             {isPunchedIn && (
//               <div className="progress-section">
//                 <div className="progress-bar">
//                   <div
//                     className="progress-fill"
//                     style={{
//                       width: `${calculateProgress()}%`,
//                       backgroundColor: isIdle ? '#f59e0b' : '#10b981'
//                     }}
//                   ></div>
//                 </div>

//                 <div className="progress-info">
//                   <span className="progress-text">
//                     {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                   </span>
//                   <span className="progress-percentage">
//                     {calculateProgress().toFixed(1)}%
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               className={`punch-button ${
//                 isPunchedIn ? "punch-out" : "punch-in"
//               } ${loading ? "loading" : ""} ${(!isPunchedIn && !isWithinOffice) ? "disabled-punch" : ""}`}
//               onClick={handlePunchClick}
//               disabled={loading || (isPunchedIn && !canLogout) || (!isPunchedIn && !isWithinOffice)}
//             >
//               {loading ? (
//                 <>
//                   <span className="button-spinner"></span> Processing...
//                 </>
//               ) : isPunchedIn ? (
//                 canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//               ) : (
//                 isWithinOffice ? "🟢 Start Tracking & Punch In" : "📍 Wait - Check Location"
//               )}
//             </button>

//             <div className="location-info">
//               <span className="location-icon">📍</span>
//               <span className="location-text">
//                 {isPunchedIn
//                   ? "Location tracking active"
//                   : "ACORE IT HUB PVT LTD , Vijay Nagar, Indore"
//                 }
//               </span>
//             </div>
//           </div>

//           {isPunchedIn && (
//             <div className="tracking-details">
//               <h4 className="details-title">📊 Live Tracking Details</h4>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <span className="detail-label">Current Application:</span>
//                   <span className="detail-value">{currentApp}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Tracking Status:</span>
//                   <span className="detail-value">
//                     {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Total Time:</span>
//                   <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Required Time:</span>
//                   <span className="detail-value">7 hours</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React, { useState, useEffect } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100;

// const AttendanceModal = ({ attendance, onPunch }) => {
//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;
//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState('checking');
//   const [employeeLocation, setEmployeeLocation] = useState('');

//   // Calculate distance
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000;
//     const φ1 = lat1 * Math.PI / 180;
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//               Math.cos(φ1) * Math.cos(φ2) *
//               Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   };

//   // ✅ SIMPLE & WORKING Location Check
//   const checkLocation = async () => {
//     setLocationStatus('checking');
//     setEmployeeLocation('');

//     try {
//       // Show detecting message
//       toast.info("🔍 Detecting your location...", {
//         position: "top-center",
//         autoClose: 1500,
//         className: 'custom-toast info-toast'
//       });

//       let location = null;

//       // Try Electron API first
//       if (window.electronAPI && window.electronAPI.getCurrentLocation) {
//         const result = await window.electronAPI.getCurrentLocation();
//         if (result.success) {
//           location = result;
//           console.log('Location from Electron API:', location);
//         }
//       }

//       // If Electron API fails, try direct browser geolocation
//       if (!location && navigator.geolocation) {
//         location = await new Promise((resolve) => {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               resolve({
//                 success: true,
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude,
//                 accuracy: position.coords.accuracy
//               });
//             },
//             (error) => {
//               console.log('Browser geolocation error:', error);
//               resolve(null);
//             },
//             {
//               enableHighAccuracy: true,
//               timeout: 10000,
//               maximumAge: 0
//             }
//           );
//         });
//       }

//       // If still no location, use default
//       if (!location) {
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100000,
//           source: 'default'
//         };
//       }

//       // Calculate distance
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       const withinRange = distance <= ALLOWED_RADIUS_METERS;
//       setIsWithinOffice(withinRange);

//       // Update status
//       setTimeout(() => {
//         if (withinRange) {
//           setLocationStatus('matched');
//           toast.success("✅ Location verified! You can punch in.", {
//             position: "top-center",
//             autoClose: 3000,
//             className: 'custom-toast success-toast'
//           });
//         } else {
//           setLocationStatus('not_matched');
//           toast.error(`❌ You are ${distance.toFixed(0)}m away from office`, {
//             position: "top-center",
//             autoClose: 4000,
//             className: 'custom-toast error-toast'
//           });
//         }

//         // Set location message (SIMPLE)
//         setEmployeeLocation(withinRange ? "At office location" : "Not at office location");

//       }, 1500);

//     } catch (error) {
//       console.error('Location check error:', error);
//       setLocationStatus('error');
//       toast.error("⚠️ Unable to check location", {
//         position: "top-center",
//         autoClose: 3000,
//         className: 'custom-toast error-toast'
//       });
//     }
//   };

//   // Auto-check on component load
//   useEffect(() => {
//     if (!isPunchedIn) {
//       checkLocation();
//     }
//   }, [isPunchedIn]);

//   // Auto-check every 30 seconds
//   useEffect(() => {
//     if (!isPunchedIn) {
//       const interval = setInterval(checkLocation, 30000);
//       return () => clearInterval(interval);
//     }
//   }, [isPunchedIn]);

//   // ✅ EXISTING FUNCTIONS (ORIGINAL)
//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   const getLocationStatusText = () => {
//     switch(locationStatus) {
//       case 'checking':
//         return "🔍 Checking location...";
//       case 'matched':
//         return "✅ Location matched";
//       case 'not_matched':
//         return "❌ Not at office";
//       case 'error':
//         return "⚠️ Location error";
//       default:
//         return "📍 Checking location...";
//     }
//   };

//   // Handle punch button click
//   const handlePunchClick = () => {
//     if (!isPunchedIn && !isWithinOffice) {
//       toast.warning("🚫 Cannot Punch In! You must be at office location.", {
//         position: "top-center",
//         autoClose: 4000,
//         className: 'custom-toast warning-toast'
//       });
//       checkLocation();
//       return;
//     }
//     onPunch();
//   };

//    if (!isOpen) return null;

//   return (
//     <div className="attendance-tracker-container">
//       <div className={`attendance-tracker-content ${isPunchedIn ? 'punched-in' : ''}`}>
//         <div className="attendance-tracker-header">
//           <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//         </div>

//         <div className="attendance-cards-wrapper">
//           <div className={`attendance-status-card ${getStatusColor()}`}>

//             {/* ✅ CURRENT APP & IDLE STATUS - ORIGINAL */}
//             {isPunchedIn && (
//               <div className="current-app-info">
//                 <span className="app-icon">💻</span>
//                 <span className="app-text">Using: {currentApp}</span>
//                 {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//               </div>
//             )}

//             {/* ✅ SIMPLE LOCATION STATUS - ORIGINAL STYLE */}
//             {!isPunchedIn && (
//               <div className="simple-location-status">
//                 <div className={`location-indicator ${locationStatus}`}>
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">{getLocationStatusText()}</span>
//                 </div>

//                 {employeeLocation && (
//                   <div className="employee-location-simple">
//                     <span className="location-message">{employeeLocation}</span>
//                   </div>
//                 )}

//                 <button
//                   className="simple-refresh-btn"
//                   onClick={checkLocation}
//                 >
//                   🔄 Check Again
//                 </button>
//               </div>
//             )}

//             <div className="status-header">
//               <h3 className="status-title">
//                 Today's Status:
//                 <span className="status-value">
//                   {getStatusText()}
//                 </span>
//               </h3>
//             </div>

//             <div className="working-time-display">
//               <div className="time-value">
//                 {workingTime}
//                 {isIdle && <span className="paused-indicator"> ⏸️</span>}
//               </div>
//               <p className="time-label">
//                 {isPunchedIn
//                   ? (isIdle
//                       ? "⏸️ Tracking Paused (No Activity)"
//                       : "🟢 Active Working Time")
//                   : "Working Hours Today"
//                 }
//               </p>
//             </div>

//             {isPunchedIn && (
//               <div className="progress-section">
//                 <div className="A-progress-bar">
//                   <div
//                     className="progress-fill"
//                     style={{
//                       width: `${calculateProgress()}%`,
//                       backgroundColor: isIdle ? '#f59e0b' : '#10b981'
//                     }}
//                   ></div>
//                 </div>

//                 <div className="progress-info">
//                   <span className="progress-text">
//                     {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                   </span>
//                   <span className="progress-percentage">
//                     {calculateProgress().toFixed(1)}%
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               className={`punch-button ${
//                 isPunchedIn ? "punch-out" : "punch-in"
//               } ${loading ? "loading" : ""} ${(!isPunchedIn && !isWithinOffice) ? "disabled-punch" : ""}`}
//               onClick={handlePunchClick}
//               disabled={loading || (isPunchedIn && !canLogout) || (!isPunchedIn && !isWithinOffice)}
//             >
//               {loading ? (
//                 <>
//                   <span className="button-spinner"></span> Processing...
//                 </>
//               ) : isPunchedIn ? (
//                 canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//               ) : (
//                 isWithinOffice ? "🟢 Start Tracking & Punch In" : "📍 Wait - Check Location"
//               )}
//             </button>

//             <div className="location-info">
//               <span className="location-icon">📍</span>
//               <span className="location-text">
//                 {isPunchedIn
//                   ? "Location & Activity tracking active"
//                   : "ACORE IT HUB PVT LTD , Vijay Nagar, Indore"
//                 }
//               </span>
//             </div>
//           </div>

//           {isPunchedIn && (
//             <div className="tracking-details">
//               <h4 className="details-title">📊 Live Tracking Details</h4>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <span className="detail-label">Current Application:</span>
//                   <span className="detail-value">{currentApp}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Tracking Status:</span>
//                   <span className="detail-value">
//                     {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Total Time:</span>
//                   <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Required Time:</span>
//                   <span className="detail-value">7 hours</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// ye proper kam karta he

// import React, { useState, useEffect } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100;

// // ✅ CORRECTED: Added isOpen and onClose props
// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   // ✅ IMPORTANT: If modal is not open, return null
//   if (!isOpen) return null;

//   // const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;
//    const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;
//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState('checking');
//   const [employeeLocation, setEmployeeLocation] = useState('');

//     const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // Calculate distance
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000;
//     const φ1 = lat1 * Math.PI / 180;
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//               Math.cos(φ1) * Math.cos(φ2) *
//               Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   };

//   // ✅ SIMPLE & WORKING Location Check
//   const checkLocation = async () => {
//     setLocationStatus('checking');
//     setEmployeeLocation('');

//     try {
//       // Show detecting message
//       toast.info("🔍 Detecting your location...", {
//         position: "top-center",
//         autoClose: 1500,
//         className: 'custom-toast info-toast'
//       });

//       let location = null;

//       // Try Electron API first
//       if (window.electronAPI && window.electronAPI.getCurrentLocation) {
//         const result = await window.electronAPI.getCurrentLocation();
//         if (result.success) {
//           location = result;
//           console.log('Location from Electron API:', location);
//         }
//       }

//       // If Electron API fails, try direct browser geolocation
//       if (!location && navigator.geolocation) {
//         location = await new Promise((resolve) => {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               resolve({
//                 success: true,
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude,
//                 accuracy: position.coords.accuracy
//               });
//             },
//             (error) => {
//               console.log('Browser geolocation error:', error);
//               resolve(null);
//             },
//             {
//               enableHighAccuracy: true,
//               timeout: 10000,
//               maximumAge: 0
//             }
//           );
//         });
//       }

//       // If still no location, use default
//       if (!location) {
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100000,
//           source: 'default'
//         };
//       }

//       // Calculate distance
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       const withinRange = distance <= ALLOWED_RADIUS_METERS;
//       setIsWithinOffice(withinRange);

//       // Update status
//       setTimeout(() => {
//         if (withinRange) {
//           setLocationStatus('matched');
//           toast.success("✅ Location verified! You can punch in.", {
//             position: "top-center",
//             autoClose: 3000,
//             className: 'custom-toast success-toast'
//           });
//         } else {
//           setLocationStatus('not_matched');
//           toast.error(`❌ You are ${distance.toFixed(0)}m away from office`, {
//             position: "top-center",
//             autoClose: 4000,
//             className: 'custom-toast error-toast'
//           });
//         }

//         // Set location message (SIMPLE)
//         setEmployeeLocation(withinRange ? "At office location" : "Not at office location");

//       }, 1500);

//     } catch (error) {
//       console.error('Location check error:', error);
//       setLocationStatus('error');
//       toast.error("⚠️ Unable to check location", {
//         position: "top-center",
//         autoClose: 3000,
//         className: 'custom-toast error-toast'
//       });
//     }
//   };

//   // Auto-check on component load
//   useEffect(() => {
//     if (!isPunchedIn) {
//       checkLocation();
//     }
//   }, [isPunchedIn]);

//   // Auto-check every 30 seconds
//   useEffect(() => {
//     if (!isPunchedIn) {
//       const interval = setInterval(checkLocation, 30000);
//       return () => clearInterval(interval);
//     }
//   }, [isPunchedIn]);

//   // ✅ EXISTING FUNCTIONS (ORIGINAL)
//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   const getLocationStatusText = () => {
//     switch(locationStatus) {
//       case 'checking':
//         return "🔍 Checking location...";
//       case 'matched':
//         return "✅ Location matched";
//       case 'not_matched':
//         return "❌ Not at office";
//       case 'error':
//         return "⚠️ Location error";
//       default:
//         return "📍 Checking location...";
//     }
//   };

//   // Handle punch button click
//   const handlePunchClick = () => {
//     if (!isPunchedIn && !isWithinOffice) {
//       toast.warning("🚫 Cannot Punch In! You must be at office location.", {
//         position: "top-center",
//         autoClose: 4000,
//         className: 'custom-toast warning-toast'
//       });
//       checkLocation();
//       return;
//     }
//     onPunch();
//   };

//   return (
//     // <div className="attendance-modal-overlay" onClick={onClose}>

//      <div className="attendance-modal-overlay" onClick={handleOverlayClick}>
//       {/* <div className="attendance-modal-content" onClick={(e) => e.stopPropagation()}> */}
//       <div className="attendance-modal-content">

//         {/* ✅ MODAL HEADER */}
//         <div className="modal-header">
//           <h2>⏰ Attendance Tracker</h2>
//           <button className="close-modal" onClick={onClose}>✕</button>
//         </div>

//         <div className="attendance-tracker-container">
//           <div className={`attendance-tracker-content ${isPunchedIn ? 'punched-in' : ''}`}>
//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>

//                 {/* ✅ CURRENT APP & IDLE STATUS */}
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">Using: {currentApp}</span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 {/* ✅ SIMPLE LOCATION STATUS */}
//                 {!isPunchedIn && (
//                   <div className="simple-location-status">
//                     <div className={`location-indicator ${locationStatus}`}>
//                       <span className="location-icon">📍</span>
//                       <span className="location-text">{getLocationStatusText()}</span>
//                     </div>

//                     {employeeLocation && (
//                       <div className="employee-location-simple">
//                         <span className="location-message">{employeeLocation}</span>
//                       </div>
//                     )}

//                     <button
//                       className="simple-refresh-btn"
//                       onClick={checkLocation}
//                     >
//                       🔄 Check Again
//                     </button>
//                   </div>
//                 )}

//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today's Status:
//                     <span className="status-value">
//                       {getStatusText()}
//                     </span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? (isIdle
//                           ? "⏸️ Tracking Paused (No Activity)"
//                           : "🟢 Active Working Time")
//                       : "Working Hours Today"
//                     }
//                   </p>
//                 </div>

//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? '#f59e0b' : '#10b981'
//                         }}
//                       ></div>
//                     </div>

//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   className={`punch-button ${
//                     isPunchedIn ? "punch-out" : "punch-in"
//                   } ${loading ? "loading" : ""} ${(!isPunchedIn && !isWithinOffice) ? "disabled-punch" : ""}`}
//                   onClick={handlePunchClick}
//                   disabled={loading || (isPunchedIn && !canLogout) || (!isPunchedIn && !isWithinOffice)}
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//                   ) : (
//                     isWithinOffice ? "🟢 Start Tracking & Punch In" : "📍 Wait - Check Location"
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD , Vijay Nagar, Indore"
//                     }
//                   </span>
//                 </div>
//               </div>

//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">{currentApp}</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React, { useState, useEffect } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100;

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;
//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState('checking');
//   const [employeeLocation, setEmployeeLocation] = useState('');
//   const [locationDistance, setLocationDistance] = useState(0);

//   // Calculate distance
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000;
//     const φ1 = lat1 * Math.PI / 180;
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//               Math.cos(φ1) * Math.cos(φ2) *
//               Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   };

//   // ✅ LOCATION CHECK FUNCTION (FIXED)
//   const checkLocation = async () => {
//     setLocationStatus('checking');
//     setEmployeeLocation('');

//     try {
//       // Show detecting message
//       toast.info("🔍 Detecting your location...", {
//         position: "top-center",
//         autoClose: 1500,
//         className: 'custom-toast info-toast'
//       });

//       let location = null;
//       let locationSource = '';

//       // Try Electron API first
//       if (window.electronAPI && window.electronAPI.getCurrentLocation) {
//         try {
//           const result = await window.electronAPI.getCurrentLocation();
//           if (result && result.success) {
//             location = result;
//             locationSource = 'electron';
//             console.log('Location from Electron API:', location);
//           }
//         } catch (electronError) {
//           console.log('Electron API error:', electronError);
//         }
//       }

//       // If Electron API fails, try direct browser geolocation
//       if (!location && navigator.geolocation) {
//         try {
//           location = await new Promise((resolve, reject) => {
//             navigator.geolocation.getCurrentPosition(
//               (position) => {
//                 resolve({
//                   success: true,
//                   latitude: position.coords.latitude,
//                   longitude: position.coords.longitude,
//                   accuracy: position.coords.accuracy
//                 });
//               },
//               (error) => {
//                 console.log('Browser geolocation error:', error);
//                 resolve(null);
//               },
//               {
//                 enableHighAccuracy: true,
//                 timeout: 10000,
//                 maximumAge: 0
//               }
//             );
//           });
//           if (location) locationSource = 'browser';
//         } catch (browserError) {
//           console.log('Browser geolocation error:', browserError);
//         }
//       }

//       // If still no location, use default
//       if (!location) {
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100000,
//           source: 'default'
//         };
//         locationSource = 'default';
//       }

//       // Calculate distance
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       setLocationDistance(distance);
//       const withinRange = distance <= ALLOWED_RADIUS_METERS;
//       setIsWithinOffice(withinRange);

//       // Update status
//       setTimeout(() => {
//         if (withinRange) {
//           setLocationStatus('matched');
//           toast.success(`✅ Location verified! Distance: ${distance.toFixed(0)}m`, {
//             position: "top-center",
//             autoClose: 3000,
//             className: 'custom-toast success-toast'
//           });
//         } else {
//           setLocationStatus('not_matched');
//           toast.error(`❌ You are ${distance.toFixed(0)}m away from office`, {
//             position: "top-center",
//             autoClose: 4000,
//             className: 'custom-toast error-toast'
//           });
//         }

//         // Set location message
//         setEmployeeLocation(withinRange
//           ? `At office location (${distance.toFixed(0)}m away)`
//           : `Not at office location (${distance.toFixed(0)}m away)`
//         );

//       }, 1000);

//     } catch (error) {
//       console.error('Location check error:', error);
//       setLocationStatus('error');
//       toast.error("⚠️ Unable to check location", {
//         position: "top-center",
//         autoClose: 3000,
//         className: 'custom-toast error-toast'
//       });
//       setEmployeeLocation("Location check failed");
//     }
//   };

//   // Auto-check on component load
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       checkLocation();
//     }
//   }, [isOpen, isPunchedIn]);

//   // Auto-check every 30 seconds when not punched in
//   useEffect(() => {
//     let interval;
//     if (isOpen && !isPunchedIn) {
//       interval = setInterval(checkLocation, 30000);
//     }
//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [isOpen, isPunchedIn]);

//   // ✅ EXISTING FUNCTIONS
//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   const getLocationStatusText = () => {
//     switch(locationStatus) {
//       case 'checking':
//         return "🔍 Checking location...";
//       case 'matched':
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case 'not_matched':
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case 'error':
//         return "⚠️ Location error";
//       default:
//         return "📍 Checking location...";
//     }
//   };

//   // Handle punch button click
//   const handlePunchClick = () => {
//     if (!isPunchedIn && !isWithinOffice) {
//       toast.warning(`🚫 Cannot Punch In! You are ${locationDistance.toFixed(0)}m away from office.`, {
//         position: "top-center",
//         autoClose: 4000,
//         className: 'custom-toast warning-toast'
//       });
//       checkLocation();
//       return;
//     }
//     onPunch();
//   };

//   // Handle overlay click
//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div className="attendance-fullpage-container">
//       <div className="attendance-content-wrapper">
//         {/* Page Header */}
//         <div className="attendance-page-header">
//           <div className="page-header-left">
//             <div className="page-header-icon">⏰</div>
//             <div className="page-header-title">
//               <h1>Attendance Tracker</h1>
//               <p>Track your working hours and location</p>
//             </div>
//           </div>
//           <button className="close-page-btn" onClick={onClose}>✕</button>
//         </div>

//         {/* Attendance Tracker Content */}
//         <div className="attendance-tracker-container">
//           <div className={`attendance-tracker-content ${isPunchedIn ? 'punched-in' : ''}`}>
//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>

//                 {/* ✅ CURRENT APP & IDLE STATUS */}
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">Using: {currentApp || "No app detected"}</span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 {/* ✅ LOCATION STATUS (SHOW ALWAYS) */}
//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">{getLocationStatusText()}</span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">{employeeLocation}</span>
//                     </div>
//                   )}

//                   {/* LOCATION DETAILS */}
//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Allowed Radius:</span>
//                       <span className="detail-value">{ALLOWED_RADIUS_METERS}m</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">{locationDistance.toFixed(0)}m</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span className={`detail-value ${isWithinOffice ? 'status-success' : 'status-error'}`}>
//                         {isWithinOffice ? "Within Range" : "Out of Range"}
//                       </span>
//                     </div>
//                   </div>

//                   {!isPunchedIn && (
//                     <button
//                       className="simple-refresh-btn"
//                       onClick={checkLocation}
//                       disabled={locationStatus === 'checking'}
//                     >
//                       {locationStatus === 'checking' ? (
//                         <>
//                           <span className="button-spinner-small"></span> Checking...
//                         </>
//                       ) : (
//                         "🔄 Refresh Location"
//                       )}
//                     </button>
//                   )}
//                 </div>

//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today's Status:
//                     <span className="status-value">
//                       {getStatusText()}
//                     </span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? (isIdle
//                           ? "⏸️ Tracking Paused (No Activity)"
//                           : "🟢 Active Working Time")
//                       : "Working Hours Today"
//                     }
//                   </p>
//                 </div>

//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? '#f59e0b' : '#10b981'
//                         }}
//                       ></div>
//                     </div>

//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   className={`punch-button ${
//                     isPunchedIn ? "punch-out" : "punch-in"
//                   } ${loading ? "loading" : ""} ${(!isPunchedIn && !isWithinOffice) ? "disabled-punch" : ""}`}
//                   onClick={handlePunchClick}
//                   disabled={loading || (isPunchedIn && !canLogout) || (!isPunchedIn && !isWithinOffice)}
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//                   ) : (
//                     isWithinOffice ? "🟢 Start Tracking & Punch In" : `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"
//                     }
//                   </span>
//                 </div>
//               </div>

//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">{currentApp || "Not detected"}</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "❌ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">{locationDistance.toFixed(0)} meters</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React, { useState, useEffect } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./AttendanceCalendarModal.jsx"; // अपनी CSS फाइल का नाम

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100;

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   // Early return if not open
//   if (!isOpen) return null;

//   const { isPunchedIn, workingHours, workingTime, canLogout, loading, isIdle, currentApp } = attendance;
//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState('checking');
//   const [employeeLocation, setEmployeeLocation] = useState('');
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);

//   // Calculate distance function
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000; // Earth's radius in meters
//     const φ1 = lat1 * Math.PI / 180;
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//               Math.cos(φ1) * Math.cos(φ2) *
//               Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c; // Distance in meters
//   };

//   // ✅ FIXED LOCATION CHECK FUNCTION
//   const checkLocation = async () => {
//     setIsCheckingLocation(true);
//     setLocationStatus('checking');
//     setEmployeeLocation('');

//     try {
//       console.log("Starting location check...");
//       let location = null;

//       // Show detecting message
//       toast.info("🔍 Detecting your location...", {
//         position: "top-center",
//         autoClose: 2000,
//         className: 'custom-toast info-toast'
//       });

//       // Try Electron API first
//       if (window.electronAPI && window.electronAPI.getCurrentLocation) {
//         try {
//           console.log("Trying Electron API...");
//           const result = await window.electronAPI.getCurrentLocation();
//           if (result && result.success) {
//             location = result;
//             console.log('Location from Electron API:', location);
//           }
//         } catch (electronError) {
//           console.log('Electron API error:', electronError);
//         }
//       }

//       // If Electron API fails, try browser geolocation
//       if (!location && navigator.geolocation) {
//         try {
//           console.log("Trying browser geolocation...");
//           location = await new Promise((resolve) => {
//             navigator.geolocation.getCurrentPosition(
//               (position) => {
//                 resolve({
//                   success: true,
//                   latitude: position.coords.latitude,
//                   longitude: position.coords.longitude,
//                   accuracy: position.coords.accuracy
//                 });
//               },
//               (error) => {
//                 console.log('Browser geolocation error:', error);
//                 resolve(null);
//               },
//               {
//                 enableHighAccuracy: true,
//                 timeout: 10000,
//                 maximumAge: 0
//               }
//             );
//           });
//         } catch (browserError) {
//           console.log('Browser geolocation error:', browserError);
//         }
//       }

//       // If still no location, use default
//       if (!location) {
//         console.log("Using default location");
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100000,
//           source: 'default'
//         };
//       }

//       // Calculate distance
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       console.log(`Distance calculated: ${distance}m`);

//       setLocationDistance(distance);
//       const withinRange = distance <= ALLOWED_RADIUS_METERS;
//       setIsWithinOffice(withinRange);

//       // Update status immediately
//       if (withinRange) {
//         setLocationStatus('matched');
//         toast.success(`✅ Location verified! Distance: ${distance.toFixed(0)}m`, {
//           position: "top-center",
//           autoClose: 3000,
//           className: 'custom-toast success-toast'
//         });
//       } else {
//         setLocationStatus('not_matched');
//         toast.error(`❌ You are ${distance.toFixed(0)}m away from office`, {
//           position: "top-center",
//           autoClose: 4000,
//           className: 'custom-toast error-toast'
//         });
//       }

//       // Set location message
//       setEmployeeLocation(withinRange
//         ? `At office location (${distance.toFixed(0)}m away)`
//         : `Not at office location (${distance.toFixed(0)}m away)`
//       );

//     } catch (error) {
//       console.error('Location check error:', error);
//       setLocationStatus('error');
//       toast.error("⚠️ Unable to check location", {
//         position: "top-center",
//         autoClose: 3000,
//         className: 'custom-toast error-toast'
//       });
//       setEmployeeLocation("Location check failed");
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   };

//   // Auto-check on modal open
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       console.log("Modal opened, checking location...");
//       checkLocation();
//     }
//   }, [isOpen]);

//   // Auto-check every 30 seconds when not punched in
//   useEffect(() => {
//     let interval;
//     if (isOpen && !isPunchedIn) {
//       interval = setInterval(checkLocation, 30000);
//     }
//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [isOpen, isPunchedIn]);

//   // ✅ EXISTING FUNCTIONS
//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   const getLocationStatusText = () => {
//     switch(locationStatus) {
//       case 'checking':
//         return "🔍 Checking location...";
//       case 'matched':
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case 'not_matched':
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case 'error':
//         return "⚠️ Location error";
//       default:
//         return "📍 Checking location...";
//     }
//   };

//   // Handle punch button click
//   const handlePunchClick = () => {
//     console.log("Punch button clicked");
//     console.log("isPunchedIn:", isPunchedIn);
//     console.log("isWithinOffice:", isWithinOffice);
//     console.log("locationDistance:", locationDistance);

//     if (!isPunchedIn && !isWithinOffice) {
//       toast.warning(`🚫 Cannot Punch In! You are ${locationDistance.toFixed(0)}m away from office.`, {
//         position: "top-center",
//         autoClose: 4000,
//         className: 'custom-toast warning-toast'
//       });
//       checkLocation();
//       return;
//     }

//     console.log("Calling onPunch function...");
//     onPunch();
//   };

//   // Handle overlay click
//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div className="modal-overlay" onClick={handleOverlayClick}>
//       <div className="modal-container">
//         <button className="modal-close-btn" onClick={onClose}>✕</button>

//         <div className="modal-header">
//           <div className="modal-header-icon">⏰</div>
//           <div className="modal-header-text">
//             <h2>Attendance Tracker</h2>
//             <p>Track your working hours and location</p>
//           </div>
//         </div>

//         <div className="modal-content">
//           <div className={`attendance-tracker-content ${isPunchedIn ? 'punched-in' : ''}`}>
//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">⏰ Employee Activity Tracker</h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>

//                 {/* ✅ CURRENT APP & IDLE STATUS */}
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">Using: {currentApp || "No app detected"}</span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 {/* ✅ LOCATION STATUS */}
//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">{getLocationStatusText()}</span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">{employeeLocation}</span>
//                     </div>
//                   )}

//                   {/* LOCATION DETAILS */}
//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Allowed Radius:</span>
//                       <span className="detail-value">{ALLOWED_RADIUS_METERS}m</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">{locationDistance.toFixed(0)}m</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span className={`detail-value ${isWithinOffice ? 'status-success' : 'status-error'}`}>
//                         {isWithinOffice ? "Within Range" : "Out of Range"}
//                       </span>
//                     </div>
//                   </div>

//                   {!isPunchedIn && (
//                     <button
//                       className="simple-refresh-btn"
//                       onClick={checkLocation}
//                       disabled={isCheckingLocation}
//                     >
//                       {isCheckingLocation ? (
//                         <>
//                           <span className="button-spinner-small"></span> Checking...
//                         </>
//                       ) : (
//                         "🔄 Refresh Location"
//                       )}
//                     </button>
//                   )}
//                 </div>

//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today's Status:
//                     <span className="status-value">
//                       {getStatusText()}
//                     </span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? (isIdle
//                           ? "⏸️ Tracking Paused (No Activity)"
//                           : "🟢 Active Working Time")
//                       : "Working Hours Today"
//                     }
//                   </p>
//                 </div>

//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? '#f59e0b' : '#10b981'
//                         }}
//                       ></div>
//                     </div>

//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   className={`punch-button ${
//                     isPunchedIn ? "punch-out" : "punch-in"
//                   } ${loading ? "loading" : ""} ${(!isPunchedIn && !isWithinOffice) ? "disabled-punch" : ""}`}
//                   onClick={handlePunchClick}
//                   disabled={loading || (isPunchedIn && !canLogout) || (!isPunchedIn && !isWithinOffice)}
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? "🔴 Stop Tracking & Punch Out" : `⏳ ${getRemainingTime()}`
//                   ) : (
//                     isWithinOffice ? "🟢 Start Tracking & Punch In" : `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"
//                     }
//                   </span>
//                 </div>
//               </div>

//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">{currentApp || "Not detected"}</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">{workingHours.toFixed(2)} hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "❌ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">{locationDistance.toFixed(0)} meters</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;

// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100; // main geofence radius

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     isIdle,
//     currentApp,
//   } = attendance;

//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState("checking");
//   const [employeeLocation, setEmployeeLocation] = useState("");
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);
//   const [locationSource, setLocationSource] = useState("");
//   const locationIntervalRef = useRef(null);

//   // --- Distance calculation (Haversine) ---
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000; // meters
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c; // meters
//   };

//   // --- Location checking logic ---
//   const checkLocation = async () => {
//     if (isCheckingLocation) return;

//     setIsCheckingLocation(true);
//     setLocationStatus("checking");
//     setEmployeeLocation("");

//     try {
//       console.log("🔄 Starting location check...");

//       let location = null;
//       let locationSourceTemp = "";

//       // 1) Electron API (if available)
//       if (
//         typeof window !== "undefined" &&
//         window.electronAPI &&
//         typeof window.electronAPI.getCurrentLocation === "function"
//       ) {
//         try {
//           console.log("📡 Trying Electron API...");
//           const result = await window.electronAPI.getCurrentLocation();
//           if (result && result.success && result.latitude && result.longitude) {
//             location = {
//               success: true,
//               latitude: result.latitude,
//               longitude: result.longitude,
//               accuracy: result.accuracy || 50,
//             };
//             locationSourceTemp = "electron";
//             console.log("✅ Location from Electron API:", location);
//           }
//         } catch (electronError) {
//           console.log("❌ Electron API error:", electronError);
//         }
//       }

//       // 2) Browser Geolocation (with accuracy filter)
//       if (!location && navigator.geolocation) {
//         try {
//           console.log("🌐 Trying HTML5 Geolocation...");
//           location = await new Promise((resolve) => {
//             navigator.geolocation.getCurrentPosition(
//               (position) => {
//                 console.log("📍 HTML5 Position received:", position.coords);
//                 resolve({
//                   success: true,
//                   latitude: position.coords.latitude,
//                   longitude: position.coords.longitude,
//                   accuracy: position.coords.accuracy || 100,
//                 });
//               },
//               (error) => {
//                 console.log("❌ HTML5 Geolocation error:", error);
//                 resolve(null);
//               },
//               {
//                 enableHighAccuracy: true,
//                 timeout: 15000,
//                 maximumAge: 0,
//               }
//             );
//           });

//           // Ignore crazy-inaccurate readings
//           if (location) {
//             if (location.accuracy && location.accuracy > 5000) {
//               console.warn(
//                 "⚠️ Browser location too inaccurate, ignoring and falling back.",
//                 location
//               );
//               location = null; // force fallback to IP / default
//             } else {
//               locationSourceTemp = "browser";
//             }
//           }
//         } catch (browserError) {
//           console.log("❌ Browser geolocation error:", browserError);
//         }
//       }

//       // 3) IP-based geolocation (fallback)
//       if (!location) {
//         try {
//           console.log("🌍 Trying IP-based geolocation...");
//           const ipResponse = await fetch("https://ipapi.co/json/");
//           if (ipResponse.ok) {
//             const ipData = await ipResponse.json();
//             if (ipData.latitude && ipData.longitude) {
//               location = {
//                 success: true,
//                 latitude: ipData.latitude,
//                 longitude: ipData.longitude,
//                 accuracy: 50000, // ~50km
//               };
//               locationSourceTemp = "ip";
//               console.log("📍 Location from IP:", location);
//             }
//           }
//         } catch (ipError) {
//           console.log("❌ IP geolocation error:", ipError);
//         }
//       }

//       // 4) Last resort - default office location
//       if (!location) {
//         console.log("🏢 Using default office location fallback");
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100000,
//         };
//         locationSourceTemp = "default";
//       }

//       // Record source in state
//       setLocationSource(locationSourceTemp);

//       // Compute distance from office
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       console.log("📍 Final location used:", {
//         lat: location.latitude,
//         lng: location.longitude,
//         accuracy: location.accuracy,
//         source: locationSourceTemp,
//       });

//       console.log("🏢 Office location:", {
//         lat: OFFICE_LAT,
//         lng: OFFICE_LNG,
//       });

//       console.log("📏 Distance (meters):", distance);

//       const accuracy = location.accuracy || 0;

//       // Effective radius is mostly for display/logging
//       let effectiveRadius = ALLOWED_RADIUS_METERS;
//       let withinRange = false;

//       if (
//         locationSourceTemp === "electron" ||
//         locationSourceTemp === "browser"
//       ) {
//         const extra = Math.min(accuracy, 200); // small buffer
//         effectiveRadius = ALLOWED_RADIUS_METERS + extra;
//         // Strict requirement for GPS/Browser
//         withinRange = distance <= effectiveRadius;
//       } else if (locationSourceTemp === "ip") {
//         // IP is very rough; allow if within 10km
//         effectiveRadius = ALLOWED_RADIUS_METERS + 500; // for display
//         withinRange = distance <= 10000; // 10,000m = 10km
//       } else {
//         // default fallback — treat as within office
//         effectiveRadius = ALLOWED_RADIUS_METERS + 500;
//         withinRange = true;
//       }

//       console.log(`📏 Distance: ${distance.toFixed(0)}m`);
//       console.log(
//         `📍 Source: ${locationSourceTemp}, reported accuracy: ~${accuracy}m`
//       );
//       console.log(`🎯 Effective radius used: ${effectiveRadius}m`);
//       console.log(`✅ Within range?`, withinRange);

//       setLocationDistance(distance);
//       setIsWithinOffice(withinRange);

//       if (withinRange) {
//         setLocationStatus("matched");
//         toast.success(
//           `✅ Location verified! Distance: ${distance.toFixed(0)}m`,
//           {
//             position: "top-center",
//             autoClose: 3000,
//             className: "custom-toast success-toast",
//           }
//         );
//       } else {
//         setLocationStatus("not_matched");
//         toast.warning(
//           `⚠️ You are ${distance.toFixed(0)}m away from office (source: ${
//             locationSourceTemp || "unknown"
//           })`,
//           {
//             position: "top-center",
//             autoClose: 4000,
//             className: "custom-toast warning-toast",
//           }
//         );
//       }

//       const sourceText =
//         locationSourceTemp === "electron"
//           ? "Device GPS"
//           : locationSourceTemp === "browser"
//           ? "Browser Geolocation"
//           : locationSourceTemp === "ip"
//           ? "IP (approximate)"
//           : "Default Location";

//       setEmployeeLocation(
//         withinRange
//           ? `At office (approx. ${distance.toFixed(0)}m via ${sourceText})`
//           : `Not at office (${distance.toFixed(0)}m via ${sourceText})`
//       );
//     } catch (error) {
//       console.error("❌ Location check error:", error);
//       setLocationStatus("error");
//       toast.error("⚠️ Location check failed. Please try again.", {
//         position: "top-center",
//         autoClose: 3000,
//         className: "custom-toast error-toast",
//       });
//       setEmployeeLocation("Location check failed");
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   };

//   // --- Effects ---

//   // Auto-check when modal opens and user is not punched in
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       console.log("🎯 Modal opened, checking location...");
//       checkLocation();
//     }
//   }, [isOpen, isPunchedIn]);

//   // Repeat location check every 30s when open & not punched in
//   useEffect(() => {
//     if (locationIntervalRef.current) {
//       clearInterval(locationIntervalRef.current);
//     }

//     if (isOpen && !isPunchedIn) {
//       console.log("⏰ Setting up 30s location check interval");
//       locationIntervalRef.current = setInterval(checkLocation, 30000);
//     }

//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, [isOpen, isPunchedIn]);

//   // Final cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, []);

//   // --- Helper functions ---

//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   const getLocationStatusText = () => {
//     switch (locationStatus) {
//       case "checking":
//         return isCheckingLocation
//           ? "🔍 Checking location..."
//           : "📍 Check Location";
//       case "matched":
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case "not_matched":
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case "error":
//         return "⚠️ Location error";
//       default:
//         return "📍 Check Location";
//     }
//   };

//   // --- Handlers ---

//   const handlePunchClick = () => {
//     console.log("🎯 Punch button clicked");
//     console.log("Status:", {
//       isPunchedIn,
//       isWithinOffice,
//       locationDistance,
//       loading,
//       canLogout,
//       locationSource,
//     });

//     const isStrictSource =
//       locationSource === "electron" || locationSource === "browser";

//     // Only strictly block when we have good source (GPS/Browser)
//     if (!isPunchedIn && !isWithinOffice && isStrictSource) {
//       toast.warning(
//         `🚫 Cannot Punch In! You are ${locationDistance.toFixed(
//           0
//         )}m away from office.`,
//         {
//           position: "top-center",
//           autoClose: 4000,
//           className: "custom-toast warning-toast",
//         }
//       );
//       checkLocation();
//       return;
//     }

//     console.log("📞 Calling onPunch function...");
//     onPunch();
//   };

//   const handleManualRefresh = () => {
//     console.log("🔄 Manual location refresh requested");
//     checkLocation();
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // --- JSX ---

//   return (
//     <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
//       <div className="attendance-content-wrapper">
//         {/* Header */}
//         <div className="attendance-page-header">
//           <div className="page-header-left">
//             <div className="page-header-icon">⏰</div>
//             <div className="page-header-title">
//               <h1>Attendance Tracker</h1>
//               <p>Track your working hours and location</p>
//             </div>
//           </div>
//           <button className="close-page-btn" onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="attendance-tracker-container">
//           <div
//             className={`attendance-tracker-content ${
//               isPunchedIn ? "punched-in" : ""
//             }`}
//           >
//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">
//                 ⏰ Employee Activity Tracker
//               </h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>
//                 {/* Current app & idle */}
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">
//                       Using: {currentApp || "No app detected"}
//                     </span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 {/* Location status */}
//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">
//                       {getLocationStatusText()}
//                     </span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">
//                         {employeeLocation}
//                       </span>
//                     </div>
//                   )}

//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Allowed Radius:</span>
//                       <span className="detail-value">
//                         {ALLOWED_RADIUS_METERS}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span
//                         className={`detail-value ${
//                           isWithinOffice ? "status-success" : "status-error"
//                         }`}
//                       >
//                         {isWithinOffice ? "✅ Within Range" : "❌ Out of Range"}
//                       </span>
//                     </div>
//                   </div>

//                   {!isPunchedIn && (
//                     <button
//                       className="simple-refresh-btn"
//                       onClick={handleManualRefresh}
//                       disabled={isCheckingLocation}
//                     >
//                       {isCheckingLocation ? (
//                         <>
//                           <span className="button-spinner-small"></span>{" "}
//                           Checking...
//                         </>
//                       ) : (
//                         "🔄 Refresh Location"
//                       )}
//                     </button>
//                   )}
//                 </div>

//                 {/* Status + time */}
//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today&apos;s Status:
//                     <span className="status-value">{getStatusText()}</span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? isIdle
//                         ? "⏸️ Tracking Paused (No Activity)"
//                         : "🟢 Active Working Time"
//                       : "Working Hours Today"}
//                   </p>
//                 </div>

//                 {/* Progress */}
//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? "#f59e0b" : "#10b981",
//                         }}
//                       ></div>
//                     </div>

//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle
//                           ? "⏸️ Waiting for activity..."
//                           : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Punch button */}
//                 <button
//                   className={`punch-button ${
//                     isPunchedIn ? "punch-out" : "punch-in"
//                   } ${loading ? "loading" : ""} ${
//                     !isPunchedIn && !isWithinOffice ? "disabled-punch" : ""
//                   }`}
//                   onClick={handlePunchClick}
//                   disabled={
//                     loading ||
//                     (isPunchedIn && !canLogout) ||
//                     (!isPunchedIn &&
//                       !isWithinOffice &&
//                       (locationSource === "electron" ||
//                         locationSource === "browser"))
//                   }
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? (
//                       "🔴 Stop Tracking & Punch Out"
//                     ) : (
//                       `⏳ ${getRemainingTime()}`
//                     )
//                   ) : isWithinOffice ? (
//                     "🟢 Start Tracking & Punch In"
//                   ) : (
//                     `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"}
//                   </span>
//                 </div>
//               </div>

//               {/* Tracking details */}
//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">
//                         {currentApp || "Not detected"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">
//                         {workingHours.toFixed(2)} hours
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "❌ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)} meters
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;



// ++++++++++++++++++++==============



// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100; // main geofence radius

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     isIdle,
//     currentApp,
//   } = attendance;

//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState("checking");
//   const [employeeLocation, setEmployeeLocation] = useState("");
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);
//   const [locationSource, setLocationSource] = useState("");
//   const locationIntervalRef = useRef(null);

//   // --- Distance calculation (Haversine) ---
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000; // meters
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c; // meters
//   };

//   // --- Updated Location checking logic ---
//   const checkLocation = async () => {
//     if (isCheckingLocation) return;

//     setIsCheckingLocation(true);
//     setLocationStatus("checking");
//     setEmployeeLocation("");

//     try {
//       console.log("🔄 Starting location check...");

//       let location = null;
//       let locationSourceTemp = "";

//       // 1) Try Electron first
//       if (window.electronAPI && typeof window.electronAPI.getCurrentLocation === "function") {
//         try {
//           console.log("📡 Trying Electron location...");
//           const el = await window.electronAPI.getCurrentLocation();
//           if (el && el.success && el.latitude && el.longitude) {
//             location = el;
//             locationSourceTemp = el.source || "electron";
//             console.log("✅ Got Electron location:", location);
//           }
//         } catch (err) {
//           console.log("❌ Electron location error:", err);
//         }
//       }

//       // 2) If Electron failed → use browser
//       if (!location) {
//         console.log("🌐 Fallback to browser...");
//         location = await new Promise((resolve) =>
//           navigator.geolocation.getCurrentPosition(
//             (pos) =>
//               resolve({
//                 success: true,
//                 latitude: pos.coords.latitude,
//                 longitude: pos.coords.longitude,
//                 accuracy: pos.coords.accuracy,
//                 source: "browser"
//               }),
//             () =>
//               resolve({
//                 success: false
//               })
//           )
//         );

//         if (location && location.success) {
//           locationSourceTemp = "browser";
//         }
//       }

//       // 3) IP-based geolocation (fallback)
//       if (!location || !location.success) {
//         try {
//           console.log("🌍 Trying IP-based geolocation...");
//           const ipResponse = await fetch("https://ipapi.co/json/");
//           if (ipResponse.ok) {
//             const ipData = await ipResponse.json();
//             if (ipData.latitude && ipData.longitude) {
//               location = {
//                 success: true,
//                 latitude: ipData.latitude,
//                 longitude: ipData.longitude,
//                 accuracy: 50000, // ~50km
//                 source: "ip"
//               };
//               locationSourceTemp = "ip";
//               console.log("📍 Location from IP:", location);
//             }
//           }
//         } catch (ipError) {
//           console.log("❌ IP geolocation error:", ipError);
//         }
//       }

//       // 4) Last resort - default office location
//       if (!location || !location.success) {
//         console.log("🏢 Using default office location fallback");
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100000,
//           source: "default"
//         };
//         locationSourceTemp = "default";
//       }

//       // Record source in state
//       setLocationSource(locationSourceTemp);

//       // Compute distance from office
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       console.log("📍 Final location used:", {
//         lat: location.latitude,
//         lng: location.longitude,
//         accuracy: location.accuracy,
//         source: locationSourceTemp,
//       });

//       console.log("🏢 Office location:", {
//         lat: OFFICE_LAT,
//         lng: OFFICE_LNG,
//       });

//       console.log("📏 Distance (meters):", distance);

//       const accuracy = location.accuracy || 0;

//       // Effective radius is mostly for display/logging
//       let effectiveRadius = ALLOWED_RADIUS_METERS;
//       let withinRange = false;

//       if (
//         locationSourceTemp === "electron" ||
//         locationSourceTemp === "browser"
//       ) {
//         const extra = Math.min(accuracy, 200); // small buffer
//         effectiveRadius = ALLOWED_RADIUS_METERS + extra;
//         // Strict requirement for GPS/Browser
//         withinRange = distance <= effectiveRadius;
//       } else if (locationSourceTemp === "ip") {
//         // IP is very rough; allow if within 10km
//         effectiveRadius = ALLOWED_RADIUS_METERS + 500; // for display
//         withinRange = distance <= 10000; // 10,000m = 10km
//       } else {
//         // default fallback — treat as within office
//         effectiveRadius = ALLOWED_RADIUS_METERS + 500;
//         withinRange = true;
//       }

//       console.log(`📏 Distance: ${distance.toFixed(0)}m`);
//       console.log(
//         `📍 Source: ${locationSourceTemp}, reported accuracy: ~${accuracy}m`
//       );
//       console.log(`🎯 Effective radius used: ${effectiveRadius}m`);
//       console.log(`✅ Within range?`, withinRange);

//       setLocationDistance(distance);
//       setIsWithinOffice(withinRange);

//       if (withinRange) {
//         setLocationStatus("matched");
//         toast.success(
//           `✅ Location verified! Distance: ${distance.toFixed(0)}m`,
//           {
//             position: "top-center",
//             autoClose: 3000,
//             className: "custom-toast success-toast",
//           }
//         );
//       } else {
//         setLocationStatus("not_matched");
//         toast.warning(
//           `⚠️ You are ${distance.toFixed(0)}m away from office (source: ${
//             locationSourceTemp || "unknown"
//           })`,
//           {
//             position: "top-center",
//             autoClose: 4000,
//             className: "custom-toast warning-toast",
//           }
//         );
//       }

//       const sourceText =
//         locationSourceTemp === "electron"
//           ? "Device GPS"
//           : locationSourceTemp === "browser"
//           ? "Browser Geolocation"
//           : locationSourceTemp === "ip"
//           ? "IP (approximate)"
//           : "Default Location";

//       setEmployeeLocation(
//         withinRange
//           ? `At office (approx. ${distance.toFixed(0)}m via ${sourceText})`
//           : `Not at office (${distance.toFixed(0)}m via ${sourceText})`
//       );
//     } catch (error) {
//       console.error("❌ Location check error:", error);
//       setLocationStatus("error");
//       toast.error("⚠️ Location check failed. Please try again.", {
//         position: "top-center",
//         autoClose: 3000,
//         className: "custom-toast error-toast",
//       });
//       setEmployeeLocation("Location check failed");
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   };

//   // --- Effects ---

//   // Auto-check when modal opens and user is not punched in
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       console.log("🎯 Modal opened, checking location...");
//       checkLocation();
//     }
//   }, [isOpen, isPunchedIn]);

//   // Repeat location check every 30s when open & not punched in
//   useEffect(() => {
//     if (locationIntervalRef.current) {
//       clearInterval(locationIntervalRef.current);
//     }

//     if (isOpen && !isPunchedIn) {
//       console.log("⏰ Setting up 30s location check interval");
//       locationIntervalRef.current = setInterval(checkLocation, 30000);
//     }

//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, [isOpen, isPunchedIn]);

//   // Final cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, []);

//   // --- Helper functions ---

//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   const getLocationStatusText = () => {
//     switch (locationStatus) {
//       case "checking":
//         return isCheckingLocation
//           ? "🔍 Checking location..."
//           : "📍 Check Location";
//       case "matched":
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case "not_matched":
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case "error":
//         return "⚠️ Location error";
//       default:
//         return "📍 Check Location";
//     }
//   };

//   // --- Handlers ---

//   const handlePunchClick = () => {
//     console.log("🎯 Punch button clicked");
//     console.log("Status:", {
//       isPunchedIn,
//       isWithinOffice,
//       locationDistance,
//       loading,
//       canLogout,
//       locationSource,
//     });

//     const isStrictSource =
//       locationSource === "electron" || locationSource === "browser";

//     // Only strictly block when we have good source (GPS/Browser)
//     if (!isPunchedIn && !isWithinOffice && isStrictSource) {
//       toast.warning(
//         `🚫 Cannot Punch In! You are ${locationDistance.toFixed(
//           0
//         )}m away from office.`,
//         {
//           position: "top-center",
//           autoClose: 4000,
//           className: "custom-toast warning-toast",
//         }
//       );
//       checkLocation();
//       return;
//     }

//     console.log("📞 Calling onPunch function...");
//     onPunch();
//   };

//   const handleManualRefresh = () => {
//     console.log("🔄 Manual location refresh requested");
//     checkLocation();
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // --- JSX ---

//   return (
//     <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
//       <div className="attendance-content-wrapper">
//         {/* Header */}
//         <div className="attendance-page-header">
//           <div className="page-header-left">
//             <div className="page-header-icon">⏰</div>
//             <div className="page-header-title">
//               <h1>Attendance Tracker</h1>
//               <p>Track your working hours and location</p>
//             </div>
//           </div>
//           <button className="close-page-btn" onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="attendance-tracker-container">
//           <div
//             className={`attendance-tracker-content ${
//               isPunchedIn ? "punched-in" : ""
//             }`}
//           >
//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">
//                 ⏰ Employee Activity Tracker
//               </h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>
//                 {/* Current app & idle */}
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">
//                       Using: {currentApp || "No app detected"}
//                     </span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 {/* Location status */}
//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">
//                       {getLocationStatusText()}
//                     </span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">
//                         {employeeLocation}
//                       </span>
//                     </div>
//                   )}

//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Allowed Radius:</span>
//                       <span className="detail-value">
//                         {ALLOWED_RADIUS_METERS}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span
//                         className={`detail-value ${
//                           isWithinOffice ? "status-success" : "status-error"
//                         }`}
//                       >
//                         {isWithinOffice ? "✅ Within Range" : "❌ Out of Range"}
//                       </span>
//                     </div>
//                   </div>

//                   {!isPunchedIn && (
//                     <button
//                       className="simple-refresh-btn"
//                       onClick={handleManualRefresh}
//                       disabled={isCheckingLocation}
//                     >
//                       {isCheckingLocation ? (
//                         <>
//                           <span className="button-spinner-small"></span>{" "}
//                           Checking...
//                         </>
//                       ) : (
//                         "🔄 Refresh Location"
//                       )}
//                     </button>
//                   )}
//                 </div>

//                 {/* Status + time */}
//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today&apos;s Status:
//                     <span className="status-value">{getStatusText()}</span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? isIdle
//                         ? "⏸️ Tracking Paused (No Activity)"
//                         : "🟢 Active Working Time"
//                       : "Working Hours Today"}
//                   </p>
//                 </div>

//                 {/* Progress */}
//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? "#f59e0b" : "#10b981",
//                         }}
//                       ></div>
//                     </div>

//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle
//                           ? "⏸️ Waiting for activity..."
//                           : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Punch button */}
//                 <button
//                   className={`punch-button ${
//                     isPunchedIn ? "punch-out" : "punch-in"
//                   } ${loading ? "loading" : ""} ${
//                     !isPunchedIn && !isWithinOffice ? "disabled-punch" : ""
//                   }`}
//                   onClick={handlePunchClick}
//                   disabled={
//                     loading ||
//                     (isPunchedIn && !canLogout) ||
//                     (!isPunchedIn &&
//                       !isWithinOffice &&
//                       (locationSource === "electron" ||
//                         locationSource === "browser"))
//                   }
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? (
//                       "🔴 Stop Tracking & Punch Out"
//                     ) : (
//                       `⏳ ${getRemainingTime()}`
//                     )
//                   ) : isWithinOffice ? (
//                     "🟢 Start Tracking & Punch In"
//                   ) : (
//                     `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"}
//                   </span>
//                 </div>
//               </div>

//               {/* Tracking details */}
//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">
//                         {currentApp || "Not detected"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">
//                         {workingHours.toFixed(2)} hours
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "❌ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)} meters
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;


// +++++++++++++<<<<<<<<<    ye sahi se chalta he bas out of range ko chhod kar 



// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100; // main geofence radius

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     isIdle,
//     currentApp,
//   } = attendance;

//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState("checking");
//   const [employeeLocation, setEmployeeLocation] = useState("");
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);
//   const [locationSource, setLocationSource] = useState("");
//   const [locationAccuracy, setLocationAccuracy] = useState(0);
//   const [lastLocationCheck, setLastLocationCheck] = useState(null);
//   const locationIntervalRef = useRef(null);

//   // --- Distance calculation (Haversine) ---
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000; // meters
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c; // meters
//   };

//   // --- Fixed Location checking logic ---
//   const checkLocation = async () => {
//     if (isCheckingLocation) return;

//     setIsCheckingLocation(true);
//     setLocationStatus("checking");
//     setEmployeeLocation("");

//     try {
//       console.log("🔄 Starting location check...");

//       let location = null;
//       let locationSourceTemp = "";

//       // 1) Try Electron first
//       if (window.electronAPI && typeof window.electronAPI.getCurrentLocation === "function") {
//         try {
//           console.log("📡 Trying Electron location...");
//           const el = await window.electronAPI.getCurrentLocation();
//           if (el && el.success && el.latitude && el.longitude) {
//             location = el;
//             locationSourceTemp = el.source || "electron";
//             console.log("✅ Got Electron location:", location);
//           }
//         } catch (err) {
//           console.log("❌ Electron location error:", err);
//         }
//       }

//       // 2) If Electron failed → use browser
//       if (!location) {
//         console.log("🌐 Fallback to browser...");
//         location = await new Promise((resolve) =>
//           navigator.geolocation.getCurrentPosition(
//             (pos) =>
//               resolve({
//                 success: true,
//                 latitude: pos.coords.latitude,
//                 longitude: pos.coords.longitude,
//                 accuracy: pos.coords.accuracy || 100,
//                 source: "browser"
//               }),
//             (error) => {
//               console.error("Geolocation error:", error);
//               resolve({
//                 success: false,
//                 error: error.message
//               });
//             },
//             {
//               enableHighAccuracy: true,
//               timeout: 10000,
//               maximumAge: 0
//             }
//           )
//         );

//         if (location && location.success) {
//           locationSourceTemp = "browser";
//         }
//       }

//       // 3) IP-based geolocation (fallback)
//       if (!location || !location.success) {
//         try {
//           console.log("🌍 Trying IP-based geolocation...");
//           const ipResponse = await fetch("https://ipapi.co/json/");
//           if (ipResponse.ok) {
//             const ipData = await ipResponse.json();
//             if (ipData.latitude && ipData.longitude) {
//               location = {
//                 success: true,
//                 latitude: ipData.latitude,
//                 longitude: ipData.longitude,
//                 accuracy: 50000,
//                 source: "ip"
//               };
//               locationSourceTemp = "ip";
//               console.log("📍 Location from IP:", location);
//             }
//           }
//         } catch (ipError) {
//           console.log("❌ IP geolocation error:", ipError);
//         }
//       }

//       // 4) Last resort - default office location
//       if (!location || !location.success) {
//         console.log("🏢 Using default office location fallback");
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100,
//           source: "default"
//         };
//         locationSourceTemp = "default";
//       }

//       // Record source and accuracy in state
//       setLocationSource(locationSourceTemp);
//       setLocationAccuracy(location.accuracy || 100);

//       // Compute distance from office
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       console.log("📍 DEBUG - Location Details:", {
//         yourLat: location.latitude,
//         yourLng: location.longitude,
//         officeLat: OFFICE_LAT,
//         officeLng: OFFICE_LNG,
//         distance: distance,
//         accuracy: location.accuracy,
//         source: locationSourceTemp
//       });

//       const accuracy = location.accuracy || 100;
//       let withinRange = false;
//       let effectiveRadius = ALLOWED_RADIUS_METERS;

//       // IMPROVED LOGIC: Fix for location range issue
//       if (locationSourceTemp === "electron" || locationSourceTemp === "browser") {
//         // For GPS sources, consider accuracy properly
//         // Formula: distance <= (radius + reasonable accuracy buffer)
//         const accuracyBuffer = Math.min(accuracy * 0.5, 100); // Use 50% of accuracy, max 100m
//         effectiveRadius = ALLOWED_RADIUS_METERS + accuracyBuffer;
//         withinRange = distance <= effectiveRadius;
        
//         console.log(`📏 GPS Calculation: distance=${distance.toFixed(1)}m <= ${effectiveRadius.toFixed(1)}m (${ALLOWED_RADIUS_METERS}m + ${accuracyBuffer.toFixed(1)}m buffer) = ${withinRange}`);
        
//         // Special allowance for edge cases (within 150m)
//         if (!withinRange && distance <= 150) {
//           console.log("🎯 Edge case: Within 150m, considering office proximity...");
//           // Check if it's just GPS inaccuracy
//           if (distance <= (ALLOWED_RADIUS_METERS + accuracy)) {
//             withinRange = true;
//             console.log("✅ Allowing due to GPS accuracy margin");
//           }
//         }
//       } else if (locationSourceTemp === "ip") {
//         // IP is approximate - be lenient (5km radius)
//         withinRange = distance <= 5000;
//         effectiveRadius = 5000;
//       } else {
//         // Default - assume at office
//         withinRange = true;
//         effectiveRadius = ALLOWED_RADIUS_METERS;
//       }

//       console.log(`🎯 Final Decision:`, {
//         distance: `${distance.toFixed(1)}m`,
//         officeRadius: `${ALLOWED_RADIUS_METERS}m`,
//         accuracy: `${accuracy}m`,
//         effectiveRadius: `${effectiveRadius.toFixed(1)}m`,
//         withinRange: withinRange,
//         source: locationSourceTemp
//       });

//       setLocationDistance(distance);
//       setIsWithinOffice(withinRange);
//       setLastLocationCheck(Date.now());

//       if (withinRange) {
//         setLocationStatus("matched");
//         toast.success(
//           `✅ Location verified! Distance: ${distance.toFixed(0)}m`,
//           {
//             position: "top-center",
//             autoClose: 3000,
//             className: "custom-toast success-toast",
//           }
//         );
//       } else {
//         setLocationStatus("not_matched");
//         toast.warning(
//           `⚠️ You're ${distance.toFixed(0)}m away from office (allowed: ${ALLOWED_RADIUS_METERS}m)`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//             className: "custom-toast warning-toast",
//           }
//         );
//       }

//       const sourceText =
//         locationSourceTemp === "electron"
//           ? "Device GPS"
//           : locationSourceTemp === "browser"
//           ? "Browser GPS"
//           : locationSourceTemp === "ip"
//           ? "IP Location"
//           : "Default";

//       setEmployeeLocation(
//         withinRange
//           ? `At office (${distance.toFixed(0)}m via ${sourceText})`
//           : `${distance.toFixed(0)}m away via ${sourceText}`
//       );

//     } catch (error) {
//       console.error("❌ Location check error:", error);
//       setLocationStatus("error");
//       toast.error("⚠️ Location check failed. Please try again.", {
//         position: "top-center",
//         autoClose: 3000,
//         className: "custom-toast error-toast",
//       });
//       setEmployeeLocation("Location check failed");
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   };

//   // Test function to check exact location
//   const testMyLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const lat = pos.coords.latitude;
//           const lng = pos.coords.longitude;
//           const acc = pos.coords.accuracy;
//           const dist = calculateDistance(lat, lng, OFFICE_LAT, OFFICE_LNG);
          
//           const message = `📍 Your Exact Location:
// Latitude: ${lat}
// Longitude: ${lng}
// Accuracy: ${acc}m
// Distance from office: ${dist.toFixed(1)}m
// Office Radius: ${ALLOWED_RADIUS_METERS}m
// Within Range? ${dist <= ALLOWED_RADIUS_METERS ? "✅ YES" : "❌ NO"}`;
          
//           console.log("📍 Test Location:", { lat, lng, acc, dist });
//           alert(message);
//         },
//         (err) => {
//           alert("Location Error: " + err.message);
//           console.error("Test location error:", err);
//         },
//         { enableHighAccuracy: true }
//       );
//     } else {
//       alert("Geolocation not supported by your browser");
//     }
//   };

//   // --- Effects ---

//   // Auto-check when modal opens and user is not punched in
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       console.log("🎯 Modal opened, checking location...");
//       checkLocation();
//     }
//   }, [isOpen, isPunchedIn]);

//   // Repeat location check every 30s when open & not punched in
//   useEffect(() => {
//     if (locationIntervalRef.current) {
//       clearInterval(locationIntervalRef.current);
//     }

//     if (isOpen && !isPunchedIn) {
//       console.log("⏰ Setting up 30s location check interval");
//       locationIntervalRef.current = setInterval(checkLocation, 30000);
//     }

//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, [isOpen, isPunchedIn]);

//   // Final cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, []);

//   // --- Helper functions ---

//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   const getLocationStatusText = () => {
//     switch (locationStatus) {
//       case "checking":
//         return isCheckingLocation
//           ? "🔍 Checking location..."
//           : "📍 Check Location";
//       case "matched":
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case "not_matched":
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case "error":
//         return "⚠️ Location error";
//       default:
//         return "📍 Check Location";
//     }
//   };

//   const getLocationQualityText = () => {
//     if (!locationAccuracy) return "Unknown";
//     if (locationAccuracy <= 50) return "High";
//     if (locationAccuracy <= 100) return "Medium";
//     if (locationAccuracy <= 500) return "Low";
//     return "Very Low";
//   };

//   // --- Handlers ---

//   const handlePunchClick = () => {
//     console.log("🎯 Punch button clicked");
//     console.log("Status:", {
//       isPunchedIn,
//       isWithinOffice,
//       locationDistance,
//       locationAccuracy,
//       loading,
//       canLogout,
//       locationSource,
//     });

//     // Check if location is recent (less than 1 minute old)
//     const isLocationRecent = lastLocationCheck && (Date.now() - lastLocationCheck < 60000);
    
//     if (!isPunchedIn) {
//       // If location is not recent, refresh first
//       if (!isLocationRecent) {
//         toast.info("🔄 Refreshing location before punch...", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         checkLocation();
//         return;
//       }

//       const isStrictSource = locationSource === "electron" || locationSource === "browser";
      
//       // Only block for strict sources
//       if (!isWithinOffice && isStrictSource) {
//         toast.warning(
//           `🚫 Cannot Punch In! You are ${locationDistance.toFixed(
//             0
//           )}m away (office radius: ${ALLOWED_RADIUS_METERS}m)`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//             className: "custom-toast warning-toast",
//           }
//         );
        
//         // Offer to retry location check
//         setTimeout(() => {
//           if (window.confirm("Location check failed. Would you like to retry?")) {
//             checkLocation();
//           }
//         }, 1000);
        
//         return;
//       }
//     }

//     console.log("📞 Calling onPunch function...");
//     onPunch();
//   };

//   const handleManualRefresh = () => {
//     console.log("🔄 Manual location refresh requested");
//     checkLocation();
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // --- JSX ---

//   return (
//     <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
//       <div className="attendance-content-wrapper">
//         {/* Header */}
//         <div className="attendance-page-header">
//           <div className="page-header-left">
//             <div className="page-header-icon">⏰</div>
//             <div className="page-header-title">
//               <h1>Attendance Tracker</h1>
//               <p>Track your working hours and location</p>
//             </div>
//           </div>
//           <button className="close-page-btn" onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="attendance-tracker-container">
//           <div
//             className={`attendance-tracker-content ${
//               isPunchedIn ? "punched-in" : ""
//             }`}
//           >
//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">
//                 ⏰ Employee Activity Tracker
//               </h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>
//                 {/* Current app & idle */}
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">
//                       Using: {currentApp || "No app detected"}
//                     </span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 {/* Location status */}
//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">
//                       {getLocationStatusText()}
//                     </span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">
//                         {employeeLocation}
//                       </span>
//                     </div>
//                   )}

//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Radius:</span>
//                       <span className="detail-value">
//                         {ALLOWED_RADIUS_METERS}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">GPS Accuracy:</span>
//                       <span className="detail-value">
//                         {locationAccuracy ? `${locationAccuracy.toFixed(0)}m` : "Unknown"}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Location Source:</span>
//                       <span className="detail-value">
//                         {locationSource === "electron" ? "Device GPS" :
//                          locationSource === "browser" ? "Browser GPS" :
//                          locationSource === "ip" ? "IP Location" :
//                          locationSource === "default" ? "Default" : "Checking..."}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span
//                         className={`detail-value ${
//                           isWithinOffice ? "status-success" : "status-error"
//                         }`}
//                       >
//                         {isWithinOffice ? "✅ Within Range" : "❌ Out of Range"}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="location-buttons-row">
//                     {!isPunchedIn && (
//                       <button
//                         className="simple-refresh-btn"
//                         onClick={handleManualRefresh}
//                         disabled={isCheckingLocation}
//                       >
//                         {isCheckingLocation ? (
//                           <>
//                             <span className="button-spinner-small"></span>{" "}
//                             Checking...
//                           </>
//                         ) : (
//                           "🔄 Refresh Location"
//                         )}
//                       </button>
//                     )}
                    
//                     <button
//                       className="test-location-btn"
//                       onClick={testMyLocation}
//                       title="Test your exact GPS location"
//                     >
//                       📍 Test Exact Location
//                     </button>
//                   </div>
//                 </div>

//                 {/* Status + time */}
//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today&apos;s Status:
//                     <span className="status-value">{getStatusText()}</span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? isIdle
//                         ? "⏸️ Tracking Paused (No Activity)"
//                         : "🟢 Active Working Time"
//                       : "Working Hours Today"}
//                   </p>
//                 </div>

//                 {/* Progress */}
//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? "#f59e0b" : "#10b981",
//                         }}
//                       ></div>
//                     </div>

//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle
//                           ? "⏸️ Waiting for activity..."
//                           : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Punch button */}
//                 <button
//                   className={`punch-button ${
//                     isPunchedIn ? "punch-out" : "punch-in"
//                   } ${loading ? "loading" : ""} ${
//                     !isPunchedIn && !isWithinOffice ? "disabled-punch" : ""
//                   }`}
//                   onClick={handlePunchClick}
//                   disabled={
//                     loading ||
//                     (isPunchedIn && !canLogout) ||
//                     (!isPunchedIn &&
//                       !isWithinOffice &&
//                       (locationSource === "electron" ||
//                         locationSource === "browser"))
//                   }
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? (
//                       "🔴 Stop Tracking & Punch Out"
//                     ) : (
//                       `⏳ ${getRemainingTime()}`
//                     )
//                   ) : isWithinOffice ? (
//                     "🟢 Start Tracking & Punch In"
//                   ) : locationSource === "ip" || locationSource === "default" ? (
//                     "📍 Approximate Location - Punch In Anyway"
//                   ) : (
//                     `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"}
//                   </span>
//                 </div>

//                 {/* Debug info (hidden by default, can be enabled) */}
//                 {process.env.NODE_ENV === "development" && (
//                   <div className="debug-info">
//                     <details>
//                       <summary>Debug Info</summary>
//                       <pre>
//                         {JSON.stringify({
//                           distance: locationDistance.toFixed(1),
//                           accuracy: locationAccuracy,
//                           source: locationSource,
//                           withinOffice: isWithinOffice,
//                           lastCheck: lastLocationCheck ? new Date(lastLocationCheck).toLocaleTimeString() : "Never"
//                         }, null, 2)}
//                       </pre>
//                     </details>
//                   </div>
//                 )}
//               </div>

//               {/* Tracking details */}
//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">
//                         {currentApp || "Not detected"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">
//                         {workingHours.toFixed(2)} hours
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "❌ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)} meters
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">GPS Quality:</span>
//                       <span className="detail-value">
//                         {getLocationQualityText()}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Source:</span>
//                       <span className="detail-value">
//                         {locationSource === "electron" ? "Device GPS" :
//                          locationSource === "browser" ? "Browser" :
//                          locationSource === "ip" ? "IP" : "Default"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;




// 111111111111111111111111111111111111111111


// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100; // main geofence radius

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     isIdle,
//     currentApp,
//   } = attendance;

//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState("checking");
//   const [employeeLocation, setEmployeeLocation] = useState("");
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);
//   const [locationSource, setLocationSource] = useState("");
//   const [locationAccuracy, setLocationAccuracy] = useState(0);
//   const [lastLocationCheck, setLastLocationCheck] = useState(null);
//   const locationIntervalRef = useRef(null);

//   // --- Distance calculation (Haversine) ---
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000; // meters
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c; // meters
//   };

//   // --- FIXED Location checking logic for Electron ---
//   const checkLocation = async () => {
//     if (isCheckingLocation) return;

//     setIsCheckingLocation(true);
//     setLocationStatus("checking");
//     setEmployeeLocation("");

//     try {
//       console.log("🔄 Starting location check...");

//       let location = null;
//       let locationSourceTemp = "";
//       let isElectronAvailable = false;

//       // 1) Check if we're in Electron and it's available
//       if (window.electronAPI && typeof window.electronAPI.getCurrentLocation === "function") {
//         isElectronAvailable = true;
//         console.log("⚡ Electron environment detected");
        
//         try {
//           console.log("📡 Requesting location from Electron...");
//           const electronLocation = await window.electronAPI.getCurrentLocation();
          
//           console.log("📍 Raw Electron response:", electronLocation);
          
//           if (electronLocation && electronLocation.success && 
//               electronLocation.latitude && electronLocation.longitude) {
            
//             // IMPORTANT: Normalize and fix Electron location data
//             const fixedLat = parseFloat(electronLocation.latitude);
//             const fixedLng = parseFloat(electronLocation.longitude);
            
//             // Fix: Round coordinates to reasonable precision
//             const roundedLat = parseFloat(fixedLat.toFixed(6));
//             const roundedLng = parseFloat(fixedLng.toFixed(6));
            
//             location = {
//               success: true,
//               latitude: roundedLat,
//               longitude: roundedLng,
//               accuracy: electronLocation.accuracy || 50,
//               source: electronLocation.source || "electron",
//               timestamp: Date.now()
//             };
            
//             locationSourceTemp = "electron";
//             console.log("✅ Electron location parsed and fixed:", location);
            
//             // Log distance calculation for debugging
//             const rawDist = calculateDistance(fixedLat, fixedLng, OFFICE_LAT, OFFICE_LNG);
//             const fixedDist = calculateDistance(roundedLat, roundedLng, OFFICE_LAT, OFFICE_LNG);
//             console.log(`📏 Distance comparison: Raw=${rawDist.toFixed(1)}m, Fixed=${fixedDist.toFixed(1)}m`);
            
//           } else {
//             console.log("⚠️ Electron location unsuccessful:", electronLocation);
//             // Try last known location as fallback
//             if (window.electronAPI.getLastKnownLocation) {
//               try {
//                 const lastLocation = await window.electronAPI.getLastKnownLocation();
//                 if (lastLocation && lastLocation.success) {
//                   console.log("📦 Using last known location:", lastLocation);
//                   location = {
//                     success: true,
//                     latitude: lastLocation.latitude,
//                     longitude: lastLocation.longitude,
//                     accuracy: lastLocation.accuracy || 100,
//                     source: "electron-cached"
//                   };
//                   locationSourceTemp = "electron-cached";
//                 }
//               } catch (cacheError) {
//                 console.log("ℹ️ No cached location available");
//               }
//             }
//           }
//         } catch (electronError) {
//           console.log("❌ Electron location error:", electronError);
//         }
//       }

//       // 2) If Electron failed or not available → use browser
//       if (!location) {
//         console.log("🌐 Trying browser geolocation...");
        
//         if (navigator.geolocation) {
//           location = await new Promise((resolve) => {
//             navigator.geolocation.getCurrentPosition(
//               (pos) => {
//                 console.log("📍 Browser location received:", pos.coords);
//                 resolve({
//                   success: true,
//                   latitude: pos.coords.latitude,
//                   longitude: pos.coords.longitude,
//                   accuracy: pos.coords.accuracy || 100,
//                   source: "browser",
//                   timestamp: pos.timestamp
//                 });
//               },
//               (error) => {
//                 console.error("Browser geolocation error:", error);
//                 resolve({
//                   success: false,
//                   error: error.message,
//                   code: error.code
//                 });
//               },
//               {
//                 enableHighAccuracy: true,
//                 timeout: 10000,
//                 maximumAge: 0
//               }
//             );
//           });

//           if (location && location.success) {
//             locationSourceTemp = "browser";
//             console.log("✅ Browser location successful");
//           }
//         } else {
//           console.log("❌ Browser geolocation not available");
//         }
//       }

//       // 3) IP-based geolocation (fallback)
//       if (!location || !location.success) {
//         try {
//           console.log("🌍 Trying IP-based geolocation...");
//           const ipResponse = await fetch("https://ipapi.co/json/");
//           if (ipResponse.ok) {
//             const ipData = await ipResponse.json();
//             if (ipData.latitude && ipData.longitude) {
//               location = {
//                 success: true,
//                 latitude: ipData.latitude,
//                 longitude: ipData.longitude,
//                 accuracy: 50000,
//                 source: "ip",
//                 city: ipData.city,
//                 country: ipData.country_name
//               };
//               locationSourceTemp = "ip";
//               console.log("📍 Location from IP:", location);
//             }
//           }
//         } catch (ipError) {
//           console.log("❌ IP geolocation error:", ipError);
//         }
//       }

//       // 4) Last resort - default office location
//       if (!location || !location.success) {
//         console.log("🏢 Using default office location fallback");
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100,
//           source: "default"
//         };
//         locationSourceTemp = "default";
//       }

//       // Record source and accuracy in state
//       setLocationSource(locationSourceTemp);
//       setLocationAccuracy(location.accuracy || 100);

//       // Compute distance from office
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       // Special debug for Electron
//       if (locationSourceTemp === "electron") {
//         console.log("⚡ ELECTRON DEBUG - Location Analysis:", {
//           yourCoords: `${location.latitude}, ${location.longitude}`,
//           officeCoords: `${OFFICE_LAT}, ${OFFICE_LNG}`,
//           distance: distance,
//           accuracy: location.accuracy,
//           source: locationSourceTemp
//         });
//       }

//       console.log("📍 Final location used:", {
//         lat: location.latitude,
//         lng: location.longitude,
//         accuracy: location.accuracy,
//         source: locationSourceTemp,
//       });

//       console.log("🏢 Office location:", {
//         lat: OFFICE_LAT,
//         lng: OFFICE_LNG,
//       });

//       const accuracy = location.accuracy || 100;
//       let withinRange = false;

//       // IMPROVED RANGE CALCULATION - FIXED FOR ELECTRON
//       if (locationSourceTemp === "electron") {
//         // SPECIAL FIX: For Electron GPS, be more lenient
//         // Use accuracy as buffer (max 150m buffer)
//         const electronBuffer = Math.min(accuracy * 1.5, 150);
//         const electronRadius = ALLOWED_RADIUS_METERS + electronBuffer;
//         withinRange = distance <= electronRadius;
        
//         console.log(`⚡ Electron Range Calculation:`, {
//           distance: distance.toFixed(1),
//           accuracy: accuracy.toFixed(1),
//           buffer: electronBuffer.toFixed(1),
//           effectiveRadius: electronRadius.toFixed(1),
//           withinRange: withinRange
//         });
        
//         // EXTRA ALLOWANCE: If very close to office (within 200m), allow
//         if (!withinRange && distance <= 200) {
//           console.log("🎯 Electron: Within 200m, special allowance...");
//           withinRange = true;
//         }
//       } 
//       else if (locationSourceTemp === "browser") {
//         // Browser handling - less lenient than Electron
//         const browserBuffer = Math.min(accuracy * 0.8, 100);
//         const browserRadius = ALLOWED_RADIUS_METERS + browserBuffer;
//         withinRange = distance <= browserRadius;
//       }
//       else if (locationSourceTemp === "ip") {
//         // IP is approximate - be very lenient (2km radius)
//         withinRange = distance <= 2000;
//       }
//       else {
//         // Default - assume at office
//         withinRange = true;
//       }

//       console.log(`🎯 Final Range Decision:`, {
//         distance: `${distance.toFixed(1)}m`,
//         officeRadius: `${ALLOWED_RADIUS_METERS}m`,
//         accuracy: `${accuracy}m`,
//         withinRange: withinRange,
//         source: locationSourceTemp
//       });

//       setLocationDistance(distance);
//       setIsWithinOffice(withinRange);
//       setLastLocationCheck(Date.now());

//       if (withinRange) {
//         setLocationStatus("matched");
//         toast.success(
//           `✅ Location verified! Distance: ${distance.toFixed(0)}m`,
//           {
//             position: "top-center",
//             autoClose: 3000,
//             className: "custom-toast success-toast",
//           }
//         );
//       } else {
//         setLocationStatus("not_matched");
//         toast.warning(
//           `⚠️ You're ${distance.toFixed(0)}m away from office`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//             className: "custom-toast warning-toast",
//           }
//         );
//       }

//       const sourceText =
//         locationSourceTemp === "electron"
//           ? "Device GPS"
//           : locationSourceTemp === "electron-cached"
//           ? "Cached GPS"
//           : locationSourceTemp === "browser"
//           ? "Browser GPS"
//           : locationSourceTemp === "ip"
//           ? "IP Location"
//           : "Default";

//       setEmployeeLocation(
//         withinRange
//           ? `At office (${distance.toFixed(0)}m via ${sourceText})`
//           : `${distance.toFixed(0)}m away via ${sourceText}`
//       );

//     } catch (error) {
//       console.error("❌ Location check error:", error);
//       setLocationStatus("error");
//       toast.error("⚠️ Location check failed. Please try again.", {
//         position: "top-center",
//         autoClose: 3000,
//         className: "custom-toast error-toast",
//       });
//       setEmployeeLocation("Location check failed");
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   };

//   // Test function to check exact location
//   const testMyLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const lat = pos.coords.latitude;
//           const lng = pos.coords.longitude;
//           const acc = pos.coords.accuracy;
//           const dist = calculateDistance(lat, lng, OFFICE_LAT, OFFICE_LNG);
          
//           const message = `📍 Your Exact Location:
// Latitude: ${lat}
// Longitude: ${lng}
// Accuracy: ${acc}m
// Distance from office: ${dist.toFixed(1)}m
// Office Radius: ${ALLOWED_RADIUS_METERS}m
// Within Range? ${dist <= ALLOWED_RADIUS_METERS ? "✅ YES" : "❌ NO"}`;
          
//           console.log("📍 Test Location:", { lat, lng, acc, dist });
//           alert(message);
//         },
//         (err) => {
//           alert("Location Error: " + err.message);
//           console.error("Test location error:", err);
//         },
//         { enableHighAccuracy: true }
//       );
//     } else {
//       alert("Geolocation not supported by your browser");
//     }
//   };

//   // Debug Electron location specifically
//   const debugElectronLocation = async () => {
//     if (window.electronAPI && typeof window.electronAPI.getCurrentLocation === "function") {
//       try {
//         console.log("🔧 Debugging Electron location...");
        
//         const result = await window.electronAPI.getCurrentLocation();
//         console.log("⚡ Direct Electron response:", result);
        
//         if (result && result.success) {
//           const dist = calculateDistance(
//             result.latitude,
//             result.longitude,
//             OFFICE_LAT,
//             OFFICE_LNG
//           );
          
//           alert(`Electron Location Debug:
// Latitude: ${result.latitude}
// Longitude: ${result.longitude}
// Accuracy: ${result.accuracy}m
// Distance from office: ${dist.toFixed(1)}m
// Office radius: ${ALLOWED_RADIUS_METERS}m
// Within range? ${dist <= ALLOWED_RADIUS_METERS ? 'YES ✅' : 'NO ❌'}

// Raw data:
// ${JSON.stringify(result, null, 2)}`);
//         }
//       } catch (error) {
//         console.error("Electron debug error:", error);
//         alert("Electron debug failed: " + error.message);
//       }
//     } else {
//       alert("Electron API not available");
//     }
//   };

//   // --- Effects ---

//   // Auto-check when modal opens and user is not punched in
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       console.log("🎯 Modal opened, checking location...");
//       checkLocation();
//     }
//   }, [isOpen, isPunchedIn]);

//   // Repeat location check every 30s when open & not punched in
//   useEffect(() => {
//     if (locationIntervalRef.current) {
//       clearInterval(locationIntervalRef.current);
//     }

//     if (isOpen && !isPunchedIn) {
//       console.log("⏰ Setting up 30s location check interval");
//       locationIntervalRef.current = setInterval(checkLocation, 30000);
//     }

//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, [isOpen, isPunchedIn]);

//   // Final cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, []);

//   // --- Helper functions ---

//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);

//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   const getLocationStatusText = () => {
//     switch (locationStatus) {
//       case "checking":
//         return isCheckingLocation
//           ? "🔍 Checking location..."
//           : "📍 Check Location";
//       case "matched":
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case "not_matched":
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case "error":
//         return "⚠️ Location error";
//       default:
//         return "📍 Check Location";
//     }
//   };

//   const getLocationQualityText = () => {
//     if (!locationAccuracy) return "Unknown";
//     if (locationAccuracy <= 50) return "High";
//     if (locationAccuracy <= 100) return "Medium";
//     if (locationAccuracy <= 500) return "Low";
//     return "Very Low";
//   };

//   // --- Handlers ---

//   const handlePunchClick = () => {
//     console.log("🎯 Punch button clicked");
//     console.log("Status:", {
//       isPunchedIn,
//       isWithinOffice,
//       locationDistance,
//       locationAccuracy,
//       loading,
//       canLogout,
//       locationSource,
//     });

//     // Check if location is recent (less than 1 minute old)
//     const isLocationRecent = lastLocationCheck && (Date.now() - lastLocationCheck < 60000);
    
//     if (!isPunchedIn) {
//       // If location is not recent, refresh first
//       if (!isLocationRecent) {
//         toast.info("🔄 Refreshing location before punch...", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         checkLocation();
//         return;
//       }

//       const isStrictSource = locationSource === "electron" || locationSource === "browser";
      
//       // Only block for strict sources
//       if (!isWithinOffice && isStrictSource) {
//         toast.warning(
//           `🚫 Cannot Punch In! You are ${locationDistance.toFixed(
//             0
//           )}m away (office radius: ${ALLOWED_RADIUS_METERS}m)`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//             className: "custom-toast warning-toast",
//           }
//         );
        
//         // Offer to retry location check
//         setTimeout(() => {
//           if (window.confirm("Location check failed. Would you like to retry?")) {
//             checkLocation();
//           }
//         }, 1000);
        
//         return;
//       }
//     }

//     console.log("📞 Calling onPunch function...");
//     onPunch();
//   };

//   const handleManualRefresh = () => {
//     console.log("🔄 Manual location refresh requested");
//     checkLocation();
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // --- JSX ---

//   return (
//     <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
//       <div className="attendance-content-wrapper">
//         {/* Header */}
//         <div className="attendance-page-header">
//           <div className="page-header-left">
//             <div className="page-header-icon">⏰</div>
//             <div className="page-header-title">
//               <h1>Attendance Tracker</h1>
//               <p>Track your working hours and location</p>
//             </div>
//           </div>
//           <button className="close-page-btn" onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="attendance-tracker-container">
//           <div
//             className={`attendance-tracker-content ${
//               isPunchedIn ? "punched-in" : ""
//             }`}
//           >
//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">
//                 ⏰ Employee Activity Tracker
//               </h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>
//                 {/* Current app & idle */}
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">
//                       Using: {currentApp || "No app detected"}
//                     </span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 {/* Location status */}
//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">
//                       {getLocationStatusText()}
//                     </span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">
//                         {employeeLocation}
//                       </span>
//                     </div>
//                   )}

//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Radius:</span>
//                       <span className="detail-value">
//                         {ALLOWED_RADIUS_METERS}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">GPS Accuracy:</span>
//                       <span className="detail-value">
//                         {locationAccuracy ? `${locationAccuracy.toFixed(0)}m` : "Unknown"}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Location Source:</span>
//                       <span className="detail-value">
//                         {locationSource === "electron" ? "Device GPS" :
//                          locationSource === "electron-cached" ? "Cached GPS" :
//                          locationSource === "browser" ? "Browser GPS" :
//                          locationSource === "ip" ? "IP Location" :
//                          locationSource === "default" ? "Default" : "Checking..."}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span
//                         className={`detail-value ${
//                           isWithinOffice ? "status-success" : "status-error"
//                         }`}
//                       >
//                         {isWithinOffice ? "✅ Within Range" : "❌ Out of Range"}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="location-buttons-row">
//                     {!isPunchedIn && (
//                       <button
//                         className="simple-refresh-btn"
//                         onClick={handleManualRefresh}
//                         disabled={isCheckingLocation}
//                       >
//                         {isCheckingLocation ? (
//                           <>
//                             <span className="button-spinner-small"></span>{" "}
//                             Checking...
//                           </>
//                         ) : (
//                           "🔄 Refresh Location"
//                         )}
//                       </button>
//                     )}
                    
//                     <button
//                       className="test-location-btn"
//                       onClick={testMyLocation}
//                       title="Test your exact GPS location"
//                     >
//                       📍 Test Exact Location
//                     </button>
                    
//                     {window.electronAPI && (
//                       <button
//                         className="debug-electron-btn"
//                         onClick={debugElectronLocation}
//                         title="Debug Electron location specifically"
//                       >
//                         ⚡ Debug Electron
//                       </button>
//                     )}
//                   </div>
//                 </div>

//                 {/* Status + time */}
//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today&apos;s Status:
//                     <span className="status-value">{getStatusText()}</span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? isIdle
//                         ? "⏸️ Tracking Paused (No Activity)"
//                         : "🟢 Active Working Time"
//                       : "Working Hours Today"}
//                   </p>
//                 </div>

//                 {/* Progress */}
//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? "#f59e0b" : "#10b981",
//                         }}
//                       ></div>
//                     </div>

//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle
//                           ? "⏸️ Waiting for activity..."
//                           : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Punch button */}
//                 <button
//                   className={`punch-button ${
//                     isPunchedIn ? "punch-out" : "punch-in"
//                   } ${loading ? "loading" : ""} ${
//                     !isPunchedIn && !isWithinOffice ? "disabled-punch" : ""
//                   }`}
//                   onClick={handlePunchClick}
//                   disabled={
//                     loading ||
//                     (isPunchedIn && !canLogout) ||
//                     (!isPunchedIn &&
//                       !isWithinOffice &&
//                       (locationSource === "electron" ||
//                         locationSource === "browser"))
//                   }
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? (
//                       "🔴 Stop Tracking & Punch Out"
//                     ) : (
//                       `⏳ ${getRemainingTime()}`
//                     )
//                   ) : isWithinOffice ? (
//                     "🟢 Start Tracking & Punch In"
//                   ) : locationSource === "ip" || locationSource === "default" || locationSource === "electron-cached" ? (
//                     "📍 Approximate Location - Punch In Anyway"
//                   ) : (
//                     `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"}
//                   </span>
//                 </div>

//                 {/* Debug info (hidden by default, can be enabled) */}
//                 {process.env.NODE_ENV === "development" && (
//                   <div className="debug-info">
//                     <details>
//                       <summary>Debug Info</summary>
//                       <pre>
//                         {JSON.stringify({
//                           distance: locationDistance.toFixed(1),
//                           accuracy: locationAccuracy,
//                           source: locationSource,
//                           withinOffice: isWithinOffice,
//                           lastCheck: lastLocationCheck ? new Date(lastLocationCheck).toLocaleTimeString() : "Never"
//                         }, null, 2)}
//                       </pre>
//                     </details>
//                   </div>
//                 )}
//               </div>

//               {/* Tracking details */}
//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">
//                         {currentApp || "Not detected"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">
//                         {workingHours.toFixed(2)} hours
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "❌ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)} meters
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">GPS Quality:</span>
//                       <span className="detail-value">
//                         {getLocationQualityText()}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Source:</span>
//                       <span className="detail-value">
//                         {locationSource === "electron" ? "Device GPS" :
//                          locationSource === "electron-cached" ? "Cached GPS" :
//                          locationSource === "browser" ? "Browser" :
//                          locationSource === "ip" ? "IP" : "Default"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;



// 22222222222222222222222222222222  fine he 





// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100;

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     isIdle,
//     currentApp,
//   } = attendance;

//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState("checking");
//   const [employeeLocation, setEmployeeLocation] = useState("");
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);
//   const [locationSource, setLocationSource] = useState("");
//   const [locationAccuracy, setLocationAccuracy] = useState(0);
//   const [lastLocationCheck, setLastLocationCheck] = useState(null);
//   const locationIntervalRef = useRef(null);

//   // --- Distance calculation ---
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371000;
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   };

//   // --- Fixed Location checking logic ---
//   const checkLocation = async () => {
//     if (isCheckingLocation) return;

//     setIsCheckingLocation(true);
//     setLocationStatus("checking");
//     setEmployeeLocation("");

//     try {
//       console.log("🔄 Starting location check...");

//       let location = null;
//       let locationSourceTemp = "";

//       // 1) Try Electron first
//       if (window.electronAPI && typeof window.electronAPI.getCurrentLocation === "function") {
//         try {
//           console.log("📡 Trying Electron location...");
//           const el = await window.electronAPI.getCurrentLocation();
//           if (el && el.success && el.latitude && el.longitude) {
//             const fixedLat = parseFloat(el.latitude.toFixed(6));
//             const fixedLng = parseFloat(el.longitude.toFixed(6));
            
//             location = {
//               success: true,
//               latitude: fixedLat,
//               longitude: fixedLng,
//               accuracy: el.accuracy || 50,
//               source: el.source || "electron"
//             };
//             locationSourceTemp = "electron";
//             console.log("✅ Got Electron location:", location);
//           }
//         } catch (err) {
//           console.log("❌ Electron location error:", err);
//         }
//       }

//       // 2) If Electron failed → use browser
//       if (!location) {
//         console.log("🌐 Fallback to browser...");
//         location = await new Promise((resolve) =>
//           navigator.geolocation.getCurrentPosition(
//             (pos) =>
//               resolve({
//                 success: true,
//                 latitude: pos.coords.latitude,
//                 longitude: pos.coords.longitude,
//                 accuracy: pos.coords.accuracy || 100,
//                 source: "browser"
//               }),
//             (error) => {
//               console.error("Geolocation error:", error);
//               resolve({
//                 success: false,
//                 error: error.message
//               });
//             },
//             {
//               enableHighAccuracy: true,
//               timeout: 10000,
//               maximumAge: 0
//             }
//           )
//         );

//         if (location && location.success) {
//           locationSourceTemp = "browser";
//         }
//       }

//       // 3) IP-based geolocation (fallback)
//       if (!location || !location.success) {
//         try {
//           console.log("🌍 Trying IP-based geolocation...");
//           const ipResponse = await fetch("https://ipapi.co/json/");
//           if (ipResponse.ok) {
//             const ipData = await ipResponse.json();
//             if (ipData.latitude && ipData.longitude) {
//               location = {
//                 success: true,
//                 latitude: ipData.latitude,
//                 longitude: ipData.longitude,
//                 accuracy: 50000,
//                 source: "ip"
//               };
//               locationSourceTemp = "ip";
//             }
//           }
//         } catch (ipError) {
//           console.log("❌ IP geolocation error:", ipError);
//         }
//       }

//       // 4) Last resort - default office location
//       if (!location || !location.success) {
//         console.log("🏢 Using default office location fallback");
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100,
//           source: "default"
//         };
//         locationSourceTemp = "default";
//       }

//       // Record source and accuracy in state
//       setLocationSource(locationSourceTemp);
//       setLocationAccuracy(location.accuracy || 100);

//       // Compute distance from office
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       const accuracy = location.accuracy || 100;
//       let withinRange = false;

//       // IMPROVED RANGE CALCULATION
//       if (locationSourceTemp === "electron") {
//         const electronBuffer = Math.min(accuracy * 1.5, 150);
//         const electronRadius = ALLOWED_RADIUS_METERS + electronBuffer;
//         withinRange = distance <= electronRadius;
        
//         if (!withinRange && distance <= 200) {
//           withinRange = true;
//         }
//       } 
//       else if (locationSourceTemp === "browser") {
//         const browserBuffer = Math.min(accuracy * 0.8, 100);
//         const browserRadius = ALLOWED_RADIUS_METERS + browserBuffer;
//         withinRange = distance <= browserRadius;
//       }
//       else if (locationSourceTemp === "ip") {
//         withinRange = distance <= 2000;
//       }
//       else {
//         withinRange = true;
//       }

//       setLocationDistance(distance);
//       setIsWithinOffice(withinRange);
//       setLastLocationCheck(Date.now());

//       if (withinRange) {
//         setLocationStatus("matched");
//         toast.success(
//           `✅ Location verified! Distance: ${distance.toFixed(0)}m`,
//           {
//             position: "top-center",
//             autoClose: 3000,
//           }
//         );
//       } else {
//         setLocationStatus("not_matched");
//         toast.warning(
//           `⚠️ You're ${distance.toFixed(0)}m away from office`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//           }
//         );
//       }

//       const sourceText =
//         locationSourceTemp === "electron"
//           ? "Device GPS"
//           : locationSourceTemp === "browser"
//           ? "Browser GPS"
//           : locationSourceTemp === "ip"
//           ? "IP Location"
//           : "Default";

//       setEmployeeLocation(
//         withinRange
//           ? `At office (${distance.toFixed(0)}m via ${sourceText})`
//           : `${distance.toFixed(0)}m away via ${sourceText}`
//       );

//     } catch (error) {
//       console.error("❌ Location check error:", error);
//       setLocationStatus("error");
//       toast.error("⚠️ Location check failed.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       setEmployeeLocation("Location check failed");
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   };

//   // --- Effects ---
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       checkLocation();
//     }
//   }, [isOpen, isPunchedIn]);

//   useEffect(() => {
//     if (locationIntervalRef.current) {
//       clearInterval(locationIntervalRef.current);
//     }

//     if (isOpen && !isPunchedIn) {
//       locationIntervalRef.current = setInterval(checkLocation, 30000);
//     }

//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, [isOpen, isPunchedIn]);

//   useEffect(() => {
//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, []);

//   // --- Helper functions ---
//   const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

//   const getRemainingTime = () => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);
//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   };

//   const getStatusColor = () => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   };

//   const getStatusText = () => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   };

//   const getLocationStatusText = () => {
//     switch (locationStatus) {
//       case "checking":
//         return isCheckingLocation
//           ? "🔍 Checking location..."
//           : "📍 Check Location";
//       case "matched":
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case "not_matched":
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case "error":
//         return "⚠️ Location error";
//       default:
//         return "📍 Check Location";
//     }
//   };

//   // --- Handlers ---
//   const handlePunchClick = () => {
//     const isLocationRecent = lastLocationCheck && (Date.now() - lastLocationCheck < 60000);
    
//     if (!isPunchedIn) {
//       if (!isLocationRecent) {
//         toast.info("🔄 Refreshing location...", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         checkLocation();
//         return;
//       }

//       const isStrictSource = locationSource === "electron" || locationSource === "browser";
      
//       if (!isWithinOffice && isStrictSource) {
//         toast.warning(
//           `🚫 Cannot Punch In! You are ${locationDistance.toFixed(0)}m away`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//           }
//         );
//         return;
//       }
//     }

//     onPunch();
//   };

//   const handleManualRefresh = () => {
//     checkLocation();
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // --- JSX ---
//   return (
//     <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
//       <div className="attendance-content-wrapper">
//         <div className="attendance-page-header">
//           <div className="page-header-left">
//             <div className="page-header-icon">⏰</div>
//             <div className="page-header-title">
//               <h1>Attendance Tracker</h1>
//               <p>Track your working hours and location</p>
//             </div>
//           </div>
//           <button className="close-page-btn" onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         <div className="attendance-tracker-container">
//           <div className={`attendance-tracker-content ${isPunchedIn ? "punched-in" : ""}`}>
//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">
//                 ⏰ Employee Activity Tracker
//               </h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">
//                       Using: {currentApp || "No app detected"}
//                     </span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">
//                       {getLocationStatusText()}
//                     </span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">
//                         {employeeLocation}
//                       </span>
//                     </div>
//                   )}

//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Radius:</span>
//                       <span className="detail-value">
//                         {ALLOWED_RADIUS_METERS}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">GPS Accuracy:</span>
//                       <span className="detail-value">
//                         {locationAccuracy ? `${locationAccuracy.toFixed(0)}m` : "Unknown"}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Location Source:</span>
//                       <span className="detail-value">
//                         {locationSource === "electron" ? "Device GPS" :
//                          locationSource === "browser" ? "Browser GPS" :
//                          locationSource === "ip" ? "IP Location" : "Default"}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span className={`detail-value ${isWithinOffice ? "status-success" : "status-error"}`}>
//                         {isWithinOffice ? "✅ Within Range" : "❌ Out of Range"}
//                       </span>
//                     </div>
//                   </div>

//                   {!isPunchedIn && (
//                     <button
//                       className="simple-refresh-btn"
//                       onClick={handleManualRefresh}
//                       disabled={isCheckingLocation}
//                     >
//                       {isCheckingLocation ? (
//                         <>
//                           <span className="button-spinner-small"></span> Checking...
//                         </>
//                       ) : (
//                         "🔄 Refresh Location"
//                       )}
//                     </button>
//                   )}
//                 </div>

//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today&apos;s Status:
//                     <span className="status-value">{getStatusText()}</span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? isIdle
//                         ? "⏸️ Tracking Paused (No Activity)"
//                         : "🟢 Active Working Time"
//                       : "Working Hours Today"}
//                   </p>
//                 </div>

//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? "#f59e0b" : "#10b981",
//                         }}
//                       ></div>
//                     </div>
//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   className={`punch-button ${isPunchedIn ? "punch-out" : "punch-in"} ${loading ? "loading" : ""} ${!isPunchedIn && !isWithinOffice ? "disabled-punch" : ""}`}
//                   onClick={handlePunchClick}
//                   disabled={
//                     loading ||
//                     (isPunchedIn && !canLogout) ||
//                     (!isPunchedIn && !isWithinOffice && (locationSource === "electron" || locationSource === "browser"))
//                   }
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? (
//                       "🔴 Stop Tracking & Punch Out"
//                     ) : (
//                       `⏳ ${getRemainingTime()}`
//                     )
//                   ) : isWithinOffice ? (
//                     "🟢 Start Tracking & Punch In"
//                   ) : (
//                     `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"}
//                   </span>
//                 </div>
//               </div>

//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">
//                         {currentApp || "Not detected"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">
//                         {workingHours.toFixed(2)} hours
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "❌ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)} meters
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;




// 333333333333333333333333    adding day wise or month vise status niche 



// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100;

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     isIdle,
//     currentApp,
//   } = attendance;

//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState("checking");
//   const [employeeLocation, setEmployeeLocation] = useState("");
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);
//   const [locationSource, setLocationSource] = useState("");
//   const [locationAccuracy, setLocationAccuracy] = useState(0);
//   const [lastLocationCheck, setLastLocationCheck] = useState(null);
//   const locationIntervalRef = useRef(null);
  
//   // New state for attendance history
//   const [showHistory, setShowHistory] = useState(false);
//   const [viewMode, setViewMode] = useState("day"); // "day" or "month"
//   const [attendanceHistory, setAttendanceHistory] = useState([]);

//   // --- Distance calculation ---
//   const calculateDistance = useCallback((lat1, lon1, lat2, lon2) => {
//     const R = 6371000;
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   }, []);

//   // --- Fixed Location checking logic ---
//   const checkLocation = useCallback(async () => {
//     if (isCheckingLocation) return;

//     setIsCheckingLocation(true);
//     setLocationStatus("checking");
//     setEmployeeLocation("");

//     try {
//       console.log("🔄 Starting location check...");

//       let location = null;
//       let locationSourceTemp = "";

//       // 1) Try Electron first
//       if (window.electronAPI && typeof window.electronAPI.getCurrentLocation === "function") {
//         try {
//           console.log("📡 Trying Electron location...");
//           const el = await window.electronAPI.getCurrentLocation();
//           if (el && el.success && el.latitude && el.longitude) {
//             const fixedLat = parseFloat(el.latitude.toFixed(6));
//             const fixedLng = parseFloat(el.longitude.toFixed(6));
            
//             location = {
//               success: true,
//               latitude: fixedLat,
//               longitude: fixedLng,
//               accuracy: el.accuracy || 50,
//               source: el.source || "electron"
//             };
//             locationSourceTemp = "electron";
//             console.log("✅ Got Electron location:", location);
//           }
//         } catch (err) {
//           console.log("❌ Electron location error:", err);
//         }
//       }

//       // 2) If Electron failed → use browser
//       if (!location) {
//         console.log("🌐 Fallback to browser...");
//         location = await new Promise((resolve) =>
//           navigator.geolocation.getCurrentPosition(
//             (pos) =>
//               resolve({
//                 success: true,
//                 latitude: pos.coords.latitude,
//                 longitude: pos.coords.longitude,
//                 accuracy: pos.coords.accuracy || 100,
//                 source: "browser"
//               }),
//             (error) => {
//               console.error("Geolocation error:", error);
//               resolve({
//                 success: false,
//                 error: error.message
//               });
//             },
//             {
//               enableHighAccuracy: true,
//               timeout: 10000,
//               maximumAge: 0
//             }
//           )
//         );

//         if (location && location.success) {
//           locationSourceTemp = "browser";
//         }
//       }

//       // 3) IP-based geolocation (fallback)
//       if (!location || !location.success) {
//         try {
//           console.log("🌍 Trying IP-based geolocation...");
//           const ipResponse = await fetch("https://ipapi.co/json/");
//           if (ipResponse.ok) {
//             const ipData = await ipResponse.json();
//             if (ipData.latitude && ipData.longitude) {
//               location = {
//                 success: true,
//                 latitude: ipData.latitude,
//                 longitude: ipData.longitude,
//                 accuracy: 50000,
//                 source: "ip"
//               };
//               locationSourceTemp = "ip";
//             }
//           }
//         } catch (ipError) {
//           console.log("❌ IP geolocation error:", ipError);
//         }
//       }

//       // 4) Last resort - default office location
//       if (!location || !location.success) {
//         console.log("🏢 Using default office location fallback");
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100,
//           source: "default"
//         };
//         locationSourceTemp = "default";
//       }

//       // Record source and accuracy in state
//       setLocationSource(locationSourceTemp);
//       setLocationAccuracy(location.accuracy || 100);

//       // Compute distance from office
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       const accuracy = location.accuracy || 100;
//       let withinRange = false;

//       // IMPROVED RANGE CALCULATION
//       if (locationSourceTemp === "electron") {
//         const electronBuffer = Math.min(accuracy * 1.5, 150);
//         const electronRadius = ALLOWED_RADIUS_METERS + electronBuffer;
//         withinRange = distance <= electronRadius;
        
//         if (!withinRange && distance <= 200) {
//           withinRange = true;
//         }
//       } 
//       else if (locationSourceTemp === "browser") {
//         const browserBuffer = Math.min(accuracy * 0.8, 100);
//         const browserRadius = ALLOWED_RADIUS_METERS + browserBuffer;
//         withinRange = distance <= browserRadius;
//       }
//       else if (locationSourceTemp === "ip") {
//         withinRange = distance <= 2000;
//       }
//       else {
//         withinRange = true;
//       }

//       setLocationDistance(distance);
//       setIsWithinOffice(withinRange);
//       setLastLocationCheck(Date.now());

//       if (withinRange) {
//         setLocationStatus("matched");
//         toast.success(
//           `✅ Location verified! Distance: ${distance.toFixed(0)}m`,
//           {
//             position: "top-center",
//             autoClose: 3000,
//           }
//         );
//       } else {
//         setLocationStatus("not_matched");
//         toast.warning(
//           `⚠️ You're ${distance.toFixed(0)}m away from office`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//           }
//         );
//       }

//       const sourceText =
//         locationSourceTemp === "electron"
//           ? "Device GPS"
//           : locationSourceTemp === "browser"
//           ? "Browser GPS"
//           : locationSourceTemp === "ip"
//           ? "IP Location"
//           : "Default";

//       setEmployeeLocation(
//         withinRange
//           ? `At office (${distance.toFixed(0)}m via ${sourceText})`
//           : `${distance.toFixed(0)}m away via ${sourceText}`
//       );

//     } catch (error) {
//       console.error("❌ Location check error:", error);
//       setLocationStatus("error");
//       toast.error("⚠️ Location check failed.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       setEmployeeLocation("Location check failed");
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   }, [isCheckingLocation, calculateDistance]);

//   // --- Load Attendance History ---
//   const loadAttendanceHistory = useCallback(async () => {
//     try {
//       // This should come from your backend API
//       // For now, using mock data
//       const mockData = [
//         { date: "2024-12-01", hours: 7.5, status: "Completed" },
//         { date: "2024-12-02", hours: 8.0, status: "Completed" },
//         { date: "2024-12-03", hours: 6.5, status: "Partial" },
//         { date: "2024-12-04", hours: 7.0, status: "Completed" },
//         { date: "2024-12-05", hours: 7.8, status: "Completed" },
//         { date: "2024-12-06", hours: 8.2, status: "Overtime" },
//         { date: "2024-12-07", hours: 0, status: "Weekend" },
//         { date: "2024-12-08", hours: 0, status: "Weekend" },
//         { date: "2024-11-01", hours: 160, status: "Monthly Total" },
//         { date: "2024-11-02", hours: 165, status: "Monthly Total" },
//         { date: "2024-11-03", hours: 152, status: "Monthly Total" },
//         { date: "2024-11-04", hours: 168, status: "Monthly Total" },
//         { date: "2024-11-05", hours: 176, status: "Monthly Total" },
//       ];
      
//       setAttendanceHistory(mockData);
//     } catch (error) {
//       console.error("Error loading attendance history:", error);
//     }
//   }, []);

//   // --- Effects ---
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       checkLocation();
//     }
//   }, [isOpen, isPunchedIn, checkLocation]);

//   useEffect(() => {
//     if (locationIntervalRef.current) {
//       clearInterval(locationIntervalRef.current);
//     }

//     if (isOpen && !isPunchedIn) {
//       locationIntervalRef.current = setInterval(checkLocation, 30000);
//     }

//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, [isOpen, isPunchedIn, checkLocation]);

//   useEffect(() => {
//     if (showHistory) {
//       loadAttendanceHistory();
//     }
//   }, [showHistory, loadAttendanceHistory]);

//   useEffect(() => {
//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, []);

//   // --- Helper functions ---
//   const calculateProgress = useCallback(() => Math.min((workingHours / 7) * 100, 100), [workingHours]);

//   const getRemainingTime = useCallback(() => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);
//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   }, [workingHours]);

//   const getStatusColor = useCallback(() => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   }, [isPunchedIn, isIdle]);

//   const getStatusText = useCallback(() => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   }, [isPunchedIn, isIdle]);

//   const getLocationStatusText = useCallback(() => {
//     switch (locationStatus) {
//       case "checking":
//         return isCheckingLocation
//           ? "🔍 Checking location..."
//           : "📍 Check Location";
//       case "matched":
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case "not_matched":
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case "error":
//         return "⚠️ Location error";
//       default:
//         return "📍 Check Location";
//     }
//   }, [locationStatus, isCheckingLocation, locationDistance]);

//   // Filter history based on view mode
//   const filteredHistory = attendanceHistory.filter(record => {
//     if (viewMode === "day") {
//       return !record.date.includes("Monthly Total");
//     } else {
//       return record.date.includes("Monthly Total");
//     }
//   });

//   // Calculate total hours for current view
//   const totalHours = filteredHistory.reduce((sum, record) => sum + record.hours, 0);
//   const averageHours = filteredHistory.length > 0 ? totalHours / filteredHistory.length : 0;

//   // --- Handlers ---
//   const handlePunchClick = useCallback(() => {
//     const isLocationRecent = lastLocationCheck && (Date.now() - lastLocationCheck < 60000);
    
//     if (!isPunchedIn) {
//       if (!isLocationRecent) {
//         toast.info("🔄 Refreshing location...", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         checkLocation();
//         return;
//       }

//       const isStrictSource = locationSource === "electron" || locationSource === "browser";
      
//       if (!isWithinOffice && isStrictSource) {
//         toast.warning(
//           `🚫 Cannot Punch In! You are ${locationDistance.toFixed(0)}m away`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//           }
//         );
//         return;
//       }
//     }

//     onPunch();
//   }, [isPunchedIn, lastLocationCheck, locationSource, isWithinOffice, locationDistance, checkLocation, onPunch]);

//   const handleManualRefresh = useCallback(() => {
//     checkLocation();
//   }, [checkLocation]);

//   const handleOverlayClick = useCallback((e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   }, [onClose]);

//   const toggleHistoryView = useCallback(() => {
//     setShowHistory(!showHistory);
//   }, [showHistory]);

//   // --- JSX ---
//   return (
//     <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
//       <div className="attendance-content-wrapper">
//         {/* <div className="attendance-page-header">
//           <div className="page-header-left">
//             <div className="page-header-icon">⏰</div>
//             <div className="page-header-title">
//               <h1>Attendance Tracker</h1>
//               <p>Track your working hours and location</p>
//             </div>
//           </div>
//           <div className="page-header-right">
//             <button 
//               className="history-toggle-btn"
//               onClick={toggleHistoryView}
//             >
//               {showHistory ? "📊 Hide History" : "📊 View History"}
//             </button>
//             <button className="close-page-btn" onClick={onClose}>
//               ✕
//             </button>
//           </div>
//         </div> */}

//         {!showHistory ? (
//           // Original Attendance Tracker View
//           <div className="attendance-tracker-container">
//             <div className={`attendance-tracker-content ${isPunchedIn ? "punched-in" : ""}`}>

// {/* 
//                 <button 
//       className="home-cross-btn"
//       onClick={onClose}
//       title="Close and go to Home"
//     >
//       ×
//     </button> */}


//           <button 
//             className="home-cross-btnn" 
//             onClick={onClose}
//             aria-label="Close tasks modal"
//           >
//             ✕
//           </button>
//               <div className="attendance-tracker-header">
//                 <h2 className="attendance-tracker-title">
//                   ⏰ Employee Activity Tracker
//                 </h2>
                
//               </div>

//               <div className="attendance-cards-wrapper">
//                 <div className={`attendance-status-card ${getStatusColor()}`}>
//                   {isPunchedIn && (
//                     <div className="current-app-info">
//                       <span className="app-icon">💻</span>
//                       <span className="app-text">
//                         Using: {currentApp || "No app detected"}
//                       </span>
//                       {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                     </div>
//                   )}

//                   <div className="simple-location-status">
//                     <div className={`location-indicator ${locationStatus}`}>
//                       <span className="location-icon">📍</span>
//                       <span className="location-text">
//                         {getLocationStatusText()}
//                       </span>
//                     </div>

//                     {employeeLocation && (
//                       <div className="employee-location-simple">
//                         <span className="location-message">
//                           {employeeLocation}
//                         </span>
//                       </div>
//                     )}

//                     <div className="location-details-box">
//                       <div className="location-detail-item">
//                         <span className="detail-label">Office Location:</span>
//                         <span className="detail-value">Vijay Nagar, Indore</span>
//                       </div>
//                       <div className="location-detail-item">
//                         <span className="detail-label">Office Radius:</span>
//                         <span className="detail-value">
//                           {ALLOWED_RADIUS_METERS}m
//                         </span>
//                       </div>
//                       <div className="location-detail-item">
//                         <span className="detail-label">Your Distance:</span>
//                         <span className="detail-value">
//                           {locationDistance.toFixed(0)}m
//                         </span>
//                       </div>
//                       <div className="location-detail-item">
//                         <span className="detail-label">GPS Accuracy:</span>
//                         <span className="detail-value">
//                           {locationAccuracy ? `${locationAccuracy.toFixed(0)}m` : "Unknown"}
//                         </span>
//                       </div>
//                       <div className="location-detail-item">
//                         <span className="detail-label">Location Source:</span>
//                         <span className="detail-value">
//                           {locationSource === "electron" ? "Device GPS" :
//                           locationSource === "browser" ? "Browser GPS" :
//                           locationSource === "ip" ? "IP Location" : "Default"}
//                         </span>
//                       </div>
//                       <div className="location-detail-item">
//                         <span className="detail-label">Status:</span>
//                         <span className={`detail-value ${isWithinOffice ? "status-success" : "status-error"}`}>
//                           {isWithinOffice ? "✅ Within Range" : "❌ Out of Range"}
//                         </span>
//                       </div>
//                     </div>

//                     {!isPunchedIn && (
//                       <button
//                         className="simple-refresh-btn"
//                         onClick={handleManualRefresh}
//                         disabled={isCheckingLocation}
//                       >
//                         {isCheckingLocation ? (
//                           <>
//                             <span className="button-spinner-small"></span> Checking...
//                           </>
//                         ) : (
//                           "🔄 Refresh Location"
//                         )}
//                       </button>
//                     )}
//                   </div>

//                   <div className="status-header">
//                     <h3 className="status-title">
//                       Today&apos;s Status:
//                       <span className="status-value">{getStatusText()}</span>
//                     </h3>
//                   </div>

//                   <div className="working-time-display">
//                     <div className="time-value">
//                       {workingTime}
//                       {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                     </div>
//                     <p className="time-label">
//                       {isPunchedIn
//                         ? isIdle
//                           ? "⏸️ Tracking Paused (No Activity)"
//                           : "🟢 Active Working Time"
//                         : "Working Hours Today"}
//                     </p>
//                   </div>

//                   {isPunchedIn && (
//                     <div className="progress-section">
//                       <div className="A-progress-bar">
//                         <div
//                           className="progress-fill"
//                           style={{
//                             width: `${calculateProgress()}%`,
//                             backgroundColor: isIdle ? "#f59e0b" : "#10b981",
//                           }}
//                         ></div>
//                       </div>
//                       <div className="progress-info">
//                         <span className="progress-text">
//                           {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                         </span>
//                         <span className="progress-percentage">
//                           {calculateProgress().toFixed(1)}%
//                         </span>
//                       </div>
//                     </div>
//                   )}

//                   <button
//                     className={`punch-button ${isPunchedIn ? "punch-out" : "punch-in"} ${loading ? "loading" : ""} ${!isPunchedIn && !isWithinOffice ? "disabled-punch" : ""}`}
//                     onClick={handlePunchClick}
//                     disabled={
//                       loading ||
//                       (isPunchedIn && !canLogout) ||
//                       (!isPunchedIn && !isWithinOffice && (locationSource === "electron" || locationSource === "browser"))
//                     }
//                   >
//                     {loading ? (
//                       <>
//                         <span className="button-spinner"></span> Processing...
//                       </>
//                     ) : isPunchedIn ? (
//                       canLogout ? (
//                         "🔴 Stop Tracking & Punch Out"
//                       ) : (
//                         `⏳ ${getRemainingTime()}`
//                       )
//                     ) : isWithinOffice ? (
//                       "🟢 Start Tracking & Punch In"
//                     ) : (
//                       `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                     )}
//                   </button>

//                   <div className="location-info">
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">
//                       {isPunchedIn
//                         ? "Location & Activity tracking active"
//                         : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"}
//                     </span>
//                   </div>
//                 </div>

//                 {isPunchedIn && (
//             //       <div className="tracking-details">
                    
//             //         <h4 className="details-title">📊 Live Tracking Details</h4>
//             //         <button 
//             //   className="history-toggle-btn"
//             //   onClick={toggleHistoryView}
//             // >
//             //   {showHistory ? "📊 Hide History" : "📊 View History"}
//             // </button>
//             //         <div className="details-grid">
//             //           <div className="detail-item">
//             //             <span className="detail-label">Current Application:</span>
//             //             <span className="detail-value">
//             //               {currentApp || "Not detected"}
//             //             </span>
//             //           </div>
//             //           <div className="detail-item">
//             //             <span className="detail-label">Tracking Status:</span>
//             //             <span className="detail-value">
//             //               {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//             //             </span>
//             //           </div>
//             //           <div className="detail-item">
//             //             <span className="detail-label">Total Time:</span>
//             //             <span className="detail-value">
//             //               {workingHours.toFixed(2)} hours
//             //             </span>
//             //           </div>
//             //           <div className="detail-item">
//             //             <span className="detail-label">Required Time:</span>
//             //             <span className="detail-value">7 hours</span>
//             //           </div>
//             //           <div className="detail-item">
//             //             <span className="detail-label">Location Status:</span>
//             //             <span className="detail-value">
//             //               {isWithinOffice ? "✅ At Office" : "❌ Away"}
//             //             </span>
//             //           </div>
//             //           <div className="detail-item">
//             //             <span className="detail-label">Distance:</span>
//             //             <span className="detail-value">
//             //               {locationDistance.toFixed(0)} meters
//             //             </span>
//             //           </div>
//             //         </div>
//             //       </div>

//             <div className="tracking-details">
//     {/* Header with Title and Button */}
//     <div className="details-title-container">
//       <h4 className="details-title">📊 Live Tracking Details</h4>
//       <button 
//         className="history-toggle-btn"
//         onClick={toggleHistoryView}
//       >
//         {showHistory ? "← Back to Tracker" : "📊 View History"}
//       </button>
//     </div>
    
//     <div className="details-grid">
//       <div className="detail-item">
//         <span className="detail-label">Current Application:</span>
//         <span className="detail-value">
//           {currentApp || "Not detected"}
//         </span>
//       </div>
//       <div className="detail-item">
//         <span className="detail-label">Tracking Status:</span>
//         <span className="detail-value">
//           {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//         </span>
//       </div>
//       <div className="detail-item">
//         <span className="detail-label">Total Time:</span>
//         <span className="detail-value">
//           {workingHours.toFixed(2)} hours
//         </span>
//       </div>
//       <div className="detail-item">
//         <span className="detail-label">Required Time:</span>
//         <span className="detail-value">7 hours</span>
//       </div>
//       <div className="detail-item">
//         <span className="detail-label">Location Status:</span>
//         <span className="detail-value">
//           {isWithinOffice ? "✅ At Office" : "❌ Away"}
//         </span>
//       </div>
//       <div className="detail-item">
//         <span className="detail-label">Distance:</span>
//         <span className="detail-value">
//           {locationDistance.toFixed(0)} meters
//         </span>
//       </div>
//     </div>
//   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           // Attendance History View
//           <div className="attendance-history-container">
//             {/* <div className="history-header">
//               <h2 className="history-title">📊 Attendance History</h2>
//               <div className="view-mode-toggle">
//                 <button
//                   className={`view-mode-btn ${viewMode === "day" ? "active" : ""}`}
//                   onClick={() => setViewMode("day")}
//                 >
//                   📅 Daily View
//                 </button>
//                 <button
//                   className={`view-mode-btn ${viewMode === "month" ? "active" : ""}`}
//                   onClick={() => setViewMode("month")}
//                 >
//                   📆 Monthly View
//                 </button>
//               </div>
//             </div> */}

//               <div className="history-header">
//     <div className="history-header-top">
//       <button 
//         className="back-to-tracker-btn"
//         onClick={toggleHistoryView}
//       >
//         ← Back to Tracker
//       </button>
//       <h2 className="history-title">📊 Attendance History</h2>
//     </div>
    
//     <div className="view-mode-toggle">
//       <button
//         className={`view-mode-btn ${viewMode === "day" ? "active" : ""}`}
//         onClick={() => setViewMode("day")}
//       >
//         📅 Daily View
//       </button>
//       <button
//         className={`view-mode-btn ${viewMode === "month" ? "active" : ""}`}
//         onClick={() => setViewMode("month")}
//       >
//         📆 Monthly View
//       </button>
//     </div>
//   </div>

//             <div className="history-summary">
//               <div className="summary-card">
//                 <div className="summary-icon">⏱️</div>
//                 <div className="summary-info">
//                   <span className="summary-label">Total {viewMode === "day" ? "Days" : "Months"}</span>
//                   <span className="summary-value">{filteredHistory.length}</span>
//                 </div>
//               </div>
//               <div className="summary-card">
//                 <div className="summary-icon">📈</div>
//                 <div className="summary-info">
//                   <span className="summary-label">Total Hours</span>
//                   <span className="summary-value">{totalHours.toFixed(1)}</span>
//                 </div>
//               </div>
//               <div className="summary-card">
//                 <div className="summary-icon">📊</div>
//                 <div className="summary-info">
//                   <span className="summary-label">Average Hours</span>
//                   <span className="summary-value">{averageHours.toFixed(1)}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="history-table-container">
//               <table className="history-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Working Hours</th>
//                     <th>Status</th>
//                     <th>Progress</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredHistory.map((record, index) => (
//                     <tr key={index} className={record.status.toLowerCase().replace(/\s+/g, '-')}>
//                       <td>{record.date}</td>
//                       <td className="hours-cell">
//                         <span className="hours-value">{record.hours.toFixed(1)} hrs</span>
//                         {viewMode === "day" && (
//                           <div className="hours-progress">
//                             <div 
//                               className="hours-progress-bar" 
//                               style={{width: `${(record.hours / 8) * 100}%`}}
//                             ></div>
//                           </div>
//                         )}
//                       </td>
//                       <td>
//                         <span className={`status-badge ${record.status.toLowerCase().replace(/\s+/g, '-')}`}>
//                           {record.status}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="progress-indicator">
//                           {viewMode === "day" ? (
//                             <>
//                               {record.hours >= 7 ? "✅" : record.hours >= 4 ? "⚠️" : "❌"}
//                               <span className="progress-text">
//                                 {record.hours >= 7 ? "Complete" : record.hours >= 4 ? "Partial" : "Incomplete"}
//                               </span>
//                             </>
//                           ) : (
//                             <>
//                               {record.hours >= 160 ? "✅" : record.hours >= 120 ? "⚠️" : "❌"}
//                               <span className="progress-text">
//                                 {record.hours >= 160 ? "Complete" : record.hours >= 120 ? "Partial" : "Incomplete"}
//                               </span>
//                             </>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="history-legend">
//               <div className="legend-item">
//                 <span className="legend-dot completed"></span>
//                 <span>Complete (7+ hrs daily / 160+ hrs monthly)</span>
//               </div>
//               <div className="legend-item">
//                 <span className="legend-dot partial"></span>
//                 <span>Partial (4-7 hrs daily / 120-160 hrs monthly)</span>
//               </div>
//               <div className="legend-item">
//                 <span className="legend-dot incomplete"></span>
//                 <span>Incomplete (&lt;4 hrs daily / &lt;120 hrs monthly)</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;








// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 300; // 🔴 100m से बढ़ाकर 300m कर दिया

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     isIdle,
//     currentApp,
//   } = attendance;

//   const [isWithinOffice, setIsWithinOffice] = useState(true); // 🔴 Default true
//   const [locationStatus, setLocationStatus] = useState("checking");
//   const [employeeLocation, setEmployeeLocation] = useState("");
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);
//   const [locationSource, setLocationSource] = useState("");
//   const [locationAccuracy, setLocationAccuracy] = useState(0);
//   const [lastLocationCheck, setLastLocationCheck] = useState(null);
//   const [useRelaxedMode, setUseRelaxedMode] = useState(false); // 🔴 New: Relaxed mode
//   const locationIntervalRef = useRef(null);

//   // --- Distance calculation ---
//   const calculateDistance = useCallback((lat1, lon1, lat2, lon2) => {
//     const R = 6371000;
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   }, []);

//   // --- FIXED Location checking logic ---
//   const checkLocation = useCallback(async (forceRelaxed = false) => {
//     if (isCheckingLocation) return;

//     setIsCheckingLocation(true);
//     setLocationStatus("checking");

//     try {
//       console.log("🔄 Checking location...");

//       let location = null;
//       let source = "";

//       // 🔴 TRY RELAXED MODE FIRST (for testing)
//       if (forceRelaxed || useRelaxedMode) {
//         try {
//           if (window.electronAPI && window.electronAPI.getRelaxedLocation) {
//             location = await window.electronAPI.getRelaxedLocation();
//             source = "relaxed-electron";
//             console.log("✅ Relaxed location:", location);
//           }
//         } catch (err) {
//           console.log("❌ Relaxed location failed:", err);
//         }
//       }

//       // Try Electron normal mode
//       if (!location && window.electronAPI && window.electronAPI.getCurrentLocation) {
//         try {
//           location = await window.electronAPI.getCurrentLocation();
//           source = "electron";
//           console.log("✅ Electron location:", location);
//         } catch (err) {
//           console.log("❌ Electron location error:", err);
//         }
//       }

//       // Try browser geolocation
//       if (!location || !location.success) {
//         console.log("🌐 Trying browser geolocation...");
//         location = await new Promise((resolve) => {
//           if (!navigator.geolocation) {
//             resolve({
//               success: false,
//               error: "Geolocation not available"
//             });
//             return;
//           }
          
//           navigator.geolocation.getCurrentPosition(
//             (pos) => resolve({
//               success: true,
//               latitude: pos.coords.latitude,
//               longitude: pos.coords.longitude,
//               accuracy: pos.coords.accuracy || 100,
//               source: "browser"
//             }),
//             (error) => resolve({
//               success: false,
//               error: error.message,
//               source: "browser-error"
//             }),
//             {
//               enableHighAccuracy: true,
//               timeout: 10000,
//               maximumAge: 0
//             }
//           );
//         });
        
//         if (location.success) {
//           source = "browser";
//         }
//       }

//       // 🔴 ALWAYS SUCCESS FALLBACK
//       if (!location || !location.success) {
//         console.log("🏢 Using ALWAYS SUCCESS fallback");
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 50,
//           source: "always-success"
//         };
//         source = "fallback";
//       }

//       // Set location data
//       setLocationSource(source);
//       setLocationAccuracy(location.accuracy || 100);

//       // Calculate distance
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       setLocationDistance(distance);

//       // 🔴 SIMPLIFIED RANGE CHECK - Always allow within 500m
//       const allowedDistance = useRelaxedMode ? 500 : ALLOWED_RADIUS_METERS;
//       let withinRange = false;

//       if (source === "relaxed-electron" || source === "always-success") {
//         // Always allow for relaxed mode
//         withinRange = true;
//       } else if (source === "electron" || source === "browser") {
//         // Check with buffer
//         const buffer = Math.min(location.accuracy * 1.5, 200);
//         withinRange = distance <= (allowedDistance + buffer);
//       } else {
//         // For IP and fallback, always allow
//         withinRange = true;
//       }

//       // 🔴 ADDITIONAL: If distance < 1000m, allow anyway (for testing)
//       if (!withinRange && distance < 1000) {
//         withinRange = true;
//       }

//       setIsWithinOffice(withinRange);
//       setLastLocationCheck(Date.now());

//       // Set status messages
//       if (withinRange) {
//         setLocationStatus("matched");
//         setEmployeeLocation(`✅ At office (${distance.toFixed(0)}m via ${source})`);
        
//         if (!isPunchedIn) {
//           toast.success(`✅ Location verified! Distance: ${distance.toFixed(0)}m`, {
//             position: "top-center",
//             autoClose: 2000,
//           });
//         }
//       } else {
//         setLocationStatus("not_matched");
//         setEmployeeLocation(`⚠️ ${distance.toFixed(0)}m away via ${source}`);
        
//         if (!isPunchedIn) {
//           toast.warning(`⚠️ You're ${distance.toFixed(0)}m away from office`, {
//             position: "top-center",
//             autoClose: 3000,
//           });
//         }
//       }

//     } catch (error) {
//       console.error("❌ Location check error:", error);
      
//       // 🔴 ON ERROR: Always set to within office
//       setIsWithinOffice(true);
//       setLocationStatus("matched");
//       setEmployeeLocation("✅ Location assumed at office");
//       setLocationDistance(0);
//       setLocationSource("error-fallback");
      
//       toast.info("⚠️ Using default location for punch in", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   }, [isCheckingLocation, calculateDistance, useRelaxedMode, isPunchedIn]);

//   // 🔴 NEW: Toggle relaxed mode
//   const toggleRelaxedMode = useCallback(() => {
//     setUseRelaxedMode(!useRelaxedMode);
//     toast.info(
//       useRelaxedMode 
//         ? "🔒 Strict location mode enabled" 
//         : "🔓 Relaxed location mode enabled",
//       { position: "top-center", autoClose: 2000 }
//     );
//   }, [useRelaxedMode]);

//   // --- Effects ---
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       // First check with relaxed mode
//       checkLocation(true);
//     }
//   }, [isOpen, isPunchedIn, checkLocation]);

//   useEffect(() => {
//     if (locationIntervalRef.current) {
//       clearInterval(locationIntervalRef.current);
//     }

//     if (isOpen && !isPunchedIn) {
//       locationIntervalRef.current = setInterval(() => {
//         checkLocation(useRelaxedMode);
//       }, 30000);
//     }

//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, [isOpen, isPunchedIn, checkLocation, useRelaxedMode]);

//   useEffect(() => {
//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, []);

//   // --- Helper functions ---
//   const calculateProgress = useCallback(() => Math.min((workingHours / 7) * 100, 100), [workingHours]);

//   const getRemainingTime = useCallback(() => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);
//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   }, [workingHours]);

//   const getStatusColor = useCallback(() => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   }, [isPunchedIn, isIdle]);

//   const getStatusText = useCallback(() => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   }, [isPunchedIn, isIdle]);

//   const getLocationStatusText = useCallback(() => {
//     switch (locationStatus) {
//       case "checking":
//         return isCheckingLocation ? "🔍 Checking location..." : "📍 Check Location";
//       case "matched":
//         return `✅ Within office range (${locationDistance.toFixed(0)}m)`;
//       case "not_matched":
//         return `⚠️ ${locationDistance.toFixed(0)}m away`;
//       default:
//         return "📍 Location service";
//     }
//   }, [locationStatus, isCheckingLocation, locationDistance]);

//   // --- Handlers ---
//   const handlePunchClick = useCallback(() => {
//     const isLocationRecent = lastLocationCheck && (Date.now() - lastLocationCheck < 60000);
    
//     if (!isPunchedIn) {
//       if (!isLocationRecent) {
//         toast.info("🔄 Refreshing location...", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         checkLocation(useRelaxedMode);
//         return;
//       }

//       // 🔴 SIMPLIFIED: Always allow punch in if within office
//       if (!isWithinOffice) {
//         // But show warning
//         toast.warning(
//           `⚠️ You're ${locationDistance.toFixed(0)}m away from office`,
//           {
//             position: "top-center",
//             autoClose: 3000,
//           }
//         );
//         // Still allow punch in for testing
//         // return; // 🔴 COMMENT OUT TO ALLOW PUNCH IN ANYWAY
//       }
//     }

//     onPunch();
//   }, [isPunchedIn, lastLocationCheck, isWithinOffice, locationDistance, checkLocation, useRelaxedMode, onPunch]);

//   const handleManualRefresh = useCallback(() => {
//     checkLocation(useRelaxedMode);
//   }, [checkLocation, useRelaxedMode]);

//   const handleOverlayClick = useCallback((e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   }, [onClose]);

//   // --- JSX ---
//   return (
//     <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
//       <div className="attendance-content-wrapper">
//         <div className="attendance-tracker-container">
//           <div className={`attendance-tracker-content ${isPunchedIn ? "punched-in" : ""}`}>
            
//             <button 
//               className="home-cross-btnn" 
//               onClick={onClose}
//               aria-label="Close"
//             >
//               ✕
//             </button>

//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">
//                 ⏰ Employee Activity Tracker
//               </h2>
              
//               {/* 🔴 Relaxed Mode Toggle */}
//               <div className="mode-toggle">
//                 <button 
//                   className={`mode-toggle-btn ${useRelaxedMode ? 'relaxed' : 'strict'}`}
//                   onClick={toggleRelaxedMode}
//                 >
//                   {useRelaxedMode ? '🔓 Relaxed Mode' : '🔒 Strict Mode'}
//                 </button>
//                 <div className="mode-info">
//                   {useRelaxedMode 
//                     ? "📍 Location checks are relaxed for testing" 
//                     : "📍 Strict 100m radius checking"}
//                 </div>
//               </div>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">
//                       Using: {currentApp || "No app detected"}
//                     </span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">
//                       {getLocationStatusText()}
//                     </span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">
//                         {employeeLocation}
//                         {useRelaxedMode && " (Relaxed Mode)"}
//                       </span>
//                     </div>
//                   )}

//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Allowed Radius:</span>
//                       <span className="detail-value">
//                         {useRelaxedMode ? "500m" : `${ALLOWED_RADIUS_METERS}m`}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Location Source:</span>
//                       <span className="detail-value">
//                         {locationSource}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span className={`detail-value ${isWithinOffice ? "status-success" : "status-warning"}`}>
//                         {isWithinOffice ? "✅ Allowed to Punch" : "⚠️ Check Distance"}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="location-buttons">
//                     <button
//                       className="simple-refresh-btn"
//                       onClick={handleManualRefresh}
//                       disabled={isCheckingLocation}
//                     >
//                       {isCheckingLocation ? (
//                         <>
//                           <span className="button-spinner-small"></span> Checking...
//                         </>
//                       ) : (
//                         "🔄 Refresh Location"
//                       )}
//                     </button>
                    
//                     {/* 🔴 DEBUG Button for testing */}
//                     {process.env.NODE_ENV === 'development' && (
//                       <button
//                         className="debug-btn"
//                         onClick={() => {
//                           setIsWithinOffice(true);
//                           setLocationStatus("matched");
//                           setLocationDistance(50);
//                           toast.success("DEBUG: Location forced to within office");
//                         }}
//                       >
//                         🐛 Debug: Force Location
//                       </button>
//                     )}
//                   </div>
//                 </div>

//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today's Status:
//                     <span className="status-value">{getStatusText()}</span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? isIdle
//                         ? "⏸️ Tracking Paused (No Activity)"
//                         : "🟢 Active Working Time"
//                       : "Working Hours Today"}
//                   </p>
//                 </div>

//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? "#f59e0b" : "#10b981",
//                         }}
//                       ></div>
//                     </div>
//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 {/* 🔴 FIXED PUNCH BUTTON */}
//                 <button
//                   className={`punch-button ${isPunchedIn ? "punch-out" : "punch-in"} ${loading ? "loading" : ""}`}
//                   onClick={handlePunchClick}
//                   disabled={loading || (isPunchedIn && !canLogout)}
//                   title={!isPunchedIn && !isWithinOffice ? 
//                     `You're ${locationDistance.toFixed(0)}m away` : 
//                     "Click to punch in/out"}
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? (
//                       "🔴 Stop Tracking & Punch Out"
//                     ) : (
//                       `⏳ ${getRemainingTime()}`
//                     )
//                   ) : (
//                     isWithinOffice ? (
//                       "🟢 Start Tracking & Punch In"
//                     ) : (
//                       `⚠️ ${locationDistance.toFixed(0)}m Away - Punch Anyway?`
//                     )
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : `Office: ACORE IT HUB PVT LTD, Vijay Nagar, Indore`}
//                   </span>
//                 </div>
                
//                 {/* 🔴 Warning if not within office */}
//                 {!isPunchedIn && !isWithinOffice && (
//                   <div className="location-warning-box">
//                     <span className="warning-icon">⚠️</span>
//                     <div className="warning-content">
//                       <strong>Warning: You're {locationDistance.toFixed(0)}m from office</strong>
//                       <p>Expected: Within {useRelaxedMode ? "500m" : `${ALLOWED_RADIUS_METERS}m`}</p>
//                       <button 
//                         className="warning-action-btn"
//                         onClick={() => {
//                           setIsWithinOffice(true);
//                           toast.info("Location restriction bypassed for testing");
//                         }}
//                       >
//                         Bypass for Testing
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">
//                         {currentApp || "Not detected"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">
//                         {workingHours.toFixed(2)} hours
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "⚠️ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)} meters
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;






// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AttendanceModal.css";

// // Office coordinates - Vijay Nagar, Indore
// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100;

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     isIdle,
//     currentApp,
//   } = attendance;

//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState("checking");
//   const [employeeLocation, setEmployeeLocation] = useState("");
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);
//   const [locationSource, setLocationSource] = useState("");
//   const [locationAccuracy, setLocationAccuracy] = useState(0);
//   const [lastLocationCheck, setLastLocationCheck] = useState(null);
//   const locationIntervalRef = useRef(null);

//   // --- Distance calculation (Haversine formula) ---
//   const calculateDistance = useCallback((lat1, lon1, lat2, lon2) => {
//     const R = 6371000;
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   }, []);

//   // --- Location checking logic ---
//   const checkLocation = useCallback(async () => {
//     if (isCheckingLocation) return;

//     setIsCheckingLocation(true);
//     setLocationStatus("checking");
//     setEmployeeLocation("");

//     try {
//       let location = null;
//       let locationSourceTemp = "";

//       // 1) Try Electron API first
//       if (window.electronAPI && typeof window.electronAPI.getCurrentLocation === "function") {
//         try {
//           const electronLocation = await window.electronAPI.getCurrentLocation();
//           if (electronLocation && electronLocation.success && 
//               electronLocation.latitude && electronLocation.longitude) {
//             location = {
//               success: true,
//               latitude: electronLocation.latitude,
//               longitude: electronLocation.longitude,
//               accuracy: electronLocation.accuracy || 50,
//               source: "electron"
//             };
//             locationSourceTemp = "electron";
//           }
//         } catch (err) {
//           console.log("Electron location error:", err);
//         }
//       }

//       // 2) If Electron failed → use browser
//       if (!location && navigator.geolocation) {
//         location = await new Promise((resolve) =>
//           navigator.geolocation.getCurrentPosition(
//             (pos) =>
//               resolve({
//                 success: true,
//                 latitude: pos.coords.latitude,
//                 longitude: pos.coords.longitude,
//                 accuracy: pos.coords.accuracy || 100,
//                 source: "browser"
//               }),
//             (error) => {
//               console.error("Geolocation error:", error);
//               resolve({
//                 success: false,
//                 error: error.message
//               });
//             },
//             {
//               enableHighAccuracy: true,
//               timeout: 10000,
//               maximumAge: 0
//             }
//           )
//         );

//         if (location && location.success) {
//           locationSourceTemp = "browser";
//         }
//       }

//       // 3) Last resort - default office location
//       if (!location || !location.success) {
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100,
//           source: "default"
//         };
//         locationSourceTemp = "default";
//       }

//       // Record source and accuracy in state
//       setLocationSource(locationSourceTemp);
//       setLocationAccuracy(location.accuracy || 100);

//       // Compute distance from office
//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       const accuracy = location.accuracy || 100;
//       let withinRange = false;

//       // Range calculation
//       if (locationSourceTemp === "electron" || locationSourceTemp === "browser") {
//         const buffer = Math.min(accuracy * 0.5, 50);
//         const effectiveRadius = ALLOWED_RADIUS_METERS + buffer;
//         withinRange = distance <= effectiveRadius;
//       } else {
//         withinRange = true;
//       }

//       setLocationDistance(distance);
//       setIsWithinOffice(withinRange);
//       setLastLocationCheck(Date.now());

//       if (withinRange) {
//         setLocationStatus("matched");
//         toast.success(
//           `✅ Location verified! Distance: ${distance.toFixed(0)}m`,
//           {
//             position: "top-center",
//             autoClose: 3000,
//           }
//         );
//       } else {
//         setLocationStatus("not_matched");
//         toast.warning(
//           `⚠️ You are ${distance.toFixed(0)}m away from office`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//           }
//         );
//       }

//       const sourceText =
//         locationSourceTemp === "electron"
//           ? "Device GPS"
//           : locationSourceTemp === "browser"
//           ? "Browser GPS"
//           : "Default";

//       setEmployeeLocation(
//         withinRange
//           ? `At office (${distance.toFixed(0)}m via ${sourceText})`
//           : `${distance.toFixed(0)}m away via ${sourceText}`
//       );

//     } catch (error) {
//       console.error("Location check error:", error);
//       setLocationStatus("error");
//       toast.error("⚠️ Location check failed.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       setEmployeeLocation("Location check failed");
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   }, [isCheckingLocation, calculateDistance]);

//   // --- Effects ---
//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       checkLocation();
//     }
//   }, [isOpen, isPunchedIn, checkLocation]);

//   useEffect(() => {
//     if (locationIntervalRef.current) {
//       clearInterval(locationIntervalRef.current);
//     }

//     if (isOpen && !isPunchedIn) {
//       locationIntervalRef.current = setInterval(checkLocation, 30000);
//     }

//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, [isOpen, isPunchedIn, checkLocation]);

//   useEffect(() => {
//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, []);

//   // --- Helper functions ---
//   const calculateProgress = useCallback(() => Math.min((workingHours / 7) * 100, 100), [workingHours]);

//   const getRemainingTime = useCallback(() => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);
//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   }, [workingHours]);

//   const getStatusColor = useCallback(() => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   }, [isPunchedIn, isIdle]);

//   const getStatusText = useCallback(() => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   }, [isPunchedIn, isIdle]);

//   const getLocationStatusText = useCallback(() => {
//     switch (locationStatus) {
//       case "checking":
//         return isCheckingLocation
//           ? "🔍 Checking location..."
//           : "📍 Check Location";
//       case "matched":
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case "not_matched":
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case "error":
//         return "⚠️ Location error";
//       default:
//         return "📍 Check Location";
//     }
//   }, [locationStatus, isCheckingLocation, locationDistance]);

//   // --- Handlers ---
//   const handlePunchClick = useCallback(() => {
//     const isLocationRecent = lastLocationCheck && (Date.now() - lastLocationCheck < 60000);
    
//     if (!isPunchedIn) {
//       if (!isLocationRecent) {
//         toast.info("🔄 Refreshing location...", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         checkLocation();
//         return;
//       }

//       const isStrictSource = locationSource === "electron" || locationSource === "browser";
      
//       if (!isWithinOffice && isStrictSource) {
//         toast.warning(
//           `🚫 Cannot Punch In! You are ${locationDistance.toFixed(0)}m away from office (100m radius required).`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//           }
//         );
//         return;
//       }
//     }

//     onPunch();
//   }, [isPunchedIn, lastLocationCheck, locationSource, isWithinOffice, locationDistance, checkLocation, onPunch]);

//   const handleManualRefresh = useCallback(() => {
//     checkLocation();
//   }, [checkLocation]);

//   const handleOverlayClick = useCallback((e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   }, [onClose]);

//   // --- JSX ---
//   return (
//     <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
//       <div className="attendance-content-wrapper">
//         <div className="attendance-tracker-container">
//           <div className={`attendance-tracker-content ${isPunchedIn ? "punched-in" : ""}`}>
            
//             <button 
//               className="home-cross-btnn" 
//               onClick={onClose}
//               aria-label="Close"
//             >
//               ✕
//             </button>

//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">
//                 ⏰ Employee Activity Tracker
//               </h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">
//                       Using: {currentApp || "No app detected"}
//                     </span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">
//                       {getLocationStatusText()}
//                     </span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">
//                         {employeeLocation}
//                       </span>
//                     </div>
//                   )}

//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Radius:</span>
//                       <span className="detail-value">
//                         {ALLOWED_RADIUS_METERS}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">GPS Accuracy:</span>
//                       <span className="detail-value">
//                         {locationAccuracy ? `${locationAccuracy.toFixed(0)}m` : "Unknown"}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Location Source:</span>
//                       <span className="detail-value">
//                         {locationSource === "electron" ? "Device GPS" :
//                          locationSource === "browser" ? "Browser GPS" : "Default"}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span className={`detail-value ${isWithinOffice ? "status-success" : "status-error"}`}>
//                         {isWithinOffice ? "✅ Within Range" : "❌ Out of Range"}
//                       </span>
//                     </div>
//                   </div>

//                   {!isPunchedIn && (
//                     <button
//                       className="simple-refresh-btn"
//                       onClick={handleManualRefresh}
//                       disabled={isCheckingLocation}
//                     >
//                       {isCheckingLocation ? (
//                         <>
//                           <span className="button-spinner-small"></span> Checking...
//                         </>
//                       ) : (
//                         "🔄 Refresh Location"
//                       )}
//                     </button>
//                   )}
//                 </div>

//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today's Status:
//                     <span className="status-value">{getStatusText()}</span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? isIdle
//                         ? "⏸️ Tracking Paused (No Activity)"
//                         : "🟢 Active Working Time"
//                       : "Working Hours Today"}
//                   </p>
//                 </div>

//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? "#f59e0b" : "#10b981",
//                         }}
//                       ></div>
//                     </div>
//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   className={`punch-button ${isPunchedIn ? "punch-out" : "punch-in"} ${loading ? "loading" : ""} ${!isPunchedIn && !isWithinOffice ? "disabled-punch" : ""}`}
//                   onClick={handlePunchClick}
//                   disabled={
//                     loading ||
//                     (isPunchedIn && !canLogout) ||
//                     (!isPunchedIn && !isWithinOffice && (locationSource === "electron" || locationSource === "browser"))
//                   }
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? (
//                       "🔴 Stop Tracking & Punch Out"
//                     ) : (
//                       `⏳ ${getRemainingTime()}`
//                     )
//                   ) : isWithinOffice ? (
//                     "🟢 Start Tracking & Punch In"
//                   ) : (
//                     `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"}
//                   </span>
//                 </div>
//               </div>

//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">
//                         {currentApp || "Not detected"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">
//                         {workingHours.toFixed(2)} hours
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "❌ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)} meters
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;






// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AttendanceModal.css";

// const OFFICE_LAT = 22.7494444;
// const OFFICE_LNG = 75.8991667;
// const ALLOWED_RADIUS_METERS = 100;

// const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
//   if (!isOpen) return null;

//   const {
//     isPunchedIn,
//     workingHours,
//     workingTime,
//     canLogout,
//     loading,
//     isIdle,
//     currentApp,
//   } = attendance;

//   const [isWithinOffice, setIsWithinOffice] = useState(false);
//   const [locationStatus, setLocationStatus] = useState("checking");
//   const [employeeLocation, setEmployeeLocation] = useState("");
//   const [locationDistance, setLocationDistance] = useState(0);
//   const [isCheckingLocation, setIsCheckingLocation] = useState(false);
//   const [locationSource, setLocationSource] = useState("");
//   const [locationAccuracy, setLocationAccuracy] = useState(0);
//   const [lastLocationCheck, setLastLocationCheck] = useState(null);
//   const locationIntervalRef = useRef(null);

//   const calculateDistance = useCallback((lat1, lon1, lat2, lon2) => {
//     const R = 6371000;
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   }, []);

//   const checkLocation = useCallback(async () => {
//     if (isCheckingLocation) return;

//     setIsCheckingLocation(true);
//     setLocationStatus("checking");
//     setEmployeeLocation("");

//     try {
//       let location = null;
//       let locationSourceTemp = "";

//       if (window.electronAPI && typeof window.electronAPI.getCurrentLocation === "function") {
//         try {
//           const electronLocation = await window.electronAPI.getCurrentLocation();
//           if (electronLocation && electronLocation.success) {
//             location = {
//               success: true,
//               latitude: electronLocation.latitude,
//               longitude: electronLocation.longitude,
//               accuracy: electronLocation.accuracy || 50,
//               source: "electron"
//             };
//             locationSourceTemp = "electron";
//           }
//         } catch (err) {
//           console.log("Electron location error:", err);
//         }
//       }

//       if (!location && navigator.geolocation) {
//         location = await new Promise((resolve) =>
//           navigator.geolocation.getCurrentPosition(
//             (pos) =>
//               resolve({
//                 success: true,
//                 latitude: pos.coords.latitude,
//                 longitude: pos.coords.longitude,
//                 accuracy: pos.coords.accuracy || 100,
//                 source: "browser"
//               }),
//             (error) => {
//               console.error("Geolocation error:", error);
//               resolve({
//                 success: false,
//                 error: error.message
//               });
//             },
//             {
//               enableHighAccuracy: true,
//               timeout: 10000,
//               maximumAge: 0
//             }
//           )
//         );

//         if (location && location.success) {
//           locationSourceTemp = "browser";
//         }
//       }

//       if (!location || !location.success) {
//         location = {
//           success: true,
//           latitude: OFFICE_LAT,
//           longitude: OFFICE_LNG,
//           accuracy: 100,
//           source: "default"
//         };
//         locationSourceTemp = "default";
//       }

//       setLocationSource(locationSourceTemp);
//       setLocationAccuracy(location.accuracy || 100);

//       const distance = calculateDistance(
//         location.latitude,
//         location.longitude,
//         OFFICE_LAT,
//         OFFICE_LNG
//       );

//       const accuracy = location.accuracy || 100;
//       let withinRange = false;

//       if (locationSourceTemp === "electron" || locationSourceTemp === "browser") {
//         const buffer = Math.min(accuracy * 0.5, 50);
//         const effectiveRadius = ALLOWED_RADIUS_METERS + buffer;
//         withinRange = distance <= effectiveRadius;
//       } else {
//         withinRange = true;
//       }

//       setLocationDistance(distance);
//       setIsWithinOffice(withinRange);
//       setLastLocationCheck(Date.now());

//       if (withinRange) {
//         setLocationStatus("matched");
//         toast.success(`✅ Location verified! Distance: ${distance.toFixed(0)}m`, {
//           position: "top-center",
//           autoClose: 3000,
//         });
//       } else {
//         setLocationStatus("not_matched");
//         toast.warning(`⚠️ You are ${distance.toFixed(0)}m away from office`, {
//           position: "top-center",
//           autoClose: 5000,
//         });
//       }

//       const sourceText =
//         locationSourceTemp === "electron"
//           ? "Device GPS"
//           : locationSourceTemp === "browser"
//           ? "Browser GPS"
//           : "Default";

//       setEmployeeLocation(
//         withinRange
//           ? `At office (${distance.toFixed(0)}m via ${sourceText})`
//           : `${distance.toFixed(0)}m away via ${sourceText}`
//       );

//     } catch (error) {
//       console.error("Location check error:", error);
//       setLocationStatus("error");
//       toast.error("⚠️ Location check failed.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       setEmployeeLocation("Location check failed");
//     } finally {
//       setIsCheckingLocation(false);
//     }
//   }, [isCheckingLocation, calculateDistance]);

//   useEffect(() => {
//     if (isOpen && !isPunchedIn) {
//       checkLocation();
//     }
//   }, [isOpen, isPunchedIn, checkLocation]);

//   useEffect(() => {
//     if (locationIntervalRef.current) {
//       clearInterval(locationIntervalRef.current);
//     }

//     if (isOpen && !isPunchedIn) {
//       locationIntervalRef.current = setInterval(checkLocation, 30000);
//     }

//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, [isOpen, isPunchedIn, checkLocation]);

//   useEffect(() => {
//     return () => {
//       if (locationIntervalRef.current) {
//         clearInterval(locationIntervalRef.current);
//       }
//     };
//   }, []);

//   const calculateProgress = useCallback(() => Math.min((workingHours / 7) * 100, 100), [workingHours]);

//   const getRemainingTime = useCallback(() => {
//     if (workingHours >= 7) return "Ready to punch out!";
//     const remainingHours = 7 - workingHours;
//     const hours = Math.floor(remainingHours);
//     const minutes = Math.floor((remainingHours - hours) * 60);
//     if (hours === 0 && minutes === 0) return "Ready to punch out!";
//     return `Complete ${hours}h ${minutes}m more`;
//   }, [workingHours]);

//   const getStatusColor = useCallback(() => {
//     if (!isPunchedIn) return "inactive";
//     if (isIdle) return "idle";
//     return "active";
//   }, [isPunchedIn, isIdle]);

//   const getStatusText = useCallback(() => {
//     if (!isPunchedIn) return "⚪ Not Punched In";
//     if (isIdle) return "🟡 Idle - Tracking Paused";
//     return "🟢 Active Tracking";
//   }, [isPunchedIn, isIdle]);

//   const getLocationStatusText = useCallback(() => {
//     switch (locationStatus) {
//       case "checking":
//         return isCheckingLocation ? "🔍 Checking location..." : "📍 Check Location";
//       case "matched":
//         return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
//       case "not_matched":
//         return `❌ ${locationDistance.toFixed(0)}m away`;
//       case "error":
//         return "⚠️ Location error";
//       default:
//         return "📍 Check Location";
//     }
//   }, [locationStatus, isCheckingLocation, locationDistance]);

//   const handlePunchClick = useCallback(() => {
//     const isLocationRecent = lastLocationCheck && (Date.now() - lastLocationCheck < 60000);
    
//     if (!isPunchedIn) {
//       if (!isLocationRecent) {
//         toast.info("🔄 Refreshing location...", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         checkLocation();
//         return;
//       }

//       const isStrictSource = locationSource === "electron" || locationSource === "browser";
      
//       if (!isWithinOffice && isStrictSource) {
//         toast.warning(
//           `🚫 Cannot Punch In! You are ${locationDistance.toFixed(0)}m away from office (100m radius required).`,
//           {
//             position: "top-center",
//             autoClose: 5000,
//           }
//         );
//         return;
//       }
//     }

//     onPunch();
//   }, [isPunchedIn, lastLocationCheck, locationSource, isWithinOffice, locationDistance, checkLocation, onPunch]);

//   const handleManualRefresh = useCallback(() => {
//     checkLocation();
//   }, [checkLocation]);

//   const handleOverlayClick = useCallback((e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   }, [onClose]);

//   return (
//     <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
//       <div className="attendance-content-wrapper">
//         <div className="attendance-tracker-container">
//           <div className={`attendance-tracker-content ${isPunchedIn ? "punched-in" : ""}`}>
            
//             <button 
//               className="home-cross-btnn" 
//               onClick={onClose}
//               aria-label="Close"
//             >
//               ✕
//             </button>

//             <div className="attendance-tracker-header">
//               <h2 className="attendance-tracker-title">
//                 ⏰ Employee Activity Tracker
//               </h2>
//             </div>

//             <div className="attendance-cards-wrapper">
//               <div className={`attendance-status-card ${getStatusColor()}`}>
//                 {isPunchedIn && (
//                   <div className="current-app-info">
//                     <span className="app-icon">💻</span>
//                     <span className="app-text">
//                       Using: {currentApp || "No app detected"}
//                     </span>
//                     {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
//                   </div>
//                 )}

//                 <div className="simple-location-status">
//                   <div className={`location-indicator ${locationStatus}`}>
//                     <span className="location-icon">📍</span>
//                     <span className="location-text">
//                       {getLocationStatusText()}
//                     </span>
//                   </div>

//                   {employeeLocation && (
//                     <div className="employee-location-simple">
//                       <span className="location-message">
//                         {employeeLocation}
//                       </span>
//                     </div>
//                   )}

//                   <div className="location-details-box">
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Location:</span>
//                       <span className="detail-value">Vijay Nagar, Indore</span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Office Radius:</span>
//                       <span className="detail-value">
//                         {ALLOWED_RADIUS_METERS}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Your Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)}m
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">GPS Accuracy:</span>
//                       <span className="detail-value">
//                         {locationAccuracy ? `${locationAccuracy.toFixed(0)}m` : "Unknown"}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Location Source:</span>
//                       <span className="detail-value">
//                         {locationSource === "electron" ? "Device GPS" :
//                          locationSource === "browser" ? "Browser GPS" : "Default"}
//                       </span>
//                     </div>
//                     <div className="location-detail-item">
//                       <span className="detail-label">Status:</span>
//                       <span className={`detail-value ${isWithinOffice ? "status-success" : "status-error"}`}>
//                         {isWithinOffice ? "✅ Within Range" : "❌ Out of Range"}
//                       </span>
//                     </div>
//                   </div>

//                   {!isPunchedIn && (
//                     <button
//                       className="simple-refresh-btn"
//                       onClick={handleManualRefresh}
//                       disabled={isCheckingLocation}
//                     >
//                       {isCheckingLocation ? (
//                         <>
//                           <span className="button-spinner-small"></span> Checking...
//                         </>
//                       ) : (
//                         "🔄 Refresh Location"
//                       )}
//                     </button>
//                   )}
//                 </div>

//                 <div className="status-header">
//                   <h3 className="status-title">
//                     Today's Status:
//                     <span className="status-value">{getStatusText()}</span>
//                   </h3>
//                 </div>

//                 <div className="working-time-display">
//                   <div className="time-value">
//                     {workingTime}
//                     {isIdle && <span className="paused-indicator"> ⏸️</span>}
//                   </div>
//                   <p className="time-label">
//                     {isPunchedIn
//                       ? isIdle
//                         ? "⏸️ Tracking Paused (No Activity)"
//                         : "🟢 Active Working Time"
//                       : "Working Hours Today"}
//                   </p>
//                 </div>

//                 {isPunchedIn && (
//                   <div className="progress-section">
//                     <div className="A-progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: `${calculateProgress()}%`,
//                           backgroundColor: isIdle ? "#f59e0b" : "#10b981",
//                         }}
//                       ></div>
//                     </div>
//                     <div className="progress-info">
//                       <span className="progress-text">
//                         {isIdle ? "⏸️ Waiting for activity..." : getRemainingTime()}
//                       </span>
//                       <span className="progress-percentage">
//                         {calculateProgress().toFixed(1)}%
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   className={`punch-button ${isPunchedIn ? "punch-out" : "punch-in"} ${loading ? "loading" : ""} ${!isPunchedIn && !isWithinOffice ? "disabled-punch" : ""}`}
//                   onClick={handlePunchClick}
//                   disabled={
//                     loading ||
//                     (isPunchedIn && !canLogout) ||
//                     (!isPunchedIn && !isWithinOffice && (locationSource === "electron" || locationSource === "browser"))
//                   }
//                 >
//                   {loading ? (
//                     <>
//                       <span className="button-spinner"></span> Processing...
//                     </>
//                   ) : isPunchedIn ? (
//                     canLogout ? (
//                       "🔴 Stop Tracking & Punch Out"
//                     ) : (
//                       `⏳ ${getRemainingTime()}`
//                     )
//                   ) : isWithinOffice ? (
//                     "🟢 Start Tracking & Punch In"
//                   ) : (
//                     `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
//                   )}
//                 </button>

//                 <div className="location-info">
//                   <span className="location-icon">📍</span>
//                   <span className="location-text">
//                     {isPunchedIn
//                       ? "Location & Activity tracking active"
//                       : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"}
//                   </span>
//                 </div>
//               </div>

//               {isPunchedIn && (
//                 <div className="tracking-details">
//                   <h4 className="details-title">📊 Live Tracking Details</h4>
//                   <div className="details-grid">
//                     <div className="detail-item">
//                       <span className="detail-label">Current Application:</span>
//                       <span className="detail-value">
//                         {currentApp || "Not detected"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Tracking Status:</span>
//                       <span className="detail-value">
//                         {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Total Time:</span>
//                       <span className="detail-value">
//                         {workingHours.toFixed(2)} hours
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Required Time:</span>
//                       <span className="detail-value">7 hours</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Location Status:</span>
//                       <span className="detail-value">
//                         {isWithinOffice ? "✅ At Office" : "❌ Away"}
//                       </span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Distance:</span>
//                       <span className="detail-value">
//                         {locationDistance.toFixed(0)} meters
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceModal;







import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AttendanceModal.css";

// Office coordinates - Vijay Nagar, Indore
const OFFICE_LAT = 22.7494444;
const OFFICE_LNG = 75.8991667;
const ALLOWED_RADIUS_METERS = 100; // main geofence radius

const AttendanceModal = ({ isOpen, onClose, attendance, onPunch }) => {
  if (!isOpen) return null;

  const {
    isPunchedIn,
    workingHours,
    workingTime,
    canLogout,
    loading,
    isIdle,
    currentApp,
  } = attendance;

  const [isWithinOffice, setIsWithinOffice] = useState(false);
  const [locationStatus, setLocationStatus] = useState("checking");
  const [employeeLocation, setEmployeeLocation] = useState("");
  const [locationDistance, setLocationDistance] = useState(0);
  const [isCheckingLocation, setIsCheckingLocation] = useState(false);
  const [locationSource, setLocationSource] = useState("");
  const locationIntervalRef = useRef(null);

  // --- Distance calculation (Haversine) ---
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371000; // meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // meters
  };

  // --- Location checking logic ---
  const checkLocation = async () => {
    if (isCheckingLocation) return;

    setIsCheckingLocation(true);
    setLocationStatus("checking");
    setEmployeeLocation("");

    try {
      console.log("🔄 Starting location check...");

      let location = null;
      let locationSourceTemp = "";

      // 1) Electron API (if available)
      if (
        typeof window !== "undefined" &&
        window.electronAPI &&
        typeof window.electronAPI.getCurrentLocation === "function"
      ) {
        try {
          console.log("📡 Trying Electron API...");
          const result = await window.electronAPI.getCurrentLocation();
          if (result && result.success && result.latitude && result.longitude) {
            location = {
              success: true,
              latitude: result.latitude,
              longitude: result.longitude,
              accuracy: result.accuracy || 50,
            };
            locationSourceTemp = "electron";
            console.log("✅ Location from Electron API:", location);
          }
        } catch (electronError) {
          console.log("❌ Electron API error:", electronError);
        }
      }

      // 2) Browser Geolocation (with accuracy filter)
      if (!location && navigator.geolocation) {
        try {
          console.log("🌐 Trying HTML5 Geolocation...");
          location = await new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                console.log("📍 HTML5 Position received:", position.coords);
                resolve({
                  success: true,
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  accuracy: position.coords.accuracy || 100,
                });
              },
              (error) => {
                console.log("❌ HTML5 Geolocation error:", error);
                resolve(null);
              },
              {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 0,
              }
            );
          });

          // Ignore crazy-inaccurate readings
          if (location) {
            if (location.accuracy && location.accuracy > 5000) {
              console.warn(
                "⚠️ Browser location too inaccurate, ignoring and falling back.",
                location
              );
              location = null; // force fallback to IP / default
            } else {
              locationSourceTemp = "browser";
            }
          }
        } catch (browserError) {
          console.log("❌ Browser geolocation error:", browserError);
        }
      }

      // 3) IP-based geolocation (fallback)
      if (!location) {
        try {
          console.log("🌍 Trying IP-based geolocation...");
          const ipResponse = await fetch("https://ipapi.co/json/");
          if (ipResponse.ok) {
            const ipData = await ipResponse.json();
            if (ipData.latitude && ipData.longitude) {
              location = {
                success: true,
                latitude: ipData.latitude,
                longitude: ipData.longitude,
                accuracy: 50000, // ~50km
              };
              locationSourceTemp = "ip";
              console.log("📍 Location from IP:", location);
            }
          }
        } catch (ipError) {
          console.log("❌ IP geolocation error:", ipError);
        }
      }

      // 4) Last resort - default office location
      if (!location) {
        console.log("🏢 Using default office location fallback");
        location = {
          success: true,
          latitude: OFFICE_LAT,
          longitude: OFFICE_LNG,
          accuracy: 100000,
        };
        locationSourceTemp = "default";
      }

      // Record source in state
      setLocationSource(locationSourceTemp);

      // Compute distance from office
      const distance = calculateDistance(
        location.latitude,
        location.longitude,
        OFFICE_LAT,
        OFFICE_LNG
      );

      console.log("📍 Final location used:", {
        lat: location.latitude,
        lng: location.longitude,
        accuracy: location.accuracy,
        source: locationSourceTemp,
      });

      console.log("🏢 Office location:", {
        lat: OFFICE_LAT,
        lng: OFFICE_LNG,
      });

      console.log("📏 Distance (meters):", distance);

      const accuracy = location.accuracy || 0;

      // Effective radius is mostly for display/logging
      let effectiveRadius = ALLOWED_RADIUS_METERS;
      let withinRange = false;

      if (
        locationSourceTemp === "electron" ||
        locationSourceTemp === "browser"
      ) {
        const extra = Math.min(accuracy, 200); // small buffer
        effectiveRadius = ALLOWED_RADIUS_METERS + extra;
        // Strict requirement for GPS/Browser
        withinRange = distance <= effectiveRadius;
      } else if (locationSourceTemp === "ip") {
        // IP is very rough; allow if within 10km
        effectiveRadius = ALLOWED_RADIUS_METERS + 500; // for display
        withinRange = distance <= 10000; // 10,000m = 10km
      } else {
        // default fallback — treat as within office
        effectiveRadius = ALLOWED_RADIUS_METERS + 500;
        withinRange = true;
      }

      console.log(`📏 Distance: ${distance.toFixed(0)}m`);
      console.log(
        `📍 Source: ${locationSourceTemp}, reported accuracy: ~${accuracy}m`
      );
      console.log(`🎯 Effective radius used: ${effectiveRadius}m`);
      console.log(`✅ Within range?`, withinRange);

      setLocationDistance(distance);
      setIsWithinOffice(withinRange);

      if (withinRange) {
        setLocationStatus("matched");
        toast.success(
          `✅ Location verified! Distance: ${distance.toFixed(0)}m`,
          {
            position: "top-center",
            autoClose: 3000,
            className: "custom-toast success-toast",
          }
        );
      } else {
        setLocationStatus("not_matched");
        toast.warning(
          `⚠️ You are ${distance.toFixed(0)}m away from office (source: ${
            locationSourceTemp || "unknown"
          })`,
          {
            position: "top-center",
            autoClose: 4000,
            className: "custom-toast warning-toast",
          }
        );
      }

      const sourceText =
        locationSourceTemp === "electron"
          ? "Device GPS"
          : locationSourceTemp === "browser"
          ? "Browser Geolocation"
          : locationSourceTemp === "ip"
          ? "IP (approximate)"
          : "Default Location";

      setEmployeeLocation(
        withinRange
          ? `At office (approx. ${distance.toFixed(0)}m via ${sourceText})`
          : `Not at office (${distance.toFixed(0)}m via ${sourceText})`
      );
    } catch (error) {
      console.error("❌ Location check error:", error);
      setLocationStatus("error");
      toast.error("⚠️ Location check failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        className: "custom-toast error-toast",
      });
      setEmployeeLocation("Location check failed");
    } finally {
      setIsCheckingLocation(false);
    }
  };

  // --- Effects ---

  // Auto-check when modal opens and user is not punched in
  // useEffect(() => {
  //   if (isOpen && !isPunchedIn) {
  //     console.log("🎯 Modal opened, checking location...");
  //     checkLocation();
  //   }
  // }, [isOpen, isPunchedIn]);




  // Repeat location check every 30s when open & not punched in
  // useEffect(() => {
  //   if (locationIntervalRef.current) {
  //     clearInterval(locationIntervalRef.current);
  //   }

  //   if (isOpen && !isPunchedIn) {
  //     console.log("⏰ Setting up 30s location check interval");
  //     locationIntervalRef.current = setInterval(checkLocation, 30000);
  //   }

  //   return () => {
  //     if (locationIntervalRef.current) {
  //       clearInterval(locationIntervalRef.current);
  //     }
  //   };
  // }, [isOpen, isPunchedIn]);

  // Final cleanup on unmount
  useEffect(() => {
    return () => {
      if (locationIntervalRef.current) {
        clearInterval(locationIntervalRef.current);
      }
    };
  }, []);

  // --- Helper functions ---

  const calculateProgress = () => Math.min((workingHours / 7) * 100, 100);

  const getRemainingTime = () => {
    if (workingHours >= 7) return "Ready to punch out!";
    const remainingHours = 7 - workingHours;
    const hours = Math.floor(remainingHours);
    const minutes = Math.floor((remainingHours - hours) * 60);

    if (hours === 0 && minutes === 0) return "Ready to punch out!";
    return `Complete ${hours}h ${minutes}m more`;
  };

  const getStatusColor = () => {
    if (!isPunchedIn) return "inactive";
    if (isIdle) return "idle";
    return "active";
  };

  const getStatusText = () => {
    if (!isPunchedIn) return "⚪ Not Punched In";
    if (isIdle) return "🟡 Idle - Tracking Paused";
    return "🟢 Active Tracking";
  };

  const getLocationStatusText = () => {
    switch (locationStatus) {
      case "checking":
        return isCheckingLocation
          ? "🔍 Checking location..."
          : "📍 Check Location";
      case "matched":
        return `✅ Location matched (${locationDistance.toFixed(0)}m)`;
      case "not_matched":
        return `❌ ${locationDistance.toFixed(0)}m away`;
      case "error":
        return "⚠️ Location error";
      default:
        return "📍 Check Location";
    }
  };

  // --- Handlers ---

  const handlePunchClick = () => {
    console.log("🎯 Punch button clicked");
    console.log("Status:", {
      isPunchedIn,
      isWithinOffice,
      locationDistance,
      loading,
      canLogout,
      locationSource,
    });

    const isStrictSource =
      locationSource === "electron" || locationSource === "browser";

    // Only strictly block when we have good source (GPS/Browser)
    if (!isPunchedIn && !isWithinOffice && isStrictSource) {
      toast.warning(
        `🚫 Cannot Punch In! You are ${locationDistance.toFixed(
          0
        )}m away from office.`,
        {
          position: "top-center",
          autoClose: 4000,
          className: "custom-toast warning-toast",
        }
      );
      checkLocation();
      return;
    }

    console.log("📞 Calling onPunch function...");
    onPunch();
  };

  const handleManualRefresh = () => {
    console.log("🔄 Manual location refresh requested");
    checkLocation();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // --- JSX ---

  return (
    <div className="attendance-fullpage-container" onClick={handleOverlayClick}>
      <div className="attendance-content-wrapper">
        {/* Header */}
        <div className="attendance-page-header">
          <div className="page-header-left">
            <div className="page-header-icon">⏰</div>
            <div className="page-header-title">
              <h1>Attendance Tracker</h1>
              <p>Track your working hours and location</p>
            </div>
          </div>
          <button className="close-page-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Main Content */}
        <div className="attendance-tracker-container">
          <div
            className={`attendance-tracker-content ${
              isPunchedIn ? "punched-in" : ""
            }`}
          >
            <div className="attendance-tracker-header">
              <h2 className="attendance-tracker-title">
                ⏰ Employee Activity Tracker
              </h2>
            </div>

            <div className="attendance-cards-wrapper">
              <div className={`attendance-status-card ${getStatusColor()}`}>
                {/* Current app & idle */}
                {isPunchedIn && (
                  <div className="current-app-info">
                    <span className="app-icon">💻</span>
                    <span className="app-text">
                      Using: {currentApp || "No app detected"}
                    </span>
                    {isIdle && <span className="idle-badge">⏸️ IDLE</span>}
                  </div>
                )}

                {/* Location status */}
                <div className="simple-location-status">
                  <div className={`location-indicator ${locationStatus}`}>
                    <span className="location-icon">📍</span>
                    <span className="location-text">
                      {getLocationStatusText()}
                    </span>
                  </div>

                  {employeeLocation && (
                    <div className="employee-location-simple">
                      <span className="location-message">
                        {employeeLocation}
                      </span>
                    </div>
                  )}

                  <div className="location-details-box">
                    <div className="location-detail-item">
                      <span className="detail-label">Office Location:</span>
                      <span className="detail-value">Vijay Nagar, Indore</span>
                    </div>
                    <div className="location-detail-item">
                      <span className="detail-label">Allowed Radius:</span>
                      <span className="detail-value">
                        {ALLOWED_RADIUS_METERS}m
                      </span>
                    </div>
                    <div className="location-detail-item">
                      <span className="detail-label">Your Distance:</span>
                      <span className="detail-value">
                        {locationDistance.toFixed(0)}m
                      </span>
                    </div>
                    <div className="location-detail-item">
                      <span className="detail-label">Status:</span>
                      <span
                        className={`detail-value ${
                          isWithinOffice ? "status-success" : "status-error"
                        }`}
                      >
                        {isWithinOffice ? "✅ Within Range" : "❌ Out of Range"}
                      </span>
                    </div>
                  </div>

                  {!isPunchedIn && (
                    <button
                      className="simple-refresh-btn"
                      onClick={handleManualRefresh}
                      disabled={isCheckingLocation}
                    >
                      {isCheckingLocation ? (
                        <>
                          <span className="button-spinner-small"></span>{" "}
                          Checking...
                        </>
                      ) : (
                        "🔄 Refresh Location"
                      )}
                    </button>
                  )}
                </div>

                {/* Status + time */}
                <div className="status-header">
                  <h3 className="status-title">
                    Today&apos;s Status:
                    <span className="status-value">{getStatusText()}</span>
                  </h3>
                </div>

                <div className="working-time-display">
                  <div className="time-value">
                    {workingTime}
                    {isIdle && <span className="paused-indicator"> ⏸️</span>}
                  </div>
                  <p className="time-label">
                    {isPunchedIn
                      ? isIdle
                        ? "⏸️ Tracking Paused (No Activity)"
                        : "🟢 Active Working Time"
                      : "Working Hours Today"}
                  </p>
                </div>

                {/* Progress */}
                {isPunchedIn && (
                  <div className="progress-section">
                    <div className="A-progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${calculateProgress()}%`,
                          backgroundColor: isIdle ? "#f59e0b" : "#10b981",
                        }}
                      ></div>
                    </div>

                    <div className="progress-info">
                      <span className="progress-text">
                        {isIdle
                          ? "⏸️ Waiting for activity..."
                          : getRemainingTime()}
                      </span>
                      <span className="progress-percentage">
                        {calculateProgress().toFixed(1)}%
                      </span>
                    </div>
                  </div>
                )}

                {/* Punch button */}
                <button
                  className={`punch-button ${
                    isPunchedIn ? "punch-out" : "punch-in"
                  } ${loading ? "loading" : ""} ${
                    !isPunchedIn && !isWithinOffice ? "disabled-punch" : ""
                  }`}
                  onClick={handlePunchClick}
                  disabled={
                    loading ||
                    (isPunchedIn && !canLogout) ||
                    (!isPunchedIn &&
                      !isWithinOffice &&
                      (locationSource === "electron" ||
                        locationSource === "browser"))
                  }
                >
                  {loading ? (
                    <>
                      <span className="button-spinner"></span> Processing...
                    </>
                  ) : isPunchedIn ? (
                    canLogout ? (
                      "🔴 Stop Tracking & Punch Out"
                    ) : (
                      `⏳ ${getRemainingTime()}`
                    )
                  ) : isWithinOffice ? (
                    "🟢 Start Tracking & Punch In"
                  ) : (
                    `📍 ${locationDistance.toFixed(0)}m Away - Can't Punch`
                  )}
                </button>

                <div className="location-info">
                  <span className="location-icon">📍</span>
                  <span className="location-text">
                    {isPunchedIn
                      ? "Location & Activity tracking active"
                      : "ACORE IT HUB PVT LTD, Vijay Nagar, Indore"}
                  </span>
                </div>
              </div>

              {/* Tracking details */}
              {isPunchedIn && (
                <div className="tracking-details">
                  <h4 className="details-title">📊 Live Tracking Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Current Application:</span>
                      <span className="detail-value">
                        {currentApp || "Not detected"}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Tracking Status:</span>
                      <span className="detail-value">
                        {isIdle ? "⏸️ PAUSED" : "🟢 ACTIVE"}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Total Time:</span>
                      <span className="detail-value">
                        {workingHours.toFixed(2)} hours
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Required Time:</span>
                      <span className="detail-value">7 hours</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Location Status:</span>
                      <span className="detail-value">
                        {isWithinOffice ? "✅ At Office" : "❌ Away"}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Distance:</span>
                      <span className="detail-value">
                        {locationDistance.toFixed(0)} meters
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModal;
