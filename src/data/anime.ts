// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "Orb: On the Movements of the Earth",
		status: "completed",
		rating: 10,
		cover: "/assets/anime/orb.webp",
		description: "Move... The World",
		episodes: "25 episodes",
		year: "2024/2025",
		genre: [
			"Histórico",
			"Mistério",
			"Ficção Científica",
			"Filosofia",
			"Astronomia",
		],
		studio: "Madhouse",
		link: "https://anilist.co/anime/151514/Orb-On-the-Movements-of-the-Earth/",
		progress: 25,
		totalEpisodes: 25,
		startDate: "2026-06-09",
		endDate: "2026-06-12",
	},
	/*
	{
		title: "The Secret of the Magic Girl",
		status: "watching",
		rating: 9.0,
		cover: "/assets/anime/cmmn.webp",
		description: "Muli, Muli!",
		episodes: "12 episodes",
		year: "2024",
		genre: ["Daily life", "Healing", "Magic"],
		studio: "C2C",
		link: "https://www.bilibili.com/bangumi/media/md26625039",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2025-07",
		endDate: "2025-10",
	},
*/
];

export default localAnimeList;
