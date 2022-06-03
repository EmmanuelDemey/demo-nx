import { render } from '@testing-library/react';

import Model from './model';

describe('Model', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Model />);
    expect(baseElement).toBeTruthy();
  });
});
