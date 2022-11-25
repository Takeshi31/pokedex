import { Injectable } from '@angular/core';

import axios from 'axios';

import { Constants } from '../config/Constants';
import { IGeneralQueryParams } from '../interfaces/generalQueryParams.interface';

@Injectable({
  providedIn: 'root'
})
export class WrapperService {

  constructor() {
  }

  getUrlApi(): string {
    return `${Constants.URL_API_BASE}${Constants.API_VERSION}`;
  }

  async get(next: string): Promise<any> {
    try {
      let queryParams : IGeneralQueryParams = {
        limit: Constants.DEFAULT_ITEMS
      };

      if (next) {
        const urlParams = new URL(next);
        queryParams = {
          limit: parseInt(urlParams.searchParams.getAll('limit')[0]),
          offset: parseInt(urlParams.searchParams.getAll('offset')[0])
        };
      }

      const { data, status } = await axios.get<any>(
        `${this.getUrlApi()}${Constants.endpoints.list}`,
        {
          headers: {
            Accept: 'application/json',
          },
          params: queryParams
        },
      );  
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  async getByUrl(url: string): Promise<any> {
    try {
      const { data } = await axios.get<any>(
        url,
        {
          headers: {
            Accept: 'application/json',
          }
        },
      );
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  async getSpecies(id: string): Promise<any> {
    try {
      const { data } = await axios.get<any>(
        `${this.getUrlApi()}${Constants.endpoints.getSpecies}${id}`,
        {
          headers: {
            Accept: 'application/json',
          }
        },
      );
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        console.log('unexpected error: ', error);
      }
    }
  }

  async getGeneralInfo(id: string): Promise<any> {
    try {
      const { data } = await axios.get<any>(
        `${this.getUrlApi()}${Constants.endpoints.getGeneralInfo}${id}`,
        {
          headers: {
            Accept: 'application/json',
          }
        },
      );
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  async getPokemonsByName(name: string): Promise<any> {
    try {
      let { data } = await axios.get<any>(
        '../../assets/json/listPokemons.json',
        {
          headers: {
            Accept: 'application/json',
          }
        },
      );

      if (!name) {
        return {
          count: 1154,
          next: "https://pokeapi.co/api/v2/pokemon?offset=8&limit=8",
          previous: null,
          results: data.results.slice(0,8)
        }
      }

      const regex = new RegExp(`${name}`, 'i');
      const matchedSites = data.results.filter((result: { name: string; })  => result.name.match(regex));

      data = {
        count: 1154,
        next: "https://pokeapi.co/api/v2/pokemon?offset=8&limit=8",
        previous: null,
        results: matchedSites
      }
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }

  }

}
