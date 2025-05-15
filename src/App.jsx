import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SettingsCategory from "./components/pages/developer/settings/category/SettingsCategory";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StoreProvider } from "../store/StoreContext";
import SettingsDesignation from "./components/pages/developer/settings/designation/SettingsDesignation";
import SettingsNotification from "./components/pages/developer/settings/notification/SettingsNotification";
import DonorList from "./components/pages/developer/donor-list/DonorList";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route
              path="*"
              element={
                <div className="h-dvh w-dvh flex items-center justify-center">
                  <h3>Page Not Found.</h3>
                </div>
              }
            />

            <Route path="/" element={<DonorList />}></Route>
            <Route path="/donor" element={<DonorList />}></Route>
            <Route path="/settings/category" element={<SettingsCategory />} />
            <Route
              path="/settings/designation"
              element={<SettingsDesignation />}
            />
            <Route
              path="/settings/notification"
              element={<SettingsNotification />}
            />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
}
