import React from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Weather from "./components/Weather/Weather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Search />
        <div className="results-weather-container">
          <Results />
          <Weather />
        </div>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
