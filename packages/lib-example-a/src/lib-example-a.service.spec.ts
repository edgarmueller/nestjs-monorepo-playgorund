import { LibExampleAService } from './lib-example-a.service';

describe('ExampleAService', () => {
  let service: LibExampleAService;

  beforeEach(() => {
    service = new LibExampleAService();
  });

  it('is defined', () => {
    expect(service).toBeDefined();
  });
});
