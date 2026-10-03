import type { ProfileConfig } from "../types/config";
import { Icon } from 'astro-icon/components';


// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/kurapika.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Ricardo Stumm",
	bio: "Prazer em conhecê-los! Sou um entusiasta de tecnologia e apaixonado pelo conhecimento.",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 50, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Anilist",
			icon: "anilist",
			url: "https://anilist.co/user/rickos/",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/rick-os",
		},
		{
			name: "Spotify",
			icon: "spotify",
			url: "https://open.spotify.com/user/214c4kpsi4lt6u5hkin2rncia?si=f886f25e265647f2",
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.com/users/479027737085083663",
		},
    {
      name: "Steam",
      icon: "steam",
      url: "https://steamcommunity.com/profiles/76561199062612429/",
    },
	],
};
