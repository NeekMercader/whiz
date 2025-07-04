import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { 
  User, 
  Settings, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  CreditCard,
  Download,
  MessageSquare
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface Project {
  id: string
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  project_type: string
  budget: string | null
  timeline: string | null
  created_at: string
  updated_at: string
}

interface ProjectUpdate {
  id: string
  title: string
  content: string
  created_at: string
}

const ClientPortal: React.FC = () => {
  const { user } = useAuth()
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [projectUpdates, setProjectUpdates] = useState<ProjectUpdate[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'payments' | 'profile'>('overview')

  useEffect(() => {
    if (user) {
      fetchProjects()
    }
  }, [user])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchProjectUpdates = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from('project_updates')
        .select('*')
        .eq('project_id', projectId)
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjectUpdates(data || [])
    } catch (error) {
      console.error('Error fetching project updates:', error)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />
      case 'in_progress':
        return <AlertCircle className="h-5 w-5 text-blue-500" />
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'cancelled':
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'in_progress':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Client Portal</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user?.user_metadata?.full_name || user?.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                New Project
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                    activeTab === 'overview' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="h-4 w-4 mr-3" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                    activeTab === 'projects' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-4 w-4 mr-3" />
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab('payments')}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                    activeTab === 'payments' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <CreditCard className="h-4 w-4 mr-3" />
                  Payments
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                    activeTab === 'profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="h-4 w-4 mr-3" />
                  Profile
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div className="ml-4">
                        <div className="text-2xl font-bold text-gray-900">{projects.length}</div>
                        <div className="text-gray-600">Total Projects</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <Clock className="h-8 w-8 text-yellow-600" />
                      <div className="ml-4">
                        <div className="text-2xl font-bold text-gray-900">
                          {projects.filter(p => p.status === 'in_progress').length}
                        </div>
                        <div className="text-gray-600">In Progress</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <div className="ml-4">
                        <div className="text-2xl font-bold text-gray-900">
                          {projects.filter(p => p.status === 'completed').length}
                        </div>
                        <div className="text-gray-600">Completed</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Projects */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Projects</h2>
                  {projects.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600">No projects yet</p>
                      <Link
                        to="/contact"
                        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Start Your First Project
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {projects.slice(0, 3).map((project) => (
                        <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900">{project.title}</h3>
                              <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                {project.status.replace('_', ' ')}
                              </span>
                              {getStatusIcon(project.status)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">All Projects</h2>
                {projects.length === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600">No projects yet</p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Start Your First Project
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                {project.status.replace('_', ' ')}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-gray-900">Type:</span>
                                <span className="ml-2 text-gray-600">{project.project_type}</span>
                              </div>
                              {project.budget && (
                                <div>
                                  <span className="font-medium text-gray-900">Budget:</span>
                                  <span className="ml-2 text-gray-600">{project.budget}</span>
                                </div>
                              )}
                              {project.timeline && (
                                <div>
                                  <span className="font-medium text-gray-900">Timeline:</span>
                                  <span className="ml-2 text-gray-600">{project.timeline}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="ml-4">
                            <button
                              onClick={() => {
                                setSelectedProject(project)
                                fetchProjectUpdates(project.id)
                              }}
                              className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment History</h2>
                <div className="text-center py-8">
                  <CreditCard className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No payments yet</p>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={user?.user_metadata?.full_name || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={user?.user_metadata?.company || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Update Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50" onClick={() => setSelectedProject(null)} />
            <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600">{selectedProject.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Status</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Type</h4>
                      <p className="text-gray-600">{selectedProject.project_type}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Project Updates</h4>
                    {projectUpdates.length === 0 ? (
                      <p className="text-gray-600">No updates yet</p>
                    ) : (
                      <div className="space-y-4">
                        {projectUpdates.map((update) => (
                          <div key={update.id} className="border-l-4 border-blue-500 pl-4">
                            <h5 className="font-medium text-gray-900">{update.title}</h5>
                            <p className="text-gray-600 mt-1">{update.content}</p>
                            <p className="text-xs text-gray-500 mt-2">
                              {new Date(update.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClientPortal