/**
 * Issues Summary Component
 * Displays summary table of impaired equipment at the bottom of dashboard
 */

import React from 'react';
import { Equipment } from '@/types/equipment';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { formatEquipmentId } from '@/lib/equipmentId';

interface IssuesSummaryProps {
  equipment: Equipment[];
  onEquipmentClick: (equipment: Equipment) => void;
}

const IssuesSummary: React.FC<IssuesSummaryProps> = ({ equipment, onEquipmentClick }) => {
  // Helper to get display status (same as EquipmentCard)
  const getDisplayStatus = (equipment: Equipment): string => {
    if (equipment.hoaStatus === 'N/A' || equipment.runningStatus === 'N/A') return 'No Data';
    if (equipment.hoaStatus === 'Auto' && equipment.runningStatus === 'Running') return 'Run';
    if (equipment.hoaStatus === 'Auto' && equipment.runningStatus === 'Off') return 'Standby';
    if (equipment.hoaStatus === 'Off' && equipment.runningStatus === 'Off') return 'Impaired';
    if (equipment.hoaStatus === 'Hand' && equipment.runningStatus === 'Off') return 'Impaired';
    return equipment.status;
  };

  // Filter equipment yang impaired saja sesuai aturan legend
  const impairedEquipment = equipment.filter(eq => getDisplayStatus(eq) === 'Impaired' );

  // Pagination logic
  const [page, setPage] = React.useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(impairedEquipment.length / pageSize);
  const paginatedEquipment = impairedEquipment.slice((page - 1) * pageSize, page * pageSize);

  if (impairedEquipment.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#f5f3ef] border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold tracking-wide text-[#3d2c1e]">Issues Summary</h3>
        <Badge className="bg-[#bfae99] text-[#3d2c1e] shadow-none border-0 px-4 py-2 text-base font-bold">
          {impairedEquipment.length} Issue{impairedEquipment.length !== 1 ? 's' : ''}
        </Badge>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-red-600 via-red-400 to-red-200 border-b-2 border-border">
              <TableHead className="text-base font-bold text-white">Equipment ID</TableHead>
              <TableHead className="text-base font-bold text-white">Site</TableHead>
              <TableHead className="text-base font-bold text-white">Type</TableHead>
              <TableHead className="text-base font-bold text-white">Status</TableHead>
              <TableHead className="text-base font-bold text-white">HOA Status</TableHead>
              <TableHead className="text-base font-bold text-white">Running Status</TableHead>
              <TableHead className="text-base font-bold text-white">Last Update</TableHead>
              <TableHead className="text-base font-bold text-white">Comments</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedEquipment.map((eq) => (
              <TableRow 
                key={eq.id} 
                className="border-border hover:bg-muted/50 cursor-pointer transition-colors"
                onClick={() => onEquipmentClick(eq)}
              >
                <TableCell className="font-medium text-foreground">
                  {formatEquipmentId(eq)}
                </TableCell>
                <TableCell className="text-foreground">{eq.site}</TableCell>
                <TableCell className="text-foreground">{eq.type === 'AHU/DAHU' ? 'AHU & DAHU' : eq.type}</TableCell>
                <TableCell>
                  <Badge className={cn(
                    getDisplayStatus(eq) === 'Impaired' ? 'bg-equipment-impaired text-white text-xs' :
                    getDisplayStatus(eq) === 'Standby' ? 'bg-equipment-standby text-white text-xs' :
                    getDisplayStatus(eq) === 'Run' ? 'bg-equipment-run text-white text-xs' :
                    getDisplayStatus(eq) === 'No Data' ? 'bg-equipment-no-data text-gray-300 text-xs' :
                    undefined
                  )}>
                    {getDisplayStatus(eq)}
                  </Badge>
                </TableCell>
                <TableCell className="text-foreground">{eq.hoaStatus}</TableCell>
                <TableCell className="text-foreground">{eq.runningStatus}</TableCell>
                <TableCell className="text-foreground text-xs">
                  {new Date(eq.latestUpdate).toLocaleString()}
                </TableCell>
                <TableCell className="text-foreground max-w-xs truncate">
                  {eq.comments || 'No comments'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className="px-3 py-1 rounded border bg-muted text-foreground disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={cn(
              'px-3 py-1 rounded border',
              page === i + 1 ? 'bg-red-600 text-white' : 'bg-muted text-red-600 border-red-400'
            )}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 rounded border bg-muted text-foreground disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        Click on any row to view detailed equipment information and add comments.
      </div>
    </div>
  );
};

export default IssuesSummary;