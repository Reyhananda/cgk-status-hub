/**
 * Main Dashboard Page Component
 * Combines all dashboard components and manages state
 */

import React, { useState, useEffect } from 'react';
import { Equipment, EquipmentComment } from '@/types/equipment';
import { generateEquipmentData } from '@/data/equipmentData';
import EquipmentGrid from '@/components/EquipmentGrid';
import EquipmentDetailsModal from '@/components/EquipmentDetailsModal';
import StatusLegend from '@/components/StatusLegend';
import IssuesSummary from '@/components/IssuesSummary';
import { Button } from '@/components/ui/button';
import { RefreshCw, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Dashboard: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState<EquipmentComment[]>([]);
  const { toast } = useToast();

  // Initialize equipment data
  useEffect(() => {
    const data = generateEquipmentData();
    setEquipment(data);
  }, []);

  const handleEquipmentClick = (equipment: Equipment) => {
    setSelectedEquipment(equipment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEquipment(null);
  };

  const handleAddComment = (equipmentId: string, ticketLink: string, comment: string) => {
    const newComment: EquipmentComment = {
      id: `comment-${Date.now()}`,
      equipmentId,
      ticketMcmLink: ticketLink,
      comment,
      timestamp: new Date().toISOString(),
    };

    setComments(prev => [...prev, newComment]);

    // Update equipment with the new comment
    setEquipment(prev => prev.map(eq => 
      eq.id === equipmentId 
        ? { ...eq, comments: comment }
        : eq
    ));

    toast({
      title: "Comment Added",
      description: "Equipment comment has been successfully added.",
    });

    handleCloseModal();
  };

  const handleRefresh = () => {
    const data = generateEquipmentData();
    setEquipment(data);
    toast({
      title: "Data Refreshed",
      description: "Equipment data has been updated.",
    });
  };

  const handleViewIssuesSummary = () => {
    const element = document.getElementById('issues-summary');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-dashboard-header rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                CGK Equipment Readiness Dashboard
              </h1>
              <div className="text-sm text-muted-foreground">
                Real-time monitoring of equipment status across CGK sites
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleViewIssuesSummary}
                variant="outline"
                size="sm"
                className="bg-equipment-mismatch hover:bg-equipment-mismatch/80 text-white border-equipment-mismatch"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Issues Summary
              </Button>
              <Button
                onClick={handleRefresh}
                variant="outline"
                size="sm"
                className="bg-primary hover:bg-primary/80 text-primary-foreground border-primary"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Status Legend */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="font-medium text-foreground">Status Legend:</div>
            <StatusLegend />
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="space-y-4">
          <div className="text-lg font-semibold text-foreground">Equipment Status Grid</div>
          <EquipmentGrid 
            equipment={equipment} 
            onEquipmentClick={handleEquipmentClick}
          />
        </div>

        {/* Issues Summary */}
        <div id="issues-summary" className="scroll-mt-6">
          <IssuesSummary 
            equipment={equipment}
            onEquipmentClick={handleEquipmentClick}
          />
        </div>

        {/* Equipment Details Modal */}
        <EquipmentDetailsModal
          equipment={selectedEquipment}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddComment={handleAddComment}
        />
      </div>
    </div>
  );
};

export default Dashboard;