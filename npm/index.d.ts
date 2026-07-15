declare module '@apiverve/superheroname' {
  export interface superheronameOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface superheronameResponse {
    status: string;
    error: string | null;
    data: SuperheroNameGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SuperheroNameGeneratorData {
      name:  null | string;
      style: null | string;
  }

  export default class superheronameWrapper {
    constructor(options: superheronameOptions);

    execute(callback: (error: any, data: superheronameResponse | null) => void): Promise<superheronameResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: superheronameResponse | null) => void): Promise<superheronameResponse>;
    execute(query?: Record<string, any>): Promise<superheronameResponse>;
  }
}
