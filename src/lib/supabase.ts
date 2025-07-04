import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          company: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string
          status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          project_type: string
          budget: string | null
          timeline: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description: string
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          project_type: string
          budget?: string | null
          timeline?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          project_type?: string
          budget?: string | null
          timeline?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      project_updates: {
        Row: {
          id: string
          project_id: string
          title: string
          content: string
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          title: string
          content: string
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          title?: string
          content?: string
          created_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          user_id: string
          project_id: string | null
          stripe_payment_intent_id: string
          amount: number
          currency: string
          status: 'pending' | 'succeeded' | 'failed' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          project_id?: string | null
          stripe_payment_intent_id: string
          amount: number
          currency: string
          status?: 'pending' | 'succeeded' | 'failed' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          project_id?: string | null
          stripe_payment_intent_id?: string
          amount?: number
          currency?: string
          status?: 'pending' | 'succeeded' | 'failed' | 'cancelled'
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}