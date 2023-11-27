import theme from 'styles/theme';

/*
************************
  ICONS SECTION SKILLS
************************
*/
export const StyledCompIcon = () => {
  return (
    <svg
      viewBox="1 1 199 199"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M0.399414 200.374H200.399V0.373534H0.399414V200.374Z"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_911_555" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_911_555"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const VuetifyIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <g>
        <path d="M64.004 0H34.102l29.902 61.848" fill="#1697F6"></path>
        <path
          d="M64.004 80v48L0 18.664h33.527L64.004 80zm0-80h29.898L64.004 61.848"
          fill="#7BC6FF"
        ></path>
        <path
          d="M94.473 18.664H128L64.004 128V80l30.469-61.336z"
          fill="#AEDDFF"
        ></path>
      </g>
    </svg>
  );
};

export const NpmIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <path
        fill="#cb3837"
        d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"
      ></path>
    </svg>
  );
};

export const TSIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
      <path
        data-name="original"
        fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
      ></path>
    </svg>
  );
};

export const GitIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <path
        fill="#F34F29"
        d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
      ></path>
    </svg>
  );
};

export const VueIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <path
        d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
        fill="none"
      ></path>
      <path
        d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z"
        fill="#35495e"
      ></path>
      <path
        d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z"
        fill="#41b883"
      ></path>
    </svg>
  );
};

export const VSCodeIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <path
        d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"
        fill="#2489ca"
      ></path>
      <path
        d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0"
        fill="#1070b3"
      ></path>
      <path
        d="M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"
        fill="#0877b9"
      ></path>
      <path
        d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"
        fill="#3c99d4"
      ></path>
    </svg>
  );
};

export const JSIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
      <path
        fill="#323330"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
      ></path>
    </svg>
  );
};

export const ReactIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4"></circle>
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
      </g>
    </svg>
  );
};

export const CssIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <path
        fill="#1572B6"
        d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
      ></path>
      <path
        fill="#33A9DC"
        d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
      ></path>
      <path
        fill="#fff"
        d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
      ></path>
      <path
        fill="#EBEBEB"
        d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
      ></path>
      <path
        fill="#fff"
        d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
      ></path>
      <path
        fill="#EBEBEB"
        d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
      ></path>
    </svg>
  );
};

export const GithubIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <g fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
        ></path>
        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
      </g>
    </svg>
  );
};

export const HtmlIcon = () => {
  return (
    <svg viewBox="0 0 128 128">
      <path
        fill="#E44D26"
        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
      ></path>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
      <path
        fill="#EBEBEB"
        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
      ></path>
      <path
        fill="#fff"
        d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
      ></path>
    </svg>
  );
};

/*
************************
  ICONS SECTION CONTACT
************************
*/
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
