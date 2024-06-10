import * as React from 'react';
import './EmailTemplate.css';

interface EmailTemplateProps {
  name: string,
  email: string,
  subject: string,
  message: string
}

const EmailTemplate = ({
  name, email, subject, message
}: EmailTemplateProps) => (
  <div className="email-container">
    <div className="container">
      <h2>Hello Admin, New Message Received</h2>
      <div className="message">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Subject:</strong> {subject}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
      </div>
    </div>
  </div>
);

export default EmailTemplate;