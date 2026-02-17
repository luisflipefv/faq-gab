import { FaqItem, Topic} from './types';

export const topics: Topic[] = [
  { id: 'comercio', name: 'Comércio', icon: 'ShoppingCart' },
  { id: 'logistica', name: 'Logística', icon: 'Truck' },
  { id: 'passageiros', name: 'Passageiros', icon: 'Users' },
  { id: 'geral', name: 'Geral (Field Service)', icon: 'Settings' },
  { id: 'todos', name: 'Todos os Tópicos', icon: 'Grid' },  
];


export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Como solicitar acesso a um novo sistema?',
    answer: 'Para solicitar acesso a um novo sistema, você deve abrir um chamado através do Field Service informando: nome completo, matrícula, departamento e o sistema desejado. O prazo médio de liberação é de até 2 dias úteis após aprovação do gestor.',
    tip: 'Dica: Tenha em mãos a justificativa de uso do sistema para agilizar a aprovação.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral'] 
  },
  {
    id: '2',
    question: 'Esqueci minha senha, como recuperar?',
    answer: 'Para recuperar sua senha, acesse o portal de autoatendimento em https://senha.gab.com.br e clique em "Esqueci minha senha". Será enviado um link de recuperação para seu e-mail corporativo. Caso não tenha acesso ao e-mail, entre em contato com o suporte através do ramal 3000.',
    tip: 'Dica: Se o link não funcionar, verifique se o e-mail está correto e se o domínio gab.com.br está liberado no firewall.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '3',
    question: 'Meu computador está lento, o que fazer?',
    answer: 'Primeiro, verifique se existem muitos programas abertos simultaneamente. Feche aplicações desnecessárias e reinicie o computador. Se o problema persistir, abra um chamado no Field Service detalhando os sintomas e quando o problema começou.',
    tip: 'Dica: Evite manter muitos programas abertos ao mesmo tempo para manter o desempenho do computador.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '4',
    question: 'Como configurar impressora de rede?',
    answer: 'Acesse Painel de Controle > Dispositivos e Impressoras > Adicionar Impressora. Selecione a impressora de rede desejada. Se não aparecer na lista, solicite suporte através do Field Service informando sua localização e a impressora que deseja configurar.',
    tip: 'Dica: Certifique-se de que o computador esteja na mesma rede da impressora.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '5',
    question: 'Não consigo acessar a internet, como proceder?',
    answer: 'Verifique se o cabo de rede está conectado corretamente. Teste outros sites para confirmar se é problema geral ou específico. Reinicie seu computador. Se o problema persistir, abra um chamado informando sua localização e número do patrimônio do equipamento.',
    tip: 'Dica: Verifique se o cabo de rede está conectado corretamente e se o computador está na mesma sub-rede do roteador.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '6',
    question: 'Como solicitar instalação de software?',
    answer: 'Abra um chamado no Field Service especificando o software necessário, a versão (se aplicável) e a justificativa de uso. A solicitação passará por análise de segurança e aprovação do gestor antes da instalação.',
    tip: 'Dica: Forneça o máximo de detalhes sobre o software para agilizar a análise e aprovação.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '9',
    question: 'Validador de bilhetagem apresentando erro, como resolver?',
    answer: 'Reinicie o equipamento segurando o botão power por 10 segundos. Aguarde a reinicialização completa (aprox. 2 minutos). Se o erro persistir, anote o código do erro exibido na tela e abra um chamado urgente informando o número do veículo.',
    tip: 'Dica: Se o problema persistir após reiniciar, verifique se o equipamento está conectado corretamente à rede elétrica.',
    topicIds: ['passageiros']
  },
  {
    id: '10',
    question: 'Câmera do ônibus não está gravando, o que fazer?',
    answer: 'Verifique se o DVR está ligado (luz verde acesa). Confirme se há espaço no HD (verificar no monitor). Em caso de falha, anote o número do veículo e a câmera com problema (frontal, traseira, interna) e abra um chamado prioritário.',
    tip: 'Dica: Se o DVR estiver desligado, verifique o fusível correspondente no painel de fusíveis do veículo.',
    topicIds: ['passageiros']
  },
  {
    id: '11',
    question: 'Passageiros reclamando de Wi-Fi instável, como proceder?',
    answer: 'Verifique se o roteador está ligado e com todas as luzes normais. Teste a conexão com seu celular. Se confirmado o problema, anote o número do veículo e horário e abra um chamado para análise técnica.',
    tip: 'Dica: Verifique se o roteador está dentro da cobertura do Wi-Fi e se há outros dispositivos conectados.',
    topicIds: ['passageiros']
  },
  {
    id: '12',
    question: 'Como abrir um chamado no Field Service?',
    answer: 'Acesse o portal Field Service através do link no portal do colaborador ou clique no botão "Abrir Chamado" neste FAQ. Preencha todos os campos obrigatórios: tipo de problema, descrição detalhada, localização e nível de urgência. Você receberá um número de protocolo por e-mail.',
    tip: 'Dica: Forneça o máximo de detalhes possível para agilizar a resolução do seu chamado.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '13',
    question: 'Qual o prazo médio de atendimento?',
    answer: 'Os prazos variam conforme a prioridade: Urgente (problemas críticos que impedem operação) - até 4 horas; Alta (impacta múltiplos usuários) - até 8 horas; Normal (problemas individuais) - até 24 horas; Baixa (melhorias e dúvidas) - até 48 horas.',
    tip: 'Dica: Em caso de urgência, entre em contato diretamente com o suporte técnico pelo ramal 4000.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '14',
    question: 'Telefone corporativo sem sinal, como resolver?',
    answer: 'Verifique se o aparelho está carregado e se o modo avião está desligado. Tente reiniciar o aparelho. Se o problema persistir, anote o número da linha e abra um chamado com o Field Service para análise da operadora.',
    tip: 'Dica: Se o problema persistir após reiniciar, verifique se o aparelho está dentro da cobertura da operadora.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '15',
    question: 'Servidor fora do ar, qual o procedimento?',
    answer: 'Entre em contato IMEDIATAMENTE com o NOC (Network Operations Center) pelo ramal 4000 ou WhatsApp (27) 99999-0000. Informe qual servidor/sistema está indisponível e o impacto na operação. Chamados críticos de infraestrutura têm prioridade máxima.',
    tip: 'Dica: Em caso de falha crítica, não espere a aprovação do chamado. Contate o NOC diretamente para aceleração do processo.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '16',
    question: 'Minha senha do Windows expirou, o que fazer?',
    answer: 'Se você estiver na rede da empresa, pressione Ctrl + Alt + Del e selecione "Alterar uma senha". Caso esteja remoto, conecte a VPN antes.',
    tip: 'Caminho no portal: Computador > Acessos > Alteerar senha',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '17',
    question: 'Como solicitar um novo computador?',
    answer: 'Abra um chamado no Field Service informando o motivo da solicitação, o modelo desejado (se aplicável) e a urgência. A equipe de TI avaliará a necessidade e entrará em contato para aprovação e agendamento da entrega.',
    tip: 'Dica: Forneça detalhes sobre o uso pretendido do computador para ajudar na avaliação da solicitação.',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },{
    id: '18',
    question: 'Recebi uma máquina nova e não sei o que fazer',
    answer: 'Antes de trazer para o laboratório, certifique-se de que a etiqueta de patrimônio já está colada no equipamento, o pacote Office já foi providenciado e que o usuário que irá usar a máquina já possui uma conta criada.',
    tip: 'Caminho no portal: Suporte > Novas Máquinas > Checklist de Configuração',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '19',
    question: 'Não estou conseguindo imprimir',
    answer: 'Verifique se tanto a impressora quanto o seu computador estão ligados e conectados à rede. Em seguida abra um chamado e nos encaminhe o modelo da impressora e o endereço de IP dela ',
    tip: 'Caminho no portal: Suporte > Impressoras > Instalarção e Configuração',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '20',
    question: 'Preciso formatar minha máquina, como faço?',
    answer: 'Abra um chamado informando o motivo da formatação e quais dias e horários você tem disponibilidade para levar a máquina até o laboratório. Entraremos em contato para realizar o agendamento.',
    tip: 'Caminho no portal: Windows > Formatar',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '21',
    question: 'Preciso configurar/reconfigurar meu e-mail no aplicativo do celular',
    answer: 'Primeiro, certifique-se de que tem em seu celular instalado os aplicativos "Microsoft Authenticator", "Outlook" e VPN Capsule. Em seguida, traga seu celular para o laboratório para que possamos realizar a configuração presencialmente.',
    tip: 'Caminho no portal: Outlook > Configurar',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '22',
    question: 'Solicitar a troca de alguma peça do meu computador (teclado, tela, bateria, conector de fonte etc)',
    answer: 'Abra um chamado informando qual peça precisa ser trocada e o motivo. Em seguida, encaminhe a máquina para o laboratório para que possamos avaliar e providenciar o laudo, caso necessário.',
    tip: 'Caminho no portal: Hardware > Troca de Peça > Solicitação de laudo técnico',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '23',
    question: 'Solicitar a instalação da peça nova que foi comprada',
    answer: 'Abra um chamado informando que a peça foi comprada e solicitando a instalação. Em seguida, nos informe qual o melhor horário para levar a máquina até o laboratório para que possamos realizar a instalação presencialmente.',
    tip: 'Caminho no portal: Hardware > Instalação de Peça Nova',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral']
  },
  {
    id: '24',
    question: 'Quero um ramal do next ip em minha máquina',
    answer: 'Abra um chamado informando o número do ramal desejado e o motivo da solicitação. A equipe de TI verificará a disponibilidade e entrará em contato para aprovação e configuração.',
    tip: 'Sistemas > Ramal Next IP',
    tipLink: 'https://sos.aguiabranca.com.br/cardapio/descricao?id=121',
    topicIds: ['comercio', 'logistica', 'passageiros', 'geral'],

  } 
];
