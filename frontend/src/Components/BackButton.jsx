import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ label = 'Back', fallback = '/', className = '' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-pink-700 bg-white border border-pink-200 hover:border-pink-400 hover:bg-pink-50 shadow-sm hover:shadow-md transition-all duration-300 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full ${className}`}
    >
      <ArrowLeft
        size={16}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
      {label}
    </button>
  );
};

export default BackButton;
