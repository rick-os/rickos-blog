import Key from "../i18nKey";
import type { Translation } from "../translation";

export const pt_BR: Translation = {
	[Key.home]: "Início",
	[Key.about]: "Sobre",
	[Key.archive]: "Arquivo",
	[Key.search]: "Buscar",
	[Key.other]: "Outro",

	// Navigation bar titles
	[Key.navLinks]: "Links",
	[Key.navMy]: "Eu",
	[Key.navAbout]: "Sobre",
	[Key.navOthers]: "Outros",

	[Key.tags]: "Tags",
	[Key.categories]: "Categorias",
	[Key.recentPosts]: "Posts Recentes",
	[Key.postList]: "Lista de Posts",
	[Key.tableOfContents]: "Sumário",
	[Key.tocEmpty]: "Sem sumário",

	// Announcement
	[Key.announcement]: "Aviso",
	[Key.announcementClose]: "Fechar",

	[Key.comments]: "Comentários",
	[Key.friends]: "Amigos",
	[Key.friendsSubtitle]: "Descubra mais sites incríveis",
	[Key.friendsSearchPlaceholder]: "Buscar nome ou descrição do amigo...",
	[Key.friendsFilterAll]: "Todos",
	[Key.friendsNoResults]: "Nenhum amigo encontrado",
	[Key.friendsVisit]: "Visitar",
	[Key.friendsCopyLink]: "Copiar Link",
	[Key.friendsCopySuccess]: "Copiado",
	[Key.friendsTags]: "Tags",
	[Key.untitled]: "Sem título",
	[Key.uncategorized]: "Sem categoria",
	[Key.noTags]: "Sem tags",

	[Key.wordCount]: "palavra",
	[Key.wordsCount]: "palavras",
	[Key.minuteCount]: "minuto",
	[Key.minutesCount]: "minutos",
	[Key.postCount]: "post",
	[Key.postsCount]: "posts",

	[Key.themeColor]: "Cor do Tema",

	[Key.lightMode]: "Claro",
	[Key.darkMode]: "Escuro",
	[Key.systemMode]: "Sistema",

	[Key.more]: "Mais",

	[Key.author]: "Autor",
	[Key.publishedAt]: "Publicado em",
	[Key.license]: "Licença",
	[Key.anime]: "Anime",
	[Key.diary]: "Diário",

	// Anime Page
	[Key.animeTitle]: "Minha Lista de Animes",
	[Key.animeSubtitle]: "Registro da minha jornada com animes",
	[Key.animeStatusWatching]: "Assistindo",
	[Key.animeStatusCompleted]: "Completo",
	[Key.animeStatusPlanned]: "Planejado",
	[Key.animeStatusOnHold]: "Em espera",
	[Key.animeStatusDropped]: "Abandonado",
	[Key.animeFilterAll]: "Todos",
	[Key.animeYear]: "Ano",
	[Key.animeStudio]: "Estúdio",
	[Key.animeEmpty]: "Nenhum dado de anime disponível",
	[Key.animeEmptyBangumi]:
		"Verifique a configuração do Bangumi ou a conexão de rede",
	[Key.animeEmptyBilibili]:
		"Verifique a configuração do Bilibili ou a conexão de rede",
	[Key.animeEmptyLocal]:
		"Adicione informações de anime no arquivo src/data/anime.ts",
	[Key.animeConfigBilibili]:
		"Defina seu vmid do Bilibili no arquivo src/config/siteConfig.ts",
	[Key.animeConfigBangumi]:
		"Defina seu userId do Bangumi no arquivo src/config/siteConfig.ts",

	// Diary Page
	[Key.diarySubtitle]:
		"Compartilhando a vida, a qualquer hora, em qualquer lugar",
	[Key.diaryNoResults]: "Nenhum momento encontrado",
	[Key.diaryCount]: "registros",

	[Key.diaryTips]: "Mostrando apenas os últimos 30 registros do diário",
	[Key.diaryMinutesAgo]: "minutos atrás",
	[Key.diaryHoursAgo]: "horas atrás",
	[Key.diaryDaysAgo]: "dias atrás",

	// 404 Page
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "Página Não Encontrada",
	[Key.notFoundDescription]:
		"Desculpe, a página que você acessou não existe ou foi movida.",
	[Key.backToHome]: "Voltar ao Início",

	// Music Player
	[Key.musicPlayer]: "Player de Música",
	[Key.musicPlayerShow]: "Mostrar Player de Música",
	[Key.musicPlayerHide]: "Ocultar Player de Música",
	[Key.musicPlayerExpand]: "Expandir Player de Música",
	[Key.musicPlayerCollapse]: "Recolher Player de Música",
	[Key.musicPlayerPause]: "Pausar",
	[Key.musicPlayerPlay]: "Reproduzir",
	[Key.musicPlayerPrevious]: "Anterior",
	[Key.musicPlayerNext]: "Próxima",
	[Key.musicPlayerShuffle]: "Aleatório",
	[Key.musicPlayerRepeat]: "Repetir Tudo",
	[Key.musicPlayerRepeatOne]: "Repetir Uma",
	[Key.musicPlayerVolume]: "Controle de Volume",
	[Key.musicPlayerProgress]: "Progresso da Reprodução",
	[Key.musicPlayerCover]: "Capa",
	[Key.musicPlayerPlaylist]: "Playlist",
	[Key.musicPlayerLoading]: "Carregando...",
	[Key.musicPlayerErrorPlaylist]: "Falha ao buscar playlist",
	[Key.musicPlayerErrorSong]:
		"Falha ao carregar a música atual, tentando a próxima",
	[Key.musicPlayerErrorEmpty]: "Nenhuma música disponível na playlist",
	[Key.unknownSong]: "Música Desconhecida",
	[Key.unknownArtist]: "Artista Desconhecido",

	// Albums Page
	[Key.albums]: "Álbuns",
	[Key.albumsSubtitle]: "Registre momentos bonitos da vida",
	[Key.albumsEmpty]: "Sem conteúdo",
	[Key.albumsEmptyDesc]:
		"Nenhum álbum foi criado ainda. Vá adicionar boas lembranças!",
	[Key.albumsBackToList]: "Voltar aos Álbuns",

	// Devices Page
	[Key.devices]: "Meus Utensílios",
	[Key.devicesSubtitle]: "Aqui estão os dispositivos que uso no dia a dia",
	[Key.devicesViewDetails]: "Ver Detalhes",
	[Key.albumsPhotoCount]: "foto",
	[Key.albumsPhotosCount]: "fotos",
	[Key.albumsFilterAll]: "Todos",
	[Key.albumsNoResults]: "Nenhum álbum encontrado",

	// Projects Page
	[Key.projects]: "Projetos",
	[Key.projectsSubtitle]: "Alguns projetos que desenvolvi.",
	[Key.projectsAll]: "Todos",
	[Key.projectsWeb]: "Aplicações Web",
	[Key.projectsMobile]: "Aplicações Mobile",
	[Key.projectsDesktop]: "Aplicações Desktop",
	[Key.projectsOther]: "Outros",
	[Key.projectTechStack]: "Tecnologias",
	[Key.projectLiveDemo]: "Demo ao Vivo",
	[Key.projectSourceCode]: "Código Fonte",
	[Key.projectDescription]: "Descrição do Projeto",
	[Key.projectStatus]: "Status",
	[Key.projectStatusCompleted]: "Concluído",
	[Key.projectStatusInProgress]: "Em Andamento",
	[Key.projectStatusPlanned]: "Planejado",
	[Key.projectsTotal]: "Total de Projetos",
	[Key.projectsCompleted]: "Concluídos",
	[Key.projectsInProgress]: "Em Andamento",
	[Key.projectsTechStack]: "Estatísticas de Tecnologias",
	[Key.projectsFeatured]: "Projetos em Destaque",
	[Key.projectsPlanned]: "Planejados",
	[Key.projectsDemo]: "Demo ao Vivo",
	[Key.projectsSource]: "Código Fonte",
	[Key.projectsVisit]: "Visitar Projeto",
	[Key.projectsGitHub]: "GitHub",

	// RSS Page
	[Key.rss]: "Feed RSS",
	[Key.rssDescription]: "Assine para receber as últimas atualizações",
	[Key.rssSubtitle]:
		"Assine via RSS para receber os últimos artigos e atualizações imediatamente",
	[Key.rssLink]: "Link RSS",
	[Key.rssCopyToReader]: "Copie o link para o seu leitor RSS",
	[Key.rssCopyLink]: "Copiar",
	[Key.rssLatestPosts]: "Posts Recentes",
	[Key.rssWhatIsRSS]: "O que é RSS?",
	[Key.rssWhatIsRSSDescription]:
		"RSS (Really Simple Syndication) é um formato padrão para publicar conteúdo atualizado com frequência. Com o RSS, você pode:",
	[Key.rssBenefit1]:
		"Receber o conteúdo mais recente do site sem precisar visitá-lo manualmente",
	[Key.rssBenefit2]: "Gerenciar assinaturas de vários sites em um só lugar",
	[Key.rssBenefit3]: "Não perder atualizações e artigos importantes",
	[Key.rssBenefit4]: "Aproveitar uma leitura limpa e sem anúncios",
	[Key.rssHowToUse]:
		"Recomenda-se usar o Feedly, Inoreader ou outro leitor de RSS para assinar este site.",
	[Key.rssCopied]: "Link RSS copiado para a área de transferência!",
	[Key.rssCopyFailed]: "Falha ao copiar, copie o link manualmente",

	// Atom Page
	[Key.atom]: "Feed Atom",
	[Key.atomDescription]: "Assine para receber as últimas atualizações",
	[Key.atomSubtitle]:
		"Assine via Atom para receber os últimos artigos e atualizações imediatamente",
	[Key.atomLink]: "Link Atom",
	[Key.atomCopyToReader]: "Copie o link para o seu leitor Atom",
	[Key.atomCopyLink]: "Copiar",
	[Key.atomLatestPosts]: "Posts Recentes",
	[Key.atomWhatIsAtom]: "O que é Atom?",
	[Key.atomWhatIsAtomDescription]:
		"Atom (Atom Syndication Format) é um padrão baseado em XML para descrever feeds e seus itens. Com o Atom, você pode:",
	[Key.atomBenefit1]:
		"Receber o conteúdo mais recente do site sem precisar visitá-lo manualmente",
	[Key.atomBenefit2]: "Gerenciar assinaturas de vários sites em um só lugar",
	[Key.atomBenefit3]: "Não perder atualizações e artigos importantes",
	[Key.atomBenefit4]: "Aproveitar uma leitura limpa e sem anúncios",
	[Key.atomHowToUse]:
		"Recomenda-se usar o Feedly, Inoreader ou outro leitor de Atom para assinar este site.",
	[Key.atomCopied]: "Link Atom copiado para a área de transferência!",
	[Key.atomCopyFailed]: "Falha ao copiar, copie o link manualmente",

	// Wallpaper mode
	[Key.wallpaperBanner]: "Modo Banner",
	[Key.wallpaperFullscreen]: "Modo Tela Cheia",
	[Key.wallpaperOverlay]: "Modo Sobreposição",
	[Key.wallpaperNone]: "Ocultar Wallpaper",

	// Settings panel
	[Key.settingsPanel]: "Configurações",
	[Key.wallpaperSettings]: "Wallpaper",
	[Key.overlaySettings]: "Efeitos do Wallpaper",
	[Key.overlayOpacity]: "Opacidade do Wallpaper",
	[Key.overlayBlur]: "Desfoque do Fundo",
	[Key.overlayCardOpacity]: "Opacidade do Card",
	[Key.fullscreenOpacity]: "Opacidade do Wallpaper",
	[Key.fullscreenBlur]: "Desfoque do Fundo",
	[Key.wavesAnimation]: "Animação de Ondas",
	[Key.bannerTitle]: "Título do Banner",
	[Key.bannerCarousel]: "Carrossel do Banner",
	[Key.sakuraEffect]: "Efeito Sakura",
	[Key.effectsSettings]: "Efeitos",
	[Key.postListLayout]: "Layout dos Posts",
	[Key.postListLayoutList]: "Lista",
	[Key.postListLayoutGrid]: "Grade",
	[Key.resetAll]: "Redefinir Tudo",
	[Key.settingsThemeColor]: "Cor do Tema",
	[Key.settingsWallpaper]: "Wallpaper",
	[Key.settingsWallpaperEffects]: "Efeitos do Wallpaper",
	[Key.settingsBanner]: "Opções do Banner",
	[Key.settingsEffects]: "Efeitos",
	[Key.settingsLayout]: "Layout",

	// Skills Page
	[Key.skills]: "Habilidades",
	[Key.skillsSubtitle]: "Minhas habilidades técnicas e áreas de conhecimento",
	[Key.skillsFrontend]: "Desenvolvimento Frontend",
	[Key.skillsBackend]: "Desenvolvimento Backend",
	[Key.skillsDatabase]: "Banco de Dados",
	[Key.skillsTools]: "Ferramentas de Desenvolvimento",
	[Key.skillsOther]: "Outras Habilidades",
	[Key.skillLevel]: "Proficiência",
	[Key.skillLevelBeginner]: "Iniciante",
	[Key.skillLevelIntermediate]: "Intermediário",
	[Key.skillLevelAdvanced]: "Avançado",
	[Key.skillLevelExpert]: "Especialista",
	[Key.skillExperience]: "Experiência",
	[Key.skillYears]: "anos",
	[Key.skillMonths]: "meses",
	[Key.skillsTotal]: "Total de Habilidades",
	[Key.skillsExpert]: "Nível Especialista",
	[Key.skillsAdvanced]: "Avançado",
	[Key.skillsIntermediate]: "Intermediário",
	[Key.skillsBeginner]: "Iniciante",
	[Key.skillsAdvancedTitle]: "Habilidades Profissionais",
	[Key.skillsProjects]: "Projetos Relacionados",
	[Key.skillsDistribution]: "Distribuição de Habilidades",
	[Key.skillsByLevel]: "Por Nível",
	[Key.skillsByCategory]: "Por Categoria",
	[Key.noData]: "Sem dados",

	// AI Tools (About page)
	[Key.aiTools]: "Ferramentas de IA que Uso",
	[Key.aiToolsSubtitle]:
		"Assistentes e serviços de IA que fazem parte do meu fluxo de trabalho diário",
	[Key.aiToolsCategoryChat]: "Assistentes de Chat",
	[Key.aiToolsCategoryCoding]: "Programação",
	[Key.aiToolsCategoryImage]: "Imagem",
	[Key.aiToolsCategoryAudio]: "Áudio",
	[Key.aiToolsCategoryVideo]: "Vídeo",
	[Key.aiToolsCategoryWriting]: "Escrita / Notas",
	[Key.aiToolsCategorySearch]: "Busca / Pesquisa",
	[Key.aiToolsCategoryOther]: "Outros",
	[Key.aiToolsFrequencyDaily]: "Diário",
	[Key.aiToolsFrequencyWeekly]: "Semanal",
	[Key.aiToolsFrequencyOccasional]: "Ocasional",
	[Key.aiToolsFrequencyExperimental]: "Experimental",
	[Key.aiToolsUsage]: "Uso",
	[Key.aiToolsVisit]: "Visitar",
	[Key.aiToolsNoResults]: "Nenhuma ferramenta de IA encontrada",

	// Timeline Page
	[Key.timeline]: "Linha do Tempo",
	[Key.timelineSubtitle]: "Minha jornada de crescimento e marcos importantes",
	[Key.timelineEducation]: "Educação",
	[Key.timelineWork]: "Experiência Profissional",
	[Key.timelineProject]: "Experiência em Projetos",
	[Key.timelineAchievement]: "Conquistas",
	[Key.timelinePresent]: "Atual",
	[Key.timelineLocation]: "Localização",
	[Key.timelineDescription]: "Descrição Detalhada",
	[Key.timelineMonths]: "meses",
	[Key.timelineYears]: "anos",
	[Key.timelineTotal]: "Total",
	[Key.timelineProjects]: "Projetos",
	[Key.timelineExperience]: "Experiência Profissional",
	[Key.timelineCurrent]: "Status Atual",
	[Key.timelineHistory]: "Histórico",
	[Key.timelineAchievements]: "Conquistas",
	[Key.timelineStartDate]: "Data de Início",
	[Key.timelineDuration]: "Duração",

	// Password Protection
	[Key.passwordProtected]: "Protegido por Senha",
	[Key.passwordProtectedTitle]: "Este conteúdo é protegido por senha",
	[Key.passwordProtectedDescription]:
		"Digite a senha para ver o conteúdo protegido",
	[Key.postEncrypted]: "Criptografado",
	[Key.postEncryptedMessage]: "Este post está criptografado",
	[Key.passwordPlaceholder]: "Digite a senha",
	[Key.passwordUnlock]: "Desbloquear",
	[Key.passwordUnlocking]: "Desbloqueando...",
	[Key.passwordIncorrect]: "Senha incorreta, tente novamente",
	[Key.passwordDecryptError]:
		"Falha na descriptografia, verifique se a senha está correta",
	[Key.passwordRequired]: "Digite a senha",
	[Key.passwordVerifying]: "Verificando...",
	[Key.passwordDecryptFailed]: "Falha na descriptografia, verifique a senha",
	[Key.passwordDecryptRetry]: "Falha na descriptografia, tente novamente",
	[Key.passwordUnlockButton]: "Desbloquear",
	[Key.copyFailed]: "Falha ao copiar:",
	[Key.syntaxHighlightFailed]: "Falha no destaque de sintaxe:",
	[Key.autoSyntaxHighlightFailed]:
		"O destaque de sintaxe automático também falhou:",
	[Key.decryptionError]: "Ocorreu um erro durante a descriptografia:",
	[Key.passwordHint]: "Dica",

	// Last Modified Time Card
	[Key.lastModifiedPrefix]: "Tempo desde a última edição: ",
	[Key.lastModifiedOutdated]: "Algumas informações podem estar desatualizadas",
	[Key.year]: "a",
	[Key.month]: "m",
	[Key.day]: "d",
	[Key.hour]: "h",
	[Key.minute]: "min",
	[Key.second]: "s",

	// Site Stats
	[Key.siteStats]: "Estatísticas do Site",
	[Key.siteStatsPostCount]: "Posts",
	[Key.siteStatsCategoryCount]: "Categorias",
	[Key.siteStatsTagCount]: "Tags",
	[Key.siteStatsTotalWords]: "Total de Palavras",
	[Key.siteStatsRunningDays]: "Dias no Ar",
	[Key.siteStatsLastUpdate]: "Última Atividade",
	[Key.siteStatsDaysAgo]: "{days} dias atrás",
	[Key.siteStatsDays]: "{days} dias",

	// Calendar Component
	[Key.calendarSunday]: "Dom",
	[Key.calendarMonday]: "Seg",
	[Key.calendarTuesday]: "Ter",
	[Key.calendarWednesday]: "Qua",
	[Key.calendarThursday]: "Qui",
	[Key.calendarFriday]: "Sex",
	[Key.calendarSaturday]: "Sáb",
	[Key.calendarJanuary]: "Jan",
	[Key.calendarFebruary]: "Fev",
	[Key.calendarMarch]: "Mar",
	[Key.calendarApril]: "Abr",
	[Key.calendarMay]: "Mai",
	[Key.calendarJune]: "Jun",
	[Key.calendarJuly]: "Jul",
	[Key.calendarAugust]: "Ago",
	[Key.calendarSeptember]: "Set",
	[Key.calendarOctober]: "Out",
	[Key.calendarNovember]: "Nov",
	[Key.calendarDecember]: "Dez",

	// Share Functionality
	[Key.shareArticle]: "Compartilhar",
	[Key.generatingPoster]: "Gerando pôster...",
	[Key.copied]: "Copiado",
	[Key.copyLink]: "Copiar Link",
	[Key.savePoster]: "Salvar Pôster",
	[Key.scanToRead]: "Fonte",
	[Key.shareOnSocial]: "Compartilhar",
	[Key.shareOnSocialDescription]:
		"Se você gostou deste artigo, compartilhe com outras pessoas!",

	// Profile Stats
	[Key.profileStatsLoading]: "Carregando estatísticas...",
	[Key.profileStatsPageViews]: "Visualizações",
	[Key.profileStatsVisits]: "Visitas",
	[Key.profileStatsUnavailable]: "Estatísticas indisponíveis",

	// Page Views Stats
	[Key.pageViewsLoading]: "Carregando estatísticas...",
	[Key.pageViewsUnavailable]: "Estatísticas indisponíveis",

	// Layout Switch Button
	[Key.switchToGridMode]: "Mudar para Modo Grade",
	[Key.switchToListMode]: "Mudar para Modo Lista",

	// Related Posts & Random Posts
	[Key.relatedPosts]: "Posts Relacionados",
	[Key.randomPosts]: "Posts Aleatórios",
	[Key.smartRecommend]: "Inteligente",
	[Key.randomRecommend]: "Aleatório",
};
