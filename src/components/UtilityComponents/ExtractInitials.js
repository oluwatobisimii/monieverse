export function extractInitials(fullName) {
    // Trim unnecessary spaces
    fullName = fullName.trim();
  
    // Split the full name into individual names and remove empty strings
    const names = fullName.split(' ').filter(name => name !== '');
  
    // Get the first two names or all names if less than two
    const selectedNames = names.slice(0, 2);
  
    // Extract the initials from selected names
    const initials = selectedNames.map(name => name[0]);
  
    // Join the initials together
    const initialsString = initials.join('');
  
    return initialsString;
  }