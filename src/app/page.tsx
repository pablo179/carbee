'use client'

import { redirect } from 'next/navigation';
import useAuth from '@/hooks/useAuth';

export default function Home() {
  const { authUser } = useAuth();
  if(!authUser) {
    return redirect('/login')
  } else {
    return redirect('/dashboard')
  }
}
