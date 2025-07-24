/**
 * Sample equipment data for CGK Equipment Readiness Dashboard
 * Based on the reference images provided
 */

import { Equipment, EquipmentType, SiteCode, MechanicalEquipmentType, ElectricalEquipmentType, HOAStatus, RunningStatus } from '@/types/equipment';
import { formatEquipmentId } from '@/lib/equipmentId';

// Mechanical Equipment configuration per site and type
export const mechanicalEquipmentConfig: Record<SiteCode, Record<MechanicalEquipmentType, string[]>> = {
  'CGK60': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    'CRAHU': ['01', '02', '03', '04', '05', '06'],
    'CHILLER': ['01', '02', '03', '04'],
    'CHILLER WATER PUMP': ['01', '02', '03', '04'],
    'CONDENSER WATER PUMP': [],
    'COOLING TOWER': []
  },
  'CGK61': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    'CRAHU': ['01', '02', '03', '04', '05', '06'],
    'CHILLER': ['01', '02', '03', '04'],
    'CHILLER WATER PUMP': ['01', '02', '03', '04'],
    'CONDENSER WATER PUMP': [],
    'COOLING TOWER': []
  },
  'CGK62': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    'CRAHU': ['01', '02', '03', '04', '05', '06'],
    'CHILLER': ['01', '02', '03', '04'],
    'CHILLER WATER PUMP': ['01', '02', '03', '04'],
    'CONDENSER WATER PUMP': [],
    'COOLING TOWER': []
  },
  'CGK63': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    'CRAHU': [],
    'CHILLER': ['01', '02', '03', '04'],
    'CHILLER WATER PUMP': ['01', '02', '03', '04'],
    'CONDENSER WATER PUMP': ['01', '02', '03', '04'],
    'COOLING TOWER': ['01', '02', '03', '04'],
  },
  'CGK64': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    'CRAHU': [],
    'CHILLER': ['01', '02', '03', '04'],
    'CHILLER WATER PUMP': ['01', '02', '03', '04'],
    'CONDENSER WATER PUMP': ['01', '02', '03', '04'],
    'COOLING TOWER': ['01', '02', '03', '04'],
  },
  'CGK65': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    'CRAHU': [],
    'CHILLER': ['01', '02', '03', '04'],
    'CHILLER WATER PUMP': ['01', '02', '03', '04'],
    'CONDENSER WATER PUMP': ['01', '02', '03', '04'],
    'COOLING TOWER': ['01', '02', '03', '04'],
  }
};

// Electrical Equipment configuration per site and type
export const electricalEquipmentConfig: Record<SiteCode, Record<ElectricalEquipmentType, string[]>> = {
  'CGK60': {
    'OSS': ['A', 'B'],
    'RMU': ['A', 'B', 'C'],
    'TRAFO': ['A', 'B', 'C'],
    'GENERATOR': ['A', 'B', 'C'],
    'AMCOP': ['A', 'B', 'C'],
    'MEDS': ['A', 'B', 'C'],
    'COP': ['1.1A', '1.1B'],
    'DLB': [],
    'UPS': ['1A1', '1B1', '1A2', '1B2'],
    'BACOP': ['A', 'B', 'C']
  },
  'CGK61': {
    'OSS': ['A', 'B'],
    'RMU': ['A', 'B', 'C'],
    'TRAFO': ['A', 'B', 'C'],
    'GENERATOR': ['A', 'B', 'C'],
    'AMCOP': ['A', 'B', 'C'],
    'MEDS': ['A', 'B', 'C'],
    'COP': ['1.1A', '1.1B'],
    'DLB': [],
    'UPS': ['1A1', '1B1', '1A2', '1B2'],
    'BACOP': ['A', 'B', 'C']
  },
  'CGK62': {
    'OSS': ['A', 'B'],
    'RMU': ['A', 'B', 'C'],
    'TRAFO': ['A', 'B', 'C'],
    'GENERATOR': ['A', 'B', 'C'],
    'AMCOP': ['A', 'B', 'C'],
    'MEDS': ['A', 'B', 'C'],
    'COP': ['1.1A', '1.1B'],
    'DLB': [],
    'UPS': ['1A1', '1B1', '1A2', '1B2'],
    'BACOP': ['A', 'B', 'C']
  },
  'CGK63': {
    'OSS': [],
    'RMU': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'TRAFO': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'GENERATOR': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'AMCOP': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'MEDS': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'COP': ['1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'DLB': ['1.2C', '1.1C'],
    'UPS': ['HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'BACOP': ['1.1A', '1.1B', '1.2A', '1.2B']
  },
  'CGK64': {
    'OSS': [],
    'RMU': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'TRAFO': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'GENERATOR': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'AMCOP': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'MEDS': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'COP': ['1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'DLB': ['1.2C', '1.1C'],
    'UPS': ['HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'BACOP': ['1.1A', '1.1B', '1.2A', '1.2B']
  },
  'CGK65': {
    'OSS': [],
    'RMU': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'TRAFO': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'GENERATOR': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'AMCOP': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'MEDS': ['1.2C', '1.1C', 'HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'COP': ['1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'DLB': ['1.2C', '1.1C'],
    'UPS': ['HS', '1.1A', '1.1B', '1.2A', '1.2B', '2.1A', '2.1B', '1.1MA'],
    'BACOP': ['1.1A', '1.1B', '1.2A', '1.2B']
  }
};

// Generate sample equipment data with realistic statuses
export const generateEquipmentData = (): Equipment[] => {
  const equipment: Equipment[] = [];
  const statuses = ['Run', 'Standby', 'Impaired', 'No Data'] as const;
  const hoaStatuses = ['Hand', 'Off', 'Auto', 'N/A'] as const;
  const runningStatuses = ['Running', 'Off', 'N/A'] as const;

  // When randomizing HOA and Running Status, prevent HOA Off & Running Running
  const validHoaRunningCombinations: { hoa: HOAStatus, running: RunningStatus }[] = [
    { hoa: 'Auto', running: 'Running' },
    { hoa: 'Auto', running: 'Off' },
    { hoa: 'Hand', running: 'Off' },
    { hoa: 'Hand', running: 'Running' },
    { hoa: 'Off', running: 'Off' },
    { hoa: 'N/A', running: 'N/A' },
  ];

  // Generate Mechanical Equipment
  Object.entries(mechanicalEquipmentConfig).forEach(([site, types]) => {
    Object.entries(types).forEach(([type, numbers]) => {
      numbers.forEach((number, index) => {
        // Create more realistic status distribution
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        
        // Some equipment should be impaired for demo purposes
        if (Math.random() < 0.1) status = 'Impaired';
        else if (Math.random() < 0.7) status = 'Run';
        else if (Math.random() < 0.9) status = 'Standby';

        const equipmentId = formatEquipmentId({ site: site as SiteCode, type, number });
        
        // Replace random HOA/Running assignment with valid combinations
        const combo = validHoaRunningCombinations[Math.floor(Math.random() * validHoaRunningCombinations.length)];
        
        equipment.push({
          id: equipmentId,
          number,
          site: site as SiteCode,
          type: type as EquipmentType,
          status,
          hoaStatus: combo.hoa,
          runningStatus: combo.running,
          latestChange: Math.random() > 0.5 ? 'N/A' : '2024-01-15 10:30:00',
          latestUpdate: '7/25/2025, 1:54:48 AM',
          comments: status === 'Impaired' ? 'Equipment maintenance required' : undefined
        });
      });
    });
  });

  // Generate Electrical Equipment
  Object.entries(electricalEquipmentConfig).forEach(([site, types]) => {
    Object.entries(types).forEach(([type, numbers]) => {
      numbers.forEach((number, index) => {
        // Create more realistic status distribution
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        
        // Some equipment should be impaired for demo purposes
        if (Math.random() < 0.1) status = 'Impaired';
        else if (Math.random() < 0.7) status = 'Run';
        else if (Math.random() < 0.9) status = 'Standby';

        const equipmentId = formatEquipmentId({ site: site as SiteCode, type, number });
        
        equipment.push({
          id: equipmentId,
          number,
          site: site as SiteCode,
          type: type as EquipmentType,
          status,
          hoaStatus: hoaStatuses[Math.floor(Math.random() * hoaStatuses.length)],
          runningStatus: runningStatuses[Math.floor(Math.random() * runningStatuses.length)],
          latestChange: Math.random() > 0.5 ? 'N/A' : '2024-01-15 10:30:00',
          latestUpdate: '7/25/2025, 1:54:48 AM',
          comments: status === 'Impaired' ? 'Equipment maintenance required' : undefined
        });
      });
    });
  });

  return equipment;
};