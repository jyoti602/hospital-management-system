// Utility to generate initials from full name
export const AvatarGenerator = (fullName) => {
  if (!fullName) return '';
  const names = fullName.trim().split(' ');
  const firstInitial = names[0]?.charAt(0).toUpperCase() || '';
  const lastInitial = names.length > 1 ? names[names.length - 1].charAt(0).toUpperCase() : '';
  return firstInitial + lastInitial;
};

// Utility to generate color from a name
export const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360; // Safe hue value
  return `hsl(${hue}, 70%, 60%)`; // HSL = vibrant color
};
