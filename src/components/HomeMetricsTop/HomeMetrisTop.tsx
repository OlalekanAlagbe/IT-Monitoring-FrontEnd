import {TrendingUp,TrendingDown,Activity,AlertCircle, Cpu, HardDrive, Memory } from 'lucide-react'

const HomeMetrisTop = ({ title, stats, icon }) => {
    return (
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg lg:text-base font-semibold text-gray-800">{title}</h3>
            <div className="text-emerald-600">{icon}</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Average</p>
              <p className="text-xl font-semibold text-gray-800">{stats.average??stats.avgResponseTime??stats.avgUptime}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Maximum</p>
              <div className="flex items-center">
                <p className="text-xl font-semibold text-gray-800 mr-2">{stats.maximum??stats.maxResponseTime??stats.maxUptime}%</p>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Minimum</p>
              <div className="flex items-center">
                <p className="text-xl font-semibold text-gray-800 mr-2">{stats.minimum??stats.minResponseTime??stats.minUptime}%</p>
                <TrendingDown className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      );
}

export default HomeMetrisTop