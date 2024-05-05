import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    message: "",
    error: false,
    filteredJobs: [],
    filters: {
      roles: [],
      minExperience: 0,
      jobType: "",
      minBaseSalary: 0,
      companyName: "",
      locations: [],
    },
    locationsList: [],
  },
  reducers: {
    setRemoteDataState(state, action) {
      const loading = action.payload.loading;
      const message = action.payload.message;
      const error = action.payload.error;
      const data = action.payload.data;
      state.loading = loading;
      state.message = message;
      state.error = error;
      const newJobs = data;
      state.jobs = newJobs;
      state.locationsList = newJobs.map((job) => ({
        id: job.location,
        label: job.location,
      }));
    },
    setRoleFilter(state, action) {
      const roles = action.payload.roles;
      const newRoles = roles;
      console.log("newRoles", newRoles);
      state.filters = { ...state.filters, roles: newRoles };
    },
    setMinExperienceFilter(state, action) {
      const minExperience = action.payload.minExperience;
      state.filters = { ...state.filters, minExperience: minExperience };
    },
    setJobTypeFilter(state, action) {
      const jobType = action.payload.jobType;
      state.filters = { ...state.filters, jobType: jobType };
    },
    setMinBaseSalaryFilter(state, action) {
      const minBaseSalary = action.payload.minBaseSalary;
      state.filters = { ...state.filters, minBaseSalary: minBaseSalary };
    },
    setCompanyNameFilter(state, action) {
      console.log("action", action.payload);
      const companyName = action.payload.companyName;
      state.filters = { ...state.filters, companyName: companyName };
    },
    setLocationsFilter(state, action) {
      const locations = action.payload.locations;
      state.filters = { ...state.filters, locations: locations };
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setFilteredJobs(state, action) {
      const filters = action.payload.filters;
      const jobs = state.jobs;
      const filteredJobs = jobs.filter((job) => {
        let isRole = true;
        let isMinExperience = true;
        let isJobType = true;
        let isMinBaseSalary = true;
        let isCompanyName = true;
        let isLocation = true;

        if (filters.roles.length > 0) {
          isRole = filters.roles.includes(job.jobRole);
        }

        if (filters.minExperience) {
          isMinExperience = job.minExp >= filters.minExperience;
        }

        if (filters.jobType) {
          if (filters.jobType === "remote") {
            isJobType = job.location === "remote";
          } else {
            isJobType = job.location !== "remote";
          }
        }

        if (filters.minBaseSalary) {
          isMinBaseSalary = job.minJdSalary >= filters.minBaseSalary;
        }

        if (filters.companyName) {
          isCompanyName = job.companyName
            .toLowerCase()
            .startsWith(filters.companyName.toLowerCase());
        }

        if (filters.locations.length > 0) {
          isLocation = filters.locations.includes(job.location);
        }

        return (
          isRole &&
          isMinExperience &&
          isJobType &&
          isMinBaseSalary &&
          isCompanyName &&
          isLocation
        );
      });
      state.filteredJobs = filteredJobs;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
