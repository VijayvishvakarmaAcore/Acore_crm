// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice.js"

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import attendanceAdminReducer from "./slices/attendanceAdminSlice";
import holidaysReducer from "./slices/holidaysSlice";
import adminDashboardReducer from "./slices/adminDashboardSlice";
import adminAuthReducer from "./slices/adminAuthSlice";

const store = configureStore({
  reducer: {
    attendanceAdmin: attendanceAdminReducer,
    holidays: holidaysReducer,
    adminDashboard: adminDashboardReducer,
    adminAuth: adminAuthReducer,
  },
});

export default store;
