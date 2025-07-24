/**
 * Sample equipment data for CGK Equipment Readiness Dashboard
 * Based on the reference images provided
 */

import { Equipment, EquipmentType, SiteCode } from '@/types/equipment';

// Equipment configuration per site and type
export const equipmentConfig: Record<SiteCode, Record<EquipmentType, string[]>> = {
  'CGK60': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    'CRAHU': ['01', '02', '03', '04', '05', '06'],
    'CHILLER': [],
    'CHILLER WATER PUMP': ['01', '02', '03', '04'],
    'CONDENSER WATER PUMP': [],
    'COOLING TOWER': []
  },
  'CGK61': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    'CRAHU': ['01', '02', '03', '04', '05', '06'],
    'CHILLER': [],
    'CHILLER WATER PUMP': ['01', '02', '03', '04'],
    'CONDENSER WATER PUMP': [],
    'COOLING TOWER': []
  },
  'CGK62': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    'CRAHU': ['01', '02', '03', '04', '05', '06'],
    'CHILLER': [],
    'CHILLER WATER PUMP': ['01', '02', '03', '04'],
    'CONDENSER WATER PUMP': [],
    'COOLING TOWER': []
  },
  'CGK63': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    'CRAHU': [],
    'CHILLER': ['CH-1.1-01', 'CH-1.1-02', 'CH-1.1-03', 'CH-1.1-04'],
    'CHILLER WATER PUMP': ['CHWP-1.1-01', 'CHWP-1.1-02', 'CHWP-1.1-03', 'CHWP-1.1-04'],
    'CONDENSER WATER PUMP': ['CWP-1.1-01', 'CWP-1.1-02', 'CWP-1.1-03', 'CWP-1.1-04'],
    'COOLING TOWER': ['CT-1.1-01', 'CT-1.1-02', 'CT-1.1-03', 'CT-1.1-04']
  },
  'CGK64': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    'CRAHU': [],
    'CHILLER': ['CH-1.1-01', 'CH-1.1-02', 'CH-1.1-03', 'CH-1.1-04'],
    'CHILLER WATER PUMP': ['CHWP-1.1-01', 'CHWP-1.1-02', 'CHWP-1.1-03', 'CHWP-1.1-04'],
    'CONDENSER WATER PUMP': ['CWP-1.1-01', 'CWP-1.1-02', 'CWP-1.1-03', 'CWP-1.1-04'],
    'COOLING TOWER': ['CT-1.1-01', 'CT-1.1-02', 'CT-1.1-03', 'CT-1.1-04']
  },
  'CGK65': {
    'AHU/DAHU': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    'CRAHU': [],
    'CHILLER': ['CH-1.1-01', 'CH-1.1-02', 'CH-1.1-03', 'CH-1.1-04'],
    'CHILLER WATER PUMP': ['CHWP-1.1-01', 'CHWP-1.1-02', 'CHWP-1.1-03', 'CHWP-1.1-04'],
    'CONDENSER WATER PUMP': ['CWP-1.1-01', 'CWP-1.1-02', 'CWP-1.1-03', 'CWP-1.1-04'],
    'COOLING TOWER': ['CT-1.1-01', 'CT-1.1-02', 'CT-1.1-03', 'CT-1.1-04']
  }
};

// Generate sample equipment data with realistic statuses
export const generateEquipmentData = (): Equipment[] => {
  const equipment: Equipment[] = [];
  const statuses = ['Run', 'Standby', 'Impaired', 'Mismatch', 'No Data'] as const;
  const hoaStatuses = ['Hand', 'Off', 'Auto', 'N/A'] as const;
  const runningStatuses = ['Running', 'Standby', 'Off', 'N/A'] as const;

  Object.entries(equipmentConfig).forEach(([site, types]) => {
    Object.entries(types).forEach(([type, numbers]) => {
      numbers.forEach((number, index) => {
        // Create more realistic status distribution
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        
        // Some equipment should be impaired for demo purposes
        if (Math.random() < 0.1) status = 'Impaired';
        else if (Math.random() < 0.7) status = 'Run';
        else if (Math.random() < 0.9) status = 'Standby';

        const equipmentId = `${site}-${type.replace(/[^A-Z]/g, '')}-${number}`;
        
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