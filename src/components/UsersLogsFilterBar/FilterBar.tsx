import React from 'react';
import { Search } from 'lucide-react';
import './FilterBar.css'; // Import the external CSS file

interface FilterBarProps {
  onFilterChange: (filters: { [key: string]: string }) => void;
  filters: { [key: string]: string };
}

export const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange, filters }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6 p-4 bg-white rounded-lg shadow">
      <div className="relative flex-grow md:flex-grow-0">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search by name..."
          value={filters.search || ''}
          onChange={handleChange}
          className="text-gray-800 pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <select
        name="role"
        onChange={handleChange}
        value={filters.role}
        className="text-gray-800 px-4 py-2 border rounded-md"
      >
        <option value="">All Roles</option>
        <option value="Database Manager">Database Manager</option>
        <option value="Application Support Analyst">Application Support Analyst</option>
        <option value="Q.A Engineer">Q.A Engineer</option>
        <option value="Business Analyst">Business Analyst</option>
        <option value="IT Support">IT Support</option>
      </select>

      <select
        name="status"
        onChange={handleChange}
        value={filters.status}
        className="text-gray-800 px-4 py-2 border rounded-md"
      >
        <option value="">All Statuses</option>
        <option value="Success">Success</option>
        <option value="Failed">Failed</option>
        <option value="Pending">Pending</option>
      </select>

      <select
        name="action"
        onChange={handleChange}
        value={filters.action}
        className="text-gray-800 px-4 py-2 border rounded-md"
      >
        <option value="">All Actions</option>
        <option value="Login">Login</option>
        <option value="Logout">Logout</option>
        <option value="System Backup">System Backup</option>
        <option value="Error Log Review">Error Log Review</option>
        <option value="Configuration Update">Configuration Update</option>
      </select>
    </div>
  );
};