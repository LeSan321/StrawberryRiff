'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const { signUp, signIn, signInWithGoogle, user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = isSignUp
        ? await signUp(email, password, name)
        : await signIn(email, password);

      if (error) {
        toast({
          title: 'Authentication Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: isSignUp ? 'Check your email!' : 'Welcome back!',
          description: isSignUp
            ? 'Please confirm your account via the email sent.'
            : 'Successfully signed in.',
        });
      }
    } catch (error) {
      toast({
        title: 'Unexpected Error',
        description: 'Something went wrong during sign in.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    const { error } = await signInWithGoogle();

    if (error) {
      toast({
        title: 'Google Sign In Error',
        description: error.message,
        variant: 'destructive',
      });
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">S

