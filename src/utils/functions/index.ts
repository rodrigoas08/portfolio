export function calculateYear(month: number, year: number) {
  const years = new Date().getFullYear() - year;
  const months = new Date().getMonth() - (month - 1);
  return `${
    years > 1 ? `${years} anos` : `${years == 0 ? '' : `${years} ano`}`
  } ${months > 1 ? `${months} meses` : `${months == 1 ? 'mês' : ``}`}`;
}

export function openLinkInNewTab(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}
