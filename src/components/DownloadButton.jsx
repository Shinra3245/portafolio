import { useTranslation } from 'react-i18next'
import './DownloadButton.css'

/**
 * Botón de descarga de CV.
 * Compuesto por:
 *  - SVG decorativo importado desde Vue (adaptado a JSX)
 *  - Icono de flecha de descarga con animación bounce (encima)
 */
function DownloadButton() {
  const { t } = useTranslation()

  return (
    <div className="dl-tooltip">
      <a
        href="/CV.pdf"
        download
        className="dl-btn"
        aria-label={t('hero.ctaSecondary')}
        title={t('hero.ctaSecondary')}
      >
        <svg
          id="svg-global"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 94 136"
          height="136"
          width="94"
          className="dl-scene"
        >
          <path
            stroke="#4B22B5"
            d="M87.36 108.43L49.11 85.38C47.85 84.62 45.8 84.62 44.54 85.38L6.28 108.43C5.02 109.19 5.02 110.43 6.28 111.19L44.54 134.24C45.8 135 47.85 135 49.11 134.24L87.36 111.19C88.62 110.43 88.62 109.19 87.36 108.43Z"
            id="line-v1"
          />
          <path
            stroke="#5728CC"
            d="M91.09 95.7L49.29 70.5C47.91 69.67 45.68 69.67 44.3 70.5L2.5 95.7C1.12 96.53 1.12 97.88 2.5 98.71L44.3 123.9C45.68 124.73 47.91 124.73 49.29 123.9L91.09 98.71C92.47 97.88 92.47 96.53 91.09 95.7Z"
            id="line-v2"
          />
          <g id="node-server">
            <path
              fill="url(#paint0_linear_204_217)"
              d="M2.49 72.01L43.87 96.94C45.74 98.07 48.28 97.81 50.93 96.21L91.46 71.78C92.14 71.26 92.42 70.91 92.54 70.13V86.14C92.54 86.97 92 87.97 91.31 88.38C84.5 92.47 51.65 112.2 50.04 113.22C48.24 114.34 45.35 114.34 43.55 113.22C41.93 112.2 8.56 91.87 2.09 87.93C1.39 87.5 1.01 86.6 1.01 85.41V70.13C1.11 70.93 1.5 71.33 2.49 72.01Z"
            />
            <path
              stroke="url(#paint2_linear_204_217)"
              fill="url(#paint1_linear_204_217)"
              d="M91.09 68.73L49.29 43.54C47.91 42.71 45.68 42.71 44.3 43.54L2.5 68.73C1.12 69.56 1.12 70.91 2.5 71.74L44.3 96.94C45.68 97.77 47.91 97.77 49.29 96.94L91.09 71.74C92.47 70.91 92.47 69.56 91.09 68.73Z"
            />
            <mask
              height="41"
              width="67"
              y="50"
              x="13"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
              id="mask0_204_217"
            >
              <path
                fill="white"
                d="M78.35 68.73L49.02 51.06C47.65 50.23 45.41 50.23 44.03 51.06L14.71 68.73C13.33 69.56 13.33 70.91 14.71 71.74L44.03 89.41C45.41 90.25 47.65 90.25 49.02 89.41L78.35 71.74C79.73 70.91 79.73 69.56 78.35 68.73Z"
              />
            </mask>
            <g mask="url(#mask0_204_217)">
              <path
                fill="#332C94"
                d="M78.35 68.73L49.02 51.06C47.65 50.23 45.41 50.23 44.03 51.06L14.71 68.73C13.33 69.56 13.33 70.91 14.71 71.74L44.03 89.41C45.41 90.25 47.65 90.25 49.02 89.41L78.35 71.74C79.73 70.91 79.73 69.56 78.35 68.73Z"
              />
              <mask
                height="29"
                width="48"
                y="56"
                x="23"
                maskUnits="userSpaceOnUse"
                style={{ maskType: 'luminance' }}
                id="mask1_204_217"
              >
                <path
                  fill="white"
                  d="M68.99 68.73L49.02 56.7C47.65 55.87 45.41 55.87 44.03 56.7L24.07 68.73C22.69 69.56 22.69 70.91 24.07 71.74L44.03 83.77C45.41 84.6 47.65 84.6 49.02 83.77L68.99 71.74C70.37 70.91 70.37 69.56 68.99 68.73Z"
                />
              </mask>
              <g mask="url(#mask1_204_217)">
                <path
                  fill="#5E5E5E"
                  d="M68.99 68.73L49.02 56.7C47.65 55.87 45.41 55.87 44.03 56.7L24.07 68.73C22.69 69.56 22.69 70.91 24.07 71.74L44.03 83.77C45.41 84.6 47.65 84.6 49.02 83.77L68.99 71.74C70.37 70.91 70.37 69.56 68.99 68.73Z"
                />
                <path
                  fill="#71B1C6"
                  d="M70.13 69.39L48.42 56.3C47.39 55.68 45.71 55.68 44.68 56.3L22.53 69.65C21.49 70.28 21.49 71.29 22.53 71.91L44.24 84.99C45.27 85.62 46.95 85.62 47.98 84.99L70.13 71.64C71.16 71.02 71.16 70.01 70.13 69.39Z"
                />
                <path
                  fill="#80C0D4"
                  d="M70.13 70.89L48.42 57.81C47.39 57.18 45.71 57.18 44.68 57.81L22.53 71.16C21.49 71.78 21.49 72.79 22.53 73.41L44.24 86.5C45.27 87.12 46.95 87.12 47.98 86.5L70.13 73.15C71.16 72.53 71.16 71.52 70.13 70.89Z"
                />
                <path
                  fill="#89D3EB"
                  d="M69.75 72.17L48.42 59.31C47.39 58.69 45.71 58.69 44.68 59.31L23.2 72.25C22.17 72.88 22.17 73.89 23.2 74.51L44.53 87.37C45.57 87.99 47.24 87.99 48.28 87.37L69.75 74.42C70.78 73.8 70.78 72.79 69.75 72.17Z"
                />
                <path
                  fill="#97E6FF"
                  d="M68.51 72.92L48.42 60.82C47.39 60.19 45.71 60.19 44.68 60.82L24.81 72.79C23.78 73.41 23.78 74.42 24.81 75.04L44.9 87.15C45.94 87.77 47.61 87.77 48.65 87.15L68.51 75.18C69.54 74.56 69.54 73.55 68.51 72.92Z"
                />
                <path
                  fill="#97E6FF"
                  d="M66.67 73.32L48.42 62.32C47.39 61.7 45.71 61.7 44.68 62.32L26.44 73.31C25.41 73.93 25.41 74.94 26.44 75.57L44.7 86.57C45.73 87.19 47.41 87.19 48.44 86.57L66.67 75.58C67.71 74.96 67.71 73.94 66.67 73.32Z"
                />
              </g>
              <path
                strokeWidth="0.5"
                stroke="#F4F4F4"
                d="M68.99 68.73L49.02 56.7C47.65 55.87 45.41 55.87 44.03 56.7L24.07 68.73C22.69 69.56 22.69 70.91 24.07 71.74L44.03 83.77C45.41 84.6 47.65 84.6 49.02 83.77L68.99 71.74C70.37 70.91 70.37 69.56 68.99 68.73Z"
              />
            </g>
          </g>
          <g id="particles">
            <path
              fill="url(#paint3_linear_204_217)"
              d="M43.55 32.56C44.54 32.56 45.35 31.72 45.35 30.68C45.35 29.64 44.54 28.8 43.55 28.8C42.55 28.8 41.75 29.64 41.75 30.68C41.75 31.72 42.55 32.56 43.55 32.56Z"
              className="particle p1"
            />
            <path
              fill="url(#paint4_linear_204_217)"
              d="M50.03 48.35C51.03 48.35 51.83 47.51 51.83 46.47C51.83 45.43 51.03 44.59 50.03 44.59C49.04 44.59 48.23 45.43 48.23 46.47C48.23 47.51 49.04 48.35 50.03 48.35Z"
              className="particle p2"
            />
            <path
              fill="url(#paint5_linear_204_217)"
              d="M40.31 62.64C41.1 62.64 41.75 61.97 41.75 61.14C41.75 60.31 41.1 59.63 40.31 59.63C39.51 59.63 38.87 60.31 38.87 61.14C38.87 61.97 39.51 62.64 40.31 62.64Z"
              className="particle p3"
            />
            <path
              fill="url(#paint6_linear_204_217)"
              d="M50.75 73.92C52.15 73.92 53.27 72.74 53.27 71.29C53.27 69.84 52.15 68.66 50.75 68.66C49.36 68.66 48.23 69.84 48.23 71.29C48.23 72.74 49.36 73.92 50.75 73.92Z"
              className="particle p4"
            />
            <path
              fill="url(#paint7_linear_204_217)"
              d="M48.59 76.93C49.19 76.93 49.67 76.43 49.67 75.8C49.67 75.18 49.19 74.67 48.59 74.67C47.99 74.67 47.51 75.18 47.51 75.8C47.51 76.43 47.99 76.93 48.59 76.93Z"
              className="particle p5"
            />
            <path
              fill="url(#paint8_linear_204_217)"
              d="M52.92 67.15C53.12 67.15 53.28 66.99 53.28 66.78C53.28 66.57 53.12 66.4 52.92 66.4C52.72 66.4 52.55 66.57 52.55 66.78C52.55 66.99 52.72 67.15 52.92 67.15Z"
              className="particle p6"
            />
            <path
              fill="url(#paint9_linear_204_217)"
              d="M52.19 43.84C52.79 43.84 53.27 43.33 53.27 42.71C53.27 42.09 52.79 41.58 52.19 41.58C51.6 41.58 51.11 42.09 51.11 42.71C51.11 43.33 51.6 43.84 52.19 43.84Z"
              className="particle p7"
            />
            <path
              fill="url(#paint10_linear_204_217)"
              d="M57.24 29.55C57.83 29.55 58.32 29.04 58.32 28.42C58.32 27.8 57.83 27.29 57.24 27.29C56.64 27.29 56.16 27.8 56.16 28.42C56.16 29.04 56.64 29.55 57.24 29.55Z"
              className="particle p8"
            />
            <path
              fill="url(#paint11_linear_204_217)"
              d="M43.91 34.81C44.31 34.81 44.63 34.48 44.63 34.06C44.63 33.65 44.31 33.31 43.91 33.31C43.51 33.31 43.19 33.65 43.19 34.06C43.19 34.48 43.51 34.81 43.91 34.81Z"
              className="particle p9"
            />
          </g>
          <g id="reflectores">
            <path
              fillOpacity="0.2"
              fill="url(#paint12_linear_204_217)"
              d="M49.2 57L68.76 68.78C69.68 69.31 69.8 69.97 69.79 70.16V13.74C69.76 13.56 69.68 13.47 69.43 13.31L48.48 0.6C46.92 -0.19 46.08 -0.21 44.64 0.6L23.69 13.21C23.2 13.59 23.2 13.76 23.2 14.49L23.25 70.16C23.29 69.49 23.73 69.07 25.18 68.24L43.91 57C44.83 56.43 45.38 56.26 46.43 56.25C47.53 56.23 48.14 56.42 49.2 57Z"
            />
            <path
              fillOpacity="0.2"
              fill="url(#paint13_linear_204_217)"
              d="M48.89 27.67C49.97 26.92 68.68 14.92 68.68 14.92C69.31 14.53 69.71 14.38 69.78 13.76V70.2C69.78 70.88 69.5 71.21 68.74 71.73L48.93 83.66C48.2 84.13 47.67 84.27 46.51 84.3C45.33 84.27 44.81 84.12 44.09 83.66L24.43 71.81C23.58 71.33 23.24 71.01 23.23 70.2L23.19 13.98C23.18 14.84 23.5 15.3 24.75 16.09C24.75 16.09 42.76 26.92 44.2 27.67C45.64 28.42 46 28.42 46.55 28.42C47.09 28.42 47.81 28.42 48.89 27.67Z"
            />
          </g>
          <g id="panel-rigth">
            <mask fill="white" id="path-26-inside-1_204_217">
              <path d="M72 91.83C72 90.51 72.93 88.91 74.07 88.25L87.93 80.24C89.07 79.58 90 80.12 90 81.44V81.44C90 82.76 89.07 84.37 87.93 85.03L74.07 93.03C72.93 93.69 72 93.15 72 91.83V91.83Z" />
            </mask>
            <path
              fill="#91DDFB"
              d="M72 91.83C72 90.51 72.93 88.91 74.07 88.25L87.93 80.24C89.07 79.58 90 80.12 90 81.44V81.44C90 82.76 89.07 84.37 87.93 85.03L74.07 93.03C72.93 93.69 72 93.15 72 91.83V91.83Z"
            />
            <path
              mask="url(#path-26-inside-1_204_217)"
              fill="#489CB7"
              d="M72 89.44L90 79.05L72 89.44ZM90.69 81.44C90.69 82.98 89.61 84.86 88.28 85.63L74.76 93.43C73.24 94.31 72 93.59 72 91.83V91.83C72 92.71 72.93 92.89 74.07 92.23L87.93 84.23C88.69 83.79 89.31 82.72 89.31 81.84L90.69 81.44ZM72 94.22V89.44V94.22ZM88.28 80.04C89.61 79.27 90.69 79.9 90.69 81.44V81.44C90.69 82.98 89.61 84.86 88.28 85.63L87.93 84.23C88.69 83.79 89.31 82.72 89.31 81.84V81.84C89.31 80.52 88.69 79.81 87.93 80.24L88.28 80.04Z"
            />
            <mask fill="white" id="path-28-inside-2_204_217">
              <path d="M67 94.66C67 93.38 67.9 91.83 69 91.2V91.2C70.1 90.56 71 91.08 71 92.35V92.51C71 93.79 70.1 95.34 69 95.98V95.98C67.9 96.61 67 96.1 67 94.82V94.66Z" />
            </mask>
            <path
              fill="#91DDFB"
              d="M67 94.66C67 93.38 67.9 91.83 69 91.2V91.2C70.1 90.56 71 91.08 71 92.35V92.51C71 93.79 70.1 95.34 69 95.98V95.98C67.9 96.61 67 96.1 67 94.82V94.66Z"
            />
            <path
              mask="url(#path-28-inside-2_204_217)"
              fill="#489CB7"
              d="M67 92.35L71 90.04L67 92.35ZM71.69 92.51C71.69 94.01 70.64 95.83 69.35 96.58L69.35 96.58C68.05 97.33 67 96.72 67 95.22V94.82C67 95.66 67.9 95.81 69 95.18L69 95.18C69.72 94.76 70.31 93.75 70.31 92.91L71.69 92.51ZM67 97.13V92.35V97.13ZM69.28 91.04C70.61 90.27 71.69 90.89 71.69 92.43V92.51C71.69 94.01 70.64 95.83 69.35 96.58L69 95.18C69.72 94.76 70.31 93.75 70.31 92.91V92.75C70.31 91.48 69.72 90.78 69 91.2L69.28 91.04Z"
            />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" y2="92.09" x2="92.54" y1="92.09" x1="1.01" id="paint0_linear_204_217">
              <stop stopColor="#5727CC" />
              <stop stopColor="#4354BF" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="91.16" x2="6.72" y1="70" x1="92.5" id="paint1_linear_204_217">
              <stop stopColor="#4559C4" />
              <stop stopColor="#332C94" offset="0.29" />
              <stop stopColor="#5727CB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="85.08" x2="3.56" y1="70" x1="92.5" id="paint2_linear_204_217">
              <stop stopColor="#91DDFB" />
              <stop stopColor="#8841D5" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="32.56" x2="43.55" y1="28.8" x1="43.55" id="paint3_linear_204_217">
              <stop stopColor="#5927CE" />
              <stop stopColor="#91DDFB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="48.35" x2="50.03" y1="44.59" x1="50.03" id="paint4_linear_204_217">
              <stop stopColor="#5927CE" />
              <stop stopColor="#91DDFB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="62.64" x2="40.31" y1="59.63" x1="40.31" id="paint5_linear_204_217">
              <stop stopColor="#5927CE" />
              <stop stopColor="#91DDFB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="73.92" x2="50.75" y1="68.66" x1="50.75" id="paint6_linear_204_217">
              <stop stopColor="#5927CE" />
              <stop stopColor="#91DDFB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="76.93" x2="48.59" y1="74.67" x1="48.59" id="paint7_linear_204_217">
              <stop stopColor="#5927CE" />
              <stop stopColor="#91DDFB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="67.15" x2="52.92" y1="66.4" x1="52.92" id="paint8_linear_204_217">
              <stop stopColor="#5927CE" />
              <stop stopColor="#91DDFB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="43.84" x2="52.19" y1="41.58" x1="52.19" id="paint9_linear_204_217">
              <stop stopColor="#5927CE" />
              <stop stopColor="#91DDFB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="29.55" x2="57.24" y1="27.29" x1="57.24" id="paint10_linear_204_217">
              <stop stopColor="#5927CE" />
              <stop stopColor="#91DDFB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="34.81" x2="43.91" y1="33.31" x1="43.91" id="paint11_linear_204_217">
              <stop stopColor="#5927CE" />
              <stop stopColor="#91DDFB" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="16.07" x2="62.99" y1="88.51" x1="67.86" id="paint12_linear_204_217">
              <stop stopColor="#97E6FF" />
              <stop stopOpacity="0" stopColor="white" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="39.41" x2="31.45" y1="88.09" x1="36.26" id="paint13_linear_204_217">
              <stop stopColor="#97E6FF" />
              <stop stopOpacity="0" stopColor="white" offset="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── Icono de descarga con bounce (encima del SVG) ── */}
        <svg
          className="dl-btn__icon"
          width="22"
          height="22"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </a>
      <span className="dl-tooltiptext">{t('hero.ctaSecondary')}</span>
    </div>
  )
}

export default DownloadButton
