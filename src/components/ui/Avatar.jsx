import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ name, initials, size = 'md', imageUrl }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  // Generate a deterministic color based on initials
  const getBackgroundColor = (initials) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
      'bg-pink-500', 'bg-indigo-500', 'bg-red-500'
    ];
    
    let sum = 0;
    for (let i = 0; i < initials.length; i++) {
      sum += initials.charCodeAt(i);
    }
    
    return colors[sum % colors.length];
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center text-white overflow-hidden`}
      title={name}
    >
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${getBackgroundColor(initials)}`}>
          {initials}
        </div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  imageUrl: PropTypes.string
};

export default Avatar;