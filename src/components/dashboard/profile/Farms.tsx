'use client';
import React, { useState, useEffect } from 'react';
import { Save, Trash2, Edit, Plus, MapPin, Calendar, Sprout, Activity, Search, Grid, List, ChevronDown } from 'lucide-react';
import { createFarm, getFarms, updateFarm, deleteFarm } from '@/actions/user';
import { toast } from 'sonner';

// Interfaces
interface Farm {
  name: string;
  size?: string;
  location?: string;
  established?: number;
  crops?: string;
  status?: 'Active' | 'Planning' | 'Inactive';
}

interface FarmResponse {
  success: boolean;
  farm?: Farm;
  farms?: Farm[];
  error?: string;
}

export default function Farms({ userId }: { userId?: string }) {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [showFarmForm, setShowFarmForm] = useState(false);
  const [newFarm, setNewFarm] = useState<Farm>({ name: '', size: '', location: '', established: undefined, crops: '', status: 'Active' });
  const [editingFarmIndex, setEditingFarmIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Active' | 'Planning' | 'Inactive'>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [farmToDelete, setFarmToDelete] = useState<number | null>(null);

  // Fetch farms on mount
  useEffect(() => {
    const fetchFarms = async () => {
      if (userId) {
        const response = await getFarms(userId);
        if (response.success && response.farms) {
          setFarms(response.farms);
        } else {
          toast.error(response.error || 'Failed to fetch farms');
        }
      }
    };
    fetchFarms();
  }, [userId]);

  // Filter farms based on search and status
  const filteredFarms = farms.filter(farm => {
    const matchesSearch = farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farm.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farm.crops?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || farm.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      toast.error('User not authenticated');
      return;
    }

    setLoading(true);
    try {
      const farmData = {
        name: newFarm.name,
        size: newFarm.size,
        location: newFarm.location,
        established: newFarm.established ? parseInt(newFarm.established.toString()) : undefined,
        crops: newFarm.crops,
        status: newFarm.status as 'Active' | 'Planning' | 'Inactive',
      };

      let response: FarmResponse;
      if (editingFarmIndex !== null) {
        response = await updateFarm(userId, editingFarmIndex, farmData);
      } else {
        response = await createFarm(userId, farmData);
      }

      if (response.success) {
        toast.success(editingFarmIndex !== null ? 'Farm updated' : 'Farm created');
        setFarms(editingFarmIndex !== null
          ? farms.map((farm, i) => (i === editingFarmIndex ? response.farm! : farm))
          : [...farms, response.farm!]);
        setShowFarmForm(false);
        setNewFarm({ name: '', size: '', location: '', established: undefined, crops: '', status: 'Active' });
        setEditingFarmIndex(null);
      } else {
        throw new Error(response.error || 'Failed to save farm');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to save farm');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (index: number) => {
    if (!userId) {
      toast.error('User not authenticated');
      return;
    }
    setFarmToDelete(index);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (farmToDelete === null || !userId) return;
    setLoading(true);
    try {
      const response = await deleteFarm(userId, farmToDelete);
      if (response.success) {
        toast.success('Farm deleted');
        setFarms(farms.filter((_, i) => i !== farmToDelete));
      } else {
        throw new Error(response.error || 'Failed to delete farm');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to delete farm');
    } finally {
      setLoading(false);
      setShowDeleteModal(false);
      setFarmToDelete(null);
    }
  };

  const handleEdit = (index: number) => {
    setNewFarm(farms[index]);
    setEditingFarmIndex(index);
    setShowFarmForm(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-50 text-[#20ae44] border-[#20ae44]/20';
      case 'Planning':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Inactive':
        return 'bg-[#FAF9F6] text-[#3A4A3E] border-[#E8EDE9]';
      default:
        return 'bg-emerald-50 text-[#20ae44] border-[#20ae44]/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return <Activity className="w-3.5 h-3.5 text-[#20ae44]" />;
      case 'Planning':
        return <Calendar className="w-3.5 h-3.5 text-amber-600" />;
      case 'Inactive':
        return <div className="w-3.5 h-3.5 rounded-full bg-[#3A4A3E]/40" />;
      default:
        return <Activity className="w-3.5 h-3.5 text-[#20ae44]" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Section */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-8 relative overflow-hidden">
          <div className="absolute -top-32 -right-20 w-80 h-80 bg-[#20ae44]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-[#8BA85A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#20ae44] bg-[#20ae44]/10 border border-[#20ae44]/15 px-3.5 py-1.5 rounded-full mb-4">
                <Sprout className="w-3.5 h-3.5 shrink-0" />
                <span>Arkin Organics Management</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#121A14] mb-2">Farm Management</h1>
              <p className="text-xs sm:text-sm text-[#3A4A3E] font-medium leading-relaxed">Manage your organic farms seamlessly with precision tracking.</p>
            </div>
            
            <div className="hidden md:flex flex-col items-end text-right bg-[#FAF9F6] px-6 py-4 rounded-3xl border border-[#E8EDE9]">
              <p className="text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-0.5">Active Platform</p>
              <p className="text-base font-bold text-[#20ae44]">Arkin Organics</p>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] p-4 sm:p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Search and Vertical Filter Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#3A4A3E]/60 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search farms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E8EDE9] rounded-full text-xs sm:text-sm font-medium text-[#121A14] placeholder-[#3A4A3E]/60 focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44] transition-all shadow-xs"
                />
              </div>

              {/* Vertical Filter Button / Dropdown */}
              <details className="relative shrink-0">
                <summary className="flex items-center justify-between gap-2 px-5 py-2.5 bg-[#FAF9F6] hover:bg-[#20ae44]/10 hover:text-[#20ae44] text-[#3A4A3E] border border-[#E8EDE9] rounded-full transition-all cursor-pointer list-none text-xs sm:text-sm font-semibold shadow-xs">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#20ae44]"></span>
                    Filter: {filterStatus}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#3A4A3E]/70" />
                </summary>
                
                <div className="absolute right-0 sm:left-0 mt-2 bg-white border border-[#121A14]/5 rounded-3xl p-2 shadow-2xl z-30 min-w-40 flex flex-col gap-1">
                  {(['All', 'Active', 'Planning', 'Inactive'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={`w-full text-left px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                        filterStatus === status
                          ? 'bg-[#20ae44] text-white shadow-xs'
                          : 'text-[#3A4A3E] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </details>
            </div>

            {/* View Mode Switcher & Add Button */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <div className="flex bg-[#FAF9F6] border border-[#E8EDE9] rounded-full p-1 shadow-xs">
                <button
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                  className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-[#20ae44] text-white shadow-xs' : 'text-[#3A4A3E] hover:bg-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                  className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-[#20ae44] text-white shadow-xs' : 'text-[#3A4A3E] hover:bg-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setShowFarmForm(true)}
                className="flex items-center px-6 py-2.5 bg-[#20ae44] hover:bg-[#1b963a] text-white rounded-full transition-all shadow-sm text-xs sm:text-sm font-semibold active:scale-95 shrink-0"
              >
                <Plus className="w-4 h-4 mr-1.5" />
                Add Farm
              </button>
            </div>

          </div>
        </div>

        {/* Farm Form Modal */}
        {showFarmForm && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#121A14]/5 p-6 sm:p-8">
              <div className="mb-6 pb-4 border-b border-[#E8EDE9]">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#121A14]">
                  {editingFarmIndex !== null ? 'Edit Farm' : 'Add New Farm'}
                </h2>
                <p className="text-xs sm:text-sm text-[#3A4A3E] mt-1">
                  {editingFarmIndex !== null ? 'Update farm information' : 'Create a new organic farm profile'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1.5">Farm Name *</label>
                  <input
                    type="text"
                    value={newFarm.name}
                    onChange={(e) => setNewFarm({ ...newFarm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8EDE9] rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44]"
                    placeholder="Enter farm name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1.5">Size</label>
                    <input
                      type="text"
                      value={newFarm.size || ''}
                      onChange={(e) => setNewFarm({ ...newFarm, size: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8EDE9] rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44]"
                      placeholder="e.g., 25 acres"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1.5">Location</label>
                    <input
                      type="text"
                      value={newFarm.location || ''}
                      onChange={(e) => setNewFarm({ ...newFarm, location: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8EDE9] rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44]"
                      placeholder="Farm location"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1.5">Established Year</label>
                    <input
                      type="number"
                      value={newFarm.established || ''}
                      onChange={(e) => setNewFarm({ ...newFarm, established: parseInt(e.target.value) || undefined })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8EDE9] rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44]"
                      placeholder="2024"
                      min="1900"
                      max="2030"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1.5">Status</label>
                    <select
                      value={newFarm.status}
                      onChange={(e) => setNewFarm({ ...newFarm, status: e.target.value as 'Active' | 'Planning' | 'Inactive' })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8EDE9] rounded-2xl text-xs sm:text-sm font-semibold text-[#121A14] focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44] cursor-pointer"
                    >
                      <option value="Active">Active</option>
                      <option value="Planning">Planning</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1.5">Crops</label>
                  <input
                    type="text"
                    value={newFarm.crops || ''}
                    onChange={(e) => setNewFarm({ ...newFarm, crops: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8EDE9] rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44]"
                    placeholder="e.g., Tomatoes, Lettuce, Herbs"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-[#E8EDE9]">
                  <button
                    type="button"
                    onClick={() => {
                      setShowFarmForm(false);
                      setNewFarm({ name: '', size: '', location: '', established: undefined, crops: '', status: 'Active' });
                      setEditingFarmIndex(null);
                    }}
                    className="px-6 py-2.5 bg-[#FAF9F6] text-[#3A4A3E] border border-[#E8EDE9] rounded-full hover:bg-gray-100 transition-all text-xs sm:text-sm font-semibold active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center px-6 py-2.5 bg-[#20ae44] hover:bg-[#1b963a] text-white rounded-full transition-all shadow-sm text-xs sm:text-sm font-semibold active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    {editingFarmIndex !== null ? 'Update Farm' : 'Create Farm'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && farmToDelete !== null && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-[#121A14]/5 p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#121A14]">Confirm Delete</h2>
                <p className="text-xs sm:text-sm text-[#3A4A3E] mt-2">
                  Are you sure you want to delete the farm <strong>{farms[farmToDelete]?.name}</strong>? This action cannot be undone.
                </p>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowDeleteModal(false);
                    setFarmToDelete(null);
                  }}
                  className="px-5 py-2.5 bg-[#FAF9F6] text-[#3A4A3E] border border-[#E8EDE9] rounded-full hover:bg-gray-100 transition-all text-xs sm:text-sm font-semibold active:scale-95"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  disabled={loading}
                  className="flex items-center px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-full transition-all shadow-sm text-xs sm:text-sm font-semibold active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Trash2 className="w-4 h-4 mr-2" />
                  )}
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Farms Display */}
        <div className="space-y-6">
          {filteredFarms.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredFarms.map((farm, index) => {
                const actualIndex = farms.indexOf(farm);
                return (
                  <div key={index} className={`bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all overflow-hidden ${viewMode === 'list' ? 'flex flex-col sm:flex-row items-stretch sm:items-center p-5 sm:p-6 gap-4' : 'p-6 flex flex-col justify-between'}`}>
                    {viewMode === 'grid' ? (
                      <>
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(farm.status || 'Active')}`}>
                              {getStatusIcon(farm.status || 'Active')}
                              <span className="ml-1.5">{farm.status || 'Active'}</span>
                            </div>
                            <div className="flex space-x-1">
                              <button
                                onClick={() => handleEdit(actualIndex)}
                                aria-label="Edit farm"
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(actualIndex)}
                                aria-label="Delete farm"
                                className="p-2 text-rose-600 hover:bg-rose-50 rounded-full transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <h3 className="text-lg font-semibold text-[#121A14] mb-3">{farm.name}</h3>

                          <div className="space-y-2.5 mb-4 text-xs sm:text-sm text-[#3A4A3E]">
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-[#20ae44]/10 rounded-full flex items-center justify-center mr-2.5 shrink-0">
                                <div className="w-2 h-2 bg-[#20ae44] rounded-full"></div>
                              </div>
                              <span className="font-semibold text-[#121A14] mr-1">Size:</span>
                              <span>{farm.size || 'N/A'}</span>
                            </div>

                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 text-[#20ae44] mr-2.5 shrink-0" />
                              <span className="font-semibold text-[#121A14] mr-1">Location:</span>
                              <span className="truncate">{farm.location || 'N/A'}</span>
                            </div>

                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 text-[#20ae44] mr-2.5 shrink-0" />
                              <span className="font-semibold text-[#121A14] mr-1">Established:</span>
                              <span>{farm.established || 'N/A'}</span>
                            </div>

                            <div className="flex items-start">
                              <Sprout className="w-4 h-4 text-[#20ae44] mr-2.5 mt-0.5 shrink-0" />
                              <div>
                                <span className="font-semibold text-[#121A14] mr-1">Crops:</span>
                                <span>{farm.crops || 'N/A'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1.5">
                            <h3 className="text-base sm:text-lg font-semibold text-[#121A14] truncate">{farm.name}</h3>
                            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border shrink-0 ${getStatusColor(farm.status || 'Active')}`}>
                              {getStatusIcon(farm.status || 'Active')}
                              <span className="ml-1">{farm.status || 'Active'}</span>
                            </div>
                          </div>
                          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-xs text-[#3A4A3E] font-medium">
                            <span><strong>Size:</strong> {farm.size || 'N/A'}</span>
                            <span><strong>Location:</strong> {farm.location || 'N/A'}</span>
                            <span><strong>Established:</strong> {farm.established || 'N/A'}</span>
                            <span><strong>Crops:</strong> {farm.crops || 'N/A'}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E8EDE9]">
                          <button
                            onClick={() => handleEdit(actualIndex)}
                            aria-label="Edit farm"
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(actualIndex)}
                            aria-label="Delete farm"
                            className="p-2 text-rose-600 hover:bg-rose-50 rounded-full transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] p-12 text-center max-w-xl mx-auto">
              <div className="w-20 h-20 bg-[#20ae44]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#20ae44]/20">
                <Sprout className="w-10 h-10 text-[#20ae44]" />
              </div>
              <h3 className="text-xl font-semibold text-[#121A14] mb-2">No farms found</h3>
              <p className="text-xs sm:text-sm text-[#3A4A3E] font-medium mb-6 leading-relaxed">
                {searchTerm || filterStatus !== 'All'
                  ? 'No farms match your current filters. Try adjusting your search or filter criteria.'
                  : 'Get started by adding your first organic farm to the system.'
                }
              </p>
              {(!searchTerm && filterStatus === 'All') && (
                <button
                  onClick={() => setShowFarmForm(true)}
                  className="inline-flex items-center px-6 py-3 bg-[#20ae44] hover:bg-[#1b963a] text-white rounded-full transition-all shadow-sm text-xs sm:text-sm font-semibold active:scale-95"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Farm
                </button>
              )}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}