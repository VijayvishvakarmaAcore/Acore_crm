import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axiosInstance";

// 🟢 GET SUMMARY
export const fetchAttendanceSummary = createAsyncThunk(
  "attendance/summary",
  async ({ year, month }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/admin/attendance/status-chart?date=${year}-${month}-01`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// 🔵 GET MONTHLY DATA USING WEEKLY API
export const fetchMonthlyAttendance = createAsyncThunk(
  "attendance/month",
  async ({ year, month }, { rejectWithValue }) => {
    try {
      let result = {};

      const first = new Date(year, month - 1, 1);
      const last = new Date(year, month, 0);
      let start = new Date(first);

      while (start <= last) {
        let end = new Date(start);
        end.setDate(end.getDate() + 6);
        if (end > last) end = last;

        const s = start.toISOString().split("T")[0];
        const e = end.toISOString().split("T")[0];

        const { data } = await axios.get(
          `/admin/attendance/weekly-report?startDate=${s}&endDate=${e}`
        );

        data?.records?.forEach((d) => {
          const date = d.date.split("T")[0];

          result[date] =
            d.status?.toLowerCase() ||
            (d.isAbsent
              ? "absent"
              : d.isLeave
              ? "leave"
              : "present");
        });

        start.setDate(start.getDate() + 7);
      }

      return result;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const attendanceSlice = createSlice({
  name: "attendance",
  initialState: {
    summary: {
      present: 0,
      absent: 0,
      leave: 0,
      holidays: 0,
      halfDay: 0,
      late: 0,
    },
    calendarDays: {},
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      // SUMMARY
      .addCase(fetchAttendanceSummary.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAttendanceSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = {
          present: action.payload?.present || 0,
          absent: action.payload?.absent || 0,
          leave: action.payload?.leave || 0,
          holidays: action.payload?.holidays || 0,
          halfDay: action.payload?.halfDay || 0,
          late: action.payload?.late || 0,
        };
      })
      .addCase(fetchAttendanceSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // MONTH
      .addCase(fetchMonthlyAttendance.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMonthlyAttendance.fulfilled, (state, action) => {
        state.loading = false;
        state.calendarDays = action.payload;
      })
      .addCase(fetchMonthlyAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default attendanceSlice.reducer;
