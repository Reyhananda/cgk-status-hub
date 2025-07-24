// Utility for formatting Equipment ID consistently across the app
import { Equipment } from '@/types/equipment';

export function formatEquipmentId(equipment: Pick<Equipment, 'site' | 'type' | 'number'>): string {
  // Special rule for AHU/DAHU
  if (equipment.type === 'AHU/DAHU') {
    if (['CGK60', 'CGK61', 'CGK62'].includes(equipment.site)) {
      return `${equipment.site}-AHU-${equipment.number}`;
    } else if (['CGK63', 'CGK64', 'CGK65'].includes(equipment.site)) {
      return `${equipment.site}-DAHU-${equipment.number}`;
    }
  }
  // Special rule for Chiller in CGK60, CGK61, CGK62
  if (['CGK60', 'CGK61', 'CGK62'].includes(equipment.site) && equipment.type === 'CHILLER') {
    // Map box number to ACC-1A or ACC-1B alternatingly (odd: 1A, even: 1B)
    const boxNum = parseInt(equipment.number, 10);
    const acc = boxNum % 2 === 1 ? 'ACC-1A' : 'ACC-1B';
    return `${equipment.site}-${acc}-${equipment.number}`;
  }

  // Special rule for Chiller Water Pump in CGK60, CGK61, CGK62
  if (['CGK60', 'CGK61', 'CGK62'].includes(equipment.site) && equipment.type === 'CHILLER WATER PUMP') {
    return `${equipment.site}-PHCWP-${equipment.number}`
  }

  // Special rule for CGK63, CGK64, CGK65 for Chiller, CHWP, CWP, CT
  if (['CGK63', 'CGK64', 'CGK65'].includes(equipment.site)) {
    if (equipment.type === 'CHILLER') {
      return `${equipment.site}-CH-1.1-${equipment.number}`;
    }
    if (equipment.type === 'CHILLER WATER PUMP') {
      return `${equipment.site}-CHWP-1.1-${equipment.number}`;
    }
    if (equipment.type === 'CONDENSER WATER PUMP') {
      return `${equipment.site}-CWP-1.1-${equipment.number}`;
    }
    if (equipment.type === 'COOLING TOWER') {
      return `${equipment.site}-CT-1.1-${equipment.number}`;
    }
  }



  
  // Default: site-type-number (type: only uppercase letters)
  return `${equipment.site}-${equipment.type.replace(/[^A-Z]/g, '')}-${equipment.number}`;
}
