import { ExampleAService } from './example-a.service';

describe('ExampleAService', () => {
  let service: ExampleAService;

  beforeEach(() => {
    service = new ExampleAService();
  });

  it('is defined', () => {
    expect(service).toBeDefined();
  });
});
