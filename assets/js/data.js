// Conteúdo dinâmico da Home — Gás Network Engenharia
(function () {
  var WA = "https://wa.me/5511985424462?text=";
  function wa(t) { return WA + encodeURIComponent(t); }

  var ICON = {
    doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    gauge:'<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 14 16 9"/><path d="M4 18a9 9 0 1 1 16 0"/>',
    stamp:'<path d="M5 22h14M7 18h10l-1-4H8l-1 4ZM9 14a3 3 0 0 1 0-6 3 3 0 0 0 6 0 3 3 0 0 1 0 6"/>',
    pipe:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',
    alert:'<path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.42 0Z"/>',
    home:'<path d="M3 11 12 3l9 8M5 9v11h14V9"/>',
    shop:'<path d="M3 9 4 4h16l1 5M4 9h16v11H4zM9 20v-6h6v6"/>',
    tank:'<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M8 8V5h8v3M9 12h6"/>',
    flame:'<path d="M12 2c1 3 4 4 4 8a4 4 0 0 1-8 0c0-2 2-3 2-5"/><path d="M9 14a3 3 0 0 0 6 0"/>',
    heat:'<path d="M8 3v4M12 3v4M16 3v4M5 9h14v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/>',
    wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a2 2 0 1 0 3 3l6-6a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z"/>',
    build:'<path d="M3 21h18M6 21V5l8-2v18M14 21V8l4 1v12"/>'
  };
  function svg(p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + p + '</svg>'; }

  // ---- 12 serviços principais ----
  var servicos = [
    { t:"Laudo técnico de gás", d:"Emissão de laudo técnico para redes de gás GN e GLP, com avaliação, teste e documentação conforme a necessidade do cliente.", ico:ICON.doc, mod:"", btn:"btn--azul", cta:"Solicitar laudo", msg:"Quero solicitar um laudo técnico de gás." },
    { t:"Teste de estanqueidade", d:"Verificação técnica da rede de gás para identificar queda de pressão, vazamentos e condições de segurança.", ico:ICON.gauge, mod:"", btn:"btn--azul", cta:"Agendar teste", msg:"Quero agendar um teste de estanqueidade." },
    { t:"Laudo com ART", d:"Documentação técnica com responsabilidade profissional para instalações, adequações e regularizações de gás.", ico:ICON.stamp, mod:"card--t-dourado", btn:"btn--dourado", cta:"Pedir ART", msg:"Quero solicitar um laudo com ART." },
    { t:"Aplicação de resina em tubulação de gás", d:"Solução técnica para correção de vazamentos internos, evitando quebras excessivas em pisos e paredes.", ico:ICON.pipe, mod:"card--t-dourado", btn:"btn--dourado", cta:"Avaliar resina", msg:"Quero avaliar a aplicação de resina em tubulação de gás." },
    { t:"Reparo de vazamento de gás", d:"Identificação e correção de vazamentos em tubulações, conexões, registros, mangueiras e pontos de consumo.", ico:ICON.alert, mod:"card--t-vermelho", btn:"btn--emerg", cta:"Chamar técnico", msg:"Preciso de reparo de vazamento de gás." },
    { t:"Instalação de gás residencial", d:"Instalação de redes de gás para casas e apartamentos, fogão, aquecedor, churrasqueira e novos pontos.", ico:ICON.home, mod:"", btn:"btn--azul", cta:"Fazer instalação", msg:"Quero instalação de gás residencial." },
    { t:"Instalação de gás comercial", d:"Redes de gás para restaurantes, cozinhas, padarias, lanchonetes e estabelecimentos comerciais.", ico:ICON.shop, mod:"", btn:"btn--azul", cta:"Orçar comércio", msg:"Quero orçamento de instalação de gás comercial." },
    { t:"Central de gás GLP", d:"Instalação e adequação de centrais GLP para comércios, condomínios e sistemas coletivos.", ico:ICON.tank, mod:"", btn:"btn--azul", cta:"Orçar central GLP", msg:"Quero orçamento de central de gás GLP." },
    { t:"Instalação de fogão a gás", d:"Instalação técnica de fogões, cooktops, mangueiras, válvulas e testes de segurança.", ico:ICON.flame, mod:"card--t-azul2", btn:"btn--wpp", cta:"Instalar fogão", msg:"Quero instalação de fogão a gás." },
    { t:"Instalação de aquecedor a gás", d:"Instalação de aquecedor com kit, mangueiras, duto de exaustão e orientações técnicas.", ico:ICON.heat, mod:"card--t-azul2", btn:"btn--wpp", cta:"Instalar aquecedor", msg:"Quero instalação de aquecedor a gás." },
    { t:"Tubulação de gás PEX", d:"Construção de redes em PEX para sistemas GN e GLP, conforme avaliação técnica e necessidade do projeto.", ico:ICON.pipe, mod:"card--t-azul2", btn:"btn--ghost", cta:"Orçar PEX", msg:"Quero orçamento de tubulação de gás PEX." },
    { t:"Adequação de gás para condomínios", d:"Regularização, testes, laudos e adequações em redes coletivas e individuais de condomínios.", ico:ICON.build, mod:"", btn:"btn--azul", cta:"Atender condomínio", msg:"Quero adequação de gás para condomínio." }
  ];
  var SVC_LINKS=["servicos/laudo-tecnico-de-instalacao-de-gas.html", "servicos/teste-de-estanqueidade-de-gas.html", "servicos/laudo-de-conformidade-de-gas-com-art.html", "servicos/aplicacao-de-resina-em-tubulacao-de-gas.html", "servicos/reparo-de-vazamento-de-gas.html", "servicos/instalacao-de-gas-natural-residencial.html", "servicos/instalacao-de-gas-para-restaurantes.html", "servicos/instalacao-de-central-de-gas-glp.html", "servicos/instalacao-de-gas-para-fogao-de-embutir.html", "servicos/instalacao-de-aquecedor-a-gas-de-passagem.html", "servicos/tubulacao-de-gas-multicamada.html", "condominios.html"];
  var sHtml = servicos.map(function (s, i) {
    return '<article class="card ' + s.mod + '">' +
      '<div class="ico">' + svg(s.ico) + '</div>' +
      '<h3>' + s.t + '</h3>' +
      '<p>' + s.d + '</p>' +
      '<div class="links"><a class="saiba" href="' + SVC_LINKS[i] + '">Saiba mais &rarr;</a>' +
      '<a class="btn ' + s.btn + '" href="' + wa(s.msg) + '">' + s.cta + '</a></div>' +
      '</article>';
  }).join("");
  var sBox = document.getElementById("cards-servicos");
  if (sBox) sBox.innerHTML = sHtml;

  // ---- FAQ ----
  var faqs = [
    ["A Gás Network emite laudo técnico de gás?", "Sim. Emitimos laudo técnico para redes de gás GN e GLP, com avaliação, teste de estanqueidade e ART quando o serviço exige responsabilidade técnica."],
    ["O teste de estanqueidade identifica vazamento?", "Sim. O teste verifica a pressão da rede e indica se há perda, ajudando a localizar e confirmar vazamentos e a comprovar a segurança da instalação."],
    ["Vocês emitem ART?", "Sim. Emitimos ART (Anotação de Responsabilidade Técnica) quando contratada, vinculada ao responsável técnico com CREA."],
    ["A aplicação de resina evita quebrar piso?", "Em muitos casos, sim. A resina corrige vazamentos internos e pode reduzir quebras, mas a viabilidade depende da avaliação técnica e do resultado do teste de estanqueidade."],
    ["Vocês atendem condomínio?", "Sim. Atendemos síndicos e administradoras com laudos, ART, teste de estanqueidade, prumadas, medidores, central GLP e relatórios técnicos."],
    ["Atendem comércio e restaurante?", "Sim. Fazemos instalação, adequação, laudo e ART para restaurantes, padarias, lanchonetes e cozinhas industriais."],
    ["Trabalham com GN e GLP?", "Sim. Atuamos tanto com gás natural (GN) quanto com GLP, em redes residenciais, comerciais e condominiais."],
    ["Fazem instalação de fogão e aquecedor?", "Sim. Instalamos fogões, cooktops e aquecedores a gás, com mangueiras, válvulas, duto de exaustão e testes de segurança."],
    ["O orçamento pode ser feito pelo WhatsApp?", "Sim. Você pode enviar informações e fotos pelo WhatsApp para agilizar a avaliação e o orçamento."],
    ["Quais regiões vocês atendem?", "Atendemos São Paulo, Grande São Paulo, interior e litoral, conforme disponibilidade técnica e tipo de serviço."]
  ];
  var faqHtml = faqs.map(function (f) {
    return '<div class="faq-item"><button class="faq-q">' + f[0] + '<span class="plus">+</span></button>' +
      '<div class="faq-a"><p>' + f[1] + '</p></div></div>';
  }).join("");
  var faqBox = document.getElementById("faq-list");
  if (faqBox) faqBox.innerHTML = faqHtml;

  // ---- Blog (4 destaques) ----
  var posts = [
    "O que é teste de estanqueidade de gás?",
    "Quando o laudo de gás é obrigatório?",
    "Como identificar vazamento de gás?",
    "Como funciona a aplicação de resina em tubulação de gás?"
  ];
  var bHtml = posts.map(function (p) {
    return '<article class="post"><div class="imgph imgph--logo"><img src="assets/img/logo.png" alt="Gás Network Engenharia" width="180" height="61" loading="lazy" decoding="async"></div>' +
      '<div class="body"><h3>' + p + '</h3>' +
      '<a class="saiba" href="blog.html">Ler artigo →</a></div></article>';
  }).join("");
  var bBox = document.getElementById("blog-cards");
  if (bBox) bBox.innerHTML = bHtml;
})();
