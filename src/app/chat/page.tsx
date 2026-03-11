'use client';

import { Suspense } from 'react';
import Chat from '@/components/chat/chat';

export default function Page() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading chat...</p>
        </div>
      </div>
    }>
      <Chat />
    </Suspense>
  );
}