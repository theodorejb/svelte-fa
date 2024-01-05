const codes = {
  installation: [
    "npm install svelte-fa",
    `npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-brands-svg-icons`,
    "npm install svelte-fa -D",
    `import Fa from 'svelte-fa/dist/fa.svelte'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons/index.es'`,
    `// app.d.ts
declare module '@fortawesome/pro-solid-svg-icons/index.es' {
  export * from '@fortawesome/pro-solid-svg-icons';
}`,
  ],
  basicUse: [
    `<\
script>
  import Fa from 'svelte-fa'
  import { faFlag } from '@fortawesome/free-solid-svg-icons'
<\
/script>

<Fa icon={faFlag} /> Flag`,
    `<div style="font-size: 3em; color: tomato">
  <Fa icon={faFlag} />
</div>`,
  ],
  additionalStyling: [
    `<Fa icon={faFlag} size="xs" />
<Fa icon={faFlag} size="sm" />
<Fa icon={faFlag} size="lg" />
<Fa icon={faFlag} size="2x" />
<Fa icon={faFlag} size="2.5x" />
<Fa icon={faFlag} size="5x" />
<Fa icon={faFlag} size="7x" />
<Fa icon={faFlag} size="10x" />`,
    `<div>
  <Fa icon={faHome} fw style="background: mistyrose" /> Home
</div>
<div>
  <Fa icon={faInfo} fw style="background: mistyrose" /> Info
</div>
<div>
  <Fa icon={faBook} fw style="background: mistyrose" /> Library
</div>
<div>
  <Fa icon={faPencilAlt} fw style="background: mistyrose" /> Applications
</div>
<div>
  <Fa icon={faCog} fw style="background: mistyrose" /> Settings
</div>`,
    `<Fa icon={faQuoteLeft} pull="left" size="2x" />
<Fa icon={faQuoteRight} pull="right" size="2x" />
Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.`,
  ],
  animatingIcons: [
    `<Fa icon={faSpinner} size="3x" spin />
<Fa icon={faCircleNotch} size="3x" spin />
<Fa icon={faSync} size="3x" spin />
<Fa icon={faCog} size="3x" spin />
<Fa icon={faSpinner} size="3x" pulse />
<Fa icon={faStroopwafel} size="3x" spin />`,
  ],
  powerTransforms: [
    `<Fa icon={faSeedling} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={1.2} size="4x" style="background: mistyrose" />`,
    `<Fa icon={faSeedling} scale={0.5} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} translateX={0.2} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} translateX={-0.2} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} translateY={0.2} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} translateY={-0.2} size="4x" style="background: mistyrose" />`,
    `<Fa icon={faSeedling} size="4x" rotate={90} style="background: mistyrose" />
<Fa icon={faSeedling} size="4x" rotate={180} style="background: mistyrose" />
<Fa icon={faSeedling} size="4x" rotate="270" style="background: mistyrose" />
<Fa icon={faSeedling} size="4x" rotate="30" style="background: mistyrose" />
<Fa icon={faSeedling} size="4x" rotate="-30" style="background: mistyrose" />
<Fa icon={faSeedling} size="4x" flip="vertical" style="background: mistyrose" />
<Fa icon={faSeedling} size="4x" flip="horizontal" style="background: mistyrose" />
<Fa icon={faSeedling} size="4x" flip="both" style="background: mistyrose" />
<Fa icon={faSeedling} size="4x" flip="both" style="background: mistyrose" />`,
  ],
  layering: [
    `import Fa, {
  FaLayers,
  FaLayersText,
} from 'svelte-fa';`,
    `<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faCircle} color="tomato" />
  <Fa icon={faTimes} scale={0.5} color="white" />
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faBookmark} />
  <Fa icon={faHeart} scale={0.4} translateY={-0.1} color="tomato" />
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faPlay} scale={1.2} rotate={-90} />
  <Fa icon={faSun} scale={0.35} translateY={-0.2} color="white" />
  <Fa icon={faMoon} scale={0.3} translateX={-0.25} translateY={0.25} color="white" />
  <Fa icon={faStar} scale={0.3} translateX={0.25} translateY={0.25} color="white" />
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faCalendar} />
  <FaLayersText scale={0.45} translateY={0.06} color="white" style="font-weight: 900">
    27
  </FaLayersText>
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faCertificate} />
  <FaLayersText scale={0.25} rotate={-30} color="white" style="font-weight: 900">
    NEW
  </FaLayersText>
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faEnvelope} />
  <FaLayersText scale={0.2} translateX={0.4} translateY={-0.4} color="white" style="padding: 0 .2em; background: tomato; border-radius: 1em">
    1,419
  </FaLayersText>
</FaLayers>`,
  ],
  duotoneIcons: [
    `import {
  faCamera,
  faFireAlt,
  faBusAlt,
  faFillDrip,
} from '@fortawesome/pro-duotone-svg-icons'`,
    `<Fa icon={faCamera} size="3x" />
<Fa icon={faFireAlt} size="3x" />
<Fa icon={faBusAlt} size="3x" />
<Fa icon={faFillDrip} size="3x" />`,
    `<Fa icon={faCamera} size="3x" />
<Fa icon={faCamera} size="3x" swapOpacity />
<Fa icon={faFireAlt} size="3x" />
<Fa icon={faFireAlt} size="3x" swapOpacity />
<Fa icon={faBusAlt} size="3x" />
<Fa icon={faBusAlt} size="3x" swapOpacity />
<Fa icon={faFillDrip} size="3x" />
<Fa icon={faFillDrip} size="3x" swapOpacity />`,
    `<Fa icon={faBusAlt} size="3x" secondaryOpacity={.2} />
<Fa icon={faBusAlt} size="3x" secondaryOpacity={.4} />
<Fa icon={faBusAlt} size="3x" secondaryOpacity={.6} />
<Fa icon={faBusAlt} size="3x" secondaryOpacity={.8} />
<Fa icon={faBusAlt} size="3x" secondaryOpacity={1} />`,
    `<Fa icon={faBusAlt} size="3x" primaryOpacity={.2} />
<Fa icon={faBusAlt} size="3x" primaryOpacity={.4} />
<Fa icon={faBusAlt} size="3x" primaryOpacity={.6} />
<Fa icon={faBusAlt} size="3x" primaryOpacity={.8} />
<Fa icon={faBusAlt} size="3x" primaryOpacity={1} />`,
    `<Fa icon={faBusAlt} size="3x" primaryColor="gold" />
<Fa icon={faBusAlt} size="3x" primaryColor="orangered" />
<Fa icon={faFillDrip} size="3x" secondaryColor="limegreen" />
<Fa icon={faFillDrip} size="3x" secondaryColor="rebeccapurple" />
<Fa icon={faBatteryFull} size="3x" primaryColor="limegreen" secondaryColor="dimgray" />
<Fa icon={faBatteryQuarter} size="3x" primaryColor="orange" secondaryColor="dimgray" />`,
    `<Fa icon={faBook} size="3x" secondaryOpacity={1} primaryColor="lightseagreen" secondaryColor="linen" />
<Fa icon={faBookSpells} size="3x" secondaryOpacity={1} primaryColor="mediumpurple" secondaryColor="linen" />
<Fa icon={faBookMedical} size="3x" secondaryOpacity={1} primaryColor="crimson" secondaryColor="linen" />
<Fa icon={faBookUser} size="3x" secondaryOpacity={1} primaryColor="peru" secondaryColor="linen" />
<Fa icon={faToggleOff} size="3x" secondaryOpacity={1} primaryColor="white" secondaryColor="gray" />
<Fa icon={faToggleOn} size="3x" secondaryOpacity={1} primaryColor="dodgerblue" secondaryColor="white" />
<Fa icon={faFilePlus} size="3x" secondaryOpacity={1} primaryColor="white" secondaryColor="limegreen" />
<Fa icon={faFileExclamation} size="3x" secondaryOpacity={1} primaryColor="white" secondaryColor="gold" />
<Fa icon={faFileTimes} size="3x" secondaryOpacity={1} primaryColor="white" secondaryColor="tomato" />`,
    `<Fa icon={faCrow} size="3x" secondaryOpacity={1} primaryColor="dodgerblue" secondaryColor="gold" />
<Fa icon={faCampfire} size="3x" secondaryOpacity={1} primaryColor="sienna" secondaryColor="red" />
<Fa icon={faBirthdayCake} size="3x" secondaryOpacity={1} primaryColor="pink" secondaryColor="palevioletred" />
<Fa icon={faEar} size="3x" secondaryOpacity={1} primaryColor="sandybrown" secondaryColor="bisque" />
<Fa icon={faCorn} size="3x" secondaryOpacity={1} primaryColor="mediumseagreen" secondaryColor="gold" />
<Fa icon={faCookieBite} size="3x" secondaryOpacity={1} primaryColor="saddlebrown" secondaryColor="burlywood" />`,
    `const themeRavenclaw = {
  secondaryOpacity: 1,
  primaryColor: '#0438a1',
  secondaryColor: '#6c6c6c',
}`,
    `<Fa icon={faHatWizard} size="3x" {...themeRavenclaw} />
<Fa icon={faFlaskPotion} size="3x" {...themeRavenclaw} />
<Fa icon={faWandMagic} size="3x" {...themeRavenclaw} />
<Fa icon={faScarf} size="3x" {...themeRavenclaw} />
<Fa icon={faBookSpells} size="3x" {...themeRavenclaw} />`,
  ],
};

export default codes;
