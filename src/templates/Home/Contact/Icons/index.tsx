import theme from 'styles/theme';

export const SubjectIcon = () => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 96 96"
      fill="url(#gradient)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: `${theme.colors.primary}`, stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: `${theme.colors.secondary}`, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path d="M60 82.2857H0V96H60V82.2857ZM96 27.4286H0V41.1429H96V27.4286ZM0 68.5714H96V54.8571H0V68.5714ZM0 0V13.7143H96V0H0Z" />
    </svg>
  );
};
