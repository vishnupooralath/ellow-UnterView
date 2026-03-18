# Data Table Project

A high-performance, responsive React data table built with Vite and TypeScript, featuring realistic mock data, advanced filtering, and debounced search.

- **Realistic Data**: 500 "human-like" records with professional names, matching emails, and industry roles.
- **Advanced Filtering**: Search across Name, Email, Role, and Category simultaneously.
- **Status & Category Toggles**: Multi-select filters for quick data segmentation.
- **Debounced Search**: Optimized performance using a custom `useDebounce` hook (300ms delay) to prevent unnecessary re-renders during typing.
- **Type Safety**: Fully typed with TypeScript, using a custom `DataItem` interface and strict utility functions.
- **Responsive Design**: Mobile-friendly layout with stacked filters and horizontally scrollable tables.
- **Interactive UI**: Clickable headers for sorting, hover effects, and color-coded status badges.

1.  **Clone or Download**: Ensure you have the project files in your local environment.
2.  **Open Terminal**: Navigate to the `data-table` directory.
3.  **Install Dependencies**:
    ```
    npm install
    ```

- **Development Server**: Start the local development server.
  ```
  npm run dev
  ```
  The app will typically be available at `http://localhost:5173`.
- **Build for Production**: Create an optimized production build.
  ```
  npm run build
  ```
- **Preview Build**: Preview the production build locally.

  ```
  npm run preview
  ```

- **Node.js**: It is assumed that Node.js and npm are installed on the local machine.
- **Mock Data**: Data is generated client-side upon initial load for demonstration purposes. In a real-world scenario, this would likely come from an API.
- **Styling**: Vanilla CSS is used for custom styling to maintain flexibility without heavy external dependencies.
- **Pagination**: Set to 10 entries per page by default for optimal readability.

**Stracture**

- `src/data/mockData.ts`: Realistic data generation logic.
- `src/hooks/useDebounce.ts`: Custom hook for search optimization.
- `src/utilities.ts/`: typed utility functions for `filter`, `sort`, and `paginate`.
- `src/types/index.ts`: TypeScript interface definitions.
- `src/App.tsx`: Main component housing the table and filter logic.
