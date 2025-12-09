declare module '@apiverve/superheroname' {
  export interface superheronameOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface superheronameResponse {
    status: string;
    error: string | null;
    data: SuperheroNameGeneratorData;
    code?: number;
  }


  interface SuperheroNameGeneratorData {
      name:  string;
      style: string;
  }

  export default class superheronameWrapper {
    constructor(options: superheronameOptions);

    execute(callback: (error: any, data: superheronameResponse | null) => void): Promise<superheronameResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: superheronameResponse | null) => void): Promise<superheronameResponse>;
    execute(query?: Record<string, any>): Promise<superheronameResponse>;
  }
}
