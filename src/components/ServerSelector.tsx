import React from 'react';
import { Server } from '../types/server';
import { ServerIcon,Loader2 } from 'lucide-react';

interface ServerSelectorProps {
  servers: Server[];
  selectedServer: Server;
  onServerChange: (server: Server) => void;
  isLoading: boolean; // Add isLoading prop
}

export function ServerSelector({ servers, selectedServer, onServerChange ,isLoading}: ServerSelectorProps) {
  return (
    <div  style={{ animation: 'slideInFromTop 0.5s ease-out',}} className="flex items-center space-x-4 mb-6">
      <div className="flex items-center">
        <ServerIcon color='black' className="w-5 h-5 mr-2" />
        <select
          value={selectedServer.id}
          onChange={(e) => {
            const server = servers.find(s => s.id === e.target.value);
            if (server) onServerChange(server);
          }}
          className="bg-white text-black border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading} // Disable dropdown while loading
        >
          {servers.map(server => (
            <option key={server.id} value={server.id}>
              {server.name}
            </option>
          ))}
        </select>
        {isLoading && <Loader2 className="w-4 h-4 ml-2 animate-spin" />} {/* Show spinner */}
      </div>
      
      <div className="flex items-center space-x-2">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${selectedServer.environment === 'production' ? 'bg-green-100 text-green-800' :
            selectedServer.environment === 'staging' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'}`}>
          {selectedServer.environment}
        </span>
        <span className="text-sm text-gray-500">
          {selectedServer.location}
        </span>
      </div>
    </div>
  );
}