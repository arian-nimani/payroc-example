import { PaymentContextProvider } from "./context/PaymentProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <QueryClientProvider client={queryClient}>
        <PaymentContextProvider patientId={1}>
          <Home />
        </PaymentContextProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
