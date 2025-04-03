/**
 * @chrisp2797 
 * @typedef PortfolioData
 * @property {string} imgSrc URL of the image
 * @property {string} title Title of the project
 * @property {string[]} skills Array of skills used: ['React', 'CSS', 'JavaScript']
 * @property {string} description Description of the project
 * @property {string} demoURL URL of the demo
 * @property {string} repoURL URL of the repository, e.g., https://github.com/user/repo
 * @property {string} anim The animation that will be executed when the card loads, e.g., fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness The brightness level of the card's background color, e.g., 0.1
 */

/**
 * @chrisp2797 
 * @type {PortfolioData[]}
 */
export const PortfolioData = [
	{
		imgSrc: '/img/port1_tt.png',
		title: 'Ticket Travel',
		skills: ['WordPress'],
		description:
			'This website is designed for Ticket Travel, a travel office based in Kos.',
		demoURL: 'https://tickettravelkos.com',
		anim: 'fade-up',
		averageBrightness: 0.9,
	},
	{
		imgSrc: '/img/port2_ac.png',
		title: 'Art Cafe Espresso Bar',
		skills: ['WordPress'],
		description:
			'This website is for the Art Cafe Espresso Bar in Kos.It is under construction',
		demoURL: 'https://artcafekos.gr',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.9,
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	WordPress: 'skill-icons:wordpress'
};

/**
 * @description Maps the PortflioData to include skill icons
 * 	You can check Array.map at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortfolioData = PortfolioData.map((item) => {
	return {
		// All the previous content of the item is kept
		...item,
		// The skills are replaced with the corresponding icons
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
