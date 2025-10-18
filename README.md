# Product Catalog App

A modern, responsive React product catalog built with **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

* **Product Grid:** Display products in a responsive grid layout
* **Category Filtering:** Filter products by category using dropdown
* **Search Functionality:** Real-time search across product titles
* **Price Sorting:** Sort products by price (low to high / high to low)
* **Favorites:** Mark products as favorites with heart icons
* **Pagination:** Navigate through products with pagination controls
* **Responsive Design:** Works on desktop, tablet, and mobile devices

---

## 🛠️ Setup Instructions

### Installation

1.  Install dependencies

    ```bash
    npm install
    ```
2.  Start the development server

    ```bash
    npm run dev
    ```
3.  Open your browser
    Navigate to the local URL shown in the terminal (usually `http://localhost:5173`)

### Available Scripts

* `npm run dev` - Start development server with Vite
* `npm run build` - Build for production
* `npm run preview` - Preview production build locally
* `npm run lint` - Run ESLint for code quality

---

## 🎯 Design Decisions

### Technology Stack

* **Vite:** Fast build tool and development server
* **React 19:** Latest React with modern features
* **TypeScript:** Type safety and better developer experience
* **Tailwind CSS v4:** Latest Tailwind with new features and performance improvements

### Performance Optimizations

* **Memoization:** Expensive operations like filtering and sorting are memoized with `useMemo` to prevent unnecessary recalculations
* **Pagination:** Limits displayed items to 8 per page for better performance and faster rendering
* **Optimized Re-renders:** Strategic use of React hooks to minimize unnecessary component updates
* **Fast Development:** Vite provides near-instant server start and HMR

### Component Architecture

* **Modular Components:** Separate components for each feature (`ProductCard`, `FilterControls`, `SearchBar`, `Pagination`)
* **Custom Hook:** `useProducts` hook for data fetching and state management
* **Type Safety:** TypeScript interfaces for all props and data structures

### State Management

* **React Hooks:** `useState` for local state management
* **useMemo:** Optimized filtering and sorting computations
* **useCallback:** Memoized event handlers for performance
* **Derived State:** Categories extracted from products data

### User Experience

* **Responsive Grid:** CSS Grid with media queries
* **Loading States:** Clear loading and error messages
* **Empty States:** Helpful messages when no products match filters

---

## 🔧 Technical Implementation

### Data Flow

1.  Fetch products from FakeStore API on component mount
2.  Transform products with favorite status
3.  Apply search, category filter, and sorting
4.  Paginate results for display (8 items per page)
5.  Update UI based on user interactions

### Filtering System

* **Search:** Case-insensitive title search
* **Category:** Dropdown filter with "All Categories" option
* **Sorting:** Price ascending/descending options
* **Combined Filters:** All filters work together seamlessly

### Performance Features

* **Efficient Filtering:** Memoized filter operations prevent expensive recalculations on every render
* **Optimized Rendering:** Pagination reduces DOM nodes and improves rendering performance
* **Memory Management:** Limited items per page prevent memory bloat with large datasets
* **Fast Interactions:** Memoized callbacks ensure smooth user interactions

---

## 🚀 Future Improvements

* **Loading Skeletons:** Better loading states with skeleton screens
* **Favorite Persistence:** Save favorites to `localStorage`
* **More Filters:** Price range, rating filters
* **Infinite Scroll:** Alternative to pagination
* **Product Details:** Detailed product view modal
* **Error Boundaries:** Better error handling
* **Enhanced Testing:** More comprehensive test coverage
* **Accessibility:** Enhanced screen reader support
* **Dockerization:** Containerize the application for easy deployment
* **CI/CD Pipeline:** Implement GitLab CI/CD for continuous deployment
* **Environment Configurations:** Different settings for development, staging, and production

---

*Built with Vite, React 19, TypeScript, and Tailwind CSS v4*