import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "Foi mal pela falta de posts!", // Título do anúncio, default: announcement
	content:
		"Infelizmente a faculdade tem exigido quase 100% do meu tempo, então o blog ficou meio de lado, assim que eu conseguir trarei mais posts pra cá.", // anúncio em si
	closable: true, // se pode fechar
	link: {
		enable: false, // se tem link
		text: "Visitar", // texto do link
		url: "https://www.youtube.com/channel/UC_BT94MgdoTjLSHCnZATlig", // url
		external: false, // abrir em outra página?
	},
};
