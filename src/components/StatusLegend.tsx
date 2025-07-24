/**
 * Status Legend Component
 * Shows color coding legend for equipment status
 */

import React from 'react';
import { cn } from '@/lib/utils';

const StatusLegend: React.FC = () => {
  const statusItems = [
    { status: 'Run', color: 'bg-equipment-run', label: 'Run' },
    { status: 'Standby', color: 'bg-equipment-standby', label: 'Standby' },
    { status: 'Impaired', color: 'bg-equipment-impaired', label: 'Impaired' },
    { status: 'Mismatch', color: 'bg-equipment-mismatch', label: 'Mismatch' },
    { status: 'No Data', color: 'bg-equipment-no-data', label: 'No Data' },
  ];

  return (
    <div className="flex items-center space-x-4 text-sm">
      {statusItems.map((item) => (
        <div key={item.status} className="flex items-center space-x-2">
          <div className={cn('w-4 h-4 rounded', item.color)} />
          <span className="text-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusLegend;