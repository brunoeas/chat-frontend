'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = searchParams.get('user');

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <div><h1>CHAT: {user}</h1></div>
  );
}
