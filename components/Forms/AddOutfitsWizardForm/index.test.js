import React from 'react';
import { shallow } from 'enzyme';

import AddOutfitsWizardForm from './index';

describe('AddOutfitsWizardForm tests', () => {
  it('renders without crashing', () => {
    shallow(
      <AddOutfitsWizardForm
        title="test"
        initialValues={{}}
        maxCompletedSlide={0}
        validationSchema={{}}
        onSubmit={() => jest.func()}
        goToSlideIndex={() => jest.func()}
        onSubmitBtnClick={() => jest.func()}
        setCurrentSlideIndex={() => jest.func()}
        setMaxCompletedSlide={() => jest.func()}
      >
        <div>test</div>
      </AddOutfitsWizardForm>
    );
  });

  // it('renders title', () => {
  //   const wrapper = shallow(
  //     <AddOutfitsWizardForm
  //       title="test"
  //       initialValues={{}}
  //       validationSchema={{}}
  //       onSubmit={() => jest.func()}
  //     >
  //       <div>test</div>
  //     </AddOutfitsWizardForm>
  //   );

  //   expect(wrapper.find('[data-testid="title"]').text()).toEqual('test');
  // });
});
