"use client"

import { useState } from 'react';
import { toast } from "sonner";
import { MotionButton } from '@/components/motion/MotionComponents';
import { Spinner } from '../ui/spinner';

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

export function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Pesan berhasil dikirim!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        onSubmitSuccess?.();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengirim pesan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ff5100] focus:border-transparent transition-all duration-300"
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ff5100] focus:border-transparent transition-all duration-300"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ff5100] focus:border-transparent transition-all duration-300"
            placeholder="+62 812 3456 7890"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ff5100] focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Ceritakan tentang proyek Anda..."
          />
        </div>

        <MotionButton
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full bg-linear-to-r from-[#ff5100] to-[#ff7733] text-white py-4 px-8 rounded-3xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed flex items-center justify-center gap-x-2' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting && <Spinner className="size-5" />}
          {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
        </MotionButton>
      </div>
    </form>
  );
}
