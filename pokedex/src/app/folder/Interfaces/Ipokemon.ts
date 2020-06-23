export class IPokemonViewResult {
  count: number;
  next: string;
  previous: string;
  results: IPokemonView[];
}

export class IPokemonView {
  name: string;
  url: string;
  picture: string;
}
