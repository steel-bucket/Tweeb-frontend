import axios from "axios";

let refresh = false;

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401 && !refresh) {
            refresh = true;

            try {
                const response = await axios.post(
                    // "http://localhost:8000/token/refresh/",
                    "https://tweeb-api.vercel.app/api/token/refresh/",
                    {
                        refresh: localStorage.getItem("refresh_token"),
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true, // Ensure credentials are sent for CORS
                    }
                );

                if (response.status === 200) {
                    axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;
                    localStorage.setItem("access_token", response.data.access);
                    localStorage.setItem("refresh_token", response.data.refresh);
                    return axios(error.config);
                }
            } catch (error) {
                console.error("Error refreshing token:", error);
            } finally {
                refresh = false;
            }
        }

        return Promise.reject(error);
    }
);
