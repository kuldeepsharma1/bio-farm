'use client'
import React, { useState, useEffect } from 'react'
import {
  TrendingUp, Users, Award, Save,
  MapPin, Phone,
  ShieldUser,
} from "lucide-react";
import { getUserDetails, editProfile, } from '@/actions/user';
import { toast } from 'sonner';

interface Achievement {
  title: string;
  description?: string;
  year?: number;
  iconColor?: string;
}

interface Farm {
  name: string;
  size?: string;
  location?: string;
  established?: number;
  crops?: string;
  status?: 'Active' | 'Planning' | 'Inactive';
}

export default function ProfileDetails({ userId }: { userId?: string }) {
  const [activeTab, setActiveTab] = useState("profile");
  type UserData = {
    name: string;
    firstname: string;
    lastname: string;
    email: string;
    contact_no: string;
    alternate_contact_no: string;
    location: string;
    bio: string;
    farms: Farm[];
    achievements: Achievement[];
    role: string;
  };

  const [userData, setUserData] = useState<UserData>({
    name: '',
    firstname: '',
    lastname: '',
    email: '',
    contact_no: '',
    alternate_contact_no: '',
    location: '',
    bio: '',
    farms: [],
    achievements: [],
    role: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        const response = await getUserDetails(userId);

        if (response.success && response.user) {
          setUserData({
            ...userData,
            ...response.user,
            firstname: response.user.firstname || '',
            lastname: response.user.lastname || '',
            name: response.user.name || '',
            role: response.user.role || '',
          });
        }
      }
    };
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!userId) throw new Error('User not authenticated');

      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('firstname', userData.firstname);
      formData.append('lastname', userData.lastname);
      formData.append('email', userData.email);
      formData.append('bio', userData.bio);
      formData.append('location', userData.location);
      formData.append('contact_no', userData.contact_no);
      formData.append('alternate_contact_no', userData.alternate_contact_no);

      const response = await editProfile(userId, formData);
      if (response.success) {
        toast.success('Profile updated successfully');
      } else {
        throw new Error(response.error || 'Failed to update profile');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        {/* Navigation */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-2">
          <nav className="space-y-1">
            {[
              {
                id: "profile",
                label: "Profile Information",
                icon: Users,
              },
              { id: "farm", label: "Farm Details", icon: TrendingUp },
              { id: "achievements", label: "Achievements", icon: Award },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-green-50 text-green-700 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className={`w-4 h-4 mr-3 ${activeTab === item.id ? "text-green-600" : "text-gray-400"}`} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Quick Statistics</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Total Farms</span>
              <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-full">{userData.farms.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Total Area</span>
              <span className="text-sm font-semibold text-gray-900">
                {userData.farms.reduce((total, farm) => total + (parseFloat(farm.size || '0') || 0), 0)} acres
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Active Crops</span>
              <span className="text-sm font-semibold text-gray-900">
                {userData.farms.reduce((total, farm) => total + (farm.crops?.split(',').length || 0), 0)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Certifications</span>
              <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-full">{userData.achievements.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
          
          {/* Profile Information Tab */}
          {activeTab === "profile" && (
            <form onSubmit={handleSubmit} className="space-y-6 p-8">
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Update your personal details and contact info.</p>
                </div>
                <span className="px-3.5 py-1.5 bg-green-50 text-green-700 border border-green-200/60 rounded-full text-xs font-semibold tracking-wide uppercase">
                  {userData.role || 'User'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={userData.name || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    disabled
                    value={userData.email || ''}
                    className="w-full px-4 py-2.5 bg-gray-100/70 cursor-not-allowed select-none border border-gray-200 rounded-xl text-sm text-gray-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="contact_no"
                      value={userData.contact_no || ''}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Alternate Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="alternate_contact_no"
                      value={userData.alternate_contact_no || ''}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Bio</label>
                  <div className="relative">
                    <ShieldUser className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      name="bio"
                      rows={3}
                      value={userData.bio || ''}
                      onChange={handleInputChange} 
                      maxLength={500}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all outline-none resize-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      name="location"
                      rows={3}
                      value={userData.location || ''}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center px-6 py-2.5 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 shadow-sm shadow-green-600/20 transition-all disabled:opacity-50"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          )}

          {/* Farm Details Tab */}
          {activeTab === 'farm' && (
            <div className="p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Farm Details</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Overview of registered lands and crop details.</p>
                </div>
                <button className="text-green-600 hover:text-green-700 text-sm font-semibold transition-colors">
                  Manage Farms
                </button>
              </div>
              <div className="space-y-4">
                {userData.farms.length > 0 ? (
                  userData.farms.map((farm, index) => (
                    <div key={index} className="border border-gray-100 bg-gray-50/30 rounded-2xl p-5 transition-all hover:bg-white hover:border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900 text-base">{farm.name}</h3>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            farm.status === 'Active'
                              ? 'bg-green-50 text-green-700 border border-green-200/60'
                              : farm.status === 'Planning'
                              ? 'bg-yellow-50 text-yellow-700 border border-yellow-200/60'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {farm.status || 'Active'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-white p-4 rounded-xl border border-gray-100">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Size</span>
                          <p className="font-semibold text-gray-900">{farm.size || 'N/A'}</p>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Location</span>
                          <p className="font-semibold text-gray-900">{farm.location || 'N/A'}</p>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Established</span>
                          <p className="font-semibold text-gray-900">{farm.established || 'N/A'}</p>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Crops</span>
                          <p className="font-semibold text-gray-900">{farm.crops || 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                    <p className="text-sm text-gray-500">No farms available.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Achievements & Certifications</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Recognitions and verified credentials.</p>
                </div>
              </div>
              <div className="space-y-4">
                {userData.achievements.length > 0 ? (
                  userData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-100 bg-gray-50/30 rounded-2xl transition-all hover:bg-white hover:border-gray-200 shadow-sm">
                      <div
                        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                          achievement.iconColor ? `bg-${achievement.iconColor}-50 text-${achievement.iconColor}-600` : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{achievement.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{achievement.description || 'No description'}</p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-gray-600">
                        {achievement.year || 'N/A'}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                    <p className="text-sm text-gray-500">No achievements available.</p>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}