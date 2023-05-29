import { PokemonPipeColorPipe } from './pokemon/pokemon-pipe-color.pipe';

describe('PokemonPipeColorPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonPipeColorPipe();
    expect(pipe).toBeTruthy();
  });
});
