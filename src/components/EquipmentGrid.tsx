/**
 * Equipment Grid Component
 * Main grid displaying all equipment organized by site and equipment type
 */

import React from 'react';
import { Equipment, EquipmentType, SiteCode } from '@/types/equipment';
import { equipmentConfig } from '@/data/equipmentData';
import EquipmentCard from './EquipmentCard';
import { cn } from '@/lib/utils';

interface EquipmentGridProps {
  equipment: Equipment[];
  onEquipmentClick: (equipment: Equipment) => void;
}

const EquipmentGrid: React.FC<EquipmentGridProps> = ({ equipment, onEquipmentClick }) => {
  const sites: SiteCode[] = ['CGK60', 'CGK61', 'CGK62', 'CGK63', 'CGK64', 'CGK65'];
  const equipmentTypes: EquipmentType[] = [
    'AHU/DAHU',
    'CRAHU',
    'CHILLER',
    'CHILLER WATER PUMP',
    'CONDENSER WATER PUMP',
    'COOLING TOWER'
  ];

  const getEquipmentForSiteAndType = (site: SiteCode, type: EquipmentType): Equipment[] => {
    return equipment.filter(eq => eq.site === site && eq.type === type);
  };

  const renderEquipmentCell = (site: SiteCode, type: EquipmentType) => {
    const siteEquipment = getEquipmentForSiteAndType(site, type);
    const configNumbers = equipmentConfig[site][type];

    if (configNumbers.length === 0) {
      return (
        <div className="flex items-center justify-center h-full min-h-[60px] text-muted-foreground text-sm">
          N/A
        </div>
      );
    }

    // Create grid layout based on number of items
    const getGridClass = (count: number) => {
      if (count <= 3) return 'grid-cols-3';
      if (count <= 6) return 'grid-cols-3';
      if (count <= 9) return 'grid-cols-3';
      if (count <= 12) return 'grid-cols-4';
      if (count <= 16) return 'grid-cols-4';
      if (count <= 20) return 'grid-cols-5';
      return 'grid-cols-7'; // For larger grids like AHU/DAHU
    };

    return (
      <div className={cn(
        'grid gap-1 p-2',
        getGridClass(configNumbers.length)
      )}>
        {configNumbers.map((number) => {
          const equipmentItem = siteEquipment.find(eq => eq.number === number);
          if (equipmentItem) {
            return (
              <EquipmentCard
                key={equipmentItem.id}
                equipment={equipmentItem}
                onClick={onEquipmentClick}
              />
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header Row */}
      <div className="grid grid-cols-7 bg-dashboard-header">
        <div className="p-3 border-r border-grid-border">
          <div className="font-medium text-sm text-foreground">Equipment Type</div>
        </div>
        {sites.map((site) => (
          <div key={site} className="p-3 border-r border-grid-border last:border-r-0">
            <div className="bg-site-header text-center py-2 px-3 rounded text-sm font-medium text-foreground">
              {site}
            </div>
          </div>
        ))}
      </div>

      {/* Equipment Rows */}
      {equipmentTypes.map((type, index) => (
        <div key={type} className={cn(
          'grid grid-cols-7 border-t border-grid-border',
          index % 2 === 0 ? 'bg-card' : 'bg-muted/30'
        )}>
          <div className="p-3 border-r border-grid-border flex items-center">
            <div className="font-medium text-sm text-foreground">{type}</div>
          </div>
          {sites.map((site) => (
            <div key={`${site}-${type}`} className="border-r border-grid-border last:border-r-0 min-h-[60px]">
              {renderEquipmentCell(site, type)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EquipmentGrid;