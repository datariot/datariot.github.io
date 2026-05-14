export type ProjectStatus = 'Public' | 'Private' | 'WIP';

export interface Project {
  number: string;
  name: string;
  pitch: string;
  marginalia?: string;
  stack: string;
  status: ProjectStatus;
  link?: string;
  linkLabel?: string;
  year: string;
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'forge',
    pitch:
      'Batteries-included Go framework for production microservices. DropWizard-inspired, opinionated about the boring parts.',
    stack: 'Go 1.25+',
    status: 'Public',
    link: 'https://github.com/datariot/forge',
    linkLabel: 'github.com/datariot/forge',
    year: '2025',
  },
  {
    number: '02',
    name: 'lore',
    pitch:
      'Structure-aware markdown indexing MCP server. No vectors. No LLM at retrieval. Just document structure.',
    stack: 'Go',
    status: 'Public',
    link: 'https://github.com/datariot/lore',
    linkLabel: 'github.com/datariot/lore',
    year: '2026',
  },
  {
    number: '03',
    name: 'Tokamak',
    pitch:
      'High-performance time-series database. InfluxDB line-protocol compatible. Rust, because the budget is nanoseconds.',
    stack: 'Rust 2024',
    status: 'Private',
    year: '2025',
  },
  {
    number: '04',
    name: 'murmuration',
    pitch:
      'Agent orchestration. Decomposes a use case or user story into agent-executable task DAGs. A build system, not a fleet cockpit.',
    stack: 'Go 1.25+',
    status: 'Private',
    year: '2026',
  },
  {
    number: '05',
    name: 'iron_viper',
    pitch:
      'Reverse-engineered client and bot for the slither.io protocol. Built to figure out what is actually on the wire.',
    stack: 'Rust 2024',
    status: 'Private',
    year: '2025',
  },
  {
    number: '06',
    name: 'coolbot-client',
    pitch:
      'Go client for CoolBot Pro walk-in cooler controllers. MQTT export discoverable by Home Assistant. The farm runs on this.',
    stack: 'Go',
    status: 'Public',
    link: 'https://github.com/datariot/coolbot-client',
    linkLabel: 'github.com/datariot/coolbot-client',
    year: '2025',
  },
];
