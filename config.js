var config = {
    style: 'mapbox://styles/caiojacintho/ckyu4kjqz000a14p7kivbajq6',
    accessToken: 'pk.eyJ1IjoiY2Fpb2phY2ludGhvIiwiYSI6ImNreXZtY3p2ZTBidmMybnJ6aDRtNGY3czUifQ.ihgonGs8-KfiEqo4oGoDOQ',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: 'Equipamentos Públicos no Entorno Jacarezinho',
    subtitle: '',
    byline: 'Desenvolvido por Escritório de Dados em parceria com IPP/SMPU (Dados referentes a Jan/2021)',
    footer: 'Desenvolvido por Escritório de Dados da Prefeitura do Rio de Janeiro (Dados referentes a Jan/2021)',
    chapters: [{
            id: 'riodejaneiro',
            alignment: 'left',
            title: 'Cidade do Rio de Janeiro',
            image: '',
            description: 'Veja a seguir dados de educação (escolas e creches), saúde (CMS) e mobilidade (ônibus, trem, metrô e van) no Jacarezinho, Zona Norte do Rio de Janeiro.',
            location: {
                center: { lon: -43.41869, lat: -22.95622 },
                zoom: 10.85,
                pitch: 27.00,
                bearing: -2.79
            },
            onChapterEnter: [

                {
                    layer: 'municipio',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                layer: 'municipio ',
                opacity: 0,
            }]
        },
        {
            id: 'bairro',
            alignment: 'right',
            title: 'Jacarezinho',
            image: '',
            description: 'Jacarezinho é um bairro da Zona Norte onde está localizada a favela do Jacarezinho. O bairro tem população estimada em 37 839 habitantes, segundo dados do IBGE de 2010. Em 2022, o Instituto Pereira Passos identificou 13.767 domicílios no território.',
            location: {
                center: { lon: -43.25119, lat: -22.88566 },
                zoom: 14.98,
                pitch: 8.50,
                bearing: -34.70
            },
            onChapterEnter: [

            ],
            onChapterExit: []
        },
        {
            id: 'onibus',
            alignment: 'right',
            title: 'SPPO | Pontos de Ônibus',
            image: '',
            description: 'Pontos de ônibus mais próximos ao território',
            location: {
                center: { lon: -43.25119, lat: -22.88566 },
                zoom: 14.98,
                pitch: 8.50,
                bearing: -34.70
            },
            onChapterEnter: [

                {
                    layer: 'linhas-onibus',
                    opacity: .9,
                },
                {
                    layer: 'parada-de-onibus',
                    opacity: .9,
                }

            ],
            onChapterExit: [

                {
                    layer: 'parada-de-onibus',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'onibus1',
            alignment: 'left',
            title: 'SPPO | Cobertura das linhas',
            image: '',
            description: 'O entorno imediato do bairro conta com 62 linhas de ônibus',
            location: {
                center: { lon: -43.41869, lat: -22.95622 },
                zoom: 10.85,
                pitch: 27.00,
                bearing: -2.79
            },
            onChapterEnter: [{
                layer: 'linhas-onibus',
                opacity: .9,
            }],
            onChapterExit: [

                {
                    layer: 'linhas-onibus',
                    opacity: 0,
                }

            ]
        },
        {
            id: 'trem',
            alignment: 'right',
            title: 'Supervia | Estação: Jacarezinho',
            image: 'imagens/trem.png',
            description: 'A estação fica em uma das saídas da comunidade. Acima os horários de maior movimentação segundo o Google Maps',
            location: {
                center: { lon: -43.25316, lat: -22.88505 },
                zoom: 16.67,
                pitch: 30.00,
                bearing: 14.11
            },
            onChapterEnter: [

                {
                    layer: 'linhas-trem',
                    opacity: .9,
                },
                {
                    layer: 'estacoes-trem',
                    opacity: .9,
                }
            ],
            onChapterExit: [

                {
                    layer: 'linhas-trem',
                    opacity: 0,
                },
                {
                    layer: 'estacoes-trem',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'trem1',
            alignment: 'left',
            title: 'Supervia | Cobertura das linhas',
            description: 'O entorno imediato do bairro conta com 2 linhas: Linha Saracuruna: Central do Brasil → Gramacho e Linha Belford Roxo: Central do Brasil → Belford Roxo',
            location: {
                center: { lon: -43.41869, lat: -22.95622 },
                zoom: 10.85,
                pitch: 27.00,
                bearing: -2.79
            },
            onChapterEnter: [

                {
                    layer: 'linhas-trem',
                    opacity: .9,
                },
                {
                    layer: 'estacoes-trem',
                    opacity: .9,
                }
            ],
            onChapterExit: [

                {
                    layer: 'linhas-trem',
                    opacity: 0,
                },
                {
                    layer: 'estacoes-trem',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'metro',
            alignment: 'right',
            title: 'Metro Rio | Estação: Maria da Graça',
            image: 'imagens/metro.png',
            description: 'A estação fica mais afastada da comunidade. Acima os horários de maior movimentação segundo o Google Maps',
            location: {
                center: { lon: -43.25733, lat: -22.88117 },
                zoom: 16.30,
                pitch: 12.50,
                bearing: -30.40
            },
            onChapterEnter: [

                {
                    layer: 'linhas-metro',
                    opacity: .9,
                },
                {
                    layer: 'estacoes-metro',
                    opacity: .9,
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'metro1',
            alignment: 'left',
            title: 'Metro Rio | Cobertura da linha L2',
            description: 'O entorno imediato do bairro conta com 1 linha de metrô (L2) ',
            location: {
                center: { lon: -43.41869, lat: -22.95622 },
                zoom: 10.85,
                pitch: 27.00,
                bearing: -2.79
            },
            onChapterEnter: [{
                    layer: 'linhas-metro',
                    opacity: 0,
                },
                {
                    layer: 'estacoes-metro',
                    opacity: 0,
                }
            ],
            onChapterExit: [

                {
                    layer: 'linhas-metro',
                    opacity: 0,
                },
                {
                    layer: 'estacoes-metro',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'vans',
            alignment: 'right',
            title: 'SPLT | Linhas no entorno',
            image: '',
            description: 'O entorno imediato do bairro conta com 12 linhas de vans',
            location: {
                center: { lon: -43.25119, lat: -22.88566 },
                zoom: 14.98,
                pitch: 8.50,
                bearing: -34.70
            },
            onChapterEnter: [

                {
                    layer: 'linhas-vans',
                    opacity: .9,
                }
            ],
            onChapterExit: [{
                layer: 'linhas-vans',
                opacity: .0,
            }]
        },
        {
            id: 'vans1',
            alignment: 'right',
            title: 'SPTL | Cobertura das linhas',
            image: '',
            description: 'O entorno imediato do bairro conta com 12 linhas de vans',
            location: {
                center: { lon: -43.23056, lat: -22.87850 },
                zoom: 11.97,
                pitch: 16.00,
                bearing: 3.40
            },
            onChapterEnter: [

                {
                    layer: 'linhas-vans',
                    opacity: .9,
                }
            ],
            onChapterExit: [

                {
                    layer: 'linhas-vans',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'escolas',
            alignment: 'left',
            title: 'Escolas',
            image: '',
            description: 'CIEP Vinicius de Moraes e Espaço de Desenvolvimento Infantil Padre Nelson',
            location: {
                center: { lon: -43.26218, lat: -22.89160 },
                zoom: 14.99,
                pitch: 0.00,
                bearing: -40.00
            },
            onChapterEnter: [

                {
                    layer: 'escolas',
                    opacity: .9,
                }
            ],
            onChapterExit: [

                {
                    layer: 'escolas',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'creches',
            alignment: 'left',
            title: 'Creches',
            image: '',
            description: 'Creche Municipal Geralda de Jesus Aleixo, Creche Municipal da Comunidade do Jacarezinho e Creche Municipal Tia Andreza.',
            location: {
                center: { lon: -43.26218, lat: -22.89160 },
                zoom: 14.99,
                pitch: 0.00,
                bearing: -40.00
            },
            onChapterEnter: [

                {
                    layer: 'creches1',
                    opacity: .9,
                },
                {
                    layer: 'creches',
                    opacity: .9,
                }
            ],
            onChapterExit: [

                {
                    layer: 'creches1',
                    opacity: 0,
                },
                {
                    layer: 'creches',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'saude',
            alignment: 'left',
            title: 'Unidades de Saúde',
            image: '',
            description: 'SMS CMS RENATO ROCCO, SMS RIO UPA 24H MANGUINHOS e SMS CF ANTHIDIO DIAS DA SILVEIRA',
            location: {
                center: { lon: -43.26218, lat: -22.89160 },
                zoom: 14.99,
                pitch: 0.00,
                bearing: -40.00
            },
            onChapterEnter: [

                {
                    layer: 'unidades-de-saude',
                    opacity: .9,
                }
            ],
            onChapterExit: [

                {
                    layer: 'unidades-de-saude',
                    opacity: 0,
                }
            ]
        },
    ]
};