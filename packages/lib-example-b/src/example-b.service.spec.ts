import { LibExampleBService } from './lib-example-b.service';

describe('LibExampleBService', () => {
  let service: LibExampleBService;

  beforeEach(() => {
    service = new LibExampleBService();
  });

  it('is defined', () => {
    expect(service).toBeDefined();
  });
});
