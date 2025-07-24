/**
 * Equipment Details Modal Component
 * Shows detailed information about selected equipment and allows adding comments
 */

import React, { useState } from 'react';
import { Equipment, EquipmentComment } from '@/types/equipment';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatEquipmentId } from '@/lib/equipmentId';

interface EquipmentDetailsModalProps {
  equipment: Equipment | null;
  isOpen: boolean;
  onClose: () => void;
  onAddComment: (equipmentId: string, ticketLink: string, comment: string) => void;
}

const EquipmentDetailsModal: React.FC<EquipmentDetailsModalProps> = ({
  equipment,
  isOpen,
  onClose,
  onAddComment,
}) => {
  const [ticketLink, setTicketLink] = useState('');
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (equipment && ticketLink.trim() && comment.trim()) {
      onAddComment(equipment.id, ticketLink.trim(), comment.trim());
      setTicketLink('');
      setComment('');
    }
  };

  // Helper to get display status (same as EquipmentCard)
  const getDisplayStatus = (equipment: Equipment): string => {
    if (equipment.hoaStatus === 'N/A' || equipment.runningStatus === 'N/A') return 'No Data';
    if (equipment.hoaStatus === 'Auto' && equipment.runningStatus === 'Running') return 'Run';
    if (equipment.hoaStatus === 'Auto' && equipment.runningStatus === 'Off') return 'Standby';
    if (equipment.hoaStatus === 'Off' && equipment.runningStatus === 'Off') return 'Impaired';
    if (equipment.hoaStatus === 'Hand' && equipment.runningStatus === 'Off') return 'Impaired';
    return equipment.status;
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      'Run': 'bg-equipment-run text-white',
      'Standby': 'bg-equipment-standby text-white',
      'Impaired': 'bg-equipment-impaired text-white',
      'No Data': 'bg-equipment-no-data text-gray-300',
    };
    return (
      <Badge className={cn('text-xs font-medium', variants[status])}>
        {status}
      </Badge>
    );
  };

  if (!equipment) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-foreground">
            Equipment Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Equipment Information */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <Label className="text-xs text-muted-foreground">Equipment ID:</Label>
              <div className="font-medium text-foreground">
                {formatEquipmentId(equipment)}
              </div>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Status:</Label>
              <div className="mt-1">
                {getStatusBadge(getDisplayStatus(equipment))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <Label className="text-xs text-muted-foreground">HOA Status:</Label>
              <div className="font-medium text-foreground">{equipment.hoaStatus}</div>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Running Status:</Label>
              <div className="font-medium text-foreground">{equipment.runningStatus}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <Label className="text-xs text-muted-foreground">Latest Change:</Label>
              <div className="font-medium text-foreground">{equipment.latestChange || 'N/A'}</div>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Latest Update:</Label>
              <div className="font-medium text-foreground">{equipment.latestUpdate}</div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="border-t border-border pt-4">
            <Label className="text-sm font-medium text-foreground mb-3 block">
              Comments
            </Label>
            
            <div className="space-y-3">
              <div>
                <Input
                  placeholder="Ticket/MCM link (required)"
                  value={ticketLink}
                  onChange={(e) => setTicketLink(e.target.value)}
                  className="text-sm bg-muted border-border"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Add a comment... (required)"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="text-sm min-h-[80px] bg-muted border-border resize-none"
                />
              </div>
              
              <Button
                onClick={handleAddComment}
                disabled={!ticketLink.trim() || !comment.trim()}
                className="w-full bg-equipment-impaired hover:bg-equipment-impaired/80 text-white font-medium"
              >
                Add
              </Button>
            </div>

            {/* Existing Comments */}
            {equipment.comments && (
              <div className="mt-4 p-3 bg-muted rounded-md">
                <div className="text-xs text-muted-foreground mb-1">Previous Comments:</div>
                <div className="text-sm text-foreground">{equipment.comments}</div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EquipmentDetailsModal;
