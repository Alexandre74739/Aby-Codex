import { Link } from 'react-router-dom';
import './Button.scss';

interface ButtonProps {
  to: string;
  label: string;
  className?: string;
  variant?: 'primary' | 'acid';
}

export default function Button({ to, label, className = "", variant = 'primary' }: ButtonProps) {
  return (
    <Link to={to} className={`custom-btn ${variant} ${className}`}>
      <span>{label}</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="btn-icon">
        <path
          d="M1 8h14M9 2l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}