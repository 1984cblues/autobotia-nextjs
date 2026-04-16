export type CityData = {
  slug: string;
  cityName: string;
  state: string;
  stateAcronym: string;
  populationInfo: string;
  mainSectors: string[];
  lat: number;
  lng: number;
};

export const topCities: CityData[] = [
  {
    slug: 'sao-paulo-sp',
    cityName: 'São Paulo',
    state: 'São Paulo',
    stateAcronym: 'SP',
    populationInfo: 'a maior metrópole financeira do país',
    mainSectors: ['Tecnologia', 'Serviços Financeiros', 'Saúde e Clínicas', 'Comércio Varejista'],
    lat: -23.5505,
    lng: -46.6333,
  },
  {
    slug: 'rio-de-janeiro-rj',
    cityName: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    stateAcronym: 'RJ',
    populationInfo: 'o segundo maior mercado do Brasil',
    mainSectors: ['Turismo', 'Serviços Especializados', 'Estética e Saúde', 'Gastronomia'],
    lat: -22.9068,
    lng: -43.1729,
  },
  {
    slug: 'belo-horizonte-mg',
    cityName: 'Belo Horizonte',
    state: 'Minas Gerais',
    stateAcronym: 'MG',
    populationInfo: 'um forte ecossistema de negócios e inovação',
    mainSectors: ['Startups e Tecnologia', 'Serviços Jurídicos', 'Engenharia', 'Comércio Local'],
    lat: -19.9167,
    lng: -43.9345,
  },
  {
    slug: 'curitiba-pr',
    cityName: 'Curitiba',
    state: 'Paraná',
    stateAcronym: 'PR',
    populationInfo: 'uma referência em planejamento e inovação',
    mainSectors: ['Software', 'Indústria Criativa', 'Serviços Médicos', 'Arquitetura e Urbanismo'],
    lat: -25.4284,
    lng: -49.2733,
  },
  {
    slug: 'porto-alegre-rs',
    cityName: 'Porto Alegre',
    state: 'Rio Grande do Sul',
    stateAcronym: 'RS',
    populationInfo: 'um dos mercados mais consolidados do Sul',
    mainSectors: ['Saúde Digital', 'Desenvolvimento de Software', 'Agronegócio', 'Serviços B2B'],
    lat: -30.0346,
    lng: -51.2177,
  },
  {
    slug: 'brasilia-df',
    cityName: 'Brasília',
    state: 'Distrito Federal',
    stateAcronym: 'DF',
    populationInfo: 'o centro do setor de serviços governamentais e corporativos',
    mainSectors: ['Serviços Corporativos', 'Advocacia', 'Consultoria e TI', 'Clínicas Especializadas'],
    lat: -15.7938,
    lng: -47.8827,
  },
  {
    slug: 'salvador-ba',
    cityName: 'Salvador',
    state: 'Bahia',
    stateAcronym: 'BA',
    populationInfo: 'a maior economia da região nordeste',
    mainSectors: ['Turismo e Gastronomia', 'Varejo', 'Construção Civil', 'Medicina'],
    lat: -12.9777,
    lng: -38.5016,
  },
  {
    slug: 'fortaleza-ce',
    cityName: 'Fortaleza',
    state: 'Ceará',
    stateAcronym: 'CE',
    populationInfo: 'um polo tecnológico em constante ascensão no cenário nacional',
    mainSectors: ['E-commerce', 'Tecnologia da Informação', 'Energias Renováveis', 'Turismo'],
    lat: -3.7172,
    lng: -38.5434,
  },
  {
    slug: 'recife-pe',
    cityName: 'Recife',
    state: 'Pernambuco',
    stateAcronym: 'PE',
    populationInfo: 'sede do Porto Digital e um expoente da inovação nordestina',
    mainSectors: ['Tecnologia e Inovação', 'Medicina Avançada', 'Serviços de Logística', 'Negócios B2B'],
    lat: -8.0476,
    lng: -34.8770,
  },
  {
    slug: 'goiania-go',
    cityName: 'Goiânia',
    state: 'Goiás',
    stateAcronym: 'GO',
    populationInfo: 'um mercado movido pelo forte desenvolvimento do agronegócio e serviços',
    mainSectors: ['Agronegócio e Agrotech', 'Saúde e Estética', 'Serviços Imobiliários', 'Comércio Atacadista'],
    lat: -16.6869,
    lng: -49.2648,
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return topCities.find((c) => c.slug === slug);
}
