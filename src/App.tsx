import { QueryClient, QueryClientProvider } from "react-query";
import { ExpenseTracker } from "./pages/ExpenseTracker/ExpenseTracker";
import { ModalContextProvider } from "./contexts/ModalContext/ModalContextProvider";
import "./App.css";

const reactQueryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <ModalContextProvider>
        <ExpenseTracker />
      </ModalContextProvider>
    </QueryClientProvider>
  );
}

export default App;
