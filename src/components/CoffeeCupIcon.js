"use client";

export default function CoffeeCupIcon({ size = 28, className = "" }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={className}
      aria-label="Daily Brew Coffee Cup"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Steam 1 */}
        <path
          d="M12 9C12.5 7 13.5 6 12.5 4"
          stroke="#C87019"
          strokeWidth="2"
          strokeLinecap="round"
          className="steam-particle"
        />
        {/* Steam 2 */}
        <path
          d="M17 10C17.5 7.5 19 6.5 17.5 3.5"
          stroke="#DF8226"
          strokeWidth="2"
          strokeLinecap="round"
          className="steam-particle-2"
        />
        {/* Steam 3 */}
        <path
          d="M22 9C22.5 7 23.5 6 22.5 4"
          stroke="#C87019"
          strokeWidth="2"
          strokeLinecap="round"
          className="steam-particle-3"
        />

        {/* Cup Body */}
        <path
          d="M7 13H27V23C27 27.4183 23.4183 31 19 31H15C10.5817 31 7 27.4183 7 23V13Z"
          fill="url(#cupGradLight)"
          stroke="#A4550E"
          strokeWidth="1.6"
        />

        {/* Cup Rim */}
        <rect
          x="6"
          y="11.5"
          width="22"
          height="3"
          rx="1.5"
          fill="#FFF7ED"
          stroke="#A4550E"
          strokeWidth="1"
        />

        {/* Handle */}
        <path
          d="M27 16H29C30.6569 16 32 17.3431 32 19V20C32 21.6569 30.6569 23 29 23H27"
          stroke="#A4550E"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Coffee Crema Surface */}
        <ellipse cx="17" cy="14" rx="8" ry="1.5" fill="#C87019" />
        <ellipse cx="17" cy="14" rx="5" ry="0.8" fill="#FDF3E7" opacity="0.8" />

        {/* Star Heart Accent on Cup */}
        <path
          d="M17 20L18 22H20.2L18.4 23.3L19.1 25.5L17 24.2L14.9 25.5L15.6 23.3L13.8 22H16L17 20Z"
          fill="#FFF7ED"
          opacity="0.95"
        />

        <defs>
          <linearGradient id="cupGradLight" x1="7" y1="13" x2="27" y2="31" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D97706" />
            <stop offset="1" stopColor="#B45309" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
