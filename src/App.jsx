import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SettingsCategory from "./components/pages/developer/settings/category/SettingsCategory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <div className="h-dvh w-dvh flex items-center justify-center  ">
                <h3>Page Not Found.</h3>
              </div>
            }
          />
          <Route path="/settings/category" element={<SettingsCategory />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
