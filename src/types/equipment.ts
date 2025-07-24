/**
 * Equipment types and status definitions for CGK Equipment Readiness Dashboard
 */

export type EquipmentStatus = 'Run' | 'Standby' | 'Impaired' | 'No Data';

export type HOAStatus = 'Hand' | 'Off' | 'Auto' | 'N/A';

export type RunningStatus = 'Running' | 'Standby' | 'Off' | 'N/A';

export interface Equipment {
  id: string;
  number: string;
  site: string;
  type: string;
  status: EquipmentStatus;
  hoaStatus: HOAStatus;
  runningStatus: RunningStatus;
  latestChange?: string;
  latestUpdate: string;
  comments?: string;
}

export interface EquipmentComment {
  id: string;
  equipmentId: string;
  ticketMcmLink: string;
  comment: string;
  timestamp: string;
}

export type MechanicalEquipmentType = 
  | 'AHU/DAHU'
  | 'CRAHU'
  | 'CHILLER'
  | 'CHILLER WATER PUMP'
  | 'CONDENSER WATER PUMP'
  | 'COOLING TOWER';

export type ElectricalEquipmentType = 
  | 'OSS'
  | 'RMU'
  | 'TRAFO'
  | 'GENERATOR'
  | 'AMCOP'
  | 'MEDS'
  | 'COP'
  | 'DLB'
  | 'UPS'
  | 'BACOP';

export type EquipmentType = MechanicalEquipmentType | ElectricalEquipmentType;

export type SiteCode = 'CGK60' | 'CGK61' | 'CGK62' | 'CGK63' | 'CGK64' | 'CGK65';