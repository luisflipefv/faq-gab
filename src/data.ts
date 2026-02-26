import { FaqItem, Topic} from './types';

export const topics: Topic[] = [
  { id: 'todos', name: 'Todos os Tópicos', icon: 'Grid' },
  { id: 'acesso', name: 'Acesso e Permissões', icon: 'Key' },
  { id: 'computador', name: 'Computador', icon: 'Cpu' },
  { id: 'infraestrutura', name: 'Infraestrutura / Rede', icon: 'Server' },
  { id: 'software', name: 'Software', icon: 'Monitor' },
  { id: 'impressora', name: 'Impressora', icon: 'Printer' },
  { id: 'email', name: 'E-mail', icon: 'Mail' },
  { id: 'telefonia', name: 'Telefonia', icon: 'Phone' }
];


export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Como criar acesso a um novo usuário?',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a criação da conta, informando os dados do novo colaborador.',
    tip: 'Acessos de Rede - AD > Acesso - Conta de Rede - Criar',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=1855',
    topicIds: ['todos', 'acesso', 'software']
  },
  {
    id: '2',
    question: 'Como recuperar minha senha',
    answer: 'Acesse o portal ADSS para alterar a senha ou desbloquear sua conta',
    tip: 'Entre por esse link',
    tipLink: 'https://portaladss.aguiabranca.com.br/authorization.do',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '3',
    question: 'Meu computador está lento, o que fazer?',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a verificação do seu computador e a realização dos ajustes necessários. Caso o problema persista, o chamado será escalonado para a equipe de campo que atua na sua localidade.',
    tip: 'Micro-Informática - Manutenção & Serviços > Erros no Windows',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=148',
    topicIds: ['computador', 'todos']
  },
  {
    id: '4',
    question: 'Como configurar impressora de rede?',
    answer: 'Verifique o endereço IP nas configurações de rede da impressora, pois essa informação será necessária para a configuração. Em seguida, abra um chamado no SOS Águia Branca informando o endereço IP da impressora e o número do TeamViewer do seu computador.',
    tip: 'Micro-Informática - Manutenção & Serviços > Instalar Impressora',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=120',
    topicIds: ['impressora', 'todos']
  },
  {
    id: '5',
    question: 'Não consigo acessar a internet',
    answer: 'Verifique se o computador está conectado à rede GAB_Corporativo ou, se estiver em home office, à sua rede local. Reinicie o computador e tente novamente. Caso ainda não consiga acessar, abra um chamado pelo WhatsApp no número (27) 2125-1929 solicitando verificação de acesso à internet.',
    tip: 'Micro-Informática - Manutenção & Serviços > Erro de acesso à rede',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=423',
    topicIds: ['todos', 'infraestrutura']
  },
  {
    id: '6',
    question: 'Como solicitar instalação de software?',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a instalação do software homologado pela DTI.',
    tip: 'Micro-Informática - Manutenção & Serviços > Microsoft Windows Configurar',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=147',
    topicIds: ['todos', 'software']
  },
  {
    id: '7',
    question: 'Como abrir um chamado no Field Service?',
    answer: 'Você pode abrir um chamado pelo portal do SOS Águia Branca (https://sos.aguiabranca.com.br/) ou pelo WhatsApp, no número (27) 2125-1929. Em ambos os casos, informe que deseja atendimento da equipe de Field Service, se necessário.',
    tip: 'Dica: Forneça o máximo de detalhes possível para agilizar a resolução do seu chamado.',
    tipLink: 'https://sos.aguiabranca.com.br',
    topicIds: ['todos']
  },
  /* {
    id: '8',
    question: 'Telefone corporativo sem sinal, como resolver?',
    answer: 'Verifique se o aparelho está carregado e se o modo avião está desligado. Tente reiniciar o aparelho. Se o problema persistir, anote o número da linha e abra um chamado com o Field Service para análise da operadora.',
    tip: 'Dica: Se o problema persistir após reiniciar, verifique se o aparelho está dentro da cobertura da operadora.',
    topicIds: ['todos', 'telefonia']
  }, */
  {
    id: '9',
    question: 'Minha senha do Windows expirou, o que fazer?',
    answer: 'Conforme orientação da DTI, pressione as teclas Ctrl + Alt + Del e clique em Alterar senha. Caso sua senha já esteja expirada, ao iniciar o Windows o próprio sistema solicitará automaticamente a criação de uma nova senha.',
    tip: 'Caso ainda precise de ajuda, pode acessar o portal ADSS para alterar a senha ou desbloquear sua conta',
    tipLink: 'https://portaladss.aguiabranca.com.br/authorization.do',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '10',
    question: 'Como solicitar um novo computador?',
    answer: 'A aquisição de novos computadores é realizada diretamente pelo setor de Suprimentos. Procure o setor de Suprimentos da sua divisão para obter mais informações e realizar a solicitação.',
    topicIds: ['todos', 'computador']
  },
  {
    id: '11',
    question: 'Minha conta bloqueou o que eu faço?',
    answer: 'Acesse o portal ADSS para alterar a senha ou desbloquear sua conta',
    tipLink: 'https://portaladss.aguiabranca.com.br/authorization.do',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '12',
    question: 'Minha VPN não está conectando, me ajuda?',
    answer: 'Primeiro, verifique se o seu notebook está conectado à internet. Em seguida, abra o aplicativo Check Point VPN e insira suas credenciais. Caso ainda não consiga conectar, abra um chamado no SOS Águia Branca solicitando verificação e informando o erro apresentado.',
    tip: 'Micro-Informática - Manutenção & Serviços > Erros no Windows',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=148',
    topicIds: ['todos', 'acesso', 'infraestrutura'] 
  },
  {
    id: '13',
    question: 'Preciso transferir meus arquivos para outro computador',
    answer: 'Abra um chamado no SOS Águia Branca informando o número do TeamViewer das máquinas e identificando claramente qual é a máquina de origem e qual é a máquina de destino.',
    tip: 'Micro-Informática - Manutenção & Serviços > Backup e Restauração de Arquivos',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=116',
    topicIds: ['todos', 'computador', 'infraestrutura']
  },
  {
    id: '14',
    question: 'Como solicitar licença de office?',
    answer: 'As licenças do Office são tratadas diretamente pelo setor de Suprimentos, que realiza a solicitação e disponibiliza o registro necessário para que a DTI faça a instalação.',
    topicIds: ['todos', 'software', 'email']
  },
  {
    id: '15',
    question: 'Qual rede Wifi usar no celular?',
    answer: 'Em aparelhos celulares, utilize a rede Wi-Fi GAB-BYOD ou GAB-Corp. Em ambas, é necessário autenticar com seu login e senha de rede. Caso tenha alterado sua senha recentemente, esqueça a rede e conecte novamente utilizando a nova senha. Se o problema persistir, abra um chamado no SOS Águia Branca solicitando verificação do acesso Wi-Fi',
    tip: 'Micro-Informática - Manutenção & Serviços > Dúvidas em Smartphone/Tablet',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=125',
    topicIds: ['todos', 'infraestrutura']
  },
  {
    id: '16',
    question: 'O Vianuvem não está funcionando, o que faço?',
    answer: 'Para isso, abra um chamado no SOS Águia Branca, na aba ViaNuvem, solicitando verificação e informando o erro apresentado (ex.: erro ao logar, erro no sistema ou lentidão).',
    tip: 'Via Nuvem > Erro',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=715',  
    topicIds: ['todos', 'software', 'acesso']
  },
  {
    id: '17',
    question: 'Como funciona o procedimento de descarte de material(peças e computadores)',
    answer: 'Primeiro, abra um chamado no SOS Águia Branca solicitando a avaliação do equipamento. Será realizada uma análise e emitido um laudo técnico. Caso seja constatado que o equipamento não possui possibilidade de reparo, o descarte será realizado pela própria DTI, com a emissão do laudo técnico de descarte.',
    tip: 'Micro-Informática - Manutenção & Serviços > Solicitação de Laudo Técnico',
    tipLink:'https://sos.aguiabranca.com.br/cardapio/descricao?id=118',
    topicIds: ['todos', 'computador']
  },
  {
    id: '18',
    question: 'Recebi uma máquina nova e não sei o que fazer',
    answer: 'Primeiro, verifique se a máquina já possui a etiqueta de patrimônio. Em seguida, abra um chamado no SOS Águia Branca solicitando a instalação/configuração e encaminhe o equipamento ao laboratório, juntamente com a nota fiscal e a licença do Office.',
    tip: 'Micro-Informática - Manutenção & Serviços > Microsoft Windows Configurar',
    tipLink:'https://sos.aguiabranca.com.br/cardapio/descricao?id=147',
    topicIds: ['todos', 'computador']
  },
  {
    id: '19',
    question: 'Não estou conseguindo imprimir',
    answer: 'Verifique se, no momento da impressão, a impressora correta está selecionada e se ela está ligada e com o cabo de rede conectado. Caso esteja tudo correto e o problema persista, abra um chamado no SOS Águia Branca solicitando verificação e informando o erro apresentado ao imprimir.',
    tip: 'Micro-Informática - Manutenção & Serviços > Impressora com Erro',
    tipLink:'https://sos.aguiabranca.com.br/cardapio/descricao?id=118',
    topicIds: ['todos', 'impressora']
  },
  {
    id: '20', 
    question: 'Preciso formatar minha máquina, como faço?',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a formatação do seu computador. Uma equipe realizará uma avaliação para verificar se a formatação é realmente necessária.',
    tip: 'Hardware > Formatação',
    tipLink:'https://sos.aguiabranca.com.br/cardapio/descricao?id=5674',
    topicIds: ['todos', 'computador']
  },
  {
    id: '21',
    question: 'Preciso configurar/reconfigurar meu e-mail no aplicativo do celular',
    answer: 'Primeiro, certifique-se de que tem em seu celular instalado os aplicativos "Microsoft Authenticator", "Outlook" e VPN Capsule. Em seguida, traga seu celular para o laboratório para que possamos realizar a configuração presencialmente.',
    tip: 'Micro-Informática - Manutenção & Serviços > Dúvidas em Smartphone/Tablet',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=125',
    topicIds: ['todos', 'email']
  },
  {
    id: '22',
    question: 'Solicitar a troca de alguma peça do meu computador (teclado, tela, bateria, conector de fonte etc)',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a avaliação da peça defeituosa. A equipe realizará a análise e emitirá um laudo técnico. Com esse laudo, acione o setor de Suprimentos para a aquisição da nova peça, conforme especificado.',
    tip: 'Micro-Informática - Manutenção & Serviços > Solicitação de Laudo Técnico',
    tipLink:'https://sos.aguiabranca.com.br/cardapio/descricao?id=118',
    topicIds: ['todos', 'computador']
  },
  {
    id: '23',
    question: 'Solicitar a instalação da peça nova que foi comprada',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a instalação da peça e informando que o item já foi recebido e está disponível para instalação.',
    tip: 'Micro-Informática - Manutenção & Serviços > Montar/Instalar Micro-Computador',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=414',
    topicIds: ['todos', 'computador']
  },
  {
    id: '24',
    question: 'Preciso de um ramal next ip em minha máquina',
    answer: 'Abra um chamado solicitando o ramal e informando um ramal espelho de alguém da mesma equipe',
    tip: 'Sistemas > Ramal Next IP',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=121',
    topicIds: ['todos', 'software', 'telefonia'],

  },
  {
    id: '25',
    question: 'Como criar conta no aplicativo Loader Next IP para ligar pelo syonet',
    answer: 'O gestor da equipe deve solicitar a criação da conta e informar um ramal espelho',
    tip: 'Sistemas > Ramal Next IP',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=121',
    topicIds: ['todos', 'software', 'telefonia']
  },
  {
    id: '26',
    question: 'Como solicitar a instalação de um software específico?',
    answer: 'Softwares específicos que ainda não são utilizados pelo setor precisam passar pelo processo de homologação. Para isso, abra um chamado no SOS Águia Branca solicitando a homologação do software e, após a aprovação, abra um chamado  solicitando a instalação do software.',
    tip: 'Governança > Homologar Software',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=4526',
    topicIds: ['todos', 'software']
  },
  {
    id: '27',
    question: 'Como solicitar a instalação do Microsoft Teams?',
    answer: 'Geralmente, o Teams já está instalado no notebook. Utilize a barra de pesquisa do Windows e procure por Teams. Caso não esteja instalado, abra um chamado no SOS Águia Branca solicitando a instalação do Microsoft Teams, aplicativo da Microsoft.',
    tip: 'Micro-Informática - Manutenção & Serviços > Instalar Microsoft Office',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=143',
    topicIds: ['todos', 'software']
  },
  {
    id: '28',
    question: 'Como solicitar a instalação do Microsoft Office?',
    answer: 'Abra um chamado informando o número da licença do office que será instalado na máquina',
    tip: 'Micro-Informática - Manutenção & Serviços > Instalar Microsoft Office',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=143',
    topicIds: ['todos', 'software', 'email']
  },
  {
    id: '29',
    question: 'Bloqueei minha senha do SAP, o que eu faço?',
    answer: 'Abra um chamado no SOS solicitando o desbloqueio da sua senha na plataforma SAP',
    tip: 'SAP ACESSOS > Login - Alterar/ Desbloquear Senha',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=121',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '30',
    question: 'Estou com um colaborador novo, como eu solicito uma conta pra ele?',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a criação da conta, informando os dados do novo colaborador.',
    tip: 'Acessos de Rede - AD > Acesso - Conta de Rede - Criar',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=1855',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '31',
    question: 'Como solicitar a instalação do Microsoft Outlook?',
    answer: 'Primeiro, é necessário verificar se o seu computador já possui o Office instalado. Caso possua, será necessário apenas realizar a configuração. Para isso, abra um chamado no SOS Águia Branca solicitando a configuração do Outlook.',
    tip: 'Micro-Informática - Manutenção & Serviços > Instalar Microsoft Outlook',
    tipLink:'https://sos.aguiabranca.com.br/cardapio/descricao?id=146',
    topicIds: ['todos', 'software', 'email']
  },
  {
    id: '32',
    question: 'Meu e-mail travou/está lento',
    answer: 'Lentidões podem ocorrer ocasionalmente. Como primeira ação, reinicie o computador. Caso a lentidão persista, abra um chamado no SOS Águia Branca solicitando a verificação do Outlook.',
    tip: 'Micro-Informática - Manutenção & Serviços > Erro no Microsoft Outlook',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=145',
    topicIds: ['todos', 'email']
  },
  {
    id: '33',
    question: 'Minha senha expirou/esqueci minha senha. Pode resetar?',
    answer: 'Acesse o portal ADSS para alterar a senha ou desbloquear sua conta',
    tipLink: 'https://portaladss.aguiabranca.com.br/authorization.do',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '34',
    question: 'Como solicitar a troca do meu equipamento?',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a emissão de laudo técnico. O equipamento será avaliado e o laudo será enviado. Caso seja constatado que não há possibilidade de reparo, será necessário alinhar com sua gestão e com o setor de Suprimentos a aquisição de um novo equipamento.',
    tip: 'Micro-Informática - Manutenção & Serviços > Solicitação de Laudo Técnico',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=118',
    topicIds: ['todos', 'computador']
  },
  {
    id: '35',
    question: 'Troquei a senha e a internet parou do meu celular, pode me ajudar?',
    answer: 'Em seu celular, escolha a opção de esquecer a rede GAB-BYOD e em seguida tente conectar-se nela de novo. Será pedido um login, informe seu usuário com e a nova senha. Caso ainda precise de ajuda, abra um chamado.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  /* {
    id: '36',
    question: 'A internet caiu / não conecta no Wi-Fi',
    answer: 'Abra um chamado no Field Service informando que a internet caiu ou não conecta no Wi-Fi. A equipe de TI avaliará a solicitação e entrará em contato para resolver o problema.',
    tip: 'Dica: Certifique-se de informar o local onde o problema ocorre e o horário aproximado em que começou.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  }, */
  {
    id: '37',
    question: 'Como peço acesso a vpn?',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a liberação de acesso à VPN para o seu usuário.',
    tip: 'VPN > Liberação de Acesso - VPN',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=1963',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '38',
    question: 'Não estou conseguindo logar no Teams (MFA)',
    answer: 'Aprove a solicitação no aplicativo autenticador no seu smartphone e digite o código recebido. Se não conseguir, utilize a opção “Não consigo usar meu aplicativo Microsoft Authenticator agora” e escolha outro método, como SMS. Caso o problema persista, abra um chamado no SOS Águia Branca solicitando suporte de MFA.',
    tip: 'Migração MFA - Office 365 > Migração MFA - Duvida',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=5530',
    topicIds: ['todos', 'acesso', 'software']
  },
  {
    id: '39',
    question: 'Preciso ter acesso administrador na minha máquina',
    answer: 'Abra um chamado no SOS com a justificativa do por quê você precisa do acesso de administrador em sua máquina',
    tip: 'Micro-Informática - Manutenção & Serviços > Liberar Acesso Administrador Local',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=2215',
    topicIds: ['todos', 'acesso', 'computador']
  },
  {
    id: '40',
    question: 'Preciso de acesso a uma pasta de rede',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando acesso à pasta específica. Será necessário informar o caminho completo da pasta desejada.',
    tip: 'Acessos de Rede - AD > Liberar/Restringir Acesso à Pasta de Rede',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=134',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '41',
    question: 'Sou um cliente/fornecedor externo qual rede usar?',
    answer: 'Para clientes e fornecedores temos a rede GAB-Visitantes.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '42',
    question: 'Não estou conseguindo receber um e-mail, pode liberar na quarentena?',
    answer: 'Na sua área de trabalho há um atalho chamado Quarentena Correio. Acesse com seu usuário de rede e você verá todos os e-mails que foram bloqueados. Localize o e-mail desejado e clique em Entregar e Aprovar remetente para liberar a mensagem e permitir futuros recebimentos.',
    tipLink: 'https://euc.tmes.trendmicro.com/index.html?cmpID=1678731677482',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  /* {
    id: '43',
    question: 'Como faço para instalar um programa na minha máquina?',
    answer: 'Abra um chamado no Field Service informando que deseja instalar um programa na sua máquina. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e instalação do programa.',
    tip: 'Dica: Certifique-se de informar o nome do programa que deseja instalar e o motivo pelo qual precisa dele para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'acesso', 'computador', 'software']
  }, */
  {
    id: '44',
    question: 'Como faço para solicitar um novo mouse/teclado?',
    answer: 'A aquisição de novos periféricos é realizada diretamente pelo setor de Suprimentos. Procure o setor de Suprimentos da sua divisão para obter mais informações e realizar a solicitação.',
    topicIds: ['todos', 'computador']
  },
  {
    id: '45',
    question: 'Qual equipe dá manutenção na impressora ?Como faço para trocar o toner?',
    answer: 'A manutenção e o fornecimento de toner são realizados pela empresa IMPRESSO, responsável pela locação das impressoras. Para solicitar atendimento, entre em contato pelo número (27) 3328-2302.',
    topicIds: ['todos', 'impressora', 'computador', 'infraestrutura']
  },
  {
    id: '46',
    question: 'Preciso de uma antena de wi-fi na minha sala',
    answer: 'Para isso, abra um chamado no SOS Águia Branca solicitando a verificação do local. A equipe realizará uma avaliação para confirmar a necessidade da instalação e, se aprovado, será feita a cotação para aquisição e instalação do equipamento.',
    tip: 'Micro-Informática - Manutenção & Serviços > Adicionar/Remover Ponto de Rede ',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=418',
    topicIds: ['todos', 'infraestrutura']
  },
  {
    id: '47',
    question: 'Posso utilizar meu equipamento pessoal na rede?',
    answer: 'Não é aconselhável utilizar equipamentos pessoais na rede corporativa, devido às políticas de segurança da empresa. Caso seja necessário, utilize a rede GAB_BYOD, que é a única disponível para esse tipo de acesso. Por meio dela, será possível acessar suas pastas de rede utilizando a VPN corporativa.',
    topicIds: ['todos', 'acesso', 'computador']
  }
];
