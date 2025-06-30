'use client';

import React, { useEffect, useState } from 'react';
import { Heart, Play, MoreHorizontal } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { useTestData } from '@/hooks/useTestData';

interface Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
  image_url?: string;
}

const Discover = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useTestData(); // Inject mock/test data for local dev

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const { data, error } = await supabase
          .from('songs')
          .select('id, title, artist, album, image_url')
          .limit(8);

        if (error) {
          console.error('Error fetching songs:', error);
        } else {
          setSongs(data || []);
        }
      } catch (err) {
        console.error('Unexpected error fetching songs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  const mockTracks: Song[] = [
    { id: 'mock-1', title: 'Snohomish Way', artist: 'LeSan Riedmann' },
    { id: 'mock-2', title: 'Evermore Alive', artist: 'LeSan Riedmann' },
    { id: 'mock-3', title: 'Evermore Redux', artist: 'LeSan Riedmann' },
    { id: 'mock-4', title: 'Magical Snohomish', artist: 'LeSan Riedmann

