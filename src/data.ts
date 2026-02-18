import { FaqItem, Topic} from './types';

export const topics: Topic[] = [
  { id: 'todos', name: 'Todos os Tópicos', icon: 'Grid' },
  { id: 'telefonia', name: 'Telefonia', icon: 'Phone' },
  { id: 'infraestrutura', name: 'Infraestrutura / Rede', icon: 'Server' },
  { id: 'computador', name: 'Computador', icon: 'Cpu' },
  { id: 'software', name: 'Software', icon: 'Monitor' },
  { id: 'acesso', name: 'Acesso e Permissões', icon: 'Key' },
  { id: 'impressora', name: 'Impressora', icon: 'Printer' },
  { id: 'email', name: 'E-mail', icon: 'Mail' },
];


export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Como criar acesso a um novo usuário?',
    answer: 'Para solicitar acesso a um novo sistema, você deve abrir um chamado através do Field Service informando: nome completo, matrícula, departamento e o sistema desejado. O prazo médio de liberação é de até 2 dias úteis após aprovação do gestor.',
    tip: 'Dica: Tenha em mãos a justificativa de uso do sistema para agilizar a aprovação.',
    topicIds: ['todos', 'acesso', 'software']
  },
  {
    id: '2',
    question: 'Como recuperar minha senha',
    answer: 'Para recuperar sua senha, acesse o portal de autoatendimento em https://senha.gab.com.br e clique em "Esqueci minha senha". Será enviado um link de recuperação para seu e-mail corporativo. Caso não tenha acesso ao e-mail, entre em contato com o suporte através do ramal 3000.',
    tip: 'Se o link não funcionar, verifique se o e-mail está correto e se o domínio gab.com.br está liberado no firewall.',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '3',
    question: 'Meu computador está lento, o que fazer?',
    answer: 'Primeiro, verifique se existem muitos programas abertos simultaneamente. Feche aplicações desnecessárias e reinicie o computador. Se o problema persistir, abra um chamado no Field Service detalhando os sintomas e quando o problema começou.',
    tip: 'Dica: Evite manter muitos programas abertos ao mesmo tempo para manter o desempenho do computador.',
    topicIds: ['computador', 'todos']
  },
  {
    id: '4',
    question: 'Como configurar impressora de rede?',
    answer: 'Acesse Painel de Controle > Dispositivos e Impressoras > Adicionar Impressora. Selecione a impressora de rede desejada. Se não aparecer na lista, solicite suporte através do Field Service informando sua localização e a impressora que deseja configurar.',
    tip: 'Dica: Certifique-se de que o computador esteja na mesma rede da impressora.',
    topicIds: ['impressora', 'todos']
  },
  {
    id: '5',
    question: 'Não consigo acessar a internet',
    answer: 'Verifique se o cabo de rede está conectado corretamente. Teste outros sites para confirmar se é problema geral ou específico. Reinicie seu computador. Se o problema persistir, abra um chamado informando sua localização e número do patrimônio do equipamento.',
    tip: 'Dica: Verifique se o cabo de rede está conectado corretamente e se o computador está na mesma sub-rede do roteador.',
    topicIds: ['todos', 'infraestrutura']
  },
  {
    id: '6',
    question: 'Como solicitar instalação de software?',
    answer: 'Abra um chamado no Field Service especificando o software necessário, a versão (se aplicável) e a justificativa de uso. A solicitação passará por análise de segurança e aprovação do gestor antes da instalação.',
    tip: 'Dica: Forneça o máximo de detalhes sobre o software para agilizar a análise e aprovação.',
    topicIds: ['todos', 'software']
  },
  {
    id: '7',
    question: 'Como abrir um chamado no Field Service?',
    answer: 'Acesse o portal Field Service através do link no portal do colaborador ou clique no botão "Abrir Chamado" neste FAQ. Preencha todos os campos obrigatórios: tipo de problema, descrição detalhada, localização e nível de urgência. Você receberá um número de protocolo por e-mail.',
    tip: 'Dica: Forneça o máximo de detalhes possível para agilizar a resolução do seu chamado.',
    topicIds: ['todos']
  },
  {
    id: '8',
    question: 'Telefone corporativo sem sinal, como resolver?',
    answer: 'Verifique se o aparelho está carregado e se o modo avião está desligado. Tente reiniciar o aparelho. Se o problema persistir, anote o número da linha e abra um chamado com o Field Service para análise da operadora.',
    tip: 'Dica: Se o problema persistir após reiniciar, verifique se o aparelho está dentro da cobertura da operadora.',
    topicIds: ['todos', 'telefonia']
  },
  {
    id: '9',
    question: 'Minha senha do Windows expirou, o que fazer?',
    answer: 'Se você estiver na rede da empresa, pressione Ctrl + Alt + Del e selecione "Alterar uma senha". Caso esteja remoto, conecte a VPN antes.',
    tip: 'Caminho no portal: Computador > Acessos > Alteerar senha',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '10',
    question: 'Como solicitar um novo computador?',
    answer: 'Abra um chamado no Field Service informando o motivo da solicitação, o modelo desejado (se aplicável) e a urgência. A equipe de TI avaliará a necessidade e entrará em contato para aprovação e agendamento da entrega.',
    tip: 'Dica: Forneça detalhes sobre o uso pretendido do computador para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'computador']
  },
  {
    id: '11',
    question: 'Minha conta bloqueou o que eu faço?',
    answer: 'Abra um chamado no Field Service informando o motivo da solicitação, o número do ramal desejado (se aplicável) e a urgência. A equipe de TI avaliará a necessidade e entrará em contato para aprovação e agendamento da instalação.',
    tip: 'Dica: Forneça detalhes sobre o uso pretendido do ramal para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '12',
    question: 'Minha VPN não está conectando, me ajuda?',
    answer: 'Abra um chamado no Field Service informando o motivo da solicitação, o sistema que precisa acessar e a urgência. A equipe de TI avaliará a necessidade e entrará em contato para aprovação e agendamento da configuração.',
    tip: 'Dica: Forneça detalhes sobre o uso pretendido do acesso remoto para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '13',
    question: 'Preciso transferir meus arquivos para outro computador',
    answer: 'Para transferir arquivos entre computadores, você pode utilizar o recurso de compartilhamento de pastas do Windows ou ferramentas como o FileZilla. Se precisar de ajuda específica, abra um chamado no Field Service.',
    tip: 'Dica: Certifique-se de que ambos os computadores estejam na mesma rede e que as permissões estejam configuradas corretamente.',
    topicIds: ['todos', 'computador', 'infraestrutura']
  },
  {
    id: '14',
    question: 'Como solicitar licença de office?',
    answer: 'Abra um chamado no Field Service informando o motivo da solicitação, o modelo do equipamento atual e o modelo desejado (se aplicável). A equipe de TI avaliará a necessidade e entrará em contato para aprovação e agendamento da troca.',
    tip: 'Dica: Forneça detalhes sobre o uso pretendido do software para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'software', 'email']
  },
  {
    id: '15',
    question: 'Qual rede Wifi usar no celular?',
    answer: 'Use a rede "Aguiabranca" para acesso ao WiFi no celular.',
    tip: 'Dica: Certifique-se de que o WiFi do seu celular esteja ligado e que você tenha a senha correta para acessar a rede.',
    topicIds: ['todos', 'infraestrutura']
  },
  {
    id: '16',
    question: 'O Vianuvem não está funcionando, o que faço?',
    answer: 'Abra um chamado no Field Service informando o motivo da solicitação, o modelo do equipamento atual e o modelo desejado (se aplicável). A equipe de TI avaliará a necessidade e entrará em contato para aprovação e agendamento da troca.',
    tip: 'Dica: Forneça detalhes sobre o uso pretendido do software para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'software', 'acesso']
  },
  {
    id: '17',
    question: 'Como funciona o procedimento de descarte de material(peças e computadores)',
    answer: 'Abra um chamado no Field Service informando o número do ramal desejado e o motivo da solicitação. A equipe de TI verificará a disponibilidade e entrará em contato para aprovação e configuração.',
    tip: 'Caminho no portal: Suporte > Descarte de Material',
    topicIds: ['todos', 'computador']
  },
  {
    id: '18',
    question: 'Recebi uma máquina nova e não sei o que fazer',
    answer: 'Antes de trazer para o laboratório, certifique-se de que a etiqueta de patrimônio já está colada no equipamento, o pacote Office já foi providenciado e que o usuário que irá usar a máquina já possui uma conta criada.',
    tip: 'Caminho no portal: Suporte > Novas Máquinas > Checklist de Configuração',
    topicIds: ['todos', 'computador']
  },
  {
    id: '19',
    question: 'Não estou conseguindo imprimir',
    answer: 'Verifique se tanto a impressora quanto o seu computador estão ligados e conectados à rede. Em seguida abra um chamado e nos encaminhe o modelo da impressora e o endereço de IP dela ',
    tip: 'Caminho no portal: Suporte > Impressoras > Instalarção e Configuração',
    topicIds: ['todos', 'impressora']
  },
  {
    id: '20',
    question: 'Preciso formatar minha máquina, como faço?',
    answer: 'Abra um chamado informando o motivo da formatação e quais dias e horários você tem disponibilidade para levar a máquina até o laboratório. Entraremos em contato para realizar o agendamento.',
    tip: 'Caminho no portal: Windows > Formatar',
    topicIds: ['todos', 'computador']
  },
  {
    id: '21',
    question: 'Preciso configurar/reconfigurar meu e-mail no aplicativo do celular',
    answer: 'Primeiro, certifique-se de que tem em seu celular instalado os aplicativos "Microsoft Authenticator", "Outlook" e VPN Capsule. Em seguida, traga seu celular para o laboratório para que possamos realizar a configuração presencialmente.',
    tip: 'Caminho no portal: Outlook > Configurar',
    topicIds: ['todos', 'email']
  },
  {
    id: '22',
    question: 'Solicitar a troca de alguma peça do meu computador (teclado, tela, bateria, conector de fonte etc)',
    answer: 'Abra um chamado informando qual peça precisa ser trocada e o motivo. Em seguida, encaminhe a máquina para o laboratório para que possamos avaliar e providenciar o laudo, caso necessário.',
    tip: 'Caminho no portal: Hardware > Troca de Peça > Solicitação de laudo técnico',
    topicIds: ['todos', 'computador']
  },
  {
    id: '23',
    question: 'Solicitar a instalação da peça nova que foi comprada',
    answer: 'Abra um chamado informando que a peça foi comprada e solicitando a instalação. Em seguida, nos informe qual o melhor horário para levar a máquina até o laboratório para que possamos realizar a instalação presencialmente.',
    tip: 'Caminho no portal: Hardware > Instalação de Peça Nova',
    topicIds: ['todos', 'computador']
  },
  {
    id: '24',
    question: 'Preciso de um ramal next ip em minha máquina',
    answer: 'Abra um chamado informando o número do ramal desejado e o motivo da solicitação. A equipe de TI verificará a disponibilidade e entrará em contato para aprovação e configuração.',
    tip: 'Sistemas > Ramal Next IP',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=121',
    topicIds: ['todos', 'software', 'telefonia'],

  },
  {
    id: '25',
    question: 'Como criar conta no aplicativo Loader Next IP para ligar pelo syonet',
    answer: 'Ao receber uma máquina nova, abra um chamado no Field Service informando o nome do software, a versão (se aplicável) e a justificativa para a instalação. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e agendamento da instalação.',
    tip: 'Dica: Forneça o máximo de detalhes possível sobre o software para agilizar a análise e aprovação.',
    topicIds: ['todos', 'software', 'telefonia']
  },
  {
    id: '26',
    question: 'Como solicitar a instalação de um software específico?',
    answer: 'Abra um chamado no Field Service informando o nome do software, a versão (se aplicável) e a justificativa para a instalação. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e agendamento da instalação.',
    tip: 'Dica: Forneça o máximo de detalhes possível sobre o software para agilizar a análise e aprovação.',
    topicIds: ['todos', 'software']
  },
  {
    id: '27',
    question: 'Como solicitar a instalação do Microsoft Teams?',
    answer: 'Abra um chamado no Field Service informando que deseja instalar o Microsoft Teams. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e agendamento da instalação.',
    tip: 'Dica: O Microsoft Teams é uma ferramenta essencial para comunicação e colaboração, certifique-se de solicitar sua instalação o quanto antes.',
    topicIds: ['todos', 'software']
  },
  {
    id: '28',
    question: 'Como solicitar a instalação do Microsoft Office?',
    answer: 'Abra um chamado no Field Service informando que deseja instalar o Microsoft Office. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e agendamento da instalação.',
    tip: 'Dica: O Microsoft Office é um conjunto de ferramentas essenciais para produtividade, certifique-se de solicitar sua instalação o quanto antes.',
    topicIds: ['todos', 'software', 'email']
  },
  {
    id: '29',
    question: 'Bloqueei minha senha do SAP, o que eu faço?',
    answer: 'Abra um chamado no Field Service informando que sua senha do SAP está bloqueada. A equipe de TI avaliará a solicitação e entrará em contato para desbloquear sua conta.',
    tip: 'Dica: Certifique-se de fornecer todas as informações necessárias para identificar sua conta no SAP.',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '30',
    question: 'Estou com um colaborador novo, como eu solicito uma conta pra ele?',
    answer: 'Abra um chamado no Field Service informando o nome do colaborador novo e o motivo da solicitação. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e configuração da conta.',
    tip: 'Caminho no portal: Acesso > Solicitação de Conta',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '31',
    question: 'Como solicitar a instalação do Microsoft Outlook?',
    answer: 'Abra um chamado no Field Service informando que deseja instalar o Microsoft Outlook. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e agendamento da instalação.',
    tip: 'Dica: O Microsoft Outlook é uma ferramenta essencial para gerenciamento de e-mails, certifique-se de solicitar sua instalação o quanto antes.',
    topicIds: ['todos', 'software', 'email']
  },
  {
    id: '32',
    question: 'Meu e-mail travou/está lento',
    answer: 'Abra um chamado no Field Service informando que seu e-mail travou. A equipe de TI avaliará a solicitação e entrará em contato para resolver o problema.',
    tip: 'Dica: Certifique-se de descrever o problema com detalhes, como quando ele começou e se há mensagens de erro específicas.',
    topicIds: ['todos', 'email']
  },
  {
    id: '33',
    question: 'Minha senha expirou/esqueci minha senha. Pode resetar?',
    answer: 'Abra um chamado no Field Service informando que sua senha expirou ou que você esqueceu sua senha. A equipe de TI avaliará a solicitação e entrará em contato para resetar sua senha.',
    tip: 'Dica: Certifique-se de fornecer todas as informações necessárias para identificar sua conta e redefinir sua senha.',
    topicIds: ['todos', 'acesso']
  },
  {
    id: '34',
    question: 'Como solicitar a troca do meu equipamento?',
    answer: 'Abra um chamado no Field Service informando que deseja trocar seu equipamento. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e agendamento da troca.',
    tip: 'Dica: Certifique-se de informar o motivo da troca e o modelo do equipamento atual.',
    topicIds: ['todos', 'computador']
  },
  {
    id: '35',
    question: 'Troquei a senha e a internet parou do meu celular, pode me ajudar?',
    answer: 'Abra um chamado no Field Service informando que sua senha foi alterada e que a internet do seu celular parou de funcionar. A equipe de TI avaliará a solicitação e entrará em contato para resolver o problema.',
    tip: 'Dica: Certifique-se de informar o modelo do seu celular e o horário aproximado em que o problema começou.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '36',
    question: 'A internet caiu / não conecta no Wi-Fi',
    answer: 'Abra um chamado no Field Service informando que a internet caiu ou não conecta no Wi-Fi. A equipe de TI avaliará a solicitação e entrará em contato para resolver o problema.',
    tip: 'Dica: Certifique-se de informar o local onde o problema ocorre e o horário aproximado em que começou.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '37',
    question: 'Como peço acesso a vpn?',
    answer: 'Abra um chamado no Field Service informando que deseja acesso a VPN. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e configuração do acesso.',
    tip: 'Dica: Certifique-se de informar o motivo do acesso à VPN e o local onde será utilizado.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '38',
    question: 'Não estou conseguindo logar no Teams (MFA)',
    answer: 'Abra um chamado no Field Service informando que não está conseguindo logar no Teams com MFA. A equipe de TI avaliará a solicitação e entrará em contato para resolver o problema.',
    tip: 'Dica: Certifique-se de informar o nome do usuário e o horário aproximado em que o problema começou.',
    topicIds: ['todos', 'acesso', 'software']
  },
  {
    id: '39',
    question: 'Preciso ter acesso administrador na minha máquina',
    answer: 'Abra um chamado no Field Service informando que precisa de acesso administrador na sua máquina. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e configuração do acesso.',
    tip: 'Dica: Certifique-se de informar o motivo pelo qual precisa de acesso administrador para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'acesso', 'computador']
  },
  {
    id: '40',
    question: 'Preciso de acessoa a uma pasta de rede',
    answer: 'Abra um chamado no Field Service informando que precisa de acesso a uma pasta de rede. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e configuração do acesso.',
    tip: 'Dica: Certifique-se de informar o caminho da pasta de rede e o motivo pelo qual precisa de acesso para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '41',
    question: 'Sou um cliente/fornecedor externo qual rede usar?',
    answer: 'Para clientes e fornecedores externos, utilize a rede Wi-Fi denominada "GAB-CLIENTES". Certifique-se de que o nome da rede esteja visível no seu dispositivo e que você tenha as credenciais corretas para se conectar.',
    tip: 'Dica: Se não conseguir se conectar, entre em contato com a equipe de TI para obter ajuda com as credenciais da rede.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '42',
    question: 'Não estou conseguindo receber um e-mail, pode liberar na quarentena?',
    answer: 'Abra um chamado no Field Service informando que não está conseguindo receber um e-mail e que deseja que ele seja liberado da quarentena. A equipe de TI avaliará a solicitação e entrará em contato para resolver o problema.',
    tip: 'Dica: Certifique-se de informar o nome do e-mail que não está sendo recebido e o horário aproximado em que começou o problema.',
    topicIds: ['todos', 'acesso', 'infraestrutura']
  },
  {
    id: '43',
    question: 'Como faço para instalar um programa na minha máquina?',
    answer: 'Abra um chamado no Field Service informando que deseja instalar um programa na sua máquina. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e instalação do programa.',
    tip: 'Dica: Certifique-se de informar o nome do programa que deseja instalar e o motivo pelo qual precisa dele para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'acesso', 'computador', 'software']
  },
  {
    id: '44',
    question: 'Como faço para solicitar um novo mouse/teclado?',
    answer: 'Abra um chamado no Field Service informando que deseja solicitar um novo mouse ou teclado. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e agendamento da entrega do novo equipamento.',
    tip: 'Dica: Certifique-se de informar o motivo pelo qual precisa de um novo mouse ou teclado para ajudar na avaliação da solicitação.',
    topicIds: ['todos', 'computador']
  },
  {
    id: '45',
    question: 'Qual equipe dá manutenção na impressora ?Como faço para trocar o toner?',
    answer: 'A manutenção de impressoras é realizada pela equipe de TI. Para trocar o toner, entre em contato com a equipe de TI através do Field Service. Informe o modelo da impressora e o tipo de toner necessário.',
    tip: 'Dica: Certifique-se de informar o modelo da impressora e o tipo de toner necessário para que a equipe possa agendar a troca correta.',
    topicIds: ['todos', 'impressora', 'computador', 'infraestrutura']
  },
  {
    id: '46',
    question: 'Preciso de uma antena de wi-fi na minha sala',
    answer: 'Abra um chamado no Field Service informando o nome da antena, o modelo e a justificativa para a instalação. A equipe de TI avaliará a solicitação e entrará em contato para aprovação e agendamento da instalação.',
    tip: 'Dica: Forneça o máximo de detalhes possível sobre a antena para agilizar a análise e aprovação.',
    topicIds: ['todos', 'infraestrutura']
  },
  {
    id: '47',
    question: 'Posso utilizar meu equipamento pessoal na rede?',
    answer: 'Sim, você pode utilizar seu equipamento pessoal na rede, desde que ele esteja em conformidade com as políticas de segurança da empresa. Certifique-se de que o equipamento esteja atualizado com as últimas correções de segurança e que não apresente riscos à infraestrutura de rede.',
    tip: 'Dica: Se você tiver dúvidas sobre a compatibilidade do seu equipamento, entre em contato com a equipe de TI para obter orientações.',
    topicIds: ['todos', 'acesso', 'computador']
  }
];
