export abstract class Constants {
  public static readonly URL_API_BASE = 'https://pokeapi.co';
  public static readonly API_VERSION = '/api/v2';
  public static readonly DEFAULT_ITEMS = 8;

  public static readonly endpoints = {
    get: '/pokemon',
    list: '/pokemon',
    getSpecies: '/pokemon-species/',
    getGeneralInfo: '/pokemon/'
  }

}
