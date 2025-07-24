/**
 * Main Dashboard Page Component
 * Combines all dashboard components and manages state
 */

import React, { useState, useEffect } from 'react';
import { Equipment, EquipmentComment } from '@/types/equipment';
import { generateEquipmentData } from '@/data/equipmentData';
import MechanicalEquipmentGrid from '@/components/MechanicalEquipmentGrid';
import ElectricalEquipmentGrid from '@/components/ElectricalEquipmentGrid';
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
        <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#3b82f6] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">
                CGK Equipment Readiness Dashboard
              </h1>
              <div className="text-sm text-blue-100">
                Real-time monitoring of equipment status across CGK sites
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleViewIssuesSummary}
                variant="outline"
                size="sm"
                className="bg-equipment-impaired hover:bg-equipment-impaired/80 text-white border-equipment-impaired"
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

        {/* Mechanical Equipment Grid */}
        <div className="space-y-4">
          <div className="text-lg font-semibold text-foreground text-center">Mechanical Equipment Status</div>
          <MechanicalEquipmentGrid 
            equipment={equipment} 
            onEquipmentClick={handleEquipmentClick}
          />
        </div>

        {/* Electrical Equipment Grid */}
        <div className="space-y-4">
          <div className="text-lg font-semibold text-foreground text-center">Electrical Equipment Status</div>
          <ElectricalEquipmentGrid 
            equipment={equipment} 
            onEquipmentClick={handleEquipmentClick}
          />
        </div>

        {/* Issues Summary */}
        <div id="issues-summary" className="scroll-mt-6 space-y-4">
          <div className="text-lg font-semibold text-foreground text-center">Issues Summary</div> 
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