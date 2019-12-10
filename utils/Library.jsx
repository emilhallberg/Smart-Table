export const formatDate = date =>
  `${date.getFullYear()}:${date.toLocaleDateString('sv-SV', {
    month: '2-digit'
  })}:${date.toLocaleDateString('sv-SV', {
    day: '2-digit'
  })} 00:00:00`;
