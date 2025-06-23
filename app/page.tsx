
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Music, Play, Heart, Users, TrendingUp, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState({
    totalSongs: 0,
    totalUsers: 0,
    totalPlays: 0,
  });

  useEffect(() => {
    // Fetch app statistics
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6F61]/5 to-[#6C5CE7]/5">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF6F61] to-[#6C5CE7] rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Strawberry Riff
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              {session ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="ghost">Dashboard</Button>
                  </Link>
                  <Link href="/friends">
                    <Button variant="ghost">Friends</Button>
                  </Link>
                  <Link href="/playlists">
                    <Button variant="ghost">Playlists</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/auth/signin">
                    <Button variant="ghost">Sign In</Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button className="btn-primary">Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Share Your{' '}
              <span className="gradient-text">Musical Journey</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Connect with fellow music creators, share your tracks, and discover amazing sounds from around the world.
            </p>
            
            {!session && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button size="lg" className="btn-primary text-lg px-8 py-3">
                    Start Creating
                  </Button>
                </Link>
                <Link href="/auth/signin">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6F61] to-[#6C5CE7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stats.totalSongs.toLocaleString()}+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Tracks Shared</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6F61] to-[#6C5CE7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stats.totalUsers.toLocaleString()}+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Music Creators</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6F61] to-[#6C5CE7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stats.totalPlays.toLocaleString()}+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Total Plays</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to{' '}
              <span className="gradient-text">Share Music</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From uploading your tracks to building a community, we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: 'Upload & Share',
                description: 'Easily upload your music tracks and share them with the world.',
              },
              {
                icon: Users,
                title: 'Connect with Creators',
                description: 'Build friendships with fellow musicians and collaborate.',
              },
              {
                icon: Heart,
                title: 'Discover New Music',
                description: 'Explore amazing tracks from creators around the globe.',
              },
              {
                icon: Play,
                title: 'High-Quality Streaming',
                description: 'Enjoy crystal-clear audio streaming for all tracks.',
              },
              {
                icon: TrendingUp,
                title: 'Track Analytics',
                description: 'See how your music performs with detailed insights.',
              },
              {
                icon: Headphones,
                title: 'Curated Playlists',
                description: 'Create and share playlists with your favorite tracks.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="card p-6 hover-lift hover-glow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6F61] to-[#6C5CE7] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!session && (
        <section className="py-20 bg-gradient-to-r from-[#FF6F61] to-[#6C5CE7]">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Share Your Music?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already sharing their musical journey on Strawberry Riff.
              </p>
              <Link href="/auth/signup">
                <Button size="lg" className="bg-white text-[#FF6F61] hover:bg-gray-100 text-lg px-8 py-3">
                  Get Started for Free
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF6F61] to-[#6C5CE7] rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Strawberry Riff</span>
            </div>
            <p className="text-gray-400">
              © 2024 Strawberry Riff. Made with ❤️ for music creators.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
