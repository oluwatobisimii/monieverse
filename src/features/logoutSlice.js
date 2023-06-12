import { createSlice } from '@reduxjs/toolkit';



// Accessing the router history object

const logoutSlice = createSlice({
    name: 'logout',
    initialState: {},
    reducers: {
        logoutUser: () => {
            // const history = useHistory();
            // Clear user session and navigate to the login page
            localStorage.clear();
            // eslint-disable-next-line
            // window.location.reload();
            // history.push('/login'); // 

        },
    },
});

export const { logoutUser } = logoutSlice.actions;
export default logoutSlice.reducer;