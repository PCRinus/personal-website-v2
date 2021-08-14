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
				en: 'Created with ❤️ and ☕ by Casapu Mircea',
				ro: 'Creat cu ❤️ și ☕ de Casapu Mircea'
			}
		}
	},
	pages: {
		index: {
			hero_greeting: {
				en: 'Hey! I am Mircea. I build web applications that run across platforms and devices!',
				ro:
					'Salut! Numele meu e Mircea. Construiesc aplicații web ce rulează pe diverse platforme și dispozitive!'
			}
		},
		experiences: {
			education_header: {
				en: 'Education',
				ro: 'Educație'
			},
			job_header: {
				en: 'Work experience',
				ro: 'Experiență de muncă'
			},
			education_experience: [
				{
					institiution: {
						en: 'Polytechnic University of Timisoara - UPT',
						ro: 'Universitatea Politehnică din Timișoara - UPT'
					},
					diploma: {
						en: "Bachelor's of Engineering - BEng",
						ro: 'Diplomă de inginer'
					},
					period: {
						start: '01-09-2017',
						end: '01-07-2021'
					},
					description: {
						en: 'Elit cillum nisi et consequat in veniam qui culpa labore.',
						ro: 'Est voluptate nulla anim ipsum et nisi nisi.'
					}
				}
			],
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
							'Reprehenderit magna officia culpa aliquip officia culpa cupidatat ad fugiat reprehenderit.',
						ro: 'Ullamco in occaecat dolor culpa officia quis.'
					},
					used_technologies: {
						en: 'Magna commodo deserunt laborum magna ea cupidatat dolor commodo anim ad.',
						ro: 'Et ad et et culpa cupidatat in Lorem in voluptate sit dolore anim amet.'
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
						en: 'HTML, CSS(Bootstrap4 4), JavaScript(jQuery), Netlify',
						ro: 'HTML, CSS(Bootstrap4 4), JavaScript(jQuery), Netlify'
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
					github_link: 'https://github.com/PCRinus/personal-webiste-V2',
					website_link: 'no link available yet'
				}
			]
		},
		contact: {
			form_header: {
				en: 'Get in touch 👋 for work collaboration or any other questions.',
				ro: 'Contactează-mă 👋 pentru colaborări, sau pentru orice altă întrebare.'
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
		}
	}
};
