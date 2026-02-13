/**
 * Avatar Generator Utility
 * Generates avatar URLs based on initials or name
 */

export const generateAvatarUrl = (name: string, _size: number = 56): string => {
  // Extract initials from name
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Generate random but consistent color based on name
  const colors = [
    'FF6B6B', // Red
    '4ECDC4', // Teal
    '45B7D1', // Blue
    'FFA07A', // Light Salmon
    '98D8C8', // Mint
    'F7DC6F', // Yellow
    'BB8FCE', // Purple
    '85C1E2', // Light Blue
    'F8B88B', // Peach
    '52C9B8', // Green
  ];

  // Generate consistent color from name
  const hash = name.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  const color = colors[hash % colors.length];

  // Use DiceBear Avataaars API for consistent initials-based avatars
  return `https://api.dicebear.com/7.x/initials/svg?seed=${initials}&backgroundColor=${color}&scale=80&radius=100`;
};

export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
