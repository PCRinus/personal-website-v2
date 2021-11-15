import JsIcon from './images/techs/JsIcon.svelte';
import PhpIcon from './images/techs/PhpIcon.svelte';
import HtmlIcon from './images/techs/HtmlIcon.svelte';
import CssIcon from './images/techs/CssIcon.svelte';
import CSharpIcon from './images/techs/CSharpIcon.svelte';

import SvelteIcon from './images/techs/SvelteIcon.svelte';
import AngularIcon from './images/techs/AngularIcon.svelte';
import ReactIcon from './images/techs/ReactIcon.svelte';
import NodeIcon from './images/techs/NodeIcon.svelte';
import DotNetIcon from './images/techs/DotNetIcon.svelte';

import VsCodeIcon from './images/techs/VsCodeIcon.svelte';
import GitIcon from './images/techs/GitIcon.svelte';
import NetlifyIcon from './images/techs/NetlifyIcon.svelte';
import HerokuIcon from './images/techs/HerokuIcon.svelte';
import PostmanIcon from './images/techs/PostmanIcon.svelte';

export default {
	components: {
		navbar: {
			profile: {
				en: 'Profile',
				ro: 'Profil'
			},
			experience: {
				en: 'Experience',
				ro: 'Experiență'
			},
			projects: {
				en: 'Projects',
				ro: 'Proiecte'
			},
			abilities: {
				en: 'Abilities',
				ro: 'Abilități'
			},
			contact: {
				en: 'Contact',
				ro: 'Contact'
			}
		},
		footer: {
			text: {
				en:
					'Designed and developed by <strong class="text-pink-700 dark:text-green-500"> </br> Mircea Casapu</strong> © 2021',
				ro:
					'Proiectat si dezvoltat de <strong class="text-pink-700 dark:text-green-500"> </br> Mircea Casapu</strong> © 2021'
			},
			coffee: {
				en: 'Powered by ☕',
				ro: 'Cu ajutorul ☕'
			}
		}
	},
	pages: {
		index: {
			hero_greeting: {
				en: 'Hey! I am Mircea',
				ro: 'Salut! Eu sunt Mircea'
			},
			hero_subgreeting: {
				en:
					'I am a <strong>Full Stack Web Developer</strong> who builds web applications that run across platforms and devices!',
				ro:
					'Sunt un <strong>Full Stack Web Developer</strong> ce construiește aplicații web ce rulează pe diverse platforme și dispozitive!'
			},
			about_me: {
				header: {
					en: 'About me',
					ro: 'Despre mine'
				},
				background: {
					en:
						'I\'m currently a Full Stack Dev <strong><a href="https://www.unifiedpost.com/en" target="_blank">@UnifiedPost</a></strong>, building tools for the web. I recently graduated from the Polytechnic University of Timișoara | UPT with a Bachelor\'s in Engineering',
					ro:
						'În prezent sunt un Full Stack Dev <strong><a href="https://www.unifiedpost.com/en" target="_blank">@UnifiedPost</a></strong>, construind diverse unelte pentru web. Recent am absolvit Universitatea Politehnică din Timișoara | UPT cu o Diploma de Licență în Inginerie'
				},
				skills: {
					// languages: ['JavaScript', 'PHP', 'HTML', 'CSS/Sass', 'C#', 'SQL'],
					// frameworks: ['Svelte & SvelteKit', 'React', 'NodeJS', '.NET'],
					// tools: ['VS Code', 'Git & GitHub', 'Netlify', 'Heroku', 'Postman']
					languages: [
						{ item: 'JavaScript', icon: JsIcon },
						{ item: 'PHP', icon: PhpIcon },
						{ item: 'HTML', icon: HtmlIcon },
						{ item: 'CSS', icon: CssIcon },
						{ item: 'C#', icon: CSharpIcon }
					],
					frameworks: [
						{ item: 'Svelte', icon: SvelteIcon },
						{ item: 'Angular', icon: AngularIcon },
						{ item: 'React', icon: ReactIcon },
						{ item: 'NodeJS', icon: NodeIcon },
						{ item: '.NET', icon: DotNetIcon }
					],
					tools: [
						{ item: 'VS Code', icon: VsCodeIcon },
						{ item: 'Git', icon: GitIcon },
						{ item: 'Netlify', icon: NetlifyIcon },
						{ item: 'Heroku', icon: HerokuIcon },
						// { item: 'Postman', icon: PostmanIcon }
					]
				},
				languages_header: {
					en: 'Languages',
					ro: 'Limbaje'
				},
				frameworks_header: {
					en: 'Frameworks',
					ro: 'Framework-uri'
				},
				tools_header: {
					en: 'Dev Tools',
					ro: 'Unelte'
				}
			},
			cv: {
				en: 'Download my CV',
				ro: 'Descarcă-mi CV-ul'
			},
			github: {
				en: 'View my GitHub',
				ro: 'Github-ul meu'
			},
			linkedin: {
				en: 'Add me on LinkedIn',
				ro: 'Adaugă-mă pe LinkedIn'
			}
		},
		experiences: {
			job_header: {
				en: 'Work experience',
				ro: 'Experiență de muncă'
			},
			job_experience: [
				{
					job_title: {
						en: 'Junior Software Development Engineer',
						ro: 'Junior Software Development Engineer'
					},
					employer: {
						en: 'Nokia',
						ro: 'Nokia'
					},
					location: {
						en: 'Timișoara',
						ro: 'Timișoara'
					},
					employment_period: {
						start: {
							en: '01-12-2019',
							ro: '01-12-2019'
						},
						end: {
							en: '15-09-2020',
							ro: '15-09-2020'
						}
					},
					job_description: {
						en:
							'As a Junior Web Development Engineer, I worked in a multicultural and diverse team, made up of Romanian and Finnish people. I helped in improving and maintaining an internal tool, used by the upper management for KPI(Key Performance Indicators) creation, management, and tracking. With my help, the internal tool got a new, modern UI, along with major improvements to the UX. I also fixed various bugs, and investigated performance issues.',
						ro:
							'Ca Junior Web Development Engineer, am lucrat într-o echipă multiculturală și diversă, formată din români și finlandezi. Am ajutat la îmbunătățirea și menținerea unui instrument intern, folosit de conducerea Nokia pentru crearea, gestionarea și urmărirea unor KPI (Key Performance Indicators). Cu ajutorul meu, instrumentul intern a obținut un UI modern si nou, împreună cu îmbunătățiri majore la UX. De asemenea, am remediat diverse erori și am investigat probleme de performanță.'
					},
					used_technologies: {
						en: 'C#(.NET), JavaScript(jQuery), CSS(Bootstrap 3), Azure, SQL',
						ro: 'C#(.NET), JavaScript(jQuery), CSS(Bootstrap 3), Azure, SQL'
					}
				},
				{
					job_title: {
						en: 'Full Stack Developer',
						ro: 'Full Stack Developer'
					},
					employer: {
						en: 'SmartValue Services',
						ro: 'SmartValue Services'
					},
					location: {
						en: 'Timișoara',
						ro: 'Timișoara'
					},
					employment_period: {
						start: {
							en: '15-09-2020',
							ro: '15-09-2020'
						},
						end: {
							en: '05-08-2021',
							ro: '05-08-2021'
						}
					},
					job_description: {
						en:
							'As a Full Stack Web Developer, I helped develop new features for internal tools used by Newpharma, the largest Belgian online pharmacy. As such, I developed my communication skills trough interacting with our Belgian clients. I developed tools used for customer support, order refunding, warehouse management, pharmacy management, as well as internal frameworks and libraries, such as our internal API library. I also helped reviewing code for my peers.',
						ro:
							'În calitate de dezvoltator web Full Stack, am contribuit la dezvoltarea de noi funcții pentru instrumentele interne utilizate de Newpharma, cea mai mare farmacie online belgiană. Ca atare, mi-am dezvoltat abilitățile de comunicare prin interacțiunea cu clienții noștri belgieni. Am dezvoltat instrumente utilizate pentru asistența clienților, rambursarea comenzilor, gestionarea stocului depozitelor, stocului farmaciilor, precum și framework-uri și biblioteci interne, cum ar fi framework-ul nostru intern de PHP, sau biblioteca noastră de API internă. De asemenea, am ajutat la code review-uri.'
					},
					used_technologies: {
						en:
							'PHP(vanilla and CORE - our internal framework), SQL(MySQL), JavaScript(vanilla JS and jQuery, Handlebars)',
						ro:
							'PHP(vanilla și CORE - framework-ul nostru intern), SQL(MySQL), JavaScript(vanilla JS și jQuery, Handlebars)'
					}
				},
				{
					job_title: {
						en: 'Full Stack Developer',
						ro: 'Full Stack Developer'
					},
					employer: {
						en: 'UnifiedPost',
						ro: 'UnifiedPost'
					},
					location: {
						en: 'Timișoara',
						ro: 'Timișoara'
					},
					employment_period: {
						start: {
							en: '23-08-2020',
							ro: '23-08-2020'
						},
						end: {
							en: 'present',
							ro: 'prezent'
						}
					},
					job_description: {
						en:
							"At UnifiedPost, we are developing a rapidly growing SaaS, thats is handling all aspects of payments and invoices for a certain enterprise. As a Full Stack Developer, I've been responsible for developing various internal API and features, including UI/UX changes.",
						ro:
							'La UnifiedPost, dezvoltăm un SaaS în creștere rapidă, care gestionează toate aspectele legate de plăți și facturi pentru o anumită întreprindere. În calitate de dezvoltator Full Stack, am fost responsabil pentru dezvoltarea diferitelor API și caracteristici interne, inclusiv modificări UI / UX.'
					},
					used_technologies: {
						en: 'Ruby, Rails, Angular, TypeScript',
						ro: 'Ruby, Rails, Angular, TypeScript'
					}
				}
			]
		},
		projects: {
			header: {
				en: 'My projects',
				ro: 'Proiectele mele'
			},
			project: [
				{
					title: {
						en: "Bachelor's project - educativ.io",
						ro: 'Proiect de diploma - educativ-io'
					},
					description: {
						en:
							"educativ.io was my Bachelor's Project. Initially, it was envisioned as an online mentoring platform, but it evolved over time as a full fledged eLearning platform, that allows users to search and view various lessons over various topics. It also allows users to add and manage their own lessons using an integrated Markdown editor.",
						ro:
							'educativ.io a fost proiectul meu de licență. Inițial, a fost conceput ca o platformă de mentorat online, dar a evoluat in timp ca o platformă completă de eLearning, care permite utilizatorilor să caute și să vizualizeze diverse lecții pe diferite teme. Aceasta permite, de asemenea, utilizatorilor să adauge și să gestioneze propriile lecții folosind un editor Markdown integrat.'
					},
					used_technologies: {
						en: 'Svelte, NodeJS, Express, MongoDB, Puppetter, Heroku, BulmaCSS',
						ro: 'Svelte, NodeJS, Express, MongoDB, Puppetter, Heroku, BulmaCSS'
					},
					status: {
						en: 'Completed',
						ro: 'Complet'
					},
					github_link: 'https://github.com/PCRinus/educativ-io',
					website_link: 'https://educativ-io.herokuapp.com/'
				},
				{
					title: {
						en: 'Personal Website V1',
						ro: 'Website Personal V1'
					},
					description: {
						en:
							'This was the first iteration of my personal website. It was built while employed at my first job, and was a playground for a myriad of ideas.',
						ro:
							'Aceasta a fost prima iterație a site-ului meu personal. A fost construit când am fost angajat la primul meu loc de muncă și a fost un loc de joacă pentru o multitudine de idei.'
					},
					used_technologies: {
						en: 'HTML, CSS(Bootstrap 4), JavaScript(jQuery), Netlify',
						ro: 'HTML, CSS(Bootstrap 4), JavaScript(jQuery), Netlify'
					},
					status: {
						en: 'Completed',
						ro: 'Complet'
					},
					github_link: 'https://github.com/PCRinus/PersonalWebsite',
					website_link: 'https://www.mirceacasapu.com/'
				},
				{
					title: {
						en: 'Personal Webiste V2',
						ro: 'Website Personal V2'
					},
					description: {
						en:
							'You are looking at it right now. It was made to be easier to expand with new content, and to learn new technologies. It will also be a sandbox for new ideas.',
						ro:
							'Te uiți la acest proiect chiar acum. A fost făcut să fie mai ușor să fie extins cu conținut nou și să învaț noi tehnologii. De asemenea, va fii un nou loc de joaca pentru a testa noi idei.'
					},
					used_technologies: {
						en: 'Svelte(SvelteKit), Tailwind CSS, Netlify',
						ro: 'Svelte(SvelteKit), Tailwind CSS, Netlify'
					},
					status: {
						en: 'In maintanance',
						ro: 'In mentenanta'
					},
					github_link: 'https://github.com/PCRinus/personal-webiste-V2',
					website_link: 'https://mirceacasapu.com/'
				},
				{
					title: {
						en: 'GW2 Discord Bot',
						ro: 'GW2 Discord Bot'
					},
					description: {
						en:
							'A Discord bot that connects to the Guild Wars 2 API, using a user generated API key, that can show a player relevant data, including stats about achievements, inventory, and current quests.',
						ro:
							'Un bot pentru Discord care se conectează la API-ul Guild Wars 2, folosind o cheie de API generata de utilizator, pentru a arăta unui jucător date relevante, inclusiv statistici despre trofee, inventar și misiuni curente.'
					},
					used_technologies: {
						en: 'JavaScript, DiscordJS',
						ro: 'JavaScript, DiscordJS'
					},
					status: {
						en: 'In development',
						ro: 'In dezvoltare'
					},
					github_link: 'https://github.com/PCRinus/GW2-discord-bot',
					website_link: ''
				},
				{
					title: {
						en: 'Covid Certificate Generator',
						ro: 'Generator de adeverinţe de Covid'
					},
					description: {
						en:
							'This is an app that generates COVID certificates, for being able to travel outside, during restrictions in Romania. It takes user input, and outputs a PDF with all of the necessary data.',
						ro:
							'Aceasta este o aplicație care generează certificate COVID, pentru a putea călători în afara, în timpul restricțiilor din România. Este nevoie de intrarea utilizatorului și de a transmite un PDF cu toate datele necesare.'
					},
					used_technologies: {
						en: 'Ruby, Rails, Angular, Heroku',
						ro: 'Ruby, Rails, Angular, Heroku'
					},
					status: {
						en: 'In development',
						ro: 'In dezvoltare'
					},
					github_link: 'https://github.com/PCRinus/adeverinte-covid',
					website_link: ''
				}
			]
		},
		contact: {
			form_header: {
				en: 'Get in touch 👋🏼 for work collaboration or any other questions.',
				ro: 'Contactează-mă 👋🏼 pentru colaborări, sau pentru orice altă întrebare.'
			},
			form_label_name: {
				en: 'Name',
				ro: 'Nume'
			},
			form_label_email: 'Email',
			form_label_message: {
				en: 'Message',
				ro: 'Mesaj'
			},
			form_submit_button: {
				en: 'Submit',
				ro: 'Trimite'
			}
		},
		form_success: {
			header: {
				en: 'Form submitted',
				ro: 'Formularul a fost trimis'
			},
			thanks: {
				en: 'Thank you for sending me a message',
				ro: 'Mulțumesc că mi-ai trimis un mesaj'
			},
			subheader: {
				en: 'I will get back to you as soon as possible.',
				ro: 'Iți voi răspunde cât mai repede posibil.'
			},
			reach_out: {
				en: 'Reach out on LinkedIn as well',
				ro: 'Contaceaza-mă și pe LinkedIn'
			}
		},
		error: {
			error_message: {
				en: 'Page not found! Sorry for the inconvenience 🙏🏻',
				ro: 'Pagina nu a fost găsită. Ne pare rău! 🙏🏻'
			}
		}
	}
};
