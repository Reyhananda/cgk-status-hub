/**
 * Equipment Card Component
 * Displays individual equipment status with color coding and hover tooltip
 */

import React from 'react';
import { Equipment } from '@/types/equipment';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface EquipmentCardProps {
  equipment: Equipment;
  onClick: (equipment: Equipment) => void;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment, onClick }) => {
  const getStatusColor = (status: Equipment['status']): string => {
    switch (status) {
      case 'Run':
        return 'bg-equipment-run hover:bg-equipment-run/80';
      case 'Standby':
        return 'bg-equipment-standby hover:bg-equipment-standby/80';
      case 'Impaired':
        return 'bg-equipment-impaired hover:bg-equipment-impaired/80';
      case 'No Data':
        return 'bg-equipment-no-data hover:bg-equipment-no-data/80';
      default:
        return 'bg-equipment-no-data hover:bg-equipment-no-data/80';
    }
  };

  const getTextColor = (status: Equipment['status']): string => {
    switch (status) {
      case 'Run':
      case 'Standby':
      case 'Impaired':
        return 'text-white';
      case 'No Data':
        return 'text-gray-300';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => onClick(equipment)}
            className={cn(
              'w-12 h-8 rounded text-xs font-medium transition-all duration-200 border border-gray-600',
              'hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50',
              getStatusColor(equipment.status),
              getTextColor(equipment.status)
            )}
          >
            {equipment.number}
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-card border border-border p-3 max-w-xs">
          <div className="space-y-1 text-sm">
            <div className="font-semibold text-foreground">
              {equipment.site}-{equipment.type}-{equipment.number}
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-muted-foreground">Status:</span>
                <span className={cn(
                  'ml-1 font-medium',
                  equipment.status === 'Run' && 'text-green-400',
                  equipment.status === 'Standby' && 'text-yellow-400',
                  equipment.status === 'Impaired' && 'text-red-400',
                  
                  equipment.status === 'No Data' && 'text-gray-400'
                )}>
                  {equipment.status}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">HOA:</span>
                <span className="ml-1 font-medium text-foreground">{equipment.hoaStatus}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Running:</span>
                <span className="ml-1 font-medium text-foreground">{equipment.runningStatus}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Updated:</span>
                <span className="ml-1 font-medium text-foreground">
                  {new Date(equipment.latestUpdate).toLocaleDateString()}
                </span>
              </div>
            </div>
            {equipment.comments && (
              <div className="mt-2 p-2 bg-muted rounded text-xs">
                <span className="text-muted-foreground">Comments: </span>
                <span className="text-foreground">{equipment.comments}</span>
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EquipmentCard;