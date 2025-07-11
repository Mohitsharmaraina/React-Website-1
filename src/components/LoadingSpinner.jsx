// const LoadingSpinner = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded-lg shadow-lg">
//       {/* Spinner */}
//       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 dark:border-blue-400 mb-4"></div>

//       {/* Loading Text */}
//       <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//         Loading... Please wait.
//       </p>
//     </div>
//   );
// };

// export default LoadingSpinner;

// MUI spinner

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import React from "react";

export default function LoadingSpinner() {
  return (
    <div>
      {/* <div className="flex justify-center">
        Loading...
      </div> */}
      <Box class="flex flex-col justify-center items-center min-h-screen">
        <h1>Loading...</h1>
        <CircularProgress />
      </Box>
    </div>
  );
}
