'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactFormProps {
  dict: {
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
  };
}

export function ContactForm({ dict }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">{dict.name}</Label>
        <Input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="focus:ring-brand-red focus:border-brand-red"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{dict.email}</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="focus:ring-brand-red focus:border-brand-red"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">{dict.subject}</Label>
        <Input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="focus:ring-brand-red focus:border-brand-red"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{dict.message}</Label>
        <Textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="focus:ring-brand-red focus:border-brand-red resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-red hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105"
      >
        {isSubmitting ? dict.sending : dict.send}
      </Button>
    </form>
  );
}
