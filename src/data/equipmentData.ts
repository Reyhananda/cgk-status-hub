/**
 * Sample equipment data for CGK Equipment Readiness Dashboard
 * Based on the reference images provided
 */

import { Equipment, EquipmentType, SiteCode, MechanicalEquipmentType, ElectricalEquipmentType } from '@/types/equipment';

// Mechanical Equipment configuration per site and type
export const mechanicalEquipmentConfig: Record<SiteCode, Record<MechanicalEquipmentType, string[]>> = {
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
    'OSS': ['01', '02', '03'],
    'RMU': ['1.2A', '1.2B', '2.1A', '2.1B'],
    'TRAFO': ['1.2A', '1.2B', '2.1A', '2.1B'],
    'GENERATOR': ['1.2A', '1.2B', '2.1A', '2.1B'],
    'AMCOP': ['1.2A', '1.2B'],
    'MEDS': ['1.2A', '1.2B'],
    'COP': ['1.1A', '1.2A', '2.1A'],
    'DLB': ['1.2C', '1.1C'],
    'UPS': ['1.2A', '1.2B'],
    'BACOP': ['1.1A', '1.1B', '1.2A', '1.2B']
  },
  'CGK64': {
    'OSS': ['01', '02', '03'],
    'RMU': ['1.2A', '1.2B'],
    'TRAFO': ['1.2A', '1.2B'],
    'GENERATOR': ['1.2A', '1.2B'],
    'AMCOP': ['1.2A', '1.2B'],
    'MEDS': ['1.2A', '1.2B'],
    'COP': ['1.1A', '1.2A', '2.1A'],
    'DLB': [],
    'UPS': ['1.2A', '1.2B'],
    'BACOP': ['1.1A', '1.1B', '1.2A', '1.2B']
  },
  'CGK65': {
    'OSS': ['01', '02', '03'],
    'RMU': ['1.2A', '1.2B'],
    'TRAFO': ['1.2A', '1.2B'],
    'GENERATOR': ['1.2A', '1.2B'],
    'AMCOP': ['1.2A', '1.2B'],
    'MEDS': ['1.2A', '1.2B'],
    'COP': ['1.1A', '1.2A', '2.1A'],
    'DLB': ['1.2C'],
    'UPS': ['1.2A', '1.2B'],
    'BACOP': ['1.1A', '1.1B', '1.2A', '1.2B']
  }
};

// Generate sample equipment data with realistic statuses
export const generateEquipmentData = (): Equipment[] => {
  const equipment: Equipment[] = [];
  const statuses = ['Run', 'Standby', 'Impaired', 'No Data'] as const;
  const hoaStatuses = ['Hand', 'Off', 'Auto', 'N/A'] as const;
  const runningStatuses = ['Running', 'Standby', 'Off', 'N/A'] as const;

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