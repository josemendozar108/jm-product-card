import * as ReactDOM from 'react-dom';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<div />, div); // Renderizar algo simple
    ReactDOM.unmountComponentAtNode(div); // Desmontar
  });
});
