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

interface IssuesSummaryProps {
  equipment: Equipment[];
  onEquipmentClick: (equipment: Equipment) => void;
}

const IssuesSummary: React.FC<IssuesSummaryProps> = ({ equipment, onEquipmentClick }) => {
  // Filter for impaired equipment
  const impairedEquipment = equipment.filter(eq => eq.status === 'Impaired');

  if (impairedEquipment.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Issues Summary</h3>
        <div className="text-center py-8">
          <div className="text-equipment-run text-2xl mb-2">✓</div>
          <div className="text-foreground">No equipment issues found</div>
          <div className="text-muted-foreground text-sm">All equipment is operating normally</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Issues Summary</h3>
        <Badge className="bg-equipment-impaired text-white">
          {impairedEquipment.length} Issue{impairedEquipment.length !== 1 ? 's' : ''}
        </Badge>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-foreground">Equipment ID</TableHead>
              <TableHead className="text-foreground">Site</TableHead>
              <TableHead className="text-foreground">Type</TableHead>
              <TableHead className="text-foreground">Status</TableHead>
              <TableHead className="text-foreground">HOA Status</TableHead>
              <TableHead className="text-foreground">Running Status</TableHead>
              <TableHead className="text-foreground">Last Update</TableHead>
              <TableHead className="text-foreground">Comments</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {impairedEquipment.map((eq) => (
              <TableRow 
                key={eq.id} 
                className="border-border hover:bg-muted/50 cursor-pointer transition-colors"
                onClick={() => onEquipmentClick(eq)}
              >
                <TableCell className="font-medium text-foreground">
                  {eq.site}-{eq.type.replace(/[^A-Z]/g, '')}{eq.number}
                </TableCell>
                <TableCell className="text-foreground">{eq.site}</TableCell>
                <TableCell className="text-foreground">{eq.type}</TableCell>
                <TableCell>
                  <Badge className="bg-equipment-impaired text-white text-xs">
                    {eq.status}
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
      
      <div className="mt-4 text-sm text-muted-foreground">
        Click on any row to view detailed equipment information and add comments.
      </div>
    </div>
  );
};

export default IssuesSummary;