'use client';

import { useRouter } from 'next/navigation';
import Form from 'next/form';
import { useEffect, useState } from 'react';
import { useUser } from './../user-context';

export default function Chat() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [newMessage, setNewMessage] = useState('');
  const messages: { username: string, timestamp: string, text: string }[] = [
    { username: 'Bruno', timestamp: '08/12/2024 14:00', text: 'Mensagem 1' },
    { username: 'Outra pessoa', timestamp: '08/12/2024 14:05', text: 'Mensagem 2' }
  ];

  const handlesSendingNewMessage = () => {
    setNewMessage('');
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault(); // Impede o envio do formulário
      setNewMessage((prev) => prev + '\n'); // Adiciona uma quebra de linha
    }
  };

  useEffect(() => {
    if (!user || !user.trim()) {
      const storedUser = localStorage.getItem('username');

      if (!storedUser || !storedUser.trim()) {
        router.push('/');
        return;
      }

      setUser(storedUser);
      return;
    }
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 bg-white flex flex-col">
        <header className="p-4 border-b flex items-center justify-between bg-gray-800">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold pl-3 text-2xl">Chat</h1>
          </div>
          <button className="bg-gray-600 p-2 rounded hover:bg-gray-500">⋮</button>
        </header>

        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((item, i) => {
            if (item.username === user) {
              return (
                <div className="flex justify-end mb-4" key={i}>
                  <div className="bg-green-500 text-white p-3 rounded-lg max-w-sm text-lg">
                    {item.text}
                    <div className="flex justify-end text-xs text-gray-200">{item.timestamp}</div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="flex justify-start mb-4" key={i}>
                  <div className="bg-gray-800 text-white p-3 rounded-lg max-w-sm text-lg">
                    <div className="flex justify-start text-sm text-orange-200 font-bold">{item.username}</div>
                    {item.text}
                    <div className="flex justify-end text-xs text-gray-400">{item.timestamp}</div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <Form action={handlesSendingNewMessage}>
          <footer className="p-4 bg-gray-200 flex items-center gap-4">
            {newMessage.includes('\n')
              ? <textarea
                name="newMessage"
                key="newMessage"
                autoFocus
                rows={4}
                placeholder="Type a message..."
                className="flex-1 p-2 rounded border border-gray-300 text-black"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                required
                minLength={1}
              />
              : <input
                type="text"
                name="newMessage"
                key="newMessage"
                autoFocus
                placeholder="Type a message..."
                className="flex-1 p-2 rounded border border-gray-300 text-black"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                required
                minLength={1}
                onKeyDown={handleKeyDown}
              />}

            <button type='submit' className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Send
            </button>
          </footer>
        </Form>
      </main>
    </div>
  );
}
