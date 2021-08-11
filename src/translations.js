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
			header: {
				en: 'Work experience',
				ro: 'Experiență de muncă'
			},
			experience: [
				{
					job_title: {
						en: 'Junior Software development Engineer',
						ro: 'Junior Software development Engineer'
					},
					employer: {
						en: 'Nokia',
						ro: 'Nokia'
					},
					location: {
						en: 'Timisoara',
						ro: 'Timisoara'
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
						en: 'Magna consectetur pariatur magna fugiat deserunt velit laborum.',
						ro: 'Culpa pariatur qui proident irure do mollit.'
					},
					used_technologies: {
						en: '',
						ro: ''
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
						en: 'Nisi anim laboris consectetur laborum sit sunt labore.',
						ro: 'Irure et quis ea cupidatat tempor cupidatat non pariatur.'
					},
					used_technologies: {
						en: 'PHP, SQL(MySQL), JavaScript(vanilla JS and jQuery, Handlebars)',
						ro: 'PHP, SQL(MySQL), JavaScript(vanilla JS si jQuery, Handlebars)'
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
						ro: 'Proiect de diploma'
					},
					description: {
						en:
							"educativ.io was my Bachelor's Project. Initially, it was envisioned as an online mentoring platform, but it evolved over time as a full fledged eLearning platform, that allows users to search and view various lessons over various topics. It also allows users to add and manage their own lessons using an integrated Markdown editor.",
						ro:
							'educativ.io a fost proiectul meu de licență. Inițial, a fost concepută ca o platformă de mentorat online, dar a evoluat in timp ca o platformă completă de eLearning, care permite utilizatorilor să caute și să vizualizeze diverse lecții pe diferite teme. Aceasta permite, de asemenea, utilizatorilor să adauge și să gestioneze propriile lecții folosind un editor Markdown integrat.'
					},
					used_technologies: {
						en: '',
						ro: ''
					},
					github_link: 'https://github.com/PCRinus/educativ-io'
				},
				{
					title: {
						en: '',
						ro: ''
					},
					description: {
						en: '',
						ro: ''
					},
					used_technologies: {
						en: '',
						ro: ''
					},
					github_link: ''
				},
				{
					title: {
						en: '',
						ro: ''
					},
					description: {
						en: '',
						ro: ''
					},
					used_technologies: {
						en: '',
						ro: ''
					},
					github_link: ''
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
