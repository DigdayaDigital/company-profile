import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function EmailTemplate({ name, email, phone, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>New Contact Message</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
}